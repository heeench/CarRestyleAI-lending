import {rimColors} from './finishes.js';
import { BufferGeometry, Float32BufferAttribute, DoubleSide, Path, CylinderGeometry, ExtrudeGeometry, Group, Mesh, MeshPhysicalMaterial, Shape, TorusGeometry } from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const wheelAlloy = new MeshPhysicalMaterial({color:rimColors.original, metalness:.9,roughness:.3});
const steel = new MeshPhysicalMaterial({color:0x707277,metalness:.82,roughness:.38});
const carbon = new MeshPhysicalMaterial({color:0x24252a,metalness:.38,roughness:.36,clearcoat:.32,clearcoatRoughness:.32});

// Object-space twill stays continuous across UV seams on the bonnet.
carbon.onBeforeCompile = shader => {
  shader.vertexShader = 'varying vec2 carbonUV;\n' + shader.vertexShader.replace(
    '#include <begin_vertex>', '#include <begin_vertex>\ncarbonUV=position.xz*320.0;');
  shader.fragmentShader = 'varying vec2 carbonUV;\n' + shader.fragmentShader.replace(
    '#include <color_fragment>', `#include <color_fragment>
    vec2 yarn = mat2(.707,-.707,.707,.707)*carbonUV;
    float strand = mod(floor(yarn.x)+floor(yarn.y),4.0)<2.0 ? yarn.x : yarn.y;
    float detail = 1.0-smoothstep(.12,.85,max(fwidth(yarn.x),fwidth(yarn.y)));
    diffuseColor.rgb *= 1.0 + detail*.3*cos(strand*6.283185);`);
};

const barrelMaterial = new MeshPhysicalMaterial({color:0x51535a,metalness:.78,roughness:.43,side:DoubleSide});
const bellMaterial = new MeshPhysicalMaterial({color:0x42444a,metalness:.7,roughness:.45});
const rotorMaterial = new MeshPhysicalMaterial({color:0xb4b5b4,metalness:.63,roughness:.44});

// Fine concentric machining marks on the friction surface.
rotorMaterial.onBeforeCompile = shader => {
  shader.vertexShader = 'varying vec2 rotorFace;\n' + shader.vertexShader.replace(
    '#include <begin_vertex>', '#include <begin_vertex>\nrotorFace=position.xy;');
  shader.fragmentShader = 'varying vec2 rotorFace;\n' + shader.fragmentShader.replace(
    '#include <color_fragment>', `#include <color_fragment>
    float r = length(rotorFace);
    float marks = .065*cos(950.0*r) + .035*cos(1830.0*r);
    diffuseColor.rgb *= .85 + marks*(1.0-smoothstep(.001,.004,fwidth(r)));`);
};

function brakeAssembly(radius) {
  const group = new Group();
  const outer = radius * .86, inner = outer * .47;
  const ring = new Shape();
  ring.absarc(0,0,outer,0,Math.PI*2,false);
  const bore = new Path();
  bore.absarc(0,0,inner,0,Math.PI*2,true);
  ring.holes.push(bore);
  for(let sector=0; sector<20; sector++){
    for(let row=0; row<3; row++){
      const a=sector*Math.PI/10+row*.065;
      const r=outer*(.63+row*.12);
      const hole=new Path();
      hole.absarc(Math.cos(a)*r,Math.sin(a)*r,.0036,0,Math.PI*2,true);
      ring.holes.push(hole);
    }
  }
  const rotor=new Mesh(new ExtrudeGeometry(ring,{depth:.014,bevelEnabled:false,curveSegments:32}),rotorMaterial);
  rotor.rotation.y=Math.PI/2;
  rotor.position.x=.073;
  group.add(rotor);
  function cylinder(r,depth,x,material,open=false){
    const part=new Mesh(new CylinderGeometry(r,r,depth,80,1,open),material);
    part.rotation.z=Math.PI/2;part.position.x=x;group.add(part);
  }
  cylinder(radius-.006,.245,.073,barrelMaterial,true);
  cylinder(inner+.002,.084,.094,bellMaterial);
  const rivets=[];
  for(let i=0;i<10;i++){
    const a=i*Math.PI/5;
    const g=new CylinderGeometry(.0055,.0055,.007,6);
    g.rotateZ(Math.PI/2);g.translate(.139,Math.sin(a)*inner*.82,Math.cos(a)*inner*.82);
    rivets.push(g);
  }
  group.add(new Mesh(mergeGeometries(rivets),steel));
  rivets.forEach(g=>g.dispose());
  return group;
}

