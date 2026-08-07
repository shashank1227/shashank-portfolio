(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89594,e=>{"use strict";let t,i;var o,n,r,a,s,l=e.i(43476),c=e.i(71645),d=e.i(97053),p=e.i(46932),m=e.i(11152);function h(){return(h=Object.assign.bind()).apply(null,arguments)}var u={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,shouldBackspace:!0,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},g=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=h({},u,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.shouldBackspace=e.options.shouldBackspace,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(e.stringsElement.children),n=o.length;if(n)for(var r=0;r<n;r+=1)e.strings.push(o[r].innerHTML.trim())}for(var a in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[a]=a;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var i=document.createElement("style");i.setAttribute(t,"true"),i.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var i=document.createElement("style");i.setAttribute(t,"true"),i.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(i)}},e}()),f=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,i){if("html"!==i.contentType)return t;var o,n=e.substring(t).charAt(0);if("<"===n||"&"===n){for(o="<"===n?">":";";e.substring(t+1).charAt(0)!==o&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,i){if("html"!==i.contentType)return t;var o,n=e.substring(t).charAt(0);if(">"===n||";"===n){for(o=">"===n?"<":"&";e.substring(t-1).charAt(0)!==o&&!(--t<0););t--}return t},e}()),b=function(){function e(e,t){g.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.append=function(e){var t=this,i=this.strings[this.strings.length-1];this.strings.push(e),this.sequence=this.strings.map(function(e,t){return t}),this.typingComplete&&(this.timeout=this.shouldBackspace?setTimeout(function(){t.backspace(i,i.length-1)},this.backDelay):setTimeout(function(){t.arrayPos++,t.typewrite(t.strings[t.sequence[t.arrayPos]],0)},this.backDelay))},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)},t.typewrite=function(e,t){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),n=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=f.typeHtmlChars(e,t,i);var o,r=0,a=e.substring(t);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(o=1+(a=/\d+/.exec(a)[0]).length,r=parseInt(a),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),e=e.substring(0,t)+e.substring(t+o),i.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==e.substring(t+n).charAt(0)&&(n++,!(t+n>e.length)););var s=e.substring(0,t),l=e.substring(s.length+1,t+n);e=s+l+e.substring(t+n+1),n--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),t>=e.length?i.doneTyping(e,t):i.keepTyping(e,t,n),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},r)},o):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,i){if(0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),this.shouldBackspace){var o=e.substring(0,t+=i);this.replaceText(o)}else{var n=e.substring(t,t+i);t+=i,this.replaceText(n)}this.typewrite(e,t)},t.doneTyping=function(e,t){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.isFinalString()&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=this.shouldBackspace?setTimeout(function(){i.backspace(e,t)},this.backDelay):setTimeout(function(){i.arrayPos++,i.typewrite(i.strings[i.sequence[i.arrayPos]],0)},this.backDelay))},t.backspace=function(e,t){var i=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=f.backSpaceHtmlChars(e,t,i);var o=e.substring(0,t);if(i.replaceText(o),i.smartBackspace){var n=i.strings[i.sequence[i.arrayPos+1]];i.stopNum=n&&o===n.substring(0,t)?t:0}t>i.stopNum?(t--,i.backspace(e,t)):t<=i.stopNum&&(i.isFinalString()?i.lastStringBackspaced():(i.arrayPos++,i.typewrite(i.strings[i.sequence[i.arrayPos]],t)))},o)}else this.setPauseStatus(e,t,!1)},t.isFinalString=function(){return this.arrayPos===this.strings.length-1},t.lastStringBackspaced=function(){this.arrayPos=0,this.options.onLastStringBackspaced(),this.loop&&(this.shuffleStringsIfNeeded(),this.begin())},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,i){this.pause.typewrite=i,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.shouldBackspace?this.el.innerHTML=e:this.el.innerHTML+=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();let y=({strings:e,typeSpeed:t=50,backSpeed:i=30,backDelay:o=1500,loop:n=!0,smartBackspace:r=!0,className:a=""})=>{let s=(0,c.useRef)(null),d=(0,c.useRef)(null);return(0,c.useEffect)(()=>(s.current&&(d.current=new b(s.current,{strings:e,typeSpeed:t,backSpeed:i,backDelay:o,loop:n,smartBackspace:r})),()=>{d.current?.destroy()}),[e,t,i,o,n,r]),(0,l.jsx)("span",{ref:s,className:a})};function x(e){let t=e.startsWith("/")?e:`/${e}`;return`/shashank-portfolio${t}`}e.i(47167);let w=d.keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(12px, -18px, 0) scale(1.04); }
`,C=d.keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-16px, 10px, 0) rotate(6deg); }
`,v=d.default.section.withConfig({displayName:"Hero__HeroSection",componentId:"sc-cbac28f1-0"})`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  padding: 0;
`,k=d.default.div.withConfig({displayName:"Hero__Orb",componentId:"sc-cbac28f1-1"})`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(2px);
`,$=(0,d.default)(k).withConfig({displayName:"Hero__OrbPrimary",componentId:"sc-cbac28f1-2"})`
  width: min(48vw, 420px);
  height: min(48vw, 420px);
  top: -8%;
  right: -6%;
  background: ${({theme:e})=>e.colors.accent};
  opacity: ${({theme:e})=>"dark"===e.mode?.18:.35};
  animation: ${w} 10s ease-in-out infinite;
`,_=(0,d.default)(k).withConfig({displayName:"Hero__OrbSecondary",componentId:"sc-cbac28f1-3"})`
  width: min(34vw, 280px);
  height: min(34vw, 280px);
  bottom: 8%;
  left: -8%;
  background: ${({theme:e})=>"dark"===e.mode?"rgba(255, 217, 61, 0.2)":"rgba(255, 255, 255, 0.4)"};
  animation: ${C} 12s ease-in-out infinite;
`,I=(0,d.default)(p.motion.div).withConfig({displayName:"Hero__AccentSlash",componentId:"sc-cbac28f1-4"})`
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
`,j=d.default.div.withConfig({displayName:"Hero__HeroContent",componentId:"sc-cbac28f1-5"})`
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
`,S=(0,d.default)(p.motion.div).withConfig({displayName:"Hero__ProfileRow",componentId:"sc-cbac28f1-6"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,N=d.default.img.withConfig({displayName:"Hero__ProfileImage",componentId:"sc-cbac28f1-7"})`
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
`,E=d.default.span.withConfig({displayName:"Hero__Availability",componentId:"sc-cbac28f1-8"})`
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
`,R=(0,d.default)(p.motion.h1).withConfig({displayName:"Hero__Title",componentId:"sc-cbac28f1-9"})`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  color: ${({theme:e})=>e.colors.text};
  max-width: 11ch;
  word-break: break-word;
  overflow: visible;
`,A=d.default.span.withConfig({displayName:"Hero__TitleAccent",componentId:"sc-cbac28f1-10"})`
  color: ${({theme:e})=>e.colors.accent};
`,P=(0,d.default)(p.motion.h2).withConfig({displayName:"Hero__Subtitle",componentId:"sc-cbac28f1-11"})`
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
`,M=(0,d.default)(p.motion.p).withConfig({displayName:"Hero__HeroCopy",componentId:"sc-cbac28f1-12"})`
  max-width: 36rem;
  font-size: 1.08rem;
  line-height: 1.75;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.muted};
`,z=(0,d.default)(p.motion.button).withConfig({displayName:"Hero__CTAButton",componentId:"sc-cbac28f1-13"})`
  padding: 0.95rem 1.6rem;
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.onAccent};
  border: 1px solid ${({theme:e})=>e.colors.accent};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover, &:focus-visible {
    background: ${({theme:e})=>e.colors.text};
    border-color: ${({theme:e})=>e.colors.text};
    color: ${({theme:e})=>e.colors.background};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,T=(0,d.default)(p.motion.a).withConfig({displayName:"Hero__DownloadButton",componentId:"sc-cbac28f1-14"})`
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
`,L=d.default.div.withConfig({displayName:"Hero__ButtonContainer",componentId:"sc-cbac28f1-15"})`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;

    ${z}, ${T} {
      width: 100%;
      justify-content: center;
    }
  }
`,B=()=>(0,l.jsxs)(v,{id:"hero",children:[(0,l.jsx)($,{"aria-hidden":"true"}),(0,l.jsx)(_,{"aria-hidden":"true"}),(0,l.jsx)(I,{"aria-hidden":"true",initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1},transition:{duration:.7,delay:.4},style:{originY:0}}),(0,l.jsxs)(j,{children:[(0,l.jsxs)(S,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,l.jsx)(N,{src:x("/profile.jpg"),alt:"Shashank Shekhar Singh",width:88,height:88,loading:"eager",decoding:"sync"}),(0,l.jsx)(E,{children:"Open to roles"})]}),(0,l.jsxs)(R,{initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{duration:.65,delay:.1},children:["Shashank"," ",(0,l.jsx)(A,{children:"Shekhar"})," ","Singh"]}),(0,l.jsx)(P,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.25},children:(0,l.jsx)(y,{strings:["Senior Software Engineer","React • TypeScript • Node.js","Java • Spring Boot • AI/LLM"],typeSpeed:50,backSpeed:30,loop:!0,backDelay:1500,smartBackspace:!0})}),(0,l.jsx)(M,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.35},children:"I build high-scale web applications, lead frontend architecture, and create production-oriented AI experiences with React, Spring Boot, OpenAI, LangChain, and RAG."}),(0,l.jsxs)(L,{children:[(0,l.jsx)(z,{onClick:()=>{let e=document.getElementById("projects");e&&e.scrollIntoView({behavior:"smooth"})},"aria-label":"Explore Shashank's projects",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.55,delay:.45},whileHover:{y:-3},whileTap:{y:0},children:"Explore Projects"}),(0,l.jsxs)(T,{href:x("/ShashankResume.pdf"),download:"Shashank-Resume.pdf","aria-label":"Download Shashank's Resume",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.55,delay:.55},whileHover:{y:-3},whileTap:{y:0},children:[(0,l.jsx)(m.FaDownload,{})," Download Resume"]})]})]})]}),O=d.default.section.withConfig({displayName:"About__AboutSection",componentId:"sc-71ba3ed3-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,H=d.default.div.withConfig({displayName:"About__Container",componentId:"sc-71ba3ed3-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,D=(0,d.default)(p.motion.p).withConfig({displayName:"About__SectionLabel",componentId:"sc-71ba3ed3-2"})`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,F=(0,d.default)(p.motion.h2).withConfig({displayName:"About__Title",componentId:"sc-71ba3ed3-3"})`
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
`,V=d.default.div.withConfig({displayName:"About__Content",componentId:"sc-71ba3ed3-4"})`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,U=(0,d.default)(p.motion.div).withConfig({displayName:"About__Bio",componentId:"sc-71ba3ed3-5"})`
  p {
    font-size: 1.05rem;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    line-height: 1.8;
    color: ${({theme:e})=>e.colors.secondary};
  }
`,G=d.default.div.withConfig({displayName:"About__StatsRow",componentId:"sc-71ba3ed3-6"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,Q=(0,d.default)(p.motion.div).withConfig({displayName:"About__Stat",componentId:"sc-71ba3ed3-7"})`
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
`,Y=(0,d.default)(p.motion.div).withConfig({displayName:"About__SkillsContainer",componentId:"sc-71ba3ed3-8"})``,W=d.default.h3.withConfig({displayName:"About__SkillsHeading",componentId:"sc-71ba3ed3-9"})`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.muted};
`,q=d.default.div.withConfig({displayName:"About__SkillsGrid",componentId:"sc-71ba3ed3-10"})`
  display: grid;
  gap: ${({theme:e})=>e.spacing.md};
