import {upholsteryFinish} from './trim-material.js';
import {rallyWheel} from './rally-wheel.js';
import {Group, Vector3} from 'three';

export function prepareCabin(model) {
  const hinge=new Group();
  hinge.name='DriverDoorHinge';
  hinge.position.set(.62,.28,-.80);
  model.add(hinge);
  for(const node of [...model.children]) if(node.name.startsWith('Door_')) hinge.attach(node);

  const rally=rallyWheel();model.add(rally);
  const finishUpholstery=upholsteryFinish();
  const stockSteering=[], upholstery=new Set();
  const materials=new Map(), shapes=new Map();
  const point=new Vector3();
  const inverse=model.matrixWorld.clone().invert();
  model.updateMatrixWorld(true);
  model.traverse(mesh=>{
    if(!mesh.isMesh || !mesh.material.name.startsWith('Cabin')) return;
    const name=mesh.material.name;
    materials.set(name,mesh.material);
    if(name==='CabinSteering' || name==='CabinWheelBadge') stockSteering.push(mesh);
    if(['CabinBase','CabinLeather','CabinSeats','CabinFabric','CabinDoorFabric'].includes(name)) {
      const material=mesh.material.clone();mesh.material=material;
      finishUpholstery(material,inverse.clone().multiply(mesh.matrixWorld),name);
      upholstery.add(material);
    }
    if(name!=='CabinSeats' && name!=='CabinFabric') return;
    const base=mesh.geometry, sport=base.clone(), pos=sport.attributes.position;
    const toCar=inverse.clone().multiply(mesh.matrixWorld), fromCar=toCar.clone().invert();
    for(let i=0;i<pos.count;i++){
      point.fromBufferAttribute(pos,i).applyMatrix4(toCar);

      {
        const side=Math.abs(point.z)-.34;
        const bolster=Math.min(1,Math.max(0,(Math.abs(side)-.15)/.08));
        point.y+=.028*bolster;point.z-=Math.sign(point.z)*Math.sign(side)*.016*bolster;
      }
      point.applyMatrix4(fromCar);pos.setXYZ(i,point.x,point.y,point.z);
    }
    sport.computeBoundingSphere();shapes.set(mesh,{base,sport,name});
  });
  const grip=materials.get('CabinGrip');
  const metalGrip=grip.clone();
  metalGrip.map=null;
  metalGrip.metalness=.86;
  metalGrip.roughness=.24;
  const handles=[];
  model.traverse(mesh=>{if(mesh.material===grip)handles.push(mesh);});
  const settings={trim:'graphite',steering:'leather',selector:'factory',dashboard:'leather',seat:'touring'};
  const swatches={graphite:0x39393b,cognac:0x985f39,bordeaux:0x76283a};
  function update(group,key){
    settings[group]=key;
    for(const m of upholstery){
      m.color.setHex(swatches[settings.trim]);m.roughness=/Fabric/.test(m.name) || (m.name==='CabinSeats' && settings.seat==='bucket')?.86:.58;
    }
    const dash=materials.get('CabinDash'),wheel=materials.get('CabinSteering');
    if(dash){dash.color.setHex(settings.dashboard==='brushed'?0xbec1c3:0x929397);dash.metalness=settings.dashboard==='brushed'?.68:0;dash.roughness=settings.dashboard==='brushed'?.32:.85;}
    if(wheel){wheel.color.setHex(settings.steering==='sport'?0x82858c:0xc1c1c1);wheel.roughness=settings.steering==='sport'?.98:.57;}
    rally.visible=settings.steering==='sport';
    stockSteering.forEach(mesh=>mesh.visible=!rally.visible);
    for(const [mesh,{base,sport}] of shapes)mesh.geometry=settings.seat==='bucket'?sport:base;
    handles.forEach(mesh=>mesh.material=settings.selector==='factory'?grip:metalGrip);
    metalGrip.color.setHex(settings.selector==='bronze'?0xc39256:0xb4b7bc);
  }
  update('trim','graphite');
  return {hinge,update};
}