const wheelProfiles = {
  blade:   { count:5,  arms:[.10],       width:.030, dish:.034, twist:.08 },
  split:   { count:7,  arms:[-.16,.16],  width:.011, dish:.037, twist:.03 },
  mesh:    { count:10, arms:[-.29,.29],  width:.008, dish:.030, twist:.02 },
  turbine: { count:12, arms:[.38],       width:.019, dish:.028, twist:.18 },
};

function spokeBlank(radius, profile, arm, angle) {
  const positions = [], indices = [];
  const steps = 24;
  // A crowned face, two polished bevels and a deeper structural web.
  const section = [[1,-.75],[1.13,0],[1,.75],[.72,1],[-.6,1],[-1,.67],[-1,-.67],[-.6,-1],[.72,-1]];
  for (let row=0; row<=steps; row++) {
    const t = row/steps;
    const radial = .04 + (radius-.046)*t;
    const sweep = angle + arm*t*t + profile.twist*Math.sin(Math.PI*t);
    const x = .164 + profile.dish*(1-Math.cos(Math.PI*t))*.5;
    const width = profile.width*(1.28-.58*Math.sin(Math.PI*t));
    const thickness = .014-.007*t;
    for (const [depth,side] of section) {
      const lateral = side*width;
      positions.push(x+depth*thickness, radial*Math.cos(sweep)-lateral*Math.sin(sweep),
        radial*Math.sin(sweep)+lateral*Math.cos(sweep));
    }
    if (row===steps) break;
    for (let j=0; j<section.length; j++) {
      const a=row*section.length+j, b=row*section.length+(j+1)%section.length;
      indices.push(a,a+section.length,b+section.length,a,b+section.length,b);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions,3));
  geometry.setIndex(indices); geometry.computeVertexNormals();
  return geometry;
}

