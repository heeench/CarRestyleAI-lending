import {prepareCabin} from './cockpit.js';
import {wraps} from './finishes.js';
import {prepareParts, wheelAlloy} from './custom.js';
import {
  ACESFilmicToneMapping, Box3, CanvasTexture, Color, DirectionalLight, DoubleSide,
  EquirectangularReflectionMapping, PCFShadowMap, ShadowMaterial, HemisphereLight, Mesh, MeshBasicMaterial, MeshPhysicalMaterial, PerspectiveCamera,
  PlaneGeometry, PMREMGenerator, Scene, SRGBColorSpace, Vector3, WebGLRenderer,
} from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const audiencePose = { angle: 2.42, height: 1.87, radius: 7.2, targetX:0, targetZ:0, targetY:.6 };
const lookAt = new Vector3(0, .6, 0);
const clamp = (n, low, high) => Math.max(low, Math.min(high, n));

async function setLighting(renderer, scene) {
  const studio = new Scene();
  studio.background = new Color(.11, .12, .14);
  // Blender's bundled interior studio light gives curved panels an environment to reflect.
  let environment;
  try {
    environment = await new EXRLoader().loadAsync(import.meta.env.BASE_URL + 'config/interior.exr?v=2');
    environment.mapping = EquirectangularReflectionMapping;
    studio.background = environment;
    studio.backgroundRotation.y = .85;
    studio.backgroundIntensity = .62;
  } catch { /* The local softboxes also work on their own. */ }
  const lights = [
    { where: [1.0, 4, 1.5], size: [6.4, 2.1], color: [4.4, 4.6, 5.0] },
    { where: [-2.4, 3.1, -4], size: [5.2, .85], color: [2.9, 3.1, 3.6] },
    { where: [4, 1.9, 1.4], size: [3.8, .92], color: [3.1, 2.98, 2.73] },
    { where: [1.8, 1.8, -4.9], size: [5.4, 1.25], color: [1.65, 1.88, 2.2] },
    { where: [-4.0, .8, 2.7], size: [2.9, .6], color: [1, 1.2, 1.55] },
  ];
  for (const { where, size, color } of lights) {
    const card = new Mesh(new PlaneGeometry(...size), new MeshBasicMaterial({
      color: new Color(...color), side: DoubleSide, toneMapped: false,
    }));
    card.position.set(...where);
    card.lookAt(0, .65, 0);
    studio.add(card);
  }
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studio, .007).texture;
  scene.environmentIntensity = 1.05;
  pmrem.dispose();
  environment?.dispose();
  for (const light of studio.children) {
    light.geometry.dispose();
    light.material.dispose();
  }

  scene.add(new HemisphereLight(0xcbd8f0, 0x272322, .64));
  const fill = new DirectionalLight(0xf8f9ff, 1.65);
  fill.position.set(4.2, 6.5, -3.2);
  fill.castShadow=true;
  fill.shadow.mapSize.set(2048,2048);
  Object.assign(fill.shadow.camera,{left:-3.3,right:3.3,top:2.7,bottom:-2.7,near:.3,far:16});
  fill.shadow.camera.updateProjectionMatrix();
  fill.shadow.normalBias=.009;
  fill.shadow.bias=-.00018;
  scene.add(fill);
  const floor=new Mesh(new PlaneGeometry(16,16),new ShadowMaterial({opacity:.19,depthWrite:false}));
  floor.rotation.x=-Math.PI/2;
  floor.position.y=-.012;
  floor.receiveShadow=true;
  scene.add(floor);
}

