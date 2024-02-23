"use strict";(self.webpackChunkthecodebuffet=self.webpackChunkthecodebuffet||[]).push([[436],{9748:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=s(7624),a=s(2172);const n={id:"git-alias",title:"Get more efficient with Git aliases",sidebar_position:1,sidebar_label:"Git Aliases",tags:["git","aliases","developer","github","github aliases"]},o="Get more efficient with Git aliases",l={id:"tips-tricks/git/git-alias",title:"Get more efficient with Git aliases",description:"Developers love speed, whether it is about their machine or their dev environments. We often see developers prefer to use keyboard shortcuts instead of mouse to accelerate development. We also see some developers create shell scripts, use shell aliases and many more ways to gain development speed.",source:"@site/docs/tips-tricks/git/git-aliases.md",sourceDirName:"tips-tricks/git",slug:"/tips-tricks/git/git-alias",permalink:"/docs/tips-tricks/git/git-alias",draft:!1,unlisted:!1,editUrl:"https://github.com/SukhmeetSethi/thecodebuffet/docs/tips-tricks/git/git-aliases.md",tags:[{label:"git",permalink:"/docs/tags/git"},{label:"aliases",permalink:"/docs/tags/aliases"},{label:"developer",permalink:"/docs/tags/developer"},{label:"github",permalink:"/docs/tags/github"},{label:"github aliases",permalink:"/docs/tags/github-aliases"}],version:"current",sidebarPosition:1,frontMatter:{id:"git-alias",title:"Get more efficient with Git aliases",sidebar_position:1,sidebar_label:"Git Aliases",tags:["git","aliases","developer","github","github aliases"]},sidebar:"tipsTricksSidebar",next:{title:"Github Pages & Actions",permalink:"/docs/tips-tricks/git/git-actions"}},r={},c=[{value:"Git aliases",id:"git-aliases",level:2},{value:"My shortcuts",id:"my-shortcuts",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"get-more-efficient-with-git-aliases",children:"Get more efficient with Git aliases"}),"\n",(0,i.jsx)(t.p,{children:"Developers love speed, whether it is about their machine or their dev environments. We often see developers prefer to use keyboard shortcuts instead of mouse to accelerate development. We also see some developers create shell scripts, use shell aliases and many more ways to gain development speed."}),"\n",(0,i.jsx)(t.p,{children:"I am also one of those who prefer to cut down on extra overheads as much as possible. While I have by-hearted almost all key shortcuts for IntelliJ IDE and can code really fast, I always use to struggle when it comes to checking in code in Git. Now being a stubborn developer, I have never relied on UI based Git tools but have rather preferred command line to work with git. Git tends to be tedious in a way, imagine that you have to issue at least 3 commands to push your changes to remote repo:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'git add .\r\ngit commit -m "nice comment"\r\ngit push\n'})}),"\n",(0,i.jsx)(t.p,{children:"That is lot of typing to commit one small change and a developer may commit lot of times if not pushing the code everytime. Imagine other action like checkout, status, branch, pull, push etc. So many times I have made typos just while issuing specially the checkout, commit and branch command. My thought was, can I gain some efficiency here and that's where I found an option to setup aliases just like you can do it in shell."}),"\n",(0,i.jsx)(t.h2,{id:"git-aliases",children:"Git aliases"}),"\n",(0,i.jsx)(t.p,{children:"By using git aliases, we can setup shortcuts for git commands and cut down lot of typing. Ultimately that gives us more speed.\r\nSetup is really simple, just issue following command on your favorite git command line:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"git config --global alias.co checkout # for checkout\r\ngit config --global alias.cm commit   # for commit\r\n\r\n... and so on\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Now instead of typing ",(0,i.jsx)(t.em,{children:"git checkout"})," and ",(0,i.jsx)(t.em,{children:"git commit"}),", we can rather do this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'git co master\r\ngit cm -m "new comment"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"my-shortcuts",children:"My shortcuts"}),"\n",(0,i.jsx)(t.p,{children:"It's all about your preference how you would like to setup your aliases but I would like to share the scheme I use for aliases."}),"\n",(0,i.jsx)(t.admonition,{title:"My tip",type:"tip",children:(0,i.jsx)(t.p,{children:"I prefer all my shortcuts with two letters only : co, cm, st. The only reason I do that because it reduces chances of typo considerably but still gives an option to setup alias for each command. Also, I don't use aliases for all the commands but just limit it to the ones which are frequently used"})}),"\n",(0,i.jsx)(t.p,{children:"Here are my aliases:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Command"}),(0,i.jsx)(t.th,{children:"Alias"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"checkout"}),(0,i.jsx)(t.td,{children:"co"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"commit"}),(0,i.jsx)(t.td,{children:"cm"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"status"}),(0,i.jsx)(t.td,{children:"st"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pull"}),(0,i.jsx)(t.td,{children:"pl"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"push"}),(0,i.jsx)(t.td,{children:"ph"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"branch"}),(0,i.jsx)(t.td,{children:"br"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fetch"}),(0,i.jsx)(t.td,{children:"ft"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"stash"}),(0,i.jsx)(t.td,{children:"sh"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"add"}),(0,i.jsx)(t.td,{children:"ad"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"merge"}),(0,i.jsx)(t.td,{children:"mg"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>o});var i=s(1504);const a={},n=i.createContext(a);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);