function forgedWheel(radius, design) {
  const group=new Group();
  const profile=wheelProfiles[design];
  const spokes=[];
  for(let i=0;i<profile.count;i++){
    for(const arm of profile.arms) spokes.push(spokeBlank(radius,profile,arm,i*2*Math.PI/profile.count));
  }
  group.add(new Mesh(mergeGeometries(spokes),wheelAlloy));
  spokes.forEach(g=>g.dispose());

  function ring(r,section,x,material) {
    const mesh=new Mesh(new TorusGeometry(r,section,12,128),material);
    mesh.rotation.y=Math.PI/2;mesh.position.x=x;group.add(mesh);
  }
  function hub(front,back,depth,x,sides,material) {
    const mesh=new Mesh(new CylinderGeometry(front,back,depth,sides),material);
    mesh.rotation.z=-Math.PI/2;mesh.position.x=x;group.add(mesh);
    return mesh;
  }
  // Stepped bead seat and a narrow machined edge catch different reflections.
  ring(radius-.009,.010,.196,wheelAlloy);
  ring(radius-.014,.0024,.204,steel);
  ring(radius-.020,.002,.193,wheelAlloy);
  hub(.052,.064,.028,.158,64,wheelAlloy);
  hub(.041,.049,.010,.176,64,steel);
  hub(.032,.038,.024,.190,12,barrelMaterial);
  ring(.024,.0023,.203,steel);
  hub(.020,.022,.004,.203,48,bellMaterial);
  hub(.009,.014,.004,.206,6,steel);
  // The rubber valve and threaded metal cap sit inside the rim lip.
  const valve=hub(.0035,.005,.019,.194,12,bellMaterial);
  valve.position.y=-radius+.028;
  const cap=hub(.004,.004,.007,.206,12,steel);
  cap.position.y=valve.position.y;
  return group;
}
export function prepareParts(model,paint) {
  const wheels = model.children.filter(o=>/^Wheel_/.test(o.name));
  const chassis = model.children.filter(o=>!/^Wheel_|^Caliper_/.test(o.name)).map(o=>[o,o.position.y]);
  const hardware = new Map();
  const wheelSets = wheels.map(wheel=>{
    const r = wheel.name.startsWith('Wheel_R')?.277:.265;
    if (!hardware.has(r)) {
      const assembly=brakeAssembly(r);
      const variants=Object.fromEntries(Object.keys(wheelProfiles).map(key=>[key,forgedWheel(r,key)]));
      hardware.set(r,{assembly,variants});
    }
    const template=hardware.get(r);
    wheel.add(template.assembly.clone());
    const variants = {};
    for(const [key,source] of Object.entries(template.variants)) {
      const group = source.clone();
      group.visible=false; wheel.add(group); variants[key]=group;
    }
    return {wheel,variants};
  });
  const bonnet=model.getObjectByName('Bonnet_BodyShell');
  const original=bonnet.geometry;
  const sculpted=original.clone();
  const pos=sculpted.attributes.position;
  for(let i=0;i<pos.count;i++){
    const lateral=pos.getX(i), longitudinal=pos.getZ(i);
    const ridge=Math.exp(-Math.pow((Math.abs(lateral)-.34)/.085,2));
    const blend=Math.max(0,Math.sin(Math.PI*Math.min(1,Math.max(0,(longitudinal-.72)/1.39))));
    pos.setY(i,pos.getY(i)+.045*ridge*blend);
  }
  // Preserve the authored split normals across UV seams.
  sculpted.computeBoundingSphere();
  const stockWing=model.children.filter(o=>o.name.startsWith('AeroWing_'));
  const lipProfile=new Shape();
  lipProfile.moveTo(-.15,0);lipProfile.quadraticCurveTo(-.1,.045,-.14,.12);
  lipProfile.quadraticCurveTo(-.05,.084,.13,.013);lipProfile.lineTo(.12,-.012);lipProfile.closePath();
  const lipGeometry=new ExtrudeGeometry(lipProfile,{depth:1.38,steps:36,bevelSize:.009,bevelThickness:.009,bevelSegments:4});
  const vertices=lipGeometry.attributes.position;
  for(let i=0;i<vertices.count;i++){
    const side=Math.min(1,Math.abs(vertices.getZ(i)-.69)/.69);
    vertices.setX(i,vertices.getX(i)*(1-.48*side**2)+.16*side**2);
    vertices.setY(i,vertices.getY(i)*(1-.68*side**3)-.035*side**2);
  }
  lipGeometry.computeVertexNormals();
  const lip=new Mesh(lipGeometry,paint);
  lip.position.set(-1.95,.925,-.69);model.add(lip);lip.visible=false;
  const originalLipHeight=lip.position.y;
  return {
    wheel(key){for(const {wheel,variants} of wheelSets){
      wheel.material.userData.cutRim.value=key==='stock'?0:1;
      for(const [k,obj] of Object.entries(variants))obj.visible=k===key;
    }},
    hood(key){bonnet.geometry=key==='stock'?original:sculpted;bonnet.material=key==='carbon'?carbon:paint;},
    wing(key){stockWing.forEach(o=>o.visible=key==='stock');lip.visible=key==='duck';},
    stance(key){const drop={stock:0,sport:.025,track:.045}[key];chassis.forEach(([o,y])=>o.position.y=y-drop);lip.position.y=originalLipHeight-drop;},
    rim(key){wheelAlloy.color.setHex(rimColors[key]);}
  };
}
