"use strict";(self.webpackChunkthecodebuffet=self.webpackChunkthecodebuffet||[]).push([[924],{9853:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),c=a(6698),s=a(6742),r=a(941),n=a(4973);function o(e){let{doc:t}=e;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(s.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function g(e){let{tag:t}=e;const a=function(){const{selectMessage:e}=(0,r.c2)();return t=>e(t,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),g=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:a(t.docs.length),tagName:t.name});return l.createElement(c.Z,{title:g,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,g),l.createElement(s.Z,{href:t.allTagsPath},l.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.docs.map((e=>l.createElement(o,{key:e.id,doc:e}))))))))}}}]);