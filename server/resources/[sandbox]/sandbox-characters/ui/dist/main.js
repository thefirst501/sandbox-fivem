  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Px=sc(xx||(xx=Nx`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Tx=sc(Vx||(Vx=Nx`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Ox=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?Re(e.palette[t].main,.62):Ie(e.palette[t].main,.5),jx=Mx("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${QC(n.color)}`],t[n.variant]]}})((({ownerState:e,theme:t})=>C({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:Ox(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),Ex=Mx("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.dashed,t[`dashedColor${QC(n.color)}`]]}})((({ownerState:e,theme:t})=>{const n=Ox(t,e.color);return C({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),oc(kx||(kx=Nx`
    animation: ${0} 3s infinite linear;
  `),Tx)),Fx=Mx("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.bar,t[`barColor${QC(n.color)}`],("indeterminate"===n.variant||"query"===n.variant)&&t.bar1Indeterminate,"determinate"===n.variant&&t.bar1Determinate,"buffer"===n.variant&&t.bar1Buffer]}})((({ownerState:e,theme:t})=>C({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&oc(Sx||(Sx=Nx`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),Yx))),Bx=Mx("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.bar,t[`barColor${QC(n.color)}`],("indeterminate"===n.variant||"query"===n.variant)&&t.bar2Indeterminate,"buffer"===n.variant&&t.bar2Buffer]}})((({ownerState:e,theme:t})=>C({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:Ox(t,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&oc(Dx||(Dx=Nx`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),RY=sc(jY||(jY=BY`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),WY=sc(EY||(EY=BY`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),GY=Mx("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),XY=Mx(YY,{name:"MuiTouchRipple",slot:"Ripple"})(FY||(FY=BY`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }