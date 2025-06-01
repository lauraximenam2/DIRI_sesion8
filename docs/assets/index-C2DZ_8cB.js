const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Foods-DcYzXcgA.js","assets/Foods-ZHgwS_Et.css"])))=>i.map(i=>d[i]);
var iE=Object.defineProperty;var sE=(r,e,t)=>e in r?iE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var wl=(r,e,t)=>sE(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=t(l);fetch(l.href,a)}})();function oE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var pc={exports:{}},gs={},mc={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function lE(){if(tm)return re;tm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function _(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,x={};function L(C,O,ne){this.props=C,this.context=O,this.refs=x,this.updater=ne||P}L.prototype.isReactComponent={},L.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},L.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function b(){}b.prototype=L.prototype;function j(C,O,ne){this.props=C,this.context=O,this.refs=x,this.updater=ne||P}var q=j.prototype=new b;q.constructor=j,I(q,L.prototype),q.isPureReactComponent=!0;var te=Array.isArray,pe=Object.prototype.hasOwnProperty,ve={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function De(C,O,ne){var oe,ce={},de=null,Se=null;if(O!=null)for(oe in O.ref!==void 0&&(Se=O.ref),O.key!==void 0&&(de=""+O.key),O)pe.call(O,oe)&&!we.hasOwnProperty(oe)&&(ce[oe]=O[oe]);var me=arguments.length-2;if(me===1)ce.children=ne;else if(1<me){for(var Pe=Array(me),wt=0;wt<me;wt++)Pe[wt]=arguments[wt+2];ce.children=Pe}if(C&&C.defaultProps)for(oe in me=C.defaultProps,me)ce[oe]===void 0&&(ce[oe]=me[oe]);return{$$typeof:r,type:C,key:de,ref:Se,props:ce,_owner:ve.current}}function Ee(C,O){return{$$typeof:r,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function ze(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function Kt(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ne){return O[ne]})}var qt=/\/+/g;function vt(C,O){return typeof C=="object"&&C!==null&&C.key!=null?Kt(""+C.key):O.toString(36)}function Ot(C,O,ne,oe,ce){var de=typeof C;(de==="undefined"||de==="boolean")&&(C=null);var Se=!1;if(C===null)Se=!0;else switch(de){case"string":case"number":Se=!0;break;case"object":switch(C.$$typeof){case r:case e:Se=!0}}if(Se)return Se=C,ce=ce(Se),C=oe===""?"."+vt(Se,0):oe,te(ce)?(ne="",C!=null&&(ne=C.replace(qt,"$&/")+"/"),Ot(ce,O,ne,"",function(wt){return wt})):ce!=null&&(ze(ce)&&(ce=Ee(ce,ne+(!ce.key||Se&&Se.key===ce.key?"":(""+ce.key).replace(qt,"$&/")+"/")+C)),O.push(ce)),1;if(Se=0,oe=oe===""?".":oe+":",te(C))for(var me=0;me<C.length;me++){de=C[me];var Pe=oe+vt(de,me);Se+=Ot(de,O,ne,Pe,ce)}else if(Pe=_(C),typeof Pe=="function")for(C=Pe.call(C),me=0;!(de=C.next()).done;)de=de.value,Pe=oe+vt(de,me++),Se+=Ot(de,O,ne,Pe,ce);else if(de==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Se}function Yt(C,O,ne){if(C==null)return C;var oe=[],ce=0;return Ot(C,oe,"","",function(de){return O.call(ne,de,ce++)}),oe}function ut(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(ne){(C._status===0||C._status===-1)&&(C._status=1,C._result=ne)},function(ne){(C._status===0||C._status===-1)&&(C._status=2,C._result=ne)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var Le={current:null},W={transition:null},J={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:W,ReactCurrentOwner:ve};function H(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Yt,forEach:function(C,O,ne){Yt(C,function(){O.apply(this,arguments)},ne)},count:function(C){var O=0;return Yt(C,function(){O++}),O},toArray:function(C){return Yt(C,function(O){return O})||[]},only:function(C){if(!ze(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},re.Component=L,re.Fragment=t,re.Profiler=l,re.PureComponent=j,re.StrictMode=s,re.Suspense=p,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,re.act=H,re.cloneElement=function(C,O,ne){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var oe=I({},C.props),ce=C.key,de=C.ref,Se=C._owner;if(O!=null){if(O.ref!==void 0&&(de=O.ref,Se=ve.current),O.key!==void 0&&(ce=""+O.key),C.type&&C.type.defaultProps)var me=C.type.defaultProps;for(Pe in O)pe.call(O,Pe)&&!we.hasOwnProperty(Pe)&&(oe[Pe]=O[Pe]===void 0&&me!==void 0?me[Pe]:O[Pe])}var Pe=arguments.length-2;if(Pe===1)oe.children=ne;else if(1<Pe){me=Array(Pe);for(var wt=0;wt<Pe;wt++)me[wt]=arguments[wt+2];oe.children=me}return{$$typeof:r,type:C.type,key:ce,ref:de,props:oe,_owner:Se}},re.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:a,_context:C},C.Consumer=C},re.createElement=De,re.createFactory=function(C){var O=De.bind(null,C);return O.type=C,O},re.createRef=function(){return{current:null}},re.forwardRef=function(C){return{$$typeof:h,render:C}},re.isValidElement=ze,re.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:ut}},re.memo=function(C,O){return{$$typeof:m,type:C,compare:O===void 0?null:O}},re.startTransition=function(C){var O=W.transition;W.transition={};try{C()}finally{W.transition=O}},re.unstable_act=H,re.useCallback=function(C,O){return Le.current.useCallback(C,O)},re.useContext=function(C){return Le.current.useContext(C)},re.useDebugValue=function(){},re.useDeferredValue=function(C){return Le.current.useDeferredValue(C)},re.useEffect=function(C,O){return Le.current.useEffect(C,O)},re.useId=function(){return Le.current.useId()},re.useImperativeHandle=function(C,O,ne){return Le.current.useImperativeHandle(C,O,ne)},re.useInsertionEffect=function(C,O){return Le.current.useInsertionEffect(C,O)},re.useLayoutEffect=function(C,O){return Le.current.useLayoutEffect(C,O)},re.useMemo=function(C,O){return Le.current.useMemo(C,O)},re.useReducer=function(C,O,ne){return Le.current.useReducer(C,O,ne)},re.useRef=function(C){return Le.current.useRef(C)},re.useState=function(C){return Le.current.useState(C)},re.useSyncExternalStore=function(C,O,ne){return Le.current.useSyncExternalStore(C,O,ne)},re.useTransition=function(){return Le.current.useTransition()},re.version="18.3.1",re}var nm;function od(){return nm||(nm=1,mc.exports=lE()),mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function aE(){if(rm)return gs;rm=1;var r=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var v,y={},_=null,P=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(P=p.ref);for(v in p)s.call(p,v)&&!a.hasOwnProperty(v)&&(y[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:h,key:_,ref:P,props:y,_owner:l.current}}return gs.Fragment=t,gs.jsx=c,gs.jsxs=c,gs}var im;function uE(){return im||(im=1,pc.exports=aE()),pc.exports}var z=uE(),N=od();const qs=oE(N);var El={},gc={exports:{}},mt={},_c={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function cE(){return sm||(sm=1,function(r){function e(W,J){var H=W.length;W.push(J);e:for(;0<H;){var C=H-1>>>1,O=W[C];if(0<l(O,J))W[C]=J,W[H]=O,H=C;else break e}}function t(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var J=W[0],H=W.pop();if(H!==J){W[0]=H;e:for(var C=0,O=W.length,ne=O>>>1;C<ne;){var oe=2*(C+1)-1,ce=W[oe],de=oe+1,Se=W[de];if(0>l(ce,H))de<O&&0>l(Se,ce)?(W[C]=Se,W[de]=H,C=de):(W[C]=ce,W[oe]=H,C=oe);else if(de<O&&0>l(Se,H))W[C]=Se,W[de]=H,C=de;else break e}}return J}function l(W,J){var H=W.sortIndex-J.sortIndex;return H!==0?H:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],v=1,y=null,_=3,P=!1,I=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(W){for(var J=t(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=W)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=t(m)}}function te(W){if(x=!1,q(W),!I)if(t(p)!==null)I=!0,ut(pe);else{var J=t(m);J!==null&&Le(te,J.startTime-W)}}function pe(W,J){I=!1,x&&(x=!1,b(De),De=-1),P=!0;var H=_;try{for(q(J),y=t(p);y!==null&&(!(y.expirationTime>J)||W&&!Kt());){var C=y.callback;if(typeof C=="function"){y.callback=null,_=y.priorityLevel;var O=C(y.expirationTime<=J);J=r.unstable_now(),typeof O=="function"?y.callback=O:y===t(p)&&s(p),q(J)}else s(p);y=t(p)}if(y!==null)var ne=!0;else{var oe=t(m);oe!==null&&Le(te,oe.startTime-J),ne=!1}return ne}finally{y=null,_=H,P=!1}}var ve=!1,we=null,De=-1,Ee=5,ze=-1;function Kt(){return!(r.unstable_now()-ze<Ee)}function qt(){if(we!==null){var W=r.unstable_now();ze=W;var J=!0;try{J=we(!0,W)}finally{J?vt():(ve=!1,we=null)}}else ve=!1}var vt;if(typeof j=="function")vt=function(){j(qt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Yt=Ot.port2;Ot.port1.onmessage=qt,vt=function(){Yt.postMessage(null)}}else vt=function(){L(qt,0)};function ut(W){we=W,ve||(ve=!0,vt())}function Le(W,J){De=L(function(){W(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_continueExecution=function(){I||P||(I=!0,ut(pe))},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(W){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var H=_;_=J;try{return W()}finally{_=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var H=_;_=W;try{return J()}finally{_=H}},r.unstable_scheduleCallback=function(W,J,H){var C=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?C+H:C):H=C,W){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,W={id:v++,callback:J,priorityLevel:W,startTime:H,expirationTime:O,sortIndex:-1},H>C?(W.sortIndex=H,e(m,W),t(p)===null&&W===t(m)&&(x?(b(De),De=-1):x=!0,Le(te,H-C))):(W.sortIndex=O,e(p,W),I||P||(I=!0,ut(pe))),W},r.unstable_shouldYield=Kt,r.unstable_wrapCallback=function(W){var J=_;return function(){var H=_;_=J;try{return W.apply(this,arguments)}finally{_=H}}}}(yc)),yc}var om;function dE(){return om||(om=1,_c.exports=cE()),_c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function fE(){if(lm)return mt;lm=1;var r=od(),e=dE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function _(n){return p.call(y,n)?!0:p.call(v,n)?!1:m.test(n)?y[n]=!0:(v[n]=!0,!1)}function P(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function I(n,i,o,u){if(i===null||typeof i>"u"||P(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function x(n,i,o,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){L[n]=new x(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];L[i]=new x(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){L[n]=new x(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){L[n]=new x(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){L[n]=new x(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){L[n]=new x(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){L[n]=new x(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){L[n]=new x(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){L[n]=new x(n,5,!1,n.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function j(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(b,j);L[i]=new x(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(b,j);L[i]=new x(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(b,j);L[i]=new x(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){L[n]=new x(n,1,!1,n.toLowerCase(),null,!1,!1)}),L.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){L[n]=new x(n,1,!1,n.toLowerCase(),null,!0,!0)});function q(n,i,o,u){var d=L.hasOwnProperty(i)?L[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(I(i,o,d,u)&&(o=null),u||d===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),ve=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),De=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),qt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),Yt=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),W=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,C;function O(n){if(C===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+n}var ne=!1;function oe(n,i){if(!n||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(R){var u=R}Reflect.construct(n,[],i)}else{try{i.call()}catch(R){u=R}n.call(i.prototype)}else{try{throw Error()}catch(R){u=R}n()}}catch(R){if(R&&u&&typeof R.stack=="string"){for(var d=R.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,w=f.length-1;1<=g&&0<=w&&d[g]!==f[w];)w--;for(;1<=g&&0<=w;g--,w--)if(d[g]!==f[w]){if(g!==1||w!==1)do if(g--,w--,0>w||d[g]!==f[w]){var E=`
`+d[g].replace(" at new "," at ");return n.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",n.displayName)),E}while(1<=g&&0<=w);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?O(n):""}function ce(n){switch(n.tag){case 5:return O(n.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return n=oe(n.type,!1),n;case 11:return n=oe(n.type.render,!1),n;case 1:return n=oe(n.type,!0),n;default:return""}}function de(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case we:return"Fragment";case ve:return"Portal";case Ee:return"Profiler";case De:return"StrictMode";case vt:return"Suspense";case Ot:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Kt:return(n.displayName||"Context")+".Consumer";case ze:return(n._context.displayName||"Context")+".Provider";case qt:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Yt:return i=n.displayName||null,i!==null?i:de(n.type)||"Memo";case ut:i=n._payload,n=n._init;try{return de(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===De?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(n){var i=Pe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function uo(n){n._valueTracker||(n._valueTracker=wt(n))}function lf(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function co(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ea(n,i){var o=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function af(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=me(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function uf(n,i){i=i.checked,i!=null&&q(n,"checked",i,!1)}function Sa(n,i){uf(n,i);var o=me(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ca(n,i.type,o):i.hasOwnProperty("defaultValue")&&Ca(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function cf(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ca(n,i,o){(i!=="number"||co(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ai=Array.isArray;function Ur(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+me(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ia(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function df(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ai(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:me(o)}}function ff(n,i){var o=me(i.value),u=me(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function hf(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pf(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pf(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fo,mf=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Oi(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(n){uv.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Di[i]=Di[n]})});function gf(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Di.hasOwnProperty(n)&&Di[n]?(""+i).trim():i+"px"}function _f(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=gf(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var cv=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(n,i){if(i){if(cv[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ra(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pa=null;function Na(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xa=null,zr=null,jr=null;function yf(n){if(n=ts(n)){if(typeof xa!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Mo(i),xa(n.stateNode,n.type,i))}}function vf(n){zr?jr?jr.push(n):jr=[n]:zr=n}function wf(){if(zr){var n=zr,i=jr;if(jr=zr=null,yf(n),i)for(n=0;n<i.length;n++)yf(i[n])}}function Ef(n,i){return n(i)}function Sf(){}var Aa=!1;function Cf(n,i,o){if(Aa)return n(i,o);Aa=!0;try{return Ef(n,i,o)}finally{Aa=!1,(zr!==null||jr!==null)&&(Sf(),wf())}}function Li(n,i){var o=n.stateNode;if(o===null)return null;var u=Mo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Oa=!1;if(h)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{Oa=!1}function dv(n,i,o,u,d,f,g,w,E){var R=Array.prototype.slice.call(arguments,3);try{i.apply(o,R)}catch(D){this.onError(D)}}var bi=!1,ho=null,po=!1,Da=null,fv={onError:function(n){bi=!0,ho=n}};function hv(n,i,o,u,d,f,g,w,E){bi=!1,ho=null,dv.apply(fv,arguments)}function pv(n,i,o,u,d,f,g,w,E){if(hv.apply(this,arguments),bi){if(bi){var R=ho;bi=!1,ho=null}else throw Error(t(198));po||(po=!0,Da=R)}}function cr(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function If(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function kf(n){if(cr(n)!==n)throw Error(t(188))}function mv(n){var i=n.alternate;if(!i){if(i=cr(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return kf(d),n;if(f===u)return kf(d),i;f=f.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=f;else{for(var g=!1,w=d.child;w;){if(w===o){g=!0,o=d,u=f;break}if(w===u){g=!0,u=d,o=f;break}w=w.sibling}if(!g){for(w=f.child;w;){if(w===o){g=!0,o=f,u=d;break}if(w===u){g=!0,u=f,o=d;break}w=w.sibling}if(!g)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Tf(n){return n=mv(n),n!==null?Rf(n):null}function Rf(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Rf(n);if(i!==null)return i;n=n.sibling}return null}var Pf=e.unstable_scheduleCallback,Nf=e.unstable_cancelCallback,gv=e.unstable_shouldYield,_v=e.unstable_requestPaint,Fe=e.unstable_now,yv=e.unstable_getCurrentPriorityLevel,La=e.unstable_ImmediatePriority,xf=e.unstable_UserBlockingPriority,mo=e.unstable_NormalPriority,vv=e.unstable_LowPriority,Af=e.unstable_IdlePriority,go=null,Qt=null;function wv(n){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(go,n,void 0,(n.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:Cv,Ev=Math.log,Sv=Math.LN2;function Cv(n){return n>>>=0,n===0?32:31-(Ev(n)/Sv|0)|0}var _o=64,yo=4194304;function Fi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vo(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,f=n.pingedLanes,g=o&268435455;if(g!==0){var w=g&~d;w!==0?u=Fi(w):(f&=g,f!==0&&(u=Fi(f)))}else g=o&~d,g!==0?u=Fi(g):f!==0&&(u=Fi(f));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Dt(i),d=1<<o,u|=n[o],i&=~d;return u}function Iv(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var g=31-Dt(f),w=1<<g,E=d[g];E===-1?(!(w&o)||w&u)&&(d[g]=Iv(w,i)):E<=i&&(n.expiredLanes|=w),f&=~w}}function Ma(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Of(){var n=_o;return _o<<=1,!(_o&4194240)&&(_o=64),n}function ba(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Ui(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Dt(i),n[i]=o}function Tv(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Dt(o),f=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~f}}function Fa(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Dt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var ge=0;function Df(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Lf,Ua,Mf,bf,Ff,za=!1,wo=[],Rn=null,Pn=null,Nn=null,zi=new Map,ji=new Map,xn=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(n,i){switch(n){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":zi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(i.pointerId)}}function Wi(n,i,o,u,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ts(i),i!==null&&Ua(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Pv(n,i,o,u,d){switch(i){case"focusin":return Rn=Wi(Rn,n,i,o,u,d),!0;case"dragenter":return Pn=Wi(Pn,n,i,o,u,d),!0;case"mouseover":return Nn=Wi(Nn,n,i,o,u,d),!0;case"pointerover":var f=d.pointerId;return zi.set(f,Wi(zi.get(f)||null,n,i,o,u,d)),!0;case"gotpointercapture":return f=d.pointerId,ji.set(f,Wi(ji.get(f)||null,n,i,o,u,d)),!0}return!1}function zf(n){var i=dr(n.target);if(i!==null){var o=cr(i);if(o!==null){if(i=o.tag,i===13){if(i=If(o),i!==null){n.blockedOn=i,Ff(n.priority,function(){Mf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Wa(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Pa=u,o.target.dispatchEvent(u),Pa=null}else return i=ts(o),i!==null&&Ua(i),n.blockedOn=o,!1;i.shift()}return!0}function jf(n,i,o){Eo(n)&&o.delete(i)}function Nv(){za=!1,Rn!==null&&Eo(Rn)&&(Rn=null),Pn!==null&&Eo(Pn)&&(Pn=null),Nn!==null&&Eo(Nn)&&(Nn=null),zi.forEach(jf),ji.forEach(jf)}function $i(n,i){n.blockedOn===i&&(n.blockedOn=null,za||(za=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nv)))}function Bi(n){function i(d){return $i(d,n)}if(0<wo.length){$i(wo[0],n);for(var o=1;o<wo.length;o++){var u=wo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Rn!==null&&$i(Rn,n),Pn!==null&&$i(Pn,n),Nn!==null&&$i(Nn,n),zi.forEach(i),ji.forEach(i),o=0;o<xn.length;o++)u=xn[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<xn.length&&(o=xn[0],o.blockedOn===null);)zf(o),o.blockedOn===null&&xn.shift()}var Wr=te.ReactCurrentBatchConfig,So=!0;function xv(n,i,o,u){var d=ge,f=Wr.transition;Wr.transition=null;try{ge=1,ja(n,i,o,u)}finally{ge=d,Wr.transition=f}}function Av(n,i,o,u){var d=ge,f=Wr.transition;Wr.transition=null;try{ge=4,ja(n,i,o,u)}finally{ge=d,Wr.transition=f}}function ja(n,i,o,u){if(So){var d=Wa(n,i,o,u);if(d===null)iu(n,i,u,Co,o),Uf(n,u);else if(Pv(d,n,i,o,u))u.stopPropagation();else if(Uf(n,u),i&4&&-1<Rv.indexOf(n)){for(;d!==null;){var f=ts(d);if(f!==null&&Lf(f),f=Wa(n,i,o,u),f===null&&iu(n,i,u,Co,o),f===d)break;d=f}d!==null&&u.stopPropagation()}else iu(n,i,u,null,o)}}var Co=null;function Wa(n,i,o,u){if(Co=null,n=Na(u),n=dr(n),n!==null)if(i=cr(n),i===null)n=null;else if(o=i.tag,o===13){if(n=If(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Co=n,null}function Wf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yv()){case La:return 1;case xf:return 4;case mo:case vv:return 16;case Af:return 536870912;default:return 16}default:return 16}}var An=null,$a=null,Io=null;function $f(){if(Io)return Io;var n,i=$a,o=i.length,u,d="value"in An?An.value:An.textContent,f=d.length;for(n=0;n<o&&i[n]===d[n];n++);var g=o-n;for(u=1;u<=g&&i[o-u]===d[f-u];u++);return Io=d.slice(n,1<u?1-u:void 0)}function ko(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function Bf(){return!1}function Et(n){function i(o,u,d,f,g){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(o=n[w],this[w]=o?o(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?To:Bf,this.isPropagationStopped=Bf,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Et($r),Hi=H({},$r,{view:0,detail:0}),Ov=Et(Hi),Ha,Va,Vi,Ro=H({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vi&&(Vi&&n.type==="mousemove"?(Ha=n.screenX-Vi.screenX,Va=n.screenY-Vi.screenY):Va=Ha=0,Vi=n),Ha)},movementY:function(n){return"movementY"in n?n.movementY:Va}}),Hf=Et(Ro),Dv=H({},Ro,{dataTransfer:0}),Lv=Et(Dv),Mv=H({},Hi,{relatedTarget:0}),Ga=Et(Mv),bv=H({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Et(bv),Uv=H({},$r,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zv=Et(Uv),jv=H({},$r,{data:0}),Vf=Et(jv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Bv[n])?!!i[n]:!1}function Ka(){return Hv}var Vv=H({},Hi,{key:function(n){if(n.key){var i=Wv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$v[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gv=Et(Vv),Kv=H({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=Et(Kv),qv=H({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),Yv=Et(qv),Qv=H({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Et(Qv),Xv=H({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Et(Xv),ew=[9,13,27,32],qa=h&&"CompositionEvent"in window,Gi=null;h&&"documentMode"in document&&(Gi=document.documentMode);var tw=h&&"TextEvent"in window&&!Gi,Kf=h&&(!qa||Gi&&8<Gi&&11>=Gi),qf=" ",Yf=!1;function Qf(n,i){switch(n){case"keyup":return ew.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Br=!1;function nw(n,i){switch(n){case"compositionend":return Jf(i);case"keypress":return i.which!==32?null:(Yf=!0,qf);case"textInput":return n=i.data,n===qf&&Yf?null:n;default:return null}}function rw(n,i){if(Br)return n==="compositionend"||!qa&&Qf(n,i)?(n=$f(),Io=$a=An=null,Br=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kf&&i.locale!=="ko"?null:i.data;default:return null}}var iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!iw[n.type]:i==="textarea"}function Zf(n,i,o,u){vf(u),i=Oo(i,"onChange"),0<i.length&&(o=new Ba("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Ki=null,qi=null;function sw(n){_h(n,0)}function Po(n){var i=qr(n);if(lf(i))return n}function ow(n,i){if(n==="change")return i}var eh=!1;if(h){var Ya;if(h){var Qa="oninput"in document;if(!Qa){var th=document.createElement("div");th.setAttribute("oninput","return;"),Qa=typeof th.oninput=="function"}Ya=Qa}else Ya=!1;eh=Ya&&(!document.documentMode||9<document.documentMode)}function nh(){Ki&&(Ki.detachEvent("onpropertychange",rh),qi=Ki=null)}function rh(n){if(n.propertyName==="value"&&Po(qi)){var i=[];Zf(i,qi,n,Na(n)),Cf(sw,i)}}function lw(n,i,o){n==="focusin"?(nh(),Ki=i,qi=o,Ki.attachEvent("onpropertychange",rh)):n==="focusout"&&nh()}function aw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(qi)}function uw(n,i){if(n==="click")return Po(i)}function cw(n,i){if(n==="input"||n==="change")return Po(i)}function dw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Lt=typeof Object.is=="function"?Object.is:dw;function Yi(n,i){if(Lt(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!Lt(n[d],i[d]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var o=ih(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ih(o)}}function oh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?oh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function lh(){for(var n=window,i=co();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=co(n.document)}return i}function Ja(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function fw(n){var i=lh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&oh(o.ownerDocument.documentElement,o)){if(u!==null&&Ja(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!n.extend&&f>u&&(d=u,u=f,f=d),d=sh(o,f);var g=sh(o,u);d&&g&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==g.node||n.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>u?(n.addRange(i),n.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hw=h&&"documentMode"in document&&11>=document.documentMode,Hr=null,Xa=null,Qi=null,Za=!1;function ah(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Za||Hr==null||Hr!==co(u)||(u=Hr,"selectionStart"in u&&Ja(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qi&&Yi(Qi,u)||(Qi=u,u=Oo(Xa,"onSelect"),0<u.length&&(i=new Ba("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Hr)))}function No(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Vr={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},eu={},uh={};h&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function xo(n){if(eu[n])return eu[n];if(!Vr[n])return n;var i=Vr[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in uh)return eu[n]=i[o];return n}var ch=xo("animationend"),dh=xo("animationiteration"),fh=xo("animationstart"),hh=xo("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(n,i){ph.set(n,i),a(i,[n])}for(var tu=0;tu<mh.length;tu++){var nu=mh[tu],pw=nu.toLowerCase(),mw=nu[0].toUpperCase()+nu.slice(1);On(pw,"on"+mw)}On(ch,"onAnimationEnd"),On(dh,"onAnimationIteration"),On(fh,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(hh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function gh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,pv(u,i,void 0,n),n.currentTarget=null}function _h(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var w=u[g],E=w.instance,R=w.currentTarget;if(w=w.listener,E!==f&&d.isPropagationStopped())break e;gh(d,w,R),f=E}else for(g=0;g<u.length;g++){if(w=u[g],E=w.instance,R=w.currentTarget,w=w.listener,E!==f&&d.isPropagationStopped())break e;gh(d,w,R),f=E}}}if(po)throw n=Da,po=!1,Da=null,n}function ke(n,i){var o=i[cu];o===void 0&&(o=i[cu]=new Set);var u=n+"__bubble";o.has(u)||(yh(i,n,2,!1),o.add(u))}function ru(n,i,o){var u=0;i&&(u|=4),yh(o,n,u,i)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Xi(n){if(!n[Ao]){n[Ao]=!0,s.forEach(function(o){o!=="selectionchange"&&(gw.has(o)||ru(o,!1,n),ru(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ao]||(i[Ao]=!0,ru("selectionchange",!1,i))}}function yh(n,i,o,u){switch(Wf(i)){case 1:var d=xv;break;case 4:d=Av;break;default:d=ja}o=d.bind(null,i,o,n),d=void 0,!Oa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function iu(n,i,o,u,d){var f=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;w!==null;){if(g=dr(w),g===null)return;if(E=g.tag,E===5||E===6){u=f=g;continue e}w=w.parentNode}}u=u.return}Cf(function(){var R=f,D=Na(o),M=[];e:{var A=ph.get(n);if(A!==void 0){var $=Ba,V=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":$=Gv;break;case"focusin":V="focus",$=Ga;break;case"focusout":V="blur",$=Ga;break;case"beforeblur":case"afterblur":$=Ga;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Yv;break;case ch:case dh:case fh:$=Fv;break;case hh:$=Jv;break;case"scroll":$=Ov;break;case"wheel":$=Zv;break;case"copy":case"cut":case"paste":$=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Gf}var G=(i&4)!==0,Ue=!G&&n==="scroll",k=G?A!==null?A+"Capture":null:A;G=[];for(var S=R,T;S!==null;){T=S;var F=T.stateNode;if(T.tag===5&&F!==null&&(T=F,k!==null&&(F=Li(S,k),F!=null&&G.push(Zi(S,F,T)))),Ue)break;S=S.return}0<G.length&&(A=new $(A,V,null,o,D),M.push({event:A,listeners:G}))}}if(!(i&7)){e:{if(A=n==="mouseover"||n==="pointerover",$=n==="mouseout"||n==="pointerout",A&&o!==Pa&&(V=o.relatedTarget||o.fromElement)&&(dr(V)||V[ln]))break e;if(($||A)&&(A=D.window===D?D:(A=D.ownerDocument)?A.defaultView||A.parentWindow:window,$?(V=o.relatedTarget||o.toElement,$=R,V=V?dr(V):null,V!==null&&(Ue=cr(V),V!==Ue||V.tag!==5&&V.tag!==6)&&(V=null)):($=null,V=R),$!==V)){if(G=Hf,F="onMouseLeave",k="onMouseEnter",S="mouse",(n==="pointerout"||n==="pointerover")&&(G=Gf,F="onPointerLeave",k="onPointerEnter",S="pointer"),Ue=$==null?A:qr($),T=V==null?A:qr(V),A=new G(F,S+"leave",$,o,D),A.target=Ue,A.relatedTarget=T,F=null,dr(D)===R&&(G=new G(k,S+"enter",V,o,D),G.target=T,G.relatedTarget=Ue,F=G),Ue=F,$&&V)t:{for(G=$,k=V,S=0,T=G;T;T=Gr(T))S++;for(T=0,F=k;F;F=Gr(F))T++;for(;0<S-T;)G=Gr(G),S--;for(;0<T-S;)k=Gr(k),T--;for(;S--;){if(G===k||k!==null&&G===k.alternate)break t;G=Gr(G),k=Gr(k)}G=null}else G=null;$!==null&&vh(M,A,$,G,!1),V!==null&&Ue!==null&&vh(M,Ue,V,G,!0)}}e:{if(A=R?qr(R):window,$=A.nodeName&&A.nodeName.toLowerCase(),$==="select"||$==="input"&&A.type==="file")var K=ow;else if(Xf(A))if(eh)K=cw;else{K=aw;var Y=lw}else($=A.nodeName)&&$.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(K=uw);if(K&&(K=K(n,R))){Zf(M,K,o,D);break e}Y&&Y(n,A,R),n==="focusout"&&(Y=A._wrapperState)&&Y.controlled&&A.type==="number"&&Ca(A,"number",A.value)}switch(Y=R?qr(R):window,n){case"focusin":(Xf(Y)||Y.contentEditable==="true")&&(Hr=Y,Xa=R,Qi=null);break;case"focusout":Qi=Xa=Hr=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,ah(M,o,D);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":ah(M,o,D)}var Q;if(qa)e:{switch(n){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Br?Qf(n,o)&&(ee="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Kf&&o.locale!=="ko"&&(Br||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Br&&(Q=$f()):(An=D,$a="value"in An?An.value:An.textContent,Br=!0)),Y=Oo(R,ee),0<Y.length&&(ee=new Vf(ee,n,null,o,D),M.push({event:ee,listeners:Y}),Q?ee.data=Q:(Q=Jf(o),Q!==null&&(ee.data=Q)))),(Q=tw?nw(n,o):rw(n,o))&&(R=Oo(R,"onBeforeInput"),0<R.length&&(D=new Vf("onBeforeInput","beforeinput",null,o,D),M.push({event:D,listeners:R}),D.data=Q))}_h(M,i)})}function Zi(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Oo(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Li(n,o),f!=null&&u.unshift(Zi(n,f,d)),f=Li(n,i),f!=null&&u.push(Zi(n,f,d))),n=n.return}return u}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vh(n,i,o,u,d){for(var f=i._reactName,g=[];o!==null&&o!==u;){var w=o,E=w.alternate,R=w.stateNode;if(E!==null&&E===u)break;w.tag===5&&R!==null&&(w=R,d?(E=Li(o,f),E!=null&&g.unshift(Zi(o,E,w))):d||(E=Li(o,f),E!=null&&g.push(Zi(o,E,w)))),o=o.return}g.length!==0&&n.push({event:i,listeners:g})}var _w=/\r\n?/g,yw=/\u0000|\uFFFD/g;function wh(n){return(typeof n=="string"?n:""+n).replace(_w,`
`).replace(yw,"")}function Do(n,i,o){if(i=wh(i),wh(n)!==i&&o)throw Error(t(425))}function Lo(){}var su=null,ou=null;function lu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(Ew)}:au;function Ew(n){setTimeout(function(){throw n})}function uu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Bi(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Bi(i)}function Dn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Kr,es="__reactProps$"+Kr,ln="__reactContainer$"+Kr,cu="__reactEvents$"+Kr,Sw="__reactListeners$"+Kr,Cw="__reactHandles$"+Kr;function dr(n){var i=n[Jt];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ln]||o[Jt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Sh(n);n!==null;){if(o=n[Jt])return o;n=Sh(n)}return i}n=o,o=n.parentNode}return null}function ts(n){return n=n[Jt]||n[ln],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Mo(n){return n[es]||null}var du=[],Yr=-1;function Ln(n){return{current:n}}function Te(n){0>Yr||(n.current=du[Yr],du[Yr]=null,Yr--)}function Ce(n,i){Yr++,du[Yr]=n.current,n.current=i}var Mn={},Ze=Ln(Mn),ct=Ln(!1),fr=Mn;function Qr(n,i){var o=n.type.contextTypes;if(!o)return Mn;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=i[f];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function dt(n){return n=n.childContextTypes,n!=null}function bo(){Te(ct),Te(Ze)}function Ch(n,i,o){if(Ze.current!==Mn)throw Error(t(168));Ce(Ze,i),Ce(ct,o)}function Ih(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return H({},o,u)}function Fo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mn,fr=Ze.current,Ce(Ze,n),Ce(ct,ct.current),!0}function kh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Ih(n,i,fr),u.__reactInternalMemoizedMergedChildContext=n,Te(ct),Te(Ze),Ce(Ze,n)):Te(ct),Ce(ct,o)}var an=null,Uo=!1,fu=!1;function Th(n){an===null?an=[n]:an.push(n)}function Iw(n){Uo=!0,Th(n)}function bn(){if(!fu&&an!==null){fu=!0;var n=0,i=ge;try{var o=an;for(ge=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}an=null,Uo=!1}catch(d){throw an!==null&&(an=an.slice(n+1)),Pf(La,bn),d}finally{ge=i,fu=!1}}return null}var Jr=[],Xr=0,zo=null,jo=0,kt=[],Tt=0,hr=null,un=1,cn="";function pr(n,i){Jr[Xr++]=jo,Jr[Xr++]=zo,zo=n,jo=i}function Rh(n,i,o){kt[Tt++]=un,kt[Tt++]=cn,kt[Tt++]=hr,hr=n;var u=un;n=cn;var d=32-Dt(u)-1;u&=~(1<<d),o+=1;var f=32-Dt(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,un=1<<32-Dt(i)+d|o<<d|u,cn=f+n}else un=1<<f|o<<d|u,cn=n}function hu(n){n.return!==null&&(pr(n,1),Rh(n,1,0))}function pu(n){for(;n===zo;)zo=Jr[--Xr],Jr[Xr]=null,jo=Jr[--Xr],Jr[Xr]=null;for(;n===hr;)hr=kt[--Tt],kt[Tt]=null,cn=kt[--Tt],kt[Tt]=null,un=kt[--Tt],kt[Tt]=null}var St=null,Ct=null,Ne=!1,Mt=null;function Ph(n,i){var o=xt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Nh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,St=n,Ct=Dn(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,St=n,Ct=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=hr!==null?{id:un,overflow:cn}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=xt(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,St=n,Ct=null,!0):!1;default:return!1}}function mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gu(n){if(Ne){var i=Ct;if(i){var o=i;if(!Nh(n,i)){if(mu(n))throw Error(t(418));i=Dn(o.nextSibling);var u=St;i&&Nh(n,i)?Ph(u,o):(n.flags=n.flags&-4097|2,Ne=!1,St=n)}}else{if(mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ne=!1,St=n}}}function xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;St=n}function Wo(n){if(n!==St)return!1;if(!Ne)return xh(n),Ne=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!lu(n.type,n.memoizedProps)),i&&(i=Ct)){if(mu(n))throw Ah(),Error(t(418));for(;i;)Ph(n,i),i=Dn(i.nextSibling)}if(xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Ct=Dn(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Ct=null}}else Ct=St?Dn(n.stateNode.nextSibling):null;return!0}function Ah(){for(var n=Ct;n;)n=Dn(n.nextSibling)}function Zr(){Ct=St=null,Ne=!1}function _u(n){Mt===null?Mt=[n]:Mt.push(n)}var kw=te.ReactCurrentBatchConfig;function ns(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var w=d.refs;g===null?delete w[f]:w[f]=g},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function $o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Oh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(k,S){if(n){var T=k.deletions;T===null?(k.deletions=[S],k.flags|=16):T.push(S)}}function o(k,S){if(!n)return null;for(;S!==null;)i(k,S),S=S.sibling;return null}function u(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function d(k,S){return k=Hn(k,S),k.index=0,k.sibling=null,k}function f(k,S,T){return k.index=T,n?(T=k.alternate,T!==null?(T=T.index,T<S?(k.flags|=2,S):T):(k.flags|=2,S)):(k.flags|=1048576,S)}function g(k){return n&&k.alternate===null&&(k.flags|=2),k}function w(k,S,T,F){return S===null||S.tag!==6?(S=ac(T,k.mode,F),S.return=k,S):(S=d(S,T),S.return=k,S)}function E(k,S,T,F){var K=T.type;return K===we?D(k,S,T.props.children,F,T.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ut&&Oh(K)===S.type)?(F=d(S,T.props),F.ref=ns(k,S,T),F.return=k,F):(F=fl(T.type,T.key,T.props,null,k.mode,F),F.ref=ns(k,S,T),F.return=k,F)}function R(k,S,T,F){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=uc(T,k.mode,F),S.return=k,S):(S=d(S,T.children||[]),S.return=k,S)}function D(k,S,T,F,K){return S===null||S.tag!==7?(S=Sr(T,k.mode,F,K),S.return=k,S):(S=d(S,T),S.return=k,S)}function M(k,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ac(""+S,k.mode,T),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:return T=fl(S.type,S.key,S.props,null,k.mode,T),T.ref=ns(k,null,S),T.return=k,T;case ve:return S=uc(S,k.mode,T),S.return=k,S;case ut:var F=S._init;return M(k,F(S._payload),T)}if(Ai(S)||J(S))return S=Sr(S,k.mode,T,null),S.return=k,S;$o(k,S)}return null}function A(k,S,T,F){var K=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return K!==null?null:w(k,S,""+T,F);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case pe:return T.key===K?E(k,S,T,F):null;case ve:return T.key===K?R(k,S,T,F):null;case ut:return K=T._init,A(k,S,K(T._payload),F)}if(Ai(T)||J(T))return K!==null?null:D(k,S,T,F,null);$o(k,T)}return null}function $(k,S,T,F,K){if(typeof F=="string"&&F!==""||typeof F=="number")return k=k.get(T)||null,w(S,k,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case pe:return k=k.get(F.key===null?T:F.key)||null,E(S,k,F,K);case ve:return k=k.get(F.key===null?T:F.key)||null,R(S,k,F,K);case ut:var Y=F._init;return $(k,S,T,Y(F._payload),K)}if(Ai(F)||J(F))return k=k.get(T)||null,D(S,k,F,K,null);$o(S,F)}return null}function V(k,S,T,F){for(var K=null,Y=null,Q=S,ee=S=0,Ke=null;Q!==null&&ee<T.length;ee++){Q.index>ee?(Ke=Q,Q=null):Ke=Q.sibling;var fe=A(k,Q,T[ee],F);if(fe===null){Q===null&&(Q=Ke);break}n&&Q&&fe.alternate===null&&i(k,Q),S=f(fe,S,ee),Y===null?K=fe:Y.sibling=fe,Y=fe,Q=Ke}if(ee===T.length)return o(k,Q),Ne&&pr(k,ee),K;if(Q===null){for(;ee<T.length;ee++)Q=M(k,T[ee],F),Q!==null&&(S=f(Q,S,ee),Y===null?K=Q:Y.sibling=Q,Y=Q);return Ne&&pr(k,ee),K}for(Q=u(k,Q);ee<T.length;ee++)Ke=$(Q,k,ee,T[ee],F),Ke!==null&&(n&&Ke.alternate!==null&&Q.delete(Ke.key===null?ee:Ke.key),S=f(Ke,S,ee),Y===null?K=Ke:Y.sibling=Ke,Y=Ke);return n&&Q.forEach(function(Vn){return i(k,Vn)}),Ne&&pr(k,ee),K}function G(k,S,T,F){var K=J(T);if(typeof K!="function")throw Error(t(150));if(T=K.call(T),T==null)throw Error(t(151));for(var Y=K=null,Q=S,ee=S=0,Ke=null,fe=T.next();Q!==null&&!fe.done;ee++,fe=T.next()){Q.index>ee?(Ke=Q,Q=null):Ke=Q.sibling;var Vn=A(k,Q,fe.value,F);if(Vn===null){Q===null&&(Q=Ke);break}n&&Q&&Vn.alternate===null&&i(k,Q),S=f(Vn,S,ee),Y===null?K=Vn:Y.sibling=Vn,Y=Vn,Q=Ke}if(fe.done)return o(k,Q),Ne&&pr(k,ee),K;if(Q===null){for(;!fe.done;ee++,fe=T.next())fe=M(k,fe.value,F),fe!==null&&(S=f(fe,S,ee),Y===null?K=fe:Y.sibling=fe,Y=fe);return Ne&&pr(k,ee),K}for(Q=u(k,Q);!fe.done;ee++,fe=T.next())fe=$(Q,k,ee,fe.value,F),fe!==null&&(n&&fe.alternate!==null&&Q.delete(fe.key===null?ee:fe.key),S=f(fe,S,ee),Y===null?K=fe:Y.sibling=fe,Y=fe);return n&&Q.forEach(function(rE){return i(k,rE)}),Ne&&pr(k,ee),K}function Ue(k,S,T,F){if(typeof T=="object"&&T!==null&&T.type===we&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case pe:e:{for(var K=T.key,Y=S;Y!==null;){if(Y.key===K){if(K=T.type,K===we){if(Y.tag===7){o(k,Y.sibling),S=d(Y,T.props.children),S.return=k,k=S;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ut&&Oh(K)===Y.type){o(k,Y.sibling),S=d(Y,T.props),S.ref=ns(k,Y,T),S.return=k,k=S;break e}o(k,Y);break}else i(k,Y);Y=Y.sibling}T.type===we?(S=Sr(T.props.children,k.mode,F,T.key),S.return=k,k=S):(F=fl(T.type,T.key,T.props,null,k.mode,F),F.ref=ns(k,S,T),F.return=k,k=F)}return g(k);case ve:e:{for(Y=T.key;S!==null;){if(S.key===Y)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){o(k,S.sibling),S=d(S,T.children||[]),S.return=k,k=S;break e}else{o(k,S);break}else i(k,S);S=S.sibling}S=uc(T,k.mode,F),S.return=k,k=S}return g(k);case ut:return Y=T._init,Ue(k,S,Y(T._payload),F)}if(Ai(T))return V(k,S,T,F);if(J(T))return G(k,S,T,F);$o(k,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(o(k,S.sibling),S=d(S,T),S.return=k,k=S):(o(k,S),S=ac(T,k.mode,F),S.return=k,k=S),g(k)):o(k,S)}return Ue}var ei=Dh(!0),Lh=Dh(!1),Bo=Ln(null),Ho=null,ti=null,yu=null;function vu(){yu=ti=Ho=null}function wu(n){var i=Bo.current;Te(Bo),n._currentValue=i}function Eu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ni(n,i){Ho=n,yu=ti=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(ft=!0),n.firstContext=null)}function Rt(n){var i=n._currentValue;if(yu!==n)if(n={context:n,memoizedValue:i,next:null},ti===null){if(Ho===null)throw Error(t(308));ti=n,Ho.dependencies={lanes:0,firstContext:n}}else ti=ti.next=n;return i}var mr=null;function Su(n){mr===null?mr=[n]:mr.push(n)}function Mh(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Su(i)):(o.next=d.next,d.next=o),i.interleaved=o,dn(n,u)}function dn(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Fn=!1;function Cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Un(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,ue&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,dn(n,o)}return d=u.interleaved,d===null?(i.next=i,Su(u)):(i.next=d.next,d.next=i),u.interleaved=i,dn(n,o)}function Vo(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Fa(n,o)}}function Fh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=g:f=f.next=g,o=o.next}while(o!==null);f===null?d=f=i:f=f.next=i}else d=f=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Go(n,i,o,u){var d=n.updateQueue;Fn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,R=E.next;E.next=null,g===null?f=R:g.next=R,g=E;var D=n.alternate;D!==null&&(D=D.updateQueue,w=D.lastBaseUpdate,w!==g&&(w===null?D.firstBaseUpdate=R:w.next=R,D.lastBaseUpdate=E))}if(f!==null){var M=d.baseState;g=0,D=R=E=null,w=f;do{var A=w.lane,$=w.eventTime;if((u&A)===A){D!==null&&(D=D.next={eventTime:$,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var V=n,G=w;switch(A=i,$=o,G.tag){case 1:if(V=G.payload,typeof V=="function"){M=V.call($,M,A);break e}M=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=G.payload,A=typeof V=="function"?V.call($,M,A):V,A==null)break e;M=H({},M,A);break e;case 2:Fn=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,A=d.effects,A===null?d.effects=[w]:A.push(w))}else $={eventTime:$,lane:A,tag:w.tag,payload:w.payload,callback:w.callback,next:null},D===null?(R=D=$,E=M):D=D.next=$,g|=A;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;A=w,w=A.next,A.next=null,d.lastBaseUpdate=A,d.shared.pending=null}}while(!0);if(D===null&&(E=M),d.baseState=E,d.firstBaseUpdate=R,d.lastBaseUpdate=D,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);yr|=g,n.lanes=g,n.memoizedState=M}}function Uh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var rs={},Xt=Ln(rs),is=Ln(rs),ss=Ln(rs);function gr(n){if(n===rs)throw Error(t(174));return n}function Iu(n,i){switch(Ce(ss,i),Ce(is,n),Ce(Xt,rs),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ka(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ka(i,n)}Te(Xt),Ce(Xt,i)}function ri(){Te(Xt),Te(is),Te(ss)}function zh(n){gr(ss.current);var i=gr(Xt.current),o=ka(i,n.type);i!==o&&(Ce(is,n),Ce(Xt,o))}function ku(n){is.current===n&&(Te(Xt),Te(is))}var Ae=Ln(0);function Ko(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function Ru(){for(var n=0;n<Tu.length;n++)Tu[n]._workInProgressVersionPrimary=null;Tu.length=0}var qo=te.ReactCurrentDispatcher,Pu=te.ReactCurrentBatchConfig,_r=0,Oe=null,We=null,Ve=null,Yo=!1,os=!1,ls=0,Tw=0;function et(){throw Error(t(321))}function Nu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Lt(n[o],i[o]))return!1;return!0}function xu(n,i,o,u,d,f){if(_r=f,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qo.current=n===null||n.memoizedState===null?xw:Aw,n=o(u,d),os){f=0;do{if(os=!1,ls=0,25<=f)throw Error(t(301));f+=1,Ve=We=null,i.updateQueue=null,qo.current=Ow,n=o(u,d)}while(os)}if(qo.current=Xo,i=We!==null&&We.next!==null,_r=0,Ve=We=Oe=null,Yo=!1,i)throw Error(t(300));return n}function Au(){var n=ls!==0;return ls=0,n}function Zt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Oe.memoizedState=Ve=n:Ve=Ve.next=n,Ve}function Pt(){if(We===null){var n=Oe.alternate;n=n!==null?n.memoizedState:null}else n=We.next;var i=Ve===null?Oe.memoizedState:Ve.next;if(i!==null)Ve=i,We=n;else{if(n===null)throw Error(t(310));We=n,n={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ve===null?Oe.memoizedState=Ve=n:Ve=Ve.next=n}return Ve}function as(n,i){return typeof i=="function"?i(n):i}function Ou(n){var i=Pt(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=We,d=u.baseQueue,f=o.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,u=u.baseState;var w=g=null,E=null,R=f;do{var D=R.lane;if((_r&D)===D)E!==null&&(E=E.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),u=R.hasEagerState?R.eagerState:n(u,R.action);else{var M={lane:D,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};E===null?(w=E=M,g=u):E=E.next=M,Oe.lanes|=D,yr|=D}R=R.next}while(R!==null&&R!==f);E===null?g=u:E.next=w,Lt(u,i.memoizedState)||(ft=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do f=d.lane,Oe.lanes|=f,yr|=f,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Du(n){var i=Pt(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,f=i.memoizedState;if(d!==null){o.pending=null;var g=d=d.next;do f=n(f,g.action),g=g.next;while(g!==d);Lt(f,i.memoizedState)||(ft=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),o.lastRenderedState=f}return[f,u]}function jh(){}function Wh(n,i){var o=Oe,u=Pt(),d=i(),f=!Lt(u.memoizedState,d);if(f&&(u.memoizedState=d,ft=!0),u=u.queue,Lu(Hh.bind(null,o,u,n),[n]),u.getSnapshot!==i||f||Ve!==null&&Ve.memoizedState.tag&1){if(o.flags|=2048,us(9,Bh.bind(null,o,u,d,i),void 0,null),Ge===null)throw Error(t(349));_r&30||$h(o,i,d)}return d}function $h(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Bh(n,i,o,u){i.value=o,i.getSnapshot=u,Vh(i)&&Gh(n)}function Hh(n,i,o){return o(function(){Vh(i)&&Gh(n)})}function Vh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Lt(n,o)}catch{return!0}}function Gh(n){var i=dn(n,1);i!==null&&zt(i,n,1,-1)}function Kh(n){var i=Zt();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:n},i.queue=n,n=n.dispatch=Nw.bind(null,Oe,n),[i.memoizedState,n]}function us(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Oe.updateQueue,i===null?(i={lastEffect:null,stores:null},Oe.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function qh(){return Pt().memoizedState}function Qo(n,i,o,u){var d=Zt();Oe.flags|=n,d.memoizedState=us(1|i,o,void 0,u===void 0?null:u)}function Jo(n,i,o,u){var d=Pt();u=u===void 0?null:u;var f=void 0;if(We!==null){var g=We.memoizedState;if(f=g.destroy,u!==null&&Nu(u,g.deps)){d.memoizedState=us(i,o,f,u);return}}Oe.flags|=n,d.memoizedState=us(1|i,o,f,u)}function Yh(n,i){return Qo(8390656,8,n,i)}function Lu(n,i){return Jo(2048,8,n,i)}function Qh(n,i){return Jo(4,2,n,i)}function Jh(n,i){return Jo(4,4,n,i)}function Xh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Zh(n,i,o){return o=o!=null?o.concat([n]):null,Jo(4,4,Xh.bind(null,i,n),o)}function Mu(){}function ep(n,i){var o=Pt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function tp(n,i){var o=Pt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Nu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function np(n,i,o){return _r&21?(Lt(o,i)||(o=Of(),Oe.lanes|=o,yr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,ft=!0),n.memoizedState=o)}function Rw(n,i){var o=ge;ge=o!==0&&4>o?o:4,n(!0);var u=Pu.transition;Pu.transition={};try{n(!1),i()}finally{ge=o,Pu.transition=u}}function rp(){return Pt().memoizedState}function Pw(n,i,o){var u=$n(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ip(n))sp(i,o);else if(o=Mh(n,i,o,u),o!==null){var d=ot();zt(o,n,u,d),op(o,i,u)}}function Nw(n,i,o){var u=$n(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ip(n))sp(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,w=f(g,o);if(d.hasEagerState=!0,d.eagerState=w,Lt(w,g)){var E=i.interleaved;E===null?(d.next=d,Su(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Mh(n,i,d,u),o!==null&&(d=ot(),zt(o,n,u,d),op(o,i,u))}}function ip(n){var i=n.alternate;return n===Oe||i!==null&&i===Oe}function sp(n,i){os=Yo=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function op(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Fa(n,o)}}var Xo={readContext:Rt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},xw={readContext:Rt,useCallback:function(n,i){return Zt().memoizedState=[n,i===void 0?null:i],n},useContext:Rt,useEffect:Yh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Qo(4194308,4,Xh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var o=Zt();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Zt();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Pw.bind(null,Oe,n),[u.memoizedState,n]},useRef:function(n){var i=Zt();return n={current:n},i.memoizedState=n},useState:Kh,useDebugValue:Mu,useDeferredValue:function(n){return Zt().memoizedState=n},useTransition:function(){var n=Kh(!1),i=n[0];return n=Rw.bind(null,n[1]),Zt().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Oe,d=Zt();if(Ne){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Ge===null)throw Error(t(349));_r&30||$h(u,i,o)}d.memoizedState=o;var f={value:o,getSnapshot:i};return d.queue=f,Yh(Hh.bind(null,u,f,n),[n]),u.flags|=2048,us(9,Bh.bind(null,u,f,o,i),void 0,null),o},useId:function(){var n=Zt(),i=Ge.identifierPrefix;if(Ne){var o=cn,u=un;o=(u&~(1<<32-Dt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=ls++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Tw++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Aw={readContext:Rt,useCallback:ep,useContext:Rt,useEffect:Lu,useImperativeHandle:Zh,useInsertionEffect:Qh,useLayoutEffect:Jh,useMemo:tp,useReducer:Ou,useRef:qh,useState:function(){return Ou(as)},useDebugValue:Mu,useDeferredValue:function(n){var i=Pt();return np(i,We.memoizedState,n)},useTransition:function(){var n=Ou(as)[0],i=Pt().memoizedState;return[n,i]},useMutableSource:jh,useSyncExternalStore:Wh,useId:rp,unstable_isNewReconciler:!1},Ow={readContext:Rt,useCallback:ep,useContext:Rt,useEffect:Lu,useImperativeHandle:Zh,useInsertionEffect:Qh,useLayoutEffect:Jh,useMemo:tp,useReducer:Du,useRef:qh,useState:function(){return Du(as)},useDebugValue:Mu,useDeferredValue:function(n){var i=Pt();return We===null?i.memoizedState=n:np(i,We.memoizedState,n)},useTransition:function(){var n=Du(as)[0],i=Pt().memoizedState;return[n,i]},useMutableSource:jh,useSyncExternalStore:Wh,useId:rp,unstable_isNewReconciler:!1};function bt(n,i){if(n&&n.defaultProps){i=H({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function bu(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:H({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Zo={isMounted:function(n){return(n=n._reactInternals)?cr(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=ot(),d=$n(n),f=fn(u,d);f.payload=i,o!=null&&(f.callback=o),i=Un(n,f,d),i!==null&&(zt(i,n,d,u),Vo(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=ot(),d=$n(n),f=fn(u,d);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=Un(n,f,d),i!==null&&(zt(i,n,d,u),Vo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=ot(),u=$n(n),d=fn(o,u);d.tag=2,i!=null&&(d.callback=i),i=Un(n,d,u),i!==null&&(zt(i,n,u,o),Vo(i,n,u))}};function lp(n,i,o,u,d,f,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!Yi(o,u)||!Yi(d,f):!0}function ap(n,i,o){var u=!1,d=Mn,f=i.contextType;return typeof f=="object"&&f!==null?f=Rt(f):(d=dt(i)?fr:Ze.current,u=i.contextTypes,f=(u=u!=null)?Qr(n,d):Mn),i=new i(o,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function up(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function Fu(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Cu(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=Rt(f):(f=dt(i)?fr:Ze.current,d.context=Qr(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(bu(n,i,f,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Zo.enqueueReplaceState(d,d.state,null),Go(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ii(n,i){try{var o="",u=i;do o+=ce(u),u=u.return;while(u);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Uu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function zu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Dw=typeof WeakMap=="function"?WeakMap:Map;function cp(n,i,o){o=fn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ol||(ol=!0,ec=u),zu(n,i)},o}function dp(n,i,o){o=fn(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){zu(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){zu(n,i),typeof u!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),o}function fp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Dw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=Kw.bind(null,n,i,o),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,o,u,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=fn(-1,1),i.tag=2,Un(o,i,1))),o.lanes|=1),n)}var Lw=te.ReactCurrentOwner,ft=!1;function st(n,i,o,u){i.child=n===null?Lh(i,null,o,u):ei(i,n.child,o,u)}function mp(n,i,o,u,d){o=o.render;var f=i.ref;return ni(i,d),u=xu(n,i,o,u,f,d),o=Au(),n!==null&&!ft?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,hn(n,i,d)):(Ne&&o&&hu(i),i.flags|=1,st(n,i,u,d),i.child)}function gp(n,i,o,u,d){if(n===null){var f=o.type;return typeof f=="function"&&!lc(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=f,_p(n,i,f,u,d)):(n=fl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,!(n.lanes&d)){var g=f.memoizedProps;if(o=o.compare,o=o!==null?o:Yi,o(g,u)&&n.ref===i.ref)return hn(n,i,d)}return i.flags|=1,n=Hn(f,u),n.ref=i.ref,n.return=i,i.child=n}function _p(n,i,o,u,d){if(n!==null){var f=n.memoizedProps;if(Yi(f,u)&&n.ref===i.ref)if(ft=!1,i.pendingProps=u=f,(n.lanes&d)!==0)n.flags&131072&&(ft=!0);else return i.lanes=n.lanes,hn(n,i,d)}return ju(n,i,o,u,d)}function yp(n,i,o){var u=i.pendingProps,d=u.children,f=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(oi,It),It|=o;else{if(!(o&1073741824))return n=f!==null?f.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ce(oi,It),It|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:o,Ce(oi,It),It|=u}else f!==null?(u=f.baseLanes|o,i.memoizedState=null):u=o,Ce(oi,It),It|=u;return st(n,i,d,o),i.child}function vp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ju(n,i,o,u,d){var f=dt(o)?fr:Ze.current;return f=Qr(i,f),ni(i,d),o=xu(n,i,o,u,f,d),u=Au(),n!==null&&!ft?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,hn(n,i,d)):(Ne&&u&&hu(i),i.flags|=1,st(n,i,o,d),i.child)}function wp(n,i,o,u,d){if(dt(o)){var f=!0;Fo(i)}else f=!1;if(ni(i,d),i.stateNode===null)tl(n,i),ap(i,o,u),Fu(i,o,u,d),u=!0;else if(n===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var E=g.context,R=o.contextType;typeof R=="object"&&R!==null?R=Rt(R):(R=dt(o)?fr:Ze.current,R=Qr(i,R));var D=o.getDerivedStateFromProps,M=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function";M||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||E!==R)&&up(i,g,u,R),Fn=!1;var A=i.memoizedState;g.state=A,Go(i,u,g,d),E=i.memoizedState,w!==u||A!==E||ct.current||Fn?(typeof D=="function"&&(bu(i,o,D,u),E=i.memoizedState),(w=Fn||lp(i,o,w,u,A,E,R))?(M||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=R,u=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,bh(n,i),w=i.memoizedProps,R=i.type===i.elementType?w:bt(i.type,w),g.props=R,M=i.pendingProps,A=g.context,E=o.contextType,typeof E=="object"&&E!==null?E=Rt(E):(E=dt(o)?fr:Ze.current,E=Qr(i,E));var $=o.getDerivedStateFromProps;(D=typeof $=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==M||A!==E)&&up(i,g,u,E),Fn=!1,A=i.memoizedState,g.state=A,Go(i,u,g,d);var V=i.memoizedState;w!==M||A!==V||ct.current||Fn?(typeof $=="function"&&(bu(i,o,$,u),V=i.memoizedState),(R=Fn||lp(i,o,R,u,A,V,E)||!1)?(D||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,V,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,V,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=V),g.props=u,g.state=V,g.context=E,u=R):(typeof g.componentDidUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&A===n.memoizedState||(i.flags|=1024),u=!1)}return Wu(n,i,o,u,f,d)}function Wu(n,i,o,u,d,f){vp(n,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&kh(i,o,!1),hn(n,i,f);u=i.stateNode,Lw.current=i;var w=g&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&g?(i.child=ei(i,n.child,null,f),i.child=ei(i,null,w,f)):st(n,i,w,f),i.memoizedState=u.state,d&&kh(i,o,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),Iu(n,i.containerInfo)}function Sp(n,i,o,u,d){return Zr(),_u(d),i.flags|=256,st(n,i,o,u),i.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Bu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,o){var u=i.pendingProps,d=Ae.current,f=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=n!==null&&n.memoizedState===null?!1:(d&2)!==0),w?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ce(Ae,d&1),n===null)return gu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,n=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},!(u&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=hl(g,u,0,null),n=Sr(n,u,o,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Bu(o),i.memoizedState=$u,n):Hu(i,g));if(d=n.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Mw(n,i,g,u,w,d,o);if(f){f=u.fallback,g=i.mode,d=n.child,w=d.sibling;var E={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Hn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?f=Hn(w,f):(f=Sr(f,g,o,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=n.child.memoizedState,g=g===null?Bu(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=n.childLanes&~o,i.memoizedState=$u,u}return f=n.child,n=f.sibling,u=Hn(f,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Hu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,o,u){return u!==null&&_u(u),ei(i,n.child,null,o),n=Hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Mw(n,i,o,u,d,f,g){if(o)return i.flags&256?(i.flags&=-257,u=Uu(Error(t(422))),el(n,i,g,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=hl({mode:"visible",children:u.children},d,0,null),f=Sr(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,i.mode&1&&ei(i,n.child,null,g),i.child.memoizedState=Bu(g),i.memoizedState=$u,f);if(!(i.mode&1))return el(n,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,f=Error(t(419)),u=Uu(f,u,void 0),el(n,i,g,u)}if(w=(g&n.childLanes)!==0,ft||w){if(u=Ge,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,dn(n,d),zt(u,n,d,-1))}return oc(),u=Uu(Error(t(421))),el(n,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=qw.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,Ct=Dn(d.nextSibling),St=i,Ne=!0,Mt=null,n!==null&&(kt[Tt++]=un,kt[Tt++]=cn,kt[Tt++]=hr,un=n.id,cn=n.overflow,hr=i),i=Hu(i,u.children),i.flags|=4096,i)}function Ip(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Eu(n.return,i,o)}function Vu(n,i,o,u,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=o,f.tailMode=d)}function kp(n,i,o){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(st(n,i,u.children,o),u=Ae.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,o,i);else if(n.tag===19)Ip(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ce(Ae,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ko(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Vu(i,!1,d,o,f);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ko(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Vu(i,!0,o,null,f);break;case"together":Vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function hn(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),yr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Hn(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Hn(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function bw(n,i,o){switch(i.tag){case 3:Ep(i),Zr();break;case 5:zh(i);break;case 1:dt(i.type)&&Fo(i);break;case 4:Iu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ce(Bo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ce(Ae,Ae.current&1),i.flags|=128,null):o&i.child.childLanes?Cp(n,i,o):(Ce(Ae,Ae.current&1),n=hn(n,i,o),n!==null?n.sibling:null);Ce(Ae,Ae.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return kp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(Ae,Ae.current),u)break;return null;case 22:case 23:return i.lanes=0,yp(n,i,o)}return hn(n,i,o)}var Tp,Gu,Rp,Pp;Tp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Gu=function(){},Rp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,gr(Xt.current);var f=null;switch(o){case"input":d=Ea(n,d),u=Ea(n,u),f=[];break;case"select":d=H({},d,{value:void 0}),u=H({},u,{value:void 0}),f=[];break;case"textarea":d=Ia(n,d),u=Ia(n,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Lo)}Ta(o,u);var g;o=null;for(R in d)if(!u.hasOwnProperty(R)&&d.hasOwnProperty(R)&&d[R]!=null)if(R==="style"){var w=d[R];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(l.hasOwnProperty(R)?f||(f=[]):(f=f||[]).push(R,null));for(R in u){var E=u[R];if(w=d!=null?d[R]:void 0,u.hasOwnProperty(R)&&E!==w&&(E!=null||w!=null))if(R==="style")if(w){for(g in w)!w.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in E)E.hasOwnProperty(g)&&w[g]!==E[g]&&(o||(o={}),o[g]=E[g])}else o||(f||(f=[]),f.push(R,o)),o=E;else R==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(f=f||[]).push(R,E)):R==="children"?typeof E!="string"&&typeof E!="number"||(f=f||[]).push(R,""+E):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(l.hasOwnProperty(R)?(E!=null&&R==="onScroll"&&ke("scroll",n),f||w===E||(f=[])):(f=f||[]).push(R,E))}o&&(f=f||[]).push("style",o);var R=f;(i.updateQueue=R)&&(i.flags|=4)}},Pp=function(n,i,o,u){o!==u&&(i.flags|=4)};function cs(n,i){if(!Ne)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function tt(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Fw(n,i,o){var u=i.pendingProps;switch(pu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return dt(i.type)&&bo(),tt(i),null;case 3:return u=i.stateNode,ri(),Te(ct),Te(Ze),Ru(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Wo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Mt!==null&&(rc(Mt),Mt=null))),Gu(n,i),tt(i),null;case 5:ku(i);var d=gr(ss.current);if(o=i.type,n!==null&&i.stateNode!=null)Rp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return tt(i),null}if(n=gr(Xt.current),Wo(i)){u=i.stateNode,o=i.type;var f=i.memoizedProps;switch(u[Jt]=i,u[es]=f,n=(i.mode&1)!==0,o){case"dialog":ke("cancel",u),ke("close",u);break;case"iframe":case"object":case"embed":ke("load",u);break;case"video":case"audio":for(d=0;d<Ji.length;d++)ke(Ji[d],u);break;case"source":ke("error",u);break;case"img":case"image":case"link":ke("error",u),ke("load",u);break;case"details":ke("toggle",u);break;case"input":af(u,f),ke("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},ke("invalid",u);break;case"textarea":df(u,f),ke("invalid",u)}Ta(o,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var w=f[g];g==="children"?typeof w=="string"?u.textContent!==w&&(f.suppressHydrationWarning!==!0&&Do(u.textContent,w,n),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(f.suppressHydrationWarning!==!0&&Do(u.textContent,w,n),d=["children",""+w]):l.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&ke("scroll",u)}switch(o){case"input":uo(u),cf(u,f,!0);break;case"textarea":uo(u),hf(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=Lo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pf(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=g.createElement(o,{is:u.is}):(n=g.createElement(o),o==="select"&&(g=n,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):n=g.createElementNS(n,o),n[Jt]=i,n[es]=u,Tp(n,i,!1,!1),i.stateNode=n;e:{switch(g=Ra(o,u),o){case"dialog":ke("cancel",n),ke("close",n),d=u;break;case"iframe":case"object":case"embed":ke("load",n),d=u;break;case"video":case"audio":for(d=0;d<Ji.length;d++)ke(Ji[d],n);d=u;break;case"source":ke("error",n),d=u;break;case"img":case"image":case"link":ke("error",n),ke("load",n),d=u;break;case"details":ke("toggle",n),d=u;break;case"input":af(n,u),d=Ea(n,u),ke("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=H({},u,{value:void 0}),ke("invalid",n);break;case"textarea":df(n,u),d=Ia(n,u),ke("invalid",n);break;default:d=u}Ta(o,d),w=d;for(f in w)if(w.hasOwnProperty(f)){var E=w[f];f==="style"?_f(n,E):f==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&mf(n,E)):f==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Oi(n,E):typeof E=="number"&&Oi(n,""+E):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?E!=null&&f==="onScroll"&&ke("scroll",n):E!=null&&q(n,f,E,g))}switch(o){case"input":uo(n),cf(n,u,!1);break;case"textarea":uo(n),hf(n);break;case"option":u.value!=null&&n.setAttribute("value",""+me(u.value));break;case"select":n.multiple=!!u.multiple,f=u.value,f!=null?Ur(n,!!u.multiple,f,!1):u.defaultValue!=null&&Ur(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Lo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return tt(i),null;case 6:if(n&&i.stateNode!=null)Pp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=gr(ss.current),gr(Xt.current),Wo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Jt]=i,(f=u.nodeValue!==o)&&(n=St,n!==null))switch(n.tag){case 3:Do(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(u.nodeValue,o,(n.mode&1)!==0)}f&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Jt]=i,i.stateNode=u}return tt(i),null;case 13:if(Te(Ae),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ne&&Ct!==null&&i.mode&1&&!(i.flags&128))Ah(),Zr(),i.flags|=98560,f=!1;else if(f=Wo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Jt]=i}else Zr(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;tt(i),f=!1}else Mt!==null&&(rc(Mt),Mt=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||Ae.current&1?$e===0&&($e=3):oc())),i.updateQueue!==null&&(i.flags|=4),tt(i),null);case 4:return ri(),Gu(n,i),n===null&&Xi(i.stateNode.containerInfo),tt(i),null;case 10:return wu(i.type._context),tt(i),null;case 17:return dt(i.type)&&bo(),tt(i),null;case 19:if(Te(Ae),f=i.memoizedState,f===null)return tt(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)cs(f,!1);else{if($e!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(g=Ko(n),g!==null){for(i.flags|=128,cs(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)f=o,n=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,n=g.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ce(Ae,Ae.current&1|2),i.child}n=n.sibling}f.tail!==null&&Fe()>li&&(i.flags|=128,u=!0,cs(f,!1),i.lanes=4194304)}else{if(!u)if(n=Ko(g),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),cs(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ne)return tt(i),null}else 2*Fe()-f.renderingStartTime>li&&o!==1073741824&&(i.flags|=128,u=!0,cs(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(o=f.last,o!==null?o.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Fe(),i.sibling=null,o=Ae.current,Ce(Ae,u?o&1|2:o&1),i):(tt(i),null);case 22:case 23:return sc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?It&1073741824&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Uw(n,i){switch(pu(i),i.tag){case 1:return dt(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ri(),Te(ct),Te(Ze),Ru(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return ku(i),null;case 13:if(Te(Ae),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Zr()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Te(Ae),null;case 4:return ri(),null;case 10:return wu(i.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var nl=!1,nt=!1,zw=typeof WeakSet=="function"?WeakSet:Set,B=null;function si(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Me(n,i,u)}else o.current=null}function Ku(n,i,o){try{o()}catch(u){Me(n,i,u)}}var Np=!1;function jw(n,i){if(su=So,n=lh(),Ja(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var g=0,w=-1,E=-1,R=0,D=0,M=n,A=null;t:for(;;){for(var $;M!==o||d!==0&&M.nodeType!==3||(w=g+d),M!==f||u!==0&&M.nodeType!==3||(E=g+u),M.nodeType===3&&(g+=M.nodeValue.length),($=M.firstChild)!==null;)A=M,M=$;for(;;){if(M===n)break t;if(A===o&&++R===d&&(w=g),A===f&&++D===u&&(E=g),($=M.nextSibling)!==null)break;M=A,A=M.parentNode}M=$}o=w===-1||E===-1?null:{start:w,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(ou={focusedElem:n,selectionRange:o},So=!1,B=i;B!==null;)if(i=B,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,B=n;else for(;B!==null;){i=B;try{var V=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var G=V.memoizedProps,Ue=V.memoizedState,k=i.stateNode,S=k.getSnapshotBeforeUpdate(i.elementType===i.type?G:bt(i.type,G),Ue);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(F){Me(i,i.return,F)}if(n=i.sibling,n!==null){n.return=i.return,B=n;break}B=i.return}return V=Np,Np=!1,V}function ds(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Ku(i,o,f)}d=d.next}while(d!==u)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function qu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function xp(n){var i=n.alternate;i!==null&&(n.alternate=null,xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Jt],delete i[es],delete i[cu],delete i[Sw],delete i[Cw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ap(n){return n.tag===5||n.tag===3||n.tag===4}function Op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ap(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Lo));else if(u!==4&&(n=n.child,n!==null))for(Yu(n,i,o),n=n.sibling;n!==null;)Yu(n,i,o),n=n.sibling}function Qu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Qu(n,i,o),n=n.sibling;n!==null;)Qu(n,i,o),n=n.sibling}var Je=null,Ft=!1;function zn(n,i,o){for(o=o.child;o!==null;)Dp(n,i,o),o=o.sibling}function Dp(n,i,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(go,o)}catch{}switch(o.tag){case 5:nt||si(o,i);case 6:var u=Je,d=Ft;Je=null,zn(n,i,o),Je=u,Ft=d,Je!==null&&(Ft?(n=Je,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Je.removeChild(o.stateNode));break;case 18:Je!==null&&(Ft?(n=Je,o=o.stateNode,n.nodeType===8?uu(n.parentNode,o):n.nodeType===1&&uu(n,o),Bi(n)):uu(Je,o.stateNode));break;case 4:u=Je,d=Ft,Je=o.stateNode.containerInfo,Ft=!0,zn(n,i,o),Je=u,Ft=d;break;case 0:case 11:case 14:case 15:if(!nt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&Ku(o,i,g),d=d.next}while(d!==u)}zn(n,i,o);break;case 1:if(!nt&&(si(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(w){Me(o,i,w)}zn(n,i,o);break;case 21:zn(n,i,o);break;case 22:o.mode&1?(nt=(u=nt)||o.memoizedState!==null,zn(n,i,o),nt=u):zn(n,i,o);break;default:zn(n,i,o)}}function Lp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new zw),i.forEach(function(u){var d=Yw.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Ut(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var f=n,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:Je=w.stateNode,Ft=!1;break e;case 3:Je=w.stateNode.containerInfo,Ft=!0;break e;case 4:Je=w.stateNode.containerInfo,Ft=!0;break e}w=w.return}if(Je===null)throw Error(t(160));Dp(f,g,d),Je=null,Ft=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(R){Me(d,i,R)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mp(i,n),i=i.sibling}function Mp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ut(i,n),en(n),u&4){try{ds(3,n,n.return),rl(3,n)}catch(G){Me(n,n.return,G)}try{ds(5,n,n.return)}catch(G){Me(n,n.return,G)}}break;case 1:Ut(i,n),en(n),u&512&&o!==null&&si(o,o.return);break;case 5:if(Ut(i,n),en(n),u&512&&o!==null&&si(o,o.return),n.flags&32){var d=n.stateNode;try{Oi(d,"")}catch(G){Me(n,n.return,G)}}if(u&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,g=o!==null?o.memoizedProps:f,w=n.type,E=n.updateQueue;if(n.updateQueue=null,E!==null)try{w==="input"&&f.type==="radio"&&f.name!=null&&uf(d,f),Ra(w,g);var R=Ra(w,f);for(g=0;g<E.length;g+=2){var D=E[g],M=E[g+1];D==="style"?_f(d,M):D==="dangerouslySetInnerHTML"?mf(d,M):D==="children"?Oi(d,M):q(d,D,M,R)}switch(w){case"input":Sa(d,f);break;case"textarea":ff(d,f);break;case"select":var A=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var $=f.value;$!=null?Ur(d,!!f.multiple,$,!1):A!==!!f.multiple&&(f.defaultValue!=null?Ur(d,!!f.multiple,f.defaultValue,!0):Ur(d,!!f.multiple,f.multiple?[]:"",!1))}d[es]=f}catch(G){Me(n,n.return,G)}}break;case 6:if(Ut(i,n),en(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(G){Me(n,n.return,G)}}break;case 3:if(Ut(i,n),en(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Bi(i.containerInfo)}catch(G){Me(n,n.return,G)}break;case 4:Ut(i,n),en(n);break;case 13:Ut(i,n),en(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Zu=Fe())),u&4&&Lp(n);break;case 22:if(D=o!==null&&o.memoizedState!==null,n.mode&1?(nt=(R=nt)||D,Ut(i,n),nt=R):Ut(i,n),en(n),u&8192){if(R=n.memoizedState!==null,(n.stateNode.isHidden=R)&&!D&&n.mode&1)for(B=n,D=n.child;D!==null;){for(M=B=D;B!==null;){switch(A=B,$=A.child,A.tag){case 0:case 11:case 14:case 15:ds(4,A,A.return);break;case 1:si(A,A.return);var V=A.stateNode;if(typeof V.componentWillUnmount=="function"){u=A,o=A.return;try{i=u,V.props=i.memoizedProps,V.state=i.memoizedState,V.componentWillUnmount()}catch(G){Me(u,o,G)}}break;case 5:si(A,A.return);break;case 22:if(A.memoizedState!==null){Up(M);continue}}$!==null?($.return=A,B=$):Up(M)}D=D.sibling}e:for(D=null,M=n;;){if(M.tag===5){if(D===null){D=M;try{d=M.stateNode,R?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(w=M.stateNode,E=M.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=gf("display",g))}catch(G){Me(n,n.return,G)}}}else if(M.tag===6){if(D===null)try{M.stateNode.nodeValue=R?"":M.memoizedProps}catch(G){Me(n,n.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===n)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;D===M&&(D=null),M=M.return}D===M&&(D=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Ut(i,n),en(n),u&4&&Lp(n);break;case 21:break;default:Ut(i,n),en(n)}}function en(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Ap(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Oi(d,""),u.flags&=-33);var f=Op(n);Qu(n,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,w=Op(n);Yu(n,w,g);break;default:throw Error(t(161))}}catch(E){Me(n,n.return,E)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ww(n,i,o){B=n,bp(n)}function bp(n,i,o){for(var u=(n.mode&1)!==0;B!==null;){var d=B,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||nl;if(!g){var w=d.alternate,E=w!==null&&w.memoizedState!==null||nt;w=nl;var R=nt;if(nl=g,(nt=E)&&!R)for(B=d;B!==null;)g=B,E=g.child,g.tag===22&&g.memoizedState!==null?zp(d):E!==null?(E.return=g,B=E):zp(d);for(;f!==null;)B=f,bp(f),f=f.sibling;B=d,nl=w,nt=R}Fp(n)}else d.subtreeFlags&8772&&f!==null?(f.return=d,B=f):Fp(n)}}function Fp(n){for(;B!==null;){var i=B;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:nt||rl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!nt)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:bt(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Uh(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Uh(i,g,o)}break;case 5:var w=i.stateNode;if(o===null&&i.flags&4){o=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var R=i.alternate;if(R!==null){var D=R.memoizedState;if(D!==null){var M=D.dehydrated;M!==null&&Bi(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}nt||i.flags&512&&qu(i)}catch(A){Me(i,i.return,A)}}if(i===n){B=null;break}if(o=i.sibling,o!==null){o.return=i.return,B=o;break}B=i.return}}function Up(n){for(;B!==null;){var i=B;if(i===n){B=null;break}var o=i.sibling;if(o!==null){o.return=i.return,B=o;break}B=i.return}}function zp(n){for(;B!==null;){var i=B;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{rl(4,i)}catch(E){Me(i,o,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Me(i,d,E)}}var f=i.return;try{qu(i)}catch(E){Me(i,f,E)}break;case 5:var g=i.return;try{qu(i)}catch(E){Me(i,g,E)}}}catch(E){Me(i,i.return,E)}if(i===n){B=null;break}var w=i.sibling;if(w!==null){w.return=i.return,B=w;break}B=i.return}}var $w=Math.ceil,il=te.ReactCurrentDispatcher,Ju=te.ReactCurrentOwner,Nt=te.ReactCurrentBatchConfig,ue=0,Ge=null,je=null,Xe=0,It=0,oi=Ln(0),$e=0,fs=null,yr=0,sl=0,Xu=0,hs=null,ht=null,Zu=0,li=1/0,pn=null,ol=!1,ec=null,jn=null,ll=!1,Wn=null,al=0,ps=0,tc=null,ul=-1,cl=0;function ot(){return ue&6?Fe():ul!==-1?ul:ul=Fe()}function $n(n){return n.mode&1?ue&2&&Xe!==0?Xe&-Xe:kw.transition!==null?(cl===0&&(cl=Of()),cl):(n=ge,n!==0||(n=window.event,n=n===void 0?16:Wf(n.type)),n):1}function zt(n,i,o,u){if(50<ps)throw ps=0,tc=null,Error(t(185));Ui(n,o,u),(!(ue&2)||n!==Ge)&&(n===Ge&&(!(ue&2)&&(sl|=o),$e===4&&Bn(n,Xe)),pt(n,u),o===1&&ue===0&&!(i.mode&1)&&(li=Fe()+500,Uo&&bn()))}function pt(n,i){var o=n.callbackNode;kv(n,i);var u=vo(n,n===Ge?Xe:0);if(u===0)o!==null&&Nf(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Nf(o),i===1)n.tag===0?Iw(Wp.bind(null,n)):Th(Wp.bind(null,n)),ww(function(){!(ue&6)&&bn()}),o=null;else{switch(Df(u)){case 1:o=La;break;case 4:o=xf;break;case 16:o=mo;break;case 536870912:o=Af;break;default:o=mo}o=Yp(o,jp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function jp(n,i){if(ul=-1,cl=0,ue&6)throw Error(t(327));var o=n.callbackNode;if(ai()&&n.callbackNode!==o)return null;var u=vo(n,n===Ge?Xe:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=dl(n,u);else{i=u;var d=ue;ue|=2;var f=Bp();(Ge!==n||Xe!==i)&&(pn=null,li=Fe()+500,wr(n,i));do try{Vw();break}catch(w){$p(n,w)}while(!0);vu(),il.current=f,ue=d,je!==null?i=0:(Ge=null,Xe=0,i=$e)}if(i!==0){if(i===2&&(d=Ma(n),d!==0&&(u=d,i=nc(n,d))),i===1)throw o=fs,wr(n,0),Bn(n,u),pt(n,Fe()),o;if(i===6)Bn(n,u);else{if(d=n.current.alternate,!(u&30)&&!Bw(d)&&(i=dl(n,u),i===2&&(f=Ma(n),f!==0&&(u=f,i=nc(n,f))),i===1))throw o=fs,wr(n,0),Bn(n,u),pt(n,Fe()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Er(n,ht,pn);break;case 3:if(Bn(n,u),(u&130023424)===u&&(i=Zu+500-Fe(),10<i)){if(vo(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){ot(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=au(Er.bind(null,n,ht,pn),i);break}Er(n,ht,pn);break;case 4:if(Bn(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var g=31-Dt(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*$w(u/1960))-u,10<u){n.timeoutHandle=au(Er.bind(null,n,ht,pn),u);break}Er(n,ht,pn);break;case 5:Er(n,ht,pn);break;default:throw Error(t(329))}}}return pt(n,Fe()),n.callbackNode===o?jp.bind(null,n):null}function nc(n,i){var o=hs;return n.current.memoizedState.isDehydrated&&(wr(n,i).flags|=256),n=dl(n,i),n!==2&&(i=ht,ht=o,i!==null&&rc(i)),n}function rc(n){ht===null?ht=n:ht.push.apply(ht,n)}function Bw(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],f=d.getSnapshot;d=d.value;try{if(!Lt(f(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bn(n,i){for(i&=~Xu,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Dt(i),u=1<<o;n[o]=-1,i&=~u}}function Wp(n){if(ue&6)throw Error(t(327));ai();var i=vo(n,0);if(!(i&1))return pt(n,Fe()),null;var o=dl(n,i);if(n.tag!==0&&o===2){var u=Ma(n);u!==0&&(i=u,o=nc(n,u))}if(o===1)throw o=fs,wr(n,0),Bn(n,i),pt(n,Fe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Er(n,ht,pn),pt(n,Fe()),null}function ic(n,i){var o=ue;ue|=1;try{return n(i)}finally{ue=o,ue===0&&(li=Fe()+500,Uo&&bn())}}function vr(n){Wn!==null&&Wn.tag===0&&!(ue&6)&&ai();var i=ue;ue|=1;var o=Nt.transition,u=ge;try{if(Nt.transition=null,ge=1,n)return n()}finally{ge=u,Nt.transition=o,ue=i,!(ue&6)&&bn()}}function sc(){It=oi.current,Te(oi)}function wr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,vw(o)),je!==null)for(o=je.return;o!==null;){var u=o;switch(pu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&bo();break;case 3:ri(),Te(ct),Te(Ze),Ru();break;case 5:ku(u);break;case 4:ri();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:wu(u.type._context);break;case 22:case 23:sc()}o=o.return}if(Ge=n,je=n=Hn(n.current,null),Xe=It=i,$e=0,fs=null,Xu=sl=yr=0,ht=hs=null,mr!==null){for(i=0;i<mr.length;i++)if(o=mr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,f=o.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}o.pending=u}mr=null}return n}function $p(n,i){do{var o=je;try{if(vu(),qo.current=Xo,Yo){for(var u=Oe.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Yo=!1}if(_r=0,Ve=We=Oe=null,os=!1,ls=0,Ju.current=null,o===null||o.return===null){$e=1,fs=i,je=null;break}e:{var f=n,g=o.return,w=o,E=i;if(i=Xe,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var R=E,D=w,M=D.tag;if(!(D.mode&1)&&(M===0||M===11||M===15)){var A=D.alternate;A?(D.updateQueue=A.updateQueue,D.memoizedState=A.memoizedState,D.lanes=A.lanes):(D.updateQueue=null,D.memoizedState=null)}var $=hp(g);if($!==null){$.flags&=-257,pp($,g,w,f,i),$.mode&1&&fp(f,R,i),i=$,E=R;var V=i.updateQueue;if(V===null){var G=new Set;G.add(E),i.updateQueue=G}else V.add(E);break e}else{if(!(i&1)){fp(f,R,i),oc();break e}E=Error(t(426))}}else if(Ne&&w.mode&1){var Ue=hp(g);if(Ue!==null){!(Ue.flags&65536)&&(Ue.flags|=256),pp(Ue,g,w,f,i),_u(ii(E,w));break e}}f=E=ii(E,w),$e!==4&&($e=2),hs===null?hs=[f]:hs.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var k=cp(f,E,i);Fh(f,k);break e;case 1:w=E;var S=f.type,T=f.stateNode;if(!(f.flags&128)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(jn===null||!jn.has(T)))){f.flags|=65536,i&=-i,f.lanes|=i;var F=dp(f,w,i);Fh(f,F);break e}}f=f.return}while(f!==null)}Vp(o)}catch(K){i=K,je===o&&o!==null&&(je=o=o.return);continue}break}while(!0)}function Bp(){var n=il.current;return il.current=Xo,n===null?Xo:n}function oc(){($e===0||$e===3||$e===2)&&($e=4),Ge===null||!(yr&268435455)&&!(sl&268435455)||Bn(Ge,Xe)}function dl(n,i){var o=ue;ue|=2;var u=Bp();(Ge!==n||Xe!==i)&&(pn=null,wr(n,i));do try{Hw();break}catch(d){$p(n,d)}while(!0);if(vu(),ue=o,il.current=u,je!==null)throw Error(t(261));return Ge=null,Xe=0,$e}function Hw(){for(;je!==null;)Hp(je)}function Vw(){for(;je!==null&&!gv();)Hp(je)}function Hp(n){var i=qp(n.alternate,n,It);n.memoizedProps=n.pendingProps,i===null?Vp(n):je=i,Ju.current=null}function Vp(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=Uw(o,i),o!==null){o.flags&=32767,je=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{$e=6,je=null;return}}else if(o=Fw(o,i,It),o!==null){je=o;return}if(i=i.sibling,i!==null){je=i;return}je=i=n}while(i!==null);$e===0&&($e=5)}function Er(n,i,o){var u=ge,d=Nt.transition;try{Nt.transition=null,ge=1,Gw(n,i,o,u)}finally{Nt.transition=d,ge=u}return null}function Gw(n,i,o,u){do ai();while(Wn!==null);if(ue&6)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=o.lanes|o.childLanes;if(Tv(n,f),n===Ge&&(je=Ge=null,Xe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ll||(ll=!0,Yp(mo,function(){return ai(),null})),f=(o.flags&15990)!==0,o.subtreeFlags&15990||f){f=Nt.transition,Nt.transition=null;var g=ge;ge=1;var w=ue;ue|=4,Ju.current=null,jw(n,o),Mp(o,n),fw(ou),So=!!su,ou=su=null,n.current=o,Ww(o),_v(),ue=w,ge=g,Nt.transition=f}else n.current=o;if(ll&&(ll=!1,Wn=n,al=d),f=n.pendingLanes,f===0&&(jn=null),wv(o.stateNode),pt(n,Fe()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=ec,ec=null,n;return al&1&&n.tag!==0&&ai(),f=n.pendingLanes,f&1?n===tc?ps++:(ps=0,tc=n):ps=0,bn(),null}function ai(){if(Wn!==null){var n=Df(al),i=Nt.transition,o=ge;try{if(Nt.transition=null,ge=16>n?16:n,Wn===null)var u=!1;else{if(n=Wn,Wn=null,al=0,ue&6)throw Error(t(331));var d=ue;for(ue|=4,B=n.current;B!==null;){var f=B,g=f.child;if(B.flags&16){var w=f.deletions;if(w!==null){for(var E=0;E<w.length;E++){var R=w[E];for(B=R;B!==null;){var D=B;switch(D.tag){case 0:case 11:case 15:ds(8,D,f)}var M=D.child;if(M!==null)M.return=D,B=M;else for(;B!==null;){D=B;var A=D.sibling,$=D.return;if(xp(D),D===R){B=null;break}if(A!==null){A.return=$,B=A;break}B=$}}}var V=f.alternate;if(V!==null){var G=V.child;if(G!==null){V.child=null;do{var Ue=G.sibling;G.sibling=null,G=Ue}while(G!==null)}}B=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,B=g;else e:for(;B!==null;){if(f=B,f.flags&2048)switch(f.tag){case 0:case 11:case 15:ds(9,f,f.return)}var k=f.sibling;if(k!==null){k.return=f.return,B=k;break e}B=f.return}}var S=n.current;for(B=S;B!==null;){g=B;var T=g.child;if(g.subtreeFlags&2064&&T!==null)T.return=g,B=T;else e:for(g=S;B!==null;){if(w=B,w.flags&2048)try{switch(w.tag){case 0:case 11:case 15:rl(9,w)}}catch(K){Me(w,w.return,K)}if(w===g){B=null;break e}var F=w.sibling;if(F!==null){F.return=w.return,B=F;break e}B=w.return}}if(ue=d,bn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(go,n)}catch{}u=!0}return u}finally{ge=o,Nt.transition=i}}return!1}function Gp(n,i,o){i=ii(o,i),i=cp(n,i,1),n=Un(n,i,1),i=ot(),n!==null&&(Ui(n,1,i),pt(n,i))}function Me(n,i,o){if(n.tag===3)Gp(n,n,o);else for(;i!==null;){if(i.tag===3){Gp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(jn===null||!jn.has(u))){n=ii(o,n),n=dp(i,n,1),i=Un(i,n,1),n=ot(),i!==null&&(Ui(i,1,n),pt(i,n));break}}i=i.return}}function Kw(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=ot(),n.pingedLanes|=n.suspendedLanes&o,Ge===n&&(Xe&o)===o&&($e===4||$e===3&&(Xe&130023424)===Xe&&500>Fe()-Zu?wr(n,0):Xu|=o),pt(n,i)}function Kp(n,i){i===0&&(n.mode&1?(i=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):i=1);var o=ot();n=dn(n,i),n!==null&&(Ui(n,i,o),pt(n,o))}function qw(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Kp(n,o)}function Yw(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Kp(n,o)}var qp;qp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||ct.current)ft=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return ft=!1,bw(n,i,o);ft=!!(n.flags&131072)}else ft=!1,Ne&&i.flags&1048576&&Rh(i,jo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;tl(n,i),n=i.pendingProps;var d=Qr(i,Ze.current);ni(i,o),d=xu(null,i,u,n,d,o);var f=Au();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,dt(u)?(f=!0,Fo(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Cu(i),d.updater=Zo,i.stateNode=d,d._reactInternals=i,Fu(i,u,n,o),i=Wu(null,i,u,!0,f,o)):(i.tag=0,Ne&&f&&hu(i),st(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Jw(u),n=bt(u,n),d){case 0:i=ju(null,i,u,n,o);break e;case 1:i=wp(null,i,u,n,o);break e;case 11:i=mp(null,i,u,n,o);break e;case 14:i=gp(null,i,u,bt(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),ju(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),wp(n,i,u,d,o);case 3:e:{if(Ep(i),n===null)throw Error(t(387));u=i.pendingProps,f=i.memoizedState,d=f.element,bh(n,i),Go(i,u,null,o);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=ii(Error(t(423)),i),i=Sp(n,i,u,o,d);break e}else if(u!==d){d=ii(Error(t(424)),i),i=Sp(n,i,u,o,d);break e}else for(Ct=Dn(i.stateNode.containerInfo.firstChild),St=i,Ne=!0,Mt=null,o=Lh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Zr(),u===d){i=hn(n,i,o);break e}st(n,i,u,o)}i=i.child}return i;case 5:return zh(i),n===null&&gu(i),u=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,g=d.children,lu(u,d)?g=null:f!==null&&lu(u,f)&&(i.flags|=32),vp(n,i),st(n,i,g,o),i.child;case 6:return n===null&&gu(i),null;case 13:return Cp(n,i,o);case 4:return Iu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ei(i,null,u,o):st(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),mp(n,i,u,d,o);case 7:return st(n,i,i.pendingProps,o),i.child;case 8:return st(n,i,i.pendingProps.children,o),i.child;case 12:return st(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,Ce(Bo,u._currentValue),u._currentValue=g,f!==null)if(Lt(f.value,g)){if(f.children===d.children&&!ct.current){i=hn(n,i,o);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var w=f.dependencies;if(w!==null){g=f.child;for(var E=w.firstContext;E!==null;){if(E.context===u){if(f.tag===1){E=fn(-1,o&-o),E.tag=2;var R=f.updateQueue;if(R!==null){R=R.shared;var D=R.pending;D===null?E.next=E:(E.next=D.next,D.next=E),R.pending=E}}f.lanes|=o,E=f.alternate,E!==null&&(E.lanes|=o),Eu(f.return,o,i),w.lanes|=o;break}E=E.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(t(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Eu(g,o,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}st(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ni(i,o),d=Rt(d),u=u(d),i.flags|=1,st(n,i,u,o),i.child;case 14:return u=i.type,d=bt(u,i.pendingProps),d=bt(u.type,d),gp(n,i,u,d,o);case 15:return _p(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:bt(u,d),tl(n,i),i.tag=1,dt(u)?(n=!0,Fo(i)):n=!1,ni(i,o),ap(i,u,d),Fu(i,u,d,o),Wu(null,i,u,!0,n,o);case 19:return kp(n,i,o);case 22:return yp(n,i,o)}throw Error(t(156,i.tag))};function Yp(n,i){return Pf(n,i)}function Qw(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(n,i,o,u){return new Qw(n,i,o,u)}function lc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jw(n){if(typeof n=="function")return lc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qt)return 11;if(n===Yt)return 14}return 2}function Hn(n,i){var o=n.alternate;return o===null?(o=xt(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function fl(n,i,o,u,d,f){var g=2;if(u=n,typeof n=="function")lc(n)&&(g=1);else if(typeof n=="string")g=5;else e:switch(n){case we:return Sr(o.children,d,f,i);case De:g=8,d|=8;break;case Ee:return n=xt(12,o,i,d|2),n.elementType=Ee,n.lanes=f,n;case vt:return n=xt(13,o,i,d),n.elementType=vt,n.lanes=f,n;case Ot:return n=xt(19,o,i,d),n.elementType=Ot,n.lanes=f,n;case Le:return hl(o,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ze:g=10;break e;case Kt:g=9;break e;case qt:g=11;break e;case Yt:g=14;break e;case ut:g=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=xt(g,o,i,d),i.elementType=n,i.type=u,i.lanes=f,i}function Sr(n,i,o,u){return n=xt(7,n,u,i),n.lanes=o,n}function hl(n,i,o,u){return n=xt(22,n,u,i),n.elementType=Le,n.lanes=o,n.stateNode={isHidden:!1},n}function ac(n,i,o){return n=xt(6,n,null,i),n.lanes=o,n}function uc(n,i,o){return i=xt(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Xw(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function cc(n,i,o,u,d,f,g,w,E){return n=new Xw(n,i,o,w,E),i===1?(i=1,f===!0&&(i|=8)):i=0,f=xt(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(f),n}function Zw(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Qp(n){if(!n)return Mn;n=n._reactInternals;e:{if(cr(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(dt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(dt(o))return Ih(n,o,i)}return i}function Jp(n,i,o,u,d,f,g,w,E){return n=cc(o,u,!0,n,d,f,g,w,E),n.context=Qp(null),o=n.current,u=ot(),d=$n(o),f=fn(u,d),f.callback=i??null,Un(o,f,d),n.current.lanes=d,Ui(n,d,u),pt(n,u),n}function pl(n,i,o,u){var d=i.current,f=ot(),g=$n(d);return o=Qp(o),i.context===null?i.context=o:i.pendingContext=o,i=fn(f,g),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Un(d,i,g),n!==null&&(zt(n,d,g,f),Vo(n,d,g)),g}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function dc(n,i){Xp(n,i),(n=n.alternate)&&Xp(n,i)}var Zp=typeof reportError=="function"?reportError:function(n){console.error(n)};function fc(n){this._internalRoot=n}gl.prototype.render=fc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=fc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;vr(function(){pl(null,n,null,null)}),i[ln]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=bf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<xn.length&&i!==0&&i<xn[o].priority;o++);xn.splice(o,0,n),o===0&&zf(n)}};function hc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function eE(n,i,o,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var R=ml(g);f.call(R)}}var g=Jp(i,u,n,0,null,!1,!1,"",em);return n._reactRootContainer=g,n[ln]=g.current,Xi(n.nodeType===8?n.parentNode:n),vr(),g}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var R=ml(E);w.call(R)}}var E=cc(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=E,n[ln]=E.current,Xi(n.nodeType===8?n.parentNode:n),vr(function(){pl(i,E,o,u)}),E}function yl(n,i,o,u,d){var f=o._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var w=d;d=function(){var E=ml(g);w.call(E)}}pl(i,g,n,d)}else g=eE(o,i,n,d,u);return ml(g)}Lf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Fi(i.pendingLanes);o!==0&&(Fa(i,o|1),pt(i,Fe()),!(ue&6)&&(li=Fe()+500,bn()))}break;case 13:vr(function(){var u=dn(n,1);if(u!==null){var d=ot();zt(u,n,1,d)}}),dc(n,1)}},Ua=function(n){if(n.tag===13){var i=dn(n,134217728);if(i!==null){var o=ot();zt(i,n,134217728,o)}dc(n,134217728)}},Mf=function(n){if(n.tag===13){var i=$n(n),o=dn(n,i);if(o!==null){var u=ot();zt(o,n,i,u)}dc(n,i)}},bf=function(){return ge},Ff=function(n,i){var o=ge;try{return ge=n,i()}finally{ge=o}},xa=function(n,i,o){switch(i){case"input":if(Sa(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Mo(u);if(!d)throw Error(t(90));lf(u),Sa(u,d)}}}break;case"textarea":ff(n,o);break;case"select":i=o.value,i!=null&&Ur(n,!!o.multiple,i,!1)}},Ef=ic,Sf=vr;var tE={usingClientEntryPoint:!1,Events:[ts,qr,Mo,vf,wf,ic]},ms={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tf(n),n===null?null:n.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{go=vl.inject(nE),Qt=vl}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE,mt.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(i))throw Error(t(200));return Zw(n,i,null,o)},mt.createRoot=function(n,i){if(!hc(n))throw Error(t(299));var o=!1,u="",d=Zp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=cc(n,1,!1,null,null,o,!1,u,d),n[ln]=i.current,Xi(n.nodeType===8?n.parentNode:n),new fc(i)},mt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Tf(i),n=n===null?null:n.stateNode,n},mt.flushSync=function(n){return vr(n)},mt.hydrate=function(n,i,o){if(!_l(i))throw Error(t(200));return yl(null,n,i,!0,o)},mt.hydrateRoot=function(n,i,o){if(!hc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,f="",g=Zp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),i=Jp(i,null,n,1,o??null,d,!1,f,g),n[ln]=i.current,Xi(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new gl(i)},mt.render=function(n,i,o){if(!_l(i))throw Error(t(200));return yl(null,n,i,!1,o)},mt.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(vr(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[ln]=null})}),!0):!1},mt.unstable_batchedUpdates=ic,mt.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!_l(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,o,!1,u)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var am;function hE(){if(am)return gc.exports;am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gc.exports=fE(),gc.exports}var um;function pE(){if(um)return El;um=1;var r=hE();return El.createRoot=r.createRoot,El.hydrateRoot=r.hydrateRoot,El}var mE=pE();const gE="modulepreload",_E=function(r){return"/DIRI_sesion8/"+r},cm={},ra=function(e,t,s){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));l=Promise.allSettled(t.map(p=>{if(p=_E(p),p in cm)return;cm[p]=!0;const m=p.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":gE,m||(y.as="script"),y.crossOrigin="",y.href=p,h&&y.setAttribute("nonce",h),document.head.appendChild(y),m)return new Promise((_,P)=>{y.addEventListener("load",_),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${p}`)))})}))}function a(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return l.then(c=>{for(const h of c||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};var _s={},dm;function yE(){if(dm)return _s;dm=1,Object.defineProperty(_s,"__esModule",{value:!0}),_s.parse=c,_s.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,a=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function c(_,P){const I=new a,x=_.length;if(x<2)return I;const L=(P==null?void 0:P.decode)||v;let b=0;do{const j=_.indexOf("=",b);if(j===-1)break;const q=_.indexOf(";",b),te=q===-1?x:q;if(j>te){b=_.lastIndexOf(";",j-1)+1;continue}const pe=h(_,b,j),ve=p(_,j,pe),we=_.slice(pe,ve);if(I[we]===void 0){let De=h(_,j+1,te),Ee=p(_,te,De);const ze=L(_.slice(De,Ee));I[we]=ze}b=te+1}while(b<x);return I}function h(_,P,I){do{const x=_.charCodeAt(P);if(x!==32&&x!==9)return P}while(++P<I);return I}function p(_,P,I){for(;P>I;){const x=_.charCodeAt(--P);if(x!==32&&x!==9)return P+1}return I}function m(_,P,I){const x=(I==null?void 0:I.encode)||encodeURIComponent;if(!r.test(_))throw new TypeError(`argument name is invalid: ${_}`);const L=x(P);if(!e.test(L))throw new TypeError(`argument val is invalid: ${P}`);let b=_+"="+L;if(!I)return b;if(I.maxAge!==void 0){if(!Number.isInteger(I.maxAge))throw new TypeError(`option maxAge is invalid: ${I.maxAge}`);b+="; Max-Age="+I.maxAge}if(I.domain){if(!t.test(I.domain))throw new TypeError(`option domain is invalid: ${I.domain}`);b+="; Domain="+I.domain}if(I.path){if(!s.test(I.path))throw new TypeError(`option path is invalid: ${I.path}`);b+="; Path="+I.path}if(I.expires){if(!y(I.expires)||!Number.isFinite(I.expires.valueOf()))throw new TypeError(`option expires is invalid: ${I.expires}`);b+="; Expires="+I.expires.toUTCString()}if(I.httpOnly&&(b+="; HttpOnly"),I.secure&&(b+="; Secure"),I.partitioned&&(b+="; Partitioned"),I.priority)switch(typeof I.priority=="string"?I.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${I.priority}`)}if(I.sameSite)switch(typeof I.sameSite=="string"?I.sameSite.toLowerCase():I.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${I.sameSite}`)}return b}function v(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function y(_){return l.call(_)==="[object Date]"}return _s}yE();var fm="popstate";function vE(r={}){function e(s,l){let{pathname:a,search:c,hash:h}=s.location;return Mc("",{pathname:a,search:c,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(s,l){return typeof l=="string"?l:Ls(l)}return EE(e,t,null,r)}function xe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ht(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wE(){return Math.random().toString(36).substring(2,10)}function hm(r,e){return{usr:r.state,key:r.key,idx:e}}function Mc(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ei(e):e,state:t,key:e&&e.key||s||wE()}}function Ls({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ei(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function EE(r,e,t,s={}){let{window:l=document.defaultView,v5Compat:a=!1}=s,c=l.history,h="POP",p=null,m=v();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function v(){return(c.state||{idx:null}).idx}function y(){h="POP";let L=v(),b=L==null?null:L-m;m=L,p&&p({action:h,location:x.location,delta:b})}function _(L,b){h="PUSH";let j=Mc(x.location,L,b);m=v()+1;let q=hm(j,m),te=x.createHref(j);try{c.pushState(q,"",te)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;l.location.assign(te)}a&&p&&p({action:h,location:x.location,delta:1})}function P(L,b){h="REPLACE";let j=Mc(x.location,L,b);m=v();let q=hm(j,m),te=x.createHref(j);c.replaceState(q,"",te),a&&p&&p({action:h,location:x.location,delta:0})}function I(L){return SE(L)}let x={get action(){return h},get location(){return r(l,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(fm,y),p=L,()=>{l.removeEventListener(fm,y),p=null}},createHref(L){return e(l,L)},createURL:I,encodeLocation(L){let b=I(L);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:_,replace:P,go(L){return c.go(L)}};return x}function SE(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),xe(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ls(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Pg(r,e,t="/"){return CE(r,e,t,!1)}function CE(r,e,t,s){let l=typeof e=="string"?Ei(e):e,a=En(l.pathname||"/",t);if(a==null)return null;let c=Ng(r);IE(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=ME(a);h=DE(c[p],m,s)}return h}function Ng(r,e=[],t=[],s=""){let l=(a,c,h)=>{let p={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(xe(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=yn([s,p.relativePath]),v=t.concat(p);a.children&&a.children.length>0&&(xe(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ng(a.children,e,v,m)),!(a.path==null&&!a.index)&&e.push({path:m,score:AE(m,a.index),routesMeta:v})};return r.forEach((a,c)=>{var h;if(a.path===""||!((h=a.path)!=null&&h.includes("?")))l(a,c);else for(let p of xg(a.path))l(a,c,p)}),e}function xg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,l=t.endsWith("?"),a=t.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let c=xg(s.join("/")),h=[];return h.push(...c.map(p=>p===""?a:[a,p].join("/"))),l&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function IE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:OE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var kE=/^:[\w-]+$/,TE=3,RE=2,PE=1,NE=10,xE=-2,pm=r=>r==="*";function AE(r,e){let t=r.split("/"),s=t.length;return t.some(pm)&&(s+=xE),e&&(s+=RE),t.filter(l=>!pm(l)).reduce((l,a)=>l+(kE.test(a)?TE:a===""?PE:NE),s)}function OE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function DE(r,e,t=!1){let{routesMeta:s}=r,l={},a="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,v=a==="/"?e:e.slice(a.length)||"/",y=Dl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),_=p.route;if(!y&&m&&t&&!s[s.length-1].route.index&&(y=Dl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!y)return null;Object.assign(l,y.params),c.push({params:l,pathname:yn([a,y.pathname]),pathnameBase:zE(yn([a,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(a=yn([a,y.pathnameBase]))}return c}function Dl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=LE(r.path,r.caseSensitive,r.end),l=e.match(t);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:y},_)=>{if(v==="*"){let I=h[_]||"";c=a.slice(0,a.length-I.length).replace(/(.)\/+$/,"$1")}const P=h[_];return y&&!P?m[v]=void 0:m[v]=(P||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:c,pattern:r}}function LE(r,e=!1,t=!0){Ht(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function ME(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ht(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function En(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function bE(r,e="/"){let{pathname:t,search:s="",hash:l=""}=typeof r=="string"?Ei(r):r;return{pathname:t?t.startsWith("/")?t:FE(t,e):e,search:jE(s),hash:WE(l)}}function FE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function vc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function UE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ld(r){let e=UE(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function ad(r,e,t,s=!1){let l;typeof r=="string"?l=Ei(r):(l={...r},xe(!l.pathname||!l.pathname.includes("?"),vc("?","pathname","search",l)),xe(!l.pathname||!l.pathname.includes("#"),vc("#","pathname","hash",l)),xe(!l.search||!l.search.includes("#"),vc("#","search","hash",l)));let a=r===""||l.pathname==="",c=a?"/":l.pathname,h;if(c==null)h=t;else{let y=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),y-=1;l.pathname=_.join("/")}h=y>=0?e[y]:"/"}let p=bE(l,h),m=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var yn=r=>r.join("/").replace(/\/\/+/g,"/"),zE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),jE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,WE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function $E(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Ag=["POST","PUT","PATCH","DELETE"];new Set(Ag);var BE=["GET",...Ag];new Set(BE);var Si=N.createContext(null);Si.displayName="DataRouter";var ia=N.createContext(null);ia.displayName="DataRouterState";var Og=N.createContext({isTransitioning:!1});Og.displayName="ViewTransition";var HE=N.createContext(new Map);HE.displayName="Fetchers";var VE=N.createContext(null);VE.displayName="Await";var Gt=N.createContext(null);Gt.displayName="Navigation";var Ys=N.createContext(null);Ys.displayName="Location";var on=N.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var ud=N.createContext(null);ud.displayName="RouteError";function GE(r,{relative:e}={}){xe(Ci(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=N.useContext(Gt),{hash:l,pathname:a,search:c}=Qs(r,{relative:e}),h=a;return t!=="/"&&(h=a==="/"?t:yn([t,a])),s.createHref({pathname:h,search:c,hash:l})}function Ci(){return N.useContext(Ys)!=null}function or(){return xe(Ci(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Ys).location}var Dg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lg(r){N.useContext(Gt).static||N.useLayoutEffect(r)}function cd(){let{isDataRoute:r}=N.useContext(on);return r?sS():KE()}function KE(){xe(Ci(),"useNavigate() may be used only in the context of a <Router> component.");let r=N.useContext(Si),{basename:e,navigator:t}=N.useContext(Gt),{matches:s}=N.useContext(on),{pathname:l}=or(),a=JSON.stringify(ld(s)),c=N.useRef(!1);return Lg(()=>{c.current=!0}),N.useCallback((p,m={})=>{if(Ht(c.current,Dg),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=ad(p,JSON.parse(a),l,m.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:yn([e,v.pathname])),(m.replace?t.replace:t.push)(v,m.state,m)},[e,t,a,l,r])}N.createContext(null);function Qs(r,{relative:e}={}){let{matches:t}=N.useContext(on),{pathname:s}=or(),l=JSON.stringify(ld(t));return N.useMemo(()=>ad(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function qE(r,e){return Mg(r,e)}function Mg(r,e,t,s){var b;xe(Ci(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=N.useContext(Gt),{matches:a}=N.useContext(on),c=a[a.length-1],h=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",v=c&&c.route;{let j=v&&v.path||"";bg(p,!v||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let y=or(),_;if(e){let j=typeof e=="string"?Ei(e):e;xe(m==="/"||((b=j.pathname)==null?void 0:b.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${j.pathname}" was given in the \`location\` prop.`),_=j}else _=y;let P=_.pathname||"/",I=P;if(m!=="/"){let j=m.replace(/^\//,"").split("/");I="/"+P.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=Pg(r,{pathname:I});Ht(v||x!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ht(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=ZE(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},h,j.params),pathname:yn([m,l.encodeLocation?l.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?m:yn([m,l.encodeLocation?l.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,t,s);return e&&L?N.createElement(Ys.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},L):L}function YE(){let r=iS(),e=$E(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"ErrorBoundary")," or"," ",N.createElement("code",{style:a},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),t?N.createElement("pre",{style:l},t):null,c)}var QE=N.createElement(YE,null),JE=class extends N.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?N.createElement(on.Provider,{value:this.props.routeContext},N.createElement(ud.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function XE({routeContext:r,match:e,children:t}){let s=N.useContext(Si);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(on.Provider,{value:r},t)}function ZE(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,a=t==null?void 0:t.errors;if(a!=null){let p=l.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);xe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,h=-1;if(t)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:v,errors:y}=t,_=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||_){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,v)=>{let y,_=!1,P=null,I=null;t&&(y=a&&m.route.id?a[m.route.id]:void 0,P=m.route.errorElement||QE,c&&(h<0&&v===0?(bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,I=null):h===v&&(_=!0,I=m.route.hydrateFallbackElement||null)));let x=e.concat(l.slice(0,v+1)),L=()=>{let b;return y?b=P:_?b=I:m.route.Component?b=N.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=p,N.createElement(XE,{match:m,routeContext:{outlet:p,matches:x,isDataRoute:t!=null},children:b})};return t&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?N.createElement(JE,{location:t.location,revalidation:t.revalidation,component:P,error:y,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):L()},null)}function dd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eS(r){let e=N.useContext(Si);return xe(e,dd(r)),e}function tS(r){let e=N.useContext(ia);return xe(e,dd(r)),e}function nS(r){let e=N.useContext(on);return xe(e,dd(r)),e}function fd(r){let e=nS(r),t=e.matches[e.matches.length-1];return xe(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function rS(){return fd("useRouteId")}function iS(){var s;let r=N.useContext(ud),e=tS("useRouteError"),t=fd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function sS(){let{router:r}=eS("useNavigate"),e=fd("useNavigate"),t=N.useRef(!1);return Lg(()=>{t.current=!0}),N.useCallback(async(l,a={})=>{Ht(t.current,Dg),t.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...a}))},[r,e])}var mm={};function bg(r,e,t){!e&&!mm[r]&&(mm[r]=!0,Ht(!1,t))}N.memo(oS);function oS({routes:r,future:e,state:t}){return Mg(r,void 0,t,e)}function Ll({to:r,replace:e,state:t,relative:s}){xe(Ci(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=N.useContext(Gt);Ht(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=N.useContext(on),{pathname:c}=or(),h=cd(),p=ad(r,ld(a),c,s==="path"),m=JSON.stringify(p);return N.useEffect(()=>{h(JSON.parse(m),{replace:e,state:t,relative:s})},[h,m,s,e,t]),null}function Cr(r){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lS({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:l,static:a=!1}){xe(!Ci(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),h=N.useMemo(()=>({basename:c,navigator:l,static:a,future:{}}),[c,l,a]);typeof t=="string"&&(t=Ei(t));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:_="default"}=t,P=N.useMemo(()=>{let I=En(p,c);return I==null?null:{location:{pathname:I,search:m,hash:v,state:y,key:_},navigationType:s}},[c,p,m,v,y,_,s]);return Ht(P!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:N.createElement(Gt.Provider,{value:h},N.createElement(Ys.Provider,{children:e,value:P}))}function aS({children:r,location:e}){return qE(bc(r),e)}function bc(r,e=[]){let t=[];return N.Children.forEach(r,(s,l)=>{if(!N.isValidElement(s))return;let a=[...e,l];if(s.type===N.Fragment){t.push.apply(t,bc(s.props.children,a));return}xe(s.type===Cr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=bc(s.props.children,a)),t.push(c)}),t}var Tl="get",Rl="application/x-www-form-urlencoded";function sa(r){return r!=null&&typeof r.tagName=="string"}function uS(r){return sa(r)&&r.tagName.toLowerCase()==="button"}function cS(r){return sa(r)&&r.tagName.toLowerCase()==="form"}function dS(r){return sa(r)&&r.tagName.toLowerCase()==="input"}function fS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function hS(r,e){return r.button===0&&(!e||e==="_self")&&!fS(r)}var Sl=null;function pS(){if(Sl===null)try{new FormData(document.createElement("form"),0),Sl=!1}catch{Sl=!0}return Sl}var mS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wc(r){return r!=null&&!mS.has(r)?(Ht(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rl}"`),null):r}function gS(r,e){let t,s,l,a,c;if(cS(r)){let h=r.getAttribute("action");s=h?En(h,e):null,t=r.getAttribute("method")||Tl,l=wc(r.getAttribute("enctype"))||Rl,a=new FormData(r)}else if(uS(r)||dS(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?En(p,e):null,t=r.getAttribute("formmethod")||h.getAttribute("method")||Tl,l=wc(r.getAttribute("formenctype"))||wc(h.getAttribute("enctype"))||Rl,a=new FormData(h,r),!pS()){let{name:m,type:v,value:y}=r;if(v==="image"){let _=m?`${m}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else m&&a.append(m,y)}}else{if(sa(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Tl,s=null,l=Rl,c=r}return a&&l==="text/plain"&&(c=a,a=void 0),{action:s,method:t.toLowerCase(),encType:l,formData:a,body:c}}function hd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function _S(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function vS(r,e,t){let s=await Promise.all(r.map(async l=>{let a=e.routes[l.route.id];if(a){let c=await _S(a,t);return c.links?c.links():[]}return[]}));return CS(s.flat(1).filter(yS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function gm(r,e,t,s,l,a){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,h=(p,m)=>{var v;return t[m].pathname!==p.pathname||((v=t[m].route.path)==null?void 0:v.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):a==="data"?e.filter((p,m)=>{var y;let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=t[0])==null?void 0:y.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function wS(r,e,{includeHydrateFallback:t}={}){return ES(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let a=[l.module];return l.clientActionModule&&(a=a.concat(l.clientActionModule)),l.clientLoaderModule&&(a=a.concat(l.clientLoaderModule)),t&&l.hydrateFallbackModule&&(a=a.concat(l.hydrateFallbackModule)),l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function ES(r){return[...new Set(r)]}function SS(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function CS(r,e){let t=new Set;return new Set(e),r.reduce((s,l)=>{let a=JSON.stringify(SS(l));return t.has(a)||(t.add(a),s.push({key:a,link:l})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var IS=new Set([100,101,204,205]);function kS(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&En(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Fg(){let r=N.useContext(Si);return hd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function TS(){let r=N.useContext(ia);return hd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var pd=N.createContext(void 0);pd.displayName="FrameworkContext";function Ug(){let r=N.useContext(pd);return hd(r,"You must render this element inside a <HydratedRouter> element"),r}function RS(r,e){let t=N.useContext(pd),[s,l]=N.useState(!1),[a,c]=N.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:y}=e,_=N.useRef(null);N.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let x=b=>{b.forEach(j=>{c(j.isIntersecting)})},L=new IntersectionObserver(x,{threshold:.5});return _.current&&L.observe(_.current),()=>{L.disconnect()}}},[r]),N.useEffect(()=>{if(s){let x=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(x)}}},[s]);let P=()=>{l(!0)},I=()=>{l(!1),c(!1)};return t?r!=="intent"?[a,_,{}]:[a,_,{onFocus:ys(h,P),onBlur:ys(p,I),onMouseEnter:ys(m,P),onMouseLeave:ys(v,I),onTouchStart:ys(y,P)}]:[!1,_,{}]}function ys(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function PS({page:r,...e}){let{router:t}=Fg(),s=N.useMemo(()=>Pg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?N.createElement(xS,{page:r,matches:s,...e}):null}function NS(r){let{manifest:e,routeModules:t}=Ug(),[s,l]=N.useState([]);return N.useEffect(()=>{let a=!1;return vS(r,e,t).then(c=>{a||l(c)}),()=>{a=!0}},[r,e,t]),s}function xS({page:r,matches:e,...t}){let s=or(),{manifest:l,routeModules:a}=Ug(),{basename:c}=Fg(),{loaderData:h,matches:p}=TS(),m=N.useMemo(()=>gm(r,e,p,l,s,"data"),[r,e,p,l,s]),v=N.useMemo(()=>gm(r,e,p,l,s,"assets"),[r,e,p,l,s]),y=N.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let I=new Set,x=!1;if(e.forEach(b=>{var q;let j=l.routes[b.route.id];!j||!j.hasLoader||(!m.some(te=>te.route.id===b.route.id)&&b.route.id in h&&((q=a[b.route.id])!=null&&q.shouldRevalidate)||j.hasClientLoader?x=!0:I.add(b.route.id))}),I.size===0)return[];let L=kS(r,c);return x&&I.size>0&&L.searchParams.set("_routes",e.filter(b=>I.has(b.route.id)).map(b=>b.route.id).join(",")),[L.pathname+L.search]},[c,h,s,l,m,e,r,a]),_=N.useMemo(()=>wS(v,l),[v,l]),P=NS(v);return N.createElement(N.Fragment,null,y.map(I=>N.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...t})),_.map(I=>N.createElement("link",{key:I,rel:"modulepreload",href:I,...t})),P.map(({key:I,link:x})=>N.createElement("link",{key:I,...x})))}function AS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zg&&(window.__reactRouterVersion="7.6.1")}catch{}function OS({basename:r,children:e,window:t}){let s=N.useRef();s.current==null&&(s.current=vE({window:t,v5Compat:!0}));let l=s.current,[a,c]=N.useState({action:l.action,location:l.location}),h=N.useCallback(p=>{N.startTransition(()=>c(p))},[c]);return N.useLayoutEffect(()=>l.listen(h),[l,h]),N.createElement(lS,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:l})}var jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tr=N.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:l,reloadDocument:a,replace:c,state:h,target:p,to:m,preventScrollReset:v,viewTransition:y,..._},P){let{basename:I}=N.useContext(Gt),x=typeof m=="string"&&jg.test(m),L,b=!1;if(typeof m=="string"&&x&&(L=m,zg))try{let Ee=new URL(window.location.href),ze=m.startsWith("//")?new URL(Ee.protocol+m):new URL(m),Kt=En(ze.pathname,I);ze.origin===Ee.origin&&Kt!=null?m=Kt+ze.search+ze.hash:b=!0}catch{Ht(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=GE(m,{relative:l}),[q,te,pe]=RS(s,_),ve=bS(m,{replace:c,state:h,target:p,preventScrollReset:v,relative:l,viewTransition:y});function we(Ee){e&&e(Ee),Ee.defaultPrevented||ve(Ee)}let De=N.createElement("a",{..._,...pe,href:L||j,onClick:b||a?e:we,ref:AS(P,te),target:p,"data-discover":!x&&t==="render"?"true":void 0});return q&&!x?N.createElement(N.Fragment,null,De,N.createElement(PS,{page:j})):De});Tr.displayName="Link";var DS=N.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:h,children:p,...m},v){let y=Qs(c,{relative:m.relative}),_=or(),P=N.useContext(ia),{navigator:I,basename:x}=N.useContext(Gt),L=P!=null&&WS(y)&&h===!0,b=I.encodeLocation?I.encodeLocation(y).pathname:y.pathname,j=_.pathname,q=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;t||(j=j.toLowerCase(),q=q?q.toLowerCase():null,b=b.toLowerCase()),q&&x&&(q=En(q,x)||q);const te=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let pe=j===b||!l&&j.startsWith(b)&&j.charAt(te)==="/",ve=q!=null&&(q===b||!l&&q.startsWith(b)&&q.charAt(b.length)==="/"),we={isActive:pe,isPending:ve,isTransitioning:L},De=pe?e:void 0,Ee;typeof s=="function"?Ee=s(we):Ee=[s,pe?"active":null,ve?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let ze=typeof a=="function"?a(we):a;return N.createElement(Tr,{...m,"aria-current":De,className:Ee,ref:v,style:ze,to:c,viewTransition:h},typeof p=="function"?p(we):p)});DS.displayName="NavLink";var LS=N.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:l,state:a,method:c=Tl,action:h,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:y,..._},P)=>{let I=zS(),x=jS(h,{relative:m}),L=c.toLowerCase()==="get"?"get":"post",b=typeof h=="string"&&jg.test(h),j=q=>{if(p&&p(q),q.defaultPrevented)return;q.preventDefault();let te=q.nativeEvent.submitter,pe=(te==null?void 0:te.getAttribute("formmethod"))||c;I(te||q.currentTarget,{fetcherKey:e,method:pe,navigate:t,replace:l,state:a,relative:m,preventScrollReset:v,viewTransition:y})};return N.createElement("form",{ref:P,method:L,action:x,onSubmit:s?p:j,..._,"data-discover":!b&&r==="render"?"true":void 0})});LS.displayName="Form";function MS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wg(r){let e=N.useContext(Si);return xe(e,MS(r)),e}function bS(r,{target:e,replace:t,state:s,preventScrollReset:l,relative:a,viewTransition:c}={}){let h=cd(),p=or(),m=Qs(r,{relative:a});return N.useCallback(v=>{if(hS(v,e)){v.preventDefault();let y=t!==void 0?t:Ls(p)===Ls(m);h(r,{replace:y,state:s,preventScrollReset:l,relative:a,viewTransition:c})}},[p,h,m,t,s,e,r,l,a,c])}var FS=0,US=()=>`__${String(++FS)}__`;function zS(){let{router:r}=Wg("useSubmit"),{basename:e}=N.useContext(Gt),t=rS();return N.useCallback(async(s,l={})=>{let{action:a,method:c,encType:h,formData:p,body:m}=gS(s,e);if(l.navigate===!1){let v=l.fetcherKey||US();await r.fetch(v,t,l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||h,flushSync:l.flushSync})}else await r.navigate(l.action||a,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:t,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,t])}function jS(r,{relative:e}={}){let{basename:t}=N.useContext(Gt),s=N.useContext(on);xe(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),a={...Qs(r||".",{relative:e})},c=or();if(r==null){a.search=c.search;let h=new URLSearchParams(a.search),p=h.getAll("index");if(p.some(v=>v==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let v=h.toString();a.search=v?`?${v}`:""}}return(!r||r===".")&&l.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:yn([t,a.pathname])),Ls(a)}function WS(r,e={}){let t=N.useContext(Og);xe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Wg("useViewTransitionState"),l=Qs(r,{relative:e.relative});if(!t.isTransitioning)return!1;let a=En(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=En(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Dl(l.pathname,c)!=null||Dl(l.pathname,a)!=null}[...IS];let $S=class{constructor(e="debug"){wl(this,"levels");wl(this,"currentLevel");this.levels=["debug","info","warn","error"],this.currentLevel=e,this.currentLevel="info"}setLevel(e){this.levels.includes(e)?this.currentLevel=e:console.error(`[LOGGER] Nivel de log no válido: ${e}. Usando nivel actual: ${this.currentLevel}`)}log(e,t,s){const l=this.levels.indexOf(e),a=this.levels.indexOf(this.currentLevel);if(l>=a){const c=new Date().toISOString(),h=`[${e.toUpperCase()}] ${c}: ${t}`;s?console[e](h,s):console[e](h)}}debug(e,t){this.log("debug",e,t)}info(e,t){this.log("info",e,t)}warn(e,t){this.log("warn",e,t)}error(e,t,s){let l=e;t instanceof Error?l+=` - Error: ${t.message}${t.stack?`
Stack: ${t.stack}`:""}`:t&&(l+=` - Details: ${JSON.stringify(t)}`),this.log("error",l,s)}};const ie=new $S("debug"),$g=N.createContext(void 0),BS=()=>{const r=N.useContext($g);if(r===void 0)throw new Error("useMenu must be used within a MenuProvider");return r},HS=({children:r,initialItems:e})=>{const[t,s]=N.useState(e),l=(a,c)=>{ie.info(`Procesando pedido para ítem ID: ${a}, Cantidad: ${c}`,{action:"updateStock",id:a,orderedQuantity:c}),s(h=>h.map(p=>{if(p.id===a){const m=p.quantity-c;return ie.debug(`Stock actualizado para ${p.name}`,{oldQty:p.quantity,newQty:m}),{...p,quantity:m>=0?m:0}}return p}))};return z.jsx($g.Provider,{value:{menuItems:t,updateStock:l},children:r})},VS=()=>{};var _m={};/**
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
 */const Bg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(r,e){if(!r)throw Ii(e)},Ii=function(r){return new Error("Firebase Database ("+Bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Hg=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},GS=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const l=r[t++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[t++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[t++],c=r[t++],h=r[t++],p=((l&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[t++],c=r[t++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|c&63)}}return e.join("")},md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],c=l+1<r.length,h=c?r[l+1]:0,p=l+2<r.length,m=p?r[l+2]:0,v=a>>2,y=(a&3)<<4|h>>4;let _=(h&15)<<2|m>>6,P=m&63;p||(P=64,c||(_=64)),s.push(t[v],t[y],t[_],t[P])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Hg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):GS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=t[r.charAt(l++)],h=l<r.length?t[r.charAt(l)]:0;++l;const m=l<r.length?t[r.charAt(l)]:64;++l;const y=l<r.length?t[r.charAt(l)]:64;if(++l,a==null||h==null||m==null||y==null)throw new KS;const _=a<<2|h>>4;if(s.push(_),m!==64){const P=h<<4&240|m>>2;if(s.push(P),y!==64){const I=m<<6&192|y;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class KS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vg=function(r){const e=Hg(r);return md.encodeByteArray(e,!0)},Ml=function(r){return Vg(r).replace(/\./g,"")},bl=function(r){try{return md.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qS(r){return Gg(void 0,r)}function Gg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!YS(t)||(r[t]=Gg(r[t],e[t]));return r}function YS(r){return r!=="__proto__"}/**
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
 */function QS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JS=()=>QS().__FIREBASE_DEFAULTS__,XS=()=>{if(typeof process>"u"||typeof _m>"u")return;const r=_m.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ZS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&bl(r[1]);return e&&JSON.parse(e)},gd=()=>{try{return VS()||JS()||XS()||ZS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kg=r=>{var e,t;return(t=(e=gd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},eC=r=>{const e=Kg(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qg=()=>{var r;return(r=gd())===null||r===void 0?void 0:r.config},Yg=r=>{var e;return(e=gd())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Js(r){return r.endsWith(".cloudworkstations.dev")}async function Qg(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function tC(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ml(JSON.stringify(t)),Ml(JSON.stringify(c)),""].join(".")}const Rs={};function nC(){const r={prod:[],emulator:[]};for(const e of Object.keys(Rs))Rs[e]?r.emulator.push(e):r.prod.push(e);return r}function rC(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let ym=!1;function Jg(r,e){if(typeof window>"u"||typeof document>"u"||!Js(window.location.host)||Rs[r]===e||Rs[r]||ym)return;Rs[r]=e;function t(_){return`__firebase__banner__${_}`}const s="__firebase__banner",a=nC().prod.length>0;function c(){const _=document.getElementById(s);_&&_.remove()}function h(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,P){_.setAttribute("width","24"),_.setAttribute("id",P),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function m(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{ym=!0,c()},_}function v(_,P){_.setAttribute("id",P),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=rC(s),P=t("text"),I=document.getElementById(P)||document.createElement("span"),x=t("learnmore"),L=document.getElementById(x)||document.createElement("a"),b=t("preprendIcon"),j=document.getElementById(b)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const q=_.element;h(q),v(L,x);const te=m();p(j,b),q.append(j,I,L,te),document.body.appendChild(q)}a?(I.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function iC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sC(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Xg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oC(){const r=at();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function lC(){return Bg.NODE_ADMIN===!0}function aC(){try{return typeof indexedDB=="object"}catch{return!1}}function uC(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{t=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const cC="FirebaseError";class lr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=cC,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},l=`${this.service}/${e}`,a=this.errors[e],c=a?dC(a,s):"Error",h=`${this.serviceName}: ${c} (${l}).`;return new lr(l,h,s)}}function dC(r,e){return r.replace(fC,(t,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const fC=/\{\$([^}]+)}/g;/**
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
 */function Ms(r){return JSON.parse(r)}function Be(r){return JSON.stringify(r)}/**
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
 */const Zg=function(r){let e={},t={},s={},l="";try{const a=r.split(".");e=Ms(bl(a[0])||""),t=Ms(bl(a[1])||""),l=a[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:l}},hC=function(r){const e=Zg(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},pC=function(r){const e=Zg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function gi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Fc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fl(r,e,t){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(t,r[l],l,r));return s}function Nr(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const l of t){if(!s.includes(l))return!1;const a=r[l],c=e[l];if(vm(a)&&vm(c)){if(!Nr(a,c))return!1}else if(a!==c)return!1}for(const l of s)if(!t.includes(l))return!1;return!0}function vm(r){return r!==null&&typeof r=="object"}/**
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
 */function ki(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ks(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,a]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(a)}}),e}function Ts(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
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
 */class mC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let y=0;y<16;y++)s[y]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let y=16;y<80;y++){const _=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(_<<1|_>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,v;for(let y=0;y<80;y++){y<40?y<20?(m=h^a&(c^h),v=1518500249):(m=a^c^h,v=1859775393):y<60?(m=a&c|h&(a|c),v=2400959708):(m=a^c^h,v=3395469782);const _=(l<<5|l>>>27)+m+p+v+s[y]&4294967295;p=h,h=c,c=(a<<30|a>>>2)&4294967295,a=l,l=_}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let l=0;const a=this.buf_;let c=this.inbuf_;for(;l<t;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<t;)if(a[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}else for(;l<t;)if(a[c]=e[l],++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function gC(r,e){const t=new _C(r,e);return t.subscribe.bind(t)}class _C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let l;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");yC(e,["next","error","complete"])?l=e:l={next:e,error:t,complete:s},l.next===void 0&&(l.next=Ec),l.error===void 0&&(l.error=Ec),l.complete===void 0&&(l.complete=Ec);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yC(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ec(){}function yd(r,e){return`${r} failed: ${e} argument `}/**
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
 */const vC=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(a<<10)+c}l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):l<65536?(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},la=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function it(r){return r&&r._delegate?r._delegate:r}class xr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class wC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new oa;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:t});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SC(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);s===h&&c.resolve(l)}return l}onInit(e,t){var s;const l=this.normalizeInstanceIdentifier(t),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const c=this.instances.get(l);return c&&e(c,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const l of s)try{l(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:EC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EC(r){return r===Ir?void 0:r}function SC(r){return r.instantiationMode==="EAGER"}/**
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
 */class CC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_e||(_e={}));const IC={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},kC=_e.INFO,TC={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},RC=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=TC[e];if(l)console[l](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vd{constructor(e){this.name=e,this._logLevel=kC,this._logHandler=RC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const PC=(r,e)=>e.some(t=>r instanceof t);let wm,Em;function NC(){return wm||(wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xC(){return Em||(Em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e_=new WeakMap,Uc=new WeakMap,t_=new WeakMap,Sc=new WeakMap,wd=new WeakMap;function AC(r){const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{t(Jn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&e_.set(t,r)}).catch(()=>{}),wd.set(e,r),e}function OC(r){if(Uc.has(r))return;const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{t(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});Uc.set(r,e)}let zc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Uc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||t_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function DC(r){zc=r(zc)}function LC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Cc(this),e,...t);return t_.set(s,e.sort?e.sort():[e]),Jn(s)}:xC().includes(r)?function(...e){return r.apply(Cc(this),e),Jn(e_.get(this))}:function(...e){return Jn(r.apply(Cc(this),e))}}function MC(r){return typeof r=="function"?LC(r):(r instanceof IDBTransaction&&OC(r),PC(r,NC())?new Proxy(r,zc):r)}function Jn(r){if(r instanceof IDBRequest)return AC(r);if(Sc.has(r))return Sc.get(r);const e=MC(r);return e!==r&&(Sc.set(r,e),wd.set(e,r)),e}const Cc=r=>wd.get(r);function bC(r,e,{blocked:t,upgrade:s,blocking:l,terminated:a}={}){const c=indexedDB.open(r,e),h=Jn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Jn(c.result),p.oldVersion,p.newVersion,Jn(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{a&&p.addEventListener("close",()=>a()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const FC=["get","getKey","getAll","getAllKeys","count"],UC=["put","add","delete","clear"],Ic=new Map;function Sm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,l=UC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(l||FC.includes(t)))return;const a=async function(c,...h){const p=this.transaction(c,l?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),l&&p.done]))[0]};return Ic.set(e,a),a}DC(r=>({...r,get:(e,t,s)=>Sm(e,t)||r.get(e,t,s),has:(e,t)=>!!Sm(e,t)||r.has(e,t)}));/**
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
 */class zC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function jC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",Cm="0.13.0";/**
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
 */const Sn=new vd("@firebase/app"),WC="@firebase/app-compat",$C="@firebase/analytics-compat",BC="@firebase/analytics",HC="@firebase/app-check-compat",VC="@firebase/app-check",GC="@firebase/auth",KC="@firebase/auth-compat",qC="@firebase/database",YC="@firebase/data-connect",QC="@firebase/database-compat",JC="@firebase/functions",XC="@firebase/functions-compat",ZC="@firebase/installations",eI="@firebase/installations-compat",tI="@firebase/messaging",nI="@firebase/messaging-compat",rI="@firebase/performance",iI="@firebase/performance-compat",sI="@firebase/remote-config",oI="@firebase/remote-config-compat",lI="@firebase/storage",aI="@firebase/storage-compat",uI="@firebase/firestore",cI="@firebase/ai",dI="@firebase/firestore-compat",fI="firebase",hI="11.8.0";/**
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
 */const Wc="[DEFAULT]",pI={[jc]:"fire-core",[WC]:"fire-core-compat",[BC]:"fire-analytics",[$C]:"fire-analytics-compat",[VC]:"fire-app-check",[HC]:"fire-app-check-compat",[GC]:"fire-auth",[KC]:"fire-auth-compat",[qC]:"fire-rtdb",[YC]:"fire-data-connect",[QC]:"fire-rtdb-compat",[JC]:"fire-fn",[XC]:"fire-fn-compat",[ZC]:"fire-iid",[eI]:"fire-iid-compat",[tI]:"fire-fcm",[nI]:"fire-fcm-compat",[rI]:"fire-perf",[iI]:"fire-perf-compat",[sI]:"fire-rc",[oI]:"fire-rc-compat",[lI]:"fire-gcs",[aI]:"fire-gcs-compat",[uI]:"fire-fst",[dI]:"fire-fst-compat",[cI]:"fire-vertex","fire-js":"fire-js",[fI]:"fire-js-all"};/**
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
 */const Ul=new Map,mI=new Map,$c=new Map;function Im(r,e){try{r.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function _i(r){const e=r.name;if($c.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;$c.set(e,r);for(const t of Ul.values())Im(t,r);for(const t of mI.values())Im(t,r);return!0}function Ed(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function At(r){return r==null?!1:r.settings!==void 0}/**
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
 */const gI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Xs("app","Firebase",gI);/**
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
 */class _I{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=hI;function n_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Xn.create("bad-app-name",{appName:String(l)});if(t||(t=qg()),!t)throw Xn.create("no-options");const a=Ul.get(l);if(a){if(Nr(t,a.options)&&Nr(s,a.config))return a;throw Xn.create("duplicate-app",{appName:l})}const c=new CC(l);for(const p of $c.values())c.addComponent(p);const h=new _I(t,s,c);return Ul.set(l,h),h}function r_(r=Wc){const e=Ul.get(r);if(!e&&r===Wc&&qg())return n_();if(!e)throw Xn.create("no-app",{appName:r});return e}function Zn(r,e,t){var s;let l=(s=pI[r])!==null&&s!==void 0?s:r;t&&(l+=`-${t}`);const a=l.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${l}" with version "${e}":`];a&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(h.join(" "));return}_i(new xr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const yI="firebase-heartbeat-database",vI=1,bs="firebase-heartbeat-store";let kc=null;function i_(){return kc||(kc=bC(yI,vI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(bs)}catch(t){console.warn(t)}}}}).catch(r=>{throw Xn.create("idb-open",{originalErrorMessage:r.message})})),kc}async function wI(r){try{const t=(await i_()).transaction(bs),s=await t.objectStore(bs).get(s_(r));return await t.done,s}catch(e){if(e instanceof lr)Sn.warn(e.message);else{const t=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(t.message)}}}async function km(r,e){try{const s=(await i_()).transaction(bs,"readwrite");await s.objectStore(bs).put(e,s_(r)),await s.done}catch(t){if(t instanceof lr)Sn.warn(t.message);else{const s=Xn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(s.message)}}}function s_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const EI=1024,SI=30;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Tm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats.length>SI){const c=TI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tm(),{heartbeatsToSend:s,unsentEntries:l}=II(this._heartbeatsCache.heartbeats),a=Ml(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Sn.warn(t),""}}}function Tm(){return new Date().toISOString().substring(0,10)}function II(r,e=EI){const t=[];let s=r.slice();for(const l of r){const a=t.find(c=>c.agent===l.agent);if(a){if(a.dates.push(l.date),Rm(t)>e){a.dates.pop();break}}else if(t.push({agent:l.agent,dates:[l.date]}),Rm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aC()?uC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const l=await this.read();return km(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Rm(r){return Ml(JSON.stringify({version:2,heartbeats:r})).length}function TI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function RI(r){_i(new xr("platform-logger",e=>new zC(e),"PRIVATE")),_i(new xr("heartbeat",e=>new CI(e),"PRIVATE")),Zn(jc,Cm,r),Zn(jc,Cm,"esm2017"),Zn("fire-js","")}RI("");var PI="firebase",NI="11.8.1";/**
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
 */Zn(PI,NI,"app");var Pm={};const Nm="@firebase/database",xm="1.0.19";/**
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
 */let o_="";function xI(r){o_=r}/**
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
 */class AI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ms(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class OI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const l_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AI(e)}}catch{}return new OI},Rr=l_("localStorage"),DI=l_("sessionStorage");/**
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
 */const di=new vd("@firebase/database"),LI=function(){let r=1;return function(){return r++}}(),a_=function(r){const e=vC(r),t=new mC;t.update(e);const s=t.digest();return md.encodeByteArray(s)},Zs=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zs.apply(null,s):typeof s=="object"?e+=Be(s):e+=s,e+=" "}return e};let Ps=null,Am=!0;const MI=function(r,e){U(!0,"Can't turn on custom loggers persistently."),di.logLevel=_e.VERBOSE,Ps=di.log.bind(di)},rt=function(...r){if(Am===!0&&(Am=!1,Ps===null&&DI.get("logging_enabled")===!0&&MI()),Ps){const e=Zs.apply(null,r);Ps(e)}},eo=function(r){return function(...e){rt(r,...e)}},Bc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Zs(...r);di.error(e)},Cn=function(...r){const e=`FIREBASE FATAL ERROR: ${Zs(...r)}`;throw di.error(e),new Error(e)},_t=function(...r){const e="FIREBASE WARNING: "+Zs(...r);di.warn(e)},bI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},u_=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},FI=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yi="[MIN_NAME]",Ar="[MAX_NAME]",Ri=function(r,e){if(r===e)return 0;if(r===yi||e===Ar)return-1;if(e===yi||r===Ar)return 1;{const t=Om(r),s=Om(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},UI=function(r,e){return r===e?0:r<e?-1:1},vs=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Be(e))},Sd=function(r){if(typeof r!="object"||r===null)return Be(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Be(e[s]),t+=":",t+=Sd(r[e[s]]);return t+="}",t},c_=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let l=0;l<t;l+=e)l+e>t?s.push(r.substring(l,t)):s.push(r.substring(l,l+e));return s};function yt(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const d_=function(r){U(!u_(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let l,a,c,h,p;r===0?(a=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=h+s,c=Math.round(r*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,c=Math.round(r/Math.pow(2,1-s-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(l?1:0),m.reverse();const v=m.join("");let y="";for(p=0;p<64;p+=8){let _=parseInt(v.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),y=y+_}return y.toLowerCase()},zI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WI(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const $I=new RegExp("^-?(0*)\\d{1,10}$"),BI=-2147483648,HI=2147483647,Om=function(r){if($I.test(r)){const e=Number(r);if(e>=BI&&e<=HI)return e}return null},Pi=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw _t("Exception was thrown by user callback.",t),e},Math.floor(0))}},VI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ns=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class GI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,At(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class KI{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class Pl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pl.OWNER="owner";/**
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
 */const Cd="5",f_="v",h_="s",p_="r",m_="f",g_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,__="ls",y_="p",Hc="ac",v_="websocket",w_="long_polling";/**
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
 */class E_{constructor(e,t,s,l,a=!1,c="",h=!1,p=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qI(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function S_(r,e,t){U(typeof e=="string","typeof type must == string"),U(typeof t=="object","typeof params must == object");let s;if(e===v_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===w_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qI(r)&&(t.ns=r.namespace);const l=[];return yt(t,(a,c)=>{l.push(a+"="+c)}),s+l.join("&")}/**
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
 */class YI{constructor(){this.counters_={}}incrementCounter(e,t=1){kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qS(this.counters_)}}/**
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
 */const Tc={},Rc={};function Id(r){const e=r.toString();return Tc[e]||(Tc[e]=new YI),Tc[e]}function QI(r,e){const t=r.toString();return Rc[t]||(Rc[t]=e()),Rc[t]}/**
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
 */class JI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Pi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Dm="start",XI="close",ZI="pLPCommand",ek="pRTLPCB",C_="id",I_="pw",k_="ser",tk="cb",nk="seg",rk="ts",ik="d",sk="dframe",T_=1870,R_=30,ok=T_-R_,lk=25e3,ak=3e4;class ui{constructor(e,t,s,l,a,c,h){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=eo(e),this.stats_=Id(t),this.urlFn=p=>(this.appCheckToken&&(p[Hc]=this.appCheckToken),S_(t,w_,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new JI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ak)),FI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kd((...a)=>{const[c,h,p,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Dm)this.id=h,this.password=p;else if(c===XI)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dm]="t",s[k_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[f_]=Cd,this.transportSessionId&&(s[h_]=this.transportSessionId),this.lastSessionId&&(s[__]=this.lastSessionId),this.applicationId&&(s[y_]=this.applicationId),this.appCheckToken&&(s[Hc]=this.appCheckToken),typeof location<"u"&&location.hostname&&g_.test(location.hostname)&&(s[p_]=m_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zI()&&!jI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Vg(t),l=c_(s,ok);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[sk]="t",s[C_]=e,s[I_]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class kd{constructor(e,t,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LI(),window[ZI+this.uniqueCallbackIdentifier]=e,window[ek+this.uniqueCallbackIdentifier]=t,this.myIFrame=kd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){rt("frame writing exception"),h.stack&&rt(h.stack),rt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[C_]=this.myID,e[I_]=this.myPW,e[k_]=this.currentSerial;let t=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+R_+s.length<=T_;){const c=this.pendingSegs.shift();s=s+"&"+nk+l+"="+c.seg+"&"+rk+l+"="+c.ts+"&"+ik+l+"="+c.d,l++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},l=setTimeout(s,Math.floor(lk)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const uk=16384,ck=45e3;let zl=null;typeof MozWebSocket<"u"?zl=MozWebSocket:typeof WebSocket<"u"&&(zl=WebSocket);class tn{constructor(e,t,s,l,a,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=eo(this.connId),this.stats_=Id(t),this.connURL=tn.connectionURL_(t,c,h,l,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,l,a){const c={};return c[f_]=Cd,typeof location<"u"&&location.hostname&&g_.test(location.hostname)&&(c[p_]=m_),t&&(c[h_]=t),s&&(c[__]=s),l&&(c[Hc]=l),a&&(c[y_]=a),S_(e,v_,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rr.set("previous_websocket_failure",!0);try{let s;lC(),this.mySock=new zl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zl!==null&&!tn.forceDisallow_}static previouslyFailed(){return Rr.isInMemoryStorage||Rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ms(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=c_(t,uk);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ck))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
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
 */class Fs{static get ALL_TRANSPORTS(){return[ui,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=tn.isAvailable();let s=t&&!tn.previouslyFailed();if(e.webSocketOnly&&(t||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tn];else{const l=this.transports_=[];for(const a of Fs.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);Fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fs.globalTransportInitialized_=!1;/**
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
 */const dk=6e4,fk=5e3,hk=10*1024,pk=100*1024,Pc="t",Lm="d",mk="s",Mm="r",gk="e",bm="o",Fm="a",Um="n",zm="p",_k="h";class yk{constructor(e,t,s,l,a,c,h,p,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=eo("c:"+this.id+":"),this.transportManager_=new Fs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pc in e){const t=e[Pc];t===Fm?this.upgradeIfSecondaryHealthy_():t===Mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=vs("t",e),s=vs("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Um,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=vs("t",e),s=vs("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=vs(Pc,e);if(Lm in e){const s=e[Lm];if(t===_k){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(t===Um){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mk?this.onConnectionShutdown_(s):t===Mm?this.onReset_(s):t===gk?Bc("Server Error: "+s):t===bm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cd!==s&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class P_{put(e,t,s,l){}merge(e,t,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class N_{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const l=this.getInitialEvent(e);l&&t.apply(s,l)}off(e,t,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===t&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){U(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class jl extends N_{static getInstance(){return new jl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jm=32,Wm=768;class ye{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function he(){return new ye("")}function ae(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function rr(r){return r.pieces_.length-r.pieceNum_}function Ie(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ye(r.pieces_,e)}function x_(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function vk(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function A_(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function O_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new ye(e,0)}function He(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&t.push(s[l])}return new ye(t,0)}function le(r){return r.pieceNum_>=r.pieces_.length}function lt(r,e){const t=ae(r),s=ae(e);if(t===null)return e;if(t===s)return lt(Ie(r),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function D_(r,e){if(rr(r)!==rr(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function jt(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(rr(r)>rr(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wk{constructor(e,t){this.errorPrefix_=t,this.parts_=A_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=la(this.parts_[s]);L_(this)}}function Ek(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=la(e),L_(r)}function Sk(r){const e=r.parts_.pop();r.byteLength_-=la(e),r.parts_.length>0&&(r.byteLength_-=1)}function L_(r){if(r.byteLength_>Wm)throw new Error(r.errorPrefix_+"has a key path longer than "+Wm+" bytes ("+r.byteLength_+").");if(r.parts_.length>jm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jm+") or object contains a cycle "+kr(r))}function kr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Td extends N_{static getInstance(){return new Td}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ws=1e3,Ck=60*5*1e3,$m=30*1e3,Ik=1.3,kk=3e4,Tk="server_kill",Bm=3;class vn extends P_{constructor(e,t,s,l,a,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=vn.nextPersistentConnectionId_++,this.log_=eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=Ck,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Td.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const l=++this.requestNumber_,a={r:l,a:e,b:t};this.log_(Be(a)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const t=new oa,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,s,l){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const h={onComplete:l,hashFn:t,query:e,tag:s};this.listens.get(c).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),l=t._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,h=>{const p=h.d,m=h.s;vn.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&kn(e,"w")){const s=gi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$m)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=hC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,l=>{const a=l.s,c=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,t)}sendUnlisten_(e,t,s,l){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";l&&(a.q=s,a.t=l),this.sendRequest(c,a)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,l){const a={p:t,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,t,s,l){this.putInternal("p",e,t,s,l)}merge(e,t,s,l){this.putInternal("m",e,t,s,l)}putInternal(e,t,s,l,a){this.initConnection_();const c={p:t,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Bc("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kk&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ik)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+vn.nextConnectionId_++,a=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(y){U(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(y)};this.realtime_={close:p,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,_]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=_&&_.token,h=new yk(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,P=>{_t(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tk)},a))}catch(y){this.log_("Failed to get token: "+y),c||(this.repoInfo_.nodeAdmin&&_t(y),p())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fc(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(a=>Sd(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,t){const s=new ye(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(t),a.delete(t),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,t){rt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bm&&(this.reconnectDelay_=$m,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+o_.replace(/\./g,"-")]=1,_d()?e["framework.cordova"]=1:Xg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jl.getInstance().currentlyOnline();return Fc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new se(e,t)}}/**
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
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new se(yi,e),l=new se(yi,t);return this.compare(s,l)!==0}minPost(){return se.MIN}}/**
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
 */let Cl;class M_ extends aa{static get __EMPTY_NODE(){return Cl}static set __EMPTY_NODE(e){Cl=e}compare(e,t){return Ri(e.name,t.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return se.MIN}maxPost(){return new se(Ar,Cl)}makePost(e,t){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Cl)}toString(){return".key"}}const fi=new M_;/**
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
 */class Il{constructor(e,t,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,t,s,l,a){this.key=e,this.value=t,this.color=s??Ye.RED,this.left=l??gt.EMPTY_NODE,this.right=a??gt.EMPTY_NODE}copy(e,t,s,l,a){return new Ye(e??this.key,t??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,t,s),null):a===0?l=l.copy(null,t,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,t,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,l;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class Rk{copy(e,t,s,l,a){return this}insert(e,t,s){return new Ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,t=gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,l=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Il(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Il(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new Rk;/**
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
 */function Pk(r,e){return Ri(r.name,e.name)}function Rd(r,e){return Ri(r,e)}/**
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
 */let Vc;function Nk(r){Vc=r}const b_=function(r){return typeof r=="number"?"number:"+d_(r):"string:"+r},F_=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kn(e,".sv"),"Priority must be a string or number.")}else U(r===Vc||r.isEmpty(),"priority of unexpected type.");U(r===Vc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hm;class qe{static set __childrenNodeConstructor(e){Hm=e}static get __childrenNodeConstructor(){return Hm}constructor(e,t=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),F_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ae(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ae(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+b_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=d_(this.value_):e+=this.value_,this.lazyHash_=a_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,l=qe.VALUE_TYPE_ORDER.indexOf(t),a=qe.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+t),U(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let U_,z_;function xk(r){U_=r}function Ak(r){z_=r}class Ok extends aa{compare(e,t){const s=e.node.getPriority(),l=t.node.getPriority(),a=s.compareTo(l);return a===0?Ri(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Ar,new qe("[PRIORITY-POST]",z_))}makePost(e,t){const s=U_(e);return new se(t,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new Ok;/**
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
 */const Dk=Math.log(2);class Lk{constructor(e){const t=a=>parseInt(Math.log(a)/Dk,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wl=function(r,e,t,s){r.sort(e);const l=function(p,m){const v=m-p;let y,_;if(v===0)return null;if(v===1)return y=r[p],_=t?t(y):y,new Ye(_,y.node,Ye.BLACK,null,null);{const P=parseInt(v/2,10)+p,I=l(p,P),x=l(P+1,m);return y=r[P],_=t?t(y):y,new Ye(_,y.node,Ye.BLACK,I,x)}},a=function(p){let m=null,v=null,y=r.length;const _=function(I,x){const L=y-I,b=y;y-=I;const j=l(L+1,b),q=r[L],te=t?t(q):q;P(new Ye(te,q.node,x,null,j))},P=function(I){m?(m.left=I,m=I):(v=I,m=I)};for(let I=0;I<p.count;++I){const x=p.nextBitIsOne(),L=Math.pow(2,p.count-(I+1));x?_(L,Ye.BLACK):(_(L,Ye.BLACK),_(L,Ye.RED))}return v},c=new Lk(r.length),h=a(c);return new gt(s||e,h)};/**
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
 */let Nc;const Es={};class mn{static get Default(){return U(be,"ChildrenNode.ts has not been loaded"),Nc=Nc||new mn({".priority":Es},{".priority":be}),Nc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=gi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof gt?t:null}hasIndex(e){return kn(this.indexSet_,e.toString())}addIndex(e,t){U(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=t.getIterator(se.Wrap);let c=a.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let h;l?h=Wl(s,e.getCompare()):h=Es;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const v=Object.assign({},this.indexes_);return v[p]=h,new mn(v,m)}addToIndexes(e,t){const s=Fl(this.indexes_,(l,a)=>{const c=gi(this.indexSet_,a);if(U(c,"Missing index implementation for "+a),l===Es)if(c.isDefinedOn(e.node)){const h=[],p=t.getIterator(se.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),Wl(h,c.getCompare())}else return Es;else{const h=t.get(e.name);let p=l;return h&&(p=p.remove(new se(e.name,h))),p.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,t){const s=Fl(this.indexes_,l=>{if(l===Es)return l;{const a=t.get(e.name);return a?l.remove(new se(e.name,a)):l}});return new mn(s,this.indexSet_)}}/**
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
 */let Ss;class Z{static get EMPTY_NODE(){return Ss||(Ss=new Z(new gt(Rd),null,mn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&F_(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ss:t}}getChild(e){const t=ae(e);return t===null?this:this.getImmediateChild(t).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(U(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new se(e,t);let l,a;t.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Ss:this.priorityNode_;return new Z(l,c,a)}}updateChild(e,t){const s=ae(e);if(s===null)return t;{U(ae(e)!==".priority"||rr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ie(e),t);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,l=0,a=!0;if(this.forEachChild(be,(c,h)=>{t[c]=h.val(e),s++,a&&Z.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):a=!1}),!e&&a&&l<2*s){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+b_(this.getPriority().val())+":"),this.forEachChild(be,(t,s)=>{const l=s.hash();l!==""&&(e+=":"+t+":"+l)}),this.lazyHash_=e===""?"":a_(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new se(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new se(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>t(l.name,l.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,se.Wrap);let a=l.peek();for(;a!=null&&t.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let a=l.peek();for(;a!=null&&t.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===to?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(be),l=t.getIterator(be);let a=s.getNext(),c=l.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=l.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mk extends Z{constructor(){super(new gt(Rd),Z.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const to=new Mk;Object.defineProperties(se,{MIN:{value:new se(yi,Z.EMPTY_NODE)},MAX:{value:new se(Ar,to)}});M_.__EMPTY_NODE=Z.EMPTY_NODE;qe.__childrenNodeConstructor=Z;Nk(to);Ak(to);/**
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
 */const bk=!0;function Qe(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new qe(t,Qe(e))}if(!(r instanceof Array)&&bk){const t=[];let s=!1;if(yt(r,(c,h)=>{if(c.substring(0,1)!=="."){const p=Qe(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new se(c,p)))}}),t.length===0)return Z.EMPTY_NODE;const a=Wl(t,Pk,c=>c.name,Rd);if(s){const c=Wl(t,be.getCompare());return new Z(a,Qe(e),new mn({".priority":c},{".priority":be}))}else return new Z(a,Qe(e),mn.Default)}else{let t=Z.EMPTY_NODE;return yt(r,(s,l)=>{if(kn(r,s)&&s.substring(0,1)!=="."){const a=Qe(l);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(s,a))}}),t.updatePriority(Qe(e))}}xk(Qe);/**
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
 */class Fk extends aa{constructor(e){super(),this.indexPath_=e,U(!le(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),l=this.extractChild(t.node),a=s.compareTo(l);return a===0?Ri(e.name,t.name):a}makePost(e,t){const s=Qe(e),l=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new se(t,l)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,to);return new se(Ar,e)}toString(){return A_(this.indexPath_,0).join("/")}}/**
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
 */class Uk extends aa{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ri(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,t){const s=Qe(e);return new se(t,s)}toString(){return".value"}}const zk=new Uk;/**
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
 */function j_(r){return{type:"value",snapshotNode:r}}function vi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Us(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function zs(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function jk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Pd{constructor(e){this.index_=e}updateChild(e,t,s,l,a,c){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(l).equals(s.getChild(l))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(Us(t,h)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(vi(t,s)):c.trackChildChange(zs(t,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(l,a)=>{t.hasChild(l)||s.trackChildChange(Us(l,a))}),t.isLeafNode()||t.forEachChild(be,(l,a)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(a)||s.trackChildChange(zs(l,a,c))}else s.trackChildChange(vi(l,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class js{constructor(e){this.indexedFilter_=new Pd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=js.getStartPost_(e),this.endPost_=js.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,l,a,c){return this.matches(new se(t,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,l,a,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Z.EMPTY_NODE);let l=t.withIndex(this.index_);l=l.updatePriority(Z.EMPTY_NODE);const a=this;return t.forEachChild(be,(c,h)=>{a.matches(new se(c,h))||(l=l.updateImmediateChild(c,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Wk{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new js(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,l,a,c){return this.rangedFilter_.matches(new se(t,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,l,a,c):this.fullLimitUpdateChild_(e,t,s,a,c)}updateFullNode(e,t,s){let l;if(t.isLeafNode()||t.isEmpty())l=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){l=Z.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))l=l.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{l=t.withIndex(this.index_),l=l.updatePriority(Z.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let c=0;for(;a.hasNext();){const h=a.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:l=l.updateImmediateChild(h.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,l,a){let c;if(this.reverse_){const y=this.index_.getCompare();c=(_,P)=>y(P,_)}else c=this.index_.getCompare();const h=e;U(h.numChildren()===this.limit_,"");const p=new se(t,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(h.hasChild(t)){const y=h.getImmediateChild(t);let _=l.getChildAfterChild(this.index_,m,this.reverse_);for(;_!=null&&(_.name===t||h.hasChild(_.name));)_=l.getChildAfterChild(this.index_,_,this.reverse_);const P=_==null?1:c(_,p);if(v&&!s.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(zs(t,s,y)),h.updateImmediateChild(t,s);{a!=null&&a.trackChildChange(Us(t,y));const x=h.updateImmediateChild(t,Z.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(a!=null&&a.trackChildChange(vi(_.name,_.node)),x.updateImmediateChild(_.name,_.node)):x}}else return s.isEmpty()?e:v&&c(m,p)>=0?(a!=null&&(a.trackChildChange(Us(m.name,m.node)),a.trackChildChange(vi(t,s))),h.updateImmediateChild(t,s).updateImmediateChild(m.name,Z.EMPTY_NODE)):e}}/**
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
 */class Nd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Nd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $k(r){return r.loadsAllData()?new Pd(r.getIndex()):r.hasLimit()?new Wk(r):new js(r)}function Vm(r){const e={};if(r.isDefault())return e;let t;if(r.index_===be?t="$priority":r.index_===zk?t="$value":r.index_===fi?t="$key":(U(r.index_ instanceof Fk,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=Be(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Be(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Be(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Be(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Be(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Gm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==be&&(e.i=r.index_.toString()),e}/**
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
 */class $l extends P_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=eo("p:rest:"),this.listens_={}}listen(e,t,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=$l.getListenId_(e,s),h={};this.listens_[c]=h;const p=Vm(e._queryParams);this.restRequest_(a+".json",p,(m,v)=>{let y=v;if(m===404&&(y=null,m=null),m===null&&this.onDataUpdate_(a,y,!1,s),gi(this.listens_,c)===h){let _;m?m===401?_="permission_denied":_="rest_error:"+m:_="ok",l(_,null)}})}unlisten(e,t){const s=$l.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Vm(e._queryParams),s=e._path.toString(),l=new oa;return this.restRequest_(s+".json",t,(a,c)=>{let h=c;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(s,h,!1,null),l.resolve(h)):l.reject(new Error(h))}),l.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(t.auth=l.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=Ms(h.responseText)}catch{_t("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&_t("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class Bk{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Bl(){return{value:null,children:new Map}}function W_(r,e,t){if(le(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=ae(e);r.children.has(s)||r.children.set(s,Bl());const l=r.children.get(s);e=Ie(e),W_(l,e,t)}}function Gc(r,e,t){r.value!==null?t(e,r.value):Hk(r,(s,l)=>{const a=new ye(e.toString()+"/"+s);Gc(l,a,t)})}function Hk(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Vk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&yt(this.last_,(s,l)=>{t[s]=t[s]-l}),this.last_=e,t}}/**
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
 */const Km=10*1e3,Gk=30*1e3,Kk=5*60*1e3;class qk{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vk(e);const s=Km+(Gk-Km)*Math.random();Ns(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;yt(e,(l,a)=>{a>0&&kn(this.statsToReport_,l)&&(t[l]=a,s=!0)}),s&&this.server_.reportStats(t),Ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*Kk))}}/**
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
 */var Wt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function $_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ad(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class Hl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Wt.ACK_USER_WRITE,this.source=$_()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ye(e));return new Hl(he(),t,this.revert)}}else return U(ae(this.path)===e,"operationForChild called for unrelated child."),new Hl(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ws{constructor(e,t){this.source=e,this.path=t,this.type=Wt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Ws(this.source,he()):new Ws(this.source,Ie(this.path))}}/**
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
 */class Or{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Wt.OVERWRITE}operationForChild(e){return le(this.path)?new Or(this.source,he(),this.snap.getImmediateChild(e)):new Or(this.source,Ie(this.path),this.snap)}}/**
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
 */class $s{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Wt.MERGE}operationForChild(e){if(le(this.path)){const t=this.children.subtree(new ye(e));return t.isEmpty()?null:t.value?new Or(this.source,he(),t.value):new $s(this.source,he(),t)}else return U(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $s(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ir{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const t=ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Yk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Qk(r,e,t,s){const l=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(jk(c.childName,c.snapshotNode))}),Cs(r,l,"child_removed",e,s,t),Cs(r,l,"child_added",e,s,t),Cs(r,l,"child_moved",a,s,t),Cs(r,l,"child_changed",e,s,t),Cs(r,l,"value",e,s,t),l}function Cs(r,e,t,s,l,a){const c=s.filter(h=>h.type===t);c.sort((h,p)=>Xk(r,h,p)),c.forEach(h=>{const p=Jk(r,h,a);l.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,r.query_))})})}function Jk(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function Xk(r,e,t){if(e.childName==null||t.childName==null)throw Ii("Should only compare child_ events.");const s=new se(e.childName,e.snapshotNode),l=new se(t.childName,t.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function ua(r,e){return{eventCache:r,serverCache:e}}function xs(r,e,t,s){return ua(new ir(e,t,s),r.serverCache)}function B_(r,e,t,s){return ua(r.eventCache,new ir(e,t,s))}function Vl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Dr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let xc;const Zk=()=>(xc||(xc=new gt(UI)),xc);class Re{static fromObject(e){let t=new Re(null);return yt(e,(s,l)=>{t=t.set(new ye(s),l)}),t}constructor(e,t=Zk()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:he(),value:this.value};if(le(e))return null;{const s=ae(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(Ie(e),t);return a!=null?{path:He(new ye(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const t=ae(e),s=this.children.get(t);return s!==null?s.subtree(Ie(e)):new Re(null)}}set(e,t){if(le(e))return new Re(t,this.children);{const s=ae(e),a=(this.children.get(s)||new Re(null)).set(Ie(e),t),c=this.children.insert(s,a);return new Re(this.value,c)}}remove(e){if(le(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const t=ae(e),s=this.children.get(t);if(s){const l=s.remove(Ie(e));let a;return l.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,l),this.value===null&&a.isEmpty()?new Re(null):new Re(this.value,a)}else return this}}get(e){if(le(e))return this.value;{const t=ae(e),s=this.children.get(t);return s?s.get(Ie(e)):null}}setTree(e,t){if(le(e))return t;{const s=ae(e),a=(this.children.get(s)||new Re(null)).setTree(Ie(e),t);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Re(this.value,c)}}fold(e){return this.fold_(he(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_(He(e,l),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,he(),t)}findOnPath_(e,t,s){const l=this.value?s(t,this.value):!1;if(l)return l;if(le(e))return null;{const a=ae(e),c=this.children.get(a);return c?c.findOnPath_(Ie(e),He(t,a),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,he(),t)}foreachOnPath_(e,t,s){if(le(e))return this;{this.value&&s(t,this.value);const l=ae(e),a=this.children.get(l);return a?a.foreachOnPath_(Ie(e),He(t,l),s):new Re(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,t){this.children.inorderTraversal((s,l)=>{l.foreach_(He(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new Re(null))}}function As(r,e,t){if(le(e))return new Bt(new Re(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const c=lt(l,e);return a=a.updateChild(c,t),new Bt(r.writeTree_.set(l,a))}else{const l=new Re(t),a=r.writeTree_.setTree(e,l);return new Bt(a)}}}function qm(r,e,t){let s=r;return yt(t,(l,a)=>{s=As(s,He(e,l),a)}),s}function Ym(r,e){if(le(e))return Bt.empty();{const t=r.writeTree_.setTree(e,new Re(null));return new Bt(t)}}function Kc(r,e){return br(r,e)!=null}function br(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(lt(t.path,e)):null}function Qm(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(be,(s,l)=>{e.push(new se(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new se(s,l.value))}),e}function er(r,e){if(le(e))return r;{const t=br(r,e);return t!=null?new Bt(new Re(t)):new Bt(r.writeTree_.subtree(e))}}function qc(r){return r.writeTree_.isEmpty()}function wi(r,e){return H_(he(),r.writeTree_,e)}function H_(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(U(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):t=H_(He(r,l),a,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(He(r,".priority"),s)),t}}/**
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
 */function ca(r,e){return q_(e,r)}function e0(r,e,t,s,l){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:l}),l&&(r.visibleWrites=As(r.visibleWrites,e,t)),r.lastWriteId=s}function t0(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function n0(r,e){const t=r.allWrites.findIndex(h=>h.writeId===e);U(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let l=s.visible,a=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const h=r.allWrites[c];h.visible&&(c>=t&&r0(h,s.path)?l=!1:jt(s.path,h.path)&&(a=!0)),c--}if(l){if(a)return i0(r),!0;if(s.snap)r.visibleWrites=Ym(r.visibleWrites,s.path);else{const h=s.children;yt(h,p=>{r.visibleWrites=Ym(r.visibleWrites,He(s.path,p))})}return!0}else return!1}function r0(r,e){if(r.snap)return jt(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&jt(He(r.path,t),e))return!0;return!1}function i0(r){r.visibleWrites=V_(r.allWrites,s0,he()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function s0(r){return r.visible}function V_(r,e,t){let s=Bt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const c=a.path;let h;if(a.snap)jt(t,c)?(h=lt(t,c),s=As(s,h,a.snap)):jt(c,t)&&(h=lt(c,t),s=As(s,he(),a.snap.getChild(h)));else if(a.children){if(jt(t,c))h=lt(t,c),s=qm(s,h,a.children);else if(jt(c,t))if(h=lt(c,t),le(h))s=qm(s,he(),a.children);else{const p=gi(a.children,ae(h));if(p){const m=p.getChild(Ie(h));s=As(s,he(),m)}}}else throw Ii("WriteRecord should have .snap or .children")}}return s}function G_(r,e,t,s,l){if(!s&&!l){const a=br(r.visibleWrites,e);if(a!=null)return a;{const c=er(r.visibleWrites,e);if(qc(c))return t;if(t==null&&!Kc(c,he()))return null;{const h=t||Z.EMPTY_NODE;return wi(c,h)}}}else{const a=er(r.visibleWrites,e);if(!l&&qc(a))return t;if(!l&&t==null&&!Kc(a,he()))return null;{const c=function(m){return(m.visible||l)&&(!s||!~s.indexOf(m.writeId))&&(jt(m.path,e)||jt(e,m.path))},h=V_(r.allWrites,c,e),p=t||Z.EMPTY_NODE;return wi(h,p)}}}function o0(r,e,t){let s=Z.EMPTY_NODE;const l=br(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(be,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(t){const a=er(r.visibleWrites,e);return t.forEachChild(be,(c,h)=>{const p=wi(er(a,new ye(c)),h);s=s.updateImmediateChild(c,p)}),Qm(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=er(r.visibleWrites,e);return Qm(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function l0(r,e,t,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=He(e,t);if(Kc(r.visibleWrites,a))return null;{const c=er(r.visibleWrites,a);return qc(c)?l.getChild(t):wi(c,l.getChild(t))}}function a0(r,e,t,s){const l=He(e,t),a=br(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(t)){const c=er(r.visibleWrites,l);return wi(c,s.getNode().getImmediateChild(t))}else return null}function u0(r,e){return br(r.visibleWrites,e)}function c0(r,e,t,s,l,a,c){let h;const p=er(r.visibleWrites,e),m=br(p,he());if(m!=null)h=m;else if(t!=null)h=wi(p,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const v=[],y=c.getCompare(),_=a?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let P=_.getNext();for(;P&&v.length<l;)y(P,s)!==0&&v.push(P),P=_.getNext();return v}else return[]}function d0(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function Gl(r,e,t,s){return G_(r.writeTree,r.treePath,e,t,s)}function Od(r,e){return o0(r.writeTree,r.treePath,e)}function Jm(r,e,t,s){return l0(r.writeTree,r.treePath,e,t,s)}function Kl(r,e){return u0(r.writeTree,He(r.treePath,e))}function f0(r,e,t,s,l,a){return c0(r.writeTree,r.treePath,e,t,s,l,a)}function Dd(r,e,t){return a0(r.writeTree,r.treePath,e,t)}function K_(r,e){return q_(He(r.treePath,e),r.writeTree)}function q_(r,e){return{treePath:r,writeTree:e}}/**
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
 */class h0{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;U(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(s,zs(s,e.snapshotNode,l.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(s,Us(s,l.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(s,zs(s,e.snapshotNode,l.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class p0{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Y_=new p0;class Ld{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dr(this.viewCache_),a=f0(this.writes_,l,t,1,s,e);return a.length===0?null:a[0]}}/**
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
 */function m0(r){return{filter:r}}function g0(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function _0(r,e,t,s,l){const a=new h0;let c,h;if(t.type===Wt.OVERWRITE){const m=t;m.source.fromUser?c=Yc(r,e,m.path,m.snap,s,l,a):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!le(m.path),c=ql(r,e,m.path,m.snap,s,l,h,a))}else if(t.type===Wt.MERGE){const m=t;m.source.fromUser?c=v0(r,e,m.path,m.children,s,l,a):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=Qc(r,e,m.path,m.children,s,l,h,a))}else if(t.type===Wt.ACK_USER_WRITE){const m=t;m.revert?c=S0(r,e,m.path,s,l,a):c=w0(r,e,m.path,m.affectedTree,s,l,a)}else if(t.type===Wt.LISTEN_COMPLETE)c=E0(r,e,t.path,s,a);else throw Ii("Unknown operation type: "+t.type);const p=a.getChanges();return y0(e,c,p),{viewCache:c,changes:p}}function y0(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=Vl(r);(t.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&t.push(j_(Vl(e)))}}function Q_(r,e,t,s,l,a){const c=e.eventCache;if(Kl(s,t)!=null)return e;{let h,p;if(le(t))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Dr(e),v=m instanceof Z?m:Z.EMPTY_NODE,y=Od(s,v);h=r.filter.updateFullNode(e.eventCache.getNode(),y,a)}else{const m=Gl(s,Dr(e));h=r.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=ae(t);if(m===".priority"){U(rr(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const y=Jm(s,t,v,p);y!=null?h=r.filter.updatePriority(v,y):h=c.getNode()}else{const v=Ie(t);let y;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const _=Jm(s,t,c.getNode(),p);_!=null?y=c.getNode().getImmediateChild(m).updateChild(v,_):y=c.getNode().getImmediateChild(m)}else y=Dd(s,m,e.serverCache);y!=null?h=r.filter.updateChild(c.getNode(),m,y,v,l,a):h=c.getNode()}}return xs(e,h,c.isFullyInitialized()||le(t),r.filter.filtersNodes())}}function ql(r,e,t,s,l,a,c,h){const p=e.serverCache;let m;const v=c?r.filter:r.filter.getIndexedFilter();if(le(t))m=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(t,s);m=v.updateFullNode(p.getNode(),P,null)}else{const P=ae(t);if(!p.isCompleteForPath(t)&&rr(t)>1)return e;const I=Ie(t),L=p.getNode().getImmediateChild(P).updateChild(I,s);P===".priority"?m=v.updatePriority(p.getNode(),L):m=v.updateChild(p.getNode(),P,L,I,Y_,null)}const y=B_(e,m,p.isFullyInitialized()||le(t),v.filtersNodes()),_=new Ld(l,y,a);return Q_(r,y,t,l,_,h)}function Yc(r,e,t,s,l,a,c){const h=e.eventCache;let p,m;const v=new Ld(l,e,a);if(le(t))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=xs(e,m,!0,r.filter.filtersNodes());else{const y=ae(t);if(y===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=xs(e,m,h.isFullyInitialized(),h.isFiltered());else{const _=Ie(t),P=h.getNode().getImmediateChild(y);let I;if(le(_))I=s;else{const x=v.getCompleteChild(y);x!=null?x_(_)===".priority"&&x.getChild(O_(_)).isEmpty()?I=x:I=x.updateChild(_,s):I=Z.EMPTY_NODE}if(P.equals(I))p=e;else{const x=r.filter.updateChild(h.getNode(),y,I,_,v,c);p=xs(e,x,h.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Xm(r,e){return r.eventCache.isCompleteForChild(e)}function v0(r,e,t,s,l,a,c){let h=e;return s.foreach((p,m)=>{const v=He(t,p);Xm(e,ae(v))&&(h=Yc(r,h,v,m,l,a,c))}),s.foreach((p,m)=>{const v=He(t,p);Xm(e,ae(v))||(h=Yc(r,h,v,m,l,a,c))}),h}function Zm(r,e,t){return t.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Qc(r,e,t,s,l,a,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;le(t)?m=s:m=new Re(null).setTree(t,s);const v=e.serverCache.getNode();return m.children.inorderTraversal((y,_)=>{if(v.hasChild(y)){const P=e.serverCache.getNode().getImmediateChild(y),I=Zm(r,P,_);p=ql(r,p,new ye(y),I,l,a,c,h)}}),m.children.inorderTraversal((y,_)=>{const P=!e.serverCache.isCompleteForChild(y)&&_.value===null;if(!v.hasChild(y)&&!P){const I=e.serverCache.getNode().getImmediateChild(y),x=Zm(r,I,_);p=ql(r,p,new ye(y),x,l,a,c,h)}}),p}function w0(r,e,t,s,l,a,c){if(Kl(l,t)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return ql(r,e,t,p.getNode().getChild(t),l,a,h,c);if(le(t)){let m=new Re(null);return p.getNode().forEachChild(fi,(v,y)=>{m=m.set(new ye(v),y)}),Qc(r,e,t,m,l,a,h,c)}else return e}else{let m=new Re(null);return s.foreach((v,y)=>{const _=He(t,v);p.isCompleteForPath(_)&&(m=m.set(v,p.getNode().getChild(_)))}),Qc(r,e,t,m,l,a,h,c)}}function E0(r,e,t,s,l){const a=e.serverCache,c=B_(e,a.getNode(),a.isFullyInitialized()||le(t),a.isFiltered());return Q_(r,c,t,s,Y_,l)}function S0(r,e,t,s,l,a){let c;if(Kl(s,t)!=null)return e;{const h=new Ld(s,e,l),p=e.eventCache.getNode();let m;if(le(t)||ae(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Gl(s,Dr(e));else{const y=e.serverCache.getNode();U(y instanceof Z,"serverChildren would be complete if leaf node"),v=Od(s,y)}v=v,m=r.filter.updateFullNode(p,v,a)}else{const v=ae(t);let y=Dd(s,v,e.serverCache);y==null&&e.serverCache.isCompleteForChild(v)&&(y=p.getImmediateChild(v)),y!=null?m=r.filter.updateChild(p,v,y,Ie(t),h,a):e.eventCache.getNode().hasChild(v)?m=r.filter.updateChild(p,v,Z.EMPTY_NODE,Ie(t),h,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Gl(s,Dr(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,a)))}return c=e.serverCache.isFullyInitialized()||Kl(s,he())!=null,xs(e,m,c,r.filter.filtersNodes())}}/**
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
 */class C0{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Pd(s.getIndex()),a=$k(s);this.processor_=m0(a);const c=t.serverCache,h=t.eventCache,p=l.updateFullNode(Z.EMPTY_NODE,c.getNode(),null),m=a.updateFullNode(Z.EMPTY_NODE,h.getNode(),null),v=new ir(p,c.isFullyInitialized(),l.filtersNodes()),y=new ir(m,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=ua(y,v),this.eventGenerator_=new Yk(this.query_)}get query(){return this.query_}}function I0(r){return r.viewCache_.serverCache.getNode()}function k0(r){return Vl(r.viewCache_)}function T0(r,e){const t=Dr(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!le(e)&&!t.getImmediateChild(ae(e)).isEmpty())?t.getChild(e):null}function eg(r){return r.eventRegistrations_.length===0}function R0(r,e){r.eventRegistrations_.push(e)}function tg(r,e,t){const s=[];if(t){U(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,l);c&&s.push(c)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function ng(r,e,t,s){e.type===Wt.MERGE&&e.source.queryId!==null&&(U(Dr(r.viewCache_),"We should always have a full cache before handling merges"),U(Vl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=_0(r.processor_,l,e,t,s);return g0(r.processor_,a.viewCache),U(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,J_(r,a.changes,a.viewCache.eventCache.getNode(),null)}function P0(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(be,(a,c)=>{s.push(vi(a,c))}),t.isFullyInitialized()&&s.push(j_(t.getNode())),J_(r,s,t.getNode(),e)}function J_(r,e,t,s){const l=s?[s]:r.eventRegistrations_;return Qk(r.eventGenerator_,e,t,l)}/**
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
 */let Yl;class X_{constructor(){this.views=new Map}}function N0(r){U(!Yl,"__referenceConstructor has already been defined"),Yl=r}function x0(){return U(Yl,"Reference.ts has not been loaded"),Yl}function A0(r){return r.views.size===0}function Md(r,e,t,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return U(a!=null,"SyncTree gave us an op for an invalid query."),ng(a,e,t,s)}else{let a=[];for(const c of r.views.values())a=a.concat(ng(c,e,t,s));return a}}function Z_(r,e,t,s,l){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let h=Gl(t,l?s:null),p=!1;h?p=!0:s instanceof Z?(h=Od(t,s),p=!1):(h=Z.EMPTY_NODE,p=!1);const m=ua(new ir(h,p,!1),new ir(s,l,!1));return new C0(e,m)}return c}function O0(r,e,t,s,l,a){const c=Z_(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),R0(c,t),P0(c,t)}function D0(r,e,t,s){const l=e._queryIdentifier,a=[];let c=[];const h=sr(r);if(l==="default")for(const[p,m]of r.views.entries())c=c.concat(tg(m,t,s)),eg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=r.views.get(l);p&&(c=c.concat(tg(p,t,s)),eg(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||a.push(p.query)))}return h&&!sr(r)&&a.push(new(x0())(e._repo,e._path)),{removed:a,events:c}}function ey(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tr(r,e){let t=null;for(const s of r.views.values())t=t||T0(s,e);return t}function ty(r,e){if(e._queryParams.loadsAllData())return da(r);{const s=e._queryIdentifier;return r.views.get(s)}}function ny(r,e){return ty(r,e)!=null}function sr(r){return da(r)!=null}function da(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ql;function L0(r){U(!Ql,"__referenceConstructor has already been defined"),Ql=r}function M0(){return U(Ql,"Reference.ts has not been loaded"),Ql}let b0=1;class rg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=d0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ry(r,e,t,s,l){return e0(r.pendingWriteTree_,e,t,s,l),l?ro(r,new Or($_(),e,t)):[]}function Pr(r,e,t=!1){const s=t0(r.pendingWriteTree_,e);if(n0(r.pendingWriteTree_,e)){let a=new Re(null);return s.snap!=null?a=a.set(he(),!0):yt(s.children,c=>{a=a.set(new ye(c),!0)}),ro(r,new Hl(s.path,a,t))}else return[]}function no(r,e,t){return ro(r,new Or(xd(),e,t))}function F0(r,e,t){const s=Re.fromObject(t);return ro(r,new $s(xd(),e,s))}function U0(r,e){return ro(r,new Ws(xd(),e))}function z0(r,e,t){const s=Fd(r,t);if(s){const l=Ud(s),a=l.path,c=l.queryId,h=lt(a,e),p=new Ws(Ad(c),h);return zd(r,a,p)}else return[]}function iy(r,e,t,s,l=!1){const a=e._path,c=r.syncPointTree_.get(a);let h=[];if(c&&(e._queryIdentifier==="default"||ny(c,e))){const p=D0(c,e,t,s);A0(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const m=p.removed;if(h=p.events,!l){const v=m.findIndex(_=>_._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(a,(_,P)=>sr(P));if(v&&!y){const _=r.syncPointTree_.subtree(a);if(!_.isEmpty()){const P=B0(_);for(let I=0;I<P.length;++I){const x=P[I],L=x.query,b=ay(r,x);r.listenProvider_.startListening(Os(L),Bs(r,L),b.hashFn,b.onComplete)}}}!y&&m.length>0&&!s&&(v?r.listenProvider_.stopListening(Os(e),null):m.forEach(_=>{const P=r.queryToTagMap.get(fa(_));r.listenProvider_.stopListening(Os(_),P)}))}H0(r,m)}return h}function sy(r,e,t,s){const l=Fd(r,s);if(l!=null){const a=Ud(l),c=a.path,h=a.queryId,p=lt(c,e),m=new Or(Ad(h),p,t);return zd(r,c,m)}else return[]}function j0(r,e,t,s){const l=Fd(r,s);if(l){const a=Ud(l),c=a.path,h=a.queryId,p=lt(c,e),m=Re.fromObject(t),v=new $s(Ad(h),p,m);return zd(r,c,v)}else return[]}function W0(r,e,t,s=!1){const l=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(l,(_,P)=>{const I=lt(_,l);a=a||tr(P,I),c=c||sr(P)});let h=r.syncPointTree_.get(l);h?(c=c||sr(h),a=a||tr(h,he())):(h=new X_,r.syncPointTree_=r.syncPointTree_.set(l,h));let p;a!=null?p=!0:(p=!1,a=Z.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((P,I)=>{const x=tr(I,he());x&&(a=a.updateImmediateChild(P,x))}));const m=ny(h,e);if(!m&&!e._queryParams.loadsAllData()){const _=fa(e);U(!r.queryToTagMap.has(_),"View does not exist, but we have a tag");const P=V0();r.queryToTagMap.set(_,P),r.tagToQueryMap.set(P,_)}const v=ca(r.pendingWriteTree_,l);let y=O0(h,e,t,v,a,p);if(!m&&!c&&!s){const _=ty(h,e);y=y.concat(G0(r,e,_))}return y}function bd(r,e,t){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,h)=>{const p=lt(c,e),m=tr(h,p);if(m)return m});return G_(l,e,a,t,!0)}function $0(r,e){const t=e._path;let s=null;r.syncPointTree_.foreachOnPath(t,(m,v)=>{const y=lt(m,t);s=s||tr(v,y)});let l=r.syncPointTree_.get(t);l?s=s||tr(l,he()):(l=new X_,r.syncPointTree_=r.syncPointTree_.set(t,l));const a=s!=null,c=a?new ir(s,!0,!1):null,h=ca(r.pendingWriteTree_,e._path),p=Z_(l,e,h,a?c.getNode():Z.EMPTY_NODE,a);return k0(p)}function ro(r,e){return oy(e,r.syncPointTree_,null,ca(r.pendingWriteTree_,he()))}function oy(r,e,t,s){if(le(r.path))return ly(r,e,t,s);{const l=e.get(he());t==null&&l!=null&&(t=tr(l,he()));let a=[];const c=ae(r.path),h=r.operationForChild(c),p=e.children.get(c);if(p&&h){const m=t?t.getImmediateChild(c):null,v=K_(s,c);a=a.concat(oy(h,p,m,v))}return l&&(a=a.concat(Md(l,r,s,t))),a}}function ly(r,e,t,s){const l=e.get(he());t==null&&l!=null&&(t=tr(l,he()));let a=[];return e.children.inorderTraversal((c,h)=>{const p=t?t.getImmediateChild(c):null,m=K_(s,c),v=r.operationForChild(c);v&&(a=a.concat(ly(v,h,p,m)))}),l&&(a=a.concat(Md(l,r,s,t))),a}function ay(r,e){const t=e.query,s=Bs(r,t);return{hashFn:()=>(I0(e)||Z.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?z0(r,t._path,s):U0(r,t._path);{const a=WI(l,t);return iy(r,t,null,a)}}}}function Bs(r,e){const t=fa(e);return r.queryToTagMap.get(t)}function fa(r){return r._path.toString()+"$"+r._queryIdentifier}function Fd(r,e){return r.tagToQueryMap.get(e)}function Ud(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ye(r.substr(0,e))}}function zd(r,e,t){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=ca(r.pendingWriteTree_,e);return Md(s,t,l,null)}function B0(r){return r.fold((e,t,s)=>{if(t&&sr(t))return[da(t)];{let l=[];return t&&(l=ey(t)),yt(s,(a,c)=>{l=l.concat(c)}),l}})}function Os(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(M0())(r._repo,r._path):r}function H0(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const l=fa(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function V0(){return b0++}function G0(r,e,t){const s=e._path,l=Bs(r,e),a=ay(r,t),c=r.listenProvider_.startListening(Os(e),l,a.hashFn,a.onComplete),h=r.syncPointTree_.subtree(s);if(l)U(!sr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,v,y)=>{if(!le(m)&&v&&sr(v))return[da(v).query];{let _=[];return v&&(_=_.concat(ey(v).map(P=>P.query))),yt(y,(P,I)=>{_=_.concat(I)}),_}});for(let m=0;m<p.length;++m){const v=p[m];r.listenProvider_.stopListening(Os(v),Bs(r,v))}}return c}/**
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
 */class jd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new jd(t)}node(){return this.node_}}class Wd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=He(this.path_,e);return new Wd(this.syncTree_,t)}node(){return bd(this.syncTree_,this.path_)}}const K0=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},ig=function(r,e,t){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return q0(r[".sv"],e,t);if(typeof r[".sv"]=="object")return Y0(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},q0=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:U(!1,"Unexpected server value: "+r)}},Y0=function(r,e,t){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},Q0=function(r,e,t,s){return $d(e,new Wd(t,r),s)},uy=function(r,e,t){return $d(r,new jd(e),t)};function $d(r,e,t){const s=r.getPriority().val(),l=ig(s,e.getImmediateChild(".priority"),t);let a;if(r.isLeafNode()){const c=r,h=ig(c.getValue(),e,t);return h!==c.getValue()||l!==c.getPriority().val()?new qe(h,Qe(l)):r}else{const c=r;return a=c,l!==c.getPriority().val()&&(a=a.updatePriority(new qe(l))),c.forEachChild(be,(h,p)=>{const m=$d(p,e.getImmediateChild(h),t);m!==p&&(a=a.updateImmediateChild(h,m))}),a}}/**
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
 */class Bd{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Hd(r,e){let t=e instanceof ye?e:new ye(e),s=r,l=ae(t);for(;l!==null;){const a=gi(s.node.children,l)||{children:{},childCount:0};s=new Bd(l,s,a),t=Ie(t),l=ae(t)}return s}function Ni(r){return r.node.value}function cy(r,e){r.node.value=e,Jc(r)}function dy(r){return r.node.childCount>0}function J0(r){return Ni(r)===void 0&&!dy(r)}function ha(r,e){yt(r.node.children,(t,s)=>{e(new Bd(t,r,s))})}function fy(r,e,t,s){t&&e(r),ha(r,l=>{fy(l,e,!0)})}function X0(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function io(r){return new ye(r.parent===null?r.name:io(r.parent)+"/"+r.name)}function Jc(r){r.parent!==null&&Z0(r.parent,r.name,r)}function Z0(r,e,t){const s=J0(t),l=kn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Jc(r)):!s&&!l&&(r.node.children[e]=t.node,r.node.childCount++,Jc(r))}/**
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
 */const eT=/[\[\].#$\/\u0000-\u001F\u007F]/,tT=/[\[\].#$\u0000-\u001F\u007F]/,Ac=10*1024*1024,hy=function(r){return typeof r=="string"&&r.length!==0&&!eT.test(r)},py=function(r){return typeof r=="string"&&r.length!==0&&!tT.test(r)},nT=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),py(r)},my=function(r,e,t,s){s&&e===void 0||Vd(yd(r,"value"),e,t)},Vd=function(r,e,t){const s=t instanceof ye?new wk(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+kr(s));if(typeof e=="function")throw new Error(r+"contains a function "+kr(s)+" with contents = "+e.toString());if(u_(e))throw new Error(r+"contains "+e.toString()+" "+kr(s));if(typeof e=="string"&&e.length>Ac/3&&la(e)>Ac)throw new Error(r+"contains a string greater than "+Ac+" utf8 bytes "+kr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(yt(e,(c,h)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!hy(c)))throw new Error(r+" contains an invalid key ("+c+") "+kr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ek(s,c),Vd(r,h,s),Sk(s)}),l&&a)throw new Error(r+' contains ".value" child '+kr(s)+" in addition to actual children.")}},gy=function(r,e,t,s){if(!py(t))throw new Error(yd(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rT=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gy(r,e,t)},_y=function(r,e){if(ae(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},iT=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!nT(t))throw new Error(yd(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yy(r,e){let t=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();t!==null&&!D_(a,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(l)}t&&r.eventLists_.push(t)}function sn(r,e,t){yy(r,t),oT(r,s=>jt(s,e)||jt(e,s))}function oT(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(lT(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function lT(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();Ps&&rt("event: "+t.toString()),Pi(s)}}}/**
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
 */const aT="repo_interrupt",uT=25;class cT{constructor(e,t,s,l){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bl(),this.transactionQueueTree_=new Bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dT(r,e,t){if(r.stats_=Id(r.repoInfo_),r.forceRestClient_||VI())r.server_=new $l(r.repoInfo_,(s,l,a,c)=>{sg(r,s,l,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>og(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new vn(r.repoInfo_,e,(s,l,a,c)=>{sg(r,s,l,a,c)},s=>{og(r,s)},s=>{fT(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=QI(r.repoInfo_,()=>new qk(r.stats_,r.server_)),r.infoData_=new Bk,r.infoSyncTree_=new rg({startListening:(s,l,a,c)=>{let h=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(h=no(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Kd(r,"connected",!1),r.serverSyncTree_=new rg({startListening:(s,l,a,c)=>(r.server_.listen(s,a,l,(h,p)=>{const m=c(h,p);sn(r.eventQueue_,s._path,m)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function vy(r){const t=r.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Gd(r){return K0({timestamp:vy(r)})}function sg(r,e,t,s,l){r.dataUpdateCount++;const a=new ye(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let c=[];if(l)if(s){const p=Fl(t,m=>Qe(m));c=j0(r.serverSyncTree_,a,p,l)}else{const p=Qe(t);c=sy(r.serverSyncTree_,a,p,l)}else if(s){const p=Fl(t,m=>Qe(m));c=F0(r.serverSyncTree_,a,p)}else{const p=Qe(t);c=no(r.serverSyncTree_,a,p)}let h=a;c.length>0&&(h=ma(r,a)),sn(r.eventQueue_,h,c)}function og(r,e){Kd(r,"connected",e),e===!1&&mT(r)}function fT(r,e){yt(e,(t,s)=>{Kd(r,t,s)})}function Kd(r,e,t){const s=new ye("/.info/"+e),l=Qe(t);r.infoData_.updateSnapshot(s,l);const a=no(r.infoSyncTree_,s,l);sn(r.eventQueue_,s,a)}function wy(r){return r.nextWriteId_++}function hT(r,e,t){const s=$0(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const a=Qe(l).withIndex(e._queryParams.getIndex());W0(r.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=no(r.serverSyncTree_,e._path,a);else{const h=Bs(r.serverSyncTree_,e);c=sy(r.serverSyncTree_,e._path,a,h)}return sn(r.eventQueue_,e._path,c),iy(r.serverSyncTree_,e,t,null,!0),a},l=>(pa(r,"get for query "+Be(e)+" failed: "+l),Promise.reject(new Error(l))))}function pT(r,e,t,s,l){pa(r,"set",{path:e.toString(),value:t,priority:s});const a=Gd(r),c=Qe(t,s),h=bd(r.serverSyncTree_,e),p=uy(c,h,a),m=wy(r),v=ry(r.serverSyncTree_,e,p,m,!0);yy(r.eventQueue_,v),r.server_.put(e.toString(),c.val(!0),(_,P)=>{const I=_==="ok";I||_t("set at "+e+" failed: "+_);const x=Pr(r.serverSyncTree_,m,!I);sn(r.eventQueue_,e,x),_T(r,l,_,P)});const y=ky(r,e);ma(r,y),sn(r.eventQueue_,y,[])}function mT(r){pa(r,"onDisconnectEvents");const e=Gd(r),t=Bl();Gc(r.onDisconnect_,he(),(l,a)=>{const c=Q0(l,a,r.serverSyncTree_,e);W_(t,l,c)});let s=[];Gc(t,he(),(l,a)=>{s=s.concat(no(r.serverSyncTree_,l,a));const c=ky(r,l);ma(r,c)}),r.onDisconnect_=Bl(),sn(r.eventQueue_,he(),s)}function gT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(aT)}function pa(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),rt(t,...e)}function _T(r,e,t,s){e&&Pi(()=>{if(t==="ok")e(null);else{const l=(t||"error").toUpperCase();let a=l;s&&(a+=": "+s);const c=new Error(a);c.code=l,e(c)}})}function Ey(r,e,t){return bd(r.serverSyncTree_,e,t)||Z.EMPTY_NODE}function qd(r,e=r.transactionQueueTree_){if(e||ga(r,e),Ni(e)){const t=Cy(r,e);U(t.length>0,"Sending zero length transaction queue"),t.every(l=>l.status===0)&&yT(r,io(e),t)}else dy(e)&&ha(e,t=>{qd(r,t)})}function yT(r,e,t){const s=t.map(m=>m.currentWriteId),l=Ey(r,e,s);let a=l;const c=l.hash();for(let m=0;m<t.length;m++){const v=t[m];U(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const y=lt(e,v.path);a=a.updateChild(y,v.currentOutputSnapshotRaw)}const h=a.val(!0),p=e;r.server_.put(p.toString(),h,m=>{pa(r,"transaction put response",{path:p.toString(),status:m});let v=[];if(m==="ok"){const y=[];for(let _=0;_<t.length;_++)t[_].status=2,v=v.concat(Pr(r.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&y.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();ga(r,Hd(r.transactionQueueTree_,e)),qd(r,r.transactionQueueTree_),sn(r.eventQueue_,e,v);for(let _=0;_<y.length;_++)Pi(y[_])}else{if(m==="datastale")for(let y=0;y<t.length;y++)t[y].status===3?t[y].status=4:t[y].status=0;else{_t("transaction at "+p.toString()+" failed: "+m);for(let y=0;y<t.length;y++)t[y].status=4,t[y].abortReason=m}ma(r,e)}},c)}function ma(r,e){const t=Sy(r,e),s=io(t),l=Cy(r,t);return vT(r,l,s),s}function vT(r,e,t){if(e.length===0)return;const s=[];let l=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=lt(t,p.path);let v=!1,y;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,y=p.abortReason,l=l.concat(Pr(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=uT)v=!0,y="maxretry",l=l.concat(Pr(r.serverSyncTree_,p.currentWriteId,!0));else{const _=Ey(r,p.path,c);p.currentInputSnapshot=_;const P=e[h].update(_.val());if(P!==void 0){Vd("transaction failed: Data returned ",P,p.path);let I=Qe(P);typeof P=="object"&&P!=null&&kn(P,".priority")||(I=I.updatePriority(_.getPriority()));const L=p.currentWriteId,b=Gd(r),j=uy(I,_,b);p.currentOutputSnapshotRaw=I,p.currentOutputSnapshotResolved=j,p.currentWriteId=wy(r),c.splice(c.indexOf(L),1),l=l.concat(ry(r.serverSyncTree_,p.path,j,p.currentWriteId,p.applyLocally)),l=l.concat(Pr(r.serverSyncTree_,L,!0))}else v=!0,y="nodata",l=l.concat(Pr(r.serverSyncTree_,p.currentWriteId,!0))}sn(r.eventQueue_,t,l),l=[],v&&(e[h].status=2,function(_){setTimeout(_,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(y==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(y),!1,null))))}ga(r,r.transactionQueueTree_);for(let h=0;h<s.length;h++)Pi(s[h]);qd(r,r.transactionQueueTree_)}function Sy(r,e){let t,s=r.transactionQueueTree_;for(t=ae(e);t!==null&&Ni(s)===void 0;)s=Hd(s,t),e=Ie(e),t=ae(e);return s}function Cy(r,e){const t=[];return Iy(r,e,t),t.sort((s,l)=>s.order-l.order),t}function Iy(r,e,t){const s=Ni(e);if(s)for(let l=0;l<s.length;l++)t.push(s[l]);ha(e,l=>{Iy(r,l,t)})}function ga(r,e){const t=Ni(e);if(t){let s=0;for(let l=0;l<t.length;l++)t[l].status!==2&&(t[s]=t[l],s++);t.length=s,cy(e,t.length>0?t:void 0)}ha(e,s=>{ga(r,s)})}function ky(r,e){const t=io(Sy(r,e)),s=Hd(r.transactionQueueTree_,e);return X0(s,l=>{Oc(r,l)}),Oc(r,s),fy(s,l=>{Oc(r,l)}),t}function Oc(r,e){const t=Ni(e);if(t){const s=[];let l=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(U(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(U(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),l=l.concat(Pr(r.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?cy(e,void 0):t.length=a+1,sn(r.eventQueue_,io(e),l);for(let c=0;c<s.length;c++)Pi(s[c])}}/**
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
 */function wT(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let l=t[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function ET(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):_t(`Invalid query segment '${t}' in query '${r}'`)}return e}const lg=function(r,e){const t=ST(r),s=t.namespace;t.domain==="firebase.com"&&Cn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||bI();const l=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new E_(t.host,t.secure,s,l,e,"",s!==t.subdomain),path:new ye(t.pathString)}},ST=function(r){let e="",t="",s="",l="",a="",c=!0,h="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(h=r.substring(0,m-1),r=r.substring(m+2));let v=r.indexOf("/");v===-1&&(v=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(v,y)),v<y&&(l=wT(r.substring(v,y)));const _=ET(r.substring(Math.min(r.length,y)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),t=e.substring(I+1),a=s}"ns"in _&&(a=_.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:h,pathString:l,namespace:a}};/**
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
 */const ag="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",CT=function(){let r=0;const e=[];return function(t){const s=t===r;r=t;let l;const a=new Array(8);for(l=7;l>=0;l--)a[l]=ag.charAt(t%64),t=Math.floor(t/64);U(t===0,"Cannot push at time == 0");let c=a.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=ag.charAt(e[l]);return U(c.length===20,"nextPushId: Length should be 20."),c}}();/**
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
 */class IT{constructor(e,t,s,l){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class kT{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class TT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yd{constructor(e,t,s,l){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=l}get key(){return le(this._path)?null:x_(this._path)}get ref(){return new Tn(this._repo,this._path)}get _queryIdentifier(){const e=Gm(this._queryParams),t=Sd(e);return t==="{}"?"default":t}get _queryObject(){return Gm(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof Yd))return!1;const t=this._repo===e._repo,s=D_(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return t&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+vk(this._path)}}class Tn extends Yd{constructor(e,t){super(e,t,new Nd,!1)}get parent(){const e=O_(this._path);return e===null?null:new Tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hs{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ye(e),s=Vs(this.ref,e);return new Hs(this._node.getChild(t),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Hs(l,Vs(this.ref,s),be)))}hasChild(e){const t=new ye(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xc(r,e){return r=it(r),r._checkNotDeleted("ref"),e!==void 0?Vs(r._root,e):r._root}function Vs(r,e){return r=it(r),ae(r._path)===null?rT("child","path",e):gy("child","path",e),new Tn(r._repo,He(r._path,e))}function RT(r,e){r=it(r),_y("push",r._path),my("push",e,r._path,!0);const t=vy(r._repo),s=CT(t),l=Vs(r,s),a=Vs(r,s);let c;return e!=null?c=Ty(a,e).then(()=>a):c=Promise.resolve(a),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function Ty(r,e){r=it(r),_y("set",r._path),my("set",e,r._path,!1);const t=new oa;return pT(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function PT(r){r=it(r);const e=new TT(()=>{}),t=new Qd(e);return hT(r._repo,r,t).then(s=>new Hs(s,new Tn(r._repo,r._path),r._queryParams.getIndex()))}class Qd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new IT("value",this,new Hs(e.snapshotNode,new Tn(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new kT(this,e,t):null}matches(e){return e instanceof Qd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}N0(Tn);L0(Tn);/**
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
 */const NT="FIREBASE_DATABASE_EMULATOR_HOST",Zc={};let xT=!1;function AT(r,e,t,s){const l=e.lastIndexOf(":"),a=e.substring(0,l),c=Js(a);r.repoInfo_=new E_(e,c,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(r.authTokenProvider_=s)}function OT(r,e,t,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=lg(a,l),h=c.repoInfo,p;typeof process<"u"&&Pm&&(p=Pm[NT]),p?(a=`http://${p}?ns=${h.namespace}`,c=lg(a,l),h=c.repoInfo):c.repoInfo.secure;const m=new KI(r.name,r.options,e);iT("Invalid Firebase Database URL",c),le(c.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=LT(h,r,m,new GI(r,t));return new MT(v,r)}function DT(r,e){const t=Zc[e];(!t||t[r.key]!==r)&&Cn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),gT(r),delete t[r.key]}function LT(r,e,t,s){let l=Zc[e.name];l||(l={},Zc[e.name]=l);let a=l[r.toURLString()];return a&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new cT(r,xT,t,s),l[r.toURLString()]=a,a}class MT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(DT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}function bT(r=r_(),e){const t=Ed(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=eC("database");s&&FT(t,...s)}return t}function FT(r,e,t,s={}){r=it(r),r._checkNotDeleted("useEmulator");const l=`${e}:${t}`,a=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Nr(s,a.repoInfo_.emulatorOptions))return;Cn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&Cn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Pl(Pl.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:tC(s.mockUserToken,r.app.options.projectId);c=new Pl(h)}Js(e)&&(Qg(e),Jg("Database",!0)),AT(a,l,s,c)}/**
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
 */function UT(r){xI(Ti),_i(new xr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return OT(s,l,a,t)},"PUBLIC").setMultipleInstances(!0)),Zn(Nm,xm,r),Zn(Nm,xm,"esm2017")}vn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};vn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};UT();const zT={apiKey:"AIzaSyByEzW7hysytxGDFOwvNTFIQw_L_me6Chk",authDomain:"foodapp-firebase-eb849.firebaseapp.com",databaseURL:"https://foodapp-firebase-eb849-default-rtdb.firebaseio.com/",projectId:"foodapp-firebase-eb849",storageBucket:"foodapp-firebase-eb849.firebasestorage.app",messagingSenderId:"407774276644",appId:"1:407774276644:web:20d23e4bf254ccb75ffcb1"},Ry=n_(zT),ed=bT(Ry);function jT(r){const{updateStock:e}=BS(),[t,s]=N.useState(1),[l,a]=N.useState(""),[c,h]=N.useState(!1),[p,m]=N.useState(!1),v=(r.food.price*t).toFixed(2),y=P=>{if(c)return;const I=parseInt(P.target.value,10);!isNaN(I)&&I>=0?(s(I),a("")):P.target.value===""&&(s(0),a(""))},_=async()=>{if(t<=0){a("Por favor, introduce una cantidad válida."),h(!1);return}if(t>r.food.quantity){a(`Lo sentimos, solo quedan ${r.food.quantity} disponibles.`),h(!1);return}m(!0),a("Enviando pedido..."),ie.info(`Intentando enviar pedido: ${r.food.name} x ${t}`);try{const I={items:[{menuItemId:r.food.id,name:r.food.name,quantity:t,unitPrice:r.food.price,totalPrice:parseFloat(v)}],orderTotal:parseFloat(v),timestamp:new Date().toISOString()},x=Xc(ed,"orders");await RT(x,I),ie.info("Pedido guardado en Firebase con éxito",{order:I}),e(r.food.id,t),a(`Pedido de ${t} x ${r.food.name} enviado. ¡Gracias!`),h(!0)}catch(P){ie.error("Error al guardar el pedido en Firebase",P),a("Error al enviar el pedido. Inténtalo de nuevo."),h(!1)}finally{m(!1)}};return N.useEffect(()=>{a(""),s(1),h(!1),m(!1)},[r.food]),z.jsxs("div",{className:"foodOrderContainer",children:[z.jsx("h3",{children:"Detalles del Pedido"}),z.jsxs("div",{className:"orderDetails",children:[z.jsx("img",{className:"orderFoodImg",src:`/DIRI_sesion8/images/${r.food.image}`,alt:r.food.name}),z.jsxs("div",{className:"orderInfo",children:[z.jsx("h4",{children:r.food.name}),z.jsx("p",{className:"orderDesc",children:r.food.desc}),z.jsxs("p",{className:"orderBasePrice",children:["Precio unitario: ",r.food.price.toFixed(2),"$"]}),z.jsxs("div",{className:"quantityControl",children:[z.jsx("label",{htmlFor:`quantity-${r.food.id}`,children:"Cantidad:"}),z.jsx("input",{type:"number",id:`quantity-${r.food.id}`,name:"quantity",min:"0",value:t,onChange:y,className:"quantityInput",disabled:c})]}),z.jsxs("p",{className:"orderTotalPrice",children:["Precio Total: ",v,"$"]})]})]}),l&&z.jsx("p",{className:`confirmationMessage ${p?"loading":c&&l.includes("enviado")?"success":"error"}`,children:l}),z.jsxs("div",{className:"orderActions",children:[z.jsx("button",{onClick:_,className:"submitOrderButton",disabled:t<=0||c||p,children:p?"Enviando...":c?"Pedido Enviado":"Enviar Pedido"}),z.jsx("button",{onClick:r.onReturnToMenu,className:"returnMenuButton",children:"Volver al menú"})]})]})}function Jd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(t[s[l]]=r[s[l]]);return t}function Py(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WT=Py,Ny=new Xs("auth","Firebase",Py());/**
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
 */const Jl=new vd("@firebase/auth");function $T(r,...e){Jl.logLevel<=_e.WARN&&Jl.warn(`Auth (${Ti}): ${r}`,...e)}function Nl(r,...e){Jl.logLevel<=_e.ERROR&&Jl.error(`Auth (${Ti}): ${r}`,...e)}/**
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
 */function Vt(r,...e){throw Xd(r,...e)}function nn(r,...e){return Xd(r,...e)}function xy(r,e,t){const s=Object.assign(Object.assign({},WT()),{[e]:t});return new Xs("auth","Firebase",s).create(e,{appName:r.name})}function wn(r){return xy(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Ny.create(r,...e)}function X(r,e,...t){if(!r)throw Xd(e,...t)}function gn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nl(e),new Error(e)}function In(r,e){r||gn(e)}/**
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
 */function td(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function BT(){return ug()==="http:"||ug()==="https:"}function ug(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function HT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BT()||sC()||"connection"in navigator)?navigator.onLine:!0}function VT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class so{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=_d()||Xg()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(r,e){In(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ay{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qT=new so(3e4,6e4);function ar(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ur(r,e,t,s,l={}){return Oy(r,l,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const h=ki(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},a);return iC()||(m.referrerPolicy="no-referrer"),r.emulatorConfig&&Js(r.emulatorConfig.host)&&(m.credentials="include"),Ay.fetch()(await Dy(r,r.config.apiHost,t,h),m)})}async function Oy(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},GT),e);try{const l=new QT(r),a=await Promise.race([t(),l.promise]);l.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw kl(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw kl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw kl(r,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw xy(r,v,m);Vt(r,v)}}catch(l){if(l instanceof lr)throw l;Vt(r,"network-request-failed",{message:String(l)})}}async function oo(r,e,t,s,l={}){const a=await ur(r,e,t,s,l);return"mfaPendingCredential"in a&&Vt(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function Dy(r,e,t,s){const l=`${e}${t}?${s}`,a=r,c=a.config.emulator?Zd(r.config,l):`${r.config.apiScheme}://${l}`;return KT.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function YT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nn(this.auth,"network-request-failed")),qT.get())})}}function kl(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const l=nn(r,e,s);return l.customData._tokenResponse=t,l}function cg(r){return r!==void 0&&r.enterprise!==void 0}class JT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return YT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XT(r,e){return ur(r,"GET","/v2/recaptchaConfig",ar(r,e))}/**
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
 */async function ZT(r,e){return ur(r,"POST","/v1/accounts:delete",e)}async function Xl(r,e){return ur(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ds(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e1(r,e=!1){const t=it(r),s=await t.getIdToken(e),l=ef(s);X(l&&l.exp&&l.auth_time&&l.iat,t.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Ds(Dc(l.auth_time)),issuedAtTime:Ds(Dc(l.iat)),expirationTime:Ds(Dc(l.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Dc(r){return Number(r)*1e3}function ef(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const l=bl(t);return l?JSON.parse(l):(Nl("Failed to decode base64 JWT payload"),null)}catch(l){return Nl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function dg(r){const e=ef(r);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gs(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof lr&&t1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function t1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class n1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zl(r){var e;const t=r.auth,s=await r.getIdToken(),l=await Gs(r,Xl(t,{idToken:s}));X(l==null?void 0:l.users.length,t,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Ly(a.providerUserInfo):[],h=i1(r.providerData,c),p=r.isAnonymous,m=!(r.email&&a.passwordHash)&&!(h!=null&&h.length),v=p?m:!1,y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new nd(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(r,y)}async function r1(r){const e=it(r);await Zl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i1(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Ly(r){return r.map(e=>{var{providerId:t}=e,s=Jd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function s1(r,e){const t=await Oy(r,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,c=await Dy(r,l,"/v1/token",`key=${a}`),h=await r._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Ay.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function o1(r,e){return ur(r,"POST","/v2/accounts:revokeToken",ar(r,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:l,expiresIn:a}=await s1(e,t);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:l,expirationTime:a}=t,c=new hi;return s&&(X(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),a&&(X(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Gn(r,e){X(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:t,auth:s,stsTokenManager:l}=e,a=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new nd(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e1(this,e)}reload(){return r1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Gs(this,ZT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,l,a,c,h,p,m,v;const y=(s=t.displayName)!==null&&s!==void 0?s:void 0,_=(l=t.email)!==null&&l!==void 0?l:void 0,P=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,I=(c=t.photoURL)!==null&&c!==void 0?c:void 0,x=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,b=(m=t.createdAt)!==null&&m!==void 0?m:void 0,j=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:q,emailVerified:te,isAnonymous:pe,providerData:ve,stsTokenManager:we}=t;X(q&&we,e,"internal-error");const De=hi.fromJSON(this.name,we);X(typeof q=="string",e,"internal-error"),Gn(y,e.name),Gn(_,e.name),X(typeof te=="boolean",e,"internal-error"),X(typeof pe=="boolean",e,"internal-error"),Gn(P,e.name),Gn(I,e.name),Gn(x,e.name),Gn(L,e.name),Gn(b,e.name),Gn(j,e.name);const Ee=new $t({uid:q,auth:e,email:_,emailVerified:te,displayName:y,isAnonymous:pe,photoURL:I,phoneNumber:P,tenantId:x,stsTokenManager:De,createdAt:b,lastLoginAt:j});return ve&&Array.isArray(ve)&&(Ee.providerData=ve.map(ze=>Object.assign({},ze))),L&&(Ee._redirectEventId=L),Ee}static async _fromIdTokenResponse(e,t,s=!1){const l=new hi;l.updateFromServerResponse(t);const a=new $t({uid:t.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Zl(a),a}static async _fromGetAccountInfoResponse(e,t,s){const l=t.users[0];X(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?Ly(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),h=new hi;h.updateFromIdToken(s);const p=new $t({uid:l.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new nd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,m),p}}/**
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
 */const fg=new Map;function _n(r){In(r instanceof Function,"Expected a class definition");let e=fg.get(r);return e?(In(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,fg.set(r,e),e)}/**
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
 */class My{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}My.type="NONE";const hg=My;/**
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
 */function xl(r,e,t){return`firebase:${r}:${e}:${t}`}class pi{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=xl(this.userKey,l.apiKey,a),this.fullPersistenceKey=xl("persistence",l.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xl(this.auth,{idToken:e}).catch(()=>{});return t?$t._fromGetAccountInfoResponse(this.auth,t,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new pi(_n(hg),e,s);const l=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=l[0]||_n(hg);const c=xl(s,e.config.apiKey,e.name);let h=null;for(const m of t)try{const v=await m._get(c);if(v){let y;if(typeof v=="string"){const _=await Xl(e,{idToken:v}).catch(()=>{});if(!_)break;y=await $t._fromGetAccountInfoResponse(e,_,v)}else y=$t._fromJSON(e,v);m!==a&&(h=y),a=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new pi(a,e,s):(a=p[0],h&&await a._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(c)}catch{}})),new pi(a,e,s))}}/**
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
 */function pg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(by(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wy(e))return"Blackberry";if($y(e))return"Webos";if(Fy(e))return"Safari";if((e.includes("chrome/")||Uy(e))&&!e.includes("edge/"))return"Chrome";if(jy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function by(r=at()){return/firefox\//i.test(r)}function Fy(r=at()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uy(r=at()){return/crios\//i.test(r)}function zy(r=at()){return/iemobile/i.test(r)}function jy(r=at()){return/android/i.test(r)}function Wy(r=at()){return/blackberry/i.test(r)}function $y(r=at()){return/webos/i.test(r)}function tf(r=at()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function l1(r=at()){var e;return tf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function a1(){return oC()&&document.documentMode===10}function By(r=at()){return tf(r)||jy(r)||$y(r)||Wy(r)||/windows phone/i.test(r)||zy(r)}/**
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
 */function Hy(r,e=[]){let t;switch(r){case"Browser":t=pg(at());break;case"Worker":t=`${pg(at())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ti}/${s}`}/**
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
 */class u1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=a=>new Promise((c,h)=>{try{const p=e(a);c(p)}catch(p){h(p)}});s.onAbort=t,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const l of t)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function c1(r,e={}){return ur(r,"GET","/v2/passwordPolicy",ar(r,e))}/**
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
 */const d1=6;class f1{constructor(e){var t,s,l,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:d1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,l,a,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),l&&(t.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class h1{constructor(e,t,s,l){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new u1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ny,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var s,l,a;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xl(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(At(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(l=p.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(wn(this));const t=e?it(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await c1(this),t=new f1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await o1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,l){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){var e;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$T(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Fr(r){return it(r)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gC(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _a={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p1(r){_a=r}function Vy(r){return _a.loadJS(r)}function m1(){return _a.recaptchaEnterpriseScript}function g1(){return _a.gapiScript}function _1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class y1{constructor(){this.enterprise=new v1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class v1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const w1="recaptcha-enterprise",Gy="NO_RECAPTCHA";class E1{constructor(e){this.type=w1,this.auth=Fr(e)}async verify(e="verify",t=!1){async function s(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,h)=>{XT(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new JT(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function l(a,c,h){const p=window.grecaptcha;cg(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{c(m)}).catch(()=>{c(Gy)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new y1().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{s(this.auth).then(h=>{if(!t&&cg(window.grecaptcha))l(h,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=m1();p.length!==0&&(p+=h),Vy(p).then(()=>{l(h,a,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function gg(r,e,t,s=!1,l=!1){const a=new E1(r);let c;if(l)c=Gy;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function rd(r,e,t,s,l){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await gg(r,e,t,t==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await gg(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
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
 */function S1(r,e){const t=Ed(r,"auth");if(t.isInitialized()){const l=t.getImmediate(),a=t.getOptions();if(Nr(a,e??{}))return l;Vt(l,"already-initialized")}return t.initialize({options:e})}function C1(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function I1(r,e,t){const s=Fr(r);X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=Ky(e),{host:c,port:h}=k1(e),p=h===null?"":`:${h}`,m={url:`${a}//${c}${p}/`},v=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(Nr(m,s.config.emulator)&&Nr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Js(c)?(Qg(`${a}//${c}${p}`),Jg("Auth",!0)):T1()}function Ky(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function k1(r){const e=Ky(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:_g(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:_g(c)}}}function _g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function T1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class nf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function R1(r,e){return ur(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function P1(r,e){return oo(r,"POST","/v1/accounts:signInWithPassword",ar(r,e))}/**
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
 */async function N1(r,e){return oo(r,"POST","/v1/accounts:signInWithEmailLink",ar(r,e))}async function x1(r,e){return oo(r,"POST","/v1/accounts:signInWithEmailLink",ar(r,e))}/**
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
 */class Ks extends nf{constructor(e,t,s,l=null){super("password",s),this._email=e,this._password=t,this._tenantId=l}static _fromEmailAndPassword(e,t){return new Ks(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ks(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rd(e,t,"signInWithPassword",P1);case"emailLink":return N1(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rd(e,s,"signUpPassword",R1);case"emailLink":return x1(e,{idToken:t,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mi(r,e){return oo(r,"POST","/v1/accounts:signInWithIdp",ar(r,e))}/**
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
 */const A1="http://localhost";class Lr extends nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=t,a=Jd(t,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Lr(s,l);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return mi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mi(e,t)}buildRequest(){const e={requestUri:A1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}/**
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
 */function O1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D1(r){const e=ks(Ts(r)).link,t=e?ks(Ts(e)).deep_link_id:null,s=ks(Ts(r)).deep_link_id;return(s?ks(Ts(s)).link:null)||s||t||e||r}class rf{constructor(e){var t,s,l,a,c,h;const p=ks(Ts(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(s=p.oobCode)!==null&&s!==void 0?s:null,y=O1((l=p.mode)!==null&&l!==void 0?l:null);X(m&&v&&y,"argument-error"),this.apiKey=m,this.operation=y,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=D1(e);try{return new rf(t)}catch{return null}}}/**
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
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,t){return Ks._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rf.parseLink(t);return X(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lo extends qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends lo{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return qn.credential(t,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Yn extends lo{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Qn extends lo{constructor(){super("twitter.com")}static credential(e,t){return Lr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Qn.credential(t,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */async function L1(r,e){return oo(r,"POST","/v1/accounts:signUp",ar(r,e))}/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,l=!1){const a=await $t._fromIdTokenResponse(e,s,l),c=yg(s);return new Mr({user:a,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const l=yg(s);return new Mr({user:e,providerId:l,_tokenResponse:s,operationType:t})}}function yg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ea extends lr{constructor(e,t,s,l){var a;super(t.code,t.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,l){return new ea(e,t,s,l)}}function Yy(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(r,a,e,s):a})}async function M1(r,e,t=!1){const s=await Gs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Mr._forOperation(r,"link",s)}/**
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
 */async function b1(r,e,t=!1){const{auth:s}=r;if(At(s.app))return Promise.reject(wn(s));const l="reauthenticate";try{const a=await Gs(r,Yy(s,l,e,r),t);X(a.idToken,s,"internal-error");const c=ef(a.idToken);X(c,s,"internal-error");const{sub:h}=c;return X(r.uid===h,s,"user-mismatch"),Mr._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Vt(s,"user-mismatch"),a}}/**
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
 */async function Qy(r,e,t=!1){if(At(r.app))return Promise.reject(wn(r));const s="signIn",l=await Yy(r,s,e),a=await Mr._fromIdTokenResponse(r,s,l);return t||await r._updateCurrentUser(a.user),a}async function F1(r,e){return Qy(Fr(r),e)}/**
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
 */async function Jy(r){const e=Fr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function U1(r,e,t){if(At(r.app))return Promise.reject(wn(r));const s=Fr(r),c=await rd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Jy(r),p}),h=await Mr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function z1(r,e,t){return At(r.app)?Promise.reject(wn(r)):F1(it(r),xi.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Jy(r),s})}function j1(r,e,t,s){return it(r).onIdTokenChanged(e,t,s)}function W1(r,e,t){return it(r).beforeAuthStateChanged(e,t)}function $1(r,e,t,s){return it(r).onAuthStateChanged(e,t,s)}function B1(r){return it(r).signOut()}const ta="__sak";/**
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
 */class Xy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const H1=1e3,V1=10;class Zy extends Xy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=By(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),l=this.localCache[t];s!==l&&e(t,l,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);a1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,V1):l()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zy.type="LOCAL";const G1=Zy;/**
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
 */class ev extends Xy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ev.type="SESSION";const tv=ev;/**
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
 */function K1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(l=>l.isListeningto(e));if(t)return t;const s=new ya(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:l,data:a}=t.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const h=Array.from(c).map(async m=>m(t.origin,a)),p=await K1(h);t.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function sf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class q1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,c;return new Promise((h,p)=>{const m=sf("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(y){const _=y;if(_.data.eventId===m)switch(_.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(_.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function rn(){return window}function Y1(r){rn().location.href=r}/**
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
 */function nv(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function Q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function X1(){return nv()?self:null}/**
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
 */const rv="firebaseLocalStorageDb",Z1=1,na="firebaseLocalStorage",iv="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function va(r,e){return r.transaction([na],e?"readwrite":"readonly").objectStore(na)}function eR(){const r=indexedDB.deleteDatabase(rv);return new ao(r).toPromise()}function id(){const r=indexedDB.open(rv,Z1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(na,{keyPath:iv})}catch(l){t(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(na)?e(s):(s.close(),await eR(),e(await id()))})})}async function vg(r,e,t){const s=va(r,!0).put({[iv]:e,value:t});return new ao(s).toPromise()}async function tR(r,e){const t=va(r,!1).get(e),s=await new ao(t).toPromise();return s===void 0?null:s.value}function wg(r,e){const t=va(r,!0).delete(e);return new ao(t).toPromise()}const nR=800,rR=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(X1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Q1(),!this.activeServiceWorker)return;this.sender=new q1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await vg(e,ta,"1"),await wg(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=va(l,!1).getAll();return new ao(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),t.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),t.push(l));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const iR=sv;new so(3e4,6e4);/**
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
 */function sR(r,e){return e?_n(e):(X(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class of extends nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oR(r){return Qy(r.auth,new of(r),r.bypassAuthState)}function lR(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),b1(t,new of(r),r.bypassAuthState)}async function aR(r){const{auth:e,user:t}=r;return X(t,e,"internal-error"),M1(t,new of(r),r.bypassAuthState)}/**
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
 */class ov{constructor(e,t,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:l,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return lR;default:Vt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uR=new so(2e3,1e4);class ci extends ov{constructor(e,t,s,l,a){super(e,t,l,a),this.provider=s,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}ci.currentPopupAction=null;/**
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
 */const cR="pendingRedirect",Al=new Map;class dR extends ov{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const s=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(r,e){const t=mR(e),s=pR(r);if(!await s._isAvailable())return!1;const l=await s._get(t)==="true";return await s._remove(t),l}function hR(r,e){Al.set(r._key(),e)}function pR(r){return _n(r._redirectPersistence)}function mR(r){return xl(cR,r.config.apiKey,r.name)}async function gR(r,e,t=!1){if(At(r.app))return Promise.reject(wn(r));const s=Fr(r),l=sR(s,e),c=await new dR(s,l,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const _R=10*60*1e3;class yR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!lv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(nn(this.auth,l))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_R&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function lv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lv(r);default:return!1}}/**
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
 */async function wR(r,e={}){return ur(r,"GET","/v1/projects",e)}/**
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
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SR=/^https?/;async function CR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await wR(r);for(const t of e)try{if(IR(t))return}catch{}Vt(r,"unauthorized-domain")}function IR(r){const e=td(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!SR.test(t))return!1;if(ER.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const kR=new so(3e4,6e4);function Sg(){const r=rn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function TR(r){return new Promise((e,t)=>{var s,l,a;function c(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),t(nn(r,"network-request-failed"))},timeout:kR.get()})}if(!((l=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=rn().gapi)===null||a===void 0)&&a.load)c();else{const h=_1("iframefcb");return rn()[h]=()=>{gapi.load?c():t(nn(r,"network-request-failed"))},Vy(`${g1()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function RR(r){return Ol=Ol||TR(r),Ol}/**
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
 */const PR=new so(5e3,15e3),NR="__/auth/iframe",xR="emulator/auth/iframe",AR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DR(r){const e=r.config;X(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zd(e,xR):`https://${r.config.authDomain}/${NR}`,s={apiKey:e.apiKey,appName:r.name,v:Ti},l=OR.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${t}?${ki(s).slice(1)}`}async function LR(r){const e=await RR(r),t=rn().gapi;return X(t,r,"internal-error"),e.open({where:document.body,url:DR(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AR,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const c=nn(r,"network-request-failed"),h=rn().setTimeout(()=>{a(c)},PR.get());function p(){rn().clearTimeout(h),l(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
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
 */const MR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bR=500,FR=600,UR="_blank",zR="http://localhost";class Cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jR(r,e,t,s=bR,l=FR){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},MR),{width:s.toString(),height:l.toString(),top:a,left:c}),m=at().toLowerCase();t&&(h=Uy(m)?UR:t),by(m)&&(e=e||zR,p.scrollbars="yes");const v=Object.entries(p).reduce((_,[P,I])=>`${_}${P}=${I},`,"");if(l1(m)&&h!=="_self")return WR(e||"",h),new Cg(null);const y=window.open(e||"",h,v);X(y,r,"popup-blocked");try{y.focus()}catch{}return new Cg(y)}function WR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const $R="__/auth/handler",BR="emulator/auth/handler",HR=encodeURIComponent("fac");async function Ig(r,e,t,s,l,a){X(r.config.authDomain,r,"auth-domain-config-required"),X(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ti,eventId:l};if(e instanceof qy){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Fc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))c[v]=y}if(e instanceof lo){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const h=c;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const p=await r._getAppCheckToken(),m=p?`#${HR}=${encodeURIComponent(p)}`:"";return`${VR(r)}?${ki(h).slice(1)}${m}`}function VR({config:r}){return r.emulator?Zd(r,BR):`https://${r.authDomain}/${$R}`}/**
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
 */const Lc="webStorageSupport";class GR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tv,this._completeRedirectFn=gR,this._overrideRedirectResult=hR}async _openPopup(e,t,s,l){var a;In((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Ig(e,t,s,td(),l);return jR(e,c,sf())}async _openRedirect(e,t,s,l){await this._originValidation(e);const a=await Ig(e,t,s,td(),l);return Y1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:l,promise:a}=this.eventManagers[t];return l?Promise.resolve(l):(In(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await LR(e),s=new yR(e);return t.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lc,{type:Lc},l=>{var a;const c=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[Lc];c!==void 0&&t(!!c),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=CR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return By()||Fy()||tf()}}const KR=GR;var kg="@firebase/auth",Tg="1.10.6";/**
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
 */class qR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QR(r){_i(new xr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;X(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(r)},m=new h1(s,l,a,p);return C1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_i(new xr("auth-internal",e=>{const t=Fr(e.getProvider("auth").getImmediate());return(s=>new qR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(kg,Tg,YR(r)),Zn(kg,Tg,"esm2017")}/**
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
 */const JR=5*60,XR=Yg("authIdTokenMaxAge")||JR;let Rg=null;const ZR=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>XR)return;const l=t==null?void 0:t.token;Rg!==l&&(Rg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function eP(r=r_()){const e=Ed(r,"auth");if(e.isInitialized())return e.getImmediate();const t=S1(r,{popupRedirectResolver:KR,persistence:[iR,G1,tv]}),s=Yg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=ZR(a.toString());W1(t,c,()=>c(t.currentUser)),j1(t,h=>c(h))}}const l=Kg("auth");return l&&I1(t,`http://${l}`),t}function tP(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}p1({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=nn("internal-error");a.customData=l,t(a)},s.type="text/javascript",s.charset="UTF-8",tP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QR("Browser");var nr=(r=>(r.ADMIN="ADMIN",r.USER="USER",r))(nr||{});class nP{async getUserRoles(e){ie.debug(`FirebaseDatabaseService: Intentando obtener roles para UID: ${e}`);try{const t=Xc(ed,`userRoles/${e}/roles`),s=await PT(t);if(s.exists()){const l=s.val(),a=[];return l&&l.admin===!0&&(a.push(nr.ADMIN),ie.info(`FirebaseDatabaseService: Usuario ${e} tiene rol ADMIN.`)),a.length===0&&(a.push(nr.USER),ie.info(`FirebaseDatabaseService: Usuario ${e} tiene rol USER por defecto.`)),a}return ie.warn(`FirebaseDatabaseService: No se encontraron roles para UID: ${e}. Asignando rol USER por defecto.`),[nr.USER]}catch(t){throw ie.error(`FirebaseDatabaseService: Error obteniendo roles para UID: ${e}`,t),t}}async setUserRoles(e,t){ie.debug(`FirebaseDatabaseService: Estableciendo roles para UID: ${e}`,t);try{const s=Xc(ed,`userRoles/${e}`);await Ty(s,{email:t.email||"No proporcionado",roles:t.roles}),ie.info(`FirebaseDatabaseService: Roles establecidos para UID: ${e}`)}catch(s){throw ie.error(`FirebaseDatabaseService: Error estableciendo roles para UID: ${e}`,s),s}}}const Is=eP(Ry);class rP{constructor(){wl(this,"databaseService");this.databaseService=new nP,ie.debug("FirebaseAuthService instanciado")}signIn(e,t){return ie.info(`FirebaseAuthService: Intentando iniciar sesión para ${e}`),z1(Is,e,t)}async signUp(e,t){ie.info(`FirebaseAuthService: Intentando registrar a ${e}`);const s=await U1(Is,e,t);return s.user&&(ie.debug(`FirebaseAuthService: Usuario ${s.user.uid} registrado. Asignando roles por defecto.`),await this.databaseService.setUserRoles(s.user.uid,{email:s.user.email,roles:{admin:!1}})),s}signOut(){return ie.info("FirebaseAuthService: Cerrando sesión"),B1(Is)}onAuthStateChanged(e){return ie.debug("FirebaseAuthService: Suscribiéndose a onAuthStateChanged"),$1(Is,t=>{if(t){ie.debug("FirebaseAuthService: Usuario autenticado detectado",{uid:t.uid,email:t.email});const s={uid:t.uid,email:t.email};e(s)}else ie.debug("FirebaseAuthService: Ningún usuario autenticado detectado"),e(null)})}getCurrentUser(){const e=Is.currentUser;return e?{uid:e.uid,email:e.email}:null}async getUserRoles(e){return ie.debug(`FirebaseAuthService: Obteniendo roles para usuario: ${e.email}`),e.email==="admin@foodapp.com"?(ie.info(`FirebaseAuthService: Usuario ${e.email} es admin por email.`),[nr.ADMIN,nr.USER]):this.databaseService.getUserRoles(e.uid)}}const sd=new rP,av=N.createContext(void 0),wa=()=>{const r=N.useContext(av);if(!r)throw new Error("useAuth must be used within an AuthProvider");return r},iP=({children:r})=>{const[e,t]=N.useState(null),[s,l]=N.useState(null),[a,c]=N.useState(!0);return N.useEffect(()=>{ie.info("AuthProvider: Suscribiéndose a cambios de estado de autenticación."),c(!0);const h=sd.onAuthStateChanged(async p=>{if(ie.debug("AuthProvider: onAuthStateChanged callback ejecutado",{currentUser:p}),t(p),p)try{const m=await sd.getUserRoles(p);l(m),ie.info("AuthProvider: Roles obtenidos para el usuario.",{uid:p.uid,roles:m})}catch(m){ie.error("AuthProvider: Error al obtener los roles del usuario.",m),l(null)}else l(null);c(!1)});return()=>{ie.info("AuthProvider: Desuscribiéndose de cambios de estado de autenticación."),h()}},[]),z.jsx(av.Provider,{value:{user:e,roles:s,isLoading:a},children:a?z.jsx("div",{className:"loadingFallback",children:"Verificando sesión..."}):r})};class sP extends qs.Component{constructor(e){super(e),this.state={hasError:!1,error:void 0}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){ie.error("Error capturado por ErrorBoundary:",e,{componentStack:t.componentStack})}render(){return this.state.hasError?typeof this.props.fallback=="function"?this.props.fallback(this.state.error):this.props.fallback:this.props.children}}const oP=qs.lazy(()=>ra(()=>import("./LoginPage-C1TFEke8.js"),[])),lP=qs.lazy(()=>ra(()=>import("./RegisterPage-BCQzrXL-.js"),[])),aP=qs.lazy(()=>ra(()=>import("./AdminStockPage-CmWrdikl.js"),[])),uP=qs.lazy(()=>ra(()=>import("./Foods-DcYzXcgA.js"),__vite__mapDeps([0,1]))),cP=[{id:1,name:"Hamburguesa de Pollo",quantity:40,desc:"Jugosa hamburguesa de pollo, acompañada de frescos vegetales de temporada y tus salsas favoritas.",price:30,image:"cb.png"},{id:2,name:"Patatas Fritas",quantity:40,desc:"Nuestras patatas fritas doradas y perfectamente crujientes, servidas en una generosa porción.",price:15,image:"chips.png"},{id:3,name:"Hamburguesas Vegetarianas",quantity:40,desc:"Deliciosa hamburguesa a base de plantas, repleta de sabor y textura.",price:20,image:"hv.png"},{id:4,name:"Helado",quantity:40,desc:"Refrescante y cremoso helado, disponible en una variedad de sabores clásicos y sorprendentes.",price:5,image:"ice.png"}],dP=()=>{const{user:r,roles:e}=wa(),t=cd(),s=async()=>{ie.info("Navbar: Intentando cerrar sesión.");try{await sd.signOut(),ie.info("Navbar: Sesión cerrada exitosamente."),t("/login")}catch(l){ie.error("Navbar: Error al cerrar sesión",l)}};return z.jsxs("nav",{className:"navbar",children:[z.jsx(Tr,{to:"/",children:"FoodApp"}),z.jsxs("div",{children:[r&&(e==null?void 0:e.includes(nr.ADMIN))&&z.jsx(Tr,{to:"/admin-stock",style:{marginRight:"10px"},children:"Ver Disponibilidad (Admin)"}),r&&z.jsx(Tr,{to:"/order",style:{marginRight:"10px"},children:"Pedir Comida"}),!r&&z.jsx(Tr,{to:"/login",style:{marginRight:"10px"},children:"Login"}),!r&&z.jsx(Tr,{to:"/register",style:{marginRight:"10px"},children:"Registro"}),r&&z.jsxs("button",{onClick:s,children:["Logout (",r.email,")"]})]})]})},fP=({children:r})=>{const{user:e,isLoading:t}=wa();return t?z.jsx("div",{className:"loadingFallback",children:"Autenticando..."}):e?r:(ie.debug("ProtectedRoute: Usuario no autenticado, redirigiendo a /login"),z.jsx(Ll,{to:"/login",replace:!0}))},hP=({children:r})=>{const{user:e,roles:t,isLoading:s}=wa();return s?z.jsx("div",{className:"loadingFallback",children:"Autenticando..."}):e?t!=null&&t.includes(nr.ADMIN)?r:(ie.warn("AdminRoute: Acceso denegado. Usuario no es ADMIN.",{userEmail:e.email,roles:t}),z.jsx(Ll,{to:"/",replace:!0})):(ie.debug("AdminRoute: Usuario no autenticado, redirigiendo a /login"),z.jsx(Ll,{to:"/login",replace:!0}))},pP=()=>{const{user:r}=wa();return N.useEffect(()=>{ie.info("HomePage montada")},[]),z.jsxs("div",{children:[z.jsx("h3",{className:"title",children:"Comida Rápida Online"}),r?z.jsxs("p",{children:["Bienvenido, ",r.email]}):z.jsx("p",{children:"Por favor, inicia sesión o regístrate."}),z.jsx("p",{children:"Navega usando el menú superior."})]})},mP=()=>{const[r,e]=N.useState(null),t=l=>{e(l)},s=()=>{e(null)};return N.useEffect(()=>{ie.info("OrderFlowPage montada")},[]),z.jsxs(z.Fragment,{children:[z.jsx("h3",{className:"title",children:"Nuestra Carta"}),!r&&z.jsx(N.Suspense,{fallback:z.jsx("div",{className:"loadingFallback",children:"Cargando carta..."}),children:z.jsx(uP,{onFoodSelected:t})}),r&&z.jsx(jT,{food:r,onReturnToMenu:s})]})},gP=()=>(N.useEffect(()=>{ie.info("AppContent montado")},[]),z.jsx("div",{className:"main-content-area",children:z.jsxs(aS,{children:[z.jsx(Cr,{path:"/",element:z.jsx(N.Suspense,{fallback:"Cargando Inicio...",children:z.jsx(pP,{})})}),z.jsx(Cr,{path:"/login",element:z.jsx(N.Suspense,{fallback:"Cargando Login...",children:z.jsx(oP,{})})}),z.jsx(Cr,{path:"/register",element:z.jsx(N.Suspense,{fallback:"Cargando Registro...",children:z.jsx(lP,{})})}),z.jsx(Cr,{path:"/admin-stock",element:z.jsx(hP,{children:z.jsx(N.Suspense,{fallback:"Cargando Stock (Admin)...",children:z.jsx(aP,{})})})}),z.jsx(Cr,{path:"/order",element:z.jsx(fP,{children:z.jsx(N.Suspense,{fallback:"Cargando Pedidos...",children:z.jsx(mP,{})})})}),z.jsx(Cr,{path:"*",element:z.jsx(Ll,{to:"/",replace:!0})})]})}));function _P(){return N.useEffect(()=>{},[]),z.jsx(OS,{children:z.jsx(iP,{children:z.jsxs(HS,{initialItems:cP,children:[z.jsx(dP,{}),z.jsx("div",{className:"App",children:z.jsx(sP,{fallback:z.jsx("div",{className:"errorFallback",children:z.jsx("h2",{children:"Oops! Algo salió mal en la App."})}),children:z.jsx(N.Suspense,{fallback:z.jsx("div",{className:"loadingFallback",children:"Cargando aplicación..."}),children:z.jsx(gP,{})})})})]})})})}mE.createRoot(document.getElementById("root")).render(z.jsx(N.StrictMode,{children:z.jsx(_P,{})}));export{sd as a,BS as b,z as j,ie as l,N as r,cd as u};
