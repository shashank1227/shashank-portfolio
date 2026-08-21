(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5725,e=>{"use strict";let t,r;var o,n,i,s,l,a=e.i(43476),u=e.i(71645),c=e.i(97053),d=e.i(46932);e.i(47167);var h=e.i(31178),f=e.i(47414),m=e.i(74008),p=e.i(21476),g=e.i(72846),E=u,C=e.i(37806);function w(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class R extends E.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,g.isHTMLElement)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,r=(0,g.isHTMLElement)(e)&&e.offsetWidth||0,o=(0,g.isHTMLElement)(e)&&e.offsetHeight||0,n=getComputedStyle(t),i=this.props.sizeRef.current;i.height=parseFloat(n.height),i.width=parseFloat(n.width),i.top=t.offsetTop,i.left=t.offsetLeft,i.right=r-i.width-i.left,i.bottom=o-i.height-i.top,i.direction=n.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function b({children:e,isPresent:t,anchorX:r,anchorY:o,root:n,pop:i}){let s=(0,E.useId)(),l=(0,E.useRef)(null),c=(0,E.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:d}=(0,E.useContext)(C.MotionConfigContext),h=function(...e){return u.useCallback(function(...e){return t=>{let r=!1,o=e.map(e=>{let o=w(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():w(e[t],null)}}}}(...e),e)}(l,!1!==i?e.props?.ref??e?.ref:void 0);return(0,E.useInsertionEffect)(()=>{let{width:e,height:a,top:u,left:h,right:f,bottom:m,direction:p}=c.current;if(t||!1===i||!l.current||!e||!a)return;let g="rtl"===p,E="left"===r?g?`right: ${f}`:`left: ${h}`:g?`left: ${h}`:`right: ${f}`,C="bottom"===o?`bottom: ${m}`:`top: ${u}`;l.current.dataset.motionPopId=s;let w=document.createElement("style");d&&(w.nonce=d);let R=n??document.head;return R.appendChild(w),w.sheet&&w.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            ${E}px !important;
            ${C}px !important;
          }
        `),()=>{l.current?.removeAttribute("data-motion-pop-id"),R.contains(w)&&R.removeChild(w)}},[t]),(0,a.jsx)(R,{isPresent:t,childRef:l,sizeRef:c,pop:i,children:!1===i?e:E.cloneElement(e,{ref:h})})}let M=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:n,presenceAffectsLayout:i,mode:s,anchorX:l,anchorY:c,root:d})=>{let h=(0,f.useConstant)(x),g=(0,u.useId)(),E=(0,u.useRef)(r),C=(0,u.useRef)(o);(0,m.useIsomorphicLayoutEffect)(()=>{E.current=r,C.current=o});let w=!0,R=(0,u.useMemo)(()=>(w=!1,{id:g,initial:t,isPresent:r,custom:n,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;o&&o()},register:e=>(h.set(e,!1),()=>{h.delete(e),E.current||h.size||C.current?.()})}),[r,h,o]);return i&&w&&(R={...R}),(0,u.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[r]),u.useEffect(()=>{r||h.size||!o||o()},[r]),e=(0,a.jsx)(b,{pop:"popLayout"===s,isPresent:r,anchorX:l,anchorY:c,root:d,children:e}),(0,a.jsx)(p.PresenceContext.Provider,{value:R,children:e})};function x(){return new Map}var y=e.i(64978);let v=e=>e.key||"";function A(e){let t=[];return u.Children.forEach(e,e=>{(0,u.isValidElement)(e)&&t.push(e)}),t}let N=({children:e,custom:t,initial:r=!0,onExitComplete:o,presenceAffectsLayout:n=!0,mode:i="sync",propagate:s=!1,anchorX:l="left",anchorY:c="top",root:d})=>{let[p,g]=(0,y.usePresence)(s),E=(0,u.useMemo)(()=>A(e),[e]),C=s&&!p?[]:E.map(v),w=(0,u.useRef)(!0),R=(0,u.useRef)(E),b=(0,f.useConstant)(()=>new Map),x=(0,u.useRef)(new Set),[N,P]=(0,u.useState)(E),[I,S]=(0,u.useState)(E);(0,m.useIsomorphicLayoutEffect)(()=>{w.current=!1,R.current=E;for(let e=0;e<I.length;e++){let t=v(I[e]);C.includes(t)?(b.delete(t),x.current.delete(t)):!0!==b.get(t)&&b.set(t,!1)}},[I,C.length,C.join("-")]);let _=[];if(E!==N){let e=[...E];for(let t=0;t<I.length;t++){let r=I[t],o=v(r);C.includes(o)||(e.splice(t,0,r),_.push(r))}return"wait"===i&&_.length&&(e=_),S(A(e)),P(E),null}let{forceRender:k}=(0,u.useContext)(h.LayoutGroupContext);return(0,a.jsx)(a.Fragment,{children:I.map(e=>{let u=v(e),h=(!s||!!p)&&(E===I||C.includes(u));return(0,a.jsx)(M,{isPresent:h,initial:(!w.current||!!r)&&void 0,custom:t,presenceAffectsLayout:n,mode:i,root:d,onExitComplete:h?void 0:()=>{if(x.current.has(u)||!b.has(u))return;x.current.add(u),b.set(u,!0);let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(k?.(),S(R.current),s&&g?.(),o&&o())},anchorX:l,anchorY:c,children:e},u)})})};var P=Object.defineProperty,I=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$=(e,t)=>{for(var r in t||(t={}))S.call(t,r)&&k(e,r,t[r]);if(I)for(var r of I(t))_.call(t,r)&&k(e,r,t[r]);return e},z=(e,t)=>{var r={};for(var o in e)S.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&I)for(var o of I(e))0>t.indexOf(o)&&_.call(e,o)&&(r[o]=e[o]);return r};(e=>{let t=class t{constructor(e,r,o,i){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(i<-1||i>7)throw RangeError("Mask value out of range");this.size=4*e+17;let s=[];for(let e=0;e<this.size;e++)s.push(!1);for(let e=0;e<this.size;e++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const l=this.addEccAndInterleave(o);if(this.drawCodewords(l),-1==i){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const r=this.getPenaltyScore();r<e&&(i=t,e=r),this.applyMask(t)}}n(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(r,o){let n=e.QrSegment.makeSegments(r);return t.encodeSegments(n,o)}static encodeBinary(r,o){let n=e.QrSegment.makeBytes(r);return t.encodeSegments([n],o)}static encodeSegments(e,o,i=1,l=40,a=-1,u=!0){let c,d;if(!(t.MIN_VERSION<=i&&i<=l&&l<=t.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(c=i;;c++){let r=8*t.getNumDataCodewords(c,o),n=s.getTotalBits(e,c);if(n<=r){d=n;break}if(c>=l)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])u&&d<=8*t.getNumDataCodewords(c,e)&&(o=e);let h=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,h),r(t.numChars,t.mode.numCharCountBits(c),h),t.getData()))h.push(e);n(h.length==d);let f=8*t.getNumDataCodewords(c,o);n(h.length<=f),r(0,Math.min(4,f-h.length),h),r(0,(8-h.length%8)%8,h),n(h.length%8==0);for(let e=236;h.length<f;e^=253)r(e,8,h);let m=[];for(;8*m.length<h.length;)m.push(0);return h.forEach((e,t)=>m[t>>>3]|=e<<7-(7&t)),new t(c,o,m,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let o=0;o<t;o++)(0!=r||0!=o)&&(0!=r||o!=t-1)&&(r!=t-1||0!=o)&&this.drawAlignmentPattern(e[r],e[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let i=(t<<10|r)^21522;n(i>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,o(i,e));this.setFunctionModule(8,7,o(i,6)),this.setFunctionModule(8,8,o(i,7)),this.setFunctionModule(7,8,o(i,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,o(i,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,o(i,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,o(i,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;n(t>>>18==0);for(let e=0;e<18;e++){let r=o(t,e),n=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(n,i,r),this.setFunctionModule(i,n,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let o=-4;o<=4;o++){let n=Math.max(Math.abs(o),Math.abs(r)),i=e+o,s=t+r;0<=i&&i<this.size&&0<=s&&s<this.size&&this.setFunctionModule(i,s,2!=n&&4!=n)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,1!=Math.max(Math.abs(o),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,o=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,o))throw RangeError("Invalid argument");let i=t.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][r],s=t.ECC_CODEWORDS_PER_BLOCK[o.ordinal][r],l=Math.floor(t.getNumRawDataModules(r)/8),a=i-l%i,u=Math.floor(l/i),c=[],d=t.reedSolomonComputeDivisor(s);for(let r=0,o=0;r<i;r++){let n=e.slice(o,o+u-s+(r<a?0:1));o+=n.length;let i=t.reedSolomonComputeRemainder(n,d);r<a&&n.push(0),c.push(n.concat(i))}let h=[];for(let e=0;e<c[0].length;e++)c.forEach((t,r)=>{(e!=u-s||r>=a)&&h.push(t[e])});return n(h.length==l),h}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let i=0;i<2;i++){let s=t-i,l=(t+1&2)==0?this.size-1-n:n;!this.isFunction[l][s]&&r<8*e.length&&(this.modules[l][s]=o(e[r>>>3],7-(7&r)),r++)}}n(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let o;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let o=!1,n=0,i=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[r][s]==o?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,i),o||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),o=this.modules[r][s],n=1);e+=this.finderPenaltyTerminateAndCount(o,n,i)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let o=!1,n=0,i=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][r]==o?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,i),o||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),o=this.modules[s][r],n=1);e+=this.finderPenaltyTerminateAndCount(o,n,i)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let o=0;o<this.size-1;o++){let n=this.modules[r][o];n==this.modules[r][o+1]&&n==this.modules[r+1][o]&&n==this.modules[r+1][o+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+ +!!t,r);let o=this.size*this.size,i=Math.ceil(Math.abs(20*r-10*o)/o)-1;return n(0<=i&&i<=9),n(0<=(e+=i*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return n(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let o=1;for(let n=0;n<e;n++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],o),e+1<r.length&&(r[e]^=r[e+1]);o=t.reedSolomonMultiply(o,2)}return r}static reedSolomonComputeRemainder(e,r){let o=r.map(e=>0);for(let n of e){let e=n^o.shift();o.push(0),r.forEach((r,n)=>o[n]^=t.reedSolomonMultiply(r,e))}return o}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let o=7;o>=0;o--)r=r<<1^(r>>>7)*285^(t>>>o&1)*e;return n(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];n(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let o=t-1;o>=0;o--)r.push(e>>>o&1)}function o(e,t){return(e>>>t&1)!=0}function n(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let i=class e{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let o=[];for(let e of t)r(e,8,o);return new e(e.Mode.BYTE,t.length,o)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let o=[];for(let e=0;e<t.length;){let n=Math.min(t.length-e,3);r(parseInt(t.substring(e,e+n),10),3*n+1,o),e+=n}return new e(e.Mode.NUMERIC,t.length,o)}static makeAlphanumeric(t){let o;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(o=0;o+2<=t.length;o+=2){let i=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o));r(i+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o+1)),11,n)}return o<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let o=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)r(t,8,o);else if(t<16384)r(2,2,o),r(t,14,o);else if(t<1e6)r(6,3,o),r(t,21,o);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,o)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let o of e){let e=o.mode.numCharCountBits(t);if(o.numChars>=1<<e)return 1/0;r+=4+e+o.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t}};i.NUMERIC_REGEX=/^[0-9]*$/,i.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,i.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let s=i;e.QrSegment=i})(l||(l={})),n=(o=l||(l={})).QrCode||(o.QrCode={}),(t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}}).LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),n.Ecc=t,s=(i=l||(l={})).QrSegment||(i.QrSegment={}),(r=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}).NUMERIC=new r(1,[10,12,14]),r.ALPHANUMERIC=new r(2,[9,11,13]),r.BYTE=new r(4,[8,16,16]),r.KANJI=new r(8,[8,10,12]),r.ECI=new r(7,[0,0,0]),s.Mode=r;var O=l,L={L:O.QrCode.Ecc.LOW,M:O.QrCode.Ecc.MEDIUM,Q:O.QrCode.Ecc.QUARTILE,H:O.QrCode.Ecc.HIGH},F="#FFFFFF",B="#000000";function T(e,t=0){let r=[];return e.forEach(function(e,o){let n=null;e.forEach(function(i,s){if(!i&&null!==n){r.push(`M${n+t} ${o+t}h${s-n}v1H${n+t}z`),n=null;return}if(s===e.length-1){if(!i)return;null===n?r.push(`M${s+t},${o+t} h1v1H${s+t}z`):r.push(`M${n+t},${o+t} h${s+1-n}v1H${n+t}z`);return}i&&null===n&&(n=s)})}),r.join("")}function D(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function H({value:e,level:t,minVersion:r,includeMargin:o,marginSize:n,imageSettings:i,size:s,boostLevel:l}){let a=u.default.useMemo(()=>{let o=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...O.QrSegment.makeSegments(t)),e),[]);return O.QrCode.encodeSegments(o,L[t],r,void 0,void 0,l)},[e,t,r,l]),{cells:c,margin:d,numCells:h,calculatedImageSettings:f}=u.default.useMemo(()=>{let e=a.getModules(),t=null!=n?Math.max(Math.floor(n),0):4*!!o,r=e.length+2*t,l=function(e,t,r,o){if(null==o)return null;let n=e.length+2*r,i=Math.floor(.1*t),s=n/t,l=(o.width||i)*s,a=(o.height||i)*s,u=null==o.x?e.length/2-l/2:o.x*s,c=null==o.y?e.length/2-a/2:o.y*s,d=null==o.opacity?1:o.opacity,h=null;if(o.excavate){let e=Math.floor(u),t=Math.floor(c),r=Math.ceil(l+u-e),o=Math.ceil(a+c-t);h={x:e,y:t,w:r,h:o}}return{x:u,y:c,h:a,w:l,excavation:h,opacity:d,crossOrigin:o.crossOrigin}}(e,s,t,i);return{cells:e,margin:t,numCells:r,calculatedImageSettings:l}},[a,s,i,o,n]);return{qrcode:a,margin:d,cells:c,numCells:h,calculatedImageSettings:f}}var Q=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();u.default.forwardRef(function(e,t){let{value:r,size:o=128,level:n="L",bgColor:i=F,fgColor:s=B,includeMargin:l=!1,minVersion:a=1,boostLevel:c,marginSize:d,imageSettings:h}=e,f=z(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:m}=f,p=z(f,["style"]),g=null==h?void 0:h.src,E=u.default.useRef(null),C=u.default.useRef(null),w=u.default.useCallback(e=>{E.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[R,b]=u.default.useState(!1),{margin:M,cells:x,numCells:y,calculatedImageSettings:v}=H({value:r,level:n,minVersion:a,boostLevel:c,includeMargin:l,marginSize:d,imageSettings:h,size:o});u.default.useEffect(()=>{if(null!=E.current){let e=E.current,t=e.getContext("2d");if(!t)return;let r=x,n=C.current,l=null!=v&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;l&&null!=v.excavation&&(r=D(x,v.excavation));let a=window.devicePixelRatio||1;e.height=e.width=o*a;let u=o/y*a;t.scale(u,u),t.fillStyle=i,t.fillRect(0,0,y,y),t.fillStyle=s,Q?t.fill(new Path2D(T(r,M))):x.forEach(function(e,r){e.forEach(function(e,o){e&&t.fillRect(o+M,r+M,1,1)})}),v&&(t.globalAlpha=v.opacity),l&&t.drawImage(n,v.x+M,v.y+M,v.w,v.h)}}),u.default.useEffect(()=>{b(!1)},[g]);let A=$({height:o,width:o},m),N=null;return null!=g&&(N=u.default.createElement("img",{src:g,key:g,style:{display:"none"},onLoad:()=>{b(!0)},ref:C,crossOrigin:null==v?void 0:v.crossOrigin})),u.default.createElement(u.default.Fragment,null,u.default.createElement("canvas",$({style:A,height:o,width:o,ref:w,role:"img"},p)),N)}).displayName="QRCodeCanvas";var U=u.default.forwardRef(function(e,t){let{value:r,size:o=128,level:n="L",bgColor:i=F,fgColor:s=B,includeMargin:l=!1,minVersion:a=1,boostLevel:c,title:d,marginSize:h,imageSettings:f}=e,m=z(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:p,cells:g,numCells:E,calculatedImageSettings:C}=H({value:r,level:n,minVersion:a,boostLevel:c,includeMargin:l,marginSize:h,imageSettings:f,size:o}),w=g,R=null;null!=f&&null!=C&&(null!=C.excavation&&(w=D(g,C.excavation)),R=u.default.createElement("image",{href:f.src,height:C.h,width:C.w,x:C.x+p,y:C.y+p,preserveAspectRatio:"none",opacity:C.opacity,crossOrigin:C.crossOrigin}));let b=T(w,p);return u.default.createElement("svg",$({height:o,width:o,viewBox:`0 0 ${E} ${E}`,ref:t,role:"img"},m),!!d&&u.default.createElement("title",null,d),u.default.createElement("path",{fill:i,d:`M0,0 h${E}v${E}H0z`,shapeRendering:"crispEdges"}),u.default.createElement("path",{fill:s,d:b,shapeRendering:"crispEdges"}),R)});U.displayName="QRCodeSVG";var j=e.i(11152),V=e.i(28176),Y=e.i(25867);let X=(0,c.default)(d.motion.div).withConfig({displayName:"ResumeQRCode__QRCodeContainer",componentId:"sc-3135cbd6-0"})`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background: var(--color-background);
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform, opacity;
  contain: layout style;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    bottom: 16px;
    right: 16px;
    padding: 12px;
    max-width: 170px;
  }
`,G=(0,c.default)(d.motion.a).withConfig({displayName:"ResumeQRCode__MobileButton",componentId:"sc-3135cbd6-1"})`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.onAccent};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.85rem;
  border: 1px solid ${({theme:e})=>e.colors.accent};
  cursor: pointer;
  will-change: transform, opacity;
  contain: layout style;

  &:hover, &:focus {
    background: ${({theme:e})=>e.colors.text};
    border-color: ${({theme:e})=>e.colors.text};
    color: ${({theme:e})=>e.colors.background};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    bottom: 16px;
    right: 16px;
    font-size: 0.8rem;
    padding: 8px 14px;
  }
`,K=c.default.h4.withConfig({displayName:"ResumeQRCode__QRTitle",componentId:"sc-3135cbd6-2"})`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.muted};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 0.72rem;
    margin-bottom: 8px;
  }
`,W=c.default.p.withConfig({displayName:"ResumeQRCode__QRDescription",componentId:"sc-3135cbd6-3"})`
  margin: 8px 0 0;
  font-size: 0.72rem;
  text-align: center;
  color: ${({theme:e})=>e.colors.muted};
  line-height: 1.4;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 0.68rem;
    margin-top: 6px;
  }
