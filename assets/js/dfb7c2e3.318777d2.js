"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Chrome Extension",l={unversionedId:"Live Demo/Extension",id:"Live Demo/Extension",title:"Chrome Extension",description:"KeeperC is a contract wallet that allows users to participate in the system with any ERC20 token. However, for test purposes, KeeperC currently only supports the TERC20 token.",source:"@site/docs/Live Demo/Extension.md",sourceDirName:"Live Demo",slug:"/Live Demo/Extension",permalink:"/KeepERC20-docs/Live Demo/Extension",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Web App",permalink:"/KeepERC20-docs/Live Demo/Webapp"},next:{title:"Information",permalink:"/KeepERC20-docs/Live Demo/Information"}},p={},s=[{value:"Faucet",id:"faucet",level:2},{value:"Features",id:"features",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chrome-extension"},"Chrome Extension"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"KeeperC is a contract wallet that allows users to participate in the system with any ERC20 token. However, for test purposes, KeeperC currently only supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"TERC20")," token.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Mumbai testnet is used for a concrete example.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcbb ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KeepERC20/KeepERC20-frontend/tree/extension"},"Download (Code)")),(0,o.kt)("li",{parentName:"ul"},"\u2709\ufe0f Feedback: ",(0,o.kt)("a",{parentName:"li",href:"mailto:lukepark327@gmail.com"},"lukepark327@gmail.com"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"faucet"},"Faucet"),(0,o.kt)("p",null,'The faucet for Test ERC20 (TERC20) tokens is available! First, please login. Then, click the "TERC20 / <YOUR_BALANCE>" button to receive 100 TERC20 tokens.'),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The KeeperC Chrome Extension provides a user-friendly interface to interact with the KeeperC protocol. It has its own wallet functionalities, so you don't need other wallets!"),(0,o.kt)("p",null,"Here's how to use it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the KeeperC Chrome Extension from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KeepERC20/KeepERC20-frontend/tree/extension"},"GitHub repository"),". Please note that it's not available on the Chrome Web Store yet."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," to update the ",(0,o.kt)("inlineCode",{parentName:"li"},"dist")," folder, then navigate to ",(0,o.kt)("a",{parentName:"li",href:"chrome://extensions/"},"chrome://extensions/"),' and click on "Load unpacked" to import the updated ',(0,o.kt)("inlineCode",{parentName:"li"},"dist")," folder. You'll need to enable ",(0,o.kt)("strong",{parentName:"li"},"Developer mode")," first."),(0,o.kt)("li",{parentName:"ol"},'Get test tokens by clicking the "FAUCET / 0x1234..." button.'),(0,o.kt)("li",{parentName:"ol"},"Enjoy \ud83c\udd3a KeeperC!")))}u.isMDXComponent=!0}}]);