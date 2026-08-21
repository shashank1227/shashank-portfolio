(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67585,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let o=e.r(32061);function n({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new o.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},9885,(e,t,i)=>{"use strict";function o(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"encodeURIPath",{enumerable:!0,get:function(){return o}})},52157,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"PreloadChunks",{enumerable:!0,get:function(){return c}});let o=e.r(43476),n=e.r(74080),r=e.r(63599),a=e.r(9885),s=e.r(43369);function c({moduleIds:e}){if("u">typeof window)return null;let t=r.workAsyncStorage.getStore();if(void 0===t)return null;let i=[];if(t.reactLoadableManifest&&e){let o=t.reactLoadableManifest;for(let t of e){if(!o[t])continue;let e=o[t].files;i.push(...e)}}if(0===i.length)return null;let l=(0,s.getAssetTokenQuery)();return(0,o.jsx)(o.Fragment,{children:i.map(e=>{let i=`${t.assetPrefix}/_next/${(0,a.encodeURIPath)(e)}${l}`;return e.endsWith(".css")?(0,o.jsx)("link",{precedence:"dynamic",href:i,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,n.preload)(i,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let o=e.r(43476),n=e.r(71645),r=e.r(67585),a=e.r(52157);function s(e){return{default:e&&"default"in e?e.default:e}}let c={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},l=function(e){let t={...c,...e},i=(0,n.lazy)(()=>t.loader().then(s)),l=t.loading;function d(e){let s=l?(0,o.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,c=!t.ssr||!!t.loading,d=c?n.Suspense:n.Fragment,p=t.ssr?(0,o.jsxs)(o.Fragment,{children:["u"<typeof window?(0,o.jsx)(a.PreloadChunks,{moduleIds:t.modules}):null,(0,o.jsx)(i,{...e})]}):(0,o.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(i,{...e})});return(0,o.jsx)(d,{...c?{fallback:s}:{},children:p})}return d.displayName="LoadableComponent",d}},70703,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return n}});let o=e.r(55682)._(e.r(69093));function n(e,t){let i={};"function"==typeof e&&(i.loader=e);let n={...i,...t};return(0,o.default)({...n,modules:n.loadableGenerated?.modules})}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},89594,e=>{"use strict";var t=e.i(43476),i=e.i(71645),o=e.i(70703),n=e.i(97053),r=e.i(46932),a=e.i(11152);function s(){return(s=Object.assign.bind()).apply(null,arguments)}var c={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,shouldBackspace:!0,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},l=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=s({},c,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.shouldBackspace=e.options.shouldBackspace,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(e.stringsElement.children),n=o.length;if(n)for(var r=0;r<n;r+=1)e.strings.push(o[r].innerHTML.trim())}for(var a in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[a]=a;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var i=document.createElement("style");i.setAttribute(t,"true"),i.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var i=document.createElement("style");i.setAttribute(t,"true"),i.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(i)}},e}()),d=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,i){if("html"!==i.contentType)return t;var o,n=e.substring(t).charAt(0);if("<"===n||"&"===n){for(o="<"===n?">":";";e.substring(t+1).charAt(0)!==o&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,i){if("html"!==i.contentType)return t;var o,n=e.substring(t).charAt(0);if(">"===n||";"===n){for(o=">"===n?"<":"&";e.substring(t-1).charAt(0)!==o&&!(--t<0););t--}return t},e}()),p=function(){function e(e,t){l.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.append=function(e){var t=this,i=this.strings[this.strings.length-1];this.strings.push(e),this.sequence=this.strings.map(function(e,t){return t}),this.typingComplete&&(this.timeout=this.shouldBackspace?setTimeout(function(){t.backspace(i,i.length-1)},this.backDelay):setTimeout(function(){t.arrayPos++,t.typewrite(t.strings[t.sequence[t.arrayPos]],0)},this.backDelay))},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)},t.typewrite=function(e,t){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),n=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=d.typeHtmlChars(e,t,i);var o,r=0,a=e.substring(t);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(o=1+(a=/\d+/.exec(a)[0]).length,r=parseInt(a),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),e=e.substring(0,t)+e.substring(t+o),i.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==e.substring(t+n).charAt(0)&&(n++,!(t+n>e.length)););var s=e.substring(0,t),c=e.substring(s.length+1,t+n);e=s+c+e.substring(t+n+1),n--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),t>=e.length?i.doneTyping(e,t):i.keepTyping(e,t,n),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},r)},o):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,i){if(0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),this.shouldBackspace){var o=e.substring(0,t+=i);this.replaceText(o)}else{var n=e.substring(t,t+i);t+=i,this.replaceText(n)}this.typewrite(e,t)},t.doneTyping=function(e,t){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.isFinalString()&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=this.shouldBackspace?setTimeout(function(){i.backspace(e,t)},this.backDelay):setTimeout(function(){i.arrayPos++,i.typewrite(i.strings[i.sequence[i.arrayPos]],0)},this.backDelay))},t.backspace=function(e,t){var i=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=d.backSpaceHtmlChars(e,t,i);var o=e.substring(0,t);if(i.replaceText(o),i.smartBackspace){var n=i.strings[i.sequence[i.arrayPos+1]];i.stopNum=n&&o===n.substring(0,t)?t:0}t>i.stopNum?(t--,i.backspace(e,t)):t<=i.stopNum&&(i.isFinalString()?i.lastStringBackspaced():(i.arrayPos++,i.typewrite(i.strings[i.sequence[i.arrayPos]],t)))},o)}else this.setPauseStatus(e,t,!1)},t.isFinalString=function(){return this.arrayPos===this.strings.length-1},t.lastStringBackspaced=function(){this.arrayPos=0,this.options.onLastStringBackspaced(),this.loop&&(this.shuffleStringsIfNeeded(),this.begin())},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,i){this.pause.typewrite=i,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.shouldBackspace?this.el.innerHTML=e:this.el.innerHTML+=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();let m=({strings:e,typeSpeed:o=50,backSpeed:n=30,backDelay:r=1500,loop:a=!0,smartBackspace:s=!0,className:c=""})=>{let l=(0,i.useRef)(null),[d,m]=(0,i.useState)("static"),h=e[0]??"",u=e.join("\0");return(0,i.useEffect)(()=>{if(0===e.length)return;let t=window.setTimeout(()=>{m("typed")},900);return()=>{window.clearTimeout(t)}},[e.length]),(0,i.useEffect)(()=>{if("typed"!==d||!l.current||!u)return;let e=new p(l.current,{strings:u.split("\0"),typeSpeed:o,backSpeed:n,backDelay:r,loop:a,smartBackspace:s});return()=>{e.destroy()}},[d,u,o,n,r,a,s]),(0,t.jsx)("span",{ref:l,className:c,suppressHydrationWarning:!0,children:"static"===d?h:null})};var h=e.i(25867),u=e.i(28176);let g=n.keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(12px, -18px, 0) scale(1.04); }
`,f=n.keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-16px, 10px, 0) rotate(6deg); }
`,b=n.default.section.withConfig({displayName:"Hero__HeroSection",componentId:"sc-cbac28f1-0"})`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  padding: 0;
`,y=n.default.div.withConfig({displayName:"Hero__Orb",componentId:"sc-cbac28f1-1"})`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  /* Soft edge without live blur filter (non-composited / expensive) */
  opacity: 0.9;
`,x=(0,n.default)(y).withConfig({displayName:"Hero__OrbPrimary",componentId:"sc-cbac28f1-2"})`
  width: min(48vw, 420px);
  height: min(48vw, 420px);
  top: -8%;
  right: -6%;
  background: radial-gradient(
    circle,
    var(--color-accent) 0%,
    transparent 70%
  );
  opacity: var(--orb-primary-opacity);
  animation: ${g} 10s ease-in-out infinite;
  will-change: transform;
`,w=(0,n.default)(y).withConfig({displayName:"Hero__OrbSecondary",componentId:"sc-cbac28f1-3"})`
  width: min(34vw, 280px);
  height: min(34vw, 280px);
  bottom: 8%;
  left: -8%;
  background: radial-gradient(
    circle,
    var(--orb-secondary-fill) 0%,
    transparent 70%
  );
  animation: ${f} 12s ease-in-out infinite;
  will-change: transform;
`,v=(0,n.default)(r.motion.div).withConfig({displayName:"Hero__AccentSlash",componentId:"sc-cbac28f1-4"})`
  position: absolute;
  top: 18%;
  right: 12%;
  width: 3px;
  height: 140px;
  background: ${({theme:e})=>e.colors.accent};
  border-radius: 999px;
  z-index: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    display: none;
  }
`,C=n.default.div.withConfig({displayName:"Hero__HeroContent",componentId:"sc-cbac28f1-5"})`
  position: relative;
  z-index: 1;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: ${({theme:e})=>e.spacing.lg} ${({theme:e})=>e.spacing.sm};
  }
`,k=n.default.div.withConfig({displayName:"Hero__ProfileRow",componentId:"sc-cbac28f1-6"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,_=n.default.img.withConfig({displayName:"Hero__ProfileImage",componentId:"sc-cbac28f1-7"})`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 3px solid ${({theme:e})=>e.colors.accent};
  background: ${({theme:e})=>e.colors.surface};

  @media (max-width: 480px) {
    width: 76px;
    height: 76px;
  }
`,j=n.default.span.withConfig({displayName:"Hero__Availability",componentId:"sc-cbac28f1-8"})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.secondary};
  padding: 0.55rem 0.85rem;
  background: ${({theme:e})=>e.colors.accentSoft};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.sm};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.accent};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.accentSoft};
  }
`,$=n.default.h1.withConfig({displayName:"Hero__Title",componentId:"sc-cbac28f1-9"})`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.text};
  max-width: 11ch;
  word-break: break-word;
  overflow: visible;
`,I=n.default.span.withConfig({displayName:"Hero__TitleAccent",componentId:"sc-cbac28f1-10"})`
  color: ${({theme:e})=>e.colors.accent};
`,S=n.default.h2.withConfig({displayName:"Hero__Subtitle",componentId:"sc-cbac28f1-11"})`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: clamp(1.1rem, 2.4vw, 1.45rem);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.5;
  padding-bottom: 0;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.secondary};
  min-height: 1.75em;
  overflow: visible;
`,N=n.default.p.withConfig({displayName:"Hero__HeroCopy",componentId:"sc-cbac28f1-12"})`
  max-width: 36rem;
  font-size: 1.08rem;
  line-height: 1.75;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.muted};
`,P=(0,n.default)(r.motion.button).withConfig({displayName:"Hero__CTAButton",componentId:"sc-cbac28f1-13"})`
  padding: 0.95rem 1.6rem;
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.onAccent};
  border: 1px solid ${({theme:e})=>e.colors.accent};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover, &:focus-visible {
    background: ${({theme:e})=>e.colors.text};
    border-color: ${({theme:e})=>e.colors.text};
    color: ${({theme:e})=>e.colors.background};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,A=(0,n.default)(r.motion.a).withConfig({displayName:"Hero__DownloadButton",componentId:"sc-cbac28f1-14"})`
  padding: 0.95rem 1.6rem;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  border: 1.5px solid ${({theme:e})=>e.colors.text};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover, &:focus-visible {
    background: ${({theme:e})=>e.colors.accentSoft};
    border-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }

  svg {
    font-size: 0.85rem;
  }
`,T=n.default.div.withConfig({displayName:"Hero__ButtonContainer",componentId:"sc-cbac28f1-15"})`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;

    ${P}, ${A} {
      width: 100%;
      justify-content: center;
    }
  }
`,z=()=>(0,t.jsxs)(b,{id:"hero",children:[(0,t.jsx)(x,{"aria-hidden":"true"}),(0,t.jsx)(w,{"aria-hidden":"true"}),(0,t.jsx)(v,{"aria-hidden":"true",initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1},transition:{duration:.7,delay:.4},style:{originY:0}}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(_,{src:(0,h.withBase)("/profile.jpg"),alt:"Shashank Shekhar Singh",width:88,height:88,loading:"eager",decoding:"async",fetchPriority:"high"}),(0,t.jsx)(j,{children:"Open to roles"})]}),(0,t.jsxs)($,{children:["Shashank"," ",(0,t.jsx)(I,{children:"Shekhar"})," ","Singh"]}),(0,t.jsx)(S,{children:(0,t.jsx)(m,{strings:["Senior Software Engineer","React • TypeScript • Node.js","Java • Spring Boot • AI/LLM"],typeSpeed:50,backSpeed:30,loop:!0,backDelay:1500,smartBackspace:!0})}),(0,t.jsx)(N,{children:"I build high-scale web applications, lead frontend architecture, and create production-oriented AI experiences with React, Spring Boot, OpenAI, LangChain, and RAG."}),(0,t.jsxs)(T,{children:[(0,t.jsx)(P,{onClick:()=>{(0,u.logCtaClick)("explore_projects","hero");let e=document.getElementById("projects");e&&e.scrollIntoView({behavior:"smooth"})},"aria-label":"Explore Shashank's projects",whileHover:{y:-3},whileTap:{y:0},children:"Explore Projects"}),(0,t.jsxs)(A,{href:(0,h.withBase)("/ShashankResume.pdf"),download:"Shashank-Resume.pdf","aria-label":"Download Shashank's Resume",onClick:()=>(0,u.logResumeDownload)("hero"),whileHover:{y:-3},whileTap:{y:0},children:[(0,t.jsx)(a.FaDownload,{})," Download Resume"]})]})]})]}),R=n.default.section.withConfig({displayName:"About__AboutSection",componentId:"sc-71ba3ed3-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,L=n.default.div.withConfig({displayName:"About__Container",componentId:"sc-71ba3ed3-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,B=(0,n.default)(r.motion.p).withConfig({displayName:"About__SectionLabel",componentId:"sc-71ba3ed3-2"})`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,E=(0,n.default)(r.motion.h2).withConfig({displayName:"About__Title",componentId:"sc-71ba3ed3-3"})`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.text};
  max-width: 16ch;

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin-top: 0.65rem;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 999px;
  }
`,O=n.default.div.withConfig({displayName:"About__Content",componentId:"sc-71ba3ed3-4"})`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,H=(0,n.default)(r.motion.div).withConfig({displayName:"About__Bio",componentId:"sc-71ba3ed3-5"})`
  p {
    font-size: 1.05rem;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    line-height: 1.8;
    color: ${({theme:e})=>e.colors.secondary};
  }
`,D=n.default.div.withConfig({displayName:"About__StatsRow",componentId:"sc-71ba3ed3-6"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,M=(0,n.default)(r.motion.div).withConfig({displayName:"About__Stat",componentId:"sc-71ba3ed3-7"})`
  padding: ${({theme:e})=>e.spacing.sm};
  background: ${({theme:e})=>e.colors.accentSoft};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};

  h3 {
    color: ${({theme:e})=>e.colors.accent};
    font-size: 1.35rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({theme:e})=>e.colors.muted};
    margin: 0;
  }
`,V=(0,n.default)(r.motion.div).withConfig({displayName:"About__SkillsContainer",componentId:"sc-71ba3ed3-8"})``,F=n.default.h3.withConfig({displayName:"About__SkillsHeading",componentId:"sc-71ba3ed3-9"})`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.muted};
`,G=n.default.div.withConfig({displayName:"About__SkillsGrid",componentId:"sc-71ba3ed3-10"})`
  display: grid;
  gap: ${({theme:e})=>e.spacing.md};
`,q=(0,n.default)(r.motion.div).withConfig({displayName:"About__SkillGroup",componentId:"sc-71ba3ed3-11"})`
  padding-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,U=n.default.h4.withConfig({displayName:"About__SkillGroupTitle",componentId:"sc-71ba3ed3-12"})`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.65rem;
`,W=n.default.div.withConfig({displayName:"About__SkillList",componentId:"sc-71ba3ed3-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.85rem;
`,J=n.default.span.withConfig({displayName:"About__Skill",componentId:"sc-71ba3ed3-14"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.92rem;
  position: relative;

  &:not(:last-child)::after {
    content: '·';
    margin-left: 0.85rem;
    color: ${({theme:e})=>e.colors.border};
  }
`,Y=[{title:"Frontend",skills:["React","Next.js","TypeScript","JavaScript","Redux","Accessibility"]},{title:"Backend & Data",skills:["Java","Node.js","Express.js","Spring Boot","REST APIs","PostgreSQL","MongoDB"]},{title:"AI & Delivery",skills:["OpenAI APIs","LangChain","RAG","Docker","AWS","CI/CD"]}],Q=()=>(0,t.jsx)(R,{children:(0,t.jsxs)(L,{children:[(0,t.jsx)(B,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"About"}),(0,t.jsx)(E,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"About Me"}),(0,t.jsxs)(O,{children:[(0,t.jsxs)(H,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsx)("p",{children:"I’m a Senior Software Engineer with 5+ years of experience building enterprise-scale web applications for global teams. My work spans frontend architecture, performance optimization, accessibility, reusable component systems, and modern delivery practices."}),(0,t.jsx)("p",{children:"Over the last few years, I’ve led high-impact initiatives at Adobe and PayPal, modernizing large product surfaces and reducing repetitive engineering effort through automation and shared UI patterns. I’m now expanding my work into AI-powered full-stack products using Java, Spring Boot, OpenAI APIs, LangChain, and RAG."}),(0,t.jsxs)(D,{children:[(0,t.jsxs)(M,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsx)("h3",{children:"5+ Years"}),(0,t.jsx)("p",{children:"Building scalable web products across enterprise environments."})]}),(0,t.jsxs)(M,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08},children:[(0,t.jsx)("h3",{children:"AI Focus"}),(0,t.jsx)("p",{children:"Creating LLM-powered applications with retrieval and production-ready architecture."})]})]})]}),(0,t.jsxs)(V,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsx)(F,{children:"Core Strengths"}),(0,t.jsx)(G,{children:Y.map((e,i)=>(0,t.jsxs)(q,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*i},children:[(0,t.jsx)(U,{children:e.title}),(0,t.jsx)(W,{children:e.skills.map(e=>(0,t.jsx)(J,{children:e},e))})]},e.title))})]})]})]})}),K=n.default.section.withConfig({displayName:"Experience__ExperienceSection",componentId:"sc-c70cabe5-0"})`
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,X=n.default.div.withConfig({displayName:"Experience__Container",componentId:"sc-c70cabe5-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,Z=(0,n.default)(r.motion.p).withConfig({displayName:"Experience__SectionLabel",componentId:"sc-c70cabe5-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,ee=(0,n.default)(r.motion.h2).withConfig({displayName:"Experience__Title",componentId:"sc-c70cabe5-3"})`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.text};

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin-top: 0.65rem;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 999px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
`,et=n.default.div.withConfig({displayName:"Experience__Timeline",componentId:"sc-c70cabe5-4"})`
  display: flex;
  flex-direction: column;
  gap: 0;
`,ei=(0,n.default)(r.motion.article).withConfig({displayName:"Experience__TimelineItem",componentId:"sc-c70cabe5-5"})`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.sm};
    padding: ${({theme:e})=>e.spacing.md} 0;
  }
`,eo=n.default.div.withConfig({displayName:"Experience__Meta",componentId:"sc-c70cabe5-6"})``,en=n.default.p.withConfig({displayName:"Experience__Duration",componentId:"sc-c70cabe5-7"})`
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: 0.35rem;
`,er=n.default.p.withConfig({displayName:"Experience__Location",componentId:"sc-c70cabe5-8"})`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.muted};
`,ea=n.default.div.withConfig({displayName:"Experience__Body",componentId:"sc-c70cabe5-9"})``,es=n.default.h3.withConfig({displayName:"Experience__Role",componentId:"sc-c70cabe5-10"})`
  font-size: 1.35rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.35rem;
`,ec=n.default.h4.withConfig({displayName:"Experience__Company",componentId:"sc-c70cabe5-11"})`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,el=n.default.ul.withConfig({displayName:"Experience__AchievementList",componentId:"sc-c70cabe5-12"})`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,ed=n.default.li.withConfig({displayName:"Experience__Achievement",componentId:"sc-c70cabe5-13"})`
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors.muted};
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 4px;
    height: 1px;
    background: ${({theme:e})=>e.colors.accent};
  }
`,ep=[{role:"Senior Engineer",company:"GlobalLogic Technologies (Client: Adobe)",location:"Gurugram, India",duration:"Apr 2025 – Present",achievements:["Build enterprise-grade full-stack applications using React.js, TypeScript, Java, and Spring Boot, delivering reusable UI components and scalable backend services adopted across multiple product modules, cutting duplicate implementation effort by approximately 30%.","Design and integrate secure RESTful APIs, enabling seamless communication between frontend and backend services for high-performance enterprise applications.","Engineer Node.js automation utilities that streamline pricing token migration across 40+ regional configurations, reducing manual engineering effort by nearly 90% and improving deployment consistency.","Optimize application performance through lazy loading, code splitting, backend API tuning, and component refactoring, improving Lighthouse performance scores by up to 20 points across key user journeys.","Implement WCAG 2.1-compliant accessibility enhancements across enterprise applications, improving usability for keyboard navigation and assistive technology users."]},{role:"Associate Process Manager (Software Engineering)",company:"eClerx Services Ltd. (Client: PayPal)",location:"Mumbai, India",duration:"Apr 2023 – Apr 2025",achievements:["Led frontend development for PayPal’s global rebranding initiative, modernizing more than 150 enterprise pages and improving UI consistency.","Developed reusable component libraries and shared utilities that reduced duplicate implementation effort by nearly 35%.","Built Node.js automation scripts that reduced repetitive validation activities by approximately 60%.","Resolved WCAG compliance issues through semantic HTML, keyboard support and ARIA improvements for inclusive enterprise experiences."]},{role:"Senior Analyst",company:"eClerx Services Ltd. (Client: PayPal)",location:"Mumbai, India",duration:"Jul 2021 – Mar 2023",achievements:["Designed and delivered responsive React applications using JavaScript and TypeScript for enterprise product teams.","Applied performance optimization techniques such as code splitting, memoization and asset improvement to enhance user experience.","Integrated RESTful APIs and backend services while maintaining a clean application architecture.","Received Employee of the Year (2022) for outstanding technical contributions and strategic automation initiatives."]}],em=()=>(0,t.jsx)(K,{id:"experience",children:(0,t.jsxs)(X,{children:[(0,t.jsx)(Z,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Career"}),(0,t.jsx)(ee,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Professional Experience"}),(0,t.jsx)(et,{children:ep.map((e,i)=>(0,t.jsxs)(ei,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.06*i},children:[(0,t.jsxs)(eo,{children:[(0,t.jsx)(en,{children:e.duration}),(0,t.jsx)(er,{children:e.location})]}),(0,t.jsxs)(ea,{children:[(0,t.jsx)(es,{children:e.role}),(0,t.jsx)(ec,{children:e.company}),(0,t.jsx)(el,{children:e.achievements.map(e=>(0,t.jsx)(ed,{children:e},e))})]})]},e.role))})]})}),eh=n.default.section.withConfig({displayName:"Projects__ProjectsSection",componentId:"sc-13e7dad1-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: ${({theme:e})=>e.spacing.lg} 0;
  }
`,eu=n.default.div.withConfig({displayName:"Projects__Container",componentId:"sc-13e7dad1-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 0 ${({theme:e})=>e.spacing.sm};
  }
`,eg=(0,n.default)(r.motion.p).withConfig({displayName:"Projects__SectionLabel",componentId:"sc-13e7dad1-2"})`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,ef=(0,n.default)(r.motion.h2).withConfig({displayName:"Projects__Title",componentId:"sc-13e7dad1-3"})`
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin-top: 0.65rem;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 999px;
  }
`,eb=n.default.div.withConfig({displayName:"Projects__ProjectsList",componentId:"sc-13e7dad1-4"})`
  display: flex;
  flex-direction: column;
`,ey=(0,n.default)(r.motion.article).withConfig({displayName:"Projects__ProjectRow",componentId:"sc-13e7dad1-5"})`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({theme:e})=>e.spacing.lg} 1rem;
  margin: 0 -1rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-left: 3px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:last-child {
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.hoverSurface};
    border-left-color: ${({theme:e})=>e.colors.accent};
    transform: translateX(4px);
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.sm};
    padding: ${({theme:e})=>e.spacing.md} 0.75rem;
    margin: 0 -0.75rem;
  }
