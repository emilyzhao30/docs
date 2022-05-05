"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1253],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(r),p=a,m=d["".concat(s,".").concat(p)]||d[p]||b[p]||i;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function p(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4689:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return b}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},s=void 0,u={unversionedId:"api/core-broker/tag",id:"api/core-broker/tag",title:"API\u5217\u8868",description:"API\u5217\u8868",source:"@site/docs/api/core-broker/tag.md",sourceDirName:"api/core-broker",slug:"/api/core-broker/tag",permalink:"/en/api/core-broker/tag",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core-broker/tag.md",tags:[],version:"current",lastUpdatedAt:1646138998,formattedLastUpdatedAt:"3/1/2022",sidebarPosition:0,frontMatter:{title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"VerifyToken",permalink:"/en/api/Rudder/method_VerifyToken"},next:{title:"Entity_GetEntity",permalink:"/en/api/core-broker/method_Entity_GetEntity"}},c={},b=[{value:"subscribe\u76f8\u5173API",id:"subscribe\u76f8\u5173api",level:2}],d={toc:b};function p(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"subscribe\u76f8\u5173api"},"subscribe\u76f8\u5173API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_SubscribeByDevice"},"SubscribeByDevice")),(0,i.kt)("td",{parentName:"tr",align:null},"subscribe by device")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_subscribeEntitiesByGroups"},"subscribeEntitiesByGroups")),(0,i.kt)("td",{parentName:"tr",align:null},"add subscribe entities by groups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_ValidateSubscribed"},"ValidateSubscribed")),(0,i.kt)("td",{parentName:"tr",align:null},"validate subscribe topic is user request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_unsubscribeEntitiesByIDs"},"unsubscribeEntitiesByIDs")),(0,i.kt)("td",{parentName:"tr",align:null},"delete subscribe entities by ids")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_listSubscribeEntities"},"listSubscribeEntities")),(0,i.kt)("td",{parentName:"tr",align:null},"get subscribe entities list")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_subscribeEntitiesByModels"},"subscribeEntitiesByModels")),(0,i.kt)("td",{parentName:"tr",align:null},"add subscribe entities by models")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_createSubscribe"},"createSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"create subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_listSubscribe"},"listSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"get subscribe list")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_getSubscribe"},"getSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"get subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_deleteSubscribe"},"deleteSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"delete subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_changeSubscribe"},"changeSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"change subscribed to other subscription")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_updateSubscribe"},"updateSubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"update subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./method_subscribeEntitiesByIDs"},"subscribeEntitiesByIDs")),(0,i.kt)("td",{parentName:"tr",align:null},"add subscribe entities by ids")))))}p.isMDXComponent=!0}}]);