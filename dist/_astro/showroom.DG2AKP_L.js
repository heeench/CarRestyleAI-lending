/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="attached",pc="detached";const Ot="srgb",Bt="srgb-linear",Ss="linear",bt="srgb";const za="300 es";function mc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _c(){const r=_r("canvas");return r.style.display="block",r}const Va={};function Ms(...r){const e="THREE."+r.shift();console.log(e,...r)}function hl(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function $e(...r){r=hl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function at(...r){r=hl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Fi(...r){const e=r.join(" ");e in Va||(Va[e]=!0,$e(...r))}function xc(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const vc={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wa=1234567;const fr=Math.PI/180,Bi=180/Math.PI;function gn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function wa(r,e){return(r%e+e)%e}function Sc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Mc(r,e,t){return r!==e?(t-r)/(e-r):0}function dr(r,e,t){return(1-t)*r+t*e}function yc(r,e,t,n){return dr(r,e,1-Math.exp(-t*n))}function Ec(r,e=1){return e-Math.abs(wa(r,e*2)-e)}function Tc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ac(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wc(r,e){return r+Math.random()*(e-r)}function Rc(r){return r*(.5-Math.random())}function Cc(r){r!==void 0&&(Wa=r);let e=Wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pc(r){return r*fr}function Lc(r){return r*Bi}function Ic(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Nc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Dc(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*h,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*p,o*c);break;case"YXY":r.set(l*p,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*p,o*u,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function As(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ra(r,e){if(e.constructor===Float32Array)return r;const t=As(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Ca(r,e){if(e.constructor===Float32Array)return r;const t=As(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const Fc={DEG2RAD:fr,RAD2DEG:Bi,generateUUID:gn,clamp:gt,euclideanModulo:wa,mapLinear:Sc,inverseLerp:Mc,lerp:dr,damp:yc,pingpong:Ec,smoothstep:Tc,smootherstep:bc,randInt:Ac,randFloat:wc,randFloatSpread:Rc,seededRandom:Cc,degToRad:Pc,radToDeg:Lc,isPowerOfTwo:Ic,ceilPowerOfTwo:Nc,floorPowerOfTwo:fl,setQuaternionFromProperEuler:Dc,normalize:Ca,denormalize:Ra};class Be{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a+0],p=s[a+1],_=s[a+2],M=s[a+3];if(h!==M||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+h*M;m<0&&(f=-f,p=-p,_=-_,M=-M,m=-m);let x=1-o;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);x=Math.sin(x*b)/w,o=Math.sin(o*b)/w,l=l*x+f*o,c=c*x+p*o,u=u*x+_*o,h=h*x+M*o}else{l=l*x+f*o,c=c*x+p*o,u=u*x+_*o,h=h*x+M*o;const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-o*p,e[t+2]=c*_+u*p+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new k,Xa=new Hn;class ht{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],M=i[0],m=i[3],x=i[6],b=i[1],w=i[4],y=i[7],I=i[2],C=i[5],S=i[8];return s[0]=a*M+o*b+l*I,s[3]=a*m+o*w+l*C,s[6]=a*x+o*y+l*S,s[1]=c*M+u*b+h*I,s[4]=c*m+u*w+h*C,s[7]=c*x+u*y+h*S,s[2]=f*M+p*b+_*I,s[5]=f*m+p*w+_*C,s[8]=f*x+p*y+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,_=t*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(i*c-u*n)*M,e[2]=(o*n-i*a)*M,e[3]=f*M,e[4]=(u*t-i*l)*M,e[5]=(i*s-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fs.makeScale(e,t)),this}rotate(e){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fs.makeRotation(-e)),this}translate(e,t){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fs=new ht,qa=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uc(){const r={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Ss:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Bt]:{primaries:e,whitePoint:n,transfer:Ss,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}const vt=Uc();function kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ui(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xi;class Oc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xi===void 0&&(xi=_r("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bc=0;class Pa{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Us(i[a].image)):s.push(Us(i[a]))}else s=Us(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Gc=0;const Os=new k;class zt extends mi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=zt.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=gn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Os).x}get height(){return this.source.getSize(Os).y}get depth(){return this.source.getSize(Os).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=300;zt.DEFAULT_ANISOTROPY=1;class Ct{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],M=l[2],m=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(p+1)/2,I=(x+1)/2,C=(u+f)/4,S=(h+M)/4,A=(_+m)/4;return w>y&&w>I?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=C/n,s=S/n):y>I?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=A/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=S/s,i=A/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-M)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kc extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new zt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dl extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hc extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class pt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,u,h,f,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,p,_,M,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,p,_,M,m){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=p,x[7]=_,x[11]=M,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/vi.setFromMatrixColumn(e,0).length(),s=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,_=o*u,M=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,M=c*h;t[0]=f+M*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,M=c*h;t[0]=f-M*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,_=o*u,M=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-f*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-M*h}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,Vc)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Vn.crossVectors(n,nn),Vn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Vn.crossVectors(n,nn)),Vn.normalize(),Vr.crossVectors(nn,Vn),i[0]=Vn.x,i[4]=Vr.x,i[8]=nn.x,i[1]=Vn.y,i[5]=Vr.y,i[9]=nn.y,i[2]=Vn.z,i[6]=Vr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],M=n[6],m=n[10],x=n[14],b=n[3],w=n[7],y=n[11],I=n[15],C=i[0],S=i[4],A=i[8],H=i[12],U=i[1],O=i[5],X=i[9],Q=i[13],F=i[2],Y=i[6],J=i[10],Z=i[14],me=i[3],$=i[7],oe=i[11],ue=i[15];return s[0]=a*C+o*U+l*F+c*me,s[4]=a*S+o*O+l*Y+c*$,s[8]=a*A+o*X+l*J+c*oe,s[12]=a*H+o*Q+l*Z+c*ue,s[1]=u*C+h*U+f*F+p*me,s[5]=u*S+h*O+f*Y+p*$,s[9]=u*A+h*X+f*J+p*oe,s[13]=u*H+h*Q+f*Z+p*ue,s[2]=_*C+M*U+m*F+x*me,s[6]=_*S+M*O+m*Y+x*$,s[10]=_*A+M*X+m*J+x*oe,s[14]=_*H+M*Q+m*Z+x*ue,s[3]=b*C+w*U+y*F+I*me,s[7]=b*S+w*O+y*Y+I*$,s[11]=b*A+w*X+y*J+I*oe,s[15]=b*H+w*Q+y*Z+I*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],M=e[7],m=e[11],x=e[15],b=l*p-c*f,w=o*p-c*h,y=o*f-l*h,I=a*p-c*u,C=a*f-l*u,S=a*h-o*u;return t*(M*b-m*w+x*y)-n*(_*b-m*I+x*C)+i*(_*w-M*I+x*S)-s*(_*y-M*C+m*S)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],M=e[13],m=e[14],x=e[15],b=t*o-n*a,w=t*l-i*a,y=t*c-s*a,I=n*l-i*o,C=n*c-s*o,S=i*c-s*l,A=u*M-h*_,H=u*m-f*_,U=u*x-p*_,O=h*m-f*M,X=h*x-p*M,Q=f*x-p*m,F=b*Q-w*X+y*O+I*U-C*H+S*A;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/F;return e[0]=(o*Q-l*X+c*O)*Y,e[1]=(i*X-n*Q-s*O)*Y,e[2]=(M*S-m*C+x*I)*Y,e[3]=(f*C-h*S-p*I)*Y,e[4]=(l*U-a*Q-c*H)*Y,e[5]=(t*Q-i*U+s*H)*Y,e[6]=(m*y-_*S-x*w)*Y,e[7]=(u*S-f*y+p*w)*Y,e[8]=(a*X-o*U+c*A)*Y,e[9]=(n*U-t*X-s*A)*Y,e[10]=(_*C-M*y+x*b)*Y,e[11]=(h*y-u*C-p*b)*Y,e[12]=(o*H-a*O-l*A)*Y,e[13]=(t*O-n*H+i*A)*Y,e[14]=(M*w-_*I-m*b)*Y,e[15]=(u*I-h*w+f*b)*Y,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,_=s*h,M=a*u,m=a*h,x=o*h,b=l*c,w=l*u,y=l*h,I=n.x,C=n.y,S=n.z;return i[0]=(1-(M+x))*I,i[1]=(p+y)*I,i[2]=(_-w)*I,i[3]=0,i[4]=(p-y)*C,i[5]=(1-(f+x))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(_+w)*S,i[9]=(m-b)*S,i[10]=(1-(f+M))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=vi.set(i[0],i[1],i[2]).length();const o=vi.set(i[4],i[5],i[6]).length(),l=vi.set(i[8],i[9],i[10]).length();s<0&&(a=-a),ln.copy(this);const c=1/a,u=1/o,h=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===2e3)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new k,ln=new pt,zc=new k(0,0,0),Vc=new k(1,1,1),Vn=new k,Vr=new k,nn=new k,Za=new pt,Ka=new Hn;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wc=0;const Ja=new k,Si=new Hn,Ln=new pt,Wr=new k,Qi=new k,Xc=new k,qc=new Hn,$a=new k(1,0,0),Qa=new k(0,1,0),ja=new k(0,0,1),eo={type:"added"},Yc={type:"removed"},Mi={type:"childadded",child:null},Bs={type:"childremoved",child:null};class Nt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new k,t=new ei,n=new Hn,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new ht}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis($a,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Ja.copy(e).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($a,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Qi,Wr,this.up):Ln.lookAt(Wr,Qi,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Ln),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yc),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,qc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zc={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),x=this._getHandJoint(c,M);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zc)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function ks(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=wa(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ks(a,s,e+1/3),this.g=ks(a,s,e),this.b=ks(a,s,e-1/3)}return vt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return vt.workingToColorSpace(Jt.copy(this),e),Math.round(gt(Jt.r*255,0,255))*65536+Math.round(gt(Jt.g*255,0,255))*256+Math.round(gt(Jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ot){vt.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Xr);const n=dr(Wn.h,Xr.h,t),i=dr(Wn.s,Xr.s,t),s=dr(Wn.l,Xr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new it;it.NAMES=ml;class gl extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new k,In=new k,Hs=new k,Nn=new k,yi=new k,Ei=new k,to=new k,zs=new k,Vs=new k,Ws=new k,Xs=new Ct,qs=new Ct,Ys=new Ct;class dn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){cn.subVectors(i,t),In.subVectors(n,t),Hs.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(In),l=cn.dot(Hs),c=In.dot(In),u=In.dot(Hs),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Xs.setScalar(0),qs.setScalar(0),Ys.setScalar(0),Xs.fromBufferAttribute(e,t),qs.fromBufferAttribute(e,n),Ys.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Xs,s.x),a.addScaledVector(qs,s.y),a.addScaledVector(Ys,s.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),In.subVectors(e,t),cn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;yi.subVectors(i,n),Ei.subVectors(s,n),zs.subVectors(e,n);const l=yi.dot(zs),c=Ei.dot(zs);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,i);const u=yi.dot(Vs),h=Ei.dot(Vs);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(yi,a);Ws.subVectors(e,s);const p=yi.dot(Ws),_=Ei.dot(Ws);if(_>=0&&p<=_)return t.copy(s);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ei,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return to.subVectors(s,i),o=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(to,o);const x=1/(m+M+f);return a=M*x,o=f*x,t.copy(n).addScaledVector(yi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),Yr.subVectors(this.max,ji),Ti.subVectors(e.a,ji),bi.subVectors(e.b,ji),Ai.subVectors(e.c,ji),Xn.subVectors(bi,Ti),qn.subVectors(Ai,bi),si.subVectors(Ti,Ai);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-si.z,si.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,si.z,0,-si.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-si.y,si.x,0];return!Zs(t,Ti,bi,Ai,Yr)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,Ti,bi,Ai,Yr))?!1:(Zr.crossVectors(Xn,qn),t=[Zr.x,Zr.y,Zr.z],Zs(t,Ti,bi,Ai,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new k,new k,new k,new k,new k,new k,new k,new k],un=new k,qr=new wn,Ti=new k,bi=new k,Ai=new k,Xn=new k,qn=new k,si=new k,ji=new k,Yr=new k,Zr=new k,ai=new k;function Zs(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ai.fromArray(r,s);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bn=Kc();function Kc(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Jc(r){Math.abs(r)>65504&&$e("DataUtils.toHalfFloat(): Value out of range."),r=gt(r,-65504,65504),Bn.floatView[0]=r;const e=Bn.uint32View[0],t=e>>23&511;return Bn.baseTable[t]+((e&8388607)>>Bn.shiftTable[t])}function $c(r){const e=r>>10;return Bn.uint32View[0]=Bn.mantissaTable[Bn.offsetTable[e]+(r&1023)]+Bn.exponentTable[e],Bn.floatView[0]}class De{static toHalfFloat(e){return Jc(e)}static fromHalfFloat(e){return $c(e)}}const kt=new k,Kr=new Be;let Qc=0;class en extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?As(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ra(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ca(e,this.array)}}class _l extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xl extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}const jc=new wn,er=new k,Ks=new k;class Rn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(Ks)),this.expandByPoint(er.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eu=0;const sn=new pt,Js=new Nt,wi=new k,rn=new wn,tr=new wn,qt=new k;class Yt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?xl:_l)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(rn.min,tr.min),rn.expandByPoint(qt),qt.addVectors(rn.max,tr.max),rn.expandByPoint(qt)):(rn.expandByPoint(tr.min),rn.expandByPoint(tr.max))}rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),qt.add(wi)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let H=0;H<n.count;H++)o[H]=new k,l[H]=new k;const u=new k,h=new k,f=new k,p=new Be,_=new Be,M=new Be,m=new k,x=new k;function b(H,U,O){c[H]=c[U]=c[O]=1,u.fromBufferAttribute(n,H),h.fromBufferAttribute(n,U),f.fromBufferAttribute(n,O),p.fromBufferAttribute(s,H),_.fromBufferAttribute(s,U),M.fromBufferAttribute(s,O),h.sub(u),f.sub(u),_.sub(p),M.sub(p);const X=1/(_.x*M.y-M.x*_.y);isFinite(X)&&(m.copy(h).multiplyScalar(M.y).addScaledVector(f,-_.y).multiplyScalar(X),x.copy(f).multiplyScalar(_.x).addScaledVector(h,-M.x).multiplyScalar(X),o[H].add(m),o[U].add(m),o[O].add(m),l[H].add(x),l[U].add(x),l[O].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let H=0,U=w.length;H<U;++H){const O=w[H],X=O.start,Q=O.count;for(let F=X,Y=X+Q;F<Y;F+=3)b(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new k,I=new k,C=new k,S=new k;function A(H){C.fromBufferAttribute(i,H),S.copy(C);const U=o[H];y.copy(U),y.sub(C.multiplyScalar(C.dot(U))).normalize(),I.crossVectors(S,U);const X=I.dot(l[H])<0?-1:1;a.setXYZW(H,y.x,y.y,y.z,X)}for(let H=0,U=n.count;H<U;++H)c[H]&&A(H);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let x=0;x<u;x++)f[_++]=c[p++]}return new en(f,u,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=no(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=no(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function no(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=gn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}const $t=new k;class ws{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?As(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ms("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ms("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ra(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ca(e,this.data.array)}}const $s=new k,tu=new k,nu=new ht;class Jn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$s.subVectors(n,t).cross(tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta($s),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nu.getNormalMatrix(e),i=this.coplanarPoint($s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let iu=0;class mn extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fn=new k,Qs=new k,Jr=new k,$r=new k;class Rs{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qs.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Jr),o=$r.dot(this.direction),l=-$r.dot(Jr),c=$r.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const M=1/u;h*=M,f*=M,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Qs).addScaledVector(Jr,f),p}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,x=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(l),I=Math.abs(c),C=Math.abs(u);let S,A,H,U,O,X,Q,F,Y,J,Z,me;if(y>=I&&y>=C?(H=l,X=h,Y=_,me=x,l>=0?(S=c,A=u,U=f,O=p,Q=M,F=m,J=b,Z=w):(S=u,A=c,U=p,O=f,Q=m,F=M,J=w,Z=b)):I>=C?(H=c,X=f,Y=M,me=b,c>=0?(S=u,A=l,U=p,O=h,Q=m,F=_,J=w,Z=x):(S=l,A=u,U=h,O=p,Q=_,F=m,J=x,Z=w)):(H=u,X=p,Y=m,me=w,u>=0?(S=l,A=c,U=h,O=f,Q=_,F=M,J=x,Z=b):(S=c,A=l,U=f,O=h,Q=M,F=_,J=b,Z=x)),H===0)return null;const $=S/H,oe=A/H,ue=1/H,Ne=U-$*X,qe=O-oe*X,ne=Q-$*Y,xe=F-oe*Y,be=J-$*me,Ye=Z-oe*me,he=be*xe-Ye*ne,Xe=Ne*Ye-qe*be,St=ne*qe-xe*Ne;if(i){if(he<0||Xe<0||St<0)return null}else if((he<0||Xe<0||St<0)&&(he>0||Xe>0||St>0))return null;const Ve=he+Xe+St;if(Ve===0)return null;const ot=ue*(he*X+Xe*Y+St*me);return(Ve>0?ot<0:ot>0)?null:this.at(ot/Ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qn extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const io=new pt,oi=new Rs,Qr=new Rn,ro=new k,jr=new k,es=new k,ts=new k,js=new k,ns=new k,so=new k,is=new k;class It extends Nt{constructor(e=new Yt,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(js.fromBufferAttribute(h,e),a?ns.addScaledVector(js,u):ns.addScaledVector(js.sub(t),u))}t.add(ns)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(Qr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Qr,ro)===null||oi.origin.distanceToSquared(ro)>(e.far-e.near)**2))&&(io.copy(s).invert(),oi.copy(e.ray).applyMatrix4(io),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const m=f[_],x=a[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,I=w;y<I;y+=3){const C=o.getX(y),S=o.getX(y+1),A=o.getX(y+2);i=rs(this,x,e,n,c,u,h,C,S,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,x=M;m<x;m+=3){const b=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);i=rs(this,a,e,n,c,u,h,b,w,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const m=f[_],x=a[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,I=w;y<I;y+=3){const C=y,S=y+1,A=y+2;i=rs(this,x,e,n,c,u,h,C,S,A),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,x=M;m<x;m+=3){const b=m,w=m+1,y=m+2;i=rs(this,a,e,n,c,u,h,b,w,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ru(r,e,t,n,i,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===0,o),l===null)return null;is.copy(o),is.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:r}}function rs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,jr),r.getVertexPosition(l,es),r.getVertexPosition(c,ts);const u=ru(r,e,t,n,jr,es,ts,so);if(u){const h=new k;dn.getBarycoord(so,jr,es,ts,h),i&&(u.uv=dn.getInterpolatedAttribute(i,o,l,c,h,new Be)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,l,c,h,new Be)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};dn.getNormal(jr,es,ts,f.normal),u.face=f,u.barycoord=h}return u}const nr=new Ct,ao=new Ct,oo=new Ct,su=new Ct,lo=new pt,ss=new k,ea=new Rn,co=new pt,ta=new Rs;class au extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ha,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ss),this.boundingBox.expandByPoint(ss)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ss),this.boundingSphere.expandByPoint(ss)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1&&(co.copy(i).invert(),ta.copy(e.ray).applyMatrix4(co),!(this.boundingBox!==null&&ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ha?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pc?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ao.fromBufferAttribute(i.attributes.skinIndex,e),oo.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(nr.copy(t),t.set(0,0,0,0)):(nr.set(t.x,t.y,t.z,1),t.set(0,0,0)),nr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=oo.getComponent(s);if(a!==0){const o=ao.getComponent(s);lo.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(su.copy(nr).applyMatrix4(lo),a)}}return t.isVector4&&(t.w=nr.w),t.applyMatrix4(this.bindMatrixInverse)}}class Sl extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xr extends zt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,u=1003,h,f){super(null,a,o,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uo=new pt,ou=new pt;class La{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ou;uo.multiplyMatrices(o,t[s]),uo.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new La(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xr(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&($e("Skeleton: No bone found with UUID:",s),a=new Sl),this.bones.push(a),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ys extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ri=new pt,ho=new pt,as=[],fo=new wn,lu=new pt,ir=new It,rr=new Rn;class cu extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),fo.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(fo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),rr.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ri),ho.multiplyMatrices(n,Ri),ir.matrixWorld=ho,ir.raycast(e,as);for(let a=0,o=as.length;a<o;a++){const l=as[a];l.instanceId=s,l.object=this,t.push(l)}as.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(i*this.count),i,this.count,1028,1015));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const li=new Rn,uu=new Be(.5,.5),os=new k;class vr{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],_=s[8],M=s[9],m=s[10],x=s[11],b=s[12],w=s[13],y=s[14],I=s[15];if(i[0].setComponents(c-a,p-u,x-_,I-b).normalize(),i[1].setComponents(c+a,p+u,x+_,I+b).normalize(),i[2].setComponents(c+o,p+h,x+M,I+w).normalize(),i[3].setComponents(c-o,p-h,x-M,I-w).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,p-f,x-m,I-y).normalize();else if(i[4].setComponents(c-l,p-f,x-m,I-y).normalize(),t===2e3)i[5].setComponents(c+l,p+f,x+m,I+y).normalize();else if(t===2001)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=uu.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(os.x=i.normal.x>0?e.max.x:e.min.x,os.y=i.normal.y>0?e.max.y:e.min.y,os.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const po=new pt;class Ia{constructor(){this.coordinateSystem=2e3,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];po.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new vr),n[i].setFromProjectionMatrix(po,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new vr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Ia().copy(this)}}class Ml extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Es=new k,Ts=new k,mo=new pt,sr=new Rs,ls=new Rn,na=new k,go=new k;class Na extends Nt{constructor(e=new Yt,t=new Ml){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Es.fromBufferAttribute(t,i-1),Ts.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Es.distanceTo(Ts);e.setAttribute("lineDistance",new Ht(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=s,e.ray.intersectsSphere(ls)===!1)return;mo.copy(i).invert(),sr.copy(e.ray).applyMatrix4(mo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){const x=u.getX(M),b=u.getX(M+1),w=cs(this,e,sr,l,x,b,M);w&&t.push(w)}if(this.isLineLoop){const M=u.getX(_-1),m=u.getX(p),x=cs(this,e,sr,l,M,m,_-1);x&&t.push(x)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=c){const x=cs(this,e,sr,l,M,M+1,M);x&&t.push(x)}if(this.isLineLoop){const M=cs(this,e,sr,l,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function cs(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Es.fromBufferAttribute(o,i),Ts.fromBufferAttribute(o,s),t.distanceSqToSegment(Es,Ts,na,go)>n)return;na.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(na);if(!(c<e.near||c>e.far))return{distance:c,point:go.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const _o=new k,xo=new k;class hu extends Na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)_o.fromBufferAttribute(t,i),xo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_o.distanceTo(xo);e.setAttribute("lineDistance",new Ht(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fu extends Na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yl extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vo=new pt,_a=new Rs,us=new Rn,hs=new k;class du extends Nt{constructor(e=new Yt,t=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=s,e.ray.intersectsSphere(us)===!1)return;vo.copy(i).invert(),_a.copy(e.ray).applyMatrix4(vo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,M=p;_<M;_++){const m=c.getX(_);hs.fromBufferAttribute(h,m),So(hs,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,M=p;_<M;_++)hs.fromBufferAttribute(h,_),So(hs,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function So(r,e,t,n,i,s,a){const o=_a.distanceSqToPoint(r);if(o<t){const l=new k;_a.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class El extends zt{constructor(e=[],t=301,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tl extends zt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gi extends zt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,u=1026,h=1){if(u!==1026&&u!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class bl extends Gi{constructor(e,t=1014,n=301,i,s,a=1003,o=1003,l,c=1026){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Al extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cr extends Yt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function _(M,m,x,b,w,y,I,C,S,A,H){const U=y/S,O=I/A,X=y/2,Q=I/2,F=C/2,Y=S+1,J=A+1;let Z=0,me=0;const $=new k;for(let oe=0;oe<J;oe++){const ue=oe*O-Q;for(let Ne=0;Ne<Y;Ne++){const qe=Ne*U-X;$[M]=qe*b,$[m]=ue*w,$[x]=F,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[x]=C>0?1:-1,u.push($.x,$.y,$.z),h.push(Ne/S),h.push(1-oe/A),Z+=1}}for(let oe=0;oe<A;oe++)for(let ue=0;ue<S;ue++){const Ne=f+ue+Y*oe,qe=f+ue+Y*(oe+1),ne=f+(ue+1)+Y*(oe+1),xe=f+(ue+1)+Y*oe;l.push(Ne,qe,xe),l.push(qe,ne,xe),me+=6}o.addGroup(p,me,H),p+=me,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ki extends Yt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[];let _=0;const M=[],m=n/2;let x=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function b(){const y=new k,I=new k;let C=0;const S=(t-e)/n;for(let A=0;A<=s;A++){const H=[],U=A/s,O=U*(t-e)+e;for(let X=0;X<=i;X++){const Q=X/i,F=Q*l+o,Y=Math.sin(F),J=Math.cos(F);I.x=O*Y,I.y=-U*n+m,I.z=O*J,h.push(I.x,I.y,I.z),y.set(Y,S,J).normalize(),f.push(y.x,y.y,y.z),p.push(Q,1-U),H.push(_++)}M.push(H)}for(let A=0;A<i;A++)for(let H=0;H<s;H++){const U=M[H][A],O=M[H+1][A],X=M[H+1][A+1],Q=M[H][A+1];(e>0||H!==0)&&(u.push(U,O,Q),C+=3),(t>0||H!==s-1)&&(u.push(O,X,Q),C+=3)}c.addGroup(x,C,0),x+=C}function w(y){const I=_,C=new Be,S=new k;let A=0;const H=y===!0?e:t,U=y===!0?1:-1;for(let X=1;X<=i;X++)h.push(0,m*U,0),f.push(0,U,0),p.push(.5,.5),_++;const O=_;for(let X=0;X<=i;X++){const F=X/i*l+o,Y=Math.cos(F),J=Math.sin(F);S.x=H*J,S.y=m*U,S.z=H*Y,h.push(S.x,S.y,S.z),f.push(0,U,0),C.x=Y*.5+.5,C.y=J*.5*U+.5,p.push(C.x,C.y),_++}for(let X=0;X<i;X++){const Q=I+X,F=O+X;y===!0?u.push(F,F+1,Q):u.push(F+1,F,Q),A+=3}c.addGroup(x,A,y===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,p=(a-u)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Be:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new k,i=[],s=[],a=[],o=new k,l=new pt;for(let p=0;p<=e;p++){const _=p/e;i[p]=this.getTangentAt(_,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(gt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Da extends Cn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Be){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pu extends Da{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fa(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,p*=u,i(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Mo=new k,yo=new k,ia=new Fa,ra=new Fa,sa=new Fa;class mu extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(yo.subVectors(i[0],i[1]).add(i[0]),c=yo);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Mo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),ia.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,M,m),ra.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,M,m),sa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ra.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),sa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ia.calc(l),ra.calc(l),sa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Eo(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function gu(r,e){const t=1-r;return t*t*e}function _u(r,e){return 2*(1-r)*r*e}function xu(r,e){return r*r*e}function pr(r,e,t,n){return gu(r,e)+_u(r,t)+xu(r,n)}function vu(r,e){const t=1-r;return t*t*t*e}function Su(r,e){const t=1-r;return 3*t*t*r*e}function Mu(r,e){return 3*(1-r)*r*r*e}function yu(r,e){return r*r*r*e}function mr(r,e,t,n,i){return vu(r,e)+Su(r,t)+Mu(r,n)+yu(r,i)}class wl extends Cn{constructor(e=new Be,t=new Be,n=new Be,i=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Be){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,i.x,s.x,a.x,o.x),mr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eu extends Cn{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(mr(e,i.x,s.x,a.x,o.x),mr(e,i.y,s.y,a.y,o.y),mr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rl extends Cn{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tu extends Cn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cl extends Cn{constructor(e=new Be,t=new Be,n=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Be){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(pr(e,i.x,s.x,a.x),pr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bu extends Cn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(pr(e,i.x,s.x,a.x),pr(e,i.y,s.y,a.y),pr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pl extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Eo(o,l.x,c.x,u.x,h.x),Eo(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Be().fromArray(i))}return this}}var xa=Object.freeze({__proto__:null,ArcCurve:pu,CatmullRomCurve3:mu,CubicBezierCurve:wl,CubicBezierCurve3:Eu,EllipseCurve:Da,LineCurve:Rl,LineCurve3:Tu,QuadraticBezierCurve:Cl,QuadraticBezierCurve3:bu,SplineCurve:Pl});class Au extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xa[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Sr extends Au{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rl(this.currentPoint.clone(),new Be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Cl(this.currentPoint.clone(),new Be(e,t),new Be(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new wl(this.currentPoint.clone(),new Be(e,t),new Be(n,i),new Be(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Da(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cs extends Sr{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Sr().fromJSON(i))}return this}}function wu(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Ll(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Iu(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,h=l;for(let f=t;f<i;f+=t){const p=r[f],_=r[f+1];p<o&&(o=p),_<l&&(l=_),p>u&&(u=p),_>h&&(h=_)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Mr(s,a,t,o,l,c,0),a}function Ll(r,e,t,n,i){let s;if(i===Vu(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=To(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=To(a/n|0,r[a],r[a+1],s);return s&&Hi(s,s.next)&&(Er(s),s=s.next),s}function fi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Hi(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Ou(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Cu(r,n,i,s):Ru(r)){e.push(l.i,r.i,c.i),Er(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Pu(fi(r),e),Mr(r,e,t,n,i,s,2)):a===2&&Lu(r,e,t,n,i,s):Mr(fi(r),e,t,n,i,s,1);break}}}function Ru(r){const e=r.prev,t=r,n=r.next;if(Dt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),h=Math.min(o,l,c),f=Math.max(i,s,a),p=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=p&&cr(i,o,s,l,a,c,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Cu(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Dt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,f=a.y,p=Math.min(o,l,c),_=Math.min(u,h,f),M=Math.max(o,l,c),m=Math.max(u,h,f),x=va(p,_,e,t,n),b=va(M,m,e,t,n);let w=r.prevZ,y=r.nextZ;for(;w&&w.z>=x&&y&&y.z<=b;){if(w.x>=p&&w.x<=M&&w.y>=_&&w.y<=m&&w!==i&&w!==a&&cr(o,u,l,h,c,f,w.x,w.y)&&Dt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=M&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&cr(o,u,l,h,c,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=x;){if(w.x>=p&&w.x<=M&&w.y>=_&&w.y<=m&&w!==i&&w!==a&&cr(o,u,l,h,c,f,w.x,w.y)&&Dt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=b;){if(y.x>=p&&y.x<=M&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&cr(o,u,l,h,c,f,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Pu(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Hi(n,i)&&Nl(n,t,t.next,i)&&yr(n,i)&&yr(i,n)&&(e.push(n.i,t.i,i.i),Er(t),Er(t.next),t=r=i),t=t.next}while(t!==r);return fi(t)}function Lu(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ku(a,o)){let l=Dl(a,o);a=fi(a,a.next),l=fi(l,l.next),Mr(a,e,t,n,i,s,0),Mr(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function Iu(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Ll(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Gu(c))}i.sort(Nu);for(let s=0;s<i.length;s++)t=Du(i[s],t);return t}function Nu(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Du(r,e){const t=Fu(r,e);if(!t)return e;const n=Dl(t,r);return fi(n,n.next),fi(t,t.next)}function Fu(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(Hi(r,t))return t;do{if(Hi(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Il(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);yr(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Uu(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Uu(r,e){return Dt(r.prev,r,e.prev)<0&&Dt(e.next,r,r.next)<0}function Ou(r,e,t,n){let i=r;do i.z===0&&(i.z=va(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Bu(i)}function Bu(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function va(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Gu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Il(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function cr(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Il(r,e,t,n,i,s,a,o)}function ku(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Hu(r,e)&&(yr(r,e)&&yr(e,r)&&zu(r,e)&&(Dt(r.prev,r,e.prev)||Dt(r,e.prev,e))||Hi(r,e)&&Dt(r.prev,r,r.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Hi(r,e){return r.x===e.x&&r.y===e.y}function Nl(r,e,t,n){const i=ds(Dt(r,e,t)),s=ds(Dt(r,e,n)),a=ds(Dt(t,n,r)),o=ds(Dt(t,n,e));return!!(i!==s&&a!==o||i===0&&fs(r,t,e)||s===0&&fs(r,n,e)||a===0&&fs(t,r,n)||o===0&&fs(t,e,n))}function fs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ds(r){return r>0?1:r<0?-1:0}function Hu(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Nl(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function yr(r,e){return Dt(r.prev,r,r.next)<0?Dt(r,e,r.next)>=0&&Dt(r,r.prev,e)>=0:Dt(r,e,r.prev)<0||Dt(r,r.next,e)<0}function zu(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Dl(r,e){const t=Sa(r.i,r.x,r.y),n=Sa(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function To(r,e,t,n){const i=Sa(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Er(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sa(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vu(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Wu{static triangulate(e,t,n=2){return wu(e,t,n)}}class Ni{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Ni.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];bo(e),Ao(n,e);let a=e.length;t.forEach(bo);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ao(n,t[l]);const o=Wu.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function bo(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ao(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Pr extends Yt{constructor(e=new Cs([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ht(i,3)),this.setAttribute("uv",new Ht(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Xu;let w,y=!1,I,C,S,A;if(x){w=x.getSpacedPoints(u),y=!0,f=!1;const le=x.isCatmullRomCurve3?x.closed:!1;I=x.computeFrenetFrames(u,le),C=new k,S=new k,A=new k}f||(m=0,p=0,_=0,M=0);const H=o.extractPoints(c);let U=H.shape;const O=H.holes;if(!Ni.isClockWise(U)){U=U.reverse();for(let le=0,Ee=O.length;le<Ee;le++){const Me=O[le];Ni.isClockWise(Me)&&(O[le]=Me.reverse())}}function Q(le){const Me=10000000000000001e-36;let Ge=le[0];for(let Le=1;Le<=le.length;Le++){const st=Le%le.length,K=le[st],He=K.x-Ge.x,Ke=K.y-Ge.y,We=He*He+Ke*Ke,B=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(Ge.x),Math.abs(Ge.y)),wt=Me*B*B;if(We<=wt){le.splice(st,1),Le--;continue}Ge=K}}Q(U),O.forEach(Q);const F=O.length,Y=U;for(let le=0;le<F;le++){const Ee=O[le];U=U.concat(Ee)}function J(le,Ee,Me){return Ee||at("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(Ee,Me)}const Z=U.length;function me(le,Ee,Me){let Ge,Le,st;const K=le.x-Ee.x,He=le.y-Ee.y,Ke=Me.x-le.x,We=Me.y-le.y,B=K*K+He*He,wt=K*We-He*Ke;if(Math.abs(wt)>Number.EPSILON){const ct=Math.sqrt(B),Mt=Math.sqrt(Ke*Ke+We*We),Te=Ee.x-He/ct,Rt=Ee.y+K/ct,Ze=Me.x-We/Mt,et=Me.y+Ke/Mt,L=((Ze-Te)*We-(et-Rt)*Ke)/(K*We-He*Ke);Ge=Te+K*L-le.x,Le=Rt+He*L-le.y;const E=Ge*Ge+Le*Le;if(E<=2)return new Be(Ge,Le);st=Math.sqrt(E/2)}else{let ct=!1;K>Number.EPSILON?Ke>Number.EPSILON&&(ct=!0):K<-Number.EPSILON?Ke<-Number.EPSILON&&(ct=!0):Math.sign(He)===Math.sign(We)&&(ct=!0),ct?(Ge=-He,Le=K,st=Math.sqrt(B)):(Ge=K,Le=He,st=Math.sqrt(B/2))}return new Be(Ge/st,Le/st)}const $=[];for(let le=0,Ee=Y.length,Me=Ee-1,Ge=le+1;le<Ee;le++,Me++,Ge++)Me===Ee&&(Me=0),Ge===Ee&&(Ge=0),$[le]=me(Y[le],Y[Me],Y[Ge]);const oe=[];let ue,Ne=$.concat();for(let le=0,Ee=F;le<Ee;le++){const Me=O[le];ue=[];for(let Ge=0,Le=Me.length,st=Le-1,K=Ge+1;Ge<Le;Ge++,st++,K++)st===Le&&(st=0),K===Le&&(K=0),ue[Ge]=me(Me[Ge],Me[st],Me[K]);oe.push(ue),Ne=Ne.concat(ue)}let qe;if(m===0)qe=Ni.triangulateShape(Y,O);else{const le=[],Ee=[];for(let Me=0;Me<m;Me++){const Ge=Me/m,Le=p*Math.cos(Ge*Math.PI/2),st=_*Math.sin(Ge*Math.PI/2)+M;for(let K=0,He=Y.length;K<He;K++){const Ke=J(Y[K],$[K],st);Xe(Ke.x,Ke.y,-Le),Ge===0&&le.push(Ke)}for(let K=0,He=F;K<He;K++){const Ke=O[K];ue=oe[K];const We=[];for(let B=0,wt=Ke.length;B<wt;B++){const ct=J(Ke[B],ue[B],st);Xe(ct.x,ct.y,-Le),Ge===0&&We.push(ct)}Ge===0&&Ee.push(We)}}qe=Ni.triangulateShape(le,Ee)}const ne=qe.length,xe=_+M;for(let le=0;le<Z;le++){const Ee=f?J(U[le],Ne[le],xe):U[le];y?(S.copy(I.normals[0]).multiplyScalar(Ee.x),C.copy(I.binormals[0]).multiplyScalar(Ee.y),A.copy(w[0]).add(S).add(C),Xe(A.x,A.y,A.z)):Xe(Ee.x,Ee.y,0)}for(let le=1;le<=u;le++)for(let Ee=0;Ee<Z;Ee++){const Me=f?J(U[Ee],Ne[Ee],xe):U[Ee];y?(S.copy(I.normals[le]).multiplyScalar(Me.x),C.copy(I.binormals[le]).multiplyScalar(Me.y),A.copy(w[le]).add(S).add(C),Xe(A.x,A.y,A.z)):Xe(Me.x,Me.y,h/u*le)}for(let le=m-1;le>=0;le--){const Ee=le/m,Me=p*Math.cos(Ee*Math.PI/2),Ge=_*Math.sin(Ee*Math.PI/2)+M;for(let Le=0,st=Y.length;Le<st;Le++){const K=J(Y[Le],$[Le],Ge);Xe(K.x,K.y,h+Me)}for(let Le=0,st=O.length;Le<st;Le++){const K=O[Le];ue=oe[Le];for(let He=0,Ke=K.length;He<Ke;He++){const We=J(K[He],ue[He],Ge);y?Xe(We.x,We.y+w[u-1].y,w[u-1].x+Me):Xe(We.x,We.y,h+Me)}}}be(),Ye();function be(){const le=i.length/3;if(f){let Ee=0,Me=Z*Ee;for(let Ge=0;Ge<ne;Ge++){const Le=qe[Ge];St(Le[2]+Me,Le[1]+Me,Le[0]+Me)}Ee=u+m*2,Me=Z*Ee;for(let Ge=0;Ge<ne;Ge++){const Le=qe[Ge];St(Le[0]+Me,Le[1]+Me,Le[2]+Me)}}else{for(let Ee=0;Ee<ne;Ee++){const Me=qe[Ee];St(Me[2],Me[1],Me[0])}for(let Ee=0;Ee<ne;Ee++){const Me=qe[Ee];St(Me[0]+Z*u,Me[1]+Z*u,Me[2]+Z*u)}}n.addGroup(le,i.length/3-le,0)}function Ye(){const le=i.length/3;let Ee=0;he(Y,Ee),Ee+=Y.length;for(let Me=0,Ge=O.length;Me<Ge;Me++){const Le=O[Me];he(Le,Ee),Ee+=Le.length}n.addGroup(le,i.length/3-le,1)}function he(le,Ee){let Me=le.length;for(;--Me>=0;){const Ge=Me;let Le=Me-1;Le<0&&(Le=le.length-1);for(let st=0,K=u+m*2;st<K;st++){const He=Z*st,Ke=Z*(st+1),We=Ee+Ge+He,B=Ee+Le+He,wt=Ee+Le+Ke,ct=Ee+Ge+Ke;Ve(We,B,wt,ct)}}}function Xe(le,Ee,Me){l.push(le),l.push(Ee),l.push(Me)}function St(le,Ee,Me){ot(le),ot(Ee),ot(Me);const Ge=i.length/3,Le=b.generateTopUV(n,i,Ge-3,Ge-2,Ge-1);lt(Le[0]),lt(Le[1]),lt(Le[2])}function Ve(le,Ee,Me,Ge){ot(le),ot(Ee),ot(Ge),ot(Ee),ot(Me),ot(Ge);const Le=i.length/3,st=b.generateSideWallUV(n,i,Le-6,Le-3,Le-2,Le-1);lt(st[0]),lt(st[1]),lt(st[3]),lt(st[1]),lt(st[2]),lt(st[3])}function ot(le){i.push(l[le*3+0]),i.push(l[le*3+1]),i.push(l[le*3+2])}function lt(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qu(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new xa[i.type]().fromJSON(i)),new Pr(n,e.options)}}const Xu={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Be(s,a),new Be(o,l),new Be(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],_=e[i*3+2],M=e[s*3],m=e[s*3+1],x=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Be(a,1-l),new Be(c,1-h),new Be(f,1-_),new Be(M,1-x)]:[new Be(o,1-l),new Be(u,1-h),new Be(p,1-_),new Be(m,1-x)]}};function qu(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class di extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],_=[],M=[],m=[];for(let x=0;x<u;x++){const b=x*f-a;for(let w=0;w<c;w++){const y=w*h-s;_.push(y,-b,0),M.push(0,0,1),m.push(w/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<o;b++){const w=b+c*x,y=b+c*(x+1),I=b+1+c*(x+1),C=b+1+c*x;p.push(w,y,C),p.push(y,I,C)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(M,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tr extends Yt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],h=[],f=new k,p=new k,_=new k;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let x=0;x<=i;x++){const b=x/i*s;p.x=(e+t*Math.cos(m))*Math.cos(b),p.y=(e+t*Math.cos(m))*Math.sin(b),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),_.subVectors(p,f).normalize(),u.push(_.x,_.y,_.z),h.push(x/i),h.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=i;m++){const x=(i+1)*M+m-1,b=(i+1)*(M-1)+m-1,w=(i+1)*(M-1)+m,y=(i+1)*M+m;l.push(x,b,y),l.push(b,w,y)}this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Yu extends mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function zi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(wo(i))i.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(wo(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Qt(r){const e={};for(let t=0;t<r.length;t++){const n=zi(r[t]);for(const i in n)e[i]=n[i]}return e}function wo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Zu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Fl(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Ku={clone:zi,merge:Qt};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(i.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qu extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ui extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ut extends ui{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Fi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Fi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ju extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eh extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function $n(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ur(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function th(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ro(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function nh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Vi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class ih extends Vi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),M=_*_,m=M*_,x=-f*m+2*f*M-f*_,b=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*_+1,w=(-1-p)*m+(1.5+p)*M+.5*_,y=p*m-p*M;for(let I=0;I!==o;++I)s[I]=x*a[u+I]+b*a[c+I]+w*a[l+I]+y*a[h+I];return s}}class rh extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class sh extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ah extends Vi{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const _=(n-t)/(i-t),M=1-_;for(let m=0;m!==o;++m)s[m]=a[c+m]*M+a[l+m]*_;return s}const f=o*2,p=e-1;for(let _=0;_!==o;++_){const M=a[c+_],m=a[l+_],x=p*f+_*2,b=h[x],w=h[x+1],y=e*f+_*2,I=u[y],C=u[y+1],S=lh(n,t,b,I,i);s[_]=Ul(S,M,w,C,m)}return s}}function Ul(r,e,t,n,i){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function oh(r,e,t,n,i){const s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function lh(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){const o=Ul(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;const l=oh(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class _n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$n(t,this.TimeBufferType),this.values=$n(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$n(e.times,Array),values:$n(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ur(e.settings)&&(n.settings={inTangents:$n(e.settings.inTangents,Array),outTangents:$n(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ah(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;ur(this.settings)&&(Co(this.settings.inTangents,e),Co(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ur(this.settings)&&(Po(this.settings.inTangents,e),Po(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){at("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){at("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&gc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){at("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){const M=t[h+_];if(M!==t[f+_]||M!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ur(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Co(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function Po(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=2301;class Wi extends _n{constructor(e,t,n){super(e,t,n)}}Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=2300;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ol extends _n{constructor(e,t,n,i){super(e,t,n,i)}}Ol.prototype.ValueTypeName="color";class br extends _n{constructor(e,t,n,i){super(e,t,n,i)}}br.prototype.ValueTypeName="number";class ch extends Vi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Ar extends _n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}}Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends _n{constructor(e,t,n){super(e,t,n)}}Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=2300;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends _n{constructor(e,t,n,i){super(e,t,n,i)}}bs.prototype.ValueTypeName="vector";class uh{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fh(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(_n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=th(l);l=Ro(l,1,u),c=Ro(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new br(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function hh(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return Ol;case"quaternion":return Ar;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function fh(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hh(r.type);if(r.times===void 0){const n=[],i=[];nh(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),ur(r.settings)&&(t.settings={inTangents:$n(r.settings.inTangents,Float32Array),outTangents:$n(r.settings.outTangents,Float32Array)}),t}const Gn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Lo(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Lo(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Lo(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ph=new dh;class ti{constructor(e){this.manager=e!==void 0?e:ph,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}ti.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class mh extends Error{constructor(e,t){super(e),this.response=t}}class wr extends ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Gn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:i});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let M=0;const m=new ReadableStream({start(x){b();function b(){h.read().then(({done:w,value:y})=>{if(w)x.close();else{M+=y.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:p});for(let C=0,S=u.length;C<S;C++){const A=u[C];A.onProgress&&A.onProgress(I)}x.enqueue(y),b()}},w=>{x.error(w)})}}});return new Response(m)}else throw new mh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Gn.add(`file:${e}`,c);const u=Un[e];delete Un[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ci=new WeakMap;class gh extends ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ci.get(a);h===void 0&&(h=[],Ci.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=_r("img");function l(){u(),t&&t(this);const h=Ci.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}Ci.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Gn.remove(`image:${e}`);const f=Ci.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(h)}Ci.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gn.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class _h extends ti{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new xr,o=new wr(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):at(u);return}s._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new xr;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:1001,e.wrapT=t.wrapT!==void 0?t.wrapT:1001,e.magFilter=t.magFilter!==void 0?t.magFilter:1006,e.minFilter=t.minFilter!==void 0?t.minFilter:1006,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=1008),t.mipmapCount===1&&(e.minFilter=1006),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Bl extends ti{constructor(e){super(e)}load(e,t,n,i){const s=new zt,a=new gh(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ps extends Nt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gl extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const aa=new pt,Io=new k,No=new k;class Ua{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Io.setFromMatrixPosition(e.matrixWorld),t.position.copy(Io),No.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(No),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(aa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ps=new k,ms=new Hn,Mn=new k;class kl extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ps,ms,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ps,ms,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ps,ms,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new k,Do=new Be,Fo=new Be;class jt extends kl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Fo),t.subVectors(Fo,Do)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xh extends Ua{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class vh extends Ps{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Sh extends Ua{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Mh extends Ps{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oa extends kl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yh extends Ua{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hl extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jn{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const oa=new WeakMap;class Eh extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{oa.has(a)===!0?(i&&i(oa.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),oa.set(l,c),Gn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Gn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Pi=-90,Li=1;class Ma extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(Pi,Li,e,t);i.layers=this.layers,this.add(i);const s=new jt(Pi,Li,e,t);s.layers=this.layers,this.add(s);const a=new jt(Pi,Li,e,t);a.layers=this.layers,this.add(a);const o=new jt(Pi,Li,e,t);o.layers=this.layers,this.add(o);const l=new jt(Pi,Li,e,t);l.layers=this.layers,this.add(l);const c=new jt(Pi,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Th extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Ba="\\[\\]\\.:\\/",bh=new RegExp("["+Ba+"]","g"),Ga="[^"+Ba+"]",Ah="[^"+Ba.replace("\\.","")+"]",wh=/((?:WC+[\/:])*)/.source.replace("WC",Ga),Rh=/(WCOD+)?/.source.replace("WCOD",Ah),Ch=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga),Ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga),Lh=new RegExp("^"+wh+Rh+Ch+Ph+"$"),Ih=["material","materials","bones","map"];class Nh{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bh,"")}static parseTrackName(e){const t=Lh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ih.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;at("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Nh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Uo(r,e,t,n){const i=Dh(n);switch(t){case 1021:return r*e;case 1028:return r*e/i.components*i.byteLength;case 1029:return r*e/i.components*i.byteLength;case 1030:return r*e*2/i.components*i.byteLength;case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case 1023:return r*e*4/i.components*i.byteLength;case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dh(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zl(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Fh(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],M=h[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const M=h[p];r.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,af=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Df=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ip=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Uh,alphahash_pars_fragment:Oh,alphamap_fragment:Bh,alphamap_pars_fragment:Gh,alphatest_fragment:kh,alphatest_pars_fragment:Hh,aomap_fragment:zh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:Zh,iridescence_fragment:Kh,bumpmap_pars_fragment:Jh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:jh,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:rf,color_vertex:sf,common:af,defaultnormal_vertex:of,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:uf,emissivemap_pars_fragment:hf,colorspace_fragment:ff,colorspace_pars_fragment:df,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Rf,envmap_vertex:xf,fog_vertex:vf,fog_pars_vertex:Sf,fog_fragment:Mf,fog_pars_fragment:yf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Tf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Af,lights_pars_begin:wf,lights_toon_fragment:Cf,lights_toon_pars_fragment:Pf,lights_phong_fragment:Lf,lights_phong_pars_fragment:If,lights_physical_fragment:Nf,lights_physical_pars_fragment:Df,lights_fragment_begin:Ff,lights_fragment_maps:Uf,lights_fragment_end:Of,lightprobes_pars_fragment:Bf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:zf,map_fragment:Vf,map_pars_fragment:Wf,map_particle_fragment:Xf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:$f,morphtarget_pars_vertex:Qf,morphtarget_vertex:jf,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:rd,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,opaque_fragment:ud,packing:hd,premultiplied_alpha_fragment:fd,project_vertex:dd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:vd,shadowmap_vertex:Sd,shadowmask_pars_fragment:Md,skinbase_vertex:yd,skinning_pars_vertex:Ed,skinning_vertex:Td,skinnormal_vertex:bd,specularmap_fragment:Ad,specularmap_pars_fragment:wd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Cd,transmission_fragment:Pd,transmission_pars_fragment:Ld,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:Dd,worldpos_vertex:Fd,background_vert:Ud,background_frag:Od,backgroundCube_vert:Bd,backgroundCube_frag:Gd,cube_vert:kd,cube_frag:Hd,depth_vert:zd,depth_frag:Vd,distance_vert:Wd,distance_frag:Xd,equirect_vert:qd,equirect_frag:Yd,linedashed_vert:Zd,linedashed_frag:Kd,meshbasic_vert:Jd,meshbasic_frag:$d,meshlambert_vert:Qd,meshlambert_frag:jd,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:rp,meshphong_frag:sp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:up,points_frag:hp,shadow_vert:fp,shadow_frag:dp,sprite_vert:pp,sprite_frag:mp},ke={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},bn={basic:{uniforms:Qt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Qt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Qt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Qt([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Qt([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new it(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Qt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Qt([ke.points,ke.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Qt([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Qt([ke.common,ke.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Qt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Qt([ke.sprite,ke.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Qt([ke.common,ke.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Qt([ke.lights,ke.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};bn.physical={uniforms:Qt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const gs={r:0,b:0,g:0},gp=new pt,Vl=new ht;Vl.set(-1,0,0,0,1,0,0,0,1);function _p(r,e,t,n,i,s){const a=new it(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function p(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const y=b.backgroundBlurriness>0;w=e.get(w,y)}return w}function _(b){let w=!1;const y=p(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(b,w){const y=p(w);y&&y.isCubeTexture?(c===void 0&&(c=new It(new Cr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:zi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vl),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==bt,(u!==y||h!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new It(new di(2,2),new pi({name:"BackgroundMaterial",uniforms:zi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(gs,Fl(r)),t.buffers.color.setClear(gs.r,gs.g,gs.b,w,s)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:M,dispose:x}}function xp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(O,X,Q,F,Y){let J=!1;const Z=h(O,F,Q,X);s!==Z&&(s=Z,c(s.object)),J=p(O,F,Q,Y),J&&_(O,F,Q,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(O,X,Q,F),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return r.createVertexArray()}function c(O){return r.bindVertexArray(O)}function u(O){return r.deleteVertexArray(O)}function h(O,X,Q,F){const Y=F.wireframe===!0;let J=n[X.id];J===void 0&&(J={},n[X.id]=J);const Z=O.isInstancedMesh===!0?O.id:0;let me=J[Z];me===void 0&&(me={},J[Z]=me);let $=me[Q.id];$===void 0&&($={},me[Q.id]=$);let oe=$[Y];return oe===void 0&&(oe=f(l()),$[Y]=oe),oe}function f(O){const X=[],Q=[],F=[];for(let Y=0;Y<t;Y++)X[Y]=0,Q[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Q,attributeDivisors:F,object:O,attributes:{},index:null}}function p(O,X,Q,F){const Y=s.attributes,J=X.attributes;let Z=0;const me=Q.getAttributes();for(const $ in me)if(me[$].location>=0){const ue=Y[$];let Ne=J[$];if(Ne===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Ne=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Ne=O.instanceColor)),ue===void 0||ue.attribute!==Ne||Ne&&ue.data!==Ne.data)return!0;Z++}return s.attributesNum!==Z||s.index!==F}function _(O,X,Q,F){const Y={},J=X.attributes;let Z=0;const me=Q.getAttributes();for(const $ in me)if(me[$].location>=0){let ue=J[$];ue===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor));const Ne={};Ne.attribute=ue,ue&&ue.data&&(Ne.data=ue.data),Y[$]=Ne,Z++}s.attributes=Y,s.attributesNum=Z,s.index=F}function M(){const O=s.newAttributes;for(let X=0,Q=O.length;X<Q;X++)O[X]=0}function m(O){x(O,0)}function x(O,X){const Q=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;Q[O]=1,F[O]===0&&(r.enableVertexAttribArray(O),F[O]=1),Y[O]!==X&&(r.vertexAttribDivisor(O,X),Y[O]=X)}function b(){const O=s.newAttributes,X=s.enabledAttributes;for(let Q=0,F=X.length;Q<F;Q++)X[Q]!==O[Q]&&(r.disableVertexAttribArray(Q),X[Q]=0)}function w(O,X,Q,F,Y,J,Z){Z===!0?r.vertexAttribIPointer(O,X,Q,Y,J):r.vertexAttribPointer(O,X,Q,F,Y,J)}function y(O,X,Q,F){M();const Y=F.attributes,J=Q.getAttributes(),Z=X.defaultAttributeValues;for(const me in J){const $=J[me];if($.location>=0){let oe=Y[me];if(oe===void 0&&(me==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),me==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),oe!==void 0){const ue=oe.normalized,Ne=oe.itemSize,qe=e.get(oe);if(qe===void 0)continue;const ne=qe.buffer,xe=qe.type,be=qe.bytesPerElement,Ye=xe===r.INT||xe===r.UNSIGNED_INT||oe.gpuType===1013;if(oe.isInterleavedBufferAttribute){const he=oe.data,Xe=he.isInterleavedBuffer===!0?he.stride:he.itemSize,St=oe.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ve=0;Ve<$.locationSize;Ve++)x($.location+Ve,he.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)m($.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Ve=0;Ve<$.locationSize;Ve++)w($.location+Ve,Ne/$.locationSize,xe,ue,Xe*be,(St+Ne/$.locationSize*Ve)*be,Ye)}else{if(oe.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)x($.location+he,oe.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let he=0;he<$.locationSize;he++)m($.location+he);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let he=0;he<$.locationSize;he++)w($.location+he,Ne/$.locationSize,xe,ue,Ne*be,Ne/$.locationSize*he*be,Ye)}}else if(Z!==void 0){const ue=Z[me];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv($.location,ue);break;case 3:r.vertexAttrib3fv($.location,ue);break;case 4:r.vertexAttrib4fv($.location,ue);break;default:r.vertexAttrib1fv($.location,ue)}}}}b()}function I(){H();for(const O in n){const X=n[O];for(const Q in X){const F=X[Q];for(const Y in F){const J=F[Y];for(const Z in J)u(J[Z].object),delete J[Z];delete F[Y]}}delete n[O]}}function C(O){if(n[O.id]===void 0)return;const X=n[O.id];for(const Q in X){const F=X[Q];for(const Y in F){const J=F[Y];for(const Z in J)u(J[Z].object),delete J[Z];delete F[Y]}}delete n[O.id]}function S(O){for(const X in n){const Q=n[X];for(const F in Q){const Y=Q[F];if(Y[O.id]===void 0)continue;const J=Y[O.id];for(const Z in J)u(J[Z].object),delete J[Z];delete Y[O.id]}}}function A(O){for(const X in n){const Q=n[X],F=O.isInstancedMesh===!0?O.id:0,Y=Q[F];if(Y!==void 0){for(const J in Y){const Z=Y[J];for(const me in Z)u(Z[me].object),delete Z[me];delete Y[J]}delete Q[F],Object.keys(Q).length===0&&delete n[X]}}}function H(){U(),a=!0,s!==i&&(s=i,c(s.object))}function U(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:H,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:S,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function vp(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==1023&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const A=S===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==1009&&S!==1015&&!A&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:I,samples:C}}function Mp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Jn,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,x=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,w=b*4;let y=x.clippingState||null;l.value=y,y=u(_,f,w,p);for(let I=0;I!==w;++I)y[I]=t[I];x.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const x=p+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<x)&&(m=new Float32Array(x));for(let w=0,y=p;w!==M;++w,y+=4)a.copy(h[w]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class ka extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cr(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new It(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ma(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Oo=256,yp=3,Ep=20,Wl=256,Xl=16,Tp=3,bp=new k,Ap=new it;class Rr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ma(1,10,null),this._boxMesh=new It(new Cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=bp}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Ap));const m=new Ma(n,i,u);return m.position.copy(o),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=_,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Oo,fl(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Oo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Bo(e,!1,!1),n=Math.log2(e)-yp;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Go()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=wp(),this._integrationMaterial=Rp());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Xl);for(let a=0;a<=n;a++){const o=Rr.lodToRoughness(a,n);if(a>n-Tp)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Wl*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cp());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function Bo(r,e,t){return new ka(r,{minFilter:1008,generateMipmaps:e,type:1016,colorSpace:Bt,depthBuffer:t})}function Lr(r,e,t){return new pi({name:r,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:1,blending:0,depthTest:!1,depthWrite:!1})}function wp(){return Lr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rp(){return Lr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cp(){return Lr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ep}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Go(){return Lr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ko(){return Lr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pp(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===303||p===304)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new ka(_.height);return M.fromEquirectangularTexture(r,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const p=f.mapping,_=p===303||p===304,M=p===301||p===302;if(_||M){let m=t.get(f);const x=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Rr(r)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const b=f.image;return _&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Rr(r)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===303?f.mapping=301:p===304&&(f.mapping=302),f}function l(f){let p=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&p++;return p===_}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Lp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fi("WebGLRenderer: "+n+" extension not supported."),i}}}function Ip(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete i[_.id],a.unregister(_);const M=s.get(_);M&&(e.remove(M),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,M){return i[M.id]!==void 0||(M.addEventListener("dispose",o),i[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(_){const M=_.attributes;for(const m in M)e.update(M[m],r.ARRAY_BUFFER)}function h(_){const M=_.index,m=_.attributes.position;let x=0;if(m===void 0)return;const b=M!==null?M.array.length:m.array.length/3-1,w=m.count>=65535?xl:_l,y=new w(Math.ceil(b/3)*6,1),I=y.array;if(M!==null){const S=M.array;x=M.version;for(let A=0,H=0;A<b;A+=3){const U=S[A+0],O=S[A+1],X=S[A+2];I[H++]=U,I[H++]=O,I[H++]=O,I[H++]=X,I[H++]=X,I[H++]=U}}else{x=m.version;for(let S=0,A=0;S<b;S+=3){const H=S+0,U=S+1,O=S+2;I[A++]=H,I[A++]=U,I[A++]=U,I[A++]=O,I[A++]=O,I[A++]=H}}y.version=x;const C=s.get(_);C&&e.remove(C),s.set(_,y)}function f(_){const M=s.get(_);if(M){const m=_.index;m!==null&&M.version<m.version&&h(_)}else h(_);return s.get(_)}function p(){for(const _ in i){const M=i[_].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:f,dispose:p}}function Np(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let M=0;for(let m=0;m<p;m++)M+=f[m];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Dp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fp(r,e,t){const n=new WeakMap,i=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let H=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",H)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),_===!0&&(w=2),M===!0&&(w=3);let y=o.attributes.position.count*w,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*I*4*h),S=new dl(C,y,I,h);S.type=1015,S.needsUpdate=!0;const A=w*4;for(let U=0;U<h;U++){const O=m[U],X=x[U],Q=b[U],F=y*I*4*U;for(let Y=0;Y<O.count;Y++){const J=Y*A;p===!0&&(i.fromBufferAttribute(O,Y),C[F+J+0]=i.x,C[F+J+1]=i.y,C[F+J+2]=i.z,C[F+J+3]=0),_===!0&&(i.fromBufferAttribute(X,Y),C[F+J+4]=i.x,C[F+J+5]=i.y,C[F+J+6]=i.z,C[F+J+7]=0),M===!0&&(i.fromBufferAttribute(Q,Y),C[F+J+8]=i.x,C[F+J+9]=i.y,C[F+J+10]=i.z,C[F+J+11]=Q.itemSize===4?i.w:1)}}f={count:h,texture:S,size:new Be(y,I)},n.set(o,f),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Up(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Op={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Bp(r,e,t,n,i,s){const a=new An(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Yt;u.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const h=new Qu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new It(u,h),p=new Oa(-1,1,1,-1,0,1);let _=null,M=null,m=!1,x,b=null,w=[],y=!1;this.setSize=function(I,C){a.setSize(I,C),o!==null&&o.setSize(I,C),l!==null&&l.setSize(I,C);for(let S=0;S<w.length;S++){const A=w[S];A.setSize&&A.setSize(I,C)}},this.setEffects=function(I){w=I,y=w.length>0&&w[0].isRenderPass===!0;const C=a.width,S=a.height;w.length>0&&o===null&&(o=new An(C,S,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new An(C,S,{type:1016,depthBuffer:!1,stencilBuffer:!1}));const A=i===!0&&w.some(H=>H.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new Gi(C,S),s===!0&&(c.format=1027,c.type=1020)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let H=0;H<w.length;H++){const U=w[H];U.setSize&&U.setSize(C,S),A&&U.needsDepthTexture===!0&&U.setDepthTexture&&U.setDepthTexture(c)}},this.begin=function(I,C){if(m||I.toneMapping===0&&w.length===0)return!1;if(b=C,C!==null){const S=C.width,A=C.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return y===!1&&I.setRenderTarget(a),x=I.toneMapping,I.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(I,C){I.toneMapping=x,m=!0;let S=a,A=o;for(let H=0;H<w.length;H++){const U=w[H];U.enabled!==!1&&(U.render(I,A,S,C),U.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(_!==I.outputColorSpace||M!==I.toneMapping){_=I.outputColorSpace,M=I.toneMapping,h.defines={},vt.getTransfer(_)===bt&&(h.defines.SRGB_TRANSFER="");const H=Op[M];H&&(h.defines[H]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,I.setRenderTarget(b),I.render(f,p),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const ql=new zt,Yl=new Gi(1,1),Zl=new bl(1),Kl=new dl,Jl=new Hc,$l=new El,Ho=[],zo=[],Vo=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function qi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ho[i];if(s===void 0&&(s=new Float32Array(i),Ho[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ls(r,e){let t=zo[e];t===void 0&&(t=new Int32Array(e),zo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Gp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function Hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function Vp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Xo.set(n),r.uniformMatrix2fv(this.addr,!1,Xo),Wt(t,n)}}function Wp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Wo.set(n),r.uniformMatrix3fv(this.addr,!1,Wo),Wt(t,n)}}function Xp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Vo.set(n),r.uniformMatrix4fv(this.addr,!1,Vo),Wt(t,n)}}function qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function Zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function Jp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function Qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function Is(r){return r.version===0&&(r.compareFunction=519,r.needsUpdate=!0),r}function em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Is(Yl):s=ql,t.setTexture2D(e||s,i)}function tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jl,i)}function nm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Is(Zl):s=$l,t.setTextureCube(e||s,i)}function im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kl,i)}function rm(r){switch(r){case 5126:return Gp;case 35664:return kp;case 35665:return Hp;case 35666:return zp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Kp;case 5125:return Jp;case 36294:return $p;case 36295:return Qp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function sm(r,e){r.uniform1fv(this.addr,e)}function am(r,e){const t=qi(e,this.size,2);r.uniform2fv(this.addr,t)}function om(r,e){const t=qi(e,this.size,3);r.uniform3fv(this.addr,t)}function lm(r,e){const t=qi(e,this.size,4);r.uniform4fv(this.addr,t)}function cm(r,e){const t=qi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function um(r,e){const t=qi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hm(r,e){const t=qi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fm(r,e){r.uniform1iv(this.addr,e)}function dm(r,e){r.uniform2iv(this.addr,e)}function pm(r,e){r.uniform3iv(this.addr,e)}function mm(r,e){r.uniform4iv(this.addr,e)}function gm(r,e){r.uniform1uiv(this.addr,e)}function _m(r,e){r.uniform2uiv(this.addr,e)}function xm(r,e){r.uniform3uiv(this.addr,e)}function vm(r,e){r.uniform4uiv(this.addr,e)}function Sm(r,e,t){const n=this.cache,i=e.length,s=Ls(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Is(Yl):a=ql;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Mm(r,e,t){const n=this.cache,i=e.length,s=Ls(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jl,s[a])}function ym(r,e,t){const n=this.cache,i=e.length,s=Ls(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Is(Zl):a=$l;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function Em(r,e,t){const n=this.cache,i=e.length,s=Ls(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kl,s[a])}function Tm(r){switch(r){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return xm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Em}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rm(t.type)}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tm(t.type)}}class wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function qo(r,e){r.seq.push(e),r.map[e.id]=e}function Rm(r,e,t){const n=r.name,i=n.length;for(la.lastIndex=0;;){const s=la.exec(n),a=la.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qo(t,c===void 0?new bm(o,r,e):new Am(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new wm(o),qo(t,h)),t=h}}}class vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Rm(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Yo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Cm=37297;let Pm=0;function Lm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zo=new ht;function Im(r){vt._getMatrix(Zo,vt.workingColorSpace,r);const e=`mat3( ${Zo.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(r)){case Ss:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ko(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Lm(r.getShaderSource(e),o)}else return s}function Nm(r,e){const t=Im(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Dm={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Fm(r,e){const t=Dm[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _s=new k;function Um(){vt.getLuminanceCoefficients(_s);const r=_s.x.toFixed(4),e=_s.y.toFixed(4),t=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function Bm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function hr(r){return r!==""}function Jo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $o(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(r){return r.replace(km,Hm)}function Hm(r,e){const t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ya(t)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(r){return r.replace(zm,Vm)}function Vm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jo(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wm={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Xm(r){return Wm[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qm={302:"ENVMAP_MODE_REFRACTION"};function Ym(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":qm[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zm={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Km(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Zm[r.combine]||"ENVMAP_BLENDING_NONE"}function Jm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xm(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ym(t),h=Km(t),f=Om(t),p=Bm(s),_=i.createProgram();let M,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hr).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(M=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?mt.tonemapping_pars_fragment:"",t.toneMapping!==0?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Nm("linearToOutputTexel",t.outputColorSpace),Um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=ya(a),a=Jo(a,t),a=$o(a,t),o=ya(o),o=Jo(o,t),o=$o(o,t),a=Qo(a),o=Qo(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=x+M+a,w=x+m+o,y=Yo(i,i.VERTEX_SHADER,b),I=Yo(i,i.FRAGMENT_SHADER,w);i.attachShader(_,y),i.attachShader(_,I),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(U){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",X=i.getShaderInfoLog(y)||"",Q=i.getShaderInfoLog(I)||"",F=O.trim(),Y=X.trim(),J=Q.trim();let Z=!0,me=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,I);else{const $=Ko(i,y,"vertex"),oe=Ko(i,I,"fragment");at("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+F+`
`+$+`
`+oe)}else F!==""?$e("WebGLProgram: Program Info Log:",F):(Y===""||J==="")&&(me=!1);me&&(U.diagnostics={runnable:Z,programLog:F,vertexShader:{log:Y,prefix:M},fragmentShader:{log:J,prefix:m}})}i.deleteShader(y),i.deleteShader(I),S=new vs(i,_),A=Gm(i,_)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(_,Cm)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=I,this}let $m=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jm(e),t.set(e,n)),n}}class jm{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function eg(r){return r===1030||r===37490||r===36285}function tg(r,e,t,n,i,s){const a=new pl,o=new Qm,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,A,H,U,O,X){const Q=U.fog,F=O.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,Z=e.get(S.envMap||Y,J),me=f[S.type];let $=n.precision;S.precision!==null&&($=n.getMaxPrecision(S.precision),$!==S.precision&&$e("WebGLProgram.getParameters:",S.precision,"not supported, using",$,"instead."));const oe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=oe!==void 0?oe.length:0;let Ne=0;F.morphAttributes.position!==void 0&&(Ne=1),F.morphAttributes.normal!==void 0&&(Ne=2),F.morphAttributes.color!==void 0&&(Ne=3);let qe,ne,xe,be;if(me){const Ue=bn[me];qe=Ue.vertexShader,ne=Ue.fragmentShader}else{qe=S.vertexShader,ne=S.fragmentShader;const Ue=o.getVertexShaderStage(S),Et=o.getFragmentShaderStage(S);o.update(S,Ue,Et),xe=Ue.id,be=Et.id}const Ye=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Xe=O.isInstancedMesh===!0,St=O.isBatchedMesh===!0,Ve=!!S.map,ot=!!S.matcap,lt=!!Z,le=lt&&Z.isPMREMTexture===!0,Ee=!!S.aoMap,Me=!!S.lightMap,Ge=!!S.bumpMap&&S.wireframe===!1,Le=!!S.normalMap,st=!!S.displacementMap,K=!!S.emissiveMap,He=!!S.metalnessMap,Ke=!!S.roughnessMap,We=S.anisotropy>0,B=S.clearcoat>0,wt=S.diffuseRoughness>0,ct=S.dispersion>0,Mt=S.retroreflectivity>0,Te=S.iridescence>0,Rt=S.sheen>0,Ze=S.transmission>0,et=We&&!!S.anisotropyMap,L=B&&!!S.clearcoatMap,E=B&&!!S.clearcoatNormalMap,q=B&&!!S.clearcoatRoughnessMap,de=wt&&!!S.diffuseRoughnessMap,ce=Te&&!!S.iridescenceMap,Ae=Te&&!!S.iridescenceThicknessMap,Ie=Rt&&!!S.sheenColorMap,ie=Rt&&!!S.sheenRoughnessMap,se=!!S.specularMap,we=!!S.specularColorMap,D=!!S.specularIntensityMap,re=Ze&&!!S.transmissionMap,j=Ze&&!!S.thicknessMap,Ce=!!S.gradientMap,ve=!!S.alphaMap,Re=S.alphaTest>0,Je=!!S.alphaHash,ft=!!S.extensions;let Se=0;S.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(Se=r.toneMapping);const Qe=le?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,ut={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:ne,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:$,batching:St,batchingColor:St&&O._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&O.instanceColor!==null,instancingMorph:Xe&&O.morphTexture!==null,outputColorSpace:Ye===null?r.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:ot,envMap:lt,envMapMode:lt&&Z.mapping,envMapPMREM:le,envMapMaxLod:le?Qe.length-1:null,envMapSize:le?Qe[0].width:null,aoMap:Ee,lightMap:Me,bumpMap:Ge,normalMap:Le,displacementMap:st,emissiveMap:K,normalMapObjectSpace:Le&&S.normalMapType===1,normalMapTangentSpace:Le&&S.normalMapType===0,packedNormalMap:Le&&S.normalMapType===0&&eg(S.normalMap.format),metalnessMap:He,roughnessMap:Ke,anisotropy:We,anisotropyMap:et,clearcoat:B,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:wt,diffuseRoughnessMap:de,dispersion:ct,retroreflection:Mt,iridescence:Te,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:Rt,sheenColorMap:Ie,sheenRoughnessMap:ie,specularMap:se,specularColorMap:we,specularIntensityMap:D,transmission:Ze,transmissionMap:re,thicknessMap:j,gradientMap:Ce,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:Re,alphaHash:Je,combine:S.combine,mapUv:Ve&&p(S.map.channel),aoMapUv:Ee&&p(S.aoMap.channel),lightMapUv:Me&&p(S.lightMap.channel),bumpMapUv:Ge&&p(S.bumpMap.channel),normalMapUv:Le&&p(S.normalMap.channel),displacementMapUv:st&&p(S.displacementMap.channel),emissiveMapUv:K&&p(S.emissiveMap.channel),metalnessMapUv:He&&p(S.metalnessMap.channel),roughnessMapUv:Ke&&p(S.roughnessMap.channel),anisotropyMapUv:et&&p(S.anisotropyMap.channel),clearcoatMapUv:L&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(S.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&p(S.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(S.sheenRoughnessMap.channel),specularMapUv:se&&p(S.specularMap.channel),specularColorMapUv:we&&p(S.specularColorMap.channel),specularIntensityMapUv:D&&p(S.specularIntensityMap.channel),transmissionMapUv:re&&p(S.transmissionMap.channel),thicknessMapUv:j&&p(S.thicknessMap.channel),alphaMapUv:ve&&p(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Le||We),vertexNormals:!!F.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ve||ve),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||F.attributes.normal===void 0&&Le===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ne,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:K&&S.emissiveMap.isVideoTexture===!0&&vt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ft&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&S.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function M(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)A.push(H),A.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(m(A,S),x(A,S),A.push(r.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function m(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapPMREM),S.push(A.envMapMaxLod),S.push(A.envMapSize),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.diffuseRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.numSunLights),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numSunLightShadows),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.numLightProbeGrids),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function b(S){const A=f[S.type];let H;if(A){const U=bn[A];H=Ku.clone(U.uniforms)}else H=S.uniforms;return H}function w(S,A){let H=u.get(A);return H!==void 0?++H.usedTimes:(H=new Jm(r,A,S,i),c.push(H),u.set(A,H)),H}function y(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function I(S){o.remove(S)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:b,acquireProgram:w,releaseProgram:y,releaseShaderCache:I,programs:c,dispose:C}}function ng(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function el(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,M,m,x){let b=r[e];return b===void 0?(b={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:x},r[e]=b):(b.id=f.id,b.object=f,b.geometry=p,b.material=_,b.materialVariant=a(f),b.groupOrder=M,b.renderOrder=f.renderOrder,b.z=m,b.group=x),e++,b}function l(f,p,_,M,m,x,b){b.reversedDepth===!0&&(m=-m);const w=o(f,p,_,M,m,x);_.transmission>0?n.push(w):_.transparent===!0?i.push(w):t.push(w)}function c(f,p,_,M,m,x){const b=o(f,p,_,M,m,x);_.transmission>0?n.unshift(b):_.transparent===!0?i.unshift(b):t.unshift(b)}function u(f,p){t.length>1&&t.sort(f||ig),n.length>1&&n.sort(p||el),i.length>1&&i.sort(p||el)}function h(){for(let f=e,p=r.length;f<p;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function rg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new tl,r.set(n,[a])):i>=s.length?(a=new tl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function sg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new it};break;case"SpotLight":t={position:new k,direction:new k,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function ag(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let og=0;function lg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cg(r){const e=new sg,t=ag(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new pt,a=new pt;function o(c){let u=0,h=0,f=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let p=0,_=0,M=0,m=0,x=0,b=0,w=0,y=0,I=0,C=0,S=0,A=0,H=0,U=0;c.sort(lg);for(let X=0,Q=c.length;X<Q;X++){const F=c[X],Y=F.color,J=F.intensity,Z=F.distance;let me=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===1030?me=F.shadow.map.texture:me=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=Y.r*J,h+=Y.g*J,f+=Y.b*J;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],J);U++}else if(F.isSunLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const oe=F.shadow,ue=t.get(F);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[_]=ue,n.sunShadowMap[_]=me;const Ne=oe.getViewportCount();for(let qe=0;qe<Ne;qe++)n.sunShadowMatrix[M+qe]=oe.getMatrix(qe),n.sunShadowCascade[M+qe]=oe._cascadeData[qe];M+=Ne,_++}n.sun[p]=$,p++}else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const oe=F.shadow,ue=t.get(F);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,n.directionalShadow[m]=ue,n.directionalShadowMap[m]=me,n.directionalShadowMatrix[m]=F.shadow.matrix,I++}n.directional[m]=$,m++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(Y).multiplyScalar(J),$.distance=Z,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[b]=$;const oe=F.shadow;if(F.map&&(n.spotLightMap[A]=F.map,A++,oe.updateMatrices(F),F.castShadow&&H++),n.spotLightMatrix[b]=oe.matrix,F.castShadow){const ue=t.get(F);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,n.spotShadow[b]=ue,n.spotShadowMap[b]=me,S++}b++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(Y).multiplyScalar(J),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=$,w++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const oe=F.shadow,ue=t.get(F);ue.shadowIntensity=oe.intensity,ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,n.pointShadow[x]=ue,n.pointShadowMap[x]=me,n.pointShadowMatrix[x]=F.shadow.matrix,C++}n.point[x]=$,x++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(J),$.groundColor.copy(F.groundColor).multiplyScalar(J),n.hemi[y]=$,y++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const O=n.hash;(O.sunLength!==p||O.directionalLength!==m||O.pointLength!==x||O.spotLength!==b||O.rectAreaLength!==w||O.hemiLength!==y||O.numSunShadows!==_||O.numDirectionalShadows!==I||O.numPointShadows!==C||O.numSpotShadows!==S||O.numSpotMaps!==A||O.numLightProbes!==U)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=x,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+A-H,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=U,O.sunLength=p,O.directionalLength=m,O.pointLength=x,O.spotLength=b,O.rectAreaLength=w,O.hemiLength=y,O.numSunShadows=_,O.numDirectionalShadows=I,O.numPointShadows=C,O.numSpotShadows=S,O.numSpotMaps=A,O.numLightProbes=U,n.version=og++)}function l(c,u){let h=0,f=0,p=0,_=0,M=0,m=0;const x=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){const y=c[b];if(y.isSunLight){const I=n.sun[h];I.direction.setFromMatrixPosition(y.matrixWorld),I.direction.transformDirection(x),h++}else if(y.isDirectionalLight){const I=n.directional[f];I.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(x),f++}else if(y.isSpotLight){const I=n.spot[_];I.position.setFromMatrixPosition(y.matrixWorld),I.position.applyMatrix4(x),I.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(x),_++}else if(y.isRectAreaLight){const I=n.rectArea[M];I.position.setFromMatrixPosition(y.matrixWorld),I.position.applyMatrix4(x),a.identity(),s.copy(y.matrixWorld),s.premultiply(x),a.extractRotation(s),I.halfWidth.set(y.width*.5,0,0),I.halfHeight.set(0,y.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const I=n.point[p];I.position.setFromMatrixPosition(y.matrixWorld),I.position.applyMatrix4(x),p++}else if(y.isHemisphereLight){const I=n.hemi[m];I.direction.setFromMatrixPosition(y.matrixWorld),I.direction.transformDirection(x),m++}}}return{setup:o,setupView:l,state:n}}function nl(r){const e=new cg(r),t=[],n=[],i=[];function s(h){u.camera=h,t.length=0,n.length=0,i.length=0}function a(h){h.isLightProbeGrid?i.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),i.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ug(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new nl(r),e.set(i,[o])):s>=a.length?(o=new nl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dg=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],pg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],il=new pt,ar=new k,ca=new k;function mg(r,e,t){let n=new vr;const i=new Be,s=new Be,a=new Ct,o=new ju,l=new eh,c={},u=t.maxTextureSize,h={0:1,1:0,2:2},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:hg,fragmentShader:fg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new It(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(C,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===2&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const H=r.getRenderTarget(),U=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),X=r.state;X.setBlending(0),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Q=x!==this.type;Q&&S.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Y=>Y.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Y=C.length;F<Y;F++){const J=C[F],Z=J.shadow;if(Z===void 0){$e("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const me=Z.getFrameExtents();i.multiply(me),s.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/me.x),i.x=s.x*me.x,Z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/me.y),i.y=s.y*me.y,Z.mapSize.y=s.y));const $=r.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||Q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===3){if(J.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new An(i.x,i.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new Gi(i.x,i.y,1015),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=1026,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=1003,Z.map.depthTexture.magFilter=1003}else J.isPointLight?(Z.map=new ka(i.x),Z.map.depthTexture=new bl(i.x,1014)):(Z.map=new An(i.x,i.y),Z.map.depthTexture=new Gi(i.x,i.y,1014)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=1026,this.type===1?(Z.map.depthTexture.compareFunction=$?518:515,Z.map.depthTexture.minFilter=1006,Z.map.depthTexture.magFilter=1006):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=1003,Z.map.depthTexture.magFilter=1003);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);const oe=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,A);const ue=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:A.layers;for(let Ne=0;Ne<oe;Ne++){const qe=Z.getCamera(Ne);if(J.isPointLight){const ne=Z.camera,xe=Z.matrix,be=J.distance||ne.far;be!==ne.far&&(ne.far=be,ne.updateProjectionMatrix()),ar.setFromMatrixPosition(J.matrixWorld),ne.position.copy(ar),ca.copy(ne.position),ca.add(dg[Ne]),ne.up.copy(pg[Ne]),ne.lookAt(ca),ne.updateMatrixWorld(),xe.makeTranslation(-ar.x,-ar.y,-ar.z),il.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(il,ne.coordinateSystem,ne.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)r.setRenderTarget(Z.map,Ne),r.clear();else{Ne===0&&(r.setRenderTarget(Z.map),r.clear());const ne=Z.getViewport(Ne);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),X.viewport(a)}n=Z.getFrustum(Ne),y(S,A,qe,J,ue,this.type)}Z.isPointLightShadow!==!0&&this.type===3&&b(Z,A),Z.needsUpdate=!1}x=this.type,m.needsUpdate=!1,r.setRenderTarget(H,U,O)};function b(C,S){const A=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new An(i.x,i.y,{format:1030,type:1016}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(S,null,A,f,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(S,null,A,p,M,null)}function w(C,S,A,H){let U=null;const O=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)U=O;else if(U=A.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const X=U.uuid,Q=S.uuid;let F=c[X];F===void 0&&(F={},c[X]=F);let Y=F[Q];Y===void 0&&(Y=U.clone(),F[Q]=Y,S.addEventListener("dispose",I)),U=Y}if(U.visible=S.visible,U.wireframe=S.wireframe,H===3?U.side=S.shadowSide!==null?S.shadowSide:S.side:U.side=S.shadowSide!==null?S.shadowSide:h[S.side],U.alphaMap=S.alphaMap,U.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,U.map=S.map,U.clipShadows=S.clipShadows,U.clippingPlanes=S.clippingPlanes,U.clipIntersection=S.clipIntersection,U.displacementMap=S.displacementMap,U.displacementScale=S.displacementScale,U.displacementBias=S.displacementBias,U.wireframeLinewidth=S.wireframeLinewidth,U.linewidth=S.linewidth,A.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const X=r.properties.get(U);X.light=A}return U}function y(C,S,A,H,U,O){if(C.visible===!1)return;if(C.layers.test(U)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===3)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const F=e.update(C),Y=C.material;if(Array.isArray(Y)){const J=F.groups;for(let Z=0,me=J.length;Z<me;Z++){const $=J[Z],oe=Y[$.materialIndex];if(oe&&oe.visible){const ue=w(C,oe,H,O);C.onBeforeShadow(r,C,S,A,F,ue,$),r.renderBufferDirect(A,null,F,ue,C,$),C.onAfterShadow(r,C,S,A,F,ue,$)}}}else if(Y.visible){const J=w(C,Y,H,O);C.onBeforeShadow(r,C,S,A,F,J,null),r.renderBufferDirect(A,null,F,J,C,null),C.onAfterShadow(r,C,S,A,F,J,null)}}const Q=C.children;for(let F=0,Y=Q.length;F<Y;F++)y(Q[F],S,A,H,U,O)}function I(C){C.target.removeEventListener("dispose",I);for(const A in c){const H=c[A],U=C.target.uuid;U in H&&(H[U].dispose(),delete H[U])}}}function gg(r,e){function t(){let D=!1;const re=new Ct;let j=null;const Ce=new Ct(0,0,0,0);return{setMask:function(ve){j!==ve&&!D&&(r.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){D=ve},setClear:function(ve,Re,Je,ft,Se){Se===!0&&(ve*=ft,Re*=ft,Je*=ft),re.set(ve,Re,Je,ft),Ce.equals(re)===!1&&(r.clearColor(ve,Re,Je,ft),Ce.copy(re))},reset:function(){D=!1,j=null,Ce.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,j=null,Ce=null,ve=null;return{setReversed:function(Re){if(re!==Re){const Je=e.get("EXT_clip_control");Re?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),re=Re;const ft=ve;ve=null,this.setClear(ft)}},getReversed:function(){return re},setTest:function(Re){Re?he(r.DEPTH_TEST):Xe(r.DEPTH_TEST)},setMask:function(Re){j!==Re&&!D&&(r.depthMask(Re),j=Re)},setFunc:function(Re){if(re&&(Re=vc[Re]),Ce!==Re){switch(Re){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=Re}},setLocked:function(Re){D=Re},setClear:function(Re){ve!==Re&&(ve=Re,re&&(Re=1-Re),r.clearDepth(Re))},reset:function(){D=!1,j=null,Ce=null,ve=null,re=!1}}}function i(){let D=!1,re=null,j=null,Ce=null,ve=null,Re=null,Je=null,ft=null,Se=null;return{setTest:function(Qe){D||(Qe?he(r.STENCIL_TEST):Xe(r.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!D&&(r.stencilMask(Qe),re=Qe)},setFunc:function(Qe,ut,Ue){(j!==Qe||Ce!==ut||ve!==Ue)&&(r.stencilFunc(Qe,ut,Ue),j=Qe,Ce=ut,ve=Ue)},setOp:function(Qe,ut,Ue){(Re!==Qe||Je!==ut||ft!==Ue)&&(r.stencilOp(Qe,ut,Ue),Re=Qe,Je=ut,ft=Ue)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Se!==Qe&&(r.clearStencil(Qe),Se=Qe)},reset:function(){D=!1,re=null,j=null,Ce=null,ve=null,Re=null,Je=null,ft=null,Se=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let u={},h={},f={},p=new WeakMap,_=[],M=null,m=!1,x=null,b=null,w=null,y=null,I=null,C=null,S=null,A=new it(0,0,0),H=0,U=!1,O=null,X=null,Q=null,F=null,Y=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,me=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=me>=1):$.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=me>=2);let oe=null,ue={};const Ne=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),ne=new Ct().fromArray(Ne),xe=new Ct().fromArray(qe);function be(D,re,j,Ce){const ve=new Uint8Array(4),Re=r.createTexture();r.bindTexture(D,Re),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<j;Je++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(re+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return Re}const Ye={};Ye[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),Ye[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ye[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ye[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(3),Ge(!1),Le(1),he(r.CULL_FACE),Ee(0);function he(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Xe(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function St(D,re){return f[D]!==re?(r.bindFramebuffer(D,re),f[D]=re,D===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=re),D===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Ve(D,re){let j=_,Ce=!1;if(D){j=p.get(re),j===void 0&&(j=[],p.set(re,j));const ve=D.textures;if(j.length!==ve.length||j[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Je=ve.length;Re<Je;Re++)j[Re]=r.COLOR_ATTACHMENT0+Re;j.length=ve.length,Ce=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(j)}function ot(D){return M!==D?(r.useProgram(D),M=D,!0):!1}const lt={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};lt[103]=r.MIN,lt[104]=r.MAX;const le={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function Ee(D,re,j,Ce,ve,Re,Je,ft,Se,Qe){if(D===0){m===!0&&(Xe(r.BLEND),m=!1);return}if(m===!1&&(he(r.BLEND),m=!0),D!==5){if(D!==x||Qe!==U){if((b!==100||I!==100)&&(r.blendEquation(r.FUNC_ADD),b=100,I=100),Qe)switch(D){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:at("WebGLState: Invalid blending: ",D);break}else switch(D){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case 3:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",D);break}w=null,y=null,C=null,S=null,A.set(0,0,0),H=0,x=D,U=Qe}return}ve=ve||re,Re=Re||j,Je=Je||Ce,(re!==b||ve!==I)&&(r.blendEquationSeparate(lt[re],lt[ve]),b=re,I=ve),(j!==w||Ce!==y||Re!==C||Je!==S)&&(r.blendFuncSeparate(le[j],le[Ce],le[Re],le[Je]),w=j,y=Ce,C=Re,S=Je),(ft.equals(A)===!1||Se!==H)&&(r.blendColor(ft.r,ft.g,ft.b,Se),A.copy(ft),H=Se),x=D,U=!1}function Me(D,re){D.side===2?Xe(r.CULL_FACE):he(r.CULL_FACE);let j=D.side===1;re&&(j=!j),Ge(j),D.blending===1&&D.transparent===!1?Ee(0):Ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Ce=D.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){O!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),O=D)}function Le(D){D!==0?(he(r.CULL_FACE),D!==X&&(D===1?r.cullFace(r.BACK):D===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Xe(r.CULL_FACE),X=D}function st(D){D!==Q&&(Z&&r.lineWidth(D),Q=D)}function K(D,re,j){D?(he(r.POLYGON_OFFSET_FILL),(F!==re||Y!==j)&&(F=re,Y=j,a.getReversed()&&(re=-re,j=-j),r.polygonOffset(re,j))):Xe(r.POLYGON_OFFSET_FILL)}function He(D){D?he(r.SCISSOR_TEST):Xe(r.SCISSOR_TEST)}function Ke(D){D===void 0&&(D=r.TEXTURE0+J-1),oe!==D&&(r.activeTexture(D),oe=D)}function We(D,re,j){j===void 0&&(oe===null?j=r.TEXTURE0+J-1:j=oe);let Ce=ue[j];Ce===void 0&&(Ce={type:void 0,texture:void 0},ue[j]=Ce),(Ce.type!==D||Ce.texture!==re)&&(oe!==j&&(r.activeTexture(j),oe=j),r.bindTexture(D,re||Ye[D]),Ce.type=D,Ce.texture=re)}function B(){const D=ue[oe];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function wt(){try{r.compressedTexImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function ct(){try{r.compressedTexImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function Mt(){try{r.texSubImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function Te(){try{r.texSubImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function Rt(){try{r.compressedTexSubImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function Ze(){try{r.compressedTexSubImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function et(){try{r.texStorage2D(...arguments)}catch(D){at("WebGLState:",D)}}function L(){try{r.texStorage3D(...arguments)}catch(D){at("WebGLState:",D)}}function E(){try{r.texImage2D(...arguments)}catch(D){at("WebGLState:",D)}}function q(){try{r.texImage3D(...arguments)}catch(D){at("WebGLState:",D)}}function de(D){return h[D]!==void 0?h[D]:r.getParameter(D)}function ce(D,re){h[D]!==re&&(r.pixelStorei(D,re),h[D]=re)}function Ae(D){ne.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function Ie(D){xe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function ie(D,re){let j=c.get(re);j===void 0&&(j=new WeakMap,c.set(re,j));let Ce=j.get(D);Ce===void 0&&(Ce=r.getUniformBlockIndex(re,D.name),r.uniformBlockBinding(re,Ce,Ce),j.set(D,Ce))}function se(D,re,j){const ve=c.get(re).get(D);l[ve]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,ve,j),l[ve]=j)}function we(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},oe=null,ue={},f={},l={},p=new WeakMap,_=[],M=null,m=!1,x=null,b=null,w=null,y=null,I=null,C=null,S=null,A=new it(0,0,0),H=0,U=!1,O=null,X=null,Q=null,F=null,Y=null,ne.set(0,0,r.canvas.width,r.canvas.height),xe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Xe,bindFramebuffer:St,drawBuffers:Ve,useProgram:ot,setBlending:Ee,setMaterial:Me,setFlipSided:Ge,setCullFace:Le,setLineWidth:st,setPolygonOffset:K,setScissorTest:He,activeTexture:Ke,bindTexture:We,unbindTexture:B,compressedTexImage2D:wt,compressedTexImage3D:ct,texImage2D:E,texImage3D:q,pixelStorei:ce,getParameter:de,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:et,texStorage3D:L,texSubImage2D:Mt,texSubImage3D:Te,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ze,scissor:Ae,viewport:Ie,reset:we}}function _g(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h=new Set;let f;const p=new WeakMap,_=new Set,M=new FinalizationRegistry(L=>_.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return m?new OffscreenCanvas(L,E):_r("canvas")}function b(L,E,q){let de=1;const ce=et(L);if((ce.width>q||ce.height>q)&&(de=q/Math.max(ce.width,ce.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(de*ce.width),Ie=Math.floor(de*ce.height);f===void 0&&(f=x(Ae,Ie));const ie=E?x(Ae,Ie):f;return ie.width=Ae,ie.height=Ie,ie.getContext("2d").drawImage(L,0,0,Ae,Ie),$e("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ae+"x"+Ie+")."),ie}else return"data"in L&&$e("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function w(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(L,E,q,de,ce,Ae=!1){if(L!==null){if(r[L]!==void 0)return r[L];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ie;de&&(Ie=e.get("EXT_texture_norm16"),Ie||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===r.RED&&(q===r.FLOAT&&(ie=r.R32F),q===r.HALF_FLOAT&&(ie=r.R16F),q===r.UNSIGNED_BYTE&&(ie=r.R8),q===r.UNSIGNED_SHORT&&Ie&&(ie=Ie.R16_EXT),q===r.SHORT&&Ie&&(ie=Ie.R16_SNORM_EXT)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ie=r.R8UI),q===r.UNSIGNED_SHORT&&(ie=r.R16UI),q===r.UNSIGNED_INT&&(ie=r.R32UI),q===r.BYTE&&(ie=r.R8I),q===r.SHORT&&(ie=r.R16I),q===r.INT&&(ie=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ie=r.RG32F),q===r.HALF_FLOAT&&(ie=r.RG16F),q===r.UNSIGNED_BYTE&&(ie=r.RG8),q===r.UNSIGNED_SHORT&&Ie&&(ie=Ie.RG16_EXT),q===r.SHORT&&Ie&&(ie=Ie.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ie=r.RG8UI),q===r.UNSIGNED_SHORT&&(ie=r.RG16UI),q===r.UNSIGNED_INT&&(ie=r.RG32UI),q===r.BYTE&&(ie=r.RG8I),q===r.SHORT&&(ie=r.RG16I),q===r.INT&&(ie=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),q===r.UNSIGNED_INT&&(ie=r.RGB32UI),q===r.BYTE&&(ie=r.RGB8I),q===r.SHORT&&(ie=r.RGB16I),q===r.INT&&(ie=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),q===r.UNSIGNED_INT&&(ie=r.RGBA32UI),q===r.BYTE&&(ie=r.RGBA8I),q===r.SHORT&&(ie=r.RGBA16I),q===r.INT&&(ie=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_SHORT&&Ie&&(ie=Ie.RGB16_EXT),q===r.SHORT&&Ie&&(ie=Ie.RGB16_SNORM_EXT),q===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ie=r.R11F_G11F_B10F)),E===r.RGBA){const se=Ae?Ss:vt.getTransfer(ce);q===r.FLOAT&&(ie=r.RGBA32F),q===r.HALF_FLOAT&&(ie=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ie=se===bt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT&&Ie&&(ie=Ie.RGBA16_EXT),q===r.SHORT&&Ie&&(ie=Ie.RGBA16_SNORM_EXT),q===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(L,E){let q;return L?E===null||E===1014||E===1020?q=r.DEPTH24_STENCIL8:E===1015?q=r.DEPTH32F_STENCIL8:E===1012&&(q=r.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?q=r.DEPTH_COMPONENT24:E===1015?q=r.DEPTH_COMPONENT32F:E===1012&&(q=r.DEPTH_COMPONENT16),q}function A(L,E){return w(L)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){const E=new WeakRef(L);n.get(L).__ref=E,_.add(E),M.register(L,E,E)}function U(L){const E=n.get(L).__ref;E!==void 0&&(_.delete(E),M.unregister(E))}function O(L){Q(L.target)}function X(L){F(L.target)}function Q(L){L.removeEventListener("dispose",O),U(L),J(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&h.delete(L)}function F(L){L.removeEventListener("dispose",X),U(L),me(L)}function Y(){for(const L of _){const E=L.deref();E!==void 0&&(E.isRenderTarget===!0?F(E):Q(E))}_.clear(),h.clear()}function J(L){const E=n.get(L);if(E.__webglInit===void 0)return;const q=L.source,de=p.get(q);if(de){const ce=de[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&Z(L),Object.keys(de).length===0&&p.delete(q)}n.remove(L)}function Z(L){const E=n.get(L);r.deleteTexture(E.__webglTexture);const q=L.source,de=p.get(q);delete de[E.__cacheKey],a.memory.textures--}function me(L){const E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();const q=L.depthTexture;if(q&&q.renderTarget===L&&Q(q),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let Ae=0;Ae<E.__webglFramebuffer[ce].length;Ae++)r.deleteFramebuffer(E.__webglFramebuffer[ce][Ae]);else r.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)r.deleteFramebuffer(E.__webglFramebuffer[ce]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const de=L.textures;for(let ce=0,Ae=de.length;ce<Ae;ce++){const Ie=n.get(de[ce]);Ie.__webglTexture&&(r.deleteTexture(Ie.__webglTexture),a.memory.textures--),n.remove(de[ce])}n.remove(L)}let $=0;function oe(){$=0}function ue(){return $}function Ne(L){$=L}function qe(){const L=$;return L>=i.maxTextures&&$e("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),$+=1,L}function ne(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function xe(L,E){const q=n.get(L);if(L.isVideoTexture&&Rt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const de=L.image;if(de===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function be(L,E){const q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Me(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function Ye(L,E){const q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){Me(q,L,E);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function he(L,E){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Ge(q,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const Xe={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},St={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},Ve={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function ot(L,E){if(E.type===1015&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Xe[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Xe[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Xe[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function lt(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",O),H(E));const de=E.source;let ce=p.get(de);ce===void 0&&(ce={},p.set(de,ce));const Ae=ne(E);if(Ae!==L.__cacheKey){ce[Ae]===void 0&&(ce[Ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ce[Ae].usedTimes++;const Ie=ce[L.__cacheKey];Ie!==void 0&&(ce[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&Z(E)),L.__cacheKey=Ae,L.__webglTexture=ce[Ae].texture}return q}function le(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Ee(L,E,q,de){const Ae=L.updateRanges;if(Ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,de,E.data);else{Ae.sort((D,re)=>D.start-re.start);let Ie=0;for(let D=1;D<Ae.length;D++){const re=Ae[Ie],j=Ae[D],Ce=re.start+re.count,ve=le(j.start,E.width,4),Re=le(re.start,E.width,4);j.start<=Ce+1&&ve===Re&&le(j.start+j.count-1,E.width,4)===ve?re.count=Math.max(re.count,j.start+j.count-re.start):(++Ie,Ae[Ie]=j)}Ae.length=Ie+1;const ie=t.getParameter(r.UNPACK_ROW_LENGTH),se=t.getParameter(r.UNPACK_SKIP_PIXELS),we=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let D=0,re=Ae.length;D<re;D++){const j=Ae[D],Ce=Math.floor(j.start/4),ve=Math.ceil(j.count/4),Re=Ce%E.width,Je=Math.floor(Ce/E.width),ft=ve,Se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(r.UNPACK_SKIP_ROWS,Je),t.texSubImage2D(r.TEXTURE_2D,0,Re,Je,ft,Se,q,de,E.data)}L.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ie),t.pixelStorei(r.UNPACK_SKIP_PIXELS,se),t.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function Me(L,E,q){let de=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=r.TEXTURE_3D);const ce=lt(L,E),Ae=E.source;t.bindTexture(de,L.__webglTexture,r.TEXTURE0+q);const Ie=n.get(Ae);if(Ae.version!==Ie.__version||ce===!0){if(t.activeTexture(r.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Se=vt.getPrimaries(vt.workingColorSpace),Qe=E.colorSpace===""?null:vt.getPrimaries(E.colorSpace),ut=E.colorSpace===""||Se===Qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let se=b(E.image,!1,i.maxTextureSize);se=Ze(E,se);const we=s.convert(E.format,E.colorSpace),D=s.convert(E.type);let re=C(E.internalFormat,we,D,E.normalized,E.colorSpace,E.isVideoTexture);ot(de,E);let j;const Ce=E.mipmaps,ve=E.isVideoTexture!==!0,Re=Ie.__version===void 0||ce===!0,Je=Ae.dataReady,ft=A(E,se);if(E.isDepthTexture)re=S(E.format===1027,E.type),Re&&(ve?t.texStorage2D(r.TEXTURE_2D,1,re,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,re,se.width,se.height,0,we,D,null));else if(E.isDataTexture)if(Ce.length>0){ve&&Re&&t.texStorage2D(r.TEXTURE_2D,ft,re,Ce[0].width,Ce[0].height);for(let Se=0,Qe=Ce.length;Se<Qe;Se++)j=Ce[Se],ve?Je&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,j.width,j.height,we,D,j.data):t.texImage2D(r.TEXTURE_2D,Se,re,j.width,j.height,0,we,D,j.data);E.generateMipmaps=!1}else ve?(Re&&t.texStorage2D(r.TEXTURE_2D,ft,re,se.width,se.height),Je&&Ee(E,se,we,D)):t.texImage2D(r.TEXTURE_2D,0,re,se.width,se.height,0,we,D,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,re,Ce[0].width,Ce[0].height,se.depth);for(let Se=0,Qe=Ce.length;Se<Qe;Se++)if(j=Ce[Se],E.format!==1023)if(we!==null)if(ve){if(Je)if(E.layerUpdates.size>0){const ut=Uo(j.width,j.height,E.format,E.type);for(const Ue of E.layerUpdates){const Et=j.data.subarray(Ue*ut/j.data.BYTES_PER_ELEMENT,(Ue+1)*ut/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,Ue,j.width,j.height,1,we,Et)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,j.width,j.height,se.depth,we,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,re,j.width,j.height,se.depth,0,j.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?Je&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,j.width,j.height,se.depth,we,D,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,re,j.width,j.height,se.depth,0,we,D,j.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ve&&Re&&t.texStorage2D(r.TEXTURE_2D,ft,re,Ce[0].width,Ce[0].height);for(let Se=0,Qe=Ce.length;Se<Qe;Se++)j=Ce[Se],E.format!==1023?we!==null?ve?Je&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,j.width,j.height,we,j.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,re,j.width,j.height,0,j.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?Je&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,j.width,j.height,we,D,j.data):t.texImage2D(r.TEXTURE_2D,Se,re,j.width,j.height,0,we,D,j.data)}else if(E.isDataArrayTexture)if(ve){if(Re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ft,re,se.width,se.height,se.depth),Je)if(E.layerUpdates.size>0){const Se=Uo(se.width,se.height,E.format,E.type);for(const Qe of E.layerUpdates){const ut=se.data.subarray(Qe*Se/se.data.BYTES_PER_ELEMENT,(Qe+1)*Se/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Qe,se.width,se.height,1,we,D,ut)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,D,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,re,se.width,se.height,se.depth,0,we,D,se.data);else if(E.isData3DTexture)ve?(Re&&t.texStorage3D(r.TEXTURE_3D,ft,re,se.width,se.height,se.depth),Je&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,D,se.data)):t.texImage3D(r.TEXTURE_3D,0,re,se.width,se.height,se.depth,0,we,D,se.data);else if(E.isFramebufferTexture){if(Re)if(ve)t.texStorage2D(r.TEXTURE_2D,ft,re,se.width,se.height);else{let Se=se.width,Qe=se.height;for(let ut=0;ut<ft;ut++)t.texImage2D(r.TEXTURE_2D,ut,re,Se,Qe,0,we,D,null),Se>>=1,Qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const Se=r.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),se.parentNode!==Se){Se.appendChild(se),h.add(E),Se.onpaint=Qe=>{const ut=Qe.changedElements;for(const Ue of h)ut.includes(Ue.image)&&(Ue.needsUpdate=!0)},Se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,se);else{const ut=r.RGBA,Ue=r.RGBA,Et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ut,Ue,Et,se)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(ve&&Re){const Se=et(Ce[0]);t.texStorage2D(r.TEXTURE_2D,ft,re,Se.width,Se.height)}for(let Se=0,Qe=Ce.length;Se<Qe;Se++)j=Ce[Se],ve?Je&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,we,D,j):t.texImage2D(r.TEXTURE_2D,Se,re,we,D,j);E.generateMipmaps=!1}else if(ve){if(Re){const Se=et(se);t.texStorage2D(r.TEXTURE_2D,ft,re,Se.width,Se.height)}Je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,D,se)}else t.texImage2D(r.TEXTURE_2D,0,re,we,D,se);w(E)&&E.mipmapsAutoUpdate===!0&&y(de),Ie.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ge(L,E,q){if(E.image.length!==6)return;const de=lt(L,E),ce=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+q);const Ae=n.get(ce);if(ce.version!==Ae.__version||de===!0){t.activeTexture(r.TEXTURE0+q);const Ie=vt.getPrimaries(vt.workingColorSpace),ie=E.colorSpace===""?null:vt.getPrimaries(E.colorSpace),se=E.colorSpace===""||Ie===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,re=[];for(let Ue=0;Ue<6;Ue++)!we&&!D?re[Ue]=b(E.image[Ue],!0,i.maxCubemapSize):re[Ue]=D?E.image[Ue].image:E.image[Ue],re[Ue]=Ze(E,re[Ue]);const j=re[0],Ce=s.convert(E.format,E.colorSpace),ve=s.convert(E.type);let Re=C(E.internalFormat,Ce,ve,E.normalized,E.colorSpace);const Je=E.isVideoTexture!==!0,ft=Ae.__version===void 0||de===!0,Se=ce.dataReady;let Qe=A(E,j);ot(r.TEXTURE_CUBE_MAP,E);let ut;if(E.isDepthTexture){if(Re=S(E.format===1027,E.type),ft)if(Je)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Re,j.width,j.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,j.width,j.height,0,Ce,ve,null)}else if(we){Je&&ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Re,j.width,j.height);for(let Ue=0;Ue<6;Ue++){ut=re[Ue].mipmaps;for(let Et=0;Et<ut.length;Et++){const Gt=ut[Et];E.format!==1023?Ce!==null?Je?Se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et,0,0,Gt.width,Gt.height,Ce,Gt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et,Re,Gt.width,Gt.height,0,Gt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et,0,0,Gt.width,Gt.height,Ce,ve,Gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et,Re,Gt.width,Gt.height,0,Ce,ve,Gt.data)}}}else{if(ut=E.mipmaps,Je&&ft){ut.length>0&&Qe++;const Ue=et(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Re,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(D){Je?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,re[Ue].width,re[Ue].height,Ce,ve,re[Ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,re[Ue].width,re[Ue].height,0,Ce,ve,re[Ue].data);for(let Et=0;Et<ut.length;Et++){const xn=ut[Et].image[Ue].image;Je?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et+1,0,0,xn.width,xn.height,Ce,ve,xn.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et+1,Re,xn.width,xn.height,0,Ce,ve,xn.data)}}else{Je?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Ce,ve,re[Ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Re,Ce,ve,re[Ue]);for(let Et=0;Et<ut.length;Et++){const Gt=ut[Et];Je?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et+1,0,0,Ce,ve,Gt.image[Ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Et+1,Re,Ce,ve,Gt.image[Ue])}}}w(E)&&E.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),Ae.__version=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Le(L,E,q,de,ce,Ae){const Ie=s.convert(q.format,q.colorSpace),ie=s.convert(q.type),se=C(q.internalFormat,Ie,ie,q.normalized,q.colorSpace),we=n.get(E),D=n.get(q);if(D.__renderTarget=E,!we.__hasExternalTextures){const re=Math.max(1,E.width>>Ae),j=Math.max(1,E.height>>Ae);ce===r.TEXTURE_3D||ce===r.TEXTURE_2D_ARRAY?t.texImage3D(ce,Ae,se,re,j,E.depth,0,Ie,ie,null):t.texImage2D(ce,Ae,se,re,j,0,Ie,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Te(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ce,D.__webglTexture,0,Mt(E)):(ce===r.TEXTURE_2D||ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,ce,D.__webglTexture,Ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const de=E.depthTexture,ce=de&&de.isDepthTexture?de.type:null,Ae=S(E.stencilBuffer,ce),Ie=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(E),Ae,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,L)}else{const de=E.textures;for(let ce=0;ce<de.length;ce++){const Ae=de[ce],Ie=s.convert(Ae.format,Ae.colorSpace),ie=s.convert(Ae.type),se=C(Ae.internalFormat,Ie,ie,Ae.normalized,Ae.colorSpace);Te(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt(E),se,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt(E),se,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,se,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(L,E,q){const de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=n.get(E.depthTexture);ce.__renderTarget=E;const Ae=de?E.depthTexture.image[0]:E.depthTexture.image;(!ce.__webglTexture||Ae.width!==E.width||Ae.height!==E.height)&&(Ae.width=E.width,Ae.height=E.height,E.depthTexture.needsUpdate=!0),de?he(E.depthTexture,0):xe(E.depthTexture,0);const Ie=ce.__webglTexture,ie=Mt(E),se=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,we=E.depthTexture.format===1027?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===1026)Te(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,se,Ie,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,we,se,Ie,0);else if(E.depthTexture.format===1027)Te(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,se,Ie,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,we,se,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(L){const E=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",ce)};de.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=de}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let de=0;de<6;de++)K(E.__webglFramebuffer[de],L,de);else L.texture.mipmaps.length>0?K(E.__webglFramebuffer[0],L,0):K(E.__webglFramebuffer,L,0);else if(q){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=r.createRenderbuffer(),st(E.__webglDepthbuffer[de],L,!1);else{const ce=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,Ae)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),st(E.__webglDepthbuffer,L,!1);else{const ce=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,Ae)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(L,E,q){const de=n.get(L);E!==void 0&&Le(de.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&He(L)}function We(L){const E=L.texture,q=n.get(L),de=n.get(E);L.addEventListener("dispose",X),H(L);const ce=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,Ie=ce.length>1;if(Ie||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=E.version,a.memory.textures++),Ae){q.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0){q.__webglFramebuffer[ie]=[];for(let se=0;se<E.mipmaps.length;se++)q.__webglFramebuffer[ie][se]=r.createFramebuffer()}else q.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)q.__webglFramebuffer[ie]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let ie=0,se=ce.length;ie<se;ie++){const we=n.get(ce[ie]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&Te(L)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ie=0;ie<ce.length;ie++){const se=ce[ie];q.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[ie]);const we=s.convert(se.format,se.colorSpace),D=s.convert(se.type),re=C(se.internalFormat,we,D,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),j=Mt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,re,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,q.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),st(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ot(r.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)Le(q.__webglFramebuffer[ie][se],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else Le(q.__webglFramebuffer[ie],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(E)?y(r.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ie){for(let ie=0,se=ce.length;ie<se;ie++){const we=ce[ie],D=n.get(we);let re=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(re=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,D.__webglTexture),ot(re,we),Le(q.__webglFramebuffer,L,we,r.COLOR_ATTACHMENT0+ie,re,0),w(we)&&y(re)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ie=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,de.__webglTexture),ot(ie,E),E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)Le(q.__webglFramebuffer[se],L,E,r.COLOR_ATTACHMENT0,ie,se);else Le(q.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,ie,0);w(E)?y(ie):E.mipmaps.length>0&&r.texParameteri(ie,r.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&He(L)}function B(L){const E=L.textures;for(let q=0,de=E.length;q<de;q++){const ce=E[q];if(w(ce)&&ce.mipmapsAutoUpdate===!0){const Ae=I(L),Ie=n.get(ce).__webglTexture;t.bindTexture(Ae,Ie),y(Ae),t.unbindTexture()}}}const wt=[];function ct(L){if(L.samples>0){if(Te(L)===!1){const E=L.textures,q=L.width,de=L.height;let ce=r.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=n.get(L),ie=E.length>1;if(ie)for(let we=0;we<E.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<E.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const D=n.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,q,de,0,0,q,de,ce,r.NEAREST),l===!0&&(wt.length=0,wt.push(r.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&wt.push(Ae),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<E.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const D=n.get(E[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,D,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Mt(L){return Math.min(i.maxSamples,L.samples)}function Te(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ze(L,E){const q=L.colorSpace,de=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Bt&&q!==""&&(vt.getTransfer(q)===bt?(de!==1023||ce!==1009)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",q)),E}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=qe,this.resetTextureUnits=oe,this.getTextureUnits=ue,this.setTextureUnits=Ne,this.setTexture2D=xe,this.setTexture2DArray=be,this.setTexture3D=Ye,this.setTextureCube=he,this.rebindTextures=Ke,this.setupRenderTarget=We,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Te,this.dispose=Y}function xg(r,e){function t(n,i=""){let s;const a=vt.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Al(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pi({vertexShader:vg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends mi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Mg,x={},b=t.getContextAttributes();let w=null,y=null;const I=[],C=[],S=new Be;let A=null,H=null;const U=new jt;U.viewport=new Ct;const O=new jt;O.viewport=new Ct;const X=[U,O],Q=new Th;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=I[ne];return xe===void 0&&(xe=new Gs,I[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=I[ne];return xe===void 0&&(xe=new Gs,I[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=I[ne];return xe===void 0&&(xe=new Gs,I[ne]=xe),xe.getHandSpace()};function J(ne){const xe=C.indexOf(ne.inputSource);if(xe===-1)return;const be=I[xe];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||a),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Z(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",me);for(let ne=0;ne<I.length;ne++){const xe=C[ne];xe!==null&&(C[ne]=null,I[ne].disconnect(xe))}F=null,Y=null,m.reset();for(const ne in x)delete x[ne];if(e.setRenderTarget(w),p=null,f=null,h=null,i=null,y=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),H!==null){const ne=H.camera;ne.fov=H.fov,ne.zoom=H.zoom,ne.updateProjectionMatrix(),H=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",me),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ye=null,he=null;b.depth&&(he=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=b.stencil?1027:1026,Ye=b.stencil?1020:1014);const Xe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new An(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Gi(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new An(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(ne){for(let xe=0;xe<ne.removed.length;xe++){const be=ne.removed[xe],Ye=C.indexOf(be);Ye>=0&&(C[Ye]=null,I[Ye].disconnect(be))}for(let xe=0;xe<ne.added.length;xe++){const be=ne.added[xe];let Ye=C.indexOf(be);if(Ye===-1){for(let Xe=0;Xe<I.length;Xe++)if(Xe>=C.length){C.push(be),Ye=Xe;break}else if(C[Xe]===null){C[Xe]=be,Ye=Xe;break}if(Ye===-1)break}const he=I[Ye];he&&he.connect(be)}}function $(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let xe=ne.near,be=ne.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(be=m.depthFar)),Q.near=O.near=U.near=xe,Q.far=O.far=U.far=be,(F!==Q.near||Y!==Q.far)&&(i.updateRenderState({depthNear:Q.near,depthFar:Q.far}),F=Q.near,Y=Q.far),Q.layers.mask=ne.layers.mask|6,U.layers.mask=Q.layers.mask&-5,O.layers.mask=Q.layers.mask&-3;const Ye=ne.parent,he=Q.cameras;$(Q,Ye);for(let Xe=0;Xe<he.length;Xe++)$(he[Xe],Ye);Q.projectionMatrix.copy(U.projectionMatrix),Q.projectionMatrixInverse.copy(U.projectionMatrixInverse),H===null&&ne.isPerspectiveCamera&&(H={camera:ne,fov:ne.fov,zoom:ne.zoom}),oe(ne,Q,Ye)};function oe(ne,xe,be){be===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bi*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(ne){return x[ne]};let ue=null;function Ne(ne,xe){if(u=xe.getViewerPose(c||a),_=xe,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ye=!1;be.length!==Q.cameras.length&&(Q.cameras.length=0,Ye=!0);for(let Ve=0;Ve<be.length;Ve++){const ot=be[Ve];let lt=null;if(p!==null)lt=p.getViewport(ot);else{const Ee=h.getViewSubImage(f,ot);lt=Ee.viewport,Ve===0&&(e.setRenderTargetTextures(y,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(y))}let le=X[Ve];le===void 0&&(le=new jt,le.layers.enable(Ve),le.viewport=new Ct,X[Ve]=le),le.matrix.fromArray(ot.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ot.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(lt.x,lt.y,lt.width,lt.height),Ve===0&&(Q.matrix.copy(le.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ye===!0&&Q.cameras.push(le)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){h=n.getBinding();const Ve=h.getDepthInformation(be[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,i.renderState)}if(he&&he.includes("camera-access")&&M){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<be.length;Ve++){const ot=be[Ve].camera;if(ot){let lt=x[ot];lt||(lt=new Al,x[ot]=lt);const le=h.getCameraImage(ot);lt.sourceTexture=le}}}}for(let be=0;be<I.length;be++){const Ye=C[be],he=I[be];Ye!==null&&he!==void 0&&he.update(Ye,xe,c||a)}ue&&ue(ne,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),_=null}const qe=new zl;qe.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){ue=ne},this.dispose=function(){}}}const Eg=new pt,Ql=new ht;Ql.set(-1,0,0,0,1,0,0,0,1);function Tg(r,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Fl(r)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function i(m,x,b,w,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(m,x):x.isMeshLambertMaterial?(s(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(m,x),h(m,x)):x.isMeshPhongMaterial?(s(m,x),u(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(m,x),f(m,x),x.isMeshPhysicalMaterial&&p(m,x,y)):x.isMeshMatcapMaterial?(s(m,x),_(m,x)):x.isMeshDepthMaterial?s(m,x):x.isMeshDistanceMaterial?(s(m,x),M(m,x)):x.isMeshNormalMaterial?s(m,x):x.isLineBasicMaterial?(a(m,x),x.isLineDashedMaterial&&o(m,x)):x.isPointsMaterial?l(m,x,b,w):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===1&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===1&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);const b=e.get(x),w=b.envMap,y=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ql),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function a(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function o(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,b,w){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*b,m.scale.value=w*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function u(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function h(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function f(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function p(m,x,b){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===1&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,x){x.matcap&&(m.matcap.value=x.matcap)}function M(m,x){const b=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bg(r,e,t,n){let i={},s={};function a(b,w){const y=w.program;n.uniformBlockBinding(b,y,i[b.id])}function o(b,w){let y=i[b.id];y===void 0&&(_(b),y=l(b),i[b.id]=y,b.addEventListener("dispose",m));const I=w.program;n.updateUBOMapping(b,I);const C=e.render.frame;s[b.id]!==C&&(c(b),s[b.id]=C)}function l(b){const w=r.createBuffer(),y=b.__size,I=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,y,I),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(b){const w=i[b.id],y=b.uniforms,I=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let C=0,S=y.length;C<S;C++){const A=y[C];if(Array.isArray(A))for(let H=0,U=A.length;H<U;H++)u(A[H],C,H,I);else u(A,C,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(b,w,y,I){if(f(b,w,y,I)===!0){const C=b.__offset,S=b.value;if(Array.isArray(S)){let A=0;for(let H=0;H<S.length;H++){const U=S[H],O=M(U,!0);h(U,b.__data,A),A+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else h(S,b.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,C,b.__data)}}function h(b,w,y){typeof b=="number"||typeof b=="boolean"?w[y]=b:b.isMatrix3?(w[y]=b.elements[0],w[y+1]=b.elements[1],w[y+2]=b.elements[2],w[y+3]=0,w[y+4]=b.elements[3],w[y+5]=b.elements[4],w[y+6]=b.elements[5],w[y+7]=0,w[y+8]=b.elements[6],w[y+9]=b.elements[7],w[y+10]=b.elements[8],w[y+11]=0):ArrayBuffer.isView(b)?w.set(b.subarray(0,w.length-y),y):b.toArray(w,y)}function f(b,w,y,I){const C=b.value,S=w+"_"+y;if(Array.isArray(C)){I[S]===void 0&&(I[S]=[]);const A=I[S];let H=!1;for(let U=0;U<C.length;U++)p(C[U],A,U)===!0&&(H=!0);return H}return p(C,I,S)}function p(b,w,y){if(w[y]===void 0)return typeof b=="number"||typeof b=="boolean"?w[y]=b:ArrayBuffer.isView(b)?w[y]=b.slice():w[y]=b.clone(),!0;{const I=w[y];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return w[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function _(b){const w=b.uniforms;let y=0;const I=16;for(let S=0,A=w.length;S<A;S++){const H=Array.isArray(w[S])?w[S]:[w[S]];for(let U=0,O=H.length;U<O;U++){const X=H[U],Q=Array.isArray(X.value)?X.value:[X.value],F=Array.isArray(w[S])||Array.isArray(X.value);let Y=y;for(let Z=0,me=Q.length;Z<me;Z++){const $=Q[Z],oe=M($,F),ue=y%I,Ne=ue%oe.boundary,qe=ue+Ne;y+=Ne,qe!==0&&I-qe<oe.storage&&(y+=I-qe),Z===0&&(Y=y),y+=oe.storage}const J=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new J((y-Y)/Float32Array.BYTES_PER_ELEMENT),X.__offset=Y}}const C=y%I;return C>0&&(y+=I-C),b.__size=y,b.__cache={},this}function M(b,w){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",b),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(b){const w=b.target;w.removeEventListener("dispose",m),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function x(){for(const b in i)r.deleteBuffer(i[b]);i={},s={}}return{bind:a,update:o,dispose:x}}const Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function wg(){return yn===null&&(yn=new xr(Ag,16,16,1030,1016),yn.name="DFG_LUT",yn.minFilter=1006,yn.magFilter=1006,yn.wrapS=1001,yn.wrapT=1001,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class Rg{constructor(e={}){const{canvas:t=_c(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=1009}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=p,m=new Set([1033,1031,1029]),x=new Set([1009,1014,1012,1020,1017,1018]),b=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let I=null,C=null;const S=[],A=[];let H=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let O=!1,X=null,Q=null,F=null,Y=null;this._outputColorSpace=Ot;let J=0,Z=0,me=null,$=-1,oe=null;const ue=new Ct,Ne=new Ct;let qe=null;const ne=new it(0);let xe=0,be=t.width,Ye=t.height,he=1,Xe=null,St=null;const Ve=new Ct(0,0,be,Ye),ot=new Ct(0,0,be,Ye);let lt=!1;const le=new vr,Ee=new Ia;let Me=!1,Ge=!1;const Le=new pt,st=new k,K=new Ct,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function We(){return me===null?he:1}let B=n;function wt(d,v){return t.getContext(d,v)}let ct,Mt,Te,Rt,Ze,et,L,E,q,de,ce,Ae,Ie,ie,se,we,D,re,j,Ce,ve,Re,Je;try{const d={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),B===null){const v="webgl2";if(B=wt(v,d),B===null)throw wt(v)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(d){throw t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),at("WebGLRenderer: "+d.message),d}function ft(){ct=new Lp(B),ct.init(),ve=new xg(B,ct),Mt=new Sp(B,ct,e,ve),Te=new gg(B,ct),Mt.reversedDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),Q=B.createFramebuffer(),F=B.createFramebuffer(),Y=B.createFramebuffer(),Rt=new Dp(B),Ze=new ng,et=new _g(B,ct,Te,Ze,Mt,ve,Rt),L=new Pp(U),E=new Fh(B),Re=new xp(B,E),q=new Ip(B,E,Rt,Re),de=new Up(B,q,E,Re,Rt),re=new Fp(B,Mt,et),se=new Mp(Ze),ce=new tg(U,L,ct,Mt,Re,se),Ae=new Tg(U,Ze),Ie=new rg,ie=new ug(ct),D=new _p(U,L,Te,de,_,l),we=new mg(U,de,Mt),Je=new bg(B,Rt,Mt,Te),j=new vp(B,ct,Rt),Ce=new Np(B,ct,Rt),Rt.programs=ce.programs,U.capabilities=Mt,U.extensions=ct,U.properties=Ze,U.renderLists=Ie,U.shadowMap=we,U.state=Te,U.info=Rt}M!==1009&&(H=new Bp(M,t.width,t.height,o,i,s));const Se=new yg(U,B);this.xr=Se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const d=ct.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=ct.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(d){d!==void 0&&(he=d,this.setSize(be,Ye,!1))},this.getSize=function(d){return d.set(be,Ye)},this.setSize=function(d,v,T=!0){if(Se.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}be=d,Ye=v,t.width=Math.floor(d*he),t.height=Math.floor(v*he),T===!0&&(t.style.width=d+"px",t.style.height=v+"px"),H!==null&&H.setSize(t.width,t.height),this.setViewport(0,0,d,v)},this.getDrawingBufferSize=function(d){return d.set(be*he,Ye*he).floor()},this.setDrawingBufferSize=function(d,v,T){be=d,Ye=v,he=T,t.width=Math.floor(d*T),t.height=Math.floor(v*T),this.setViewport(0,0,d,v)},this.setEffects=function(d){if(M===1009){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(d){for(let v=0;v<d.length;v++)if(d[v].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(d||[])},this.getCurrentViewport=function(d){return d.copy(ue)},this.getViewport=function(d){return d.copy(Ve)},this.setViewport=function(d,v,T,R){d.isVector4?Ve.set(d.x,d.y,d.z,d.w):Ve.set(d,v,T,R),Te.viewport(ue.copy(Ve).multiplyScalar(We()).round())},this.getScissor=function(d){return d.copy(ot)},this.setScissor=function(d,v,T,R){d.isVector4?ot.set(d.x,d.y,d.z,d.w):ot.set(d,v,T,R),Te.scissor(Ne.copy(ot).multiplyScalar(We()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(d){Te.setScissorTest(lt=d)},this.setOpaqueSort=function(d){Xe=d},this.setTransparentSort=function(d){St=d},this.getClearColor=function(d){return d.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(d=!0,v=!0,T=!0){let R=0;if(d){let N=!1;if(me!==null){const P=me.texture.format;N=m.has(P)}if(N){const P=me.texture.type,V=x.has(P),G=D.getClearColor(),z=D.getClearAlpha(),W=G.r,ae=G.g,ee=G.b;V?(b[0]=W,b[1]=ae,b[2]=ee,b[3]=z,B.clearBufferuiv(B.COLOR,0,b)):(w[0]=W,w[1]=ae,w[2]=ee,w[3]=z,B.clearBufferiv(B.COLOR,0,w))}else R|=B.COLOR_BUFFER_BIT}v&&(R|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),T&&(R|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&B.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(d){d.setRenderer(this),X=d},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),D.dispose(),Ie.dispose(),ie.dispose(),et.dispose(),Ze.dispose(),L.dispose(),de.dispose(),q.dispose(),Re.dispose(),Je.dispose(),ce.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Zi),Se.removeEventListener("sessionend",Dr),Pn.stop()};function Qe(d){d.preventDefault(),Ms("WebGLRenderer: Context Lost."),O=!0}function ut(){Ms("WebGLRenderer: Context Restored."),O=!1;const d=Rt.autoReset,v=we.enabled,T=we.autoUpdate,R=we.needsUpdate,N=we.type;ft(),Rt.autoReset=d,we.enabled=v,we.autoUpdate=T,we.needsUpdate=R,we.type=N}function Ue(d){at("WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function Et(d){const v=d.target;v.removeEventListener("dispose",Et),Gt(v)}function Gt(d){xn(d),Ze.remove(d)}function xn(d){const v=Ze.get(d).programs;v!==void 0&&(v.forEach(function(T){ce.releaseProgram(T)}),d.isShaderMaterial&&ce.releaseShaderCache(d))}this.renderBufferDirect=function(d,v,T,R,N,P){v===null&&(v=He);const V=N.isMesh&&N.matrixWorld.determinantAffine()<0,G=Gr(d,v,T,R,N);Te.setMaterial(R,V);let z=T.index,W=1;if(R.wireframe===!0){if(z=q.getWireframeAttribute(T),z===void 0)return;W=2}const ae=T.drawRange,ee=T.attributes.position;let te=ae.start*W,pe=(ae.start+ae.count)*W;P!==null&&(te=Math.max(te,P.start*W),pe=Math.min(pe,(P.start+P.count)*W)),z!==null?(te=Math.max(te,0),pe=Math.min(pe,z.count)):ee!=null&&(te=Math.max(te,0),pe=Math.min(pe,ee.count));const ge=pe-te;if(ge<0||ge===1/0)return;Re.setup(N,R,G,T,z);let _e,Pe=j;if(z!==null&&(_e=E.get(z),Pe=Ce,Pe.setIndex(_e)),N.isMesh)R.wireframe===!0?(Te.setLineWidth(R.wireframeLinewidth*We()),Pe.setMode(B.LINES)):Pe.setMode(B.TRIANGLES);else if(N.isLine){let je=R.linewidth;je===void 0&&(je=1),Te.setLineWidth(je*We()),N.isLineSegments?Pe.setMode(B.LINES):N.isLineLoop?Pe.setMode(B.LINE_LOOP):Pe.setMode(B.LINE_STRIP)}else N.isPoints?Pe.setMode(B.POINTS):N.isSprite&&Pe.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Pe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const je=N._multiDrawStarts,fe=N._multiDrawCounts,nt=N._multiDrawCount,ye=z?E.get(z).bytesPerElement:1,Fe=Ze.get(R).currentProgram.getUniforms();for(let Oe=0;Oe<nt;Oe++)Fe.setValue(B,"_gl_DrawID",Oe),Pe.render(je[Oe]/ye,fe[Oe])}else if(N.isInstancedMesh)Pe.renderInstances(te,ge,N.count);else if(T.isInstancedBufferGeometry){const je=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,fe=Math.min(T.instanceCount,je);Pe.renderInstances(te,ge,fe)}else Pe.render(te,ge)};function Nr(d,v,T,R){X!==null&&d.isNodeMaterial&&X.setObject(R,d),Me===!0&&se.setState(d,T,!1),d.transparent===!0&&d.side===2&&d.forceSinglePass===!1?(d.side=1,d.needsUpdate=!0,vn(d,v,R),d.side=0,d.needsUpdate=!0,vn(d,v,R),d.side=2):vn(d,v,R)}this.compile=function(d,v,T=null){T===null&&(T=d),X!==null&&X.renderStart(d,v,T),C=ie.get(T),C.init(v),A.push(C),T.traverseVisible(function(N){N.isLight&&N.layers.test(v.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),d!==T&&d.traverseVisible(function(N){N.isLight&&N.layers.test(v.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),C.setupLights(),X!==null&&X.updateLights(C.state.lightsArray),Ge=this.localClippingEnabled,Me=se.init(this.clippingPlanes,Ge),Me===!0&&se.setGlobalState(this.clippingPlanes,v),X!==null&&we.render(C.state.shadowsArray,T,v);const R=new Set;return d.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const P=N.material;if(P)if(Array.isArray(P))for(let V=0;V<P.length;V++){const G=P[V];Nr(G,T,v,N),R.add(G)}else Nr(P,T,v,N),R.add(P)}),C=A.pop(),X!==null&&X.renderEnd(),R},this.compileAsync=function(d,v,T=null){const R=this.compile(d,v,T);return new Promise(N=>{function P(){if(R.forEach(function(V){const z=Ze.get(V).currentProgram;(z===void 0||z.isReady())&&R.delete(V)}),R.size===0){N(d);return}setTimeout(P,10)}ct.get("KHR_parallel_shader_compile")!==null?P():setTimeout(P,10)})};let Yi=null;function Ns(d){Yi&&Yi(d)}function Zi(){Pn.stop()}function Dr(){Pn.start()}const Pn=new zl;Pn.setAnimationLoop(Ns),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(d){Yi=d,Se.setAnimationLoop(d),d===null?Pn.stop():Pn.start()},Se.addEventListener("sessionstart",Zi),Se.addEventListener("sessionend",Dr),this.render=function(d,v){if(v!==void 0&&v.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;X!==null&&X.renderStart(d,v);const T=Se.enabled===!0&&Se.isPresenting===!0,R=H!==null&&(me===null||T)&&H.begin(U,me);if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(v),v=Se.getCamera()),d.isScene===!0&&d.onBeforeRender(U,d,v,me),C=ie.get(d,A.length),C.init(v),C.state.textureUnits=et.getTextureUnits(),A.push(C),Le.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),v.isArrayCamera?Ee.setFromArrayCamera(v):le.setFromProjectionMatrix(Le,2e3,v.reversedDepth),Ge=this.localClippingEnabled,Me=se.init(this.clippingPlanes,Ge),I=Ie.get(d,S.length),I.init(),S.push(I),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){const V=U.xr.getDepthSensingMesh();V!==null&&Ki(V,v,-1/0,U.sortObjects)}Ki(d,v,0,U.sortObjects),I.finish(),X!==null&&X.updateLights(C.state.lightsArray),U.sortObjects===!0&&I.sort(Xe,St),Ke=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Ke&&D.addToRenderList(I,d),this.info.autoReset===!0&&this.info.reset(),Me===!0&&se.beginShadows();const N=C.state.shadowsArray;if(we.render(N,d,v),Me===!0&&se.endShadows(),(R&&H.hasRenderPass())===!1){const V=I.opaque,G=I.transmissive;if(C.setupLights(),v.isArrayCamera){const z=v.cameras;if(G.length>0)for(let W=0,ae=z.length;W<ae;W++){const ee=z[W];Fr(V,G,d,ee)}Ke&&D.render(d);for(let W=0,ae=z.length;W<ae;W++){const ee=z[W];Ji(I,d,ee,ee.viewport)}}else G.length>0&&Fr(V,G,d,v),Ke&&D.render(d),Ji(I,d,v)}me!==null&&Z===0&&(et.updateMultisampleRenderTarget(me),et.updateRenderTargetMipmap(me)),R&&H.end(U),d.isScene===!0&&d.onAfterRender(U,d,v),Re.resetDefaultState(),$=-1,oe=null,A.pop(),A.length>0?(C=A[A.length-1],et.setTextureUnits(C.state.textureUnits),Me===!0&&se.setGlobalState(U.clippingPlanes,C.state.camera)):C=null,S.pop(),S.length>0?I=S[S.length-1]:I=null,X!==null&&X.renderEnd()};function Ki(d,v,T,R){if(d.visible===!1)return;if(d.layers.test(v.layers)){if(d.isGroup)T=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(v);else if(d.isLight)C.pushLight(d),d.castShadow&&C.pushShadow(d);else if(d.isSprite){const V=v.isArrayCamera?Ee:le;if(!d.frustumCulled||d.intersectsFrustum(V)){R&&K.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Le);const G=de.update(d),z=d.material;z.visible&&I.push(d,G,z,T,K.z,null,v)}}else if(d.isMesh||d.isLine||d.isPoints){const V=v.isArrayCamera?Ee:le;if(!d.frustumCulled||d.intersectsFrustum(V)){const G=de.update(d),z=d.material;if(R&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),K.copy(d.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),K.copy(G.boundingSphere.center)),K.applyMatrix4(d.matrixWorld).applyMatrix4(Le)),Array.isArray(z)){const W=G.groups;for(let ae=0,ee=W.length;ae<ee;ae++){const te=W[ae],pe=z[te.materialIndex];pe&&pe.visible&&I.push(d,G,pe,T,K.z,te,v)}}else z.visible&&I.push(d,G,z,T,K.z,null,v)}}}const P=d.children;for(let V=0,G=P.length;V<G;V++)Ki(P[V],v,T,R)}function Ji(d,v,T,R){const{opaque:N,transmissive:P,transparent:V}=d;C.setupLightsView(T),Me===!0&&se.setGlobalState(U.clippingPlanes,T),R&&Te.viewport(ue.copy(R)),N.length>0&&ni(N,v,T),P.length>0&&ni(P,v,T),V.length>0&&ni(V,v,T),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Fr(d,v,T,R){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[R.id]===void 0){const te=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[R.id]=new An(1,1,{generateMipmaps:!0,type:te?1016:1009,minFilter:1008,samples:Math.max(4,Mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const P=C.state.transmissionRenderTarget[R.id],V=R.viewport||ue;P.setSize(V.z*U.transmissionResolutionScale,V.w*U.transmissionResolutionScale);const G=U.getRenderTarget(),z=U.getActiveCubeFace(),W=U.getActiveMipmapLevel();U.setRenderTarget(P),U.getClearColor(ne),xe=U.getClearAlpha(),xe<1&&U.setClearColor(16777215,.5),U.clear(),Ke&&D.render(T);const ae=U.toneMapping;U.toneMapping=0;const ee=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),C.setupLightsView(R),Me===!0&&se.setGlobalState(U.clippingPlanes,R),ni(d,T,R),et.updateMultisampleRenderTarget(P),et.updateRenderTargetMipmap(P),ct.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let pe=0,ge=v.length;pe<ge;pe++){const _e=v[pe],{object:Pe,geometry:je,material:fe,group:nt}=_e;if(fe.side===2&&Pe.layers.test(R.layers)){const ye=fe.side;fe.side=1,fe.needsUpdate=!0,Ur(Pe,T,R,je,fe,nt),fe.side=ye,fe.needsUpdate=!0,te=!0}}te===!0&&(et.updateMultisampleRenderTarget(P),et.updateRenderTargetMipmap(P))}U.setRenderTarget(G,z,W),U.setClearColor(ne,xe),ee!==void 0&&(R.viewport=ee),U.toneMapping=ae}function ni(d,v,T){const R=v.isScene===!0?v.overrideMaterial:null;for(let N=0,P=d.length;N<P;N++){const V=d[N],{object:G,geometry:z,group:W}=V;let ae=V.material;ae.allowOverride===!0&&R!==null&&(ae=R),G.layers.test(T.layers)&&Ur(G,v,T,z,ae,W)}}function Ur(d,v,T,R,N,P){X!==null&&N.isNodeMaterial&&X.setObject(d,N),d.onBeforeRender(U,v,T,R,N,P),d.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),N.onBeforeRender(U,v,T,R,d,P),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,U.renderBufferDirect(T,v,R,N,d,P),N.side=0,N.needsUpdate=!0,U.renderBufferDirect(T,v,R,N,d,P),N.side=2):U.renderBufferDirect(T,v,R,N,d,P),d.onAfterRender(U,v,T,R,N,P)}function Or(d){let v=0;for(const T of d)T.texture!==null&&v++;return v}function vn(d,v,T){v.isScene!==!0&&(v=He);const R=Ze.get(d),N=C.state.lights,P=C.state.shadowsArray,V=N.state.version,G=ce.getParameters(d,N.state,P,v,T,C.state.lightProbeGridArray),z=ce.getProgramCacheKey(G);let W=R.programs;R.environment=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?v.environment:null,R.fog=v.fog;const ae=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap;R.envMap=L.get(d.envMap||R.environment,ae),R.envMapRotation=R.environment!==null&&d.envMap===null?v.environmentRotation:d.envMapRotation,W===void 0&&(d.addEventListener("dispose",Et),W=new Map,R.programs=W,R.programVariants=new Map);let ee=W.get(z);if(ee!==void 0){if(R.currentProgram===ee&&R.lightsStateVersion===V)return ii(d,G),ee}else G.uniforms=ce.getUniforms(d),X!==null&&d.isNodeMaterial&&X.build(d,T,G),d.onBeforeCompile(G,U),ee=ce.acquireProgram(G,z),W.set(z,ee),R.uniforms=G.uniforms;const te=R.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(te.clippingPlanes=se.uniform),ii(d,G),R.needsLights=tn(d),R.lightsStateVersion=V,R.needsLights&&(te.ambientLightColor.value=N.state.ambient,te.lightProbe.value=N.state.probe,te.sunLights.value=N.state.sun,te.sunLightShadows.value=N.state.sunShadow,te.directionalLights.value=N.state.directional,te.directionalLightShadows.value=N.state.directionalShadow,te.spotLights.value=N.state.spot,te.spotLightShadows.value=N.state.spotShadow,te.rectAreaLights.value=N.state.rectArea,te.ltc_1.value=N.state.rectAreaLTC1,te.ltc_2.value=N.state.rectAreaLTC2,te.pointLights.value=N.state.point,te.pointLightShadows.value=N.state.pointShadow,te.hemisphereLights.value=N.state.hemi,te.sunShadowMatrix.value=N.state.sunShadowMatrix,te.sunShadowCascade.value=N.state.sunShadowCascade,te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,te.spotLightMatrix.value=N.state.spotLightMatrix,te.spotLightMap.value=N.state.spotLightMap,te.pointShadowMatrix.value=N.state.pointShadowMatrix),R.numLightProbeGrids=Or(C.state.lightProbeGridArray),R.currentProgram=ee,R.uniformsList=null,ee}function gi(d,v,T,R,N){const P=Ze.get(d),V=P.currentProgram.id+","+R+","+N;let G=P.programVariants.get(V);return G===void 0?(G=vn(d,v,T),P.programVariants.set(V,G)):(P.currentProgram=G,P.uniformsList=null,P.outputColorSpace=R,P.toneMapping=N),G}function Br(d){if(d.uniformsList===null){const v=d.currentProgram.getUniforms();d.uniformsList=vs.seqWithValue(v.seq,d.uniforms)}return d.uniformsList}function ii(d,v){const T=Ze.get(d);T.outputColorSpace=v.outputColorSpace,T.batching=v.batching,T.batchingColor=v.batchingColor,T.instancing=v.instancing,T.instancingColor=v.instancingColor,T.instancingMorph=v.instancingMorph,T.skinning=v.skinning,T.morphTargets=v.morphTargets,T.morphNormals=v.morphNormals,T.morphColors=v.morphColors,T.morphTargetsCount=v.morphTargetsCount,T.numClippingPlanes=v.numClippingPlanes,T.numIntersection=v.numClipIntersection,T.vertexAlphas=v.vertexAlphas,T.vertexTangents=v.vertexTangents,T.toneMapping=v.toneMapping}function Gr(d,v,T,R,N){v.isScene!==!0&&(v=He),et.resetTextureUnits();const P=v.fog,V=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?v.environment:null,G=me===null?U.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vt.workingColorSpace,z=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,W=L.get(R.envMap||V,z),ae=R.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,ee=!!T.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),te=!!T.morphAttributes.position,pe=!!T.morphAttributes.normal,ge=!!T.morphAttributes.color;let _e=0;R.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=U.toneMapping);const Pe=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,je=Pe!==void 0?Pe.length:0,fe=Ze.get(R),nt=C.state.lights;if(Me===!0&&(Ge===!0||d!==oe)){const rt=d===oe&&R.id===$;se.setState(R,d,rt)}let ye=!1,Fe=!1;R.version===fe.__version?fe.needsLights&&fe.lightsStateVersion!==nt.state.version||N.isBatchedMesh&&fe.batching===!1||!N.isBatchedMesh&&fe.batching===!0||N.isBatchedMesh&&fe.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&fe.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&fe.instancing===!1||!N.isInstancedMesh&&fe.instancing===!0||N.isSkinnedMesh&&fe.skinning===!1||!N.isSkinnedMesh&&fe.skinning===!0||N.isInstancedMesh&&fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&fe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&fe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&fe.instancingMorph===!1&&N.morphTexture!==null||fe.envMap!==W||R.fog===!0&&fe.fog!==P||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==se.numPlanes||fe.numIntersection!==se.numIntersection)||fe.vertexAlphas!==ae||fe.vertexTangents!==ee||fe.morphTargets!==te||fe.morphNormals!==pe||fe.morphColors!==ge||fe.morphTargetsCount!==je||fe.numLightProbeGrids!==Or(C.state.lightProbeGridArray)?ye=!0:(fe.outputColorSpace!==G||fe.toneMapping!==_e)&&(Fe=!0):(ye=!0,fe.__version=R.version);let Oe=fe.currentProgram;(ye===!0||Fe===!0)&&(Oe=Fe===!0?gi(R,v,N,G,_e):vn(R,v,N),X&&R.isNodeMaterial&&X.onUpdateProgram(R,Oe,fe));let yt=!1,dt=!1,tt=!1;const ze=Oe.getUniforms(),xt=fe.uniforms;if(Te.useProgram(Oe.program)&&(yt=!0,dt=!0,tt=!0),R.id!==$&&($=R.id,dt=!0),yt||oe!==d){Te.buffers.depth.getReversed()&&d.reversedDepth!==!0&&(d._reversedDepth=!0,d.updateProjectionMatrix()),ze.setValue(B,"projectionMatrix",d.projectionMatrix),ze.setValue(B,"viewMatrix",d.matrixWorldInverse);const Tt=ze.map.cameraPosition;Tt!==void 0&&Tt.setValue(B,st.setFromMatrixPosition(d.matrixWorld)),Mt.logarithmicDepthBuffer&&ze.setValue(B,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ze.setValue(B,"isOrthographic",d.isOrthographicCamera===!0),oe!==d&&(oe=d,dt=!0,tt=!0)}if(fe.needsLights&&(nt.state.sunShadowMap.length>0&&ze.setValue(B,"sunShadowMap",nt.state.sunShadowMap,et),nt.state.directionalShadowMap.length>0&&ze.setValue(B,"directionalShadowMap",nt.state.directionalShadowMap,et),nt.state.spotShadowMap.length>0&&ze.setValue(B,"spotShadowMap",nt.state.spotShadowMap,et),nt.state.pointShadowMap.length>0&&ze.setValue(B,"pointShadowMap",nt.state.pointShadowMap,et)),N.isSkinnedMesh){ze.setOptional(B,N,"bindMatrix"),ze.setOptional(B,N,"bindMatrixInverse");const rt=N.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),ze.setValue(B,"boneTexture",rt.boneTexture,et))}N.isBatchedMesh&&(ze.setOptional(B,N,"batchingTexture"),ze.setValue(B,"batchingTexture",N._matricesTexture,et),ze.setOptional(B,N,"batchingIdTexture"),ze.setValue(B,"batchingIdTexture",N._indirectTexture,et),ze.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&ze.setValue(B,"batchingColorTexture",N._colorsTexture,et));const Pt=T.morphAttributes;if((Pt.position!==void 0||Pt.normal!==void 0||Pt.color!==void 0)&&re.update(N,T,Oe),(dt||fe.receiveShadow!==N.receiveShadow)&&(fe.receiveShadow=N.receiveShadow,ze.setValue(B,"receiveShadow",N.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&v.environment!==null&&(xt.envMapIntensity.value=v.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=wg()),dt){if(ze.setValue(B,"toneMappingExposure",U.toneMappingExposure),fe.needsLights&&Xt(xt,tt),P&&R.fog===!0&&Ae.refreshFogUniforms(xt,P),Ae.refreshMaterialUniforms(xt,R,he,Ye,C.state.transmissionRenderTarget[d.id]),fe.needsLights&&fe.numLightProbeGrids>0){const rt=y;let Tt=0;for(const Zt of C.state.lightProbeGridArray)Zt.texture!==null&&(rt.textures[Tt]=Zt.texture,rt.min[Tt]=Zt.boundingBox.min,rt.max[Tt]=Zt.boundingBox.max,rt.resolution[Tt]=Zt.resolution,Tt++);for(const Zt in rt)rt[Zt].length=Tt;xt.probesSH.value=rt.textures,xt.probesMin.value=rt.min,xt.probesMax.value=rt.max,xt.probesResolution.value=rt.resolution}vs.upload(B,Br(fe),xt,et)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(vs.upload(B,Br(fe),xt,et),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ze.setValue(B,"center",N.center),ze.setValue(B,"modelViewMatrix",N.modelViewMatrix),ze.setValue(B,"normalMatrix",N.normalMatrix),ze.setValue(B,"modelMatrix",N.matrixWorld),R.uniformsGroups!==void 0){const rt=R.uniformsGroups;for(let Tt=0,Zt=rt.length;Tt<Zt;Tt++){const zn=rt[Tt];Je.update(zn,Oe),Je.bind(zn,Oe)}}return Oe}function Xt(d,v){d.ambientLightColor.needsUpdate=v,d.lightProbe.needsUpdate=v,d.sunLights.needsUpdate=v,d.sunLightShadows.needsUpdate=v,d.directionalLights.needsUpdate=v,d.directionalLightShadows.needsUpdate=v,d.pointLights.needsUpdate=v,d.pointLightShadows.needsUpdate=v,d.spotLights.needsUpdate=v,d.spotLightShadows.needsUpdate=v,d.rectAreaLights.needsUpdate=v,d.hemisphereLights.needsUpdate=v}function tn(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(d,v,T){const R=Ze.get(d);R.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),Ze.get(d.texture).__webglTexture=v,Ze.get(d.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:T,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,v){const T=Ze.get(d);T.__webglFramebuffer=v,T.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(d,v=0,T=0){me=d,J=v,Z=T;let R=null,N=!1,P=!1;if(d){const G=Ze.get(d);if(G.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(B.FRAMEBUFFER,G.__webglFramebuffer),ue.copy(d.viewport),Ne.copy(d.scissor),qe=d.scissorTest,Te.viewport(ue),Te.scissor(Ne),Te.setScissorTest(qe),$=-1;return}else if(G.__webglFramebuffer===void 0)et.setupRenderTarget(d);else if(G.__hasExternalTextures)et.rebindTextures(d,Ze.get(d.texture).__webglTexture,Ze.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const ae=d.depthTexture;if(G.__boundDepthTexture!==ae){if(ae!==null&&Ze.has(ae)&&(d.width!==ae.image.width||d.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(d)}}const z=d.texture;(z.isData3DTexture||z.isDataArrayTexture||z.isCompressedArrayTexture)&&(P=!0);const W=Ze.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(W[v])?R=W[v][T]:R=W[v],N=!0):d.samples>0&&et.useMultisampledRTT(d)===!1?R=Ze.get(d).__webglMultisampledFramebuffer:Array.isArray(W)?R=W[T]:R=W,ue.copy(d.viewport),Ne.copy(d.scissor),qe=d.scissorTest}else ue.copy(Ve).multiplyScalar(he).floor(),Ne.copy(ot).multiplyScalar(he).floor(),qe=lt;if(T!==0&&(R=Q),Te.bindFramebuffer(B.FRAMEBUFFER,R)&&Te.drawBuffers(d,R),Te.viewport(ue),Te.scissor(Ne),Te.setScissorTest(qe),N){const G=Ze.get(d.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+v,G.__webglTexture,T)}else if(P){const G=v;for(let z=0;z<d.textures.length;z++){const W=Ze.get(d.textures[z]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+z,W.__webglTexture,T,G)}}else if(d!==null&&T!==0){const G=Ze.get(d.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,G.__webglTexture,T)}$=-1};function g(d){const v=Ze.get(d);return(v.__readFormat!==d.format||v.__readType!==d.type)&&(v.__readFormat=d.format,v.__readType=d.type,v.__formatReadable=Mt.textureFormatReadable(d.format),v.__typeReadable=Mt.textureTypeReadable(d.type)),v}this.readRenderTargetPixels=function(d,v,T,R,N,P,V,G=0){if(!(d&&d.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=Ze.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&V!==void 0&&(z=z[V],Array.isArray(z)&&(z=z[0])),z){Te.bindFramebuffer(B.FRAMEBUFFER,z);try{const W=d.textures[G],ae=W.format,ee=W.type;d.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+G);const te=g(W);if(te.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=d.width-R&&T>=0&&T<=d.height-N&&B.readPixels(v,T,R,N,ve.convert(ae),ve.convert(ee),P)}finally{const W=me!==null?Ze.get(me).__webglFramebuffer:null;Te.bindFramebuffer(B.FRAMEBUFFER,W)}}},this.readRenderTargetPixelsAsync=async function(d,v,T,R,N,P,V,G=0){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let z=Ze.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&V!==void 0&&(z=z[V],Array.isArray(z)&&(z=z[0])),z)if(v>=0&&v<=d.width-R&&T>=0&&T<=d.height-N){Te.bindFramebuffer(B.FRAMEBUFFER,z);const W=d.textures[G],ae=W.format,ee=W.type;d.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+G);const te=g(W);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.bufferData(B.PIXEL_PACK_BUFFER,P.byteLength,B.STREAM_READ),B.readPixels(v,T,R,N,ve.convert(ae),ve.convert(ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const ge=me!==null?Ze.get(me).__webglFramebuffer:null;Te.bindFramebuffer(B.FRAMEBUFFER,ge);const _e=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await xc(B,_e,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,P),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(pe),B.deleteSync(_e),P}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(d,v=null,T=0){const R=Math.pow(2,-T),N=Math.floor(d.image.width*R),P=Math.floor(d.image.height*R),V=v!==null?v.x:0,G=v!==null?v.y:0;et.setTexture2D(d,0),B.copyTexSubImage2D(B.TEXTURE_2D,T,0,0,V,G,N,P),Te.unbindTexture()},this.copyTextureToTexture=function(d,v,T=null,R=null,N=0,P=0){let V,G,z,W,ae,ee,te,pe,ge;const _e=d.isCompressedTexture?d.mipmaps[P]:d.image;if(T!==null)V=T.max.x-T.min.x,G=T.max.y-T.min.y,z=T.isBox3?T.max.z-T.min.z:1,W=T.min.x,ae=T.min.y,ee=T.isBox3?T.min.z:0;else{const ze=Math.pow(2,-N);V=Math.floor(_e.width*ze),G=Math.floor(_e.height*ze),d.isDataArrayTexture?z=_e.depth:d.isData3DTexture?z=Math.floor(_e.depth*ze):z=1,W=0,ae=0,ee=0}R!==null?(te=R.x,pe=R.y,ge=R.z):(te=0,pe=0,ge=0);const Pe=ve.convert(v.format),je=ve.convert(v.type);let fe;v.isData3DTexture?(et.setTexture3D(v,0),fe=B.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(et.setTexture2DArray(v,0),fe=B.TEXTURE_2D_ARRAY):(et.setTexture2D(v,0),fe=B.TEXTURE_2D),Te.activeTexture(B.TEXTURE0),Te.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,v.flipY),Te.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),Te.pixelStorei(B.UNPACK_ALIGNMENT,v.unpackAlignment);const nt=Te.getParameter(B.UNPACK_ROW_LENGTH),ye=Te.getParameter(B.UNPACK_IMAGE_HEIGHT),Fe=Te.getParameter(B.UNPACK_SKIP_PIXELS),Oe=Te.getParameter(B.UNPACK_SKIP_ROWS),yt=Te.getParameter(B.UNPACK_SKIP_IMAGES);Te.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),Te.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),Te.pixelStorei(B.UNPACK_SKIP_PIXELS,W),Te.pixelStorei(B.UNPACK_SKIP_ROWS,ae),Te.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);const dt=d.isDataArrayTexture||d.isData3DTexture,tt=v.isDataArrayTexture||v.isData3DTexture;if(d.isDepthTexture){const ze=Ze.get(d),xt=Ze.get(v),Pt=Ze.get(ze.__renderTarget),rt=Ze.get(xt.__renderTarget);Te.bindFramebuffer(B.READ_FRAMEBUFFER,Pt.__webglFramebuffer),Te.bindFramebuffer(B.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Tt=0;Tt<z;Tt++)dt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ze.get(d).__webglTexture,N,ee+Tt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ze.get(v).__webglTexture,P,ge+Tt)),B.blitFramebuffer(W,ae,W+V,ae+G,te,pe,te+V,pe+G,B.DEPTH_BUFFER_BIT,B.NEAREST);Te.bindFramebuffer(B.READ_FRAMEBUFFER,null),Te.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(N!==0||d.isRenderTargetTexture||Ze.has(d)){const ze=Ze.get(d),xt=Ze.get(v);Te.bindFramebuffer(B.READ_FRAMEBUFFER,F),Te.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let Pt=0;Pt<z;Pt++)dt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,N,ee+Pt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,N),tt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xt.__webglTexture,P,ge+Pt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xt.__webglTexture,P),N!==0?B.blitFramebuffer(W,ae,W+V,ae+G,te,pe,te+V,pe+G,B.COLOR_BUFFER_BIT,B.NEAREST):tt?B.copyTexSubImage3D(fe,P,te,pe,ge+Pt,W,ae,V,G):B.copyTexSubImage2D(fe,P,te,pe,W,ae,V,G);Te.bindFramebuffer(B.READ_FRAMEBUFFER,null),Te.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else tt?d.isDataTexture||d.isData3DTexture?B.texSubImage3D(fe,P,te,pe,ge,V,G,z,Pe,je,_e.data):v.isCompressedArrayTexture?B.compressedTexSubImage3D(fe,P,te,pe,ge,V,G,z,Pe,_e.data):B.texSubImage3D(fe,P,te,pe,ge,V,G,z,Pe,je,_e):d.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,P,te,pe,V,G,Pe,je,_e.data):d.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,P,te,pe,_e.width,_e.height,Pe,_e.data):B.texSubImage2D(B.TEXTURE_2D,P,te,pe,V,G,Pe,je,_e);Te.pixelStorei(B.UNPACK_ROW_LENGTH,nt),Te.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye),Te.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),Te.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),Te.pixelStorei(B.UNPACK_SKIP_IMAGES,yt),P===0&&v.generateMipmaps===!0&&v.mipmapsAutoUpdate===!0&&B.generateMipmap(fe),Te.unbindTexture()},this.initRenderTarget=function(d){Ze.get(d).__webglFramebuffer===void 0&&et.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?et.setTextureCube(d,0):d.isData3DTexture?et.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?et.setTexture2DArray(d,0):et.setTexture2D(d,0),Te.unbindTexture()},this.resetState=function(){J=0,Z=0,me=null,Te.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}function Cg(){const r=new Bl().load("/config/upholstery.webp");return r.wrapS=r.wrapT=1e3,r.anisotropy=4,(e,t,n)=>{const i=n==="CabinFabric"||n==="CabinDoorFabric",s=n==="CabinBase";e.metalness=0,e.onBeforeCompile=a=>{a.uniforms.grainAtlas={value:r},a.uniforms.toCar={value:t},a.vertexShader=`uniform mat4 toCar; varying vec3 carPoint; varying vec3 carNormal;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
carPoint=(toCar*vec4(position,1.)).xyz; carNormal=normalize(mat3(toCar)*normal);`),a.fragmentShader=`uniform sampler2D grainAtlas; varying vec3 carPoint; varying vec3 carNormal;
`+a.fragmentShader.replace("#include <map_fragment>",`
        vec3 original=vec3(.55);
        #ifdef USE_MAP
          original=texture2D(map,vMapUv).rgb;
        #endif
        vec3 weights=pow(abs(normalize(carNormal)),vec3(5.));weights/=max(.001,dot(weights,vec3(1.)));
        vec3 p=carPoint*15.;
        float grain=dot(weights,vec3(texture2D(grainAtlas,p.yz).${i?"g":"r"},texture2D(grainAtlas,p.xz).${i?"g":"r"},texture2D(grainAtlas,p.xy).${i?"g":"r"}));
        float mask=${s?"smoothstep(.48,.64,abs(carPoint.z))*(1.-smoothstep(.85,1.01,carPoint.y))*smoothstep(.18,.34,carPoint.y)*smoothstep(-.8,-.53,carPoint.x)*(1.-smoothstep(.49,.75,carPoint.x))":"1."};
        float greenCoating=smoothstep(.08,.30,original.g-max(original.r,original.b));
        original=mix(original,vec3(.055,.095,.065)*(.55+.65*original.g),greenCoating);
        float shading=dot(original,vec3(.213,.715,.072));
        vec3 dyed=diffuseColor.rgb*(.36+.90*sqrt(shading))*(.87+.24*grain);
        diffuseColor.rgb=mix(original,dyed,mask);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          roughnessFactor=clamp(roughnessFactor+mask*(grain-.55)*.22,.23,1.);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          vec3 dp1=dFdx(-vViewPosition),dp2=dFdy(-vViewPosition);
          vec3 a=cross(dp2,normal),b=cross(normal,dp1);
          float det=dot(dp1,a);
          normal=normalize(max(abs(det),1.e-10)*normal-sign(det)*mask*${i?".00012":".00019"}*(dFdx(grain)*a+dFdy(grain)*b));`)},e.customProgramCacheKey=()=>n}}function Pg(){const r=new pn;r.position.set(.245,.797,-.34),r.rotation.order="ZYX",r.rotation.y=-Math.PI/2,r.rotation.z=-.28;const e=new ui({color:2303014,roughness:.91}),t=document.createElement("canvas");t.width=256,t.height=128;const n=t.getContext("2d"),i=n.createImageData(256,128);for(let f=0;f<i.data.length;f+=4){const p=Math.sin(f*12.9898)*43758.5453,_=160+26*(p-Math.floor(p));i.data.set([_,_,_,255],f)}n.putImageData(i,0,0);for(let f=0;f<6;f++)for(let p=0;p<10;p++)n.fillStyle="#525252",n.beginPath(),n.ellipse((p+.5*(f%2))*25.6,6+f*21,2.1,2.6,0,0,Math.PI*2),n.fill();for(const f of[24,102])n.strokeStyle="#797979",n.lineWidth=3,n.beginPath(),n.moveTo(0,f),n.lineTo(256,f),n.stroke(),n.strokeStyle="#d3d3d3",n.lineWidth=2,n.setLineDash([6,4]),n.beginPath(),n.moveTo(0,f+1),n.lineTo(256,f+1),n.stroke(),n.setLineDash([]);const s=new Tl(t);s.wrapS=1e3,s.repeat.x=12,s.anisotropy=4,e.map=s,e.bumpMap=s,e.bumpScale=24e-5,e.roughness=.68;const a=new ui({color:7896195,roughness:.32,metalness:.86}),o=new ui({color:2368810,roughness:.38,metalness:.76}),l=new ui({color:14134629,roughness:.6}),c=new It(new Tr(.151,.0145,20,128),e);r.add(c);const u=new It(new Tr(.151,.0149,20,12,.077),l);u.rotation.z=Math.PI/2-.0385,r.add(u);for(const f of[-.16,Math.PI+.16,-Math.PI/2]){const p=new Cs;p.moveTo(.02,-.018),p.lineTo(.146,-.009),p.lineTo(.148,.011),p.lineTo(.019,.025),p.closePath();for(const[M,m]of[[.057,.009],[.09,.007],[.116,.005]]){const x=new Sr;x.absarc(M,.002,m,0,2*Math.PI,!0),p.holes.push(x)}const _=new It(new Pr(p,{depth:.004,bevelSize:.001,bevelThickness:.001,bevelSegments:2}),a);_.rotation.z=f,r.add(_)}function h(f,p,_,M,m=48){const x=new It(new ki(f,f,p,m),M);return x.rotation.x=Math.PI/2,x.position.z=_,r.add(x),x}h(.037,.037,-.01,o),h(.034,.007,.01,a),h(.018,.009,.017,e);for(let f=0;f<6;f++){const p=h(.003,.003,.016,o,6);p.position.x=.026*Math.cos(f*Math.PI/3),p.position.y=.026*Math.sin(f*Math.PI/3)}return r.visible=!1,r}function Lg(r){const e=new pn;e.name="DriverDoorHinge",e.position.set(.62,.28,-.8),r.add(e);for(const m of[...r.children])m.name.startsWith("Door_")&&e.attach(m);const t=Pg();r.add(t);const n=Cg(),i=[],s=new Set,a=new Map,o=new Map,l=new k,c=r.matrixWorld.clone().invert();r.updateMatrixWorld(!0),r.traverse(m=>{if(!m.isMesh||!m.material.name.startsWith("Cabin"))return;const x=m.material.name;if(a.set(x,m.material),(x==="CabinSteering"||x==="CabinWheelBadge")&&i.push(m),["CabinBase","CabinLeather","CabinSeats","CabinFabric","CabinDoorFabric"].includes(x)){const S=m.material.clone();m.material=S,n(S,c.clone().multiply(m.matrixWorld),x),s.add(S)}if(x!=="CabinSeats"&&x!=="CabinFabric")return;const b=m.geometry,w=b.clone(),y=w.attributes.position,I=c.clone().multiply(m.matrixWorld),C=I.clone().invert();for(let S=0;S<y.count;S++){l.fromBufferAttribute(y,S).applyMatrix4(I);{const A=Math.abs(l.z)-.34,H=Math.min(1,Math.max(0,(Math.abs(A)-.15)/.08));l.y+=.028*H,l.z-=Math.sign(l.z)*Math.sign(A)*.016*H}l.applyMatrix4(C),y.setXYZ(S,l.x,l.y,l.z)}w.computeBoundingSphere(),o.set(m,{base:b,sport:w,name:x})});const u=a.get("CabinGrip"),h=u.clone();h.map=null,h.metalness=.86,h.roughness=.24;const f=[];r.traverse(m=>{m.material===u&&f.push(m)});const p={trim:"graphite",steering:"leather",selector:"factory",dashboard:"leather",seat:"touring"},_={graphite:3750203,cognac:9985849,bordeaux:7743546};function M(m,x){p[m]=x;for(const y of s)y.color.setHex(_[p.trim]),y.roughness=/Fabric/.test(y.name)||y.name==="CabinSeats"&&p.seat==="bucket"?.86:.58;const b=a.get("CabinDash"),w=a.get("CabinSteering");b&&(b.color.setHex(p.dashboard==="brushed"?12501443:9606039),b.metalness=p.dashboard==="brushed"?.68:0,b.roughness=p.dashboard==="brushed"?.32:.85),w&&(w.color.setHex(p.steering==="sport"?8553868:12698049),w.roughness=p.steering==="sport"?.98:.57),t.visible=p.steering==="sport",i.forEach(y=>y.visible=!t.visible);for(const[y,{base:I,sport:C}]of o)y.geometry=p.seat==="bucket"?C:I;f.forEach(y=>y.material=p.selector==="factory"?u:h),h.color.setHex(p.selector==="bronze"?12816982:11843516)}return M("trim","graphite"),{hinge:e,update:M}}const xs={silver:{label:"Серебро",color:"#b3b5b6",metalness:.9,roughness:.29,coat:.85},cobalt:{label:"Кобальт",color:"#295ab8"},cherry:{label:"Вишня",color:"#962f44"},jade:{label:"Нефрит · хамелеон",color:"#205751",shift:.9},copper:{label:"Медь · сатин",color:"#ab613f",roughness:.43,coat:.36},pearl:{label:"Белый жемчуг",color:"#e6e2df",metalness:.35,shift:.38},graphite:{label:"Графит · сатин",color:"#41444a",roughness:.45,coat:.33},emerald:{label:"Британский зелёный",color:"#154738",metalness:.57},champagne:{label:"Шампань",color:"#ae9673",metalness:.83,roughness:.29},violet:{label:"Аметист",color:"#4c285f",shift:.62},glacier:{label:"Ледяной голубой",color:"#8daebf",metalness:.77,roughness:.28},orange:{label:"Папайя",color:"#dc652a",metalness:.32}},jl={original:6711665,bronze:12486733,titanium:8948626,champagne:11903097};function ec(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Yt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let f=0,p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in h.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;s[_]===void 0&&(s[_]=[]),s[_].push(h.attributes[_]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in h.morphAttributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[_].length!==r[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(h.morphAttributes[_]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=h.index.count;else if(h.attributes.position!==void 0)_=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,u),c+=_}}if(t){let u=0;const h=[];for(let f=0;f<r.length;++f){const p=r[f].index;for(let _=0;_<p.count;++_)h.push(p.getX(_)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=rl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let M=0;M<a[u].length;++M)p.push(a[u][M][f]);const _=rl(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function rl(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new en(a,t,n);let l=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let _=0;_<t;_++){const M=u.getComponent(f,_);o.setComponent(f+h,_,M)}}else a.set(u.array,l);l+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function sl(r,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===2||e===1){let t=r.getIndex();if(t===null){const s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===2)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const hi=new Ut({color:jl.original,metalness:.9,roughness:.3}),Ii=new Ut({color:7369335,metalness:.82,roughness:.38}),tc=new Ut({color:2368810,metalness:.38,roughness:.36,clearcoat:.32,clearcoatRoughness:.32});tc.onBeforeCompile=r=>{r.vertexShader=`varying vec2 carbonUV;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
carbonUV=position.xz*320.0;`),r.fragmentShader=`varying vec2 carbonUV;
`+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 yarn = mat2(.707,-.707,.707,.707)*carbonUV;
    float strand = mod(floor(yarn.x)+floor(yarn.y),4.0)<2.0 ? yarn.x : yarn.y;
    float detail = 1.0-smoothstep(.12,.85,max(fwidth(yarn.x),fwidth(yarn.y)));
    diffuseColor.rgb *= 1.0 + detail*.3*cos(strand*6.283185);`)};const nc=new Ut({color:5329754,metalness:.78,roughness:.43,side:2}),Ea=new Ut({color:4342858,metalness:.7,roughness:.45}),ic=new Ut({color:11842996,metalness:.63,roughness:.44});ic.onBeforeCompile=r=>{r.vertexShader=`varying vec2 rotorFace;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
rotorFace=position.xy;`),r.fragmentShader=`varying vec2 rotorFace;
`+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    float r = length(rotorFace);
    float marks = .065*cos(950.0*r) + .035*cos(1830.0*r);
    diffuseColor.rgb *= .85 + marks*(1.0-smoothstep(.001,.004,fwidth(r)));`)};function Ig(r){const e=new pn,t=r*.86,n=t*.47,i=new Cs;i.absarc(0,0,t,0,Math.PI*2,!1);const s=new Sr;s.absarc(0,0,n,0,Math.PI*2,!0),i.holes.push(s);for(let c=0;c<20;c++)for(let u=0;u<3;u++){const h=c*Math.PI/10+u*.065,f=t*(.63+u*.12),p=new Sr;p.absarc(Math.cos(h)*f,Math.sin(h)*f,.0036,0,Math.PI*2,!0),i.holes.push(p)}const a=new It(new Pr(i,{depth:.014,bevelEnabled:!1,curveSegments:32}),ic);a.rotation.y=Math.PI/2,a.position.x=.073,e.add(a);function o(c,u,h,f,p=!1){const _=new It(new ki(c,c,u,80,1,p),f);_.rotation.z=Math.PI/2,_.position.x=h,e.add(_)}o(r-.006,.245,.073,nc,!0),o(n+.002,.084,.094,Ea);const l=[];for(let c=0;c<10;c++){const u=c*Math.PI/5,h=new ki(.0055,.0055,.007,6);h.rotateZ(Math.PI/2),h.translate(.139,Math.sin(u)*n*.82,Math.cos(u)*n*.82),l.push(h)}return e.add(new It(ec(l),Ii)),l.forEach(c=>c.dispose()),e}const rc={blade:{count:5,arms:[.1],width:.03,dish:.034,twist:.08},split:{count:7,arms:[-.16,.16],width:.011,dish:.037,twist:.03},mesh:{count:10,arms:[-.29,.29],width:.008,dish:.03,twist:.02},turbine:{count:12,arms:[.38],width:.019,dish:.028,twist:.18}};function Ng(r,e,t,n){const i=[],s=[],o=[[1,-.75],[1.13,0],[1,.75],[.72,1],[-.6,1],[-1,.67],[-1,-.67],[-.6,-1],[.72,-1]];for(let c=0;c<=24;c++){const u=c/24,h=.04+(r-.046)*u,f=n+t*u*u+e.twist*Math.sin(Math.PI*u),p=.164+e.dish*(1-Math.cos(Math.PI*u))*.5,_=e.width*(1.28-.58*Math.sin(Math.PI*u)),M=.014-.007*u;for(const[m,x]of o){const b=x*_;i.push(p+m*M,h*Math.cos(f)-b*Math.sin(f),h*Math.sin(f)+b*Math.cos(f))}if(c===24)break;for(let m=0;m<o.length;m++){const x=c*o.length+m,b=c*o.length+(m+1)%o.length;s.push(x,x+o.length,b+o.length,x,b+o.length,b)}}const l=new Yt;return l.setAttribute("position",new Ht(i,3)),l.setIndex(s),l.computeVertexNormals(),l}function Dg(r,e){const t=new pn,n=rc[e],i=[];for(let c=0;c<n.count;c++)for(const u of n.arms)i.push(Ng(r,n,u,c*2*Math.PI/n.count));t.add(new It(ec(i),hi)),i.forEach(c=>c.dispose());function s(c,u,h,f){const p=new It(new Tr(c,u,12,128),f);p.rotation.y=Math.PI/2,p.position.x=h,t.add(p)}function a(c,u,h,f,p,_){const M=new It(new ki(c,u,h,p),_);return M.rotation.z=-Math.PI/2,M.position.x=f,t.add(M),M}s(r-.009,.01,.196,hi),s(r-.014,.0024,.204,Ii),s(r-.02,.002,.193,hi),a(.052,.064,.028,.158,64,hi),a(.041,.049,.01,.176,64,Ii),a(.032,.038,.024,.19,12,nc),s(.024,.0023,.203,Ii),a(.02,.022,.004,.203,48,Ea),a(.009,.014,.004,.206,6,Ii);const o=a(.0035,.005,.019,.194,12,Ea);o.position.y=-r+.028;const l=a(.004,.004,.007,.206,12,Ii);return l.position.y=o.position.y,t}function Fg(r,e){const t=r.children.filter(m=>/^Wheel_/.test(m.name)),n=r.children.filter(m=>!/^Wheel_|^Caliper_/.test(m.name)).map(m=>[m,m.position.y]),i=new Map,s=t.map(m=>{const x=m.name.startsWith("Wheel_R")?.277:.265;if(!i.has(x)){const y=Ig(x),I=Object.fromEntries(Object.keys(rc).map(C=>[C,Dg(x,C)]));i.set(x,{assembly:y,variants:I})}const b=i.get(x);m.add(b.assembly.clone());const w={};for(const[y,I]of Object.entries(b.variants)){const C=I.clone();C.visible=!1,m.add(C),w[y]=C}return{wheel:m,variants:w}}),a=r.getObjectByName("Bonnet_BodyShell"),o=a.geometry,l=o.clone(),c=l.attributes.position;for(let m=0;m<c.count;m++){const x=c.getX(m),b=c.getZ(m),w=Math.exp(-Math.pow((Math.abs(x)-.34)/.085,2)),y=Math.max(0,Math.sin(Math.PI*Math.min(1,Math.max(0,(b-.72)/1.39))));c.setY(m,c.getY(m)+.045*w*y)}l.computeBoundingSphere();const u=r.children.filter(m=>m.name.startsWith("AeroWing_")),h=new Cs;h.moveTo(-.15,0),h.quadraticCurveTo(-.1,.045,-.14,.12),h.quadraticCurveTo(-.05,.084,.13,.013),h.lineTo(.12,-.012),h.closePath();const f=new Pr(h,{depth:1.38,steps:36,bevelSize:.009,bevelThickness:.009,bevelSegments:4}),p=f.attributes.position;for(let m=0;m<p.count;m++){const x=Math.min(1,Math.abs(p.getZ(m)-.69)/.69);p.setX(m,p.getX(m)*(1-.48*x**2)+.16*x**2),p.setY(m,p.getY(m)*(1-.68*x**3)-.035*x**2)}f.computeVertexNormals();const _=new It(f,e);_.position.set(-1.95,.925,-.69),r.add(_),_.visible=!1;const M=_.position.y;return{wheel(m){for(const{wheel:x,variants:b}of s){x.material.userData.cutRim.value=m==="stock"?0:1;for(const[w,y]of Object.entries(b))y.visible=w===m}},hood(m){a.geometry=m==="stock"?o:l,a.material=m==="carbon"?tc:e},wing(m){u.forEach(x=>x.visible=m==="stock"),_.visible=m==="duck"},stance(m){const x={stock:0,sport:.025,track:.045}[m];n.forEach(([b,w])=>b.position.y=w-x),_.position.y=M-x},rim(m){hi.color.setHex(jl[m])}}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.3
*/var on=Uint8Array,Di=Uint16Array,Ug=Int32Array,sc=new on([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ac=new on([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Og=new on([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oc=function(r,e){for(var t=new Di(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new Ug(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},lc=oc(sc,2),cc=lc.b,Bg=lc.r;cc[28]=258,Bg[258]=28;var Gg=oc(ac,0),kg=Gg.b,Ta=new Di(32768);for(var Lt=0;Lt<32768;++Lt){var Zn=(Lt&43690)>>1|(Lt&21845)<<1;Zn=(Zn&52428)>>2|(Zn&13107)<<2,Zn=(Zn&61680)>>4|(Zn&3855)<<4,Ta[Lt]=((Zn&65280)>>8|(Zn&255)<<8)>>1}var gr=(function(r,e,t){for(var n=r.length,i=0,s=new Di(e);i<n;++i)r[i]&&++s[r[i]-1];var a=new Di(e);for(i=1;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new Di(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=a[r[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Ta[h]>>l]=c}else for(o=new Di(n),i=0;i<n;++i)r[i]&&(o[i]=Ta[a[r[i]-1]++]>>15-r[i]);return o}),Ir=new on(288);for(var Lt=0;Lt<144;++Lt)Ir[Lt]=8;for(var Lt=144;Lt<256;++Lt)Ir[Lt]=9;for(var Lt=256;Lt<280;++Lt)Ir[Lt]=7;for(var Lt=280;Lt<288;++Lt)Ir[Lt]=8;var uc=new on(32);for(var Lt=0;Lt<32;++Lt)uc[Lt]=5;var Hg=gr(Ir,9,1),zg=gr(uc,5,1),ua=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},hn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ha=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Vg=function(r){return(r+7)/8|0},Wg=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new on(r.subarray(e,t))},Xg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fn=function(r,e,t){var n=new Error(e||Xg[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,fn),!t)throw n;return n},qg=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new on(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new on(i*3));var c=function(Ve){var ot=t.length;if(Ve>ot){var lt=new on(Math.max(ot*2,Ve));lt.set(t),t=lt}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,_=e.d,M=e.m,m=e.n,x=i*8;do{if(!p){u=hn(r,h,1);var b=hn(r,h+1,3);if(h+=3,b)if(b==1)p=Hg,_=zg,M=9,m=5;else if(b==2){var C=hn(r,h,31)+257,S=hn(r,h+10,15)+4,A=C+hn(r,h+5,31)+1;h+=14;for(var H=new on(A),U=new on(19),O=0;O<S;++O)U[Og[O]]=hn(r,h+O*3,7);h+=S*3;for(var X=ua(U),Q=(1<<X)-1,F=gr(U,X,1),O=0;O<A;){var Y=F[hn(r,h,Q)];h+=Y&15;var w=Y>>4;if(w<16)H[O++]=w;else{var J=0,Z=0;for(w==16?(Z=3+hn(r,h,3),h+=2,J=H[O-1]):w==17?(Z=3+hn(r,h,7),h+=3):w==18&&(Z=11+hn(r,h,127),h+=7);Z--;)H[O++]=J}}var me=H.subarray(0,C),$=H.subarray(C);M=ua(me),m=ua($),p=gr(me,M,1),_=gr($,m,1)}else fn(1);else{var w=Vg(h)+4,y=r[w-4]|r[w-3]<<8,I=w+y;if(I>i){l&&fn(0);break}o&&c(f+y),t.set(r.subarray(w,I),f),e.b=f+=y,e.p=h=I*8,e.f=u;continue}if(h>x){l&&fn(0);break}}o&&c(f+131072);for(var oe=(1<<M)-1,ue=(1<<m)-1,Ne=h;;Ne=h){var J=p[ha(r,h)&oe],qe=J>>4;if(h+=J&15,h>x){l&&fn(0);break}if(J||fn(2),qe<256)t[f++]=qe;else if(qe==256){Ne=h,p=null;break}else{var ne=qe-254;if(qe>264){var O=qe-257,xe=sc[O];ne=hn(r,h,(1<<xe)-1)+cc[O],h+=xe}var be=_[ha(r,h)&ue],Ye=be>>4;be||fn(3),h+=be&15;var $=kg[Ye];if(Ye>3){var xe=ac[Ye];$+=ha(r,h)&(1<<xe)-1,h+=xe}if(h>x){l&&fn(0);break}o&&c(f+131072);var he=f+ne;if(f<$){var Xe=s-$,St=Math.min($,he);for(Xe+f<0&&fn(3);f<St;++f)t[f]=n[Xe+f]}for(;f<he;++f)t[f]=t[f-$]}}e.l=p,e.p=Ne,e.b=f,e.f=u,p&&(u=1,e.m=M,e.d=_,e.n=m)}while(!u);return f!=t.length&&a?Wg(t,0,f):t.subarray(0,f)},Yg=new on(0),Zg=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&fn(6,"invalid zlib data"),(r[1]>>5&1)==1&&fn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function or(r,e){return qg(r.subarray(Zg(r),-4),{i:2},e,e)}var Kg=typeof TextDecoder<"u"&&new TextDecoder,Jg=0;try{Kg.decode(Yg,{stream:!0}),Jg=1}catch{}class $g extends _h{constructor(e){super(e),this.type=1016,this.outputFormat=1023,this.part=0}parse(e){const H=Math.pow(2.7182818,2.2);let U=null,O=null;function X(g,d){let v=0;for(let R=0;R<65536;++R)(R==0||g[R>>3]&1<<(R&7))&&(d[v++]=R);const T=v-1;for(;v<65536;)d[v++]=0;return T}function Q(g){for(let d=0;d<16384;d++)g[d]={},g[d].len=0,g[d].lit=0,g[d].p=null}const F={l:0,c:0,lc:0};function Y(g,d,v,T,R){for(;v<g;)d=d<<8|we(T,R),v+=8;v-=g,F.l=d>>v&(1<<g)-1,F.c=d,F.lc=v}const J=new Array(59);function Z(g){for(let v=0;v<=58;++v)J[v]=0;for(let v=0;v<65537;++v)J[g[v]]+=1;let d=0;for(let v=58;v>0;--v){const T=d+J[v]>>1;J[v]=d,d=T}for(let v=0;v<65537;++v){const T=g[v];T>0&&(g[v]=T|J[T]++<<6)}}function me(g,d,v,T,R,N){const P=d;let V=0,G=0;for(;T<=R;T++){if(P.value-d.value>v)return!1;Y(6,V,G,g,P);const z=F.l;if(V=F.c,G=F.lc,N[T]=z,z==63){if(P.value-d.value>v)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");Y(8,V,G,g,P);let W=F.l+6;if(V=F.c,G=F.lc,T+W>R+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;W--;)N[T++]=0;T--}else if(z>=59){let W=z-59+2;if(T+W>R+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;W--;)N[T++]=0;T--}}Z(N)}function $(g){return g&63}function oe(g){return g>>6}function ue(g,d,v,T){for(;d<=v;d++){const R=oe(g[d]),N=$(g[d]);if(R>>N)throw new Error("THREE.EXRLoader: Invalid table entry");if(N>14){const P=T[R>>N-14];if(P.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(P.lit++,P.p){const V=P.p;P.p=new Array(P.lit);for(let G=0;G<P.lit-1;++G)P.p[G]=V[G]}else P.p=new Array(1);P.p[P.lit-1]=d}else if(N){let P=0;for(let V=1<<14-N;V>0;V--){const G=T[(R<<14-N)+P];if(G.len||G.p)throw new Error("THREE.EXRLoader: Invalid table entry");G.len=N,G.lit=d,P++}}}return!0}const Ne={c:0,lc:0};function qe(g,d,v,T){g=g<<8|we(v,T),d+=8,Ne.c=g,Ne.lc=d}const ne={c:0,lc:0};function xe(g,d,v,T,R,N,P,V,G){if(g==d){T<8&&(qe(v,T,R,N),v=Ne.c,T=Ne.lc),T-=8;let z=v>>T;if(z=new Uint8Array([z])[0],V.value+z>G)return!1;const W=P[V.value-1];for(;z-- >0;)P[V.value++]=W}else if(V.value<G)P[V.value++]=g;else return!1;ne.c=v,ne.lc=T}function be(g){return g&65535}function Ye(g){const d=be(g);return d>32767?d-65536:d}const he={a:0,b:0};function Xe(g,d){const v=Ye(g),R=Ye(d),N=v+(R&1)+(R>>1),P=N,V=N-R;he.a=P,he.b=V}function St(g,d){const v=be(g),T=be(d),R=v-(T>>1)&65535,N=T+R-32768&65535;he.a=N,he.b=R}function Ve(g,d,v,T,R,N,P){const V=P<16384,G=v>R?R:v;let z=1,W,ae;for(;z<=G;)z<<=1;for(z>>=1,W=z,z>>=1;z>=1;){ae=0;const ee=ae+N*(R-W),te=N*z,pe=N*W,ge=T*z,_e=T*W;let Pe,je,fe,nt;for(;ae<=ee;ae+=pe){let ye=ae;const Fe=ae+T*(v-W);for(;ye<=Fe;ye+=_e){const Oe=ye+ge,yt=ye+te,dt=yt+ge;V?(Xe(g[ye+d],g[yt+d]),Pe=he.a,fe=he.b,Xe(g[Oe+d],g[dt+d]),je=he.a,nt=he.b,Xe(Pe,je),g[ye+d]=he.a,g[Oe+d]=he.b,Xe(fe,nt),g[yt+d]=he.a,g[dt+d]=he.b):(St(g[ye+d],g[yt+d]),Pe=he.a,fe=he.b,St(g[Oe+d],g[dt+d]),je=he.a,nt=he.b,St(Pe,je),g[ye+d]=he.a,g[Oe+d]=he.b,St(fe,nt),g[yt+d]=he.a,g[dt+d]=he.b)}if(v&z){const Oe=ye+te;V?Xe(g[ye+d],g[Oe+d]):St(g[ye+d],g[Oe+d]),Pe=he.a,g[Oe+d]=he.b,g[ye+d]=Pe}}if(R&z){let ye=ae;const Fe=ae+T*(v-W);for(;ye<=Fe;ye+=_e){const Oe=ye+ge;V?Xe(g[ye+d],g[Oe+d]):St(g[ye+d],g[Oe+d]),Pe=he.a,g[Oe+d]=he.b,g[ye+d]=Pe}}W=z,z>>=1}return ae}function ot(g,d,v,T,R,N,P,V,G){let z=0,W=0;const ae=P,ee=Math.trunc(T.value+(R+7)/8);for(;T.value<ee;)for(qe(z,W,v,T),z=Ne.c,W=Ne.lc;W>=14;){const pe=z>>W-14&16383,ge=d[pe];if(ge.len)W-=ge.len,xe(ge.lit,N,z,W,v,T,V,G,ae),z=ne.c,W=ne.lc;else{if(!ge.p)throw new Error("THREE.EXRLoader: hufDecode issues");let _e;for(_e=0;_e<ge.lit;_e++){const Pe=$(g[ge.p[_e]]);for(;W<Pe&&T.value<ee;)qe(z,W,v,T),z=Ne.c,W=Ne.lc;if(W>=Pe&&oe(g[ge.p[_e]])==(z>>W-Pe&(1<<Pe)-1)){W-=Pe,xe(ge.p[_e],N,z,W,v,T,V,G,ae),z=ne.c,W=ne.lc;break}}if(_e==ge.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}const te=8-R&7;for(z>>=te,W-=te;W>0;){const pe=d[z<<14-W&16383];if(pe.len)W-=pe.len,xe(pe.lit,N,z,W,v,T,V,G,ae),z=ne.c,W=ne.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function lt(g,d,v,T,R,N){const P={value:0},V=v.value,G=se(d,v),z=se(d,v);v.value+=4;const W=se(d,v);if(v.value+=4,G<0||G>=65537||z<0||z>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");const ae=new Array(65537),ee=new Array(16384);Q(ee);const te=T-(v.value-V);if(me(g,v,te,G,z,ae),W>8*(T-(v.value-V)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");ue(ae,G,z,ee),ot(ae,ee,g,v,W,z,N,R,P)}function le(g,d,v){for(let T=0;T<v;++T)d[T]=g[d[T]]}function Ee(g){for(let d=1;d<g.length;d++){const v=g[d-1]+g[d]-128;g[d]=v}}function Me(g,d){let v=0,T=Math.floor((g.length+1)/2),R=0;const N=g.length-1;for(;!(R>N||(d[R++]=g[v++],R>N));)d[R++]=g[T++]}function Ge(g){let d=g.byteLength;const v=new Array;let T=0;const R=new DataView(g);for(;d>0;){const N=R.getInt8(T++);if(N<0){const P=-N;d-=P+1;for(let V=0;V<P;V++)v.push(R.getUint8(T++))}else{const P=N;d-=2;const V=R.getUint8(T++);for(let G=0;G<P+1;G++)v.push(V)}}return v}function Le(g,d,v,T,R,N){let P=new DataView(N.buffer);const V=v[g.idx[0]].width,G=v[g.idx[0]].height,z=3,W=Math.floor(V/8),ae=Math.ceil(V/8),ee=Math.ceil(G/8),te=V-(ae-1)*8,pe=G-(ee-1)*8,ge={value:0},_e=new Array(z),Pe=new Array(z),je=new Array(z),fe=new Array(z),nt=new Array(z);for(let Fe=0;Fe<z;++Fe)nt[Fe]=d[g.idx[Fe]],_e[Fe]=Fe<1?0:_e[Fe-1]+ae*ee,Pe[Fe]=new Float32Array(64),je[Fe]=new Uint16Array(64),fe[Fe]=new Uint16Array(ae*64);for(let Fe=0;Fe<ee;++Fe){let Oe=8;Fe==ee-1&&(Oe=pe);let yt=8;for(let tt=0;tt<ae;++tt){tt==ae-1&&(yt=te);for(let ze=0;ze<z;++ze)je[ze].fill(0),je[ze][0]=R[_e[ze]++],K(ge,T,je[ze]),He(je[ze],Pe[ze]),Ke(Pe[ze]);We(Pe);for(let ze=0;ze<z;++ze)Mt(Pe[ze],fe[ze],tt*64)}let dt=0;for(let tt=0;tt<z;++tt){const ze=v[g.idx[tt]].type;for(let xt=8*Fe;xt<8*Fe+Oe;++xt){dt=nt[tt][xt];for(let Pt=0;Pt<W;++Pt){const rt=Pt*64+(xt&7)*8;P.setUint16(dt+0*ze,fe[tt][rt+0],!0),P.setUint16(dt+2*ze,fe[tt][rt+1],!0),P.setUint16(dt+4*ze,fe[tt][rt+2],!0),P.setUint16(dt+6*ze,fe[tt][rt+3],!0),P.setUint16(dt+8*ze,fe[tt][rt+4],!0),P.setUint16(dt+10*ze,fe[tt][rt+5],!0),P.setUint16(dt+12*ze,fe[tt][rt+6],!0),P.setUint16(dt+14*ze,fe[tt][rt+7],!0),dt+=16*ze}}if(W!=ae)for(let xt=8*Fe;xt<8*Fe+Oe;++xt){const Pt=nt[tt][xt]+8*W*2*ze,rt=W*64+(xt&7)*8;for(let Tt=0;Tt<yt;++Tt)P.setUint16(Pt+Tt*2*ze,fe[tt][rt+Tt],!0)}}}const ye=new Uint16Array(V);P=new DataView(N.buffer);for(let Fe=0;Fe<z;++Fe){v[g.idx[Fe]].decoded=!0;const Oe=v[g.idx[Fe]].type;if(v[Fe].type==2)for(let yt=0;yt<G;++yt){const dt=nt[Fe][yt];for(let tt=0;tt<V;++tt)ye[tt]=P.getUint16(dt+tt*2*Oe,!0);for(let tt=0;tt<V;++tt)P.setFloat32(dt+tt*2*Oe,De.fromHalfFloat(ye[tt]),!0)}}}function st(g,d,v,T,R,N){const P=new DataView(N.buffer),V=v[g],G=V.width,z=V.height,W=Math.ceil(G/8),ae=Math.ceil(z/8),ee=Math.floor(G/8),te=G-(W-1)*8,pe=z-(ae-1)*8,ge={value:0};let _e=0;const Pe=new Float32Array(64),je=new Uint16Array(64),fe=new Uint16Array(W*64);for(let nt=0;nt<ae;++nt){let ye=8;nt==ae-1&&(ye=pe);for(let Fe=0;Fe<W;++Fe)je.fill(0),je[0]=R[_e++],K(ge,T,je),He(je,Pe),Ke(Pe),Mt(Pe,fe,Fe*64);for(let Fe=8*nt;Fe<8*nt+ye;++Fe){let Oe=d[g][Fe];for(let yt=0;yt<ee;++yt){const dt=yt*64+(Fe&7)*8;for(let tt=0;tt<8;++tt)P.setUint16(Oe+tt*2*V.type,fe[dt+tt],!0);Oe+=16*V.type}if(W!=ee){const yt=ee*64+(Fe&7)*8;for(let dt=0;dt<te;++dt)P.setUint16(Oe+dt*2*V.type,fe[yt+dt],!0)}}}V.decoded=!0}function K(g,d,v){let T,R=1;for(;R<64;)T=d[g.value],T==65280?R=64:T>>8==255?R+=T&255:(v[R]=T,R++),g.value++}function He(g,d){d[0]=De.fromHalfFloat(g[0]),d[1]=De.fromHalfFloat(g[1]),d[2]=De.fromHalfFloat(g[5]),d[3]=De.fromHalfFloat(g[6]),d[4]=De.fromHalfFloat(g[14]),d[5]=De.fromHalfFloat(g[15]),d[6]=De.fromHalfFloat(g[27]),d[7]=De.fromHalfFloat(g[28]),d[8]=De.fromHalfFloat(g[2]),d[9]=De.fromHalfFloat(g[4]),d[10]=De.fromHalfFloat(g[7]),d[11]=De.fromHalfFloat(g[13]),d[12]=De.fromHalfFloat(g[16]),d[13]=De.fromHalfFloat(g[26]),d[14]=De.fromHalfFloat(g[29]),d[15]=De.fromHalfFloat(g[42]),d[16]=De.fromHalfFloat(g[3]),d[17]=De.fromHalfFloat(g[8]),d[18]=De.fromHalfFloat(g[12]),d[19]=De.fromHalfFloat(g[17]),d[20]=De.fromHalfFloat(g[25]),d[21]=De.fromHalfFloat(g[30]),d[22]=De.fromHalfFloat(g[41]),d[23]=De.fromHalfFloat(g[43]),d[24]=De.fromHalfFloat(g[9]),d[25]=De.fromHalfFloat(g[11]),d[26]=De.fromHalfFloat(g[18]),d[27]=De.fromHalfFloat(g[24]),d[28]=De.fromHalfFloat(g[31]),d[29]=De.fromHalfFloat(g[40]),d[30]=De.fromHalfFloat(g[44]),d[31]=De.fromHalfFloat(g[53]),d[32]=De.fromHalfFloat(g[10]),d[33]=De.fromHalfFloat(g[19]),d[34]=De.fromHalfFloat(g[23]),d[35]=De.fromHalfFloat(g[32]),d[36]=De.fromHalfFloat(g[39]),d[37]=De.fromHalfFloat(g[45]),d[38]=De.fromHalfFloat(g[52]),d[39]=De.fromHalfFloat(g[54]),d[40]=De.fromHalfFloat(g[20]),d[41]=De.fromHalfFloat(g[22]),d[42]=De.fromHalfFloat(g[33]),d[43]=De.fromHalfFloat(g[38]),d[44]=De.fromHalfFloat(g[46]),d[45]=De.fromHalfFloat(g[51]),d[46]=De.fromHalfFloat(g[55]),d[47]=De.fromHalfFloat(g[60]),d[48]=De.fromHalfFloat(g[21]),d[49]=De.fromHalfFloat(g[34]),d[50]=De.fromHalfFloat(g[37]),d[51]=De.fromHalfFloat(g[47]),d[52]=De.fromHalfFloat(g[50]),d[53]=De.fromHalfFloat(g[56]),d[54]=De.fromHalfFloat(g[59]),d[55]=De.fromHalfFloat(g[61]),d[56]=De.fromHalfFloat(g[35]),d[57]=De.fromHalfFloat(g[36]),d[58]=De.fromHalfFloat(g[48]),d[59]=De.fromHalfFloat(g[49]),d[60]=De.fromHalfFloat(g[57]),d[61]=De.fromHalfFloat(g[58]),d[62]=De.fromHalfFloat(g[62]),d[63]=De.fromHalfFloat(g[63])}function Ke(g){const d=.5*Math.cos(.7853975),v=.5*Math.cos(3.14159/16),T=.5*Math.cos(3.14159/8),R=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),P=.5*Math.cos(3*3.14159/8),V=.5*Math.cos(7*3.14159/16),G=new Array(4),z=new Array(4),W=new Array(4),ae=new Array(4);for(let ee=0;ee<8;++ee){const te=ee*8;G[0]=T*g[te+2],G[1]=P*g[te+2],G[2]=T*g[te+6],G[3]=P*g[te+6],z[0]=v*g[te+1]+R*g[te+3]+N*g[te+5]+V*g[te+7],z[1]=R*g[te+1]-V*g[te+3]-v*g[te+5]-N*g[te+7],z[2]=N*g[te+1]-v*g[te+3]+V*g[te+5]+R*g[te+7],z[3]=V*g[te+1]-N*g[te+3]+R*g[te+5]-v*g[te+7],W[0]=d*(g[te+0]+g[te+4]),W[3]=d*(g[te+0]-g[te+4]),W[1]=G[0]+G[3],W[2]=G[1]-G[2],ae[0]=W[0]+W[1],ae[1]=W[3]+W[2],ae[2]=W[3]-W[2],ae[3]=W[0]-W[1],g[te+0]=ae[0]+z[0],g[te+1]=ae[1]+z[1],g[te+2]=ae[2]+z[2],g[te+3]=ae[3]+z[3],g[te+4]=ae[3]-z[3],g[te+5]=ae[2]-z[2],g[te+6]=ae[1]-z[1],g[te+7]=ae[0]-z[0]}for(let ee=0;ee<8;++ee)G[0]=T*g[16+ee],G[1]=P*g[16+ee],G[2]=T*g[48+ee],G[3]=P*g[48+ee],z[0]=v*g[8+ee]+R*g[24+ee]+N*g[40+ee]+V*g[56+ee],z[1]=R*g[8+ee]-V*g[24+ee]-v*g[40+ee]-N*g[56+ee],z[2]=N*g[8+ee]-v*g[24+ee]+V*g[40+ee]+R*g[56+ee],z[3]=V*g[8+ee]-N*g[24+ee]+R*g[40+ee]-v*g[56+ee],W[0]=d*(g[ee]+g[32+ee]),W[3]=d*(g[ee]-g[32+ee]),W[1]=G[0]+G[3],W[2]=G[1]-G[2],ae[0]=W[0]+W[1],ae[1]=W[3]+W[2],ae[2]=W[3]-W[2],ae[3]=W[0]-W[1],g[0+ee]=ae[0]+z[0],g[8+ee]=ae[1]+z[1],g[16+ee]=ae[2]+z[2],g[24+ee]=ae[3]+z[3],g[32+ee]=ae[3]-z[3],g[40+ee]=ae[2]-z[2],g[48+ee]=ae[1]-z[1],g[56+ee]=ae[0]-z[0]}function We(g){for(let d=0;d<64;++d){const v=g[0][d],T=g[1][d],R=g[2][d];g[0][d]=v+1.5747*R,g[1][d]=v-.1873*T-.4682*R,g[2][d]=v+1.8556*T}}const B=new Float32Array(1),wt=new Uint32Array(B.buffer);function ct(g){B[0]=g;const d=wt[0],v=d>>>16&32768,T=d&2147483647;if(T>=1199570944)return v|(T>2139095040?32256:31744);if(T<947912704)return B[0]=Math.abs(g)+.5,v|wt[0]-1056964608;const R=T+4095+(T>>>13&1);return v|R-939524096>>>13}function Mt(g,d,v){if(O===null){O=new Uint16Array(65536);for(let T=1;T<65536;++T){if((T&31744)===31744)continue;const R=De.fromHalfFloat(T),N=Math.abs(R),P=N<=1?Math.pow(N,2.2):Math.pow(H,N-1);O[T]=ct(R<0?-P:P)}}for(let T=0;T<64;++T)d[v+T]=O[ct(g[T])]}function Te(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function Rt(g){const d=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),v=new Uint8Array(Ge(d)),T=new Uint8Array(v.length);return Ee(v),Me(v,T),new DataView(T.buffer)}function Ze(g){const d=g.array.slice(g.offset.value,g.offset.value+g.size),v=or(d),T=new Uint8Array(v.length);return Ee(v),Me(v,T),new DataView(T.buffer)}function et(g){const d=g.viewer,v={value:g.offset.value},T=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),R=new Uint8Array(8192);let N=0;const P=new Array(g.inputChannels.length);for(let pe=0,ge=g.inputChannels.length;pe<ge;pe++)P[pe]={},P[pe].start=N,P[pe].end=P[pe].start,P[pe].nx=g.columns,P[pe].ny=g.lines,P[pe].size=g.type,N+=P[pe].nx*P[pe].ny*P[pe].size;const V=ve(d,v),G=ve(d,v);if(G>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(V<=G)for(let pe=0;pe<G-V+1;pe++)R[pe+V]=D(d,v);const z=new Uint16Array(65536),W=X(R,z),ae=se(d,v);lt(g.array,d,v,ae,T,N);for(let pe=0;pe<g.inputChannels.length;++pe){const ge=P[pe];for(let _e=0;_e<P[pe].size;++_e)Ve(T,ge.start+_e,ge.nx,ge.size,ge.ny,ge.nx*ge.size,W)}le(z,T,N);let ee=0;const te=new Uint8Array(T.buffer.byteLength);for(let pe=0;pe<g.lines;pe++)for(let ge=0;ge<g.inputChannels.length;ge++){const _e=P[ge],Pe=_e.nx*_e.size,je=new Uint8Array(T.buffer,_e.end*2,Pe*2);te.set(je,ee),ee+=Pe*2,_e.end+=Pe}return new DataView(te.buffer)}function L(g){const d=g.array.slice(g.offset.value,g.offset.value+g.size),v=or(d),T=g.inputChannels.length*g.lines*g.columns*g.totalBytes,R=new ArrayBuffer(T),N=new DataView(R);let P=0,V=0;const G=new Array(4);for(let z=0;z<g.lines;z++)for(let W=0;W<g.inputChannels.length;W++){let ae=0;switch(g.inputChannels[W].pixelType){case 1:G[0]=P,G[1]=G[0]+g.columns,P=G[1]+g.columns;for(let te=0;te<g.columns;++te){const pe=v[G[0]++]<<8|v[G[1]++];ae+=pe,N.setUint16(V,ae,!0),V+=2}break;case 2:G[0]=P,G[1]=G[0]+g.columns,G[2]=G[1]+g.columns,P=G[2]+g.columns;for(let te=0;te<g.columns;++te){const pe=v[G[0]++]<<24|v[G[1]++]<<16|v[G[2]++]<<8;ae+=pe,N.setUint32(V,ae,!0),V+=4}break}}return N}function E(g){const d=g.array;let v=g.offset.value;const T=g.columns,R=g.lines,N=g.inputChannels,P=g.totalBytes,V=Xt.compression==="B44A_COMPRESSION",G=new Uint8Array(R*T*P),z=new Uint16Array(16);let W=0;for(let ae=0;ae<N.length;ae++){const ee=N[ae],te=ee.pixelType*2,pe=Math.ceil(T/ee.xSampling),ge=Math.ceil(R/ee.ySampling),_e=ee.xSampling===1&&ee.ySampling===1;if(ee.pixelType!==1){for(let fe=0;fe<ge;fe++)if(_e){const nt=fe*T*P+W*T;for(let ye=0;ye<pe*te;ye++)G[nt+ye]=d[v++]}else v+=pe*te;W+=te;continue}const Pe=Math.ceil(pe/4),je=Math.ceil(ge/4);for(let fe=0;fe<je;fe++)for(let nt=0;nt<Pe;nt++){if(V&&d[v+2]>=52){const ye=d[v]<<8|d[v+1],Fe=ye&32768?ye&32767:~ye&65535;z.fill(Fe),v+=3}else{const ye=d[v]<<8|d[v+1],Fe=d[v+2]>>2,Oe=32<<Fe,yt=ye+((d[v+2]<<4|d[v+3]>>4)&63)*(1<<Fe)-Oe&65535,dt=yt+((d[v+3]<<2|d[v+4]>>6)&63)*(1<<Fe)-Oe&65535,tt=dt+(d[v+4]&63)*(1<<Fe)-Oe&65535,ze=ye+(d[v+5]>>2&63)*(1<<Fe)-Oe&65535,xt=yt+((d[v+5]<<4|d[v+6]>>4)&63)*(1<<Fe)-Oe&65535,Pt=dt+((d[v+6]<<2|d[v+7]>>6)&63)*(1<<Fe)-Oe&65535,rt=tt+(d[v+7]&63)*(1<<Fe)-Oe&65535,Tt=ze+(d[v+8]>>2&63)*(1<<Fe)-Oe&65535,Zt=xt+((d[v+8]<<4|d[v+9]>>4)&63)*(1<<Fe)-Oe&65535,zn=Pt+((d[v+9]<<2|d[v+10]>>6)&63)*(1<<Fe)-Oe&65535,Sn=rt+(d[v+10]&63)*(1<<Fe)-Oe&65535,ri=Tt+(d[v+11]>>2&63)*(1<<Fe)-Oe&65535,kr=Zt+((d[v+11]<<4|d[v+12]>>4)&63)*(1<<Fe)-Oe&65535,Hr=zn+((d[v+12]<<2|d[v+13]>>6)&63)*(1<<Fe)-Oe&65535,zr=Sn+(d[v+13]&63)*(1<<Fe)-Oe&65535,$i=[ye,ze,Tt,ri,yt,xt,Zt,kr,dt,Pt,zn,Hr,tt,rt,Sn,zr];for(let _i=0;_i<16;_i++)z[_i]=$i[_i]&32768?$i[_i]&32767:~$i[_i]&65535;v+=14}if(ee.pLinear){if(U===null){U=new Uint16Array(65536);for(let ye=0;ye<65536;ye++)if((ye&31744)===31744||ye>32768)U[ye]=0;else{const Fe=De.fromHalfFloat(ye);U[ye]=Fe<=0?0:De.toHalfFloat(8*Math.log(Fe))}}for(let ye=0;ye<16;ye++)z[ye]=U[z[ye]]}for(let ye=0;ye<4;ye++){const Fe=fe*4+ye;if(!(Fe>=ge))for(let Oe=0;Oe<4;Oe++){const yt=nt*4+Oe;if(yt>=pe)continue;const dt=z[ye*4+Oe];for(let tt=0;tt<ee.ySampling;tt++){const ze=Fe*ee.ySampling+tt;if(!(ze>=R))for(let xt=0;xt<ee.xSampling;xt++){const Pt=yt*ee.xSampling+xt;if(Pt>=T)continue;const rt=ze*T*P+W*T+Pt*2;G[rt]=dt&255,G[rt+1]=dt>>8&255}}}}}W+=2}return new DataView(G.buffer)}function q(g){const d=g.viewer,v={value:g.offset.value},T=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),R={version:re(d,v),unknownUncompressedSize:re(d,v),unknownCompressedSize:re(d,v),acCompressedSize:re(d,v),dcCompressedSize:re(d,v),rleCompressedSize:re(d,v),rleUncompressedSize:re(d,v),rleRawSize:re(d,v),totalAcUncompressedCount:re(d,v),totalDcUncompressedCount:re(d,v),acCompression:re(d,v)};if(R.version<2)throw new Error("THREE.EXRLoader: "+Xt.compression+" version "+R.version+" is unsupported");const N=new Array;let P=ve(d,v)-2;for(;P>0;){const ge=de(d.buffer,v),_e=D(d,v),Pe=_e>>2&3,je=(_e>>4)-1,fe=new Int8Array([je])[0],nt=D(d,v);N.push({name:ge,index:fe,type:nt,compression:Pe}),P-=ge.length+3}const V=Xt.channels,G=new Array(g.inputChannels.length);for(let ge=0;ge<g.inputChannels.length;++ge){const _e=G[ge]={},Pe=V[ge];_e.name=Pe.name,_e.compression=0,_e.decoded=!1,_e.type=Pe.pixelType,_e.pLinear=Pe.pLinear,_e.width=g.columns,_e.height=g.lines}const z={idx:new Array(3)};for(let ge=0;ge<g.inputChannels.length;++ge){const _e=G[ge],Pe=_e.name.lastIndexOf("."),je=Pe>=0?_e.name.substring(Pe+1):_e.name;for(let fe=0;fe<N.length;++fe){const nt=N[fe];je===nt.name&&_e.type===nt.type&&(_e.compression=nt.compression,nt.index>=0&&(z.idx[nt.index]=ge),_e.offset=ge)}}let W,ae,ee;if(R.acCompressedSize>0)switch(R.acCompression){case 0:W=new Uint16Array(R.totalAcUncompressedCount),lt(g.array,d,v,R.acCompressedSize,W,R.totalAcUncompressedCount);break;case 1:const ge=g.array.slice(v.value,v.value+R.totalAcUncompressedCount),_e=or(ge);W=new Uint16Array(_e.buffer),v.value+=R.totalAcUncompressedCount;break}if(R.dcCompressedSize>0){const ge={array:g.array,offset:v,size:R.dcCompressedSize};ae=new Uint16Array(Ze(ge).buffer),v.value+=R.dcCompressedSize}if(R.rleRawSize>0){const ge=g.array.slice(v.value,v.value+R.rleCompressedSize),_e=or(ge);ee=Ge(_e.buffer),v.value+=R.rleCompressedSize}let te=0;const pe=new Array(G.length);for(let ge=0;ge<pe.length;++ge)pe[ge]=new Array;for(let ge=0;ge<g.lines;++ge)for(let _e=0;_e<G.length;++_e)pe[_e].push(te),te+=G[_e].width*g.type*2;z.idx[0]!==void 0&&G[z.idx[0]]&&Le(z,pe,G,W,ae,T);for(let ge=0;ge<G.length;++ge){const _e=G[ge];if(!_e.decoded)switch(_e.compression){case 2:let Pe=0,je=0;for(let fe=0;fe<g.lines;++fe){let nt=pe[ge][Pe];for(let ye=0;ye<_e.width;++ye){for(let Fe=0;Fe<2*_e.type;++Fe)T[nt++]=ee[je+Fe*_e.width*_e.height];je++}Pe++}break;case 1:st(ge,pe,G,W,ae,T);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(T.buffer)}function de(g,d){const v=new Uint8Array(g);let T=0;for(;v[d.value+T]!=0;)T+=1;const R=new TextDecoder().decode(v.slice(d.value,d.value+T));return d.value=d.value+T+1,R}function ce(g,d,v){const T=new TextDecoder().decode(new Uint8Array(g).slice(d.value,d.value+v));return d.value=d.value+v,T}function Ae(g,d){const v=ie(g,d),T=se(g,d);return[v,T]}function Ie(g,d){const v=se(g,d),T=se(g,d);return[v,T]}function ie(g,d){const v=g.getInt32(d.value,!0);return d.value=d.value+4,v}function se(g,d){const v=g.getUint32(d.value,!0);return d.value=d.value+4,v}function we(g,d){const v=g[d.value];return d.value=d.value+1,v}function D(g,d){const v=g.getUint8(d.value);return d.value=d.value+1,v}const re=function(g,d){const v=Number(g.getBigInt64(d.value,!0));return d.value+=8,v};function j(g,d){const v=g.getFloat32(d.value,!0);return d.value+=4,v}function Ce(g,d){return De.toHalfFloat(j(g,d))}function ve(g,d){const v=g.getUint16(d.value,!0);return d.value+=2,v}function Re(g,d){return De.fromHalfFloat(ve(g,d))}function Je(g,d,v,T){const R=v.value,N=[];for(;v.value<R+T-1;){const P=de(d,v),V=ie(g,v),G=D(g,v);v.value+=3;const z=ie(g,v),W=ie(g,v);N.push({name:P,pixelType:V,pLinear:G,xSampling:z,ySampling:W})}return v.value+=1,N}function ft(g,d){const v=j(g,d),T=j(g,d),R=j(g,d),N=j(g,d),P=j(g,d),V=j(g,d),G=j(g,d),z=j(g,d);return{redX:v,redY:T,greenX:R,greenY:N,blueX:P,blueY:V,whiteX:G,whiteY:z}}function Se(g,d){const v=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],T=D(g,d);return v[T]}function Qe(g,d){const v=ie(g,d),T=ie(g,d),R=ie(g,d),N=ie(g,d);return{xMin:v,yMin:T,xMax:R,yMax:N}}function ut(g,d){const v=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],T=D(g,d);return v[T]}function Ue(g,d){const v=["ENVMAP_LATLONG","ENVMAP_CUBE"],T=D(g,d);return v[T]}function Et(g,d){const v=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],T=["ROUND_DOWN","ROUND_UP"],R=se(g,d),N=se(g,d),P=D(g,d);return{xSize:R,ySize:N,levelMode:v[P&15],roundingMode:T[P>>4]}}function Gt(g,d){const v=j(g,d),T=j(g,d);return[v,T]}function xn(g,d){const v=j(g,d),T=j(g,d),R=j(g,d);return[v,T,R]}function Nr(g,d,v,T,R){if(T==="string"||T==="stringvector"||T==="iccProfile")return ce(d,v,R);if(T==="chlist")return Je(g,d,v,R);if(T==="chromaticities")return ft(g,v);if(T==="compression")return Se(g,v);if(T==="box2i")return Qe(g,v);if(T==="envmap")return Ue(g,v);if(T==="tiledesc")return Et(g,v);if(T==="lineOrder")return ut(g,v);if(T==="float")return j(g,v);if(T==="v2f")return Gt(g,v);if(T==="v3f")return xn(g,v);if(T==="int")return ie(g,v);if(T==="rational")return Ae(g,v);if(T==="timecode")return Ie(g,v);if(T==="preview"||T==="deepImageState"||T==="idmanifest")return v.value+=R,"skipped";v.value+=R}function Yi(g,d){const v=Math.log2(g);return d=="ROUND_DOWN"?Math.floor(v):Math.ceil(v)}function Ns(g,d,v){let T=0;switch(g.levelMode){case"ONE_LEVEL":T=1;break;case"MIPMAP_LEVELS":T=Yi(Math.max(d,v),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return T}function Zi(g,d,v,T){const R=new Array(g);for(let N=0;N<g;N++){const P=1<<N;let V=d/P|0;T=="ROUND_UP"&&V*P<d&&(V+=1);const G=Math.max(V,1);R[N]=(G+v-1)/v|0}return R}function Dr(){const g=this,d=g.offset,v={value:0};for(let T=0;T<g.tileCount;T++){const R=ie(g.viewer,d),N=ie(g.viewer,d);d.value+=8,g.size=se(g.viewer,d);const P=R*g.blockWidth,V=N*g.blockHeight;g.columns=P+g.blockWidth>g.width?g.width-P:g.blockWidth,g.lines=V+g.blockHeight>g.height?g.height-V:g.blockHeight;const G=g.columns*g.totalBytes,W=g.size<g.lines*G?g.uncompress(g):Te(g);d.value+=g.size;for(let ae=0;ae<g.lines;ae++){const ee=ae*g.columns*g.totalBytes;for(let te=0;te<g.inputChannels.length;te++){const pe=Xt.channels[te].name,ge=g.channelByteOffsets[pe]*g.columns,_e=g.decodeChannels[pe];if(_e===void 0)continue;v.value=ee+ge;const Pe=(g.height-(1+V+ae))*g.outLineWidth;for(let je=0;je<g.columns;je++){const fe=Pe+(je+P)*g.outputChannels+_e;g.byteArray[fe]=g.getter(W,v)}}}}}function Pn(){const g=this,d=g.offset,v={value:0};for(let T=0;T<g.height/g.blockHeight;T++){const R=ie(g.viewer,d)-Xt.dataWindow.yMin;g.size=se(g.viewer,d),g.lines=R+g.blockHeight>g.height?g.height-R:g.blockHeight;const N=g.columns*g.totalBytes,V=g.size<g.lines*N?g.uncompress(g):Te(g);d.value+=g.size;for(let G=0;G<g.lines;G++){const z=R+G,W=G*N,ae=(g.height-1-z)*g.outLineWidth;for(let ee=0;ee<g.inputChannels.length;ee++){const te=Xt.channels[ee].name,pe=g.channelByteOffsets[te]*g.columns,ge=g.decodeChannels[te];if(ge!==void 0){v.value=W+pe;for(let _e=0;_e<g.columns;_e++){const Pe=ae+_e*g.outputChannels+ge;g.byteArray[Pe]=g.getter(V,v)}}}}}}function Ki(){const g=this,d=g.chunkOffsets,v={value:0};for(let T=0;T<d.length;T++){const R={value:d[T]};R.value+=4;const N=ie(g.viewer,R)-Xt.dataWindow.yMin;g.size=se(g.viewer,R),g.lines=N+g.blockHeight>g.height?g.height-N:g.blockHeight;const P=g.columns*g.totalBytes,V=g.size<g.lines*P,G=g.offset;g.offset=R;const z=V?g.uncompress(g):Te(g);g.offset=G;for(let W=0;W<g.lines;W++){const ae=N+W,ee=W*P,te=(g.height-1-ae)*g.outLineWidth;for(let pe=0;pe<g.inputChannels.length;pe++){const ge=Xt.channels[pe].name,_e=g.channelByteOffsets[ge]*g.columns,Pe=g.decodeChannels[ge];if(Pe!==void 0){v.value=ee+_e;for(let je=0;je<g.columns;je++){const fe=te+je*g.outputChannels+Pe;g.byteArray[fe]=g.getter(z,v)}}}}}}function Ji(g,d,v,T){if(v===0)return null;const R=g.slice(d,d+v);switch(T){case"NO_COMPRESSION":return new DataView(R.buffer,R.byteOffset,R.byteLength);case"RLE_COMPRESSION":{const N=new Uint8Array(Ge(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength))),P=new Uint8Array(N.length);return Ee(N),Me(N,P),new DataView(P.buffer)}case"ZIPS_COMPRESSION":{const N=or(R),P=new Uint8Array(N.length);return Ee(N),Me(N,P),new DataView(P.buffer)}default:throw new Error("THREE.EXRLoader: "+T+" is unsupported for deep data")}}function Fr(){const g=this,d=g.chunkOffsets,v=g.width,T=g.height,R=g.deepChannels,N=Xt.compression,P=g.multiPart,V=g.decodeChannels,G=g.outputChannels,z=g.byteArray instanceof Uint16Array;let W=-1;for(let ae=0;ae<R.length;ae++)if(R[ae].name==="A"){W=ae;break}for(let ae=0;ae<d.length;ae++){const ee={value:d[ae]};P&&(ee.value+=4);const te=ie(g.viewer,ee)-Xt.dataWindow.yMin,pe=re(g.viewer,ee),ge=re(g.viewer,ee);re(g.viewer,ee);const _e=Ji(g.array,ee.value,pe,N);if(ee.value+=pe,_e===null)continue;const Pe=new Uint32Array(v);for(let Oe=0;Oe<v;Oe++)Pe[Oe]=_e.getUint32(Oe*4,!0);const je=Pe[v-1];if(je===0){ee.value+=ge;continue}const fe=Ji(g.array,ee.value,ge,N),nt=[];let ye=0;for(let Oe=0;Oe<R.length;Oe++)nt.push(ye),ye+=je*R[Oe].bytesPerSample;const Fe=(T-1-te)*g.outLineWidth;for(let Oe=0;Oe<v;Oe++){const yt=Oe===0?0:Pe[Oe-1],tt=Pe[Oe]-yt;if(tt===0)continue;const ze=new Float32Array(G);let xt=0;for(let rt=0;rt<tt;rt++){const Tt=yt+rt,Zt=1-xt;if(Zt<=0)break;let zn=1;if(W>=0){const Sn=R[W].bytesPerSample,ri=nt[W]+Tt*Sn;zn=Sn===2?De.fromHalfFloat(fe.getUint16(ri,!0)):fe.getFloat32(ri,!0)}for(let Sn=0;Sn<R.length;Sn++){const ri=R[Sn],kr=V[ri.name];if(kr===void 0)continue;const Hr=ri.bytesPerSample,zr=nt[Sn]+Tt*Hr,$i=Hr===2?De.fromHalfFloat(fe.getUint16(zr,!0)):fe.getFloat32(zr,!0);ze[kr]+=$i*Zt}xt+=zn*Zt}V.A!==void 0&&(ze[V.A]=xt);const Pt=Fe+Oe*G;for(let rt=0;rt<G;rt++)g.byteArray[Pt+rt]=z?De.toHalfFloat(ze[rt]):ze[rt]}}}function ni(g,d,v){const T={};let R=!1;for(;;){const N=de(d,v);if(N==="")break;R=!0;const P=de(d,v),V=se(g,v),G=Nr(g,d,v,P,V);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${P}'.`):T[N]=G}return R?T:null}function Ur(g,d,v){if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const T=g.getUint8(4),R=g.getUint8(5),N={singleTile:!!(R&2),longName:!!(R&4),deepFormat:!!(R&8),multiPart:!!(R&16)};v.value=8;const P=[];if(N.multiPart){for(;;){const V=ni(g,d,v);if(V===null)break;V.version=T,V.spec=N,P.push(V)}if(P.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const V=ni(g,d,v);V.version=T,V.spec=N,P.push(V)}return P}function Or(g,d,v,T,R,N){const P={size:0,viewer:d,array:v,offset:T,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Bt};switch(g.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=Te;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=Rt;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=Ze;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=Ze;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=et;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=L;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":P.blockHeight=32,P.uncompress=E;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=q;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=q;break;default:throw new Error("THREE.EXRLoader: "+g.compression+" is unsupported")}const V={};for(const ee of g.channels)switch(ee.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":V[ee.name]=!0,P.type=ee.pixelType}let G=!1,z=!1;if(V.Y&&V.RY&&V.BY)P.outputChannels=4,P.yCbCr=!0;else if(V.R&&V.G&&V.B)P.outputChannels=4;else if(V.Y)P.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(P.outputChannels){case 4:N==1023?(G=!V.A,P.format=1023,P.colorSpace=Bt,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3}):N==1030?(P.format=1030,P.colorSpace=Bt,P.outputChannels=2,P.decodeChannels={R:0,G:1}):N==1028?(P.format=1028,P.colorSpace=Bt,P.outputChannels=1,P.decodeChannels={R:0}):z=!0;break;case 1:N==1023?(G=!0,P.format=1023,P.colorSpace=Bt,P.outputChannels=4,P.shouldExpand=!0,P.decodeChannels={Y:0}):N==1030?(P.format=1030,P.colorSpace=Bt,P.outputChannels=2,P.shouldExpand=!0,P.decodeChannels={Y:0}):N==1028?(P.format=1028,P.colorSpace=Bt,P.outputChannels=1,P.decodeChannels={Y:0}):z=!0;break;default:z=!0}if(z)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(P.yCbCr&&(P.format=1023,P.outputChannels=4,P.decodeChannels={Y:0,RY:1,BY:2},G=!0),P.type==1)switch(R){case 1015:P.getter=Re;break;case 1016:P.getter=ve;break}else if(P.type==2)switch(R){case 1015:P.getter=j;break;case 1016:P.getter=Ce}else throw new Error("THREE.EXRLoader: unsupported pixelType "+P.type+" for "+g.compression+".");P.columns=P.width;const W=P.width*P.height*P.outputChannels;switch(R){case 1015:P.byteArray=new Float32Array(W),G&&P.byteArray.fill(1,0,W);break;case 1016:P.byteArray=new Uint16Array(W),G&&P.byteArray.fill(15360,0,W);break;default:console.error("THREE.EXRLoader: unsupported type: ",R);break}let ae=0;for(const ee of g.channels)P.decodeChannels[ee.name]!==void 0&&(P.channelByteOffsets[ee.name]=ae),ae+=ee.pixelType*2;if(P.totalBytes=ae,P.outLineWidth=P.width*P.outputChannels,g.spec.deepFormat){P.deepChannels=[];let ee=0;for(const te of g.channels){const pe=te.pixelType===0?4:te.pixelType*2;P.deepChannels.push({name:te.name,pixelType:te.pixelType,bytesPerSample:pe}),ee+=pe}P.deepBytesPerSample=ee,P.chunkOffsets=g._chunkOffsets,P.multiPart=g.spec.multiPart,P.decode=Fr.bind(P)}else if(g.spec.singleTile){P.blockHeight=g.tiles.ySize,P.blockWidth=g.tiles.xSize;const ee=Ns(g.tiles,P.width,P.height),te=Zi(ee,P.width,g.tiles.xSize,g.tiles.roundingMode),pe=Zi(ee,P.height,g.tiles.ySize,g.tiles.roundingMode);P.tileCount=te[0]*pe[0];for(let ge=0;ge<ee;ge++)for(let _e=0;_e<pe[ge];_e++)for(let Pe=0;Pe<te[ge];Pe++)re(d,T);P.decode=Dr.bind(P)}else if(g.spec.multiPart)P.blockWidth=P.width,P.chunkOffsets=g._chunkOffsets,P.decode=Ki.bind(P);else{P.blockWidth=P.width;const ee=Math.ceil(P.height/P.blockHeight);for(let te=0;te<ee;te++)re(d,T);P.decode=Pn.bind(P)}return P}const vn={value:0},gi=new DataView(e),Br=new Uint8Array(e),ii=Ur(gi,e,vn),Gr=Math.max(0,Math.min(this.part,ii.length-1)),Xt=ii[Gr];if(Xt.spec.multiPart||Xt.spec.deepFormat)for(let g=0;g<ii.length;g++){const d=ii[g].chunkCount;if(g===Gr){Xt._chunkOffsets=[];for(let v=0;v<d;v++)Xt._chunkOffsets.push(re(gi,vn))}else for(let v=0;v<d;v++)re(gi,vn)}const tn=Or(Xt,gi,Br,vn,this.type,this.outputFormat);if(tn.decode(),tn.shouldExpand){const g=tn.byteArray;if(this.outputFormat==1023)for(let d=0;d<g.length;d+=4)g[d+2]=g[d+1]=g[d];else if(this.outputFormat==1030)for(let d=0;d<g.length;d+=2)g[d+1]=g[d]}if(tn.yCbCr){const g=tn.byteArray,d=tn.width*tn.height;if(this.type===1016)for(let v=0;v<d;v++){const T=v*4,R=De.fromHalfFloat(g[T]),N=De.fromHalfFloat(g[T+1]),P=De.fromHalfFloat(g[T+2]),V=(1+N)*R,G=(1+P)*R,z=(R-V*.2126-G*.0722)/.7152;g[T]=De.toHalfFloat(Math.max(0,V)),g[T+1]=De.toHalfFloat(Math.max(0,z)),g[T+2]=De.toHalfFloat(Math.max(0,G))}else for(let v=0;v<d;v++){const T=v*4,R=g[T],N=g[T+1],P=g[T+2],V=(1+N)*R,G=(1+P)*R;g[T]=Math.max(0,V),g[T+1]=Math.max(0,(R-V*.2126-G*.0722)/.7152),g[T+2]=Math.max(0,G)}}return{header:Xt,width:tn.width,height:tn.height,data:tn.byteArray,format:tn.format,colorSpace:tn.colorSpace,type:this.type,minFilter:1006,magFilter:1006,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}}function Qg(r){const e=new Map,t=new Map,n=r.clone();return hc(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function hc(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)hc(r.children[n],e.children[n],t)}class jg extends ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new r0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new al(t,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new al(t,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new x0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=jn.extractUrlBase(e);a=jn.resolveURL(c,this.path)}else a=jn.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new wr(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fc){try{a[_t.KHR_BINARY_GLTF]=new v0(e)}catch(h){i&&i(h);return}s=JSON.parse(a[_t.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new I0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:a[h]=new n0;break;case _t.KHR_DRACO_MESH_COMPRESSION:a[h]=new S0(s,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:a[h]=new M0;break;case _t.KHR_MESH_QUANTIZATION:a[h]=new y0;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function e0(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Ft(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t0{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new it(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mh(u),c.distance=h;break;case"spot":c=new vh(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Tn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class n0{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){const i=[];e.color=new it(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}}class i0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class r0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(s,s)}return Promise.all(i)}}class s0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class a0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class o0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class l0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Bt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class c0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class u0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(s[0],s[1],s[2],Bt),Promise.all(i)}}class h0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class f0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(s[0],s[1],s[2],Bt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ot)),Promise.all(i)}}class d0{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class p0{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ut:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class m0{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class g0{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class _0{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class al{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class x0{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==an.TRIANGLES&&c.mode!==an.TRIANGLE_STRIP&&c.mode!==an.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of h){const M=new pt,m=new k,x=new Hn,b=new k(1,1,1),w=new cu(_.geometry,_.material,f);for(let I=0;I<f;I++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,I),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,I),l.SCALE&&b.fromBufferAttribute(l.SCALE,I),w.setMatrixAt(I,M.compose(m,x,b));let y=null;for(const I in l)if(I==="_COLOR_0"){const C=l[I];w.instanceColor=new ys(C.array,C.itemSize,C.normalized)}else if(I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"){if(y===null){const S=w.geometry;y=new Yt,y.name=S.name;for(const A in S.attributes)y.setAttribute(A,S.attributes[A]);for(const A in S.morphAttributes)y.morphAttributes[A]=S.morphAttributes[A];S.index!==null&&y.setIndex(S.index),y.morphTargetsRelative=S.morphTargetsRelative;for(const A of S.groups)y.addGroup(A.start,A.count,A.materialIndex);S.boundingBox!==null&&(y.boundingBox=S.boundingBox.clone()),S.boundingSphere!==null&&(y.boundingSphere=S.boundingSphere.clone()),y.drawRange.start=S.drawRange.start,y.drawRange.count=S.drawRange.count,y.userData=Object.assign({},S.userData),w.geometry=y}const C=l[I];y.setAttribute(I,new ys(C.array,C.itemSize,C.normalized))}Nt.prototype.copy.call(w,_),this.parser.assignFinalMaterial(w),p.push(w)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const fc="glTF",lr=12,ol={JSON:1313821514,BIN:5130562};class v0{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,lr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-lr,s=new DataView(e,lr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===ol.JSON){const c=new Uint8Array(e,lr+a,o);this.content=n.decode(c)}else if(l===ol.BIN){const c=lr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class S0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=ba[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ba[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Oi[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const M=p.attributes[_],m=l[_];m!==void 0&&(M.normalized=m)}h(p)},o,c,Bt,f)})})}}class M0{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class y0{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class dc extends Vi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,_=e*c,M=_-c,m=-2*p+3*f,x=p-f,b=1-m,w=x-f+h;for(let y=0;y!==o;y++){const I=a[M+y+o],C=a[M+y+l]*u,S=a[_+y+o],A=a[_+y]*u;s[y]=b*I+w*C+m*S+x*A}return s}}const E0=new Hn;class T0 extends dc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return E0.fromArray(s).normalize().toArray(s),s}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Oi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ll={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},cl={33071:1001,33648:1002,10497:1e3},fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ba={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b0={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ui({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),r.DefaultMaterial}function ci(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w0(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function R0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C0(r){let e;const t=r.extensions&&r.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pa(t.attributes):e=r.indices+":"+pa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+pa(r.targets[n]);return e}function pa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Aa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const L0=new pt;class I0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?(this.textureLoader=new Bl(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Eh(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ci(s,o,i),Tn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(jn.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=fa[i.type],o=Oi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new en(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=fa[i.type],c=Oi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let M,m;if(p&&p!==h){const x=Math.floor(f/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let w=t.cache.get(b);w||(M=new c(o,x*p,i.count*p/u),w=new vl(M,p/u),t.cache.add(b,w)),m=new ws(w,l,f%p/u,_)}else o===null?M=new c(i.count*l):M=new c(o,f,i.count*l),m=new en(M,l,_);if(i.sparse!==void 0){const x=fa.SCALAR,b=Oi[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,I=new b(a[1],w,i.sparse.count*x),C=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,A=I.length;S<A;S++){const H=I[S];if(m.setX(H,C[S*l]),l>=2&&m.setY(H,C[S*l+1]),l>=3&&m.setZ(H,C[S*l+2]),l>=4&&m.setW(H,C[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=ll[f.magFilter]||1006,u.minFilter=ll[f.minFilter]||1008,u.wrapS=cl[f.wrapS]||1e3,u.wrapT=cl[f.wrapT]||1e3,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==1003&&u.minFilter!==1006,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(f){return new Promise(function(p,_){t.parse(f,p,_)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const p=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(p,_){let M=p;t.isImageBitmapLoader===!0&&(M=function(m){const x=new zt(m);x.needsUpdate=!0,p(x)}),t.load(jn.resolveURL(f,s.path),M,void 0,_)})})}const h=u.then(function(f){return c===!0&&o.revokeObjectURL(l),Tn(f,a),f.userData.mimeType=a.mimeType||P0(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[_t.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new yl,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ml,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ui}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){const h=i[_t.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new it(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ot)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=2);const u=s.alphaMode||da.OPAQUE;if(u===da.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===da.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Qn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qn){const h=s.emissiveFactor;o.emissive=new it().setRGB(h[0],h[1],h[2],Bt)}return s.emissiveTexture!==void 0&&a!==Qn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),Tn(h,s),t.associations.set(h,{materials:e}),s.extensions&&ci(i,h,s),h})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ul(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=C0(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=ul(new Yt,c,t),c.mode===an.TRIANGLE_STRIP?f=f.then(p=>sl(p,1)):c.mode===an.TRIANGLE_FAN&&(f=f.then(p=>sl(p,2))),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?A0(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const M=u[p],m=a[p];let x;const b=c[p];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0){const w=s.isSkinnedMesh===!0,y=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");w&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),x=w&&y?new au(M,b):new It(M,b),x.isSkinnedMesh===!0&&x.normalizeSkinWeights()}else if(m.mode===an.LINES)x=new hu(M,b);else if(m.mode===an.LINE_STRIP)x=new Na(M,b);else if(m.mode===an.LINE_LOOP)x=new fu(M,b);else if(m.mode===an.POINTS)x=new du(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(x.geometry.morphAttributes).length>0&&R0(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Tn(x,s),m.extensions&&ci(i,x,m),t.assignFinalMaterial(x),h.push(x)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&ci(i,h[0],s),h[0];const f=new pn;s.extensions&&ci(i,f,s),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Fc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Oa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new pt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new La(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const p=i.channels[h],_=i.samplers[p.sampler],M=p.target,m=M.node,x=i.parameters!==void 0?i.parameters[_.input]:_.input,b=i.parameters!==void 0?i.parameters[_.output]:_.output;M.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",b)),c.push(_),u.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],M=h[3],m=h[4],x=[];for(let w=0,y=f.length;w<y;w++){const I=f[w],C=p[w],S=_[w],A=M[w],H=m[w];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const U=n._createAnimationTracks(I,C,S,A,H);if(U)for(let O=0;O<U.length;O++)x.push(U[O])}const b=new uh(s,void 0,x);return Tn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,L0)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){const p=u.userData.pivot,_=h[0];u.pivot=new k().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],_.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Sl:c.length>1?u=new pn:c.length===1?u=c[0]:u=new Nt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),Tn(u,s),s.extensions&&ci(n,u,s),s.matrix!==void 0){const h=new pt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new pn;n.name&&(s.name=i.createUniqueName(n.name)),Tn(s,n),n.extensions&&ci(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){const f=l[u];f.parent!==null?s.add(Qg(f)):s.add(f)}const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof mn||f instanceof zt)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Kn[s.path]===Kn.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Kn[s.path]){case Kn.weights:u=br;break;case Kn.rotation:u=Ar;break;case Kn.translation:case Kn.scale:u=bs;break;default:switch(n.itemSize){case 1:u=br;break;case 2:case 3:default:u=bs;break}break}const h=i.interpolation!==void 0?b0[i.interpolation]:2301,f=this._getArrayFromAccessor(n);for(let p=0,_=l.length;p<_;p++){const M=new u(l[p]+"."+Kn[s.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Aa(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ar?T0:dc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function N0(r,e,t){const n=e.attributes,i=new wn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=Aa(Oi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new k,l=new k;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const M=Aa(Oi[f.componentType]);l.multiplyScalar(M)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function ul(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=ba[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return vt.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Tn(r,e),N0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?w0(r,e.targets,t):r})}const ma=new WeakMap,D0=new URL("/_astro/draco_decoder.C32yEggz.wasm",import.meta.url).toString(),F0=new URL("/_astro/draco_wasm_wrapper.DxJM36Ib.js",import.meta.url).toString(),U0=new URL("/_astro/draco_decoder.fzg4nYZr.js",import.meta.url).toString();new URL("/_astro/draco_wasm_wrapper.fZCQGLGb.js",import.meta.url).toString(),new URL("/_astro/draco_decoder.Z1_iN-Ht.wasm",import.meta.url).toString();class O0 extends ti{constructor(e){super(e),this.decoderPaths={js:F0,wasm:D0,dep_js:U0},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=jn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=jn.resolveURL("draco_decoder.wasm",e),t.dep_js=jn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new wr(this.manager);s.setPriority(this.priority),s.setCache(this.cache),s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ot,n).catch(n)}decodeDracoFile(e,t,n,i,s=Bt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ma.has(e)){const l=ma.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),ma.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Yt;e.index&&t.setIndex(new en(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:s,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n];let c;if(a===o)c=new en(s,a);else{const u=new vl(s,o);c=new ws(u,a,0)}i==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(s instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==Ot)return;const n=new it;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),vt.colorSpaceToWorking(n,Ot),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new wr(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const s=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const a=B0.toString(),o=["/* draco decoder */",s,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const a=s.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function B0(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const p=t(h,f,new Int8Array(l),c),_=p.attributes.map(M=>M.array.buffer);p.index&&_.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},_)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{h.destroy(f)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,p;const _=o.GetEncodedGeometryType(l);if(_===a.TRIANGULAR_MESH)f=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,f);else if(_===a.POINT_CLOUD)f=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const M={index:null,attributes:[]};for(const m in u){const x=self[h[m]];let b,w;if(c.useUniqueIDs)w=u[m],b=o.GetAttributeByUniqueId(f,w);else{if(w=o.GetAttributeId(f,a[u[m]]),w===-1)continue;b=o.GetAttribute(f,w)}const y=i(a,o,f,m,x,b);m==="color"&&(y.vertexColorSpace=c.vertexColorSpace),M.attributes.push(y)}return _===a.TRIANGULAR_MESH&&(M.index=n(a,o,f)),a.destroy(f),M}function n(a,o,l){const u=l.num_faces()*3,h=u*4,f=a._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const p=new Uint32Array(a.HEAPF32.buffer,f,u).slice();return a._free(f),{array:p,itemSize:1}}function i(a,o,l,c,u,h){const f=l.num_points(),p=h.num_components(),_=s(a,u),M=p*u.BYTES_PER_ELEMENT,m=Math.ceil(M/4)*4,x=m/u.BYTES_PER_ELEMENT,b=f*M,w=f*m,y=a._malloc(b);o.GetAttributeDataArrayForAllPoints(l,h,_,b,y);const I=new u(a.HEAPF32.buffer,y,b/u.BYTES_PER_ELEMENT);let C;if(M===m)C=I.slice();else{C=new u(w/u.BYTES_PER_ELEMENT);let S=0;for(let A=0;A<f;A++){for(let H=0;H<p;H++)C[S+H]=I[A*p+H];S+=x}}return a._free(y),{name:c,count:f,itemSize:p,array:C,stride:x}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const On={angle:2.42,height:1.87,radius:7.2,targetX:0,targetZ:0,targetY:.6},ga=new k(0,.6,0),En=(r,e,t)=>Math.max(e,Math.min(t,r));async function G0(r,e){const t=new gl;t.background=new it(.11,.12,.14);const n=new Rr(r);n.compileCubemapShader();const i=[{where:[1,4,1.5],size:[6.4,2.1],color:[4.4,4.6,5]},{where:[-2.4,3.1,-4],size:[5.2,.85],color:[2.9,3.1,3.6]},{where:[4,1.9,1.4],size:[3.8,.92],color:[3.1,2.98,2.73]},{where:[1.8,1.8,-4.9],size:[5.4,1.25],color:[1.65,1.88,2.2]},{where:[-4,.8,2.7],size:[2.9,.6],color:[1,1.2,1.55]}];for(const{where:c,size:u,color:h}of i){const f=new It(new di(...u),new Qn({color:new it(...h),side:2,toneMapped:!1}));f.position.set(...c),f.lookAt(0,.65,0),t.add(f)}const s=r.compileAsync(t,new jt);let a;try{a=await new $g().loadAsync("/config/interior.exr?v=3"),a.mapping=303,t.background=a,t.backgroundRotation.y=.85,t.backgroundIntensity=.62}catch{}await s,e.environment=n.fromScene(t,.007).texture,e.environmentIntensity=1.05,n.dispose(),a?.dispose();for(const c of t.children)c.geometry.dispose(),c.material.dispose();e.add(new Gl(13359344,2564898,.64));const o=new Hl(16316927,1.65);o.position.set(4.2,6.5,-3.2),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-3.3,right:3.3,top:2.7,bottom:-2.7,near:.3,far:16}),o.shadow.camera.updateProjectionMatrix(),o.shadow.normalBias=.009,o.shadow.bias=-18e-5,e.add(o);const l=new It(new di(16,16),new Yu({opacity:.19,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=-.012,l.receiveShadow=!0,e.add(l)}function k0(){const r=document.createElement("canvas");r.width=192,r.height=192;const e=r.getContext("2d"),t=e.createRadialGradient(96,96,20,96,96,96);t.addColorStop(0,"rgba(0,0,0,.94)"),t.addColorStop(.45,"rgba(0,0,0,.68)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,192,192);const n=new It(new di(6.05,3.65),new Qn({map:new Tl(r),opacity:.92,transparent:!0,depthWrite:!1,toneMapped:!1}));return n.rotation.x=-Math.PI/2,n.position.y=-.017,n}async function H0(r,e,t){const n=document.createElement("canvas");n.setAttribute("aria-hidden","true");const i=n.getContext("webgl2",{alpha:!0,antialias:!0});if(!i)throw new Error("WebGL 2 unavailable");const s=new Rg({canvas:n,context:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.outputColorSpace=Ot,s.toneMapping=4,s.toneMappingExposure=.95,s.setClearColor(0,0),s.debug.checkShaderErrors=!1;const a=new gl,o=new jt(24,1,.1,42);s.shadowMap.enabled=!0,s.shadowMap.type=1,s.shadowMap.autoUpdate=!1;const l=G0(s,a);a.add(k0());const c=new O0;c.setDecoderPath("/config/draco/").setWorkerLimit(2);const u=new jg().setDRACOLoader(c);let h;try{const[K]=await Promise.all([u.loadAsync("/config/gt3.glb?v=10"),l]);h=K.scene}finally{c.dispose()}const f=new wn().setFromObject(h),p=f.getCenter(new k);h.position.set(-p.x,-f.min.y,-p.z);const _=new Ut({envMapIntensity:1.04}),M={value:1};_.onBeforeCompile=K=>{K.uniforms.silverGrain=M,K.vertexShader=`varying vec3 surfacePoint;
`+K.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
surfacePoint=(modelMatrix*vec4(transformed,1.)).xyz;`),K.fragmentShader=`uniform float silverGrain; varying vec3 surfacePoint;
`+K.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      vec3 grain=surfacePoint*620.;
      float detail=1.-smoothstep(.25,1.,length(fwidth(grain)));
      float flake=fract(sin(dot(floor(grain),vec3(12.9898,78.233,37.719)))*43758.5453);
      roughnessFactor+=silverGrain*detail*.065*(flake-.5);`)};function m(K){const He=xs[K];_.metalness=He.metalness??.76,_.roughness=He.roughness??.22,_.clearcoat=He.coat??1,_.clearcoatRoughness=_.roughness*.62,_.iridescence=He.shift??0,_.iridescenceIOR=1.42,_.iridescenceThicknessRange=K==="jade"?[220,430]:[100,220],M.value=+(K==="silver"),_.needsUpdate=!0}m("silver"),_.color.set(xs.silver.color);const x=new Ut({color:3752782,metalness:.07,roughness:.1,clearcoat:1,transparent:!0,opacity:.57,depthWrite:!1,clearcoatRoughness:.16,envMapIntensity:.61}),b={HeadlampCover:new Ut({color:15266042,roughness:.065,metalness:0,opacity:.12,transparent:!0,depthWrite:!1,clearcoat:1}),Reflector:new Ut({color:11318462,metalness:.91,roughness:.21}),Projector:new Ut({color:6584718,metalness:.55,roughness:.12,clearcoat:1})};let w=0;if(h.traverse(K=>{if(K.isMesh){if(K.name==="CarbonKit"&&(K.material.color.setHex(2434601),K.material.roughness=.36),/Wheel1G_Material/i.test(K.material.name)){const He=hi.clone();He.color=hi.color,K.material=He;const Ke=K.name.startsWith("Wheel_R")?.277:.265;He.userData.cutRim={value:0},He.onBeforeCompile=We=>{We.uniforms.cutRim=He.userData.cutRim,We.vertexShader=`varying vec2 wheelRadial;
`+We.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
wheelRadial = position.yz;`),We.fragmentShader=`uniform float cutRim; varying vec2 wheelRadial;
`+We.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          float rubber = smoothstep(${Ke}, ${Ke+.004}, length(wheelRadial));
          if(cutRim > .5 && rubber < .5) discard;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.012), rubber);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, .86, rubber);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor *= 1.0 - rubber;`)},He.customProgramCacheKey=()=>"wheel-"+Ke}/Window_Material/.test(K.material.name)&&(K.material=x),b[K.material.name]&&(K.material=b[K.material.name]),(K.name==="GlassInner"||K.name==="Door_GlassInner")&&(K.visible=!1),(/^((?:Door_)?BodyShell|Part[1-4]|(?:Door_)?Trim|Bonnet_BodyShell|AeroWing_(?:BodyShell|Trim))$/.test(K.name)||/Paint_Material/i.test(K.material.name))&&(K.material=_,w++)}}),w===0)throw new Error("No paint panels in the 3D model");const y=Lg(h),I=Fg(h,_);h.traverse(K=>{K.isMesh&&(K.castShadow=!K.material.transparent,K.receiveShadow=!0,K.material.map&&(K.material.map.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy())))}),s.shadowMap.needsUpdate=!0,a.add(h),r.append(n);const C={...On},S={...On},A=new it(xs.silver.color),H=r.querySelector(".door-dot"),U=new k(-.35,.73,-.86),O=new k,X=new k,Q=new k,F=new Gl(16774632,4276553,0);a.add(F);let Y=!1,J=0,Z="steering";const me={steering:[[-.29,1.05,-.38],[.32,.78,-.28]],dashboard:[[-.32,1.03,-.33],[.54,.79,-.06]],selector:[[-.26,.98,-.32],[.1,.54,0]],seat:[[.32,1.03,-.25],[-.29,.64,.34]],trim:[[.31,1.04,-.28],[-.29,.7,.34]]};let $=0,oe=0;function ue(K,He){$=En($+K,-1.35,1.35),oe=En(oe+He,-.62,.55),Ve()}const Ne=new k(...me.steering[0]),qe=new k(...me.steering[1]);let ne=28,xe=null,be=null,Ye=0,he=0,Xe=!0,St=!1;function Ve(){St&&Xe&&Ye===0&&(Ye=requestAnimationFrame(ot))}function ot(K){if(Ye=0,!Xe)return;const He=he?Math.max(0,(K-he)/1e3):.02,Ke=he?En((K-he)/1e3,.01,.08):.02;he=K;let We=!1;if(xe!==null){const q=En((K-xe)/1550,0,1),de=1-Math.pow(1-q,3.25);C.angle=On.angle-.91*(1-de),C.height=On.height+.89*(1-de),C.radius=On.radius-.52*(1-de),We=q<1,We||(xe=null)}else if(!be)for(const q of["angle","height","radius","targetX","targetZ","targetY"]){const de=S[q]-C[q];e.matches||Math.abs(de)<.001?C[q]=S[q]:(C[q]+=de*(1-Math.exp(-Ke*10)),We=!0)}Math.abs(A.r-_.color.r)+Math.abs(A.g-_.color.g)+Math.abs(A.b-_.color.b)>.001&&!e.matches?(_.color.lerp(A,1-Math.exp(-Ke*8)),We=!0):_.color.copy(A),o.position.set(C.targetX+Math.sin(C.angle)*C.radius,C.height,C.targetZ+Math.cos(C.angle)*C.radius),ga.set(C.targetX,C.targetY,C.targetZ);const wt=J;J=e.matches?Number(Y):En(J+(Y?1:-1)*He/1.3,0,1);const ct=Math.min(1,J/.36,(1-J)/.18);y.hinge.rotation.y=-1.1*ct*ct*(3-2*ct),J!==wt&&(s.shadowMap.needsUpdate=!0,We=!0);const Mt=En((J-.3)/.7,0,1),Te=Mt*Mt*(3-2*Mt),Rt=me[Z];X.set(...Rt[0]),Q.set(...Rt[1]).sub(X);const Ze=Q.length(),et=Math.atan2(Q.z,Q.x)+$,L=En(Math.asin(Q.y/Ze)+oe,-1.28,1.28);Q.set(Math.cos(et)*Math.cos(L),Math.sin(L),Math.sin(et)*Math.cos(L)).multiplyScalar(Ze).add(X);const E=e.matches?1:1-Math.exp(-Ke*9);Ne.lerp(X,E),qe.lerp(Q,E),Y&&Ne.distanceTo(X)+qe.distanceTo(Q)>.001&&(We=!0),o.position.lerp(X.copy(Ne).add(h.position),Te),ga.lerp(Q.copy(qe).add(h.position),Te),o.fov=ne+(70-ne)*Te,o.near=.025,o.updateProjectionMatrix(),o.lookAt(ga),o.updateMatrixWorld(),F.intensity=J>.3?.52:0,O.copy(U).add(h.position).project(o),H.hidden=Y||J>0||o.position.z>-.45||Math.abs(O.x)>.94||Math.abs(O.y)>.92,H.style.left=50+50*O.x+"%",H.style.top=50-50*O.y+"%",s.render(a,o),We&&Ve()}function lt(){const K=r.clientWidth,He=r.clientHeight;if(K<1||He<1)return;const Ke=K/He,We=Math.max(2.37,5.26/Ke);o.aspect=Ke,ne=2*Math.atan(We/(2*On.radius))*180/Math.PI,o.updateProjectionMatrix();const B=r.closest("dialog[open]"),wt=Math.min(3840,s.capabilities.maxTextureSize);s.setPixelRatio(Math.min(B?1/0:Math.max(1.5,devicePixelRatio),wt/Math.max(K,He))),s.setSize(K,He,!1),Ve()}function le(){xe!==null&&(xe=null,Object.assign(S,C))}function Ee(){Object.assign(S,On),e.matches?(xe=null,Object.assign(C,On)):xe=performance.now(),Ve()}r.addEventListener("pointerdown",K=>{K.target.closest?.(".door-dot")||!K.isPrimary||K.button!==0||(le(),be={id:K.pointerId,x:K.clientX,y:K.clientY,time:K.timeStamp,velocity:0},r.setPointerCapture(K.pointerId))}),r.addEventListener("pointermove",K=>{if(be?.id!==K.pointerId)return;const He=K.clientX-be.x,Ke=K.clientY-be.y;if(Y){ue(-He*.003,Ke*.0027),be.x=K.clientX,be.y=K.clientY;return}const We=-He*.0075;be.velocity=We/Math.max(8,K.timeStamp-be.time),C.angle+=We,C.height=En(C.height+Ke*.009,.91,3.8),Object.assign(S,C),Object.assign(be,{x:K.clientX,y:K.clientY,time:K.timeStamp}),Ve()});function Me(K){be?.id===K.pointerId&&(!Y&&!e.matches&&K.type==="pointerup"&&K.timeStamp-be.time<125&&(S.angle+=En(be.velocity*135,-.44,.44)),be=null,Ve())}r.addEventListener("pointerup",Me),r.addEventListener("pointercancel",Me),r.addEventListener("lostpointercapture",Me),r.addEventListener("keydown",K=>{const Ke={ArrowLeft:["angle",-.23],ArrowRight:["angle",.23],ArrowUp:["height",.23],ArrowDown:["height",-.23]}[K.key];if(!Ke)return;if(K.preventDefault(),le(),Y){ue({ArrowLeft:-.09,ArrowRight:.09}[K.key]??0,{ArrowUp:.075,ArrowDown:-.075}[K.key]??0);return}const[We,B]=Ke;S[We]+=B,S.height=En(S.height,.91,3.8),Ve()}),e.addEventListener("change",()=>{e.matches&&le(),Ve()});const Ge=new ResizeObserver(lt);n.addEventListener("webglcontextlost",()=>{Xe=!1,cancelAnimationFrame(Ye),Ge.disconnect(),t()});const Le=()=>new Promise(requestAnimationFrame);async function st(){if(s.extensions.has("KHR_parallel_shader_compile"))return s.compileAsync(a,o);const K=[];a.traverse(We=>{We.isMesh&&K.push(We)});const He=K.map(We=>We.visible),Ke=new Set;K.forEach(We=>We.visible=!1),s.shadowMap.needsUpdate=!0;for(const We of K)Ke.has(We.material)||(Ke.add(We.material),We.visible=!0,s.render(a,o),await Le(),We.visible=!1);K.forEach((We,B)=>We.visible=He[B])}if(_.iridescence=.9,_.iridescenceIOR=1.42,await st(),m("silver"),y.update("selector","silver"),await st(),y.update("selector","factory"),!Xe)throw new Error("WebGL context lost");return St=!0,Ge.observe(r),lt(),cancelAnimationFrame(Ye),ot(performance.now()),{view(K){he=performance.now(),Y=K==="cabin",$=oe=0,r.classList.toggle("inside",Y),Z="steering",be=null,le(),Object.assign(S,On),K==="wheels"&&Object.assign(S,{angle:.27,radius:2.9,height:.83,targetX:1.18,targetZ:.75,targetY:.4}),Ve()},setInterior(K,He){y.update(K,He),Z!==K&&($=oe=0),Z=K,s.shadowMap.needsUpdate=!0,Ve()},setPart(K,He){I[K](He),s.shadowMap.needsUpdate=!0,Ve()},setRim(K){I.rim(K),Ve()},replay:Ee,setColor(K){m(K),A.set(xs[K].color),Ve()}}}export{H0 as createShowroom};
