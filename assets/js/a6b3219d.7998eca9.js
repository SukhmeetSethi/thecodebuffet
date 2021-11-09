"use strict";(self.webpackChunkthecodebuffet=self.webpackChunkthecodebuffet||[]).push([[658],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3942:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},ProfileImage:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={id:"about-me",sidebar_position:1,sidebar_label:"About me"},s="Nice Meeting you!",c={unversionedId:"about-me/about-me",id:"about-me/about-me",isDocsHomePage:!1,title:"Nice Meeting you!",description:"I am Sukhmeet Sethi  and here's how you can find me in a crowded market :",source:"@site/docs/about-me/intro.mdx",sourceDirName:"about-me",slug:"/about-me/about-me",permalink:"/thecodebuffet/docs/about-me/about-me",editUrl:"https://github.com/SukhmeetSethi/thecodebuffet/docs/about-me/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"about-me",sidebar_position:1,sidebar_label:"About me"},sidebar:"aboutMeSidebar",next:{title:"How it started",permalink:"/thecodebuffet/docs/about-me/story"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],p=function(e){var t=e.imageUrl;e.color;return(0,o.kt)("div",{style:{display:"flex",width:"80%",alignItems:"center",padding:"2rem",margin:"10px"}},(0,o.kt)("img",{src:t,style:{borderRadius:"40%",width:"50%"}}))},m={toc:l,ProfileImage:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nice-meeting-you"},"Nice Meeting you!"),(0,o.kt)("p",null," I am ",(0,o.kt)("strong",{parentName:"p"},"Sukhmeet Sethi"),"  and here's how you can find me in a crowded market :"),(0,o.kt)(p,{color:"#2583c2",imageUrl:"/img/sukhmeet.jpg",mdxType:"ProfileImage"})," ",(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,o.kt)("p",null,"Or ",(0,o.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,o.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,o.kt)("p",null,"Generate a new Docusaurus site using the ",(0,o.kt)("strong",{parentName:"p"},"classic template"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm init docusaurus@latest my-website classic\n")),(0,o.kt)("h2",{id:"start-your-site"},"Start your site"),(0,o.kt)("p",null,"Run the development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,o.kt)("p",null,"Your site starts at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,o.kt)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}d.isMDXComponent=!0}}]);