`,J=(0,d.default)(p.motion.div).withConfig({displayName:"About__SkillGroup",componentId:"sc-71ba3ed3-11"})`
  padding-bottom: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,K=d.default.h4.withConfig({displayName:"About__SkillGroupTitle",componentId:"sc-71ba3ed3-12"})`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.65rem;
`,X=d.default.div.withConfig({displayName:"About__SkillList",componentId:"sc-71ba3ed3-13"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.85rem;
`,Z=d.default.span.withConfig({displayName:"About__Skill",componentId:"sc-71ba3ed3-14"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.92rem;
  position: relative;

  &:not(:last-child)::after {
    content: '·';
    margin-left: 0.85rem;
    color: ${({theme:e})=>e.colors.border};
  }
`,ee=[{title:"Frontend",skills:["React","Next.js","TypeScript","JavaScript","Redux","Accessibility"]},{title:"Backend & Data",skills:["Java","Node.js","Express.js","Spring Boot","REST APIs","PostgreSQL","MongoDB"]},{title:"AI & Delivery",skills:["OpenAI APIs","LangChain","RAG","Docker","AWS","CI/CD"]}],et=()=>(0,l.jsx)(O,{children:(0,l.jsxs)(H,{children:[(0,l.jsx)(D,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"About"}),(0,l.jsx)(F,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"About Me"}),(0,l.jsxs)(V,{children:[(0,l.jsxs)(U,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,l.jsx)("p",{children:"I’m a Senior Software Engineer with 5+ years of experience building enterprise-scale web applications for global teams. My work spans frontend architecture, performance optimization, accessibility, reusable component systems, and modern delivery practices."}),(0,l.jsx)("p",{children:"Over the last few years, I’ve led high-impact initiatives at Adobe and PayPal, modernizing large product surfaces and reducing repetitive engineering effort through automation and shared UI patterns. I’m now expanding my work into AI-powered full-stack products using Java, Spring Boot, OpenAI APIs, LangChain, and RAG."}),(0,l.jsxs)(G,{children:[(0,l.jsxs)(Q,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,l.jsx)("h3",{children:"5+ Years"}),(0,l.jsx)("p",{children:"Building scalable web products across enterprise environments."})]}),(0,l.jsxs)(Q,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08},children:[(0,l.jsx)("h3",{children:"AI Focus"}),(0,l.jsx)("p",{children:"Creating LLM-powered applications with retrieval and production-ready architecture."})]})]})]}),(0,l.jsxs)(Y,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,l.jsx)(W,{children:"Core Strengths"}),(0,l.jsx)(q,{children:ee.map((e,t)=>(0,l.jsxs)(J,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*t},children:[(0,l.jsx)(K,{children:e.title}),(0,l.jsx)(X,{children:e.skills.map(e=>(0,l.jsx)(Z,{children:e},e))})]},e.title))})]})]})]})}),ei=d.default.section.withConfig({displayName:"Experience__ExperienceSection",componentId:"sc-c70cabe5-0"})`
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eo=d.default.div.withConfig({displayName:"Experience__Container",componentId:"sc-c70cabe5-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,en=(0,d.default)(p.motion.p).withConfig({displayName:"Experience__SectionLabel",componentId:"sc-c70cabe5-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,er=(0,d.default)(p.motion.h2).withConfig({displayName:"Experience__Title",componentId:"sc-c70cabe5-3"})`
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
`,ea=d.default.div.withConfig({displayName:"Experience__Timeline",componentId:"sc-c70cabe5-4"})`
  display: flex;
  flex-direction: column;
  gap: 0;
`,es=(0,d.default)(p.motion.article).withConfig({displayName:"Experience__TimelineItem",componentId:"sc-c70cabe5-5"})`
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
`,el=d.default.div.withConfig({displayName:"Experience__Meta",componentId:"sc-c70cabe5-6"})``,ec=d.default.p.withConfig({displayName:"Experience__Duration",componentId:"sc-c70cabe5-7"})`
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: 0.35rem;
`,ed=d.default.p.withConfig({displayName:"Experience__Location",componentId:"sc-c70cabe5-8"})`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors.muted};
`,ep=d.default.div.withConfig({displayName:"Experience__Body",componentId:"sc-c70cabe5-9"})``,em=d.default.h3.withConfig({displayName:"Experience__Role",componentId:"sc-c70cabe5-10"})`
  font-size: 1.35rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.35rem;
