(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,o)=>{t.exports=e.r(76562)},30824,e=>{"use strict";var t=e.i(43476),o=e.i(97053);let r=o.createGlobalStyle`
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
    background-color: var(--color-background);
    background-image: var(--body-gradient);
    background-attachment: scroll;
    color: var(--color-text);
    line-height: 1.65;
    overflow-x: hidden;
    width: 100%;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.25s ease, color 0.25s ease;

    @media (min-width: 769px) {
      background-attachment: fixed;
    }
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: var(--grid-opacity);
    z-index: -1;
    background-image:
      linear-gradient(var(--color-border) 1px, transparent 1px),
      linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent);
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: var(--noise-opacity);
    z-index: -1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    mix-blend-mode: var(--noise-blend);
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
    background: var(--color-selection-bg);
    color: var(--color-selection-text);
  }

  section {
    padding: ${({theme:e})=>e.spacing.xl} ${({theme:e})=>e.spacing.md};
  }

  .container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`;var a=e.i(46932),n=e.i(11152);let i=(0,o.default)(a.motion.button).withConfig({displayName:"ThemeToggle__ToggleButton",componentId:"sc-ee20809-0"})`
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
`,l=({mode:e,onToggle:o})=>{let r="dark"===e?"light":"dark";return(0,t.jsx)(i,{type:"button",onClick:o,"aria-label":`Switch to ${r} mode`,title:`Switch to ${r} mode`,whileHover:{y:-2,rotate:8},whileTap:{y:0,rotate:0},children:"dark"===e?(0,t.jsx)(n.FaSun,{"aria-hidden":"true"}):(0,t.jsx)(n.FaMoon,{"aria-hidden":"true"})})};var c=e.i(71645),d=e.i(18566);function s({children:e}){let[r]=(0,c.useState)(()=>new o.ServerStyleSheet);return(0,d.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return r.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}let m={colors:{background:"var(--color-background)",surface:"var(--color-surface)",text:"var(--color-text)",muted:"var(--color-muted)",primary:"var(--color-primary)",secondary:"var(--color-secondary)",accent:"var(--color-accent)",accentSoft:"var(--color-accent-soft)",card:"var(--color-card)",cardDarker:"var(--color-card-darker)",border:"var(--color-border)",gradient:"var(--color-gradient)",selectionBg:"var(--color-selection-bg)",selectionText:"var(--color-selection-text)",overlay:"var(--color-overlay)",hoverSurface:"var(--color-hover-surface)",onAccent:"var(--color-on-accent)"},fonts:{primary:"var(--font-body), 'DM Sans', sans-serif",heading:"var(--font-heading), 'Bricolage Grotesque', sans-serif"},breakpoints:{mobile:"320px",tablet:"768px",desktop:"1024px"},spacing:{xs:"0.5rem",sm:"1rem",md:"2rem",lg:"4rem",xl:"8rem"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"16px"},shadows:{soft:"none",glow:"none"}},g={mode:"dark",...m},u={mode:"light",...m},h="portfolio-theme",p=o.default.div.withConfig({displayName:"Providers__AppContainer",componentId:"sc-521ee572-0"})`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
`;e.s(["default",0,({children:e})=>{let{mode:a,theme:n,toggleMode:i}=(()=>{let[e,t]=(0,c.useState)("dark"),[o,r]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e=(()=>{let e=window.localStorage.getItem(h);if("light"===e||"dark"===e)return e;let t=document.documentElement.getAttribute("data-theme");return"light"===t||"dark"===t?t:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"})();t(e),document.documentElement.setAttribute("data-theme",e),r(!0)},[]),(0,c.useEffect)(()=>{if(!o)return;window.localStorage.setItem(h,e),document.documentElement.setAttribute("data-theme",e);let t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content","dark"===e?"#0e0d0a":"#f3e28a")},[e,o]);let a=(0,c.useCallback)(()=>{t(e=>"dark"===e?"light":"dark")},[]),n="dark"===e?g:u;return{mode:e,theme:n,toggleMode:a,setMode:t}})();return(0,t.jsx)(s,{children:(0,t.jsxs)(o.ThemeProvider,{theme:n,children:[(0,t.jsx)(r,{}),(0,t.jsxs)(p,{children:[(0,t.jsx)(l,{mode:a,onToggle:i}),e]})]})})}],30824)}]);