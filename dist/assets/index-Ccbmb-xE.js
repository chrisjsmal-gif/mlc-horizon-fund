(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function np(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xc={exports:{}},ws={},Lc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),rp=Symbol.for("react.portal"),ip=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),lp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),dp=Symbol.for("react.memo"),fp=Symbol.for("react.lazy"),Bl=Symbol.iterator;function hp(t){return t===null||typeof t!="object"?null:(t=Bl&&t[Bl]||t["@@iterator"],typeof t=="function"?t:null)}var Dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Uc={};function Qn(t,e,n){this.props=t,this.context=e,this.refs=Uc,this.updater=n||Dc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qn.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jc(){}jc.prototype=Qn.prototype;function Na(t,e,n){this.props=t,this.context=e,this.refs=Uc,this.updater=n||Dc}var Oa=Na.prototype=new jc;Oa.constructor=Na;Mc(Oa,Qn.prototype);Oa.isPureReactComponent=!0;var Hl=Array.isArray,Fc=Object.prototype.hasOwnProperty,Aa={current:null},zc={key:!0,ref:!0,__self:!0,__source:!0};function bc(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fc.call(e,r)&&!zc.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qr,type:t,key:s,ref:o,props:i,_owner:Aa.current}}function pp(t,e){return{$$typeof:Qr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xa(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qr}function mp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $l=/\/+/g;function $s(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mp(""+t.key):e.toString(36)}function Ci(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qr:case rp:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$s(o,0):r,Hl(i)?(n="",t!=null&&(n=t.replace($l,"$&/")+"/"),Ci(i,e,n,"",function(u){return u})):i!=null&&(xa(i)&&(i=pp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($l,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hl(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$s(s,a);o+=Ci(s,e,n,l,i)}else if(l=hp(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$s(s,a++),o+=Ci(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oi(t,e,n){if(t==null)return t;var r=[],i=0;return Ci(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pe={current:null},Ri={transition:null},vp={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Ri,ReactCurrentOwner:Aa};function Bc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:oi,forEach:function(t,e,n){oi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oi(t,function(){e++}),e},toArray:function(t){return oi(t,function(e){return e})||[]},only:function(t){if(!xa(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=Qn;L.Fragment=ip;L.Profiler=op;L.PureComponent=Na;L.StrictMode=sp;L.Suspense=cp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;L.act=Bc;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Aa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fc.call(e,l)&&!zc.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qr,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:lp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ap,_context:t},t.Consumer=t};L.createElement=bc;L.createFactory=function(t){var e=bc.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:up,render:t}};L.isValidElement=xa;L.lazy=function(t){return{$$typeof:fp,_payload:{_status:-1,_result:t},_init:gp}};L.memo=function(t,e){return{$$typeof:dp,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=Ri.transition;Ri.transition={};try{t()}finally{Ri.transition=e}};L.unstable_act=Bc;L.useCallback=function(t,e){return pe.current.useCallback(t,e)};L.useContext=function(t){return pe.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return pe.current.useDeferredValue(t)};L.useEffect=function(t,e){return pe.current.useEffect(t,e)};L.useId=function(){return pe.current.useId()};L.useImperativeHandle=function(t,e,n){return pe.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return pe.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return pe.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return pe.current.useMemo(t,e)};L.useReducer=function(t,e,n){return pe.current.useReducer(t,e,n)};L.useRef=function(t){return pe.current.useRef(t)};L.useState=function(t){return pe.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return pe.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return pe.current.useTransition()};L.version="18.3.1";Lc.exports=L;var re=Lc.exports;const yp=np(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=re,wp=Symbol.for("react.element"),Ep=Symbol.for("react.fragment"),Sp=Object.prototype.hasOwnProperty,kp=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ip={key:!0,ref:!0,__self:!0,__source:!0};function Hc(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Sp.call(e,r)&&!Ip.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wp,type:t,key:s,ref:o,props:i,_owner:kp.current}}ws.Fragment=Ep;ws.jsx=Hc;ws.jsxs=Hc;xc.exports=ws;var _=xc.exports,Co={},$c={exports:{}},Ce={},Vc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var A=T.length;T.push(O);e:for(;0<A;){var Q=A-1>>>1,Z=T[Q];if(0<i(Z,O))T[Q]=O,T[A]=Z,A=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],A=T.pop();if(A!==O){T[0]=A;e:for(var Q=0,Z=T.length,ii=Z>>>1;Q<ii;){var Kt=2*(Q+1)-1,Hs=T[Kt],Gt=Kt+1,si=T[Gt];if(0>i(Hs,A))Gt<Z&&0>i(si,Hs)?(T[Q]=si,T[Gt]=A,Q=Gt):(T[Q]=Hs,T[Kt]=A,Q=Kt);else if(Gt<Z&&0>i(si,A))T[Q]=si,T[Gt]=A,Q=Gt;else break e}}return O}function i(T,O){var A=T.sortIndex-O.sortIndex;return A!==0?A:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],p=1,m=null,h=3,g=!1,y=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function v(T){if(E=!1,f(T),!y)if(n(l)!==null)y=!0,bs(S);else{var O=n(u);O!==null&&Bs(v,O.startTime-T)}}function S(T,O){y=!1,E&&(E=!1,d(R),R=-1),g=!0;var A=h;try{for(f(O),m=n(l);m!==null&&(!(m.expirationTime>O)||T&&!Me());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,h=m.priorityLevel;var Z=Q(m.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(l)&&r(l),f(O)}else r(l);m=n(l)}if(m!==null)var ii=!0;else{var Kt=n(u);Kt!==null&&Bs(v,Kt.startTime-O),ii=!1}return ii}finally{m=null,h=A,g=!1}}var I=!1,C=null,R=-1,F=5,x=-1;function Me(){return!(t.unstable_now()-x<F)}function er(){if(C!==null){var T=t.unstable_now();x=T;var O=!0;try{O=C(!0,T)}finally{O?tr():(I=!1,C=null)}}else I=!1}var tr;if(typeof c=="function")tr=function(){c(er)};else if(typeof MessageChannel<"u"){var bl=new MessageChannel,tp=bl.port2;bl.port1.onmessage=er,tr=function(){tp.postMessage(null)}}else tr=function(){N(er,0)};function bs(T){C=T,I||(I=!0,tr())}function Bs(T,O){R=N(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,bs(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var A=h;h=O;try{return T()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=h;h=T;try{return O()}finally{h=A}},t.unstable_scheduleCallback=function(T,O,A){var Q=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Q+A:Q):A=Q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,T={id:p++,callback:O,priorityLevel:T,startTime:A,expirationTime:Z,sortIndex:-1},A>Q?(T.sortIndex=A,e(u,T),n(l)===null&&T===n(u)&&(E?(d(R),R=-1):E=!0,Bs(v,A-Q))):(T.sortIndex=Z,e(l,T),y||g||(y=!0,bs(S))),T},t.unstable_shouldYield=Me,t.unstable_wrapCallback=function(T){var O=h;return function(){var A=h;h=O;try{return T.apply(this,arguments)}finally{h=A}}}})(Wc);Vc.exports=Wc;var Tp=Vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=re,Te=Tp;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kc=new Set,Pr={};function fn(t,e){zn(t,e),zn(t+"Capture",e)}function zn(t,e){for(Pr[t]=e,t=0;t<e.length;t++)Kc.add(e[t])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,Rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vl={},Wl={};function Pp(t){return Ro.call(Wl,t)?!0:Ro.call(Vl,t)?!1:Rp.test(t)?Wl[t]=!0:(Vl[t]=!0,!1)}function Np(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Op(t,e,n,r){if(e===null||typeof e>"u"||Np(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function me(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){se[t]=new me(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];se[e]=new me(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){se[t]=new me(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){se[t]=new me(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){se[t]=new me(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){se[t]=new me(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){se[t]=new me(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){se[t]=new me(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){se[t]=new me(t,5,!1,t.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function Da(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(La,Da);se[e]=new me(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(La,Da);se[e]=new me(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(La,Da);se[e]=new me(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){se[t]=new me(t,1,!1,t.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){se[t]=new me(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ma(t,e,n,r){var i=se.hasOwnProperty(e)?se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Op(e,n,i,r)&&(n=null),r||i===null?Pp(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ht=Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),vn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),Po=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),ja=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),Oo=Symbol.for("react.suspense_list"),Fa=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),qc=Symbol.for("react.offscreen"),Kl=Symbol.iterator;function nr(t){return t===null||typeof t!="object"?null:(t=Kl&&t[Kl]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,Vs;function dr(t){if(Vs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vs=e&&e[1]||""}return`
`+Vs+t}var Ws=!1;function Ks(t,e){if(!t||Ws)return"";Ws=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ws=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?dr(t):""}function Ap(t){switch(t.tag){case 5:return dr(t.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return t=Ks(t.type,!1),t;case 11:return t=Ks(t.type.render,!1),t;case 1:return t=Ks(t.type,!0),t;default:return""}}function Ao(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yn:return"Fragment";case vn:return"Portal";case Po:return"Profiler";case Ua:return"StrictMode";case No:return"Suspense";case Oo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qc:return(t.displayName||"Context")+".Consumer";case Gc:return(t._context.displayName||"Context")+".Provider";case ja:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fa:return e=t.displayName||null,e!==null?e:Ao(t.type)||"Memo";case vt:e=t._payload,t=t._init;try{return Ao(t(e))}catch{}}return null}function xp(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ao(e);case 8:return e===Ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lp(t){var e=Yc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function li(t){t._valueTracker||(t._valueTracker=Lp(t))}function Xc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xo(t,e){var n=e.checked;return V({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gl(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jc(t,e){e=e.checked,e!=null&&Ma(t,"checked",e,!1)}function Lo(t,e){Jc(t,e);var n=bt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Do(t,e.type,n):e.hasOwnProperty("defaultValue")&&Do(t,e.type,bt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ql(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Do(t,e,n){(e!=="number"||Hi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fr=Array.isArray;function On(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mo(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ql(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(fr(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bt(n)}}function Zc(t,e){var n=bt(e.value),r=bt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Yl(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ed(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ed(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ui,td=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ui.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Nr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dp=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(t){Dp.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vr[e]=vr[t]})});function nd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vr.hasOwnProperty(t)&&vr[t]?(""+e).trim():e+"px"}function rd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Mp=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(t,e){if(e){if(Mp[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Fo(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zo=null;function za(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bo=null,An=null,xn=null;function Xl(t){if(t=Xr(t)){if(typeof bo!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Ts(e),bo(t.stateNode,t.type,e))}}function id(t){An?xn?xn.push(t):xn=[t]:An=t}function sd(){if(An){var t=An,e=xn;if(xn=An=null,Xl(t),e)for(t=0;t<e.length;t++)Xl(e[t])}}function od(t,e){return t(e)}function ad(){}var Gs=!1;function ld(t,e,n){if(Gs)return t(e,n);Gs=!0;try{return od(t,e,n)}finally{Gs=!1,(An!==null||xn!==null)&&(ad(),sd())}}function Or(t,e){var n=t.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Bo=!1;if(at)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Bo=!1}function Up(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var yr=!1,$i=null,Vi=!1,Ho=null,jp={onError:function(t){yr=!0,$i=t}};function Fp(t,e,n,r,i,s,o,a,l){yr=!1,$i=null,Up.apply(jp,arguments)}function zp(t,e,n,r,i,s,o,a,l){if(Fp.apply(this,arguments),yr){if(yr){var u=$i;yr=!1,$i=null}else throw Error(w(198));Vi||(Vi=!0,Ho=u)}}function hn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ud(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jl(t){if(hn(t)!==t)throw Error(w(188))}function bp(t){var e=t.alternate;if(!e){if(e=hn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jl(i),t;if(s===r)return Jl(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function cd(t){return t=bp(t),t!==null?dd(t):null}function dd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dd(t);if(e!==null)return e;t=t.sibling}return null}var fd=Te.unstable_scheduleCallback,Zl=Te.unstable_cancelCallback,Bp=Te.unstable_shouldYield,Hp=Te.unstable_requestPaint,q=Te.unstable_now,$p=Te.unstable_getCurrentPriorityLevel,ba=Te.unstable_ImmediatePriority,hd=Te.unstable_UserBlockingPriority,Wi=Te.unstable_NormalPriority,Vp=Te.unstable_LowPriority,pd=Te.unstable_IdlePriority,Es=null,Qe=null;function Wp(t){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Es,t,void 0,(t.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:Qp,Kp=Math.log,Gp=Math.LN2;function Qp(t){return t>>>=0,t===0?32:31-(Kp(t)/Gp|0)|0}var ci=64,di=4194304;function hr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ki(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hr(a):(s&=o,s!==0&&(r=hr(s)))}else o=n&~i,o!==0?r=hr(o):s!==0&&(r=hr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-be(e),i=1<<n,r|=t[n],e&=~i;return r}function qp(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yp(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-be(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=qp(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $o(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function md(){var t=ci;return ci<<=1,!(ci&4194240)&&(ci=64),t}function Qs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-be(e),t[e]=n}function Xp(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-be(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ba(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-be(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var M=0;function gd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vd,Ha,yd,_d,wd,Vo=!1,fi=[],Pt=null,Nt=null,Ot=null,Ar=new Map,xr=new Map,_t=[],Jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eu(t,e){switch(t){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Ar.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(e.pointerId)}}function ir(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xr(e),e!==null&&Ha(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zp(t,e,n,r,i){switch(e){case"focusin":return Pt=ir(Pt,t,e,n,r,i),!0;case"dragenter":return Nt=ir(Nt,t,e,n,r,i),!0;case"mouseover":return Ot=ir(Ot,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ar.set(s,ir(Ar.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xr.set(s,ir(xr.get(s)||null,t,e,n,r,i)),!0}return!1}function Ed(t){var e=Xt(t.target);if(e!==null){var n=hn(e);if(n!==null){if(e=n.tag,e===13){if(e=ud(n),e!==null){t.blockedOn=e,wd(t.priority,function(){yd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wo(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zo=r,n.target.dispatchEvent(r),zo=null}else return e=Xr(n),e!==null&&Ha(e),t.blockedOn=n,!1;e.shift()}return!0}function tu(t,e,n){Pi(t)&&n.delete(e)}function em(){Vo=!1,Pt!==null&&Pi(Pt)&&(Pt=null),Nt!==null&&Pi(Nt)&&(Nt=null),Ot!==null&&Pi(Ot)&&(Ot=null),Ar.forEach(tu),xr.forEach(tu)}function sr(t,e){t.blockedOn===e&&(t.blockedOn=null,Vo||(Vo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,em)))}function Lr(t){function e(i){return sr(i,t)}if(0<fi.length){sr(fi[0],t);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pt!==null&&sr(Pt,t),Nt!==null&&sr(Nt,t),Ot!==null&&sr(Ot,t),Ar.forEach(e),xr.forEach(e),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Ed(n),n.blockedOn===null&&_t.shift()}var Ln=ht.ReactCurrentBatchConfig,Gi=!0;function tm(t,e,n,r){var i=M,s=Ln.transition;Ln.transition=null;try{M=1,$a(t,e,n,r)}finally{M=i,Ln.transition=s}}function nm(t,e,n,r){var i=M,s=Ln.transition;Ln.transition=null;try{M=4,$a(t,e,n,r)}finally{M=i,Ln.transition=s}}function $a(t,e,n,r){if(Gi){var i=Wo(t,e,n,r);if(i===null)io(t,e,r,Qi,n),eu(t,r);else if(Zp(i,t,e,n,r))r.stopPropagation();else if(eu(t,r),e&4&&-1<Jp.indexOf(t)){for(;i!==null;){var s=Xr(i);if(s!==null&&vd(s),s=Wo(t,e,n,r),s===null&&io(t,e,r,Qi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else io(t,e,r,null,n)}}var Qi=null;function Wo(t,e,n,r){if(Qi=null,t=za(r),t=Xt(t),t!==null)if(e=hn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ud(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qi=t,null}function Sd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case ba:return 1;case hd:return 4;case Wi:case Vp:return 16;case pd:return 536870912;default:return 16}default:return 16}}var Ct=null,Va=null,Ni=null;function kd(){if(Ni)return Ni;var t,e=Va,n=e.length,r,i="value"in Ct?Ct.value:Ct.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ni=i.slice(t,1<r?1-r:void 0)}function Oi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hi(){return!0}function nu(){return!1}function Re(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hi:nu,this.isPropagationStopped=nu,this}return V(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),e}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Re(qn),Yr=V({},qn,{view:0,detail:0}),rm=Re(Yr),qs,Ys,or,Ss=V({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==or&&(or&&t.type==="mousemove"?(qs=t.screenX-or.screenX,Ys=t.screenY-or.screenY):Ys=qs=0,or=t),qs)},movementY:function(t){return"movementY"in t?t.movementY:Ys}}),ru=Re(Ss),im=V({},Ss,{dataTransfer:0}),sm=Re(im),om=V({},Yr,{relatedTarget:0}),Xs=Re(om),am=V({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Re(am),um=V({},qn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cm=Re(um),dm=V({},qn,{data:0}),iu=Re(dm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pm[t])?!!e[t]:!1}function Ka(){return mm}var gm=V({},Yr,{key:function(t){if(t.key){var e=fm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(t){return t.type==="keypress"?Oi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vm=Re(gm),ym=V({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Re(ym),_m=V({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),wm=Re(_m),Em=V({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=Re(Em),km=V({},Ss,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=Re(km),Tm=[9,13,27,32],Ga=at&&"CompositionEvent"in window,_r=null;at&&"documentMode"in document&&(_r=document.documentMode);var Cm=at&&"TextEvent"in window&&!_r,Id=at&&(!Ga||_r&&8<_r&&11>=_r),ou=" ",au=!1;function Td(t,e){switch(t){case"keyup":return Tm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _n=!1;function Rm(t,e){switch(t){case"compositionend":return Cd(e);case"keypress":return e.which!==32?null:(au=!0,ou);case"textInput":return t=e.data,t===ou&&au?null:t;default:return null}}function Pm(t,e){if(_n)return t==="compositionend"||!Ga&&Td(t,e)?(t=kd(),Ni=Va=Ct=null,_n=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Id&&e.locale!=="ko"?null:e.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nm[t.type]:e==="textarea"}function Rd(t,e,n,r){id(r),e=qi(e,"onChange"),0<e.length&&(n=new Wa("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wr=null,Dr=null;function Om(t){Fd(t,0)}function ks(t){var e=Sn(t);if(Xc(e))return t}function Am(t,e){if(t==="change")return e}var Pd=!1;if(at){var Js;if(at){var Zs="oninput"in document;if(!Zs){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),Zs=typeof uu.oninput=="function"}Js=Zs}else Js=!1;Pd=Js&&(!document.documentMode||9<document.documentMode)}function cu(){wr&&(wr.detachEvent("onpropertychange",Nd),Dr=wr=null)}function Nd(t){if(t.propertyName==="value"&&ks(Dr)){var e=[];Rd(e,Dr,t,za(t)),ld(Om,e)}}function xm(t,e,n){t==="focusin"?(cu(),wr=e,Dr=n,wr.attachEvent("onpropertychange",Nd)):t==="focusout"&&cu()}function Lm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ks(Dr)}function Dm(t,e){if(t==="click")return ks(e)}function Mm(t,e){if(t==="input"||t==="change")return ks(e)}function Um(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var He=typeof Object.is=="function"?Object.is:Um;function Mr(t,e){if(He(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ro.call(e,i)||!He(t[i],e[i]))return!1}return!0}function du(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fu(t,e){var n=du(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=du(n)}}function Od(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Od(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ad(){for(var t=window,e=Hi();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hi(t.document)}return e}function Qa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jm(t){var e=Ad(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Od(n.ownerDocument.documentElement,n)){if(r!==null&&Qa(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fu(n,s);var o=fu(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fm=at&&"documentMode"in document&&11>=document.documentMode,wn=null,Ko=null,Er=null,Go=!1;function hu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||wn==null||wn!==Hi(r)||(r=wn,"selectionStart"in r&&Qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Mr(Er,r)||(Er=r,r=qi(Ko,"onSelect"),0<r.length&&(e=new Wa("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wn)))}function pi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var En={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},eo={},xd={};at&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Is(t){if(eo[t])return eo[t];if(!En[t])return t;var e=En[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xd)return eo[t]=e[n];return t}var Ld=Is("animationend"),Dd=Is("animationiteration"),Md=Is("animationstart"),Ud=Is("transitionend"),jd=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(t,e){jd.set(t,e),fn(e,[t])}for(var to=0;to<pu.length;to++){var no=pu[to],zm=no.toLowerCase(),bm=no[0].toUpperCase()+no.slice(1);Ht(zm,"on"+bm)}Ht(Ld,"onAnimationEnd");Ht(Dd,"onAnimationIteration");Ht(Md,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Ud,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function mu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zp(r,e,void 0,t),t.currentTarget=null}function Fd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mu(i,a,u),s=l}}}if(Vi)throw t=Ho,Vi=!1,Ho=null,t}function z(t,e){var n=e[Jo];n===void 0&&(n=e[Jo]=new Set);var r=t+"__bubble";n.has(r)||(zd(e,t,2,!1),n.add(r))}function ro(t,e,n){var r=0;e&&(r|=4),zd(n,t,r,e)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Ur(t){if(!t[mi]){t[mi]=!0,Kc.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||ro(n,!1,t),ro(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mi]||(e[mi]=!0,ro("selectionchange",!1,e))}}function zd(t,e,n,r){switch(Sd(e)){case 1:var i=tm;break;case 4:i=nm;break;default:i=$a}n=i.bind(null,e,n,t),i=void 0,!Bo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function io(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ld(function(){var u=s,p=za(n),m=[];e:{var h=jd.get(t);if(h!==void 0){var g=Wa,y=t;switch(t){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":g=vm;break;case"focusin":y="focus",g=Xs;break;case"focusout":y="blur",g=Xs;break;case"beforeblur":case"afterblur":g=Xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wm;break;case Ld:case Dd:case Md:g=lm;break;case Ud:g=Sm;break;case"scroll":g=rm;break;case"wheel":g=Im;break;case"copy":case"cut":case"paste":g=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=su}var E=(e&4)!==0,N=!E&&t==="scroll",d=E?h!==null?h+"Capture":null:h;E=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Or(c,d),v!=null&&E.push(jr(c,v,f)))),N)break;c=c.return}0<E.length&&(h=new g(h,y,null,n,p),m.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==zo&&(y=n.relatedTarget||n.fromElement)&&(Xt(y)||y[lt]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Xt(y):null,y!==null&&(N=hn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(E=ru,v="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(E=su,v="onPointerLeave",d="onPointerEnter",c="pointer"),N=g==null?h:Sn(g),f=y==null?h:Sn(y),h=new E(v,c+"leave",g,n,p),h.target=N,h.relatedTarget=f,v=null,Xt(p)===u&&(E=new E(d,c+"enter",y,n,p),E.target=f,E.relatedTarget=N,v=E),N=v,g&&y)t:{for(E=g,d=y,c=0,f=E;f;f=mn(f))c++;for(f=0,v=d;v;v=mn(v))f++;for(;0<c-f;)E=mn(E),c--;for(;0<f-c;)d=mn(d),f--;for(;c--;){if(E===d||d!==null&&E===d.alternate)break t;E=mn(E),d=mn(d)}E=null}else E=null;g!==null&&gu(m,h,g,E,!1),y!==null&&N!==null&&gu(m,N,y,E,!0)}}e:{if(h=u?Sn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=Am;else if(lu(h))if(Pd)S=Mm;else{S=Lm;var I=xm}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Dm);if(S&&(S=S(t,u))){Rd(m,S,n,p);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Do(h,"number",h.value)}switch(I=u?Sn(u):window,t){case"focusin":(lu(I)||I.contentEditable==="true")&&(wn=I,Ko=u,Er=null);break;case"focusout":Er=Ko=wn=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,hu(m,n,p);break;case"selectionchange":if(Fm)break;case"keydown":case"keyup":hu(m,n,p)}var C;if(Ga)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _n?Td(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Id&&n.locale!=="ko"&&(_n||R!=="onCompositionStart"?R==="onCompositionEnd"&&_n&&(C=kd()):(Ct=p,Va="value"in Ct?Ct.value:Ct.textContent,_n=!0)),I=qi(u,R),0<I.length&&(R=new iu(R,t,null,n,p),m.push({event:R,listeners:I}),C?R.data=C:(C=Cd(n),C!==null&&(R.data=C)))),(C=Cm?Rm(t,n):Pm(t,n))&&(u=qi(u,"onBeforeInput"),0<u.length&&(p=new iu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=C))}Fd(m,e)})}function jr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Or(t,n),s!=null&&r.unshift(jr(t,s,i)),s=Or(t,e),s!=null&&r.push(jr(t,s,i))),t=t.return}return r}function mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gu(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Or(n,s),l!=null&&o.unshift(jr(n,l,a))):i||(l=Or(n,s),l!=null&&o.push(jr(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function vu(t){return(typeof t=="string"?t:""+t).replace(Hm,`
`).replace($m,"")}function gi(t,e,n){if(e=vu(e),vu(t)!==e&&n)throw Error(w(425))}function Yi(){}var Qo=null,qo=null;function Yo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,Vm=typeof clearTimeout=="function"?clearTimeout:void 0,yu=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof yu<"u"?function(t){return yu.resolve(null).then(t).catch(Km)}:Xo;function Km(t){setTimeout(function(){throw t})}function so(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Lr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lr(e)}function At(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _u(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Yn,Fr="__reactProps$"+Yn,lt="__reactContainer$"+Yn,Jo="__reactEvents$"+Yn,Gm="__reactListeners$"+Yn,Qm="__reactHandles$"+Yn;function Xt(t){var e=t[Ke];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lt]||n[Ke]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_u(t);t!==null;){if(n=t[Ke])return n;t=_u(t)}return e}t=n,n=t.parentNode}return null}function Xr(t){return t=t[Ke]||t[lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Sn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Ts(t){return t[Fr]||null}var Zo=[],kn=-1;function $t(t){return{current:t}}function b(t){0>kn||(t.current=Zo[kn],Zo[kn]=null,kn--)}function j(t,e){kn++,Zo[kn]=t.current,t.current=e}var Bt={},ue=$t(Bt),ye=$t(!1),rn=Bt;function bn(t,e){var n=t.type.contextTypes;if(!n)return Bt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _e(t){return t=t.childContextTypes,t!=null}function Xi(){b(ye),b(ue)}function wu(t,e,n){if(ue.current!==Bt)throw Error(w(168));j(ue,e),j(ye,n)}function bd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,xp(t)||"Unknown",i));return V({},n,r)}function Ji(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bt,rn=ue.current,j(ue,t),j(ye,ye.current),!0}function Eu(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=bd(t,e,rn),r.__reactInternalMemoizedMergedChildContext=t,b(ye),b(ue),j(ue,t)):b(ye),j(ye,n)}var Ze=null,Cs=!1,oo=!1;function Bd(t){Ze===null?Ze=[t]:Ze.push(t)}function qm(t){Cs=!0,Bd(t)}function Vt(){if(!oo&&Ze!==null){oo=!0;var t=0,e=M;try{var n=Ze;for(M=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ze=null,Cs=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(t+1)),fd(ba,Vt),i}finally{M=e,oo=!1}}return null}var In=[],Tn=0,Zi=null,es=0,Ne=[],Oe=0,sn=null,et=1,tt="";function Qt(t,e){In[Tn++]=es,In[Tn++]=Zi,Zi=t,es=e}function Hd(t,e,n){Ne[Oe++]=et,Ne[Oe++]=tt,Ne[Oe++]=sn,sn=t;var r=et;t=tt;var i=32-be(r)-1;r&=~(1<<i),n+=1;var s=32-be(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,et=1<<32-be(e)+i|n<<i|r,tt=s+t}else et=1<<s|n<<i|r,tt=t}function qa(t){t.return!==null&&(Qt(t,1),Hd(t,1,0))}function Ya(t){for(;t===Zi;)Zi=In[--Tn],In[Tn]=null,es=In[--Tn],In[Tn]=null;for(;t===sn;)sn=Ne[--Oe],Ne[Oe]=null,tt=Ne[--Oe],Ne[Oe]=null,et=Ne[--Oe],Ne[Oe]=null}var Ie=null,Se=null,B=!1,ze=null;function $d(t,e){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Su(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ie=t,Se=At(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ie=t,Se=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=sn!==null?{id:et,overflow:tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ie=t,Se=null,!0):!1;default:return!1}}function ea(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ta(t){if(B){var e=Se;if(e){var n=e;if(!Su(t,e)){if(ea(t))throw Error(w(418));e=At(n.nextSibling);var r=Ie;e&&Su(t,e)?$d(r,n):(t.flags=t.flags&-4097|2,B=!1,Ie=t)}}else{if(ea(t))throw Error(w(418));t.flags=t.flags&-4097|2,B=!1,Ie=t}}}function ku(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ie=t}function vi(t){if(t!==Ie)return!1;if(!B)return ku(t),B=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yo(t.type,t.memoizedProps)),e&&(e=Se)){if(ea(t))throw Vd(),Error(w(418));for(;e;)$d(t,e),e=At(e.nextSibling)}if(ku(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Se=At(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Se=null}}else Se=Ie?At(t.stateNode.nextSibling):null;return!0}function Vd(){for(var t=Se;t;)t=At(t.nextSibling)}function Bn(){Se=Ie=null,B=!1}function Xa(t){ze===null?ze=[t]:ze.push(t)}var Ym=ht.ReactCurrentBatchConfig;function ar(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function yi(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Iu(t){var e=t._init;return e(t._payload)}function Wd(t){function e(d,c){if(t){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Mt(d,c),d.index=0,d.sibling=null,d}function s(d,c,f){return d.index=f,t?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,v){return c===null||c.tag!==6?(c=po(f,d.mode,v),c.return=d,c):(c=i(c,f),c.return=d,c)}function l(d,c,f,v){var S=f.type;return S===yn?p(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&Iu(S)===c.type)?(v=i(c,f.props),v.ref=ar(d,c,f),v.return=d,v):(v=ji(f.type,f.key,f.props,null,d.mode,v),v.ref=ar(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=mo(f,d.mode,v),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function p(d,c,f,v,S){return c===null||c.tag!==7?(c=tn(f,d.mode,v,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=po(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ai:return f=ji(c.type,c.key,c.props,null,d.mode,f),f.ref=ar(d,null,c),f.return=d,f;case vn:return c=mo(c,d.mode,f),c.return=d,c;case vt:var v=c._init;return m(d,v(c._payload),f)}if(fr(c)||nr(c))return c=tn(c,d.mode,f,null),c.return=d,c;yi(d,c)}return null}function h(d,c,f,v){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ai:return f.key===S?l(d,c,f,v):null;case vn:return f.key===S?u(d,c,f,v):null;case vt:return S=f._init,h(d,c,S(f._payload),v)}if(fr(f)||nr(f))return S!==null?null:p(d,c,f,v,null);yi(d,f)}return null}function g(d,c,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,a(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:return d=d.get(v.key===null?f:v.key)||null,l(c,d,v,S);case vn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,S);case vt:var I=v._init;return g(d,c,f,I(v._payload),S)}if(fr(v)||nr(v))return d=d.get(f)||null,p(c,d,v,S,null);yi(c,v)}return null}function y(d,c,f,v){for(var S=null,I=null,C=c,R=c=0,F=null;C!==null&&R<f.length;R++){C.index>R?(F=C,C=null):F=C.sibling;var x=h(d,C,f[R],v);if(x===null){C===null&&(C=F);break}t&&C&&x.alternate===null&&e(d,C),c=s(x,c,R),I===null?S=x:I.sibling=x,I=x,C=F}if(R===f.length)return n(d,C),B&&Qt(d,R),S;if(C===null){for(;R<f.length;R++)C=m(d,f[R],v),C!==null&&(c=s(C,c,R),I===null?S=C:I.sibling=C,I=C);return B&&Qt(d,R),S}for(C=r(d,C);R<f.length;R++)F=g(C,d,R,f[R],v),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?R:F.key),c=s(F,c,R),I===null?S=F:I.sibling=F,I=F);return t&&C.forEach(function(Me){return e(d,Me)}),B&&Qt(d,R),S}function E(d,c,f,v){var S=nr(f);if(typeof S!="function")throw Error(w(150));if(f=S.call(f),f==null)throw Error(w(151));for(var I=S=null,C=c,R=c=0,F=null,x=f.next();C!==null&&!x.done;R++,x=f.next()){C.index>R?(F=C,C=null):F=C.sibling;var Me=h(d,C,x.value,v);if(Me===null){C===null&&(C=F);break}t&&C&&Me.alternate===null&&e(d,C),c=s(Me,c,R),I===null?S=Me:I.sibling=Me,I=Me,C=F}if(x.done)return n(d,C),B&&Qt(d,R),S;if(C===null){for(;!x.done;R++,x=f.next())x=m(d,x.value,v),x!==null&&(c=s(x,c,R),I===null?S=x:I.sibling=x,I=x);return B&&Qt(d,R),S}for(C=r(d,C);!x.done;R++,x=f.next())x=g(C,d,R,x.value,v),x!==null&&(t&&x.alternate!==null&&C.delete(x.key===null?R:x.key),c=s(x,c,R),I===null?S=x:I.sibling=x,I=x);return t&&C.forEach(function(er){return e(d,er)}),B&&Qt(d,R),S}function N(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===yn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ai:e:{for(var S=f.key,I=c;I!==null;){if(I.key===S){if(S=f.type,S===yn){if(I.tag===7){n(d,I.sibling),c=i(I,f.props.children),c.return=d,d=c;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&Iu(S)===I.type){n(d,I.sibling),c=i(I,f.props),c.ref=ar(d,I,f),c.return=d,d=c;break e}n(d,I);break}else e(d,I);I=I.sibling}f.type===yn?(c=tn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=ji(f.type,f.key,f.props,null,d.mode,v),v.ref=ar(d,c,f),v.return=d,d=v)}return o(d);case vn:e:{for(I=f.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else e(d,c);c=c.sibling}c=mo(f,d.mode,v),c.return=d,d=c}return o(d);case vt:return I=f._init,N(d,c,I(f._payload),v)}if(fr(f))return y(d,c,f,v);if(nr(f))return E(d,c,f,v);yi(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=po(f,d.mode,v),c.return=d,d=c),o(d)):n(d,c)}return N}var Hn=Wd(!0),Kd=Wd(!1),ts=$t(null),ns=null,Cn=null,Ja=null;function Za(){Ja=Cn=ns=null}function el(t){var e=ts.current;b(ts),t._currentValue=e}function na(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dn(t,e){ns=t,Ja=Cn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ve=!0),t.firstContext=null)}function Le(t){var e=t._currentValue;if(Ja!==t)if(t={context:t,memoizedValue:e,next:null},Cn===null){if(ns===null)throw Error(w(308));Cn=t,ns.dependencies={lanes:0,firstContext:t}}else Cn=Cn.next=t;return e}var Jt=null;function tl(t){Jt===null?Jt=[t]:Jt.push(t)}function Gd(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tl(e)):(n.next=i.next,i.next=n),e.interleaved=n,ut(t,r)}function ut(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yt=!1;function nl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ut(t,n)}return i=r.interleaved,i===null?(e.next=e,tl(r)):(e.next=i.next,i.next=e),r.interleaved=e,ut(t,n)}function Ai(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ba(t,n)}}function Tu(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rs(t,e,n,r){var i=t.updateQueue;yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,p=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(h=e,g=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){m=y.call(g,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,h=typeof y=="function"?y.call(g,m,h):y,h==null)break e;m=V({},m,h);break e;case 2:yt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=g,l=m):p=p.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);an|=o,t.lanes=o,t.memoizedState=m}}function Cu(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Jr={},qe=$t(Jr),zr=$t(Jr),br=$t(Jr);function Zt(t){if(t===Jr)throw Error(w(174));return t}function rl(t,e){switch(j(br,e),j(zr,t),j(qe,Jr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uo(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uo(e,t)}b(qe),j(qe,e)}function $n(){b(qe),b(zr),b(br)}function qd(t){Zt(br.current);var e=Zt(qe.current),n=Uo(e,t.type);e!==n&&(j(zr,t),j(qe,n))}function il(t){zr.current===t&&(b(qe),b(zr))}var H=$t(0);function is(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ao=[];function sl(){for(var t=0;t<ao.length;t++)ao[t]._workInProgressVersionPrimary=null;ao.length=0}var xi=ht.ReactCurrentDispatcher,lo=ht.ReactCurrentBatchConfig,on=0,$=null,X=null,ee=null,ss=!1,Sr=!1,Br=0,Xm=0;function oe(){throw Error(w(321))}function ol(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!He(t[n],e[n]))return!1;return!0}function al(t,e,n,r,i,s){if(on=s,$=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xi.current=t===null||t.memoizedState===null?tg:ng,t=n(r,i),Sr){s=0;do{if(Sr=!1,Br=0,25<=s)throw Error(w(301));s+=1,ee=X=null,e.updateQueue=null,xi.current=rg,t=n(r,i)}while(Sr)}if(xi.current=os,e=X!==null&&X.next!==null,on=0,ee=X=$=null,ss=!1,e)throw Error(w(300));return t}function ll(){var t=Br!==0;return Br=0,t}function We(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=t:ee=ee.next=t,ee}function De(){if(X===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=X.next;var e=ee===null?$.memoizedState:ee.next;if(e!==null)ee=e,X=t;else{if(t===null)throw Error(w(310));X=t,t={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?$.memoizedState=ee=t:ee=ee.next=t}return ee}function Hr(t,e){return typeof e=="function"?e(t):e}function uo(t){var e=De(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=X,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var p=u.lane;if((on&p)===p)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,$.lanes|=p,an|=p}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,He(r,e.memoizedState)||(ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$.lanes|=s,an|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function co(t){var e=De(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);He(s,e.memoizedState)||(ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yd(){}function Xd(t,e){var n=$,r=De(),i=e(),s=!He(r.memoizedState,i);if(s&&(r.memoizedState=i,ve=!0),r=r.queue,ul(ef.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,$r(9,Zd.bind(null,n,r,i,e),void 0,null),te===null)throw Error(w(349));on&30||Jd(n,e,i)}return i}function Jd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zd(t,e,n,r){e.value=n,e.getSnapshot=r,tf(e)&&nf(t)}function ef(t,e,n){return n(function(){tf(e)&&nf(t)})}function tf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!He(t,n)}catch{return!0}}function nf(t){var e=ut(t,1);e!==null&&Be(e,t,1,-1)}function Ru(t){var e=We();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:t},e.queue=t,t=t.dispatch=eg.bind(null,$,t),[e.memoizedState,t]}function $r(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$.updateQueue,e===null?(e={lastEffect:null,stores:null},$.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rf(){return De().memoizedState}function Li(t,e,n,r){var i=We();$.flags|=t,i.memoizedState=$r(1|e,n,void 0,r===void 0?null:r)}function Rs(t,e,n,r){var i=De();r=r===void 0?null:r;var s=void 0;if(X!==null){var o=X.memoizedState;if(s=o.destroy,r!==null&&ol(r,o.deps)){i.memoizedState=$r(e,n,s,r);return}}$.flags|=t,i.memoizedState=$r(1|e,n,s,r)}function Pu(t,e){return Li(8390656,8,t,e)}function ul(t,e){return Rs(2048,8,t,e)}function sf(t,e){return Rs(4,2,t,e)}function of(t,e){return Rs(4,4,t,e)}function af(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lf(t,e,n){return n=n!=null?n.concat([t]):null,Rs(4,4,af.bind(null,e,t),n)}function cl(){}function uf(t,e){var n=De();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ol(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cf(t,e){var n=De();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ol(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function df(t,e,n){return on&21?(He(n,e)||(n=md(),$.lanes|=n,an|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ve=!0),t.memoizedState=n)}function Jm(t,e){var n=M;M=n!==0&&4>n?n:4,t(!0);var r=lo.transition;lo.transition={};try{t(!1),e()}finally{M=n,lo.transition=r}}function ff(){return De().memoizedState}function Zm(t,e,n){var r=Dt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hf(t))pf(e,n);else if(n=Gd(t,e,n,r),n!==null){var i=fe();Be(n,t,r,i),mf(n,e,r)}}function eg(t,e,n){var r=Dt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hf(t))pf(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,He(a,o)){var l=e.interleaved;l===null?(i.next=i,tl(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Gd(t,e,i,r),n!==null&&(i=fe(),Be(n,t,r,i),mf(n,e,r))}}function hf(t){var e=t.alternate;return t===$||e!==null&&e===$}function pf(t,e){Sr=ss=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mf(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ba(t,n)}}var os={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},tg={readContext:Le,useCallback:function(t,e){return We().memoizedState=[t,e===void 0?null:e],t},useContext:Le,useEffect:Pu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Li(4194308,4,af.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Li(4194308,4,t,e)},useInsertionEffect:function(t,e){return Li(4,2,t,e)},useMemo:function(t,e){var n=We();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=We();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Zm.bind(null,$,t),[r.memoizedState,t]},useRef:function(t){var e=We();return t={current:t},e.memoizedState=t},useState:Ru,useDebugValue:cl,useDeferredValue:function(t){return We().memoizedState=t},useTransition:function(){var t=Ru(!1),e=t[0];return t=Jm.bind(null,t[1]),We().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$,i=We();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),te===null)throw Error(w(349));on&30||Jd(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Pu(ef.bind(null,r,s,t),[t]),r.flags|=2048,$r(9,Zd.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=We(),e=te.identifierPrefix;if(B){var n=tt,r=et;n=(r&~(1<<32-be(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Br++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ng={readContext:Le,useCallback:uf,useContext:Le,useEffect:ul,useImperativeHandle:lf,useInsertionEffect:sf,useLayoutEffect:of,useMemo:cf,useReducer:uo,useRef:rf,useState:function(){return uo(Hr)},useDebugValue:cl,useDeferredValue:function(t){var e=De();return df(e,X.memoizedState,t)},useTransition:function(){var t=uo(Hr)[0],e=De().memoizedState;return[t,e]},useMutableSource:Yd,useSyncExternalStore:Xd,useId:ff,unstable_isNewReconciler:!1},rg={readContext:Le,useCallback:uf,useContext:Le,useEffect:ul,useImperativeHandle:lf,useInsertionEffect:sf,useLayoutEffect:of,useMemo:cf,useReducer:co,useRef:rf,useState:function(){return co(Hr)},useDebugValue:cl,useDeferredValue:function(t){var e=De();return X===null?e.memoizedState=t:df(e,X.memoizedState,t)},useTransition:function(){var t=co(Hr)[0],e=De().memoizedState;return[t,e]},useMutableSource:Yd,useSyncExternalStore:Xd,useId:ff,unstable_isNewReconciler:!1};function je(t,e){if(t&&t.defaultProps){e=V({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ra(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:V({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ps={isMounted:function(t){return(t=t._reactInternals)?hn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=fe(),i=Dt(t),s=ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=xt(t,s,i),e!==null&&(Be(e,t,i,r),Ai(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=fe(),i=Dt(t),s=ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xt(t,s,i),e!==null&&(Be(e,t,i,r),Ai(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fe(),r=Dt(t),i=ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=xt(t,i,r),e!==null&&(Be(e,t,r,n),Ai(e,t,r))}};function Nu(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,s):!0}function gf(t,e,n){var r=!1,i=Bt,s=e.contextType;return typeof s=="object"&&s!==null?s=Le(s):(i=_e(e)?rn:ue.current,r=e.contextTypes,s=(r=r!=null)?bn(t,i):Bt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ps,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ou(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ps.enqueueReplaceState(e,e.state,null)}function ia(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nl(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Le(s):(s=_e(e)?rn:ue.current,i.context=bn(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ra(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ps.enqueueReplaceState(i,i.state,null),rs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vn(t,e){try{var n="",r=e;do n+=Ap(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fo(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function vf(t,e,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ls||(ls=!0,ma=r),sa(t,e)},n}function yf(t,e,n){n=ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sa(t,e),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Au(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ig;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yg.bind(null,t,e,n),e.then(t,t))}function xu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ot(-1,1),e.tag=2,xt(n,e,1))),n.lanes|=1),t)}var sg=ht.ReactCurrentOwner,ve=!1;function de(t,e,n,r){e.child=t===null?Kd(e,null,n,r):Hn(e,t.child,n,r)}function Du(t,e,n,r,i){n=n.render;var s=e.ref;return Dn(e,i),r=al(t,e,n,r,s,i),n=ll(),t!==null&&!ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ct(t,e,i)):(B&&n&&qa(e),e.flags|=1,de(t,e,r,i),e.child)}function Mu(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_f(t,e,s,r,i)):(t=ji(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(o,r)&&t.ref===e.ref)return ct(t,e,i)}return e.flags|=1,t=Mt(s,r),t.ref=e.ref,t.return=e,e.child=t}function _f(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mr(s,r)&&t.ref===e.ref)if(ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ve=!0);else return e.lanes=t.lanes,ct(t,e,i)}return oa(t,e,n,r,i)}function wf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Pn,Ee),Ee|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,j(Pn,Ee),Ee|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,j(Pn,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,j(Pn,Ee),Ee|=r;return de(t,e,i,n),e.child}function Ef(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oa(t,e,n,r,i){var s=_e(n)?rn:ue.current;return s=bn(e,s),Dn(e,i),n=al(t,e,n,r,s,i),r=ll(),t!==null&&!ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ct(t,e,i)):(B&&r&&qa(e),e.flags|=1,de(t,e,n,i),e.child)}function Uu(t,e,n,r,i){if(_e(n)){var s=!0;Ji(e)}else s=!1;if(Dn(e,i),e.stateNode===null)Di(t,e),gf(e,n,r),ia(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=_e(n)?rn:ue.current,u=bn(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ou(e,o,r,u),yt=!1;var h=e.memoizedState;o.state=h,rs(e,r,o,i),l=e.memoizedState,a!==r||h!==l||ye.current||yt?(typeof p=="function"&&(ra(e,n,p,r),l=e.memoizedState),(a=yt||Nu(e,n,a,r,h,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qd(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:je(e.type,a),o.props=u,m=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Le(l):(l=_e(n)?rn:ue.current,l=bn(e,l));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==l)&&Ou(e,o,r,l),yt=!1,h=e.memoizedState,o.state=h,rs(e,r,o,i);var y=e.memoizedState;a!==m||h!==y||ye.current||yt?(typeof g=="function"&&(ra(e,n,g,r),y=e.memoizedState),(u=yt||Nu(e,n,u,r,h,y,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return aa(t,e,n,r,s,i)}function aa(t,e,n,r,i,s){Ef(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Eu(e,n,!1),ct(t,e,s);r=e.stateNode,sg.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hn(e,t.child,null,s),e.child=Hn(e,null,a,s)):de(t,e,a,s),e.memoizedState=r.state,i&&Eu(e,n,!0),e.child}function Sf(t){var e=t.stateNode;e.pendingContext?wu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wu(t,e.context,!1),rl(t,e.containerInfo)}function ju(t,e,n,r,i){return Bn(),Xa(i),e.flags|=256,de(t,e,n,r),e.child}var la={dehydrated:null,treeContext:null,retryLane:0};function ua(t){return{baseLanes:t,cachePool:null,transitions:null}}function kf(t,e,n){var r=e.pendingProps,i=H.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),j(H,i&1),t===null)return ta(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=As(o,r,0,null),t=tn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ua(n),e.memoizedState=la,t):dl(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return og(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Mt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mt(a,s):(s=tn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ua(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=la,r}return s=t.child,t=s.sibling,r=Mt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dl(t,e){return e=As({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _i(t,e,n,r){return r!==null&&Xa(r),Hn(e,t.child,null,n),t=dl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function og(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fo(Error(w(422))),_i(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=As({mode:"visible",children:r.children},i,0,null),s=tn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hn(e,t.child,null,o),e.child.memoizedState=ua(o),e.memoizedState=la,s);if(!(e.mode&1))return _i(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=fo(s,r,void 0),_i(t,e,o,r)}if(a=(o&t.childLanes)!==0,ve||a){if(r=te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ut(t,i),Be(r,t,i,-1))}return vl(),r=fo(Error(w(421))),_i(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_g.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Se=At(i.nextSibling),Ie=e,B=!0,ze=null,t!==null&&(Ne[Oe++]=et,Ne[Oe++]=tt,Ne[Oe++]=sn,et=t.id,tt=t.overflow,sn=e),e=dl(e,r.children),e.flags|=4096,e)}function Fu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),na(t.return,e,n)}function ho(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function If(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(de(t,e,r.children,n),r=H.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fu(t,n,e);else if(t.tag===19)Fu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(j(H,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&is(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ho(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&is(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ho(e,!0,n,null,s);break;case"together":ho(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Di(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ct(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),an|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Mt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ag(t,e,n){switch(e.tag){case 3:Sf(e),Bn();break;case 5:qd(e);break;case 1:_e(e.type)&&Ji(e);break;case 4:rl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;j(ts,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(j(H,H.current&1),e.flags|=128,null):n&e.child.childLanes?kf(t,e,n):(j(H,H.current&1),t=ct(t,e,n),t!==null?t.sibling:null);j(H,H.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return If(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(H,H.current),r)break;return null;case 22:case 23:return e.lanes=0,wf(t,e,n)}return ct(t,e,n)}var Tf,ca,Cf,Rf;Tf=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};Cf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zt(qe.current);var s=null;switch(n){case"input":i=xo(t,i),r=xo(t,r),s=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),s=[];break;case"textarea":i=Mo(t,i),r=Mo(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yi)}jo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rf=function(t,e,n,r){n!==r&&(e.flags|=4)};function lr(t,e){if(!B)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lg(t,e,n){var r=e.pendingProps;switch(Ya(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(e),null;case 1:return _e(e.type)&&Xi(),ae(e),null;case 3:return r=e.stateNode,$n(),b(ye),b(ue),sl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ze!==null&&(ya(ze),ze=null))),ca(t,e),ae(e),null;case 5:il(e);var i=Zt(br.current);if(n=e.type,t!==null&&e.stateNode!=null)Cf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return ae(e),null}if(t=Zt(qe.current),vi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ke]=e,r[Fr]=s,t=(e.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)z(pr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":Gl(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":ql(r,s),z("invalid",r)}jo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gi(r.textContent,a,t),i=["children",""+a]):Pr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":li(r),Ql(r,s,!0);break;case"textarea":li(r),Yl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yi)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ed(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ke]=e,t[Fr]=r,Tf(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fo(n,r),n){case"dialog":z("cancel",t),z("close",t),i=r;break;case"iframe":case"object":case"embed":z("load",t),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)z(pr[i],t);i=r;break;case"source":z("error",t),i=r;break;case"img":case"image":case"link":z("error",t),z("load",t),i=r;break;case"details":z("toggle",t),i=r;break;case"input":Gl(t,r),i=xo(t,r),z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),z("invalid",t);break;case"textarea":ql(t,r),i=Mo(t,r),z("invalid",t);break;default:i=r}jo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rd(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&td(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(t,l):typeof l=="number"&&Nr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",t):l!=null&&Ma(t,s,l,o))}switch(n){case"input":li(t),Ql(t,r,!1);break;case"textarea":li(t),Yl(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?On(t,!!r.multiple,s,!1):r.defaultValue!=null&&On(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ae(e),null;case 6:if(t&&e.stateNode!=null)Rf(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Zt(br.current),Zt(qe.current),vi(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ke]=e,(s=r.nodeValue!==n)&&(t=Ie,t!==null))switch(t.tag){case 3:gi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=e,e.stateNode=r}return ae(e),null;case 13:if(b(H),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(B&&Se!==null&&e.mode&1&&!(e.flags&128))Vd(),Bn(),e.flags|=98560,s=!1;else if(s=vi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ke]=e}else Bn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ae(e),s=!1}else ze!==null&&(ya(ze),ze=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||H.current&1?J===0&&(J=3):vl())),e.updateQueue!==null&&(e.flags|=4),ae(e),null);case 4:return $n(),ca(t,e),t===null&&Ur(e.stateNode.containerInfo),ae(e),null;case 10:return el(e.type._context),ae(e),null;case 17:return _e(e.type)&&Xi(),ae(e),null;case 19:if(b(H),s=e.memoizedState,s===null)return ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lr(s,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=is(t),o!==null){for(e.flags|=128,lr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return j(H,H.current&1|2),e.child}t=t.sibling}s.tail!==null&&q()>Wn&&(e.flags|=128,r=!0,lr(s,!1),e.lanes=4194304)}else{if(!r)if(t=is(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!B)return ae(e),null}else 2*q()-s.renderingStartTime>Wn&&n!==1073741824&&(e.flags|=128,r=!0,lr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=q(),e.sibling=null,n=H.current,j(H,r?n&1|2:n&1),e):(ae(e),null);case 22:case 23:return gl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ee&1073741824&&(ae(e),e.subtreeFlags&6&&(e.flags|=8192)):ae(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function ug(t,e){switch(Ya(e),e.tag){case 1:return _e(e.type)&&Xi(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $n(),b(ye),b(ue),sl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return il(e),null;case 13:if(b(H),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Bn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return b(H),null;case 4:return $n(),null;case 10:return el(e.type._context),null;case 22:case 23:return gl(),null;case 24:return null;default:return null}}var wi=!1,le=!1,cg=typeof WeakSet=="function"?WeakSet:Set,k=null;function Rn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(t,e,r)}else n.current=null}function da(t,e,n){try{n()}catch(r){W(t,e,r)}}var zu=!1;function dg(t,e){if(Qo=Gi,t=Ad(),Qa(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,p=0,m=t,h=null;t:for(;;){for(var g;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++p===r&&(l=o),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qo={focusedElem:t,selectionRange:n},Gi=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,N=y.memoizedState,d=e.stateNode,c=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:je(e.type,E),N);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){W(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=zu,zu=!1,y}function kr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&da(e,n,s)}i=i.next}while(i!==r)}}function Ns(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pf(t){var e=t.alternate;e!==null&&(t.alternate=null,Pf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ke],delete e[Fr],delete e[Jo],delete e[Gm],delete e[Qm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nf(t){return t.tag===5||t.tag===3||t.tag===4}function bu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yi));else if(r!==4&&(t=t.child,t!==null))for(ha(t,e,n),t=t.sibling;t!==null;)ha(t,e,n),t=t.sibling}function pa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pa(t,e,n),t=t.sibling;t!==null;)pa(t,e,n),t=t.sibling}var ne=null,Fe=!1;function mt(t,e,n){for(n=n.child;n!==null;)Of(t,e,n),n=n.sibling}function Of(t,e,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:le||Rn(n,e);case 6:var r=ne,i=Fe;ne=null,mt(t,e,n),ne=r,Fe=i,ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(t=ne,n=n.stateNode,t.nodeType===8?so(t.parentNode,n):t.nodeType===1&&so(t,n),Lr(t)):so(ne,n.stateNode));break;case 4:r=ne,i=Fe,ne=n.stateNode.containerInfo,Fe=!0,mt(t,e,n),ne=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&da(n,e,o),i=i.next}while(i!==r)}mt(t,e,n);break;case 1:if(!le&&(Rn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,e,a)}mt(t,e,n);break;case 21:mt(t,e,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,mt(t,e,n),le=r):mt(t,e,n);break;default:mt(t,e,n)}}function Bu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cg),e.forEach(function(r){var i=wg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Fe=!1;break e;case 3:ne=a.stateNode.containerInfo,Fe=!0;break e;case 4:ne=a.stateNode.containerInfo,Fe=!0;break e}a=a.return}if(ne===null)throw Error(w(160));Of(s,o,i),ne=null,Fe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){W(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Af(e,t),e=e.sibling}function Af(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ue(e,t),Ve(t),r&4){try{kr(3,t,t.return),Ns(3,t)}catch(E){W(t,t.return,E)}try{kr(5,t,t.return)}catch(E){W(t,t.return,E)}}break;case 1:Ue(e,t),Ve(t),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ue(e,t),Ve(t),r&512&&n!==null&&Rn(n,n.return),t.flags&32){var i=t.stateNode;try{Nr(i,"")}catch(E){W(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jc(i,s),Fo(a,o);var u=Fo(a,s);for(o=0;o<l.length;o+=2){var p=l[o],m=l[o+1];p==="style"?rd(i,m):p==="dangerouslySetInnerHTML"?td(i,m):p==="children"?Nr(i,m):Ma(i,p,m,u)}switch(a){case"input":Lo(i,s);break;case"textarea":Zc(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?On(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?On(i,!!s.multiple,s.defaultValue,!0):On(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fr]=s}catch(E){W(t,t.return,E)}}break;case 6:if(Ue(e,t),Ve(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){W(t,t.return,E)}}break;case 3:if(Ue(e,t),Ve(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lr(e.containerInfo)}catch(E){W(t,t.return,E)}break;case 4:Ue(e,t),Ve(t);break;case 13:Ue(e,t),Ve(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pl=q())),r&4&&Bu(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(le=(u=le)||p,Ue(e,t),le=u):Ue(e,t),Ve(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(k=t,p=t.child;p!==null;){for(m=k=p;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:kr(4,h,h.return);break;case 1:Rn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){W(r,n,E)}}break;case 5:Rn(h,h.return);break;case 22:if(h.memoizedState!==null){$u(m);continue}}g!==null?(g.return=h,k=g):$u(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nd("display",o))}catch(E){W(t,t.return,E)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(E){W(t,t.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ue(e,t),Ve(t),r&4&&Bu(t);break;case 21:break;default:Ue(e,t),Ve(t)}}function Ve(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var s=bu(t);pa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bu(t);ha(t,a,o);break;default:throw Error(w(161))}}catch(l){W(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fg(t,e,n){k=t,xf(t)}function xf(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=wi;var u=le;if(wi=o,(le=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Vu(i):l!==null?(l.return=o,k=l):Vu(i);for(;s!==null;)k=s,xf(s),s=s.sibling;k=i,wi=a,le=u}Hu(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Hu(t)}}function Hu(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:le||Ns(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:je(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cu(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cu(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||e.flags&512&&fa(e)}catch(h){W(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function $u(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Vu(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ns(4,e)}catch(l){W(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){W(e,i,l)}}var s=e.return;try{fa(e)}catch(l){W(e,s,l)}break;case 5:var o=e.return;try{fa(e)}catch(l){W(e,o,l)}}}catch(l){W(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var hg=Math.ceil,as=ht.ReactCurrentDispatcher,fl=ht.ReactCurrentOwner,xe=ht.ReactCurrentBatchConfig,D=0,te=null,Y=null,ie=0,Ee=0,Pn=$t(0),J=0,Vr=null,an=0,Os=0,hl=0,Ir=null,ge=null,pl=0,Wn=1/0,Je=null,ls=!1,ma=null,Lt=null,Ei=!1,Rt=null,us=0,Tr=0,ga=null,Mi=-1,Ui=0;function fe(){return D&6?q():Mi!==-1?Mi:Mi=q()}function Dt(t){return t.mode&1?D&2&&ie!==0?ie&-ie:Ym.transition!==null?(Ui===0&&(Ui=md()),Ui):(t=M,t!==0||(t=window.event,t=t===void 0?16:Sd(t.type)),t):1}function Be(t,e,n,r){if(50<Tr)throw Tr=0,ga=null,Error(w(185));qr(t,n,r),(!(D&2)||t!==te)&&(t===te&&(!(D&2)&&(Os|=n),J===4&&wt(t,ie)),we(t,r),n===1&&D===0&&!(e.mode&1)&&(Wn=q()+500,Cs&&Vt()))}function we(t,e){var n=t.callbackNode;Yp(t,e);var r=Ki(t,t===te?ie:0);if(r===0)n!==null&&Zl(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zl(n),e===1)t.tag===0?qm(Wu.bind(null,t)):Bd(Wu.bind(null,t)),Wm(function(){!(D&6)&&Vt()}),n=null;else{switch(gd(r)){case 1:n=ba;break;case 4:n=hd;break;case 16:n=Wi;break;case 536870912:n=pd;break;default:n=Wi}n=bf(n,Lf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lf(t,e){if(Mi=-1,Ui=0,D&6)throw Error(w(327));var n=t.callbackNode;if(Mn()&&t.callbackNode!==n)return null;var r=Ki(t,t===te?ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cs(t,r);else{e=r;var i=D;D|=2;var s=Mf();(te!==t||ie!==e)&&(Je=null,Wn=q()+500,en(t,e));do try{gg();break}catch(a){Df(t,a)}while(!0);Za(),as.current=s,D=i,Y!==null?e=0:(te=null,ie=0,e=J)}if(e!==0){if(e===2&&(i=$o(t),i!==0&&(r=i,e=va(t,i))),e===1)throw n=Vr,en(t,0),wt(t,r),we(t,q()),n;if(e===6)wt(t,r);else{if(i=t.current.alternate,!(r&30)&&!pg(i)&&(e=cs(t,r),e===2&&(s=$o(t),s!==0&&(r=s,e=va(t,s))),e===1))throw n=Vr,en(t,0),wt(t,r),we(t,q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:qt(t,ge,Je);break;case 3:if(wt(t,r),(r&130023424)===r&&(e=pl+500-q(),10<e)){if(Ki(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xo(qt.bind(null,t,ge,Je),e);break}qt(t,ge,Je);break;case 4:if(wt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-be(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hg(r/1960))-r,10<r){t.timeoutHandle=Xo(qt.bind(null,t,ge,Je),r);break}qt(t,ge,Je);break;case 5:qt(t,ge,Je);break;default:throw Error(w(329))}}}return we(t,q()),t.callbackNode===n?Lf.bind(null,t):null}function va(t,e){var n=Ir;return t.current.memoizedState.isDehydrated&&(en(t,e).flags|=256),t=cs(t,e),t!==2&&(e=ge,ge=n,e!==null&&ya(e)),t}function ya(t){ge===null?ge=t:ge.push.apply(ge,t)}function pg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!He(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wt(t,e){for(e&=~hl,e&=~Os,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-be(e),r=1<<n;t[n]=-1,e&=~r}}function Wu(t){if(D&6)throw Error(w(327));Mn();var e=Ki(t,0);if(!(e&1))return we(t,q()),null;var n=cs(t,e);if(t.tag!==0&&n===2){var r=$o(t);r!==0&&(e=r,n=va(t,r))}if(n===1)throw n=Vr,en(t,0),wt(t,e),we(t,q()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qt(t,ge,Je),we(t,q()),null}function ml(t,e){var n=D;D|=1;try{return t(e)}finally{D=n,D===0&&(Wn=q()+500,Cs&&Vt())}}function ln(t){Rt!==null&&Rt.tag===0&&!(D&6)&&Mn();var e=D;D|=1;var n=xe.transition,r=M;try{if(xe.transition=null,M=1,t)return t()}finally{M=r,xe.transition=n,D=e,!(D&6)&&Vt()}}function gl(){Ee=Pn.current,b(Pn)}function en(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Vm(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:$n(),b(ye),b(ue),sl();break;case 5:il(r);break;case 4:$n();break;case 13:b(H);break;case 19:b(H);break;case 10:el(r.type._context);break;case 22:case 23:gl()}n=n.return}if(te=t,Y=t=Mt(t.current,null),ie=Ee=e,J=0,Vr=null,hl=Os=an=0,ge=Ir=null,Jt!==null){for(e=0;e<Jt.length;e++)if(n=Jt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jt=null}return t}function Df(t,e){do{var n=Y;try{if(Za(),xi.current=os,ss){for(var r=$.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ss=!1}if(on=0,ee=X=$=null,Sr=!1,Br=0,fl.current=null,n===null||n.return===null){J=1,Vr=e,Y=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=xu(o);if(g!==null){g.flags&=-257,Lu(g,o,a,s,e),g.mode&1&&Au(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if(!(e&1)){Au(s,u,e),vl();break e}l=Error(w(426))}}else if(B&&a.mode&1){var N=xu(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Lu(N,o,a,s,e),Xa(Vn(l,a));break e}}s=l=Vn(l,a),J!==4&&(J=2),Ir===null?Ir=[s]:Ir.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=vf(s,l,e);Tu(s,d);break e;case 1:a=l;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Lt===null||!Lt.has(f)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=yf(s,a,e);Tu(s,v);break e}}s=s.return}while(s!==null)}jf(n)}catch(S){e=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Mf(){var t=as.current;return as.current=os,t===null?os:t}function vl(){(J===0||J===3||J===2)&&(J=4),te===null||!(an&268435455)&&!(Os&268435455)||wt(te,ie)}function cs(t,e){var n=D;D|=2;var r=Mf();(te!==t||ie!==e)&&(Je=null,en(t,e));do try{mg();break}catch(i){Df(t,i)}while(!0);if(Za(),D=n,as.current=r,Y!==null)throw Error(w(261));return te=null,ie=0,J}function mg(){for(;Y!==null;)Uf(Y)}function gg(){for(;Y!==null&&!Bp();)Uf(Y)}function Uf(t){var e=zf(t.alternate,t,Ee);t.memoizedProps=t.pendingProps,e===null?jf(t):Y=e,fl.current=null}function jf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ug(n,e),n!==null){n.flags&=32767,Y=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,Y=null;return}}else if(n=lg(n,e,Ee),n!==null){Y=n;return}if(e=e.sibling,e!==null){Y=e;return}Y=e=t}while(e!==null);J===0&&(J=5)}function qt(t,e,n){var r=M,i=xe.transition;try{xe.transition=null,M=1,vg(t,e,n,r)}finally{xe.transition=i,M=r}return null}function vg(t,e,n,r){do Mn();while(Rt!==null);if(D&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xp(t,s),t===te&&(Y=te=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ei||(Ei=!0,bf(Wi,function(){return Mn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xe.transition,xe.transition=null;var o=M;M=1;var a=D;D|=4,fl.current=null,dg(t,n),Af(n,t),jm(qo),Gi=!!Qo,qo=Qo=null,t.current=n,fg(n),Hp(),D=a,M=o,xe.transition=s}else t.current=n;if(Ei&&(Ei=!1,Rt=t,us=i),s=t.pendingLanes,s===0&&(Lt=null),Wp(n.stateNode),we(t,q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ls)throw ls=!1,t=ma,ma=null,t;return us&1&&t.tag!==0&&Mn(),s=t.pendingLanes,s&1?t===ga?Tr++:(Tr=0,ga=t):Tr=0,Vt(),null}function Mn(){if(Rt!==null){var t=gd(us),e=xe.transition,n=M;try{if(xe.transition=null,M=16>t?16:t,Rt===null)var r=!1;else{if(t=Rt,Rt=null,us=0,D&6)throw Error(w(331));var i=D;for(D|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var p=k;switch(p.tag){case 0:case 11:case 15:kr(8,p,s)}var m=p.child;if(m!==null)m.return=p,k=m;else for(;k!==null;){p=k;var h=p.sibling,g=p.return;if(Pf(p),p===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var N=E.sibling;E.sibling=null,E=N}while(E!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:kr(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,k=d;break e}k=s.return}}var c=t.current;for(k=c;k!==null;){o=k;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,k=f;else e:for(o=c;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ns(9,a)}}catch(S){W(a,a.return,S)}if(a===o){k=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,k=v;break e}k=a.return}}if(D=i,Vt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Es,t)}catch{}r=!0}return r}finally{M=n,xe.transition=e}}return!1}function Ku(t,e,n){e=Vn(n,e),e=vf(t,e,1),t=xt(t,e,1),e=fe(),t!==null&&(qr(t,1,e),we(t,e))}function W(t,e,n){if(t.tag===3)Ku(t,t,n);else for(;e!==null;){if(e.tag===3){Ku(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){t=Vn(n,t),t=yf(e,t,1),e=xt(e,t,1),t=fe(),e!==null&&(qr(e,1,t),we(e,t));break}}e=e.return}}function yg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=fe(),t.pingedLanes|=t.suspendedLanes&n,te===t&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>q()-pl?en(t,0):hl|=n),we(t,e)}function Ff(t,e){e===0&&(t.mode&1?(e=di,di<<=1,!(di&130023424)&&(di=4194304)):e=1);var n=fe();t=ut(t,e),t!==null&&(qr(t,e,n),we(t,n))}function _g(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ff(t,n)}function wg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Ff(t,n)}var zf;zf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ye.current)ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ve=!1,ag(t,e,n);ve=!!(t.flags&131072)}else ve=!1,B&&e.flags&1048576&&Hd(e,es,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Di(t,e),t=e.pendingProps;var i=bn(e,ue.current);Dn(e,n),i=al(null,e,r,t,i,n);var s=ll();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_e(r)?(s=!0,Ji(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nl(e),i.updater=Ps,e.stateNode=i,i._reactInternals=e,ia(e,r,t,n),e=aa(null,e,r,!0,s,n)):(e.tag=0,B&&s&&qa(e),de(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Di(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Sg(r),t=je(r,t),i){case 0:e=oa(null,e,r,t,n);break e;case 1:e=Uu(null,e,r,t,n);break e;case 11:e=Du(null,e,r,t,n);break e;case 14:e=Mu(null,e,r,je(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),oa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Uu(t,e,r,i,n);case 3:e:{if(Sf(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qd(t,e),rs(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vn(Error(w(423)),e),e=ju(t,e,r,n,i);break e}else if(r!==i){i=Vn(Error(w(424)),e),e=ju(t,e,r,n,i);break e}else for(Se=At(e.stateNode.containerInfo.firstChild),Ie=e,B=!0,ze=null,n=Kd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){e=ct(t,e,n);break e}de(t,e,r,n)}e=e.child}return e;case 5:return qd(e),t===null&&ta(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yo(r,i)?o=null:s!==null&&Yo(r,s)&&(e.flags|=32),Ef(t,e),de(t,e,o,n),e.child;case 6:return t===null&&ta(e),null;case 13:return kf(t,e,n);case 4:return rl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hn(e,null,r,n):de(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Du(t,e,r,i,n);case 7:return de(t,e,e.pendingProps,n),e.child;case 8:return de(t,e,e.pendingProps.children,n),e.child;case 12:return de(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,j(ts,r._currentValue),r._currentValue=o,s!==null)if(He(s.value,o)){if(s.children===i.children&&!ye.current){e=ct(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?l.next=l:(l.next=p.next,p.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),na(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),na(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}de(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dn(e,n),i=Le(i),r=r(i),e.flags|=1,de(t,e,r,n),e.child;case 14:return r=e.type,i=je(r,e.pendingProps),i=je(r.type,i),Mu(t,e,r,i,n);case 15:return _f(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:je(r,i),Di(t,e),e.tag=1,_e(r)?(t=!0,Ji(e)):t=!1,Dn(e,n),gf(e,r,i),ia(e,r,i,n),aa(null,e,r,!0,t,n);case 19:return If(t,e,n);case 22:return wf(t,e,n)}throw Error(w(156,e.tag))};function bf(t,e){return fd(t,e)}function Eg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,n,r){return new Eg(t,e,n,r)}function yl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sg(t){if(typeof t=="function")return yl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ja)return 11;if(t===Fa)return 14}return 2}function Mt(t,e){var n=t.alternate;return n===null?(n=Ae(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ji(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yl(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yn:return tn(n.children,i,s,e);case Ua:o=8,i|=8;break;case Po:return t=Ae(12,n,e,i|2),t.elementType=Po,t.lanes=s,t;case No:return t=Ae(13,n,e,i),t.elementType=No,t.lanes=s,t;case Oo:return t=Ae(19,n,e,i),t.elementType=Oo,t.lanes=s,t;case qc:return As(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gc:o=10;break e;case Qc:o=9;break e;case ja:o=11;break e;case Fa:o=14;break e;case vt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Ae(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tn(t,e,n,r){return t=Ae(7,t,r,e),t.lanes=n,t}function As(t,e,n,r){return t=Ae(22,t,r,e),t.elementType=qc,t.lanes=n,t.stateNode={isHidden:!1},t}function po(t,e,n){return t=Ae(6,t,null,e),t.lanes=n,t}function mo(t,e,n){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kg(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _l(t,e,n,r,i,s,o,a,l){return t=new kg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ae(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nl(s),t}function Ig(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bf(t){if(!t)return Bt;t=t._reactInternals;e:{if(hn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(_e(n))return bd(t,n,e)}return e}function Hf(t,e,n,r,i,s,o,a,l){return t=_l(n,r,!0,t,i,s,o,a,l),t.context=Bf(null),n=t.current,r=fe(),i=Dt(n),s=ot(r,i),s.callback=e??null,xt(n,s,i),t.current.lanes=i,qr(t,i,r),we(t,r),t}function xs(t,e,n,r){var i=e.current,s=fe(),o=Dt(i);return n=Bf(n),e.context===null?e.context=n:e.pendingContext=n,e=ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xt(i,e,o),t!==null&&(Be(t,i,o,s),Ai(t,i,o)),o}function ds(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wl(t,e){Gu(t,e),(t=t.alternate)&&Gu(t,e)}function Tg(){return null}var $f=typeof reportError=="function"?reportError:function(t){console.error(t)};function El(t){this._internalRoot=t}Ls.prototype.render=El.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));xs(t,e,null,null)};Ls.prototype.unmount=El.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ln(function(){xs(null,t,null,null)}),e[lt]=null}};function Ls(t){this._internalRoot=t}Ls.prototype.unstable_scheduleHydration=function(t){if(t){var e=_d();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_t.length&&e!==0&&e<_t[n].priority;n++);_t.splice(n,0,t),n===0&&Ed(t)}};function Sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ds(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function Cg(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ds(o);s.call(u)}}var o=Hf(e,r,t,0,null,!1,!1,"",Qu);return t._reactRootContainer=o,t[lt]=o.current,Ur(t.nodeType===8?t.parentNode:t),ln(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ds(l);a.call(u)}}var l=_l(t,0,!1,null,null,!1,!1,"",Qu);return t._reactRootContainer=l,t[lt]=l.current,Ur(t.nodeType===8?t.parentNode:t),ln(function(){xs(e,l,n,r)}),l}function Ms(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ds(o);a.call(l)}}xs(e,o,t,i)}else o=Cg(n,e,t,i,r);return ds(o)}vd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hr(e.pendingLanes);n!==0&&(Ba(e,n|1),we(e,q()),!(D&6)&&(Wn=q()+500,Vt()))}break;case 13:ln(function(){var r=ut(t,1);if(r!==null){var i=fe();Be(r,t,1,i)}}),wl(t,1)}};Ha=function(t){if(t.tag===13){var e=ut(t,134217728);if(e!==null){var n=fe();Be(e,t,134217728,n)}wl(t,134217728)}};yd=function(t){if(t.tag===13){var e=Dt(t),n=ut(t,e);if(n!==null){var r=fe();Be(n,t,e,r)}wl(t,e)}};_d=function(){return M};wd=function(t,e){var n=M;try{return M=t,e()}finally{M=n}};bo=function(t,e,n){switch(e){case"input":if(Lo(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ts(r);if(!i)throw Error(w(90));Xc(r),Lo(r,i)}}}break;case"textarea":Zc(t,n);break;case"select":e=n.value,e!=null&&On(t,!!n.multiple,e,!1)}};od=ml;ad=ln;var Rg={usingClientEntryPoint:!1,Events:[Xr,Sn,Ts,id,sd,ml]},ur={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pg={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cd(t),t===null?null:t.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{Es=Si.inject(Pg),Qe=Si}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Ce.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sl(e))throw Error(w(200));return Ig(t,e,null,n)};Ce.createRoot=function(t,e){if(!Sl(t))throw Error(w(299));var n=!1,r="",i=$f;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_l(t,1,!1,null,null,n,!1,r,i),t[lt]=e.current,Ur(t.nodeType===8?t.parentNode:t),new El(e)};Ce.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=cd(e),t=t===null?null:t.stateNode,t};Ce.flushSync=function(t){return ln(t)};Ce.hydrate=function(t,e,n){if(!Ds(e))throw Error(w(200));return Ms(null,t,e,!0,n)};Ce.hydrateRoot=function(t,e,n){if(!Sl(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$f;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hf(e,null,t,1,n??null,i,!1,s,o),t[lt]=e.current,Ur(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ls(e)};Ce.render=function(t,e,n){if(!Ds(e))throw Error(w(200));return Ms(null,t,e,!1,n)};Ce.unmountComponentAtNode=function(t){if(!Ds(t))throw Error(w(40));return t._reactRootContainer?(ln(function(){Ms(null,null,t,!1,function(){t._reactRootContainer=null,t[lt]=null})}),!0):!1};Ce.unstable_batchedUpdates=ml;Ce.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ds(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Ms(t,e,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(t){console.error(t)}}Vf(),$c.exports=Ce;var Ng=$c.exports,qu=Ng;Co.createRoot=qu.createRoot,Co.hydrateRoot=qu.hydrateRoot;const Og="/assets/MLC-Super-Fund-updated-_y-EpZCV.jpg";var Yu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ag=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,p=s>>2,m=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[p],n[m],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ag(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new xg;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),m!==64){const y=u<<6&192|m;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lg=function(t){const e=Wf(t);return Kf.encodeByteArray(e,!0)},fs=function(t){return Lg(t).replace(/\./g,"")},Gf=function(t){try{return Kf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=()=>Dg().__FIREBASE_DEFAULTS__,Ug=()=>{if(typeof process>"u"||typeof Yu>"u")return;const t=Yu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gf(t[1]);return e&&JSON.parse(e)},kl=()=>{try{return Mg()||Ug()||jg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qf=t=>{var e,n;return(n=(e=kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fg=t=>{const e=Qf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qf=()=>{var t;return(t=kl())===null||t===void 0?void 0:t.config},Yf=t=>{var e;return(e=kl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fs(JSON.stringify(n)),fs(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function Hg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $g(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wg(){const t=he();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kg(){try{return typeof indexedDB=="object"}catch{return!1}}function Gg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="FirebaseError";class pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qg,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pt(i,a,r)}}function qg(t,e){return t.replace(Yg,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yg=/\{\$([^}]+)}/g;function Xg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xu(s)&&Xu(o)){if(!hs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function gr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jg(t,e){const n=new Zg(t,e);return n.subscribe.bind(n)}class Zg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ev(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=go),i.error===void 0&&(i.error=go),i.complete===void 0&&(i.complete=go);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ev(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function go(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rv(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nv(t){return t===Yt?void 0:t}function rv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const sv={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},ov=U.INFO,av={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},lv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=av[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xf{constructor(e){this.name=e,this._logLevel=ov,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const uv=(t,e)=>e.some(n=>t instanceof n);let Ju,Zu;function cv(){return Ju||(Ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dv(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jf=new WeakMap,_a=new WeakMap,Zf=new WeakMap,vo=new WeakMap,Il=new WeakMap;function fv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ut(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jf.set(n,t)}).catch(()=>{}),Il.set(e,t),e}function hv(t){if(_a.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_a.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _a.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pv(t){wa=t(wa)}function mv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yo(this),e,...n);return Zf.set(r,e.sort?e.sort():[e]),Ut(r)}:dv().includes(t)?function(...e){return t.apply(yo(this),e),Ut(Jf.get(this))}:function(...e){return Ut(t.apply(yo(this),e))}}function gv(t){return typeof t=="function"?mv(t):(t instanceof IDBTransaction&&hv(t),uv(t,cv())?new Proxy(t,wa):t)}function Ut(t){if(t instanceof IDBRequest)return fv(t);if(vo.has(t))return vo.get(t);const e=gv(t);return e!==t&&(vo.set(t,e),Il.set(e,t)),e}const yo=t=>Il.get(t);function vv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ut(o.result),l.oldVersion,l.newVersion,Ut(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const yv=["get","getKey","getAll","getAllKeys","count"],_v=["put","add","delete","clear"],_o=new Map;function ec(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_o.get(e))return _o.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _o.set(e,s),s}pv(t=>({...t,get:(e,n,r)=>ec(e,n)||t.get(e,n,r),has:(e,n)=>!!ec(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ev(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ev(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ea="@firebase/app",tc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Xf("@firebase/app"),Sv="@firebase/app-compat",kv="@firebase/analytics-compat",Iv="@firebase/analytics",Tv="@firebase/app-check-compat",Cv="@firebase/app-check",Rv="@firebase/auth",Pv="@firebase/auth-compat",Nv="@firebase/database",Ov="@firebase/data-connect",Av="@firebase/database-compat",xv="@firebase/functions",Lv="@firebase/functions-compat",Dv="@firebase/installations",Mv="@firebase/installations-compat",Uv="@firebase/messaging",jv="@firebase/messaging-compat",Fv="@firebase/performance",zv="@firebase/performance-compat",bv="@firebase/remote-config",Bv="@firebase/remote-config-compat",Hv="@firebase/storage",$v="@firebase/storage-compat",Vv="@firebase/firestore",Wv="@firebase/vertexai-preview",Kv="@firebase/firestore-compat",Gv="firebase",Qv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="[DEFAULT]",qv={[Ea]:"fire-core",[Sv]:"fire-core-compat",[Iv]:"fire-analytics",[kv]:"fire-analytics-compat",[Cv]:"fire-app-check",[Tv]:"fire-app-check-compat",[Rv]:"fire-auth",[Pv]:"fire-auth-compat",[Nv]:"fire-rtdb",[Ov]:"fire-data-connect",[Av]:"fire-rtdb-compat",[xv]:"fire-fn",[Lv]:"fire-fn-compat",[Dv]:"fire-iid",[Mv]:"fire-iid-compat",[Uv]:"fire-fcm",[jv]:"fire-fcm-compat",[Fv]:"fire-perf",[zv]:"fire-perf-compat",[bv]:"fire-rc",[Bv]:"fire-rc-compat",[Hv]:"fire-gcs",[$v]:"fire-gcs-compat",[Vv]:"fire-fst",[Kv]:"fire-fst-compat",[Wv]:"fire-vertex","fire-js":"fire-js",[Gv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Map,Yv=new Map,ka=new Map;function nc(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(ka.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;ka.set(e,t);for(const n of ps.values())nc(n,t);for(const n of Yv.values())nc(n,t);return!0}function Tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Zr("app","Firebase",Xv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=Qv;function eh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(n||(n=qf()),!n)throw jt.create("no-options");const s=ps.get(i);if(s){if(hs(n,s.options)&&hs(r,s.config))return s;throw jt.create("duplicate-app",{appName:i})}const o=new iv(i);for(const l of ka.values())o.addComponent(l);const a=new Jv(n,r,o);return ps.set(i,a),a}function th(t=Sa){const e=ps.get(t);if(!e&&t===Sa&&qf())return eh();if(!e)throw jt.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let i=(r=qv[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Kn(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="firebase-heartbeat-database",ey=1,Wr="firebase-heartbeat-store";let wo=null;function nh(){return wo||(wo=vv(Zv,ey,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wr)}catch(n){console.warn(n)}}}}).catch(t=>{throw jt.create("idb-open",{originalErrorMessage:t.message})})),wo}async function ty(t){try{const n=(await nh()).transaction(Wr),r=await n.objectStore(Wr).get(rh(t));return await n.done,r}catch(e){if(e instanceof pt)dt.warn(e.message);else{const n=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(n.message)}}}async function rc(t,e){try{const r=(await nh()).transaction(Wr,"readwrite");await r.objectStore(Wr).put(e,rh(t)),await r.done}catch(n){if(n instanceof pt)dt.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(r.message)}}}function rh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=1024,ry=30*24*60*60*1e3;class iy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ic();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ry}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ic(),{heartbeatsToSend:r,unsentEntries:i}=sy(this._heartbeatsCache.heartbeats),s=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return dt.warn(n),""}}}function ic(){return new Date().toISOString().substring(0,10)}function sy(t,e=ny){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kg()?Gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ty(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sc(t){return fs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){Kn(new un("platform-logger",e=>new wv(e),"PRIVATE")),Kn(new un("heartbeat",e=>new iy(e),"PRIVATE")),Ft(Ea,tc,t),Ft(Ea,tc,"esm2017"),Ft("fire-js","")}ay("");var ly="firebase",uy="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(ly,uy,"app");function Cl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ih(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cy=ih,sh=new Zr("auth","Firebase",ih());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Xf("@firebase/auth");function dy(t,...e){ms.logLevel<=U.WARN&&ms.warn(`Auth (${Xn}): ${t}`,...e)}function Fi(t,...e){ms.logLevel<=U.ERROR&&ms.error(`Auth (${Xn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw Rl(t,...e)}function Ye(t,...e){return Rl(t,...e)}function oh(t,e,n){const r=Object.assign(Object.assign({},cy()),{[e]:n});return new Zr("auth","Firebase",r).create(e,{appName:t.name})}function zt(t){return oh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sh.create(t,...e)}function P(t,e,...n){if(!t)throw Rl(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fi(e),new Error(e)}function ft(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fy(){return oc()==="http:"||oc()==="https:"}function oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||$g()||"connection"in navigator)?navigator.onLine:!0}function py(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Bg()||Vg()}get(){return hy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new ti(3e4,6e4);function pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wt(t,e,n,r,i={}){return lh(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ei(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},s);return Hg()||(u.referrerPolicy="no-referrer"),ah.fetch()(uh(t,t.config.apiHost,n,a),u)})}async function lh(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},my),e);try{const i=new yy(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ki(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oh(t,p,u);$e(t,p)}}catch(i){if(i instanceof pt)throw i;$e(t,"network-request-failed",{message:String(i)})}}async function Us(t,e,n,r,i={}){const s=await Wt(t,e,n,r,i);return"mfaPendingCredential"in s&&$e(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uh(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Pl(t.config,i):`${t.config.apiScheme}://${i}`}function vy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),gy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(t,e,r);return i.customData._tokenResponse=n,i}function ac(t){return t!==void 0&&t.enterprise!==void 0}class _y{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wy(t,e){return Wt(t,"GET","/v2/recaptchaConfig",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(t,e){return Wt(t,"POST","/v1/accounts:delete",e)}async function ch(t,e){return Wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sy(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Nl(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cr(Eo(i.auth_time)),issuedAtTime:Cr(Eo(i.iat)),expirationTime:Cr(Eo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Eo(t){return Number(t)*1e3}function Nl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gf(n);return i?JSON.parse(i):(Fi("Failed to decode base64 JWT payload"),null)}catch(i){return Fi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lc(t){const e=Nl(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pt&&ky(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ky({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kr(t,ch(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dh(s.providerUserInfo):[],a=Cy(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ta(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function Ty(t){const e=Pe(t);await gs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cy(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dh(t){return t.map(e=>{var{providerId:n}=e,r=Cl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e){const n=await lh(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uh(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ah.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Py(t,e){return Wt(t,"POST","/v2/accounts:revokeToken",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=lc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ry(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Un;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ta(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sy(this,e)}reload(){return Ty(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Kr(this,Ey(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:f,emailVerified:v,isAnonymous:S,providerData:I,stsTokenManager:C}=n;P(f&&C,e,"internal-error");const R=Un.fromJSON(this.name,C);P(typeof f=="string",e,"internal-error"),gt(m,e.name),gt(h,e.name),P(typeof v=="boolean",e,"internal-error"),P(typeof S=="boolean",e,"internal-error"),gt(g,e.name),gt(y,e.name),gt(E,e.name),gt(N,e.name),gt(d,e.name),gt(c,e.name);const F=new it({uid:f,auth:e,email:h,emailVerified:v,displayName:m,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:R,createdAt:d,lastLoginAt:c});return I&&Array.isArray(I)&&(F.providerData=I.map(x=>Object.assign({},x))),N&&(F._redirectEventId=N),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Un;i.updateFromServerResponse(n);const s=new it({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Un;a.updateFromIdToken(r);const l=new it({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ta(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map;function st(t){ft(t instanceof Function,"Expected a class definition");let e=uc.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fh.type="NONE";const cc=fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,s),this.fullPersistenceKey=zi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jn(st(cc),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||st(cc);const o=zi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const p=await u._get(o);if(p){const m=it._fromJSON(e,p);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yh(e))return"Blackberry";if(_h(e))return"Webos";if(ph(e))return"Safari";if((e.includes("chrome/")||mh(e))&&!e.includes("edge/"))return"Chrome";if(vh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hh(t=he()){return/firefox\//i.test(t)}function ph(t=he()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mh(t=he()){return/crios\//i.test(t)}function gh(t=he()){return/iemobile/i.test(t)}function vh(t=he()){return/android/i.test(t)}function yh(t=he()){return/blackberry/i.test(t)}function _h(t=he()){return/webos/i.test(t)}function Ol(t=he()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ny(t=he()){var e;return Ol(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Oy(){return Wg()&&document.documentMode===10}function wh(t=he()){return Ol(t)||vh(t)||_h(t)||yh(t)||/windows phone/i.test(t)||gh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e=[]){let n;switch(t){case"Browser":n=dc(he());break;case"Worker":n=`${dc(he())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(t,e={}){return Wt(t,"GET","/v2/passwordPolicy",pn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=6;class Dy{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ly,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new Ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ch(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=py()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(zt(this));const n=e?Pe(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xy(this),n=new Dy(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Py(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return Pe(t)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jg(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uy(t){js=t}function Sh(t){return js.loadJS(t)}function jy(){return js.recaptchaEnterpriseScript}function Fy(){return js.gapiScript}function zy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const by="recaptcha-enterprise",By="NO_RECAPTCHA";class Hy{constructor(e){this.type=by,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{wy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new _y(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ac(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(By)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ac(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jy();l.length!==0&&(l+=a),Sh(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function hc(t,e,n,r=!1){const i=new Hy(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await hc(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){const n=Tl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hs(s,e??{}))return i;$e(i,"already-initialized")}return n.initialize({options:e})}function Vy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Wy(t,e,n){const r=Jn(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kh(e),{host:o,port:a}=Ky(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Gy()}function kh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ky(t){const e=kh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mc(o)}}}function mc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function Qy(t,e){return Wt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(t,e){return Us(t,"POST","/v1/accounts:signInWithPassword",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(t,e){return Us(t,"POST","/v1/accounts:signInWithEmailLink",pn(t,e))}async function Xy(t,e){return Us(t,"POST","/v1/accounts:signInWithEmailLink",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Al{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,n,"signInWithPassword",qy);case"emailLink":return Yy(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,r,"signUpPassword",Qy);case"emailLink":return Xy(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e){return Us(t,"POST","/v1/accounts:signInWithIdp",pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="http://localhost";class cn extends Al{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fn(e,n)}buildRequest(){const e={requestUri:Jy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function e_(t){const e=mr(gr(t)).link,n=e?mr(gr(e)).deep_link_id:null,r=mr(gr(t)).deep_link_id;return(r?mr(gr(r)).link:null)||r||n||e||t}class xl{constructor(e){var n,r,i,s,o,a;const l=mr(gr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,m=Zy((i=l.mode)!==null&&i!==void 0?i:null);P(u&&p&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=e_(e);try{return new xl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,n){return Gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xl.parseLink(n);return P(r,"argument-error"),Gr._fromEmailAndCode(e,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ni{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends ni{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ni{constructor(){super("twitter.com")}static credential(e,n){return cn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),o=gc(r);return new Gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gc(r);return new Gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends pt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vs(e,n,r,i)}}function Th(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vs._fromErrorAndOperation(t,s,e,r):s})}async function t_(t,e,n=!1){const r=await Kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){const{auth:r}=t;if(nt(r.app))return Promise.reject(zt(r));const i="reauthenticate";try{const s=await Kr(t,Th(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Nl(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),Gn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(t,e,n=!1){if(nt(t.app))return Promise.reject(zt(t));const r="signIn",i=await Th(t,r,e),s=await Gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function r_(t,e){return Ch(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function s_(t,e,n){return nt(t.app)?Promise.reject(zt(t)):r_(Pe(t),Zn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&i_(t),r})}function o_(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function a_(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function l_(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function u_(t){return Pe(t).signOut()}const ys="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ys,"1"),this.storage.removeItem(ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=1e3,d_=10;class Ph extends Rh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Oy()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,d_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},c_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ph.type="LOCAL";const f_=Ph;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Rh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nh.type="SESSION";const Oh=Nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await h_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ll("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function m_(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function g_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function y_(){return Ah()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="firebaseLocalStorageDb",__=1,_s="firebaseLocalStorage",Lh="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zs(t,e){return t.transaction([_s],e?"readwrite":"readonly").objectStore(_s)}function w_(){const t=indexedDB.deleteDatabase(xh);return new ri(t).toPromise()}function Ca(){const t=indexedDB.open(xh,__);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_s,{keyPath:Lh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_s)?e(r):(r.close(),await w_(),e(await Ca()))})})}async function vc(t,e,n){const r=zs(t,!0).put({[Lh]:e,value:n});return new ri(r).toPromise()}async function E_(t,e){const n=zs(t,!1).get(e),r=await new ri(n).toPromise();return r===void 0?null:r.value}function yc(t,e){const n=zs(t,!0).delete(e);return new ri(n).toPromise()}const S_=800,k_=3;class Dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ah()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fs._getInstance(y_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await g_(),!this.activeServiceWorker)return;this.sender=new p_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await vc(e,ys,"1"),await yc(e,ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>E_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zs(i,!1).getAll();return new ri(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dh.type="LOCAL";const I_=Dh;new ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e){return e?st(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Al{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function C_(t){return Ch(t.auth,new Dl(t),t.bypassAuthState)}function R_(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),n_(n,new Dl(t),t.bypassAuthState)}async function P_(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),t_(n,new Dl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return C_;case"linkViaPopup":case"linkViaRedirect":return P_;case"reauthViaPopup":case"reauthViaRedirect":return R_;default:$e(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new ti(2e3,1e4);class Nn extends Mh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N_.get())};e()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="pendingRedirect",bi=new Map;class A_ extends Mh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const r=await x_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x_(t,e){const n=M_(e),r=D_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function L_(t,e){bi.set(t._key(),e)}function D_(t){return st(t._redirectPersistence)}function M_(t){return zi(O_,t.config.apiKey,t.name)}async function U_(t,e,n=!1){if(nt(t.app))return Promise.reject(zt(t));const r=Jn(t),i=T_(r,e),o=await new A_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=10*60*1e3;class F_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j_&&this.cachedEventUids.clear(),this.cachedEventUids.has(_c(e))}saveEventToCache(e){this.cachedEventUids.add(_c(e)),this.lastProcessedEventTime=Date.now()}}function _c(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e={}){return Wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H_=/^https?/;async function $_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b_(t);for(const n of e)try{if(V_(n))return}catch{}$e(t,"unauthorized-domain")}function V_(t){const e=Ia(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H_.test(n))return!1;if(B_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=new ti(3e4,6e4);function wc(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function K_(t){return new Promise((e,n)=>{var r,i,s;function o(){wc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wc(),n(Ye(t,"network-request-failed"))},timeout:W_.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=zy("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},Sh(`${Fy()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bi=null,e})}let Bi=null;function G_(t){return Bi=Bi||K_(t),Bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new ti(5e3,15e3),q_="__/auth/iframe",Y_="emulator/auth/iframe",X_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z_(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pl(e,Y_):`https://${t.config.authDomain}/${q_}`,r={apiKey:e.apiKey,appName:t.name,v:Xn},i=J_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}async function ew(t){const e=await G_(t),n=Xe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:Z_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},Q_.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nw=500,rw=600,iw="_blank",sw="http://localhost";class Ec{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ow(t,e,n,r=nw,i=rw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tw),{width:r.toString(),height:i.toString(),top:s,left:o}),u=he().toLowerCase();n&&(a=mh(u)?iw:n),hh(u)&&(e=e||sw,l.scrollbars="yes");const p=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(Ny(u)&&a!=="_self")return aw(e||"",a),new Ec(null);const m=window.open(e||"",a,p);P(m,t,"popup-blocked");try{m.focus()}catch{}return new Ec(m)}function aw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="__/auth/handler",uw="emulator/auth/handler",cw=encodeURIComponent("fac");async function Sc(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xn,eventId:i};if(e instanceof Ih){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ni){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const l=await t._getAppCheckToken(),u=l?`#${cw}=${encodeURIComponent(l)}`:"";return`${dw(t)}?${ei(a).slice(1)}${u}`}function dw({config:t}){return t.emulator?Pl(t,uw):`https://${t.authDomain}/${lw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="webStorageSupport";class fw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oh,this._completeRedirectFn=U_,this._overrideRedirectResult=L_}async _openPopup(e,n,r,i){var s;ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sc(e,n,r,Ia(),i);return ow(e,o,Ll())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sc(e,n,r,Ia(),i);return m_(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ew(e),r=new F_(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(So,{type:So},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[So];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wh()||ph()||Ol()}}const hw=fw;var kc="@firebase/auth",Ic="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gw(t){Kn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eh(t)},u=new My(r,i,s,l);return Vy(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new un("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new pw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(kc,Ic,mw(t)),Ft(kc,Ic,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=5*60,yw=Yf("authIdTokenMaxAge")||vw;let Tc=null;const _w=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yw)return;const i=n==null?void 0:n.token;Tc!==i&&(Tc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ww(t=th()){const e=Tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$y(t,{popupRedirectResolver:hw,persistence:[I_,f_,Oh]}),r=Yf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=_w(s.toString());a_(n,o,()=>o(n.currentUser)),o_(n,a=>o(a))}}const i=Qf("auth");return i&&Wy(n,`http://${i}`),n}function Ew(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Uy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gw("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebasestorage.googleapis.com",Fh="storageBucket",Sw=2*60*1e3,kw=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends pt{constructor(e,n,r=0){super(ko(e),`Firebase Storage: ${n} (${ko(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ko(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K||(K={}));function ko(t){return"storage/"+t}function Ml(){const t="An unknown error occurred, please check the error payload for server response.";return new G(K.UNKNOWN,t)}function Iw(t){return new G(K.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Tw(t){return new G(K.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Cw(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G(K.UNAUTHENTICATED,t)}function Rw(){return new G(K.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pw(t){return new G(K.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Nw(){return new G(K.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ow(){return new G(K.CANCELED,"User canceled the upload/download.")}function Aw(t){return new G(K.INVALID_URL,"Invalid URL '"+t+"'.")}function xw(t){return new G(K.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lw(){return new G(K.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Fh+"' property when initializing the app?")}function Dw(){return new G(K.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mw(){return new G(K.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Uw(t){return new G(K.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ra(t){return new G(K.INVALID_ARGUMENT,t)}function zh(){return new G(K.APP_DELETED,"The Firebase app was deleted.")}function jw(t){return new G(K.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rr(t,e){return new G(K.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function cr(t){throw new G(K.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ke.makeFromUrl(e,n)}catch{return new ke(e,"")}if(r.path==="")return r;throw xw(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${m}/${p}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},E=n===jh?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",d=new RegExp(`^https?://${E}/${i}/${N}`,"i"),f=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:d,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<f.length;v++){const S=f[v],I=S.regex.exec(e);if(I){const C=I[S.indices.bucket];let R=I[S.indices.path];R||(R=""),r=new ke(C,R),S.postModify(r);break}}if(r==null)throw Aw(e);return r}}class Fw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function p(...N){u||(u=!0,e.apply(null,N))}function m(N){i=setTimeout(()=>{i=null,t(g,l())},N)}function h(){s&&clearTimeout(s)}function g(N,...d){if(u){h();return}if(N){h(),p.call(null,N,...d);return}if(l()||o){h(),p.call(null,N,...d);return}r<64&&(r*=2);let f;a===1?(a=2,f=0):f=(r+Math.random())*1e3,m(f)}let y=!1;function E(N){y||(y=!0,h(),!u&&(i!==null?(N||(a=2),clearTimeout(i),m(0)):N||(a=1)))}return m(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function bw(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){return t!==void 0}function Hw(t){return typeof t=="object"&&!Array.isArray(t)}function Ul(t){return typeof t=="string"||t instanceof String}function Cc(t){return jl()&&t instanceof Blob}function jl(){return typeof Blob<"u"}function Rc(t,e,n,r){if(r<e)throw Ra(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ra(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function bh(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var nn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nn||(nn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s,o,a,l,u,p,m,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=p,this.connectionFactory_=m,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ii(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===nn.NO_ERROR,l=s.getStatus();if(!a||$w(l,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===nn.ABORT;r(!1,new Ii(!1,null,p));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ii(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Bw(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Ml();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?zh():Ow();o(l)}else{const l=Nw();o(l)}};this.canceled_?n(!1,new Ii(!1,null,!0)):this.backoffId_=zw(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ii{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Ww(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Kw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Gw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Qw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qw(t,e,n,r,i,s,o=!0){const a=bh(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Gw(u,e),Ww(u,n),Kw(u,s),Qw(u,r),new Vw(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xw(...t){const e=Yw();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(jl())return new Blob(t);throw new G(K.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Jw(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){if(typeof atob>"u")throw Uw("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Io{constructor(e,n){this.data=e,this.contentType=n||null}}function e0(t,e){switch(t){case Ge.RAW:return new Io(Bh(e));case Ge.BASE64:case Ge.BASE64URL:return new Io(Hh(t,e));case Ge.DATA_URL:return new Io(n0(e),r0(e))}throw Ml()}function Bh(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function t0(t){let e;try{e=decodeURIComponent(t)}catch{throw Rr(Ge.DATA_URL,"Malformed data URL.")}return Bh(e)}function Hh(t,e){switch(t){case Ge.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Rr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ge.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Rr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Zw(e)}catch(i){throw i.message.includes("polyfill")?i:Rr(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class $h{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Rr(Ge.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=i0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function n0(t){const e=new $h(t);return e.base64?Hh(Ge.BASE64,e.rest):t0(e.rest)}function r0(t){return new $h(t).contentType}function i0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){let r=0,i="";Cc(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Cc(this.data_)){const r=this.data_,i=Jw(r,e,n);return i===null?null:new Tt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Tt(r,!0)}}static getBlob(...e){if(jl()){const n=e.map(r=>r instanceof Tt?r.data_:r);return new Tt(Xw.apply(null,n))}else{const n=e.map(o=>Ul(o)?e0(Ge.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Tt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){let e;try{e=JSON.parse(t)}catch{return null}return Hw(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function o0(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Wh(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t,e){return e}class ce{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||a0}}let Ti=null;function l0(t){return!Ul(t)||t.length<2?t:Wh(t)}function Kh(){if(Ti)return Ti;const t=[];t.push(new ce("bucket")),t.push(new ce("generation")),t.push(new ce("metageneration")),t.push(new ce("name","fullPath",!0));function e(s,o){return l0(o)}const n=new ce("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ce("size");return i.xform=r,t.push(i),t.push(new ce("timeCreated")),t.push(new ce("updated")),t.push(new ce("md5Hash",null,!0)),t.push(new ce("cacheControl",null,!0)),t.push(new ce("contentDisposition",null,!0)),t.push(new ce("contentEncoding",null,!0)),t.push(new ce("contentLanguage",null,!0)),t.push(new ce("contentType",null,!0)),t.push(new ce("metadata","customMetadata",!0)),Ti=t,Ti}function u0(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ke(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function c0(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return u0(r,t),r}function Gh(t,e,n){const r=Vh(e);return r===null?null:c0(t,r,n)}function d0(t,e,n,r){const i=Vh(e);if(i===null||!Ul(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const p=t.bucket,m=t.fullPath,h="/b/"+o(p)+"/o/"+o(m),g=Fl(h,n,r),y=bh({alt:"media",token:u});return g+y})[0]}function f0(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Qh{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){if(!t)throw Ml()}function h0(t,e){function n(r,i){const s=Gh(t,i,e);return qh(s!==null),s}return n}function p0(t,e){function n(r,i){const s=Gh(t,i,e);return qh(s!==null),d0(s,i,t.host,t._protocol)}return n}function Yh(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Rw():i=Cw():n.getStatus()===402?i=Tw(t.bucket):n.getStatus()===403?i=Pw(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function m0(t){const e=Yh(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Iw(t.path)),s.serverResponse=i.serverResponse,s}return n}function g0(t,e,n){const r=e.fullServerUrl(),i=Fl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Qh(i,s,p0(t,n),o);return a.errorHandler=m0(e),a}function v0(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function y0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=v0(null,e)),r}function _0(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let f="";for(let v=0;v<2;v++)f=f+Math.random().toString().slice(2);return f}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=y0(e,r,i),p=f0(u,n),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Tt.getBlob(m,r,h);if(g===null)throw Dw();const y={name:u.fullPath},E=Fl(s,t.host,t._protocol),N="POST",d=t.maxUploadRetryTime,c=new Qh(E,N,h0(t,n),d);return c.urlParams=y,c.headers=o,c.body=g.uploadData(),c.errorHandler=Yh(e),c}class w0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw cr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class E0 extends w0{initXhr(){this.xhr_.responseType="text"}}function Xh(){return new E0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){this._service=e,n instanceof ke?this._location=n:this._location=ke.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dn(e,n)}get root(){const e=new ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wh(this._location.path)}get storage(){return this._service}get parent(){const e=s0(this._location.path);if(e===null)return null;const n=new ke(this._location.bucket,e);return new dn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jw(e)}}function S0(t,e,n){t._throwIfRoot("uploadBytes");const r=_0(t.storage,t._location,Kh(),new Tt(e,!0),n);return t.storage.makeRequestWithTokens(r,Xh).then(i=>({metadata:i,ref:t}))}function k0(t){t._throwIfRoot("getDownloadURL");const e=g0(t.storage,t._location,Kh());return t.storage.makeRequestWithTokens(e,Xh).then(n=>{if(n===null)throw Mw();return n})}function I0(t,e){const n=o0(t._location.path,e),r=new ke(t._location.bucket,n);return new dn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){return/^[A-Za-z]+:\/\//.test(t)}function C0(t,e){return new dn(t,e)}function Jh(t,e){if(t instanceof zl){const n=t;if(n._bucket==null)throw Lw();const r=new dn(n,n._bucket);return e!=null?Jh(r,e):r}else return e!==void 0?I0(t,e):t}function R0(t,e){if(e&&T0(e)){if(t instanceof zl)return C0(t,e);throw Ra("To use ref(service, url), the first argument must be a Storage instance.")}else return Jh(t,e)}function Pc(t,e){const n=e==null?void 0:e[Fh];return n==null?null:ke.makeFromBucketSpec(n,t)}function P0(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bg(i,t.app.options.projectId))}class zl{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=jh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sw,this._maxUploadRetryTime=kw,this._requests=new Set,i!=null?this._bucket=ke.makeFromBucketSpec(i,this._host):this._bucket=Pc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ke.makeFromBucketSpec(this._url,e):this._bucket=Pc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dn(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Fw(zh());{const o=qw(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Nc="@firebase/storage",Oc="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="storage";function N0(t,e,n){return t=Pe(t),S0(t,e,n)}function O0(t){return t=Pe(t),k0(t)}function A0(t,e){return t=Pe(t),R0(t,e)}function x0(t=th(),e){t=Pe(t);const r=Tl(t,Zh).getImmediate({identifier:e}),i=Fg("storage");return i&&L0(r,...i),r}function L0(t,e,n,r={}){P0(t,e,n,r)}function D0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new zl(n,r,i,e,Xn)}function M0(){Kn(new un(Zh,D0,"PUBLIC").setMultipleInstances(!0)),Ft(Nc,Oc,""),Ft(Nc,Oc,"esm2017")}M0();const U0={apiKey:"AIzaSyDwP5qUOltbUi1emaepSupcaBNMT85AQqk",authDomain:"mlc-horizon-fund.firebaseapp.com",projectId:"mlc-horizon-fund",storageBucket:"mlc-horizon-fund.firebasestorage.app",messagingSenderId:"1097163442655",appId:"1:1097163442655:web:655a02e2b62d88bfb95c6a"},ep=eh(U0),To=ww(ep),j0=x0(ep),F0=[{key:"home",label:"Home"},{key:"portfolio",label:"Portfolio Details"},{key:"statements",label:"Statements"},{key:"personal",label:"Personal Details"},{key:"reports",label:"Investment Report"}],z0=`The MLC Horizon trusts are a range of actively managed funds, aimed to deliver returns that meet the trusts' investment objectives, while managing risk. Each trust has a different allocation of growth and defensive assets, which are expected to deliver different levels of returns, while exposed to different levels of volatility. These trusts are managed within defined ranges, so investors always know where their money is invested.

Key features
Broad range of trusts: investors can select the trust with the right mix of growth and defensive assets for their investment needs
Defined asset allocation: growth and defensive assets are actively managed within a defined range, meaning investors will always know where their money is invested.
Experience and track record: the trusts are designed and managed using MLC’s market-leading investment approach, leveraging MLC’s experience in helping investors achieve their financial goals
Risk-management focus: risk is actively-managed using MLC’s unique forward-looking investment approach
Multi-manager approach: MLC use many specialist investment managers from around the world to identify some of the best investment opportunities so investors can be confident their money is in good hands and access a diversified range of investment thinking
Extensive diversification: the trusts have been diversified across a number of different asset classes including shares, fixed income, property, infrastructure, as well as exposure to alternative assets and other strategies (such as private equity) so investors are well diversified aiming to minimise risk, and could use the trust as their whole portfolio

Access to Investment Central, your powerful client engagement tool
Investment Central is your perfect client engagement partner to MLC Horizon funds. Investment Central will provide you with essential tools and support for selecting multi-asset solutions that align with your client’s investment needs.
Ensure full transparency: Bring your clients’ portfolios to life with full transparency across their investment portfolios – deep dive into the underlying managers, asset classes, top holdings, and performance.
Generate personalised reports: Create client-friendly investment reports in your practice’s branding.
Create tailored portfolios: It’s a simple way to choose an MLC fund, SMA or create a blended portfolio that best suits your client and their risk profile.
Access more information on MLC Horizon on Investment Central

How to invest
Investors
You can invest through , opens in new wiMLC MasterKey Investment Service Fundamentals, opens in new windowor invest directly* if you are a wholesale investor. Please contact our client services team to request an application form on 1300 738 355.
*minimum investment and holding amounts may apply, refer to the relevant Product Disclosure Statement for more information.

Advisers
For more information on available platforms please speak with your MLC Representative.
Invest through a platform – investing outside a super or pension account`;function gn({title:t,children:e,footer:n}){return _.jsxs("div",{className:"card",children:[_.jsx("div",{className:"cardHeader",children:_.jsx("div",{className:"cardTitle",children:t})}),_.jsx("div",{className:"cardBody",children:e}),n?_.jsx("div",{className:"cardFooter",children:n}):null]})}function b0({open:t,onClose:e,onLogin:n,error:r,loading:i}){const[s,o]=re.useState(""),[a,l]=re.useState("");return re.useEffect(()=>{t||(o(""),l(""))},[t]),t?_.jsx("div",{className:"modalBackdrop",role:"dialog","aria-modal":"true",children:_.jsxs("div",{className:"modal",children:[_.jsxs("div",{className:"modalTop",children:[_.jsxs("div",{children:[_.jsx("div",{className:"modalTitle",children:"Login"}),_.jsx("div",{className:"modalSub",children:"Use your email and password."})]}),_.jsx("button",{className:"iconBtn",onClick:e,"aria-label":"Close",children:"✕"})]}),_.jsxs("div",{className:"form",children:[_.jsx("label",{className:"label",children:"Email"}),_.jsx("input",{className:"input",value:s,onChange:u=>o(u.target.value),placeholder:"you@example.com",type:"email",autoComplete:"email"}),_.jsx("label",{className:"label",children:"Password"}),_.jsx("input",{className:"input",value:a,onChange:u=>l(u.target.value),placeholder:"••••••••",type:"password",autoComplete:"current-password"}),r?_.jsx("div",{className:"error",children:r}):null,_.jsx("button",{className:"btnPrimary",disabled:i||!s||!a,onClick:()=>n(s,a),children:i?"Signing in...":"Sign in"}),_.jsx("div",{className:"hint",children:"You will create your user in Firebase later."})]})]})}):null}function Pa(){return _.jsxs("div",{className:"gate",children:[_.jsx("div",{className:"gateTitle",children:"Please login to your account"}),_.jsx("div",{className:"gateSub",children:"For security, your portfolio and documents are only visible after login."})]})}function Ac({title:t,storagePath:e,loggedIn:n}){const[r,i]=re.useState(""),[s,o]=re.useState(""),[a,l]=re.useState(!1),u=re.useMemo(()=>A0(j0,e),[e]);async function p(){try{const h=await O0(u);i(h)}catch{i("")}}re.useEffect(()=>{if(!n){i(""),o("");return}p()},[n,e]);async function m(h){var y;const g=(y=h.target.files)==null?void 0:y[0];if(g){if(g.type!=="application/pdf"){o("Please upload a PDF.");return}l(!0),o("Uploading…");try{await N0(u,g),await p(),o("Done.")}catch{o("Upload failed.")}finally{l(!1),h.target.value=""}}}return _.jsxs(gn,{title:t,footer:n?_.jsx("div",{className:"pdfFooter",children:_.jsxs("label",{className:"uploadBtn",children:[_.jsx("input",{type:"file",accept:"application/pdf",onChange:m,disabled:a}),"Upload / Replace PDF"]})}):null,children:[n?r?_.jsx("a",{className:"pdfLink",href:r,target:"_blank",rel:"noreferrer",children:"Open PDF"}):_.jsx("div",{className:"muted",children:"No PDF uploaded yet."}):_.jsx(Pa,{}),s?_.jsx("div",{className:"muted",style:{marginTop:10},children:s}):null]})}function B0(){const[t,e]=re.useState("home"),[n,r]=re.useState(null),[i,s]=re.useState(!1),[o,a]=re.useState(""),[l,u]=re.useState(!1);re.useEffect(()=>{const g=l_(To,y=>r(y||null));return()=>g()},[]);async function p(g,y){u(!0),a("");try{await s_(To,g,y),s(!1)}catch{a("Login failed.")}finally{u(!1)}}async function m(){await u_(To),e("home")}const h=!!n;return _.jsxs("div",{className:"appShell",children:[_.jsxs("header",{className:"topbar",children:[_.jsxs("div",{className:"brand",children:[_.jsx("img",{className:"logo",src:Og,alt:"MLC Horizon logo"}),_.jsxs("div",{className:"brandText",children:[_.jsx("div",{className:"brandName",children:"MLC Horizon Superannuation Fund"}),_.jsxs("div",{className:"brandTag",children:["Client Portal",h&&_.jsx("span",{className:"welcomeText",children:" • Welcome, Christie"})]})]})]}),_.jsx("div",{className:"topbarRight",children:h?_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"pill",children:"Logged in"}),_.jsx("button",{className:"btnGhost",onClick:m,children:"Logout"})]}):_.jsx("button",{className:"btnPrimary",onClick:()=>s(!0),children:"Login"})})]}),_.jsxs("div",{className:"body",children:[_.jsx("aside",{className:"sidebar",children:F0.map(g=>_.jsx("button",{className:`navItem ${t===g.key?"active":""}`,onClick:()=>e(g.key),children:g.label},g.key))}),_.jsxs("main",{className:"content",children:[t==="home"&&_.jsx(gn,{title:"Overview",children:_.jsx("div",{className:"prose",children:z0.split(`

`).map((g,y)=>_.jsx("p",{children:g},y))})}),t==="portfolio"&&(h?_.jsx(gn,{title:"Portfolio Details",footer:_.jsx("div",{className:"mutedSmall",children:"On 30 November 2023, MLC Wholesale Horizon 6 Share Portfolio and MLC Wholesale 7 Accelerated Growth Portfolio were renamed MLC MultiActive High Growth and MLC MultiActive Geared respectively. You can find more information in the MLC MultiActive section"}),children:_.jsxs("div",{className:"kvGrid",children:[_.jsxs("div",{className:"kv",children:[_.jsx("div",{className:"k",children:"Fund Name"}),_.jsx("div",{className:"v",children:"Christie J Smal"})]}),_.jsxs("div",{className:"kv",children:[_.jsx("div",{className:"k",children:"Fund Name"}),_.jsx("div",{className:"v",children:"MLC Wholesale Horizon"})]}),_.jsxs("div",{className:"kv",children:[_.jsx("div",{className:"k",children:"Account Balance"}),_.jsx("div",{className:"v",children:"$704,355.42"})]})]})}):_.jsx(gn,{title:"Portfolio Details",children:_.jsx(Pa,{})})),t==="statements"&&_.jsx(Ac,{title:"Statements",storagePath:"statements/statements.pdf",loggedIn:h}),t==="personal"&&(h?_.jsx(gn,{title:"Personal Details",children:_.jsxs("div",{className:"prose",children:[_.jsxs("p",{children:[_.jsx("strong",{children:"Name:"})," Christie Justin Smal ",_.jsx("strong",{children:"DOB:"})," --//-- ",_.jsx("strong",{children:"Ph:"})," --//--",_.jsx("br",{}),_.jsx("strong",{children:"Member Number:"})," 482175",_.jsx("br",{}),_.jsx("strong",{children:"Address:"})," 484 Curra Estate Rd, Curra, Qld 4570",_.jsx("br",{}),_.jsx("strong",{children:"Inception Date:"})," 12th August 2016"]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Beneficiary Listing:"})," Renen Hadar (spouse) ",_.jsx("strong",{children:"DOB:"})," ---/--- ",_.jsx("strong",{children:"Ph:"})," --/--",_.jsx("br",{}),_.jsx("strong",{children:"Address:"})," 484 Curra Estate Rd, Curra Qld 4570.",_.jsx("br",{}),_.jsx("strong",{children:"Beneficiary Percentage:"})," 100%"]})]})}):_.jsx(gn,{title:"Personal Details",children:_.jsx(Pa,{})})),t==="reports"&&_.jsx(Ac,{title:"Investment Report",storagePath:"reports/investment-report.pdf",loggedIn:h})]})]}),_.jsx("footer",{className:"footer",children:_.jsx("div",{className:"footerInner",children:_.jsxs("div",{children:["© ",new Date().getFullYear()," MLC Horizon Superannuation Fund"]})})}),_.jsx(b0,{open:i,onClose:()=>s(!1),onLogin:p,error:o,loading:l})]})}Co.createRoot(document.getElementById("root")).render(_.jsx(yp.StrictMode,{children:_.jsx(B0,{})}));