`,ex=n.default.h3.withConfig({displayName:"Projects__ProjectTitle",componentId:"sc-13e7dad1-6"})`
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  transition: color 0.2s ease;

  ${ey}:hover & {
    color: ${({theme:e})=>e.colors.accent};
  }
`,ew=n.default.p.withConfig({displayName:"Projects__ProjectDescription",componentId:"sc-13e7dad1-7"})`
  color: ${({theme:e})=>e.colors.muted};
  line-height: 1.75;
  font-size: 1rem;
`,ev=n.default.div.withConfig({displayName:"Projects__ProjectLinks",componentId:"sc-13e7dad1-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 0.85rem;
`,eC=`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
`,ek=n.default.a.withConfig({displayName:"Projects__ProjectLink",componentId:"sc-13e7dad1-9"})`
  ${eC}
  color: ${({theme:e})=>e.colors.accent};

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({theme:e})=>e.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,e_=n.default.button.withConfig({displayName:"Projects__DemoButton",componentId:"sc-13e7dad1-10"})`
  ${eC}
  color: ${({theme:e})=>e.colors.accent};

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({theme:e})=>e.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,ej=n.default.div.withConfig({displayName:"Projects__TechStack",componentId:"sc-13e7dad1-11"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;
  align-content: flex-start;
`,e$=n.default.span.withConfig({displayName:"Projects__TechTag",componentId:"sc-13e7dad1-12"})`
  color: ${({theme:e})=>e.colors.secondary};
  font-size: 0.88rem;
  letter-spacing: 0.01em;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 0.75rem;
    color: ${({theme:e})=>e.colors.muted};
    opacity: 0.45;
  }
`,eI=n.default.div.withConfig({displayName:"Projects__ModalOverlay",componentId:"sc-13e7dad1-13"})`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
  z-index: 1000;
`,eS=n.default.div.withConfig({displayName:"Projects__ModalContent",componentId:"sc-13e7dad1-14"})`
  position: relative;
  width: min(100%, 960px);
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
`,eN=n.default.div.withConfig({displayName:"Projects__ModalHeader",componentId:"sc-13e7dad1-15"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,eP=n.default.h3.withConfig({displayName:"Projects__ModalTitle",componentId:"sc-13e7dad1-16"})`
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  font-size: 1rem;
`,eA=n.default.button.withConfig({displayName:"Projects__CloseButton",componentId:"sc-13e7dad1-17"})`
  background: transparent;
  border: 0;
  color: ${({theme:e})=>e.colors.muted};
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({theme:e})=>e.colors.text};
  }