`,eh=d.default.h4.withConfig({displayName:"Experience__Company",componentId:"sc-c70cabe5-11"})`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  color: ${({theme:e})=>e.colors.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,eu=d.default.ul.withConfig({displayName:"Experience__AchievementList",componentId:"sc-c70cabe5-12"})`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`,eg=d.default.li.withConfig({displayName:"Experience__Achievement",componentId:"sc-c70cabe5-13"})`
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
`,ef=[{role:"Senior Engineer",company:"GlobalLogic Technologies (Client: Adobe)",location:"Gurugram, India",duration:"Apr 2025 – Present",achievements:["Build enterprise-grade full-stack applications using React.js, TypeScript, Java, and Spring Boot, delivering reusable UI components and scalable backend services adopted across multiple product modules, cutting duplicate implementation effort by approximately 30%.","Design and integrate secure RESTful APIs, enabling seamless communication between frontend and backend services for high-performance enterprise applications.","Engineer Node.js automation utilities that streamline pricing token migration across 40+ regional configurations, reducing manual engineering effort by nearly 90% and improving deployment consistency.","Optimize application performance through lazy loading, code splitting, backend API tuning, and component refactoring, improving Lighthouse performance scores by up to 20 points across key user journeys.","Implement WCAG 2.1-compliant accessibility enhancements across enterprise applications, improving usability for keyboard navigation and assistive technology users."]},{role:"Associate Process Manager (Software Engineering)",company:"eClerx Services Ltd. (Client: PayPal)",location:"Mumbai, India",duration:"Apr 2023 – Apr 2025",achievements:["Led frontend development for PayPal’s global rebranding initiative, modernizing more than 150 enterprise pages and improving UI consistency.","Developed reusable component libraries and shared utilities that reduced duplicate implementation effort by nearly 35%.","Built Node.js automation scripts that reduced repetitive validation activities by approximately 60%.","Resolved WCAG compliance issues through semantic HTML, keyboard support and ARIA improvements for inclusive enterprise experiences."]},{role:"Senior Analyst",company:"eClerx Services Ltd. (Client: PayPal)",location:"Mumbai, India",duration:"Jul 2021 – Mar 2023",achievements:["Designed and delivered responsive React applications using JavaScript and TypeScript for enterprise product teams.","Applied performance optimization techniques such as code splitting, memoization and asset improvement to enhance user experience.","Integrated RESTful APIs and backend services while maintaining a clean application architecture.","Received Employee of the Year (2022) for outstanding technical contributions and strategic automation initiatives."]}],eb=()=>(0,l.jsx)(ei,{id:"experience",children:(0,l.jsxs)(eo,{children:[(0,l.jsx)(en,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Career"}),(0,l.jsx)(er,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Professional Experience"}),(0,l.jsx)(ea,{children:ef.map((e,t)=>(0,l.jsxs)(es,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.06*t},children:[(0,l.jsxs)(el,{children:[(0,l.jsx)(ec,{children:e.duration}),(0,l.jsx)(ed,{children:e.location})]}),(0,l.jsxs)(ep,{children:[(0,l.jsx)(em,{children:e.role}),(0,l.jsx)(eh,{children:e.company}),(0,l.jsx)(eu,{children:e.achievements.map(e=>(0,l.jsx)(eg,{children:e},e))})]})]},e.role))})]})}),ey=d.default.section.withConfig({displayName:"Projects__ProjectsSection",componentId:"sc-13e7dad1-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: ${({theme:e})=>e.spacing.lg} 0;
  }
`,ex=d.default.div.withConfig({displayName:"Projects__Container",componentId:"sc-13e7dad1-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 0 ${({theme:e})=>e.spacing.sm};
  }
`,ew=(0,d.default)(p.motion.p).withConfig({displayName:"Projects__SectionLabel",componentId:"sc-13e7dad1-2"})`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,eC=(0,d.default)(p.motion.h2).withConfig({displayName:"Projects__Title",componentId:"sc-13e7dad1-3"})`
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
`,ev=d.default.div.withConfig({displayName:"Projects__ProjectsList",componentId:"sc-13e7dad1-4"})`
  display: flex;
  flex-direction: column;
`,ek=(0,d.default)(p.motion.article).withConfig({displayName:"Projects__ProjectRow",componentId:"sc-13e7dad1-5"})`
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
`,e$=d.default.h3.withConfig({displayName:"Projects__ProjectTitle",componentId:"sc-13e7dad1-6"})`
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  transition: color 0.2s ease;

  ${ek}:hover & {
    color: ${({theme:e})=>e.colors.accent};
  }
`,e_=d.default.p.withConfig({displayName:"Projects__ProjectDescription",componentId:"sc-13e7dad1-7"})`
  color: ${({theme:e})=>e.colors.muted};
  line-height: 1.75;
  font-size: 1rem;
`,eI=d.default.div.withConfig({displayName:"Projects__ProjectLinks",componentId:"sc-13e7dad1-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 0.85rem;
`,ej=`
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
`,eS=d.default.a.withConfig({displayName:"Projects__ProjectLink",componentId:"sc-13e7dad1-9"})`
  ${ej}
  color: ${({theme:e})=>e.colors.accent};

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({theme:e})=>e.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,eN=d.default.button.withConfig({displayName:"Projects__DemoButton",componentId:"sc-13e7dad1-10"})`
  ${ej}
  color: ${({theme:e})=>e.colors.accent};

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({theme:e})=>e.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,eE=d.default.div.withConfig({displayName:"Projects__TechStack",componentId:"sc-13e7dad1-11"})`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;
  align-content: flex-start;
`,eR=d.default.span.withConfig({displayName:"Projects__TechTag",componentId:"sc-13e7dad1-12"})`
  color: ${({theme:e})=>e.colors.secondary};
  font-size: 0.88rem;
  letter-spacing: 0.01em;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 0.75rem;
    color: ${({theme:e})=>e.colors.muted};
    opacity: 0.45;
  }
`,eA=d.default.div.withConfig({displayName:"Projects__ModalOverlay",componentId:"sc-13e7dad1-13"})`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
  z-index: 1000;
`,eP=d.default.div.withConfig({displayName:"Projects__ModalContent",componentId:"sc-13e7dad1-14"})`
  position: relative;
  width: min(100%, 960px);
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
`,eM=d.default.div.withConfig({displayName:"Projects__ModalHeader",componentId:"sc-13e7dad1-15"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,ez=d.default.h3.withConfig({displayName:"Projects__ModalTitle",componentId:"sc-13e7dad1-16"})`
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  font-size: 1rem;
`,eT=d.default.button.withConfig({displayName:"Projects__CloseButton",componentId:"sc-13e7dad1-17"})`
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
`,eL=d.default.div.withConfig({displayName:"Projects__VideoFrame",componentId:"sc-13e7dad1-18"})`
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
`,eB=d.default.div.withConfig({displayName:"Projects__ModalFooter",componentId:"sc-13e7dad1-19"})`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eO=[{title:"Enterprise AI Knowledge Assistant",description:"Built a RAG-based enterprise knowledge assistant using OpenAI models to deliver accurate, context-aware answers from documentation.",tech:["React","Java","Spring Boot","PostgreSQL","LangChain","OpenAI","RAG"],links:[{label:"GitHub",href:"https://github.com/shashank1227/enterprise-ai-knowledge-assistant"}],demoVideo:{label:"Watch demo",embedUrl:"https://drive.google.com/file/d/1Y0DkVD1MTQQbD_PGj3QL5BtrogR4sHUX/preview",openUrl:"https://drive.google.com/file/d/1Y0DkVD1MTQQbD_PGj3QL5BtrogR4sHUX/view?usp=drive_link"}},{title:"AI Documentation Copilot",description:"Built a RAG documentation chat app (DocForge) that uploads PDF/Markdown, embeds chunks with OpenAI into Postgres pgvector, and answers questions with sourced citations via LangChain4j.",tech:["React","Java","Spring Boot","PostgreSQL","pgvector","LangChain4j","OpenAI","Docker"],links:[{label:"GitHub",href:"https://github.com/shashank1227/ai-documentation-copilot"}],demoVideo:{label:"Watch demo",embedUrl:"https://drive.google.com/file/d/1Sf7vJGD6CWrVUZJKYYeRzDT27OAK112c/preview",openUrl:"https://drive.google.com/file/d/1Sf7vJGD6CWrVUZJKYYeRzDT27OAK112c/view?usp=drive_link"}},{title:"AI Code Review Assistant",description:"Created an intelligent assistant that analyzes GitHub pull requests and provides AI-assisted recommendations for code quality, maintainability and best practices.",tech:["React","Spring Boot","GitHub API","OpenAI","Docker"],links:[{label:"GitHub",href:"https://github.com/shashank1227/code-review-assistant"}],demoVideo:{label:"Watch demo",embedUrl:"https://drive.google.com/file/d/10zdJUWiqFcJ0794jlnadIdWzsE32IWom/preview",openUrl:"https://drive.google.com/file/d/10zdJUWiqFcJ0794jlnadIdWzsE32IWom/view?usp=sharing"}},{title:"Weather App",description:"Built a minimal Next.js weather app with city search, geolocation, hourly and 7-day forecasts, weather-aware icons, and light/dark mode using Open-Meteo — no API key required.",tech:["Next.js","React","Open-Meteo","Geolocation API"],links:[{label:"Live demo",href:"https://shashank1227.github.io/WeatherApp/"},{label:"GitHub",href:"https://github.com/shashank1227/WeatherApp"}]},{title:"URL Redirect Checker",description:"Built a Node.js CLI that audits thousands of URLs from CSV/Excel, captures full redirect chains, status codes, latency, and SSL errors, and flags broken links, loops, multi-hop chains, and canonical issues in a report.",tech:["Node.js","Axios","CSV","Excel","CLI"],links:[{label:"GitHub",href:"https://github.com/shashank1227/url-redirect-checker"}]},{title:"Image Hoster",description:"Built a Spring Boot image hosting application with registration and login, plus upload, edit, delete, and tag-based organization backed by PostgreSQL.",tech:["Java","Spring Boot","Thymeleaf","JPA","PostgreSQL"],links:[{label:"GitHub",href:"https://github.com/shashank1227/Image-Hoster"}]}],eH=()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>{if(!e)return;let i=e=>{"Escape"===e.key&&t(null)};document.addEventListener("keydown",i);let o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",i),document.body.style.overflow=o}},[e]),(0,l.jsxs)(ey,{id:"projects",children:[(0,l.jsxs)(ex,{children:[(0,l.jsx)(ew,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Work"}),(0,l.jsx)(eC,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Featured Projects"}),(0,l.jsx)(ev,{children:eO.map((e,i)=>{let o=!!(e.links?.length||e.demoVideo);return(0,l.jsxs)(ek,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*i},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(e$,{children:e.title}),(0,l.jsx)(e_,{children:e.description}),o&&(0,l.jsxs)(eI,{children:[e.demoVideo&&(0,l.jsxs)(eN,{type:"button",onClick:()=>t(e),"aria-label":`${e.demoVideo.label} for ${e.title}`,children:[e.demoVideo.label," →"]}),e.links?.map(t=>(0,l.jsxs)(eS,{href:t.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${t.label} for ${e.title}`,children:[t.label," →"]},t.href))]})]}),(0,l.jsx)(eE,{children:e.tech.map(e=>(0,l.jsx)(eR,{children:e},e))})]},e.title)})})]}),e?.demoVideo&&(0,l.jsx)(eA,{onClick:()=>t(null),children:(0,l.jsxs)(eP,{onClick:e=>e.stopPropagation(),role:"dialog","aria-modal":"true",children:[(0,l.jsxs)(eM,{children:[(0,l.jsxs)(ez,{children:[e.title," — Demo"]}),(0,l.jsx)(eT,{type:"button",onClick:()=>t(null),"aria-label":"Close demo",children:"×"})]}),(0,l.jsx)(eL,{children:(0,l.jsx)("iframe",{src:e.demoVideo.embedUrl,title:`${e.title} demo video`,allow:"autoplay; encrypted-media; fullscreen; picture-in-picture",allowFullScreen:!0})}),(0,l.jsx)(eB,{children:(0,l.jsx)(eS,{href:e.demoVideo.openUrl,target:"_blank",rel:"noopener noreferrer",children:"Open in Google Drive →"})})]})})]})},eD=d.default.section.withConfig({displayName:"Testimonials__TestimonialsSection",componentId:"sc-9cceb3c3-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eF=d.default.div.withConfig({displayName:"Testimonials__Container",componentId:"sc-9cceb3c3-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,eV=(0,d.default)(p.motion.p).withConfig({displayName:"Testimonials__SectionLabel",componentId:"sc-9cceb3c3-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,eU=(0,d.default)(p.motion.h2).withConfig({displayName:"Testimonials__Title",componentId:"sc-9cceb3c3-3"})`
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
`,eG=(0,d.default)(p.motion.blockquote).withConfig({displayName:"Testimonials__TestimonialBlock",componentId:"sc-9cceb3c3-4"})`
  margin: 0 0 ${({theme:e})=>e.spacing.lg};
  padding: 0;
  border: none;
`,eQ=d.default.span.withConfig({displayName:"Testimonials__QuoteMark",componentId:"sc-9cceb3c3-5"})`
  display: block;
  font-family: ${({theme:e})=>e.fonts.heading};
  font-size: 3rem;
  color: ${({theme:e})=>e.colors.accent};
  line-height: 1;
  margin-bottom: 0.75rem;
  opacity: 0.7;
`,eY=d.default.div.withConfig({displayName:"Testimonials__TestimonialText",componentId:"sc-9cceb3c3-6"})`
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
`,eW=d.default.footer.withConfig({displayName:"Testimonials__TestimonialFooter",componentId:"sc-9cceb3c3-7"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,eq=d.default.img.withConfig({displayName:"Testimonials__TestimonialImage",componentId:"sc-9cceb3c3-8"})`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,eJ=d.default.div.withConfig({displayName:"Testimonials__TestimonialAuthor",componentId:"sc-9cceb3c3-9"})`
  display: flex;
  flex-direction: column;
`,eK=d.default.cite.withConfig({displayName:"Testimonials__AuthorName",componentId:"sc-9cceb3c3-10"})`
  font-style: normal;
  font-weight: 600;
  font-family: ${({theme:e})=>e.fonts.heading};
  color: ${({theme:e})=>e.colors.text};
`,eX=d.default.span.withConfig({displayName:"Testimonials__AuthorTitle",componentId:"sc-9cceb3c3-11"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.9rem;
  margin-top: 0.2rem;
`,eZ=d.default.div.withConfig({displayName:"Testimonials__HighlightsGrid",componentId:"sc-9cceb3c3-12"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,e0=(0,d.default)(p.motion.div).withConfig({displayName:"Testimonials__HighlightItem",componentId:"sc-9cceb3c3-13"})`
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
`,e1="Shireen Roy",e2=[{title:"Leadership & Ownership",text:"Led frontend modernization initiatives, mentored engineers, and helped improve release confidence through stronger engineering practices."},{title:"Recognition",text:"Recognized as Employee of the Year in 2022 for outstanding technical contributions and successful automation initiatives."},{title:"Continuous Growth",text:"Expanded into Java, Spring Boot, OpenAI APIs, LangChain and RAG through production-focused portfolio projects and hands-on learning."},{title:"Enterprise Impact",text:"Delivered solutions for Adobe and PayPal programs, balancing performance, accessibility, scalability and maintainability."}],e3=()=>(0,l.jsx)(eD,{children:(0,l.jsxs)(eF,{children:[(0,l.jsx)(eV,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Impact"}),(0,l.jsx)(eU,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Recognition & Impact"}),(0,l.jsxs)(eG,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,l.jsx)(eQ,{children:"“"}),(0,l.jsx)(eY,{children:"I consider myself fortunate to have had the opportunity to closely collaborate with Shashank for over a year. In that time, he has consistently stood out as an exceptional talent. Shashank's technical expertise and problem-solving abilities are truly remarkable. He consistently delivers well-rounded and meticulously researched solutions, demonstrating a keen eye for detail.\n\nOne of Shashank's notable strengths is his ability to thrive in a fast-paced environment while simultaneously managing multiple tasks. His efficient work style and exceptional time management skills ensure that deadlines are consistently met. Moreover, his aptitude for effective collaboration with cross-functional teams is invaluable. Shashank possesses the unique ability to communicate complex technical information to non-technical stakeholders in a clear and understandable manner.\n\nFurthermore, Shashank's commitment to being a team player is commendable. He actively shares his knowledge with his peers, contributing to the growth and development of the entire team. His willingness to support and assist others is truly inspiring.\n\nIn summary, I wholeheartedly recommend Shashank for any endeavor that requires a highly skilled, detail-oriented, and collaborative professional. He will undoubtedly make a significant and positive impact wherever he goes.".split("\n\n").map((e,t)=>(0,l.jsx)("p",{children:e},t))}),(0,l.jsxs)(eW,{children:[(0,l.jsx)(eq,{src:x("/shireenroy.jpeg"),alt:e1,loading:"lazy",decoding:"async"}),(0,l.jsxs)(eJ,{children:[(0,l.jsx)(eK,{children:e1}),(0,l.jsx)(eX,{children:"Principal Consultant at Genpact Headstrong Canada"})]})]})]}),(0,l.jsx)(eZ,{children:e2.map((e,t)=>(0,l.jsxs)(e0,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.06*t},children:[(0,l.jsx)("h3",{children:e.title}),(0,l.jsx)("p",{children:e.text})]},e.title))})]})}),e5=d.default.section.withConfig({displayName:"Certifications__CertificationsSection",componentId:"sc-21987072-0"})`
  padding: ${({theme:e})=>e.spacing.xl} 0;
  background: transparent;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,e8=d.default.div.withConfig({displayName:"Certifications__Container",componentId:"sc-21987072-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,e7=(0,d.default)(p.motion.p).withConfig({displayName:"Certifications__SectionLabel",componentId:"sc-21987072-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`,e4=(0,d.default)(p.motion.h2).withConfig({displayName:"Certifications__Title",componentId:"sc-21987072-3"})`
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
`,e6=d.default.div.withConfig({displayName:"Certifications__CertificationsGrid",componentId:"sc-21987072-4"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-left: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,e9=d.default.div.withConfig({displayName:"Certifications__RecognitionSection",componentId:"sc-21987072-5"})`
  margin-top: ${({theme:e})=>e.spacing.lg};
`,te=d.default.h3.withConfig({displayName:"Certifications__RecognitionTitle",componentId:"sc-21987072-6"})`
  font-size: 1.25rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,tt=d.default.div.withConfig({displayName:"Certifications__RecognitionGrid",componentId:"sc-21987072-7"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-left: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: ${({theme:e})=>e.spacing.md};

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,ti=d.default.div.withConfig({displayName:"Certifications__RecognitionImageGrid",componentId:"sc-21987072-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({theme:e})=>e.spacing.sm};
`,to=(0,d.default)(p.motion.div).withConfig({displayName:"Certifications__CertificationCard",componentId:"sc-21987072-9"})`
  padding: ${({theme:e})=>e.spacing.md};
  border-right: 1px solid ${({theme:e})=>e.colors.border};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  background: transparent;
  transition: background 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.hoverSurface};
  }
`,tn=d.default.h3.withConfig({displayName:"Certifications__CertificationTitle",componentId:"sc-21987072-10"})`
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text};
  margin-bottom: 0.45rem;
`,tr=d.default.p.withConfig({displayName:"Certifications__CertificationIssuer",componentId:"sc-21987072-11"})`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.secondary};
  margin-bottom: 0.35rem;
`,ta=d.default.p.withConfig({displayName:"Certifications__CertificationDate",componentId:"sc-21987072-12"})`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  letter-spacing: 0.02em;
`,ts=(0,d.default)(p.motion.button).withConfig({displayName:"Certifications__RecognitionImageCard",componentId:"sc-21987072-13"})`
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
`,tl=d.default.img.withConfig({displayName:"Certifications__RecognitionImage",componentId:"sc-21987072-14"})`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  filter: grayscale(0.25) contrast(1.05);
  transition: filter 0.25s ease;

  ${ts}:hover & {
    filter: grayscale(0) contrast(1);
  }
`,tc=d.default.div.withConfig({displayName:"Certifications__ImageMeta",componentId:"sc-21987072-15"})`
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
`,td=d.default.div.withConfig({displayName:"Certifications__ModalOverlay",componentId:"sc-21987072-16"})`
  position: fixed;
  inset: 0;
  background: ${({theme:e})=>e.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
  z-index: 1000;
`,tp=d.default.div.withConfig({displayName:"Certifications__ModalContent",componentId:"sc-21987072-17"})`
  position: relative;
  width: min(100%, 960px);
  max-height: 90vh;
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
`,tm=d.default.img.withConfig({displayName:"Certifications__ModalImage",componentId:"sc-21987072-18"})`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
`,th=d.default.div.withConfig({displayName:"Certifications__ModalHeader",componentId:"sc-21987072-19"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,tu=d.default.h3.withConfig({displayName:"Certifications__ModalTitle",componentId:"sc-21987072-20"})`
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  font-size: 1rem;
`,tg=d.default.button.withConfig({displayName:"Certifications__CloseButton",componentId:"sc-21987072-21"})`
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
`,tf=[{title:"Full Stack Development Certification",issuer:"upGrad",date:"2020"},{title:"Advanced Learning in Java, Spring Boot & AI",issuer:"Self-directed",date:"2024–2025"}],tb=[{title:"Employee of the Year",issuer:"eClerx Services Limited",date:"2022"},{title:"Appreciation Certificates",issuer:"Client & Leadership Recognition",date:"Multiple engagements"}],ty=[{src:"01_Certificate_of_Appreciation.jpg",title:"Certificate of Appreciation",description:"GlobalLogic recognition for contribution and ownership"},{src:"02_Rewards_Recognition_Jun-Aug25.jpg",title:"Rewards & Recognition",description:"Recognition for June–August 2025 impact"},{src:"03_Certificate_of_Recognition_Sept2025.jpg",title:"September 2025 Recognition",description:"Certificate of recognition for strong delivery"},{src:"04_Certificate_of_Recognition_Nov2025.jpg",title:"November 2025 Recognition",description:"Appreciation certificate for project excellence"},{src:"05_Certificate_of_Recognition_Dec2025.jpg",title:"December 2025 Recognition",description:"Recognition for consistent contribution"},{src:"06_Rewards_Recognition_Adobe.jpg",title:"Rewards & Recognition – Adobe",description:"Recognition tied to Adobe engagement delivery"},{src:"Employee_of_the_Year_Award_eClerx22.jpg",title:"Employee of the Year — eClerx",description:"Employee of the Year award at eClerx Services (2022)"}],tx=()=>{let[e,t]=(0,c.useState)(null),[i,o]=(0,c.useState)(""),n=()=>{t(null),o("")};return(0,l.jsxs)(e5,{children:[(0,l.jsxs)(e8,{children:[(0,l.jsx)(e7,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Credentials"}),(0,l.jsx)(e4,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Education & Certifications"}),(0,l.jsxs)(e6,{children:[(0,l.jsxs)(to,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,l.jsx)(tn,{children:"Bachelor of Engineering in Computer Science & Engineering"}),(0,l.jsx)(tr,{children:"Chitkara University, Himachal Pradesh"}),(0,l.jsx)(ta,{children:"2017 – 2021"})]}),tf.map((e,t)=>(0,l.jsxs)(to,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*t},children:[(0,l.jsx)(tn,{children:e.title}),(0,l.jsx)(tr,{children:e.issuer}),(0,l.jsx)(ta,{children:e.date})]},e.title))]}),(0,l.jsxs)(e9,{children:[(0,l.jsx)(te,{children:"Appreciation Certificates & Awards"}),(0,l.jsx)(tt,{children:tb.map((e,t)=>(0,l.jsxs)(to,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.06*t},children:[(0,l.jsx)(tn,{children:e.title}),(0,l.jsx)(tr,{children:e.issuer}),(0,l.jsx)(ta,{children:e.date})]},e.title))}),(0,l.jsx)(ti,{children:ty.map((e,i)=>(0,l.jsxs)(ts,{type:"button",initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.04*i},onClick:()=>{var i,n;return i=x(`/${e.src}`),n=e.title,void(t(i),o(n))},children:[(0,l.jsx)(tl,{src:x(`/${e.src}`),alt:e.title,loading:"lazy",decoding:"async",width:480,height:220}),(0,l.jsxs)(tc,{children:[(0,l.jsx)("h4",{children:e.title}),(0,l.jsx)("p",{children:e.description})]})]},e.src))})]})]}),e&&(0,l.jsx)(td,{onClick:n,children:(0,l.jsxs)(tp,{onClick:e=>e.stopPropagation(),children:[(0,l.jsxs)(th,{children:[(0,l.jsx)(tu,{children:i}),(0,l.jsx)(tg,{type:"button",onClick:n,"aria-label":"Close image",children:"×"})]}),(0,l.jsx)(tm,{src:e,alt:i})]})})]})},tw=d.default.section.withConfig({displayName:"Contact__ContactSection",componentId:"sc-5f2ac2b5-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  scroll-margin-top: 2rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,tC=d.default.div.withConfig({displayName:"Contact__Container",componentId:"sc-5f2ac2b5-1"})`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.md};
`,tv=(0,d.default)(p.motion.p).withConfig({displayName:"Contact__SectionLabel",componentId:"sc-5f2ac2b5-2"})`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.accent};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  text-align: center;
`,tk=(0,d.default)(p.motion.h2).withConfig({displayName:"Contact__Title",componentId:"sc-5f2ac2b5-3"})`
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
`,t$=d.default.div.withConfig({displayName:"Contact__ContactContent",componentId:"sc-5f2ac2b5-4"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing.lg};
  max-width: 920px;
  margin: 0 auto;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`,t_=(0,d.default)(p.motion.form).withConfig({displayName:"Contact__ContactForm",componentId:"sc-5f2ac2b5-5"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sm};
`,tI=d.default.input.withConfig({displayName:"Contact__Input",componentId:"sc-5f2ac2b5-6"})`
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
`,tj=d.default.textarea.withConfig({displayName:"Contact__TextArea",componentId:"sc-5f2ac2b5-7"})`
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
`,tS=(0,d.default)(p.motion.button).withConfig({displayName:"Contact__SubmitButton",componentId:"sc-5f2ac2b5-8"})`
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
`,tN=(0,d.default)(p.motion.div).withConfig({displayName:"Contact__ContactInfo",componentId:"sc-5f2ac2b5-9"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,tE=d.default.p.withConfig({displayName:"Contact__ContactText",componentId:"sc-5f2ac2b5-10"})`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({theme:e})=>e.colors.secondary};
`,tR=d.default.div.withConfig({displayName:"Contact__ContactDetails",componentId:"sc-5f2ac2b5-11"})`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: ${({theme:e})=>e.spacing.sm};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,tA=d.default.a.withConfig({displayName:"Contact__ContactItem",componentId:"sc-5f2ac2b5-12"})`
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
`,tP=(0,d.default)(p.motion.div).withConfig({displayName:"Contact__ThankYouMessage",componentId:"sc-5f2ac2b5-13"})`
  text-align: left;
  padding: ${({theme:e})=>e.spacing.md} 0;
  color: ${({theme:e})=>e.colors.accent};
  font-size: 1.05rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,tM=d.default.div.withConfig({displayName:"Contact__ErrorMessage",componentId:"sc-5f2ac2b5-14"})`
  color: #c47a7a;
  margin-top: ${({theme:e})=>e.spacing.sm};
  font-size: 0.9rem;
`,tz=()=>{let[e,t]=(0,c.useState)({name:"",email:"",message:""}),[i,o]=(0,c.useState)("idle"),n=i=>{t({...e,[i.target.name]:i.target.value})};return(0,l.jsx)(tw,{id:"contact",children:(0,l.jsxs)(tC,{children:[(0,l.jsx)(tv,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Contact"}),(0,l.jsx)(tk,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},children:"Let’s Connect"}),(0,l.jsxs)(t$,{children:[(0,l.jsx)(t_,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},onSubmit:e=>{e.preventDefault(),fetch("https://formspree.io/f/mvgzybrb",{method:"POST",body:new FormData(e.target),headers:{Accept:"application/json"}}).then(e=>{e.ok?(o("success"),t({name:"",email:"",message:""})):o("error")}).catch(()=>{o("error")})},action:"https://formspree.io/f/mvgzybrb",method:"POST",children:"success"===i?(0,l.jsx)(tP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},children:"Thank you for your message. I’ll get back to you soon."}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(tI,{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:n,required:!0,autoComplete:"name"}),(0,l.jsx)(tI,{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:n,required:!0,autoComplete:"email"}),(0,l.jsx)(tj,{name:"message",placeholder:"Your Message",value:e.message,onChange:n,required:!0,autoComplete:"off"}),(0,l.jsx)(tS,{type:"submit",whileHover:{y:-2},whileTap:{y:0},children:"Send Message"}),"error"===i&&(0,l.jsx)(tM,{children:"Oops! There was a problem submitting your form. Please try again."})]})}),(0,l.jsxs)(tN,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08},children:[(0,l.jsx)(tE,{children:"I’m currently exploring opportunities where I can contribute as a senior frontend or full-stack engineer, especially around modern React architectures, AI-powered products and scalable product delivery."}),(0,l.jsxs)(tR,{children:[(0,l.jsxs)(tA,{href:"mailto:shashanknet50@gmail.com",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,l.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),"shashanknet50@gmail.com"]}),(0,l.jsxs)(tA,{href:"tel:+919129853380",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,l.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"+91-9129853380"]}),(0,l.jsxs)(tA,{href:"https://linkedin.com/in/shashesi",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}),(0,l.jsx)("path",{d:"M4 10h4v10H4z"}),(0,l.jsx)("path",{d:"M10 10h4v1.5h.1c.6-1.1 1.9-2.3 4-2.3 4.2 0 5 2.8 5 6.4V20h-4v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V20h-4z"})]}),"linkedin.com/in/shashesi"]}),(0,l.jsxs)(tA,{href:"https://github.com/shashank1227",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,l.jsx)("path",{d:"M9 19c-4.3 1.4-4.3-2.5-6-3"}),(0,l.jsx)("path",{d:"M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.3A4.9 4.9 0 0 0 19 4.9 4.4 4.4 0 0 0 18.1 4c-.7-.2-2.2-.4-4.8 1.8A16.2 16.2 0 0 0 8 5.9C5.2 5.8 4.8 5.9 4.1 6a4.4 4.4 0 0 0-.9.9 4.9 4.9 0 0 0-.5 3.3c0 4.9 2.9 6 5.7 6.3-.6.6-.6 1.2-.5 2V21"})]}),"github.com/shashank1227"]})]})]})]})]})})},tT=d.default.footer.withConfig({displayName:"Footer__FooterSection",componentId:"sc-81a8ac13-0"})`
  background: transparent;
  padding: ${({theme:e})=>e.spacing.md} 0;
  margin-top: auto;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,tL=d.default.div.withConfig({displayName:"Footer__FooterContent",componentId:"sc-81a8ac13-1"})`
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
`,tB=d.default.p.withConfig({displayName:"Footer__Copyright",componentId:"sc-81a8ac13-2"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.85rem;
`,tO=d.default.div.withConfig({displayName:"Footer__SocialLinks",componentId:"sc-81a8ac13-3"})`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
`,tH=(0,d.default)(p.motion.a).withConfig({displayName:"Footer__SocialLink",componentId:"sc-81a8ac13-4"})`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 1.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.accent};
  }
`,tD=()=>{let e=new Date().getFullYear();return(0,l.jsx)(tT,{children:(0,l.jsxs)(tL,{children:[(0,l.jsxs)(tB,{children:[e," Shashank Shekhar Singh"]}),(0,l.jsxs)(tO,{children:[(0,l.jsx)(tH,{href:"https://linkedin.com/in/shashesi/",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Shashank's LinkedIn profile",whileHover:{y:-2},children:(0,l.jsx)(m.FaLinkedin,{"aria-label":"LinkedIn icon"})}),(0,l.jsx)(tH,{href:"https://github.com/shashank1227",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Shashank's GitHub profile",whileHover:{y:-2},children:(0,l.jsx)(m.FaGithub,{"aria-label":"GitHub icon"})})]})]})})};var tF=e.i(31178),tV=e.i(47414),tU=e.i(74008),tG=e.i(21476),tQ=e.i(72846),tY=c,tW=e.i(37806);function tq(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class tJ extends tY.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,tQ.isHTMLElement)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,i=(0,tQ.isHTMLElement)(e)&&e.offsetWidth||0,o=(0,tQ.isHTMLElement)(e)&&e.offsetHeight||0,n=getComputedStyle(t),r=this.props.sizeRef.current;r.height=parseFloat(n.height),r.width=parseFloat(n.width),r.top=t.offsetTop,r.left=t.offsetLeft,r.right=i-r.width-r.left,r.bottom=o-r.height-r.top,r.direction=n.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function tK({children:e,isPresent:t,anchorX:i,anchorY:o,root:n,pop:r}){let a=(0,tY.useId)(),s=(0,tY.useRef)(null),d=(0,tY.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:p}=(0,tY.useContext)(tW.MotionConfigContext),m=function(...e){return c.useCallback(function(...e){return t=>{let i=!1,o=e.map(e=>{let o=tq(e,t);return i||"function"!=typeof o||(i=!0),o});if(i)return()=>{for(let t=0;t<o.length;t++){let i=o[t];"function"==typeof i?i():tq(e[t],null)}}}}(...e),e)}(s,!1!==r?e.props?.ref??e?.ref:void 0);return(0,tY.useInsertionEffect)(()=>{let{width:e,height:l,top:c,left:m,right:h,bottom:u,direction:g}=d.current;if(t||!1===r||!s.current||!e||!l)return;let f="rtl"===g,b="left"===i?f?`right: ${h}`:`left: ${m}`:f?`left: ${m}`:`right: ${h}`,y="bottom"===o?`bottom: ${u}`:`top: ${c}`;s.current.dataset.motionPopId=a;let x=document.createElement("style");p&&(x.nonce=p);let w=n??document.head;return w.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${b}px !important;
            ${y}px !important;
          }
        `),()=>{s.current?.removeAttribute("data-motion-pop-id"),w.contains(x)&&w.removeChild(x)}},[t]),(0,l.jsx)(tJ,{isPresent:t,childRef:s,sizeRef:d,pop:r,children:!1===r?e:tY.cloneElement(e,{ref:m})})}let tX=({children:e,initial:t,isPresent:i,onExitComplete:o,custom:n,presenceAffectsLayout:r,mode:a,anchorX:s,anchorY:d,root:p})=>{let m=(0,tV.useConstant)(tZ),h=(0,c.useId)(),u=(0,c.useRef)(i),g=(0,c.useRef)(o);(0,tU.useIsomorphicLayoutEffect)(()=>{u.current=i,g.current=o});let f=!0,b=(0,c.useMemo)(()=>(f=!1,{id:h,initial:t,isPresent:i,custom:n,onExitComplete:e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;o&&o()},register:e=>(m.set(e,!1),()=>{m.delete(e),u.current||m.size||g.current?.()})}),[i,m,o]);return r&&f&&(b={...b}),(0,c.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[i]),c.useEffect(()=>{i||m.size||!o||o()},[i]),e=(0,l.jsx)(tK,{pop:"popLayout"===a,isPresent:i,anchorX:s,anchorY:d,root:p,children:e}),(0,l.jsx)(tG.PresenceContext.Provider,{value:b,children:e})};function tZ(){return new Map}var t0=e.i(64978);let t1=e=>e.key||"";function t2(e){let t=[];return c.Children.forEach(e,e=>{(0,c.isValidElement)(e)&&t.push(e)}),t}let t3=({children:e,custom:t,initial:i=!0,onExitComplete:o,presenceAffectsLayout:n=!0,mode:r="sync",propagate:a=!1,anchorX:s="left",anchorY:d="top",root:p})=>{let[m,h]=(0,t0.usePresence)(a),u=(0,c.useMemo)(()=>t2(e),[e]),g=a&&!m?[]:u.map(t1),f=(0,c.useRef)(!0),b=(0,c.useRef)(u),y=(0,tV.useConstant)(()=>new Map),x=(0,c.useRef)(new Set),[w,C]=(0,c.useState)(u),[v,k]=(0,c.useState)(u);(0,tU.useIsomorphicLayoutEffect)(()=>{f.current=!1,b.current=u;for(let e=0;e<v.length;e++){let t=t1(v[e]);g.includes(t)?(y.delete(t),x.current.delete(t)):!0!==y.get(t)&&y.set(t,!1)}},[v,g.length,g.join("-")]);let $=[];if(u!==w){let e=[...u];for(let t=0;t<v.length;t++){let i=v[t],o=t1(i);g.includes(o)||(e.splice(t,0,i),$.push(i))}return"wait"===r&&$.length&&(e=$),k(t2(e)),C(u),null}let{forceRender:_}=(0,c.useContext)(tF.LayoutGroupContext);return(0,l.jsx)(l.Fragment,{children:v.map(e=>{let c=t1(e),w=(!a||!!m)&&(u===v||g.includes(c));return(0,l.jsx)(tX,{isPresent:w,initial:(!f.current||!!i)&&void 0,custom:t,presenceAffectsLayout:n,mode:r,root:p,onExitComplete:w?void 0:()=>{if(x.current.has(c)||!y.has(c))return;x.current.add(c),y.set(c,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(_?.(),k(b.current),a&&h?.(),o&&o())},anchorX:s,anchorY:d,children:e},c)})})};var t5=Object.defineProperty,t8=Object.getOwnPropertySymbols,t7=Object.prototype.hasOwnProperty,t4=Object.prototype.propertyIsEnumerable,t6=(e,t,i)=>t in e?t5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,t9=(e,t)=>{for(var i in t||(t={}))t7.call(t,i)&&t6(e,i,t[i]);if(t8)for(var i of t8(t))t4.call(t,i)&&t6(e,i,t[i]);return e},ie=(e,t)=>{var i={};for(var o in e)t7.call(e,o)&&0>t.indexOf(o)&&(i[o]=e[o]);if(null!=e&&t8)for(var o of t8(e))0>t.indexOf(o)&&t4.call(e,o)&&(i[o]=e[o]);return i};(e=>{let t=class t{constructor(e,i,o,r){if(this.version=e,this.errorCorrectionLevel=i,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(r<-1||r>7)throw RangeError("Mask value out of range");this.size=4*e+17;let a=[];for(let e=0;e<this.size;e++)a.push(!1);for(let e=0;e<this.size;e++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(o);if(this.drawCodewords(s),-1==r){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const i=this.getPenaltyScore();i<e&&(r=t,e=i),this.applyMask(t)}}n(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(i,o){let n=e.QrSegment.makeSegments(i);return t.encodeSegments(n,o)}static encodeBinary(i,o){let n=e.QrSegment.makeBytes(i);return t.encodeSegments([n],o)}static encodeSegments(e,o,r=1,s=40,l=-1,c=!0){let d,p;if(!(t.MIN_VERSION<=r&&r<=s&&s<=t.MAX_VERSION)||l<-1||l>7)throw RangeError("Invalid value");for(d=r;;d++){let i=8*t.getNumDataCodewords(d,o),n=a.getTotalBits(e,d);if(n<=i){p=n;break}if(d>=s)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])c&&p<=8*t.getNumDataCodewords(d,e)&&(o=e);let m=[];for(let t of e)for(let e of(i(t.mode.modeBits,4,m),i(t.numChars,t.mode.numCharCountBits(d),m),t.getData()))m.push(e);n(m.length==p);let h=8*t.getNumDataCodewords(d,o);n(m.length<=h),i(0,Math.min(4,h-m.length),m),i(0,(8-m.length%8)%8,m),n(m.length%8==0);for(let e=236;m.length<h;e^=253)i(e,8,m);let u=[];for(;8*u.length<m.length;)u.push(0);return m.forEach((e,t)=>u[t>>>3]|=e<<7-(7&t)),new t(d,o,u,l)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let i=0;i<t;i++)for(let o=0;o<t;o++)(0!=i||0!=o)&&(0!=i||o!=t-1)&&(i!=t-1||0!=o)&&this.drawAlignmentPattern(e[i],e[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,i=t;for(let e=0;e<10;e++)i=i<<1^(i>>>9)*1335;let r=(t<<10|i)^21522;n(r>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,o(r,e));this.setFunctionModule(8,7,o(r,6)),this.setFunctionModule(8,8,o(r,7)),this.setFunctionModule(7,8,o(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,o(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,o(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,o(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;n(t>>>18==0);for(let e=0;e<18;e++){let i=o(t,e),n=this.size-11+e%3,r=Math.floor(e/3);this.setFunctionModule(n,r,i),this.setFunctionModule(r,n,i)}}drawFinderPattern(e,t){for(let i=-4;i<=4;i++)for(let o=-4;o<=4;o++){let n=Math.max(Math.abs(o),Math.abs(i)),r=e+o,a=t+i;0<=r&&r<this.size&&0<=a&&a<this.size&&this.setFunctionModule(r,a,2!=n&&4!=n)}}drawAlignmentPattern(e,t){for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++)this.setFunctionModule(e+o,t+i,1!=Math.max(Math.abs(o),Math.abs(i)))}setFunctionModule(e,t,i){this.modules[t][e]=i,this.isFunction[t][e]=!0}addEccAndInterleave(e){let i=this.version,o=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(i,o))throw RangeError("Invalid argument");let r=t.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][i],a=t.ECC_CODEWORDS_PER_BLOCK[o.ordinal][i],s=Math.floor(t.getNumRawDataModules(i)/8),l=r-s%r,c=Math.floor(s/r),d=[],p=t.reedSolomonComputeDivisor(a);for(let i=0,o=0;i<r;i++){let n=e.slice(o,o+c-a+(i<l?0:1));o+=n.length;let r=t.reedSolomonComputeRemainder(n,p);i<l&&n.push(0),d.push(n.concat(r))}let m=[];for(let e=0;e<d[0].length;e++)d.forEach((t,i)=>{(e!=c-a||i>=l)&&m.push(t[e])});return n(m.length==s),m}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let i=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let r=0;r<2;r++){let a=t-r,s=(t+1&2)==0?this.size-1-n:n;!this.isFunction[s][a]&&i<8*e.length&&(this.modules[s][a]=o(e[i>>>3],7-(7&i)),i++)}}n(i==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let i=0;i<this.size;i++){let o;switch(e){case 0:o=(i+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=i%3==0;break;case 3:o=(i+t)%3==0;break;case 4:o=(Math.floor(i/3)+Math.floor(t/2))%2==0;break;case 5:o=i*t%2+i*t%3==0;break;case 6:o=(i*t%2+i*t%3)%2==0;break;case 7:o=((i+t)%2+i*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][i]&&o&&(this.modules[t][i]=!this.modules[t][i])}}getPenaltyScore(){let e=0;for(let i=0;i<this.size;i++){let o=!1,n=0,r=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[i][a]==o?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,r),o||(e+=this.finderPenaltyCountPatterns(r)*t.PENALTY_N3),o=this.modules[i][a],n=1);e+=this.finderPenaltyTerminateAndCount(o,n,r)*t.PENALTY_N3}for(let i=0;i<this.size;i++){let o=!1,n=0,r=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][i]==o?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,r),o||(e+=this.finderPenaltyCountPatterns(r)*t.PENALTY_N3),o=this.modules[a][i],n=1);e+=this.finderPenaltyTerminateAndCount(o,n,r)*t.PENALTY_N3}for(let i=0;i<this.size-1;i++)for(let o=0;o<this.size-1;o++){let n=this.modules[i][o];n==this.modules[i][o+1]&&n==this.modules[i+1][o]&&n==this.modules[i+1][o+1]&&(e+=t.PENALTY_N2)}let i=0;for(let e of this.modules)i=e.reduce((e,t)=>e+ +!!t,i);let o=this.size*this.size,r=Math.ceil(Math.abs(20*i-10*o)/o)-1;return n(0<=r&&r<=9),n(0<=(e+=r*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),i=[6];for(let o=this.size-7;i.length<e;o-=t)i.splice(1,0,o);return i}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let i=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;i-=(25*t-10)*t-55,e>=7&&(i-=36)}return n(208<=i&&i<=29648),i}static getNumDataCodewords(e,i){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let i=[];for(let t=0;t<e-1;t++)i.push(0);i.push(1);let o=1;for(let n=0;n<e;n++){for(let e=0;e<i.length;e++)i[e]=t.reedSolomonMultiply(i[e],o),e+1<i.length&&(i[e]^=i[e+1]);o=t.reedSolomonMultiply(o,2)}return i}static reedSolomonComputeRemainder(e,i){let o=i.map(e=>0);for(let n of e){let e=n^o.shift();o.push(0),i.forEach((i,n)=>o[n]^=t.reedSolomonMultiply(i,e))}return o}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let i=0;for(let o=7;o>=0;o--)i=i<<1^(i>>>7)*285^(t>>>o&1)*e;return n(i>>>8==0),i}finderPenaltyCountPatterns(e){let t=e[1];n(t<=3*this.size);let i=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(i&&e[0]>=4*t&&e[6]>=t?1:0)+(i&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,i){return e&&(this.finderPenaltyAddHistory(t,i),t=0),t+=this.size,this.finderPenaltyAddHistory(t,i),this.finderPenaltyCountPatterns(i)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function i(e,t,i){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let o=t-1;o>=0;o--)i.push(e>>>o&1)}function o(e,t){return(e>>>t&1)!=0}function n(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let r=class e{constructor(e,t,i){if(this.mode=e,this.numChars=t,this.bitData=i,t<0)throw RangeError("Invalid argument");this.bitData=i.slice()}static makeBytes(t){let o=[];for(let e of t)i(e,8,o);return new e(e.Mode.BYTE,t.length,o)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError("String contains non-numeric characters");let o=[];for(let e=0;e<t.length;){let n=Math.min(t.length-e,3);i(parseInt(t.substring(e,e+n),10),3*n+1,o),e+=n}return new e(e.Mode.NUMERIC,t.length,o)}static makeAlphanumeric(t){let o;if(!e.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(o=0;o+2<=t.length;o+=2){let r=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o));i(r+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o+1)),11,n)}return o<t.length&&i(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(o)),6,n),new e(e.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let o=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)i(t,8,o);else if(t<16384)i(2,2,o),i(t,14,o);else if(t<1e6)i(6,3,o),i(t,21,o);else throw RangeError("ECI assignment value out of range");return new e(e.Mode.ECI,0,o)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let i=0;for(let o of e){let e=o.mode.numCharCountBits(t);if(o.numChars>=1<<e)return 1/0;i+=4+e+o.bitData.length}return i}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let i=0;i<e.length;i++)"%"!=e.charAt(i)?t.push(e.charCodeAt(i)):(t.push(parseInt(e.substring(i+1,i+3),16)),i+=2);return t}};r.NUMERIC_REGEX=/^[0-9]*$/,r.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,r.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=r;e.QrSegment=r})(s||(s={})),n=(o=s||(s={})).QrCode||(o.QrCode={}),(t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}}).LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),n.Ecc=t,a=(r=s||(s={})).QrSegment||(r.QrSegment={}),(i=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}).NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),a.Mode=i;var it=s,ii={L:it.QrCode.Ecc.LOW,M:it.QrCode.Ecc.MEDIUM,Q:it.QrCode.Ecc.QUARTILE,H:it.QrCode.Ecc.HIGH},io="#FFFFFF",ir="#000000";function ia(e,t=0){let i=[];return e.forEach(function(e,o){let n=null;e.forEach(function(r,a){if(!r&&null!==n){i.push(`M${n+t} ${o+t}h${a-n}v1H${n+t}z`),n=null;return}if(a===e.length-1){if(!r)return;null===n?i.push(`M${a+t},${o+t} h1v1H${a+t}z`):i.push(`M${n+t},${o+t} h${a+1-n}v1H${n+t}z`);return}r&&null===n&&(n=a)})}),i.join("")}function is(e,t){return e.slice().map((e,i)=>i<t.y||i>=t.y+t.h?e:e.map((e,i)=>(i<t.x||i>=t.x+t.w)&&e))}function il({value:e,level:t,minVersion:i,includeMargin:o,marginSize:n,imageSettings:r,size:a,boostLevel:s}){let l=c.default.useMemo(()=>{let o=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...it.QrSegment.makeSegments(t)),e),[]);return it.QrCode.encodeSegments(o,ii[t],i,void 0,void 0,s)},[e,t,i,s]),{cells:d,margin:p,numCells:m,calculatedImageSettings:h}=c.default.useMemo(()=>{let e=l.getModules(),t=null!=n?Math.max(Math.floor(n),0):4*!!o,i=e.length+2*t,s=function(e,t,i,o){if(null==o)return null;let n=e.length+2*i,r=Math.floor(.1*t),a=n/t,s=(o.width||r)*a,l=(o.height||r)*a,c=null==o.x?e.length/2-s/2:o.x*a,d=null==o.y?e.length/2-l/2:o.y*a,p=null==o.opacity?1:o.opacity,m=null;if(o.excavate){let e=Math.floor(c),t=Math.floor(d),i=Math.ceil(s+c-e),o=Math.ceil(l+d-t);m={x:e,y:t,w:i,h:o}}return{x:c,y:d,h:l,w:s,excavation:m,opacity:p,crossOrigin:o.crossOrigin}}(e,a,t,r);return{cells:e,margin:t,numCells:i,calculatedImageSettings:s}},[l,a,r,o,n]);return{qrcode:l,margin:p,cells:d,numCells:m,calculatedImageSettings:h}}var ic=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();c.default.forwardRef(function(e,t){let{value:i,size:o=128,level:n="L",bgColor:r=io,fgColor:a=ir,includeMargin:s=!1,minVersion:l=1,boostLevel:d,marginSize:p,imageSettings:m}=e,h=ie(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:u}=h,g=ie(h,["style"]),f=null==m?void 0:m.src,b=c.default.useRef(null),y=c.default.useRef(null),x=c.default.useCallback(e=>{b.current=e,"function"==typeof t?t(e):t&&(t.current=e)},[t]),[w,C]=c.default.useState(!1),{margin:v,cells:k,numCells:$,calculatedImageSettings:_}=il({value:i,level:n,minVersion:l,boostLevel:d,includeMargin:s,marginSize:p,imageSettings:m,size:o});c.default.useEffect(()=>{if(null!=b.current){let e=b.current,t=e.getContext("2d");if(!t)return;let i=k,n=y.current,s=null!=_&&null!==n&&n.complete&&0!==n.naturalHeight&&0!==n.naturalWidth;s&&null!=_.excavation&&(i=is(k,_.excavation));let l=window.devicePixelRatio||1;e.height=e.width=o*l;let c=o/$*l;t.scale(c,c),t.fillStyle=r,t.fillRect(0,0,$,$),t.fillStyle=a,ic?t.fill(new Path2D(ia(i,v))):k.forEach(function(e,i){e.forEach(function(e,o){e&&t.fillRect(o+v,i+v,1,1)})}),_&&(t.globalAlpha=_.opacity),s&&t.drawImage(n,_.x+v,_.y+v,_.w,_.h)}}),c.default.useEffect(()=>{C(!1)},[f]);let I=t9({height:o,width:o},u),j=null;return null!=f&&(j=c.default.createElement("img",{src:f,key:f,style:{display:"none"},onLoad:()=>{C(!0)},ref:y,crossOrigin:null==_?void 0:_.crossOrigin})),c.default.createElement(c.default.Fragment,null,c.default.createElement("canvas",t9({style:I,height:o,width:o,ref:x,role:"img"},g)),j)}).displayName="QRCodeCanvas";var id=c.default.forwardRef(function(e,t){let{value:i,size:o=128,level:n="L",bgColor:r=io,fgColor:a=ir,includeMargin:s=!1,minVersion:l=1,boostLevel:d,title:p,marginSize:m,imageSettings:h}=e,u=ie(e,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:g,cells:f,numCells:b,calculatedImageSettings:y}=il({value:i,level:n,minVersion:l,boostLevel:d,includeMargin:s,marginSize:m,imageSettings:h,size:o}),x=f,w=null;null!=h&&null!=y&&(null!=y.excavation&&(x=is(f,y.excavation)),w=c.default.createElement("image",{href:h.src,height:y.h,width:y.w,x:y.x+g,y:y.y+g,preserveAspectRatio:"none",opacity:y.opacity,crossOrigin:y.crossOrigin}));let C=ia(x,g);return c.default.createElement("svg",t9({height:o,width:o,viewBox:`0 0 ${b} ${b}`,ref:t,role:"img"},u),!!p&&c.default.createElement("title",null,p),c.default.createElement("path",{fill:r,d:`M0,0 h${b}v${b}H0z`,shapeRendering:"crispEdges"}),c.default.createElement("path",{fill:a,d:C,shapeRendering:"crispEdges"}),w)});id.displayName="QRCodeSVG";var ip=e.i(28176);let im=(0,d.default)(p.motion.div).withConfig({displayName:"ResumeQRCode__QRCodeContainer",componentId:"sc-3135cbd6-0"})`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background: ${({theme:e})=>"dark"===e.mode?"rgba(14, 13, 10, 0.94)":"rgba(243, 226, 138, 0.97)"};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  padding: 14px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(8px);
  will-change: transform, opacity;
  contain: layout style;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    bottom: 16px;
    right: 16px;
    padding: 12px;
    max-width: 170px;
  }
`,ih=(0,d.default)(p.motion.a).withConfig({displayName:"ResumeQRCode__MobileButton",componentId:"sc-3135cbd6-1"})`
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
`,iu=d.default.h4.withConfig({displayName:"ResumeQRCode__QRTitle",componentId:"sc-3135cbd6-2"})`
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
`,ig=d.default.p.withConfig({displayName:"ResumeQRCode__QRDescription",componentId:"sc-3135cbd6-3"})`
  margin: 8px 0 0;
  font-size: 0.72rem;
  text-align: center;
  color: ${({theme:e})=>e.colors.muted};
  line-height: 1.4;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    font-size: 0.68rem;
    margin-top: 6px;
  }
`,ib=d.default.button.withConfig({displayName:"ResumeQRCode__IconButton",componentId:"sc-3135cbd6-4"})`
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
`,iy=d.default.div.withConfig({displayName:"ResumeQRCode__QRCodeWrapper",componentId:"sc-3135cbd6-5"})`
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
`,ix=()=>{let e=(0,d.useTheme)(),[t,i]=(0,c.useState)(!1),[o,n]=(0,c.useState)(!1),[r,a]=(0,c.useState)(!1),s=(0,c.useRef)(null),p=(0,c.useRef)(null),h=(0,c.useCallback)(()=>{a(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768)},[]),u=(0,c.useCallback)(()=>{n(!0),i(!1)},[]),g=x("/ShashankResume.pdf"),f=x("/profile.jpg"),b=(0,c.useCallback)(e=>{(0,ip.logResumeDownload)(e),u()},[u]),y={initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.2,ease:"easeOut"}};return(0,c.useEffect)(()=>{new Image().src=f,h();let e=()=>{requestAnimationFrame(h)};return window.addEventListener("resize",e,{passive:!0}),p.current=document.getElementById("hero"),p.current&&(s.current=new IntersectionObserver(e=>{let[t]=e;o||i(!t.isIntersecting)},{threshold:0}),s.current.observe(p.current)),()=>{window.removeEventListener("resize",e),s.current&&p.current&&(s.current.unobserve(p.current),s.current.disconnect())}},[h,o,f]),(0,l.jsxs)(t3,{mode:"wait",children:[t&&!r&&(0,l.jsxs)(im,{...y,children:[(0,l.jsx)(ib,{onClick:u,"aria-label":"Close resume QR code"}),(0,l.jsx)(iu,{children:"Scan for Resume"}),(0,l.jsx)(iy,{children:(0,l.jsx)(id,{value:`${window.location.origin}${g}`,size:110,level:"H",bgColor:"transparent",fgColor:e.colors.text,imageSettings:{src:f,excavate:!0,height:32,width:32},onClick:()=>b("qr-scan"),style:{cursor:"pointer"}})}),(0,l.jsx)(ig,{children:"Scan to download resume"})]}),t&&r&&(0,l.jsxs)(ih,{href:g,download:"Shashank-Resume.pdf",...y,onClick:()=>b("mobile-cta"),"aria-label":"Download resume",children:[(0,l.jsx)(m.FaDownload,{})," Download Resume"]})]})},iw=d.default.main.withConfig({displayName:"Portfolio__MainContent",componentId:"sc-a1a524ec-0"})`
  display: flex;
  flex-direction: column;
  flex: 1;
`;e.s(["default",0,()=>((0,c.useEffect)(()=>{"localhost"!==window.location.hostname&&e.A(8059).then(({initGA:e,logPageView:t})=>{e("G-59JRJJSMM1"),t()}).catch(()=>{})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(iw,{children:[(0,l.jsx)(B,{}),(0,l.jsx)(et,{}),(0,l.jsx)(eb,{}),(0,l.jsx)(eH,{}),(0,l.jsx)(e3,{}),(0,l.jsx)(tx,{}),(0,l.jsx)(tz,{})]}),(0,l.jsx)(tD,{}),(0,l.jsx)(ix,{})]}))],89594)}]);