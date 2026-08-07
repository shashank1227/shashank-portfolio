(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30824,e=>{"use strict";var t=e.i(43476),r=e.i(97053);let o=r.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${({theme:e})=>e.fonts.primary};
    background-color: ${({theme:e})=>e.colors.background};
    background-image: ${({theme:e})=>"dark"===e.mode?`
      radial-gradient(ellipse 70% 55% at 85% 10%, rgba(255, 217, 61, 0.16), transparent 55%),
      radial-gradient(ellipse 55% 45% at 10% 80%, rgba(255, 217, 61, 0.07), transparent 50%),
      linear-gradient(165deg, #0e0d0a 0%, #15130c 45%, #0e0d0a 100%)
    `:`
      radial-gradient(ellipse 75% 55% at 90% 0%, rgba(255, 255, 255, 0.35), transparent 50%),
      radial-gradient(ellipse 60% 50% at 0% 100%, rgba(92, 66, 0, 0.1), transparent 55%),
      linear-gradient(160deg, #f3e28a 0%, #edd66f 45%, #f6e79a 100%)
    `};
    background-attachment: fixed;
    color: ${({theme:e})=>e.colors.text};
    line-height: 1.65;
    overflow-x: hidden;
    width: 100%;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: ${({theme:e})=>"dark"===e.mode?.28:.2};
    z-index: -1;
    background-image:
      linear-gradient(${({theme:e})=>e.colors.border} 1px, transparent 1px),
      linear-gradient(90deg, ${({theme:e})=>e.colors.border} 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent);
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: ${({theme:e})=>"dark"===e.mode?.3:.15};
    z-index: -1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    mix-blend-mode: ${({theme:e})=>"dark"===e.mode?"overlay":"multiply"};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.fonts.heading};
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.2;
    overflow: visible;
    padding-bottom: 0.08em;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease, opacity 0.2s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  ::selection {
    background: ${({theme:e})=>e.colors.selectionBg};
    color: ${({theme:e})=>e.colors.selectionText};
  }

  section {
    padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  }

  .container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`;var a=e.i(46932),n=e.i(11152);let i=(0,r.default)(a.motion.button).withConfig({displayName:"ThemeToggle__ToggleButton",componentId:"sc-ee20809-0"})`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 200;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  border: 1.5px solid ${({theme:e})=>e.colors.text};
  background: ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.onAccent};
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.text};
    color: ${({theme:e})=>e.colors.background};
    border-color: ${({theme:e})=>e.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`,d=({mode:e,onToggle:r})=>{let o="dark"===e?"light":"dark";return(0,t.jsx)(i,{type:"button",onClick:r,"aria-label":`Switch to ${o} mode`,title:`Switch to ${o} mode`,whileHover:{y:-2,rotate:8},whileTap:{y:0,rotate:0},children:"dark"===e?(0,t.jsx)(n.FaSun,{"aria-hidden":"true"}):(0,t.jsx)(n.FaMoon,{"aria-hidden":"true"})})};var l=e.i(71645);let s={fonts:{primary:"var(--font-body), 'DM Sans', sans-serif",heading:"var(--font-heading), 'Bricolage Grotesque', sans-serif"},breakpoints:{mobile:"320px",tablet:"768px",desktop:"1024px"},spacing:{xs:"0.5rem",sm:"1rem",md:"2rem",lg:"4rem",xl:"8rem"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px"},shadows:{soft:"none",glow:"none"}},c={mode:"dark",colors:{background:"#0e0d0a",surface:"#17150f",text:"#fff6c8",muted:"#a39a78",primary:"#fff6c8",secondary:"#e8d9a0",accent:"#ffd93d",accentSoft:"rgba(255, 217, 61, 0.14)",card:"#17150f",cardDarker:"#0e0d0a",border:"rgba(255, 246, 200, 0.12)",gradient:"#ffd93d",selectionBg:"rgba(255, 217, 61, 0.35)",selectionText:"#0e0d0a",overlay:"rgba(8, 7, 5, 0.88)",hoverSurface:"rgba(255, 217, 61, 0.06)",onAccent:"#0e0d0a"},...s},g={mode:"light",colors:{background:"#f3e28a",surface:"#fff4b8",text:"#0a0906",muted:"#3a3424",primary:"#0a0906",secondary:"#16130c",accent:"#5c4200",accentSoft:"rgba(92, 66, 0, 0.12)",card:"#fff4b8",cardDarker:"#e8d06a",border:"rgba(10, 9, 6, 0.22)",gradient:"#5c4200",selectionBg:"rgba(92, 66, 0, 0.28)",selectionText:"#fff8d6",overlay:"rgba(10, 9, 6, 0.72)",hoverSurface:"rgba(10, 9, 6, 0.06)",onAccent:"#fff8d6"},...s},m="portfolio-theme",f=r.default.div.withConfig({displayName:"Providers__AppContainer",componentId:"sc-521ee572-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
`;e.s(["default",0,({children:e})=>{let{mode:a,theme:n,toggleMode:i}=(()=>{let[e,t]=(0,l.useState)("dark");(0,l.useEffect)(()=>{let e;t("light"===(e=window.localStorage.getItem(m))||"dark"===e?e:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")},[]),(0,l.useEffect)(()=>{window.localStorage.setItem(m,e),document.documentElement.setAttribute("data-theme",e);let t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content","dark"===e?"#0e0d0a":"#f3e28a")},[e]);let r=(0,l.useCallback)(()=>{t(e=>"dark"===e?"light":"dark")},[]),o="dark"===e?c:g;return{mode:e,theme:o,toggleMode:r,setMode:t}})();return(0,t.jsxs)(r.ThemeProvider,{theme:n,children:[(0,t.jsx)(o,{}),(0,t.jsxs)(f,{children:[(0,t.jsx)(d,{mode:a,onToggle:i}),e]})]})}],30824)}]);