function groundShadow() {
  const textureSource = document.createElement('canvas');
  textureSource.width = 192;
  textureSource.height = 192;
  const ctx = textureSource.getContext('2d');
  const glow = ctx.createRadialGradient(96, 96, 20, 96, 96, 96);
  glow.addColorStop(0, 'rgba(0,0,0,.94)');
  glow.addColorStop(.45, 'rgba(0,0,0,.68)');
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 192, 192);
  const shadow = new Mesh(new PlaneGeometry(6.05, 3.65), new MeshBasicMaterial({
    map: new CanvasTexture(textureSource), opacity: .92, transparent: true,
    depthWrite: false, toneMapped: false,
  }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -.017;
  return shadow;
}

export async function createShowroom(container, motion, onError) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  const context = canvas.getContext('webgl2', { alpha: true, antialias: true });
  if (!context) throw new Error('WebGL 2 unavailable');
  const renderer = new WebGLRenderer({
    canvas, context, alpha: true, antialias: true, powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = .95;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(24, 1, .1, 42);
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=PCFShadowMap;
  renderer.shadowMap.autoUpdate=false;
  const lightingReady=setLighting(renderer,scene);
  scene.add(groundShadow());

  const draco = new DRACOLoader();
  draco.setDecoderPath(import.meta.env.BASE_URL + 'config/draco/').setWorkerLimit(2);
  const loader = new GLTFLoader().setDRACOLoader(draco);
  let model;
  try {
    const [asset]=await Promise.all([loader.loadAsync(import.meta.env.BASE_URL + 'config/gt3.glb?v=10'),lightingReady]);
    model=asset.scene;
  } finally {
    draco.dispose();
  }

  const box = new Box3().setFromObject(model);
  const center = box.getCenter(new Vector3());
  model.position.set(-center.x, -box.min.y, -center.z);
  const paint = new MeshPhysicalMaterial({envMapIntensity:1.04});
  const silverGrain = {value:1};
  paint.onBeforeCompile = shader => {
    shader.uniforms.silverGrain = silverGrain;
    shader.vertexShader = 'varying vec3 surfacePoint;\n' + shader.vertexShader.replace(
      '#include <project_vertex>', '#include <project_vertex>\nsurfacePoint=(modelMatrix*vec4(transformed,1.)).xyz;');
    shader.fragmentShader = 'uniform float silverGrain; varying vec3 surfacePoint;\n' + shader.fragmentShader.replace(
      '#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
      vec3 grain=surfacePoint*620.;
      float detail=1.-smoothstep(.25,1.,length(fwidth(grain)));
      float flake=fract(sin(dot(floor(grain),vec3(12.9898,78.233,37.719)))*43758.5453);
      roughnessFactor+=silverGrain*detail*.065*(flake-.5);`);
  };
  function applyFinish(key) {
    const wrap=wraps[key];
    paint.metalness=wrap.metalness ?? .76;
    paint.roughness=wrap.roughness ?? .22;
    paint.clearcoat=wrap.coat ?? 1;
    paint.clearcoatRoughness=paint.roughness*.62;
    paint.iridescence=wrap.shift ?? 0;
    paint.iridescenceIOR=1.42;
    paint.iridescenceThicknessRange=key==='jade'?[220,430]:[100,220];
    silverGrain.value=Number(key==='silver');
    paint.needsUpdate=true;
  }
  applyFinish('silver');
  paint.color.set(wraps.silver.color);
  const glass = new MeshPhysicalMaterial({
    color: 0x39434e, metalness: .07, roughness: .1, clearcoat: 1, transparent:true, opacity:.57, depthWrite:false,
    clearcoatRoughness: .16, envMapIntensity: .61,
  });

  const optics={
    HeadlampCover:new MeshPhysicalMaterial({color:0xe8f0fa,roughness:.065,metalness:0,opacity:.12,transparent:true,depthWrite:false,clearcoat:1}),
    Reflector:new MeshPhysicalMaterial({color:0xacb4be,metalness:.91,roughness:.21}),
    Projector:new MeshPhysicalMaterial({color:0x64798e,metalness:.55,roughness:.12,clearcoat:1})
  };
  let paintedPanels = 0;
  model.traverse((item) => {
    if (!item.isMesh) return;
    if (item.name === 'CarbonKit') {
      item.material.color.setHex(0x252629);
      item.material.roughness = .36;
    }
    if (/Wheel1G_Material/i.test(item.material.name)) {
      // The source mesh combines rubber and alloy. The axle is local X.
      const material = wheelAlloy.clone();
      material.color = wheelAlloy.color;
      item.material = material;
      const beadRadius = item.name.startsWith('Wheel_R') ? .277 : .265;
      material.userData.cutRim = {value:0};
      material.onBeforeCompile = shader => {
        shader.uniforms.cutRim = material.userData.cutRim;
        shader.vertexShader = 'varying vec2 wheelRadial;\n' + shader.vertexShader.replace(
          '#include <begin_vertex>', '#include <begin_vertex>\nwheelRadial = position.yz;');
        shader.fragmentShader = 'uniform float cutRim; varying vec2 wheelRadial;\n' + shader.fragmentShader.replace(
          '#include <color_fragment>', `#include <color_fragment>
          float rubber = smoothstep(${beadRadius}, ${beadRadius + .004}, length(wheelRadial));
          if(cutRim > .5 && rubber < .5) discard;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.012), rubber);`)
          .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, .86, rubber);')
          .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor *= 1.0 - rubber;');
      };
      material.customProgramCacheKey = () => 'wheel-' + beadRadius;
    }
    if (/Window_Material/.test(item.material.name)) item.material = glass;
    if (optics[item.material.name]) item.material=optics[item.material.name];
    if ((item.name === 'GlassInner' || item.name === 'Door_GlassInner')) item.visible = false;
    if (/^((?:Door_)?BodyShell|Part[1-4]|(?:Door_)?Trim|Bonnet_BodyShell|AeroWing_(?:BodyShell|Trim))$/.test(item.name) || /Paint_Material/i.test(item.material.name)) {
      item.material = paint;
      paintedPanels++;
    }
  });
  if (paintedPanels === 0) throw new Error('No paint panels in the 3D model');
  const cabin=prepareCabin(model);
  const parts = prepareParts(model,paint);
  model.traverse(part=>{
    if(!part.isMesh) return;
    part.castShadow=!part.material.transparent;
    part.receiveShadow=true;
    if(part.material.map) part.material.map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  });
  renderer.shadowMap.needsUpdate=true;
  scene.add(model);
  container.append(canvas);

  const pose = { ...audiencePose };
  const destination = { ...audiencePose };
  const finish = new Color(wraps.silver.color);
  const marker=container.querySelector('.door-dot');
  const handle=new Vector3(-.35,.73,-.86);
  const projection=new Vector3(), eye=new Vector3(), aim=new Vector3();
  const cabinLight=new HemisphereLight(0xfff5e8,0x414149,.52);
  scene.add(cabinLight);cabinLight.visible=false;
  let interior=false, progress=0, focus='steering';
  const views={
    steering:[[-.29,1.05,-.38],[.32,.78,-.28]],
    dashboard:[[-.32,1.03,-.33],[.54,.79,-.06]],
    selector:[[-.26,.98,-.32],[.10,.54,0]],
    seat:[[.32,1.03,-.25],[-.29,.64,.34]],
    trim:[[.31,1.04,-.28],[-.29,.70,.34]]
  };
  let yaw=0,pitch=0;
  function panCabin(dx,dy){
    yaw=clamp(yaw+dx,-1.35,1.35);
    pitch=clamp(pitch+dy,-.62,.55);
    schedule();
  }
  const cabinEye=new Vector3(...views.steering[0]),cabinAim=new Vector3(...views.steering[1]);
  let exteriorFov=28;
  let flightStart = null;
  let drag = null;
  let request = 0;
  let last = 0;
  let hasContext = true;

  function schedule() {
    if (hasContext && request === 0) request = requestAnimationFrame(render);
  }

  function render(now) {
    request = 0;
    if (!hasContext) return;
    const elapsed=last ? Math.max(0,(now-last)/1000) : .02;
    const dt = last ? clamp((now - last) / 1000, .01, .08) : .02;
    last = now;
    let moving = false;

    if (flightStart !== null) {
      const t = clamp((now - flightStart) / 1550, 0, 1);
      const p = 1 - Math.pow(1 - t, 3.25);
      pose.angle = audiencePose.angle - .91 * (1 - p);
      pose.height = audiencePose.height + .89 * (1 - p);
      pose.radius = audiencePose.radius - .52 * (1 - p);
      moving = t < 1;
      if (!moving) flightStart = null;
    } else if (!drag) {
      for (const axis of ['angle', 'height', 'radius','targetX','targetZ','targetY']) {
        const delta = destination[axis] - pose[axis];
        if (motion.matches || Math.abs(delta) < .001) {
          pose[axis] = destination[axis];
        } else {
          pose[axis] += delta * (1 - Math.exp(-dt * 10));
          moving = true;
        }
      }
    }

    const colorRemaining = Math.abs(finish.r - paint.color.r) +
      Math.abs(finish.g - paint.color.g) + Math.abs(finish.b - paint.color.b);
    if (colorRemaining > .001 && !motion.matches) {
      paint.color.lerp(finish, 1 - Math.exp(-dt * 8));
      moving = true;
    } else {
      paint.color.copy(finish);
    }
    camera.position.set(pose.targetX + Math.sin(pose.angle) * pose.radius, pose.height, pose.targetZ + Math.cos(pose.angle) * pose.radius);
    lookAt.set(pose.targetX,pose.targetY,pose.targetZ);
    const previous=progress;
    progress=motion.matches?Number(interior):clamp(progress+(interior?1:-1)*elapsed/1.3,0,1);
    const door=Math.min(1,progress/.36,(1-progress)/.18);
    cabin.hinge.rotation.y=-1.1*door*door*(3-2*door);
    if(progress!==previous){renderer.shadowMap.needsUpdate=true;moving=true;}
    const t=clamp((progress-.30)/.70,0,1),mix=t*t*(3-2*t);
    const pair=views[focus];
    eye.set(...pair[0]);aim.set(...pair[1]).sub(eye);
    const distance=aim.length();
    const heading=Math.atan2(aim.z,aim.x)+yaw;
    const elevation=clamp(Math.asin(aim.y/distance)+pitch,-1.28,1.28);
    aim.set(Math.cos(heading)*Math.cos(elevation),Math.sin(elevation),Math.sin(heading)*Math.cos(elevation)).multiplyScalar(distance).add(eye);
    const follow=motion.matches?1:1-Math.exp(-dt*9);
    cabinEye.lerp(eye,follow);cabinAim.lerp(aim,follow);
    if(interior && cabinEye.distanceTo(eye)+cabinAim.distanceTo(aim)>.001)moving=true;
    camera.position.lerp(eye.copy(cabinEye).add(model.position),mix);
    lookAt.lerp(aim.copy(cabinAim).add(model.position),mix);
    camera.fov=exteriorFov+(70-exteriorFov)*mix;
    camera.near=.025;camera.updateProjectionMatrix();camera.lookAt(lookAt);camera.updateMatrixWorld();
    cabinLight.visible=progress>.3;
    projection.copy(handle).add(model.position).project(camera);
    marker.hidden=interior || progress>0 || camera.position.z>-.45 || Math.abs(projection.x)>.94 || Math.abs(projection.y)>.92;
    marker.style.left=(50+50*projection.x)+'%';marker.style.top=(50-50*projection.y)+'%';
    renderer.render(scene, camera);
    if (moving) schedule();
  }

  function fit() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width < 1 || height < 1) return;
    const aspect = width / height;
    const frameHeight = Math.max(2.37, 5.26 / aspect);
    camera.aspect = aspect;
    exteriorFov = 2 * Math.atan(frameHeight / (2 * audiencePose.radius)) * 180 / Math.PI;
    camera.updateProjectionMatrix();
    const detailed = container.closest('dialog[open]');
    const maxSide = Math.min(3840,renderer.capabilities.maxTextureSize);
    renderer.setPixelRatio(Math.min(detailed ? Infinity : Math.max(1.5,devicePixelRatio), maxSide/Math.max(width,height)));
    renderer.setSize(width, height, false);
    schedule();
  }

  function stopFlightAtCurrentPose() {
    if (flightStart !== null) {
      flightStart = null;
      Object.assign(destination, pose);
    }
  }

  function replay() {
    Object.assign(destination, audiencePose);
    if (motion.matches) {
      flightStart = null;
      Object.assign(pose, audiencePose);
    } else {
      flightStart = performance.now();
    }
    schedule();
  }

  container.addEventListener('pointerdown', (event) => {
    if (event.target.closest?.(".door-dot") || !event.isPrimary || event.button !== 0) return;
    stopFlightAtCurrentPose();
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, time: event.timeStamp, velocity: 0 };
    container.setPointerCapture(event.pointerId);
  });
  container.addEventListener('pointermove', (event) => {
    if (drag?.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if(interior){
      panCabin(-dx*.003,dy*.0027);
      drag.x=event.clientX;drag.y=event.clientY;
      return;
    }
    const delta = -dx * .0075;
    drag.velocity = delta / Math.max(8, event.timeStamp - drag.time);
    pose.angle += delta;
    pose.height = clamp(pose.height + dy * .009, .91, 3.8);
    Object.assign(destination, pose);
    Object.assign(drag, { x: event.clientX, y: event.clientY, time: event.timeStamp });
    schedule();
  });
  function endDrag(event) {
    if (drag?.id !== event.pointerId) return;
    if (!interior && !motion.matches && event.type === 'pointerup' && event.timeStamp - drag.time < 125) {
      destination.angle += clamp(drag.velocity * 135, -.44, .44);
    }
    drag = null;
    schedule();
  }
  container.addEventListener('pointerup', endDrag);
  container.addEventListener('pointercancel', endDrag);
  container.addEventListener('lostpointercapture', endDrag);

  container.addEventListener('keydown', (event) => {
    const keys = {
      ArrowLeft: ['angle', -.23], ArrowRight: ['angle', .23],
      ArrowUp: ['height', .23], ArrowDown: ['height', -.23],
    };
    const change = keys[event.key];
    if (!change) return;
    event.preventDefault();
    stopFlightAtCurrentPose();
    if(interior){
      panCabin(({ArrowLeft:-.09,ArrowRight:.09})[event.key]??0,({ArrowUp:.075,ArrowDown:-.075})[event.key]??0);
      return;
    }
    const [axis, delta] = change;
    destination[axis] += delta;
    destination.height = clamp(destination.height, .91, 3.8);
    schedule();
  });

  motion.addEventListener('change', () => {
    if (motion.matches) stopFlightAtCurrentPose();
    schedule();
  });
  const resize = new ResizeObserver(fit);
  resize.observe(container);
  canvas.addEventListener('webglcontextlost', () => {
    hasContext = false;
    cancelAnimationFrame(request);
    resize.disconnect();
    onError();
  });
  fit();
  cancelAnimationFrame(request);
  render(performance.now());
  return {
    view(group) {
      last=performance.now();
      interior=group==="cabin";
      yaw=pitch=0;container.classList.toggle("inside",interior);
      focus="steering";
      drag=null;
      stopFlightAtCurrentPose();
      Object.assign(destination,audiencePose);
      if(group==='wheels') Object.assign(destination,{angle:.27,radius:2.9,height:.83,targetX:1.18,targetZ:.75,targetY:.4});
      schedule();
    },
    setInterior(group,key){ cabin.update(group,key);if(focus!==group)yaw=pitch=0;focus=group;renderer.shadowMap.needsUpdate=true;schedule(); },
    setPart(group,key){ parts[group](key); renderer.shadowMap.needsUpdate=true; schedule(); },
    setRim(key) {
      parts.rim(key);
      schedule();
    },
    replay,
    setColor(key) {
      applyFinish(key);
      finish.set(wraps[key].color);
      schedule();
    },
  };
}
