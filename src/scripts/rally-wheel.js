import {CanvasTexture, RepeatWrapping, CylinderGeometry, ExtrudeGeometry, Group, Mesh, MeshStandardMaterial, Path, Shape, TorusGeometry} from 'three';

// A 330 mm aftermarket wheel, built in the plane of the steering column.
export function rallyWheel() {
  const wheel=new Group();
  wheel.position.set(.245,.797,-.34);
  wheel.rotation.order='ZYX';wheel.rotation.y=-Math.PI/2;wheel.rotation.z=-.28;
  const leather=new MeshStandardMaterial({color:0x232426,roughness:.91});
  const wrap=document.createElement('canvas');
  wrap.width=256;wrap.height=128;
  const ctx=wrap.getContext('2d');
  const grain=ctx.createImageData(256,128);
  for(let i=0;i<grain.data.length;i+=4){
    const noise=Math.sin(i*12.9898)*43758.5453;
    const tone=160+26*(noise-Math.floor(noise));
    grain.data.set([tone,tone,tone,255],i);
  }
  ctx.putImageData(grain,0,0);
  for(let row=0;row<6;row++)for(let col=0;col<10;col++){
    ctx.fillStyle='#525252';ctx.beginPath();
    ctx.ellipse((col+.5*(row%2))*25.6,6+row*21,2.1,2.6,0,0,Math.PI*2);ctx.fill();
  }
  for(const v of [24,102]){
    ctx.strokeStyle='#797979';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(0,v);ctx.lineTo(256,v);ctx.stroke();
    ctx.strokeStyle='#d3d3d3';ctx.lineWidth=2;ctx.setLineDash([6,4]);
    ctx.beginPath();ctx.moveTo(0,v+1);ctx.lineTo(256,v+1);ctx.stroke();ctx.setLineDash([]);
  }
  const surface=new CanvasTexture(wrap);
  surface.wrapS=RepeatWrapping;surface.repeat.x=12;surface.anisotropy=4;
  leather.map=surface;leather.bumpMap=surface;leather.bumpScale=.00024;leather.roughness=.68;
  const metal=new MeshStandardMaterial({color:0x787c83,roughness:.32,metalness:.86});
  const dark=new MeshStandardMaterial({color:0x24252a,roughness:.38,metalness:.76});
  const gold=new MeshStandardMaterial({color:0xd7ad65,roughness:.6});
  const rim=new Mesh(new TorusGeometry(.151,.0145,20,128),leather);wheel.add(rim);
  const stripe=new Mesh(new TorusGeometry(.151,.0149,20,12, .077),gold);
  stripe.rotation.z=Math.PI/2-.0385;wheel.add(stripe);
  for(const a of [-.16, Math.PI+.16,-Math.PI/2]){
    const shape=new Shape();
    shape.moveTo(.020,-.018);shape.lineTo(.146,-.009);
    shape.lineTo(.148,.011);shape.lineTo(.019,.025);shape.closePath();
    for(const [x,r] of [[.057,.009],[.09,.007],[.116,.005]]){
      const hole=new Path();hole.absarc(x,.002,r,0,2*Math.PI,true);shape.holes.push(hole);
    }
    const spoke=new Mesh(new ExtrudeGeometry(shape,{depth:.004,bevelSize:.001,bevelThickness:.001,bevelSegments:2}),metal);
    spoke.rotation.z=a;wheel.add(spoke);
  }
  function disc(radius,depth,z,mat,sides=48) {
    const mesh=new Mesh(new CylinderGeometry(radius,radius,depth,sides),mat);
    mesh.rotation.x=Math.PI/2;mesh.position.z=z;wheel.add(mesh);return mesh;
  }
  disc(.037,.037,-.010,dark);disc(.034,.007,.010,metal);disc(.018,.009,.017,leather);
  for(let i=0;i<6;i++){const bolt=disc(.003,.003,.016,dark,6);bolt.position.x=.026*Math.cos(i*Math.PI/3);bolt.position.y=.026*Math.sin(i*Math.PI/3);}
  wheel.visible=false;return wheel;
}