`,J=c.default.button.withConfig({displayName:"ResumeQRCode__IconButton",componentId:"sc-3135cbd6-4"})`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: 0;
  line-height: 1;

  &::before {
    content: "×";
    display: block;
    transform: translateY(-1px);
  }

  &:hover {
    background: ${({theme:e})=>e.colors.text};
    color: ${({theme:e})=>e.colors.background};
    border-color: ${({theme:e})=>e.colors.text};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
    font-size: 10px;
    top: -6px;
    right: -6px;
  }
`,Z=c.default.div.withConfig({displayName:"ResumeQRCode__QRCodeWrapper",componentId:"sc-3135cbd6-5"})`
  position: relative;
  padding: 6px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme:e})=>e.colors.border};

  img {
    border-radius: 50% !important;
    border: 1px solid ${({theme:e})=>e.colors.border} !important;
    will-change: transform;
  }
`;e.s(["default",0,()=>{let e=(0,c.useTheme)(),[t,r]=(0,u.useState)(!1),[o,n]=(0,u.useState)(!1),[i,s]=(0,u.useState)(!1),l=(0,u.useRef)(null),d=(0,u.useRef)(null),h=(0,u.useCallback)(()=>{s(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768)},[]),f=(0,u.useCallback)(()=>{n(!0),r(!1)},[]),m=(0,Y.withBase)("/ShashankResume.pdf"),p=(0,Y.withBase)("/profile.jpg"),g=(0,u.useCallback)(e=>{(0,V.logResumeDownload)(e),f()},[f]),E=(0,u.useCallback)(()=>{(0,V.logQrInteraction)("widget_click"),f()},[f]),C={initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.2,ease:"easeOut"}};return(0,u.useEffect)(()=>{new Image().src=p,h();let e=()=>{requestAnimationFrame(h)};return window.addEventListener("resize",e,{passive:!0}),d.current=document.getElementById("hero"),d.current&&(l.current=new IntersectionObserver(e=>{let[t]=e;o||r(!t.isIntersecting)},{threshold:0}),l.current.observe(d.current)),()=>{window.removeEventListener("resize",e),l.current&&d.current&&(l.current.unobserve(d.current),l.current.disconnect())}},[h,o,p]),(0,a.jsxs)(N,{mode:"wait",children:[t&&!i&&(0,a.jsxs)(X,{...C,children:[(0,a.jsx)(J,{onClick:f,"aria-label":"Close resume QR code"}),(0,a.jsx)(K,{children:"Scan for Resume"}),(0,a.jsx)(Z,{children:(0,a.jsx)(U,{value:`${window.location.origin}${m}`,size:110,level:"H",bgColor:"transparent",fgColor:"dark"===e.mode?"#fff6c8":"#0a0906",imageSettings:{src:p,excavate:!0,height:32,width:32},onClick:E,style:{cursor:"pointer"}})}),(0,a.jsx)(W,{children:"Scan to download resume"})]}),t&&i&&(0,a.jsxs)(G,{href:m,download:"Shashank-Resume.pdf",...C,onClick:()=>g("mobile-cta"),"aria-label":"Download resume",children:[(0,a.jsx)(j.FaDownload,{})," Download Resume"]})]})}],5725)},99952,e=>{e.n(e.i(5725))}]);