`,eT=n.default.div.withConfig({displayName:"Projects__VideoFrame",componentId:"sc-13e7dad1-18"})`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #0a0906;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`,ez=n.default.div.withConfig({displayName:"Projects__ModalFooter",componentId:"sc-13e7dad1-19"})`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eR=[{title:"Enterprise AI Knowledge Assistant",description:"Built a RAG-based enterprise knowledge assistant using OpenAI models to deliver accurate, context-aware answers from documentation.",tech:["React","Java","Spring Boot","PostgreSQL","LangChain","OpenAI","RAG"],links:[{label:"GitHub",href:"https://github.com/shashank1227/enterprise-ai-knowledge-assistant"}],demoVideo:{label:"Watch demo",embedUrl:"https://drive.google.com/file/d/1Y0DkVD1MTQQbD_PGj3QL5BtrogR4sHUX/preview",openUrl:"https://drive.google.com/file/d/1Y0DkVD1MTQQbD_PGj3QL5BtrogR4sHUX/view?usp=drive_link"}},{title:"AI Documentation Copilot",description:"Built a RAG documentation chat app (DocForge) that uploads PDF/Markdown, embeds chunks with OpenAI into Postgres pgvector, and answers questions with sourced citations via LangChain4j.",tech:["React","Java","Spring Boot","PostgreSQL","pgvector","LangChain4j","OpenAI","Docker"],links:[{label:"GitHub",href:"https://github.com/shashank1227/ai-documentation-copilot"}],demoVideo:{label:"Watch demo",embedUrl:"https://drive.google.com/file/d/1Sf7vJGD6CWrVUZJKYYeRzDT27OAK112c/preview",openUrl:"https://drive.google.com/file/d/1Sf7vJGD6CWrVUZJKYYeRzDT27OAK112c/view?usp=drive_link"}},{title:"AI Code Review Assistant",description:"Created an intelligent assistant that analyzes GitHub pull requests and provides AI-assisted recommendations for code quality, maintainability and best practices.",tech:["React","Spring Boot","GitHub API","OpenAI","Docker"],links:[{label:"GitHub",href:"https://github.com/shashank1227/code-review-assistant"}],demoVideo:{label:"Watch demo",embedUrl:"https://drive.google.com/file/d/10zdJUWiqFcJ0794jlnadIdWzsE32IWom/preview",openUrl:"https://drive.google.com/file/d/10zdJUWiqFcJ0794jlnadIdWzsE32IWom/view?usp=sharing"}},{title:"Weather App",description:"Built a minimal Next.js weather app with city search, geolocation, hourly and 7-day forecasts, weather-aware icons, and light/dark mode using Open-Meteo — no API key required.",tech:["Next.js","React","Open-Meteo","Geolocation API"],links:[{label:"Live demo",href:"https://shashank1227.github.io/WeatherApp/"},{label:"GitHub",href:"https://github.com/shashank1227/WeatherApp"}]},{title:"URL Redirect Checker",description:"Built a Node.js CLI that audits thousands of URLs from CSV/Excel, captures full redirect chains, status codes, latency, and SSL errors, and flags broken links, loops, multi-hop chains, and canonical issues in a report.",tech:["Node.js","Axios","CSV","Excel","CLI"],links:[{label:"GitHub",href:"https://github.com/shashank1227/url-redirect-checker"}]},{title:"Image Hoster",description:"Built a Spring Boot image hosting application with registration and login, plus upload, edit, delete, and tag-based organization backed by PostgreSQL.",tech:["Java","Spring Boot","Thymeleaf","JPA","PostgreSQL"],links:[{label:"GitHub",href:"https://github.com/shashank1227/Image-Hoster"}]}],eL=()=>{let[e,o]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!e)return;let t=e=>{"Escape"===e.key&&o(null)};document.addEventListener("keydown",t);let i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",t),document.body.style.overflow=i}},[e]),(0,t.jsxs)(eh,{id:"projects",children:[(0,t.jsxs)(eu,{children:[(0,t.jsx)(eg,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Work"}),(0,t.jsx)(ef,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Featured Projects"}),(0,t.jsx)(eb,{children:eR.map((e,i)=>{let n=!!(e.links?.length||e.demoVideo);return(0,t.jsxs)(ey,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*i},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(ex,{children:e.title}),(0,t.jsx)(ew,{children:e.description}),n&&(0,t.jsxs)(ev,{children:[e.demoVideo&&(0,t.jsxs)(e_,{type:"button",onClick:()=>{(0,u.logDemoOpen)(e.title),o(e)},"aria-label":`${e.demoVideo.label} for ${e.title}`,children:[e.demoVideo.label," →"]}),e.links?.map(i=>(0,t.jsxs)(ek,{href:i.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${i.label} for ${e.title}`,onClick:()=>(0,u.logOutboundClick)(i.href,`${e.title} — ${i.label}`,"projects"),children:[i.label," →"]},i.href))]})]}),(0,t.jsx)(ej,{children:e.tech.map(e=>(0,t.jsx)(e$,{children:e},e))})]},e.title)})})]}),e?.demoVideo&&(0,t.jsx)(eI,{onClick:()=>o(null),children:(0,t.jsxs)(eS,{onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true",children:[(0,t.jsxs)(eN,{children:[(0,t.jsxs)(eP,{children:[e.title," — Demo"]}),(0,t.jsx)(eA,{type:"button",onClick:()=>o(null),"aria-label":"Close demo",children:"×"})]}),(0,t.jsx)(eT,{children:(0,t.jsx)("iframe",{src:e.demoVideo.embedUrl,title:`${e.title} demo video`,allow:"autoplay; encrypted-media; fullscreen; picture-in-picture",allowFullScreen:!0})}),(0,t.jsx)(ez,{children:(0,t.jsx)(ek,{href:e.demoVideo.openUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>(0,u.logOutboundClick)(e.demoVideo.openUrl,`${e.title} — Open in Google Drive`,"projects_demo"),children:"Open in Google Drive →"})})]})})]})},eB=n.default.section.withConfig({displayName:"Testimonials__TestimonialsSection",componentId:"sc-9cceb3c3-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eE=n.default.div.withConfig({displayName:"Testimonials__Container",componentId:"sc-9cceb3c3-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,eO=(0,n.default)(r.motion.p).withConfig({displayName:"Testimonials__SectionLabel",componentId:"sc-9cceb3c3-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,eH=(0,n.default)(r.motion.h2).withConfig({displayName:"Testimonials__Title",componentId:"sc-9cceb3c3-3"})`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.text};

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin-top: 0.65rem;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 999px;
  }
`,eD=(0,n.default)(r.motion.blockquote).withConfig({displayName:"Testimonials__TestimonialBlock",componentId:"sc-9cceb3c3-4"})`
  margin: 0 0 ${({theme:e})=>e.spacing.lg};
  padding: 0;
  border: none;
`,eM=n.default.span.withConfig({displayName:"Testimonials__QuoteMark",componentId:"sc-9cceb3c3-5"})`
  display: block;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 3rem;
  color: ${({theme:e})=>e.colors.accent};
  line-height: 1;
  margin-bottom: 0.75rem;
  opacity: 0.7;
