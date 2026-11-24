import {RepeatWrapping, TextureLoader} from 'three';

export function upholsteryFinish() {
  const grain=new TextureLoader().load(import.meta.env.BASE_URL+'config/upholstery.webp');
  grain.wrapS=grain.wrapT=RepeatWrapping;
  grain.anisotropy=4;
  return (material,toCar,name)=>{
    const woven=name==='CabinFabric' || name==='CabinDoorFabric';
    const blend=name==='CabinBase';
    material.metalness=0;
    material.onBeforeCompile=shader=>{
      shader.uniforms.grainAtlas={value:grain};
      shader.uniforms.toCar={value:toCar};
      shader.vertexShader='uniform mat4 toCar; varying vec3 carPoint; varying vec3 carNormal;\n'+shader.vertexShader.replace(
        '#include <begin_vertex>','#include <begin_vertex>\ncarPoint=(toCar*vec4(position,1.)).xyz; carNormal=normalize(mat3(toCar)*normal);');
      shader.fragmentShader='uniform sampler2D grainAtlas; varying vec3 carPoint; varying vec3 carNormal;\n'+shader.fragmentShader.replace(
        '#include <map_fragment>',`
        vec3 original=vec3(.55);
        #ifdef USE_MAP
          original=texture2D(map,vMapUv).rgb;
        #endif
        vec3 weights=pow(abs(normalize(carNormal)),vec3(5.));weights/=max(.001,dot(weights,vec3(1.)));
        vec3 p=carPoint*15.;
        float grain=dot(weights,vec3(texture2D(grainAtlas,p.yz).${woven?'g':'r'},texture2D(grainAtlas,p.xz).${woven?'g':'r'},texture2D(grainAtlas,p.xy).${woven?'g':'r'}));
        float mask=${blend?`smoothstep(.48,.64,abs(carPoint.z))*(1.-smoothstep(.85,1.01,carPoint.y))*smoothstep(.18,.34,carPoint.y)*smoothstep(-.8,-.53,carPoint.x)*(1.-smoothstep(.49,.75,carPoint.x))`:'1.'};
        float greenCoating=smoothstep(.08,.30,original.g-max(original.r,original.b));
        original=mix(original,vec3(.055,.095,.065)*(.55+.65*original.g),greenCoating);
        float shading=dot(original,vec3(.213,.715,.072));
        vec3 dyed=diffuseColor.rgb*(.36+.90*sqrt(shading))*(.87+.24*grain);
        diffuseColor.rgb=mix(original,dyed,mask);`)
        .replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
          roughnessFactor=clamp(roughnessFactor+mask*(grain-.55)*.22,.23,1.);`)
        .replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
          vec3 dp1=dFdx(-vViewPosition),dp2=dFdy(-vViewPosition);
          vec3 a=cross(dp2,normal),b=cross(normal,dp1);
          float det=dot(dp1,a);
          normal=normalize(max(abs(det),1.e-10)*normal-sign(det)*mask*${woven?'.00012':'.00019'}*(dFdx(grain)*a+dFdy(grain)*b));`);
    };
    material.customProgramCacheKey=()=>name;
  };
}