`,eV=n.default.div.withConfig({displayName:"Testimonials__TestimonialText",componentId:"sc-9cceb3c3-6"})`
  font-size: 1.05rem;
  line-height: 1.85;
  color: ${({theme:e})=>e.colors.secondary};
  max-width: 48rem;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,eF=n.default.footer.withConfig({displayName:"Testimonials__TestimonialFooter",componentId:"sc-9cceb3c3-7"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eG=n.default.img.withConfig({displayName:"Testimonials__TestimonialImage",componentId:"sc-9cceb3c3-8"})`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,eq=n.default.div.withConfig({displayName:"Testimonials__TestimonialAuthor",componentId:"sc-9cceb3c3-9"})`
  display: flex;
  flex-direction: column;
`,eU=n.default.cite.withConfig({displayName:"Testimonials__AuthorName",componentId:"sc-9cceb3c3-10"})`
  font-style: normal;
  font-weight: 600;
  font-family: ${({theme:e})=>e.fonts.heading};
  color: ${({theme:e})=>e.colors.text};
`,eW=n.default.span.withConfig({displayName:"Testimonials__AuthorTitle",componentId:"sc-9cceb3c3-11"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.9rem;
  margin-top: 0.2rem;
`,eJ=n.default.div.withConfig({displayName:"Testimonials__HighlightsGrid",componentId:"sc-9cceb3c3-12"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,eY=(0,n.default)(r.motion.div).withConfig({displayName:"Testimonials__HighlightItem",componentId:"sc-9cceb3c3-13"})`
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  border-right: 1px solid ${({theme:e})=>e.colors.border};

  &:nth-child(2n) {
    border-right: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    border-right: none;
  }

  h3 {
    font-size: 1.1rem;
    color: ${({theme:e})=>e.colors.text};
    margin-bottom: 0.6rem;
  }

  p {
    line-height: 1.7;
    color: ${({theme:e})=>e.colors.muted};
    font-size: 0.95rem;
  }
`,eQ="Shireen Roy",eK=[{title:"Leadership & Ownership",text:"Led frontend modernization initiatives, mentored engineers, and helped improve release confidence through stronger engineering practices."},{title:"Recognition",text:"Recognized as Employee of the Year in 2022 for outstanding technical contributions and successful automation initiatives."},{title:"Continuous Growth",text:"Expanded into Java, Spring Boot, OpenAI APIs, LangChain and RAG through production-focused portfolio projects and hands-on learning."},{title:"Enterprise Impact",text:"Delivered solutions for Adobe and PayPal programs, balancing performance, accessibility, scalability and maintainability."}],eX=()=>(0,t.jsx)(eB,{children:(0,t.jsxs)(eE,{children:[(0,t.jsx)(eO,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Impact"}),(0,t.jsx)(eH,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Recognition & Impact"}),(0,t.jsxs)(eD,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsx)(eM,{children:"“"}),(0,t.jsx)(eV,{children:"I consider myself fortunate to have had the opportunity to closely collaborate with Shashank for over a year. In that time, he has consistently stood out as an exceptional talent. Shashank's technical expertise and problem-solving abilities are truly remarkable. He consistently delivers well-rounded and meticulously researched solutions, demonstrating a keen eye for detail.\n\nOne of Shashank's notable strengths is his ability to thrive in a fast-paced environment while simultaneously managing multiple tasks. His efficient work style and exceptional time management skills ensure that deadlines are consistently met. Moreover, his aptitude for effective collaboration with cross-functional teams is invaluable. Shashank possesses the unique ability to communicate complex technical information to non-technical stakeholders in a clear and understandable manner.\n\nFurthermore, Shashank's commitment to being a team player is commendable. He actively shares his knowledge with his peers, contributing to the growth and development of the entire team. His willingness to support and assist others is truly inspiring.\n\nIn summary, I wholeheartedly recommend Shashank for any endeavor that requires a highly skilled, detail-oriented, and collaborative professional. He will undoubtedly make a significant and positive impact wherever he goes.".split("\n\n").map((e,i)=>(0,t.jsx)("p",{children:e},i))}),(0,t.jsxs)(eF,{children:[(0,t.jsx)(eG,{src:(0,h.withBase)("/shireenroy.jpeg"),alt:eQ,width:56,height:56,loading:"lazy",decoding:"async"}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(eU,{children:eQ}),(0,t.jsx)(eW,{children:"Principal Consultant at Genpact Headstrong Canada"})]})]})]}),(0,t.jsx)(eJ,{children:eK.map((e,i)=>(0,t.jsxs)(eY,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.06*i},children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.text})]},e.title))})]})}),eZ=n.default.section.withConfig({displayName:"Certifications__CertificationsSection",componentId:"sc-21987072-0"})`
  padding: ${({theme:e})=>e.spacing.xl} 0;
  background: transparent;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,e0=n.default.div.withConfig({displayName:"Certifications__Container",componentId:"sc-21987072-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,e1=(0,n.default)(r.motion.p).withConfig({displayName:"Certifications__SectionLabel",componentId:"sc-21987072-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,e2=(0,n.default)(r.motion.h2).withConfig({displayName:"Certifications__Title",componentId:"sc-21987072-3"})`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.text};

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin-top: 0.65rem;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 999px;
  }
`,e5=n.default.div.withConfig({displayName:"Certifications__CertificationsGrid",componentId:"sc-21987072-4"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-left: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,e7=n.default.div.withConfig({displayName:"Certifications__RecognitionSection",componentId:"sc-21987072-5"})`
  margin-top: ${({theme:e})=>e.spacing.lg};
`,e3=n.default.h3.withConfig({displayName:"Certifications__RecognitionTitle",componentId:"sc-21987072-6"})`
  font-size: 1.25rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,e8=n.default.div.withConfig({displayName:"Certifications__RecognitionGrid",componentId:"sc-21987072-7"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-left: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,e9=n.default.div.withConfig({displayName:"Certifications__RecognitionImageGrid",componentId:"sc-21987072-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme:e})=>e.spacing.sm};
`,e4=(0,n.default)(r.motion.div).withConfig({displayName:"Certifications__CertificationCard",componentId:"sc-21987072-9"})`
  padding: ${({theme:e})=>e.spacing.md};
  border-right: 1px solid ${({theme:e})=>e.colors.border};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: transparent;
  transition: background 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.hoverSurface};
  }
`,e6=n.default.h3.withConfig({displayName:"Certifications__CertificationTitle",componentId:"sc-21987072-10"})`
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.45rem;
`,te=n.default.p.withConfig({displayName:"Certifications__CertificationIssuer",componentId:"sc-21987072-11"})`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.secondary};
  margin-bottom: 0.35rem;
`,tt=n.default.p.withConfig({displayName:"Certifications__CertificationDate",componentId:"sc-21987072-12"})`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  letter-spacing: 0.02em;
`,ti=(0,n.default)(r.motion.button).withConfig({displayName:"Certifications__RecognitionImageCard",componentId:"sc-21987072-13"})`
  background: transparent;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 0;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease;
  width: 100%;

  &:hover {
    border-color: ${({theme:e})=>e.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 2px;
  }
`,to=n.default.img.withConfig({displayName:"Certifications__RecognitionImage",componentId:"sc-21987072-14"})`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  filter: grayscale(0.25) contrast(1.05);
  transition: filter 0.25s ease;

  ${ti}:hover & {
    filter: grayscale(0) contrast(1);
  }
`,tn=n.default.div.withConfig({displayName:"Certifications__ImageMeta",componentId:"sc-21987072-15"})`
  padding: ${({theme:e})=>e.spacing.sm};

  h4 {
    color: ${({theme:e})=>e.colors.text};
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.85rem;
    color: ${({theme:e})=>e.colors.muted};
  }
`,tr=n.default.div.withConfig({displayName:"Certifications__ModalOverlay",componentId:"sc-21987072-16"})`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
  z-index: 1000;
`,ta=n.default.div.withConfig({displayName:"Certifications__ModalContent",componentId:"sc-21987072-17"})`
  position: relative;
  width: min(100%, 960px);
  max-height: 90vh;
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,ts=n.default.img.withConfig({displayName:"Certifications__ModalImage",componentId:"sc-21987072-18"})`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
`,tc=n.default.div.withConfig({displayName:"Certifications__ModalHeader",componentId:"sc-21987072-19"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,tl=n.default.h3.withConfig({displayName:"Certifications__ModalTitle",componentId:"sc-21987072-20"})`
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  font-size: 1rem;
`,td=n.default.button.withConfig({displayName:"Certifications__CloseButton",componentId:"sc-21987072-21"})`
  background: transparent;
  border: 0;
  color: ${({theme:e})=>e.colors.muted};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.text};
  }
`,tp=[{title:"Full Stack Development Certification",issuer:"upGrad",date:"2020"},{title:"Advanced Learning in Java, Spring Boot & AI",issuer:"Self-directed",date:"2024–2025"}],tm=[{title:"Employee of the Year",issuer:"eClerx Services Limited",date:"2022"},{title:"Appreciation Certificates",issuer:"Client & Leadership Recognition",date:"Multiple engagements"}],th=[{src:"01_Certificate_of_Appreciation.jpg",title:"Certificate of Appreciation",description:"GlobalLogic recognition for contribution and ownership"},{src:"02_Rewards_Recognition_Jun-Aug25.jpg",title:"Rewards & Recognition",description:"Recognition for June–August 2025 impact"},{src:"03_Certificate_of_Recognition_Sept2025.jpg",title:"September 2025 Recognition",description:"Certificate of recognition for strong delivery"},{src:"04_Certificate_of_Recognition_Nov2025.jpg",title:"November 2025 Recognition",description:"Appreciation certificate for project excellence"},{src:"05_Certificate_of_Recognition_Dec2025.jpg",title:"December 2025 Recognition",description:"Recognition for consistent contribution"},{src:"06_Rewards_Recognition_Adobe.jpg",title:"Rewards & Recognition – Adobe",description:"Recognition tied to Adobe engagement delivery"},{src:"Employee_of_the_Year_Award_eClerx22.jpg",title:"Employee of the Year — eClerx",description:"Employee of the Year award at eClerx Services (2022)"}],tu=()=>{let[e,o]=(0,i.useState)(null),[n,r]=(0,i.useState)(""),a=()=>{o(null),r("")};return(0,t.jsxs)(eZ,{children:[(0,t.jsxs)(e0,{children:[(0,t.jsx)(e1,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Credentials"}),(0,t.jsx)(e2,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Education & Certifications"}),(0,t.jsxs)(e5,{children:[(0,t.jsxs)(e4,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsx)(e6,{children:"Bachelor of Engineering in Computer Science & Engineering"}),(0,t.jsx)(te,{children:"Chitkara University, Himachal Pradesh"}),(0,t.jsx)(tt,{children:"2017 – 2021"})]}),tp.map((e,i)=>(0,t.jsxs)(e4,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*i},children:[(0,t.jsx)(e6,{children:e.title}),(0,t.jsx)(te,{children:e.issuer}),(0,t.jsx)(tt,{children:e.date})]},e.title))]}),(0,t.jsxs)(e7,{children:[(0,t.jsx)(e3,{children:"Appreciation Certificates & Awards"}),(0,t.jsx)(e8,{children:tm.map((e,i)=>(0,t.jsxs)(e4,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.06*i},children:[(0,t.jsx)(e6,{children:e.title}),(0,t.jsx)(te,{children:e.issuer}),(0,t.jsx)(tt,{children:e.date})]},e.title))}),(0,t.jsx)(e9,{children:th.map((e,i)=>(0,t.jsxs)(ti,{type:"button",initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.04*i},onClick:()=>{var t,i;return t=(0,h.withBase)(`/${e.src}`),i=e.title,void(o(t),r(i))},children:[(0,t.jsx)(to,{src:(0,h.withBase)(`/${e.src}`),alt:e.title,loading:"lazy",decoding:"async",width:480,height:220}),(0,t.jsxs)(tn,{children:[(0,t.jsx)("h4",{children:e.title}),(0,t.jsx)("p",{children:e.description})]})]},e.src))})]})]}),e&&(0,t.jsx)(tr,{onClick:a,children:(0,t.jsxs)(ta,{onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)(tc,{children:[(0,t.jsx)(tl,{children:n}),(0,t.jsx)(td,{type:"button",onClick:a,"aria-label":"Close image",children:"×"})]}),(0,t.jsx)(ts,{src:e,alt:n})]})})]})},tg=n.default.section.withConfig({displayName:"Contact__ContactSection",componentId:"sc-5f2ac2b5-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  scroll-margin-top: 2rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,tf=n.default.div.withConfig({displayName:"Contact__Container",componentId:"sc-5f2ac2b5-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,tb=(0,n.default)(r.motion.p).withConfig({displayName:"Contact__SectionLabel",componentId:"sc-5f2ac2b5-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  text-align: center;
`,ty=(0,n.default)(r.motion.h2).withConfig({displayName:"Contact__Title",componentId:"sc-5f2ac2b5-3"})`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.text};
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin: 0.65rem auto 0;
    background: ${({theme:e})=>e.colors.accent};
    border-radius: 999px;
  }
`,tx=n.default.div.withConfig({displayName:"Contact__ContactContent",componentId:"sc-5f2ac2b5-4"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  max-width: 920px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,tw=(0,n.default)(r.motion.form).withConfig({displayName:"Contact__ContactForm",componentId:"sc-5f2ac2b5-5"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,tv=n.default.input.withConfig({displayName:"Contact__Input",componentId:"sc-5f2ac2b5-6"})`
  padding: 0.95rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({theme:e})=>e.colors.accent};
  }
`,tC=n.default.textarea.withConfig({displayName:"Contact__TextArea",componentId:"sc-5f2ac2b5-7"})`
  padding: 0.95rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 0;
  color: ${({theme:e})=>e.colors.text};
  font-size: 1rem;
  font-family: inherit;
  min-height: 140px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({theme:e})=>e.colors.accent};
  }
`,tk=(0,n.default)(r.motion.button).withConfig({displayName:"Contact__SubmitButton",componentId:"sc-5f2ac2b5-8"})`
  margin-top: ${({theme:e})=>e.spacing.sm};
  padding: 0.95rem 1.5rem;
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.onAccent};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.colors.accent};
  align-self: flex-start;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.text};
    border-color: ${({theme:e})=>e.colors.text};
    color: ${({theme:e})=>e.colors.background};
  }
`,t_=(0,n.default)(r.motion.div).withConfig({displayName:"Contact__ContactInfo",componentId:"sc-5f2ac2b5-9"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,tj=n.default.p.withConfig({displayName:"Contact__ContactText",componentId:"sc-5f2ac2b5-10"})`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({theme:e})=>e.colors.secondary};
`,t$=n.default.div.withConfig({displayName:"Contact__ContactDetails",componentId:"sc-5f2ac2b5-11"})`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: ${({theme:e})=>e.spacing.sm};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,tI=n.default.a.withConfig({displayName:"Contact__ContactItem",componentId:"sc-5f2ac2b5-12"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.muted};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({theme:e})=>e.colors.accent};
    flex-shrink: 0;
  }
`,tS=(0,n.default)(r.motion.div).withConfig({displayName:"Contact__ThankYouMessage",componentId:"sc-5f2ac2b5-13"})`
  text-align: left;
  padding: ${({theme:e})=>e.spacing.md} 0;
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.05rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,tN=n.default.div.withConfig({displayName:"Contact__ErrorMessage",componentId:"sc-5f2ac2b5-14"})`
  color: #c47a7a;
  margin-top: ${({theme:e})=>e.spacing.sm};
  font-size: 0.9rem;
`,tP=()=>{let[e,o]=(0,i.useState)({name:"",email:"",message:""}),[n,r]=(0,i.useState)("idle"),a=(e,t)=>{(0,u.logOutboundClick)(e,t,"contact")},s=t=>{o({...e,[t.target.name]:t.target.value})};return(0,t.jsx)(tg,{id:"contact",children:(0,t.jsxs)(tf,{children:[(0,t.jsx)(tb,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Contact"}),(0,t.jsx)(ty,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Let’s Connect"}),(0,t.jsxs)(tx,{children:[(0,t.jsx)(tw,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},onSubmit:e=>{e.preventDefault(),fetch("https://formspree.io/f/mvgzybrb",{method:"POST",body:new FormData(e.target),headers:{Accept:"application/json"}}).then(e=>{e.ok?(r("success"),(0,u.logContactSubmit)("success"),o({name:"",email:"",message:""})):(r("error"),(0,u.logContactSubmit)("error"))}).catch(()=>{r("error"),(0,u.logContactSubmit)("error")})},action:"https://formspree.io/f/mvgzybrb",method:"POST",children:"success"===n?(0,t.jsx)(tS,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},children:"Thank you for your message. I’ll get back to you soon."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tv,{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:s,required:!0,autoComplete:"name"}),(0,t.jsx)(tv,{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:s,required:!0,autoComplete:"email"}),(0,t.jsx)(tC,{name:"message",placeholder:"Your Message",value:e.message,onChange:s,required:!0,autoComplete:"off"}),(0,t.jsx)(tk,{type:"submit",whileHover:{y:-2},whileTap:{y:0},children:"Send Message"}),"error"===n&&(0,t.jsx)(tN,{children:"Oops! There was a problem submitting your form. Please try again."})]})}),(0,t.jsxs)(t_,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08},children:[(0,t.jsx)(tj,{children:"I’m currently exploring opportunities where I can contribute as a senior frontend or full-stack engineer, especially around modern React architectures, AI-powered products and scalable product delivery."}),(0,t.jsxs)(t$,{children:[(0,t.jsxs)(tI,{href:"mailto:shashanknet50@gmail.com",target:"_blank",rel:"noopener noreferrer",onClick:()=>a("mailto:shashanknet50@gmail.com","email"),children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,t.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),"shashanknet50@gmail.com"]}),(0,t.jsxs)(tI,{href:"tel:+919129853380",target:"_blank",rel:"noopener noreferrer",onClick:()=>a("tel:+919129853380","phone"),children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"+91-9129853380"]}),(0,t.jsxs)(tI,{href:"https://linkedin.com/in/shashesi",target:"_blank",rel:"noopener noreferrer",onClick:()=>a("https://linkedin.com/in/shashesi","linkedin"),children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}),(0,t.jsx)("path",{d:"M4 10h4v10H4z"}),(0,t.jsx)("path",{d:"M10 10h4v1.5h.1c.6-1.1 1.9-2.3 4-2.3 4.2 0 5 2.8 5 6.4V20h-4v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V20h-4z"})]}),"linkedin.com/in/shashesi"]}),(0,t.jsxs)(tI,{href:"https://github.com/shashank1227",target:"_blank",rel:"noopener noreferrer",onClick:()=>a("https://github.com/shashank1227","github"),children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M9 19c-4.3 1.4-4.3-2.5-6-3"}),(0,t.jsx)("path",{d:"M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.3A4.9 4.9 0 0 0 19 4.9 4.4 4.4 0 0 0 18.1 4c-.7-.2-2.2-.4-4.8 1.8A16.2 16.2 0 0 0 8 5.9C5.2 5.8 4.8 5.9 4.1 6a4.4 4.4 0 0 0-.9.9 4.9 4.9 0 0 0-.5 3.3c0 4.9 2.9 6 5.7 6.3-.6.6-.6 1.2-.5 2V21"})]}),"github.com/shashank1227"]})]})]})]})]})})},tA=n.default.footer.withConfig({displayName:"Footer__FooterSection",componentId:"sc-81a8ac13-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.md} 0;
  margin-top: auto;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,tT=n.default.div.withConfig({displayName:"Footer__FooterContent",componentId:"sc-81a8ac13-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sm};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`,tz=n.default.p.withConfig({displayName:"Footer__Copyright",componentId:"sc-81a8ac13-2"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.85rem;
`,tR=n.default.div.withConfig({displayName:"Footer__SocialLinks",componentId:"sc-81a8ac13-3"})`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,tL=(0,n.default)(r.motion.a).withConfig({displayName:"Footer__SocialLink",componentId:"sc-81a8ac13-4"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 1.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,tB=()=>{let e=new Date().getFullYear();return(0,t.jsx)(tA,{children:(0,t.jsxs)(tT,{children:[(0,t.jsxs)(tz,{children:[e," Shashank Shekhar Singh"]}),(0,t.jsxs)(tR,{children:[(0,t.jsx)(tL,{href:"https://linkedin.com/in/shashesi/",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Shashank's LinkedIn profile",onClick:()=>(0,u.logOutboundClick)("https://linkedin.com/in/shashesi/","linkedin","footer"),whileHover:{y:-2},children:(0,t.jsx)(a.FaLinkedin,{"aria-label":"LinkedIn icon"})}),(0,t.jsx)(tL,{href:"https://github.com/shashank1227",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Shashank's GitHub profile",onClick:()=>(0,u.logOutboundClick)("https://github.com/shashank1227","github","footer"),whileHover:{y:-2},children:(0,t.jsx)(a.FaGithub,{"aria-label":"GitHub icon"})})]})]})})},tE=(0,o.default)(()=>e.A(93740),{loadableGenerated:{modules:[99952]},ssr:!1}),tO=n.default.main.withConfig({displayName:"Portfolio__MainContent",componentId:"sc-a1a524ec-0"})`
  display: flex;
  flex-direction: column;
  flex: 1;
`;e.s(["default",0,()=>((0,i.useEffect)(()=>{let t;return e.A(8059).then(({shouldTrack:e,initGA:i,logPageView:o,setupEngagementTracking:n,GA_MEASUREMENT_ID:r})=>{e()&&(i(r),o(),t=n())}).catch(()=>{}),()=>{t?.()}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(tO,{children:[(0,t.jsx)(z,{}),(0,t.jsx)(Q,{}),(0,t.jsx)(em,{}),(0,t.jsx)(eL,{}),(0,t.jsx)(eX,{}),(0,t.jsx)(tu,{}),(0,t.jsx)(tP,{})]}),(0,t.jsx)(tB,{}),(0,t.jsx)(tE,{})]}))],89594)}]);