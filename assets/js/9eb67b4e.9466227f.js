"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[684],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),k=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=k(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=k(n),s=r,c=m["".concat(o,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6157:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:2,title:"\u6388\u6743\u670d\u52a1"},o="OAuth Access",k={unversionedId:"developer_cookbook/security/SECURITY-002-oauth2",id:"developer_cookbook/security/SECURITY-002-oauth2",isDocsHomePage:!1,title:"\u6388\u6743\u670d\u52a1",description:"\u8be5\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u5c55\u793a api \u7684\u8bbf\u95ee\u63a7\u5236\u7684\u5b89\u5168\u673a\u5236",source:"@site/docs/developer_cookbook/security/SECURITY-002-oauth2.md",sourceDirName:"developer_cookbook/security",slug:"/developer_cookbook/security/SECURITY-002-oauth2",permalink:"/docs/developer_cookbook/security/SECURITY-002-oauth2",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/security/SECURITY-002-oauth2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u6388\u6743\u670d\u52a1"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1 tkeel \u65f6\u5982\u4f55\u8003\u8651\u5b89\u5168\u7684",permalink:"/docs/developer_cookbook/security/SECURITY-001-how_designed"},next:{title:"\u8bbe\u5907",permalink:"/docs/developer_cookbook/device"}},d=[{value:"\u600e\u6837\u901a\u8fc7 api \u8bbf\u95ee\u5e73\u53f0",id:"\u600e\u6837\u901a\u8fc7-api-\u8bbf\u95ee\u5e73\u53f0",children:[],level:2},{value:"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b",id:"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b",children:[{value:"1 password",id:"1-password",children:[],level:3},{value:"2 authorization_code",id:"2-authorization_code",children:[{value:"2-1 \u83b7\u53d6\u6388\u6743code",id:"2-1-\u83b7\u53d6\u6388\u6743code",children:[],level:4},{value:"2-2 \u4f7f\u7528<code>code</code>\u4ea4\u6362<code>token</code>",id:"2-2-\u4f7f\u7528code\u4ea4\u6362token",children:[],level:4}],level:3},{value:"3 implicit",id:"3-implicit",children:[],level:3},{value:"4 client_credentials",id:"4-client_credentials",children:[],level:3},{value:"* \u9a8c\u8bc1token",id:"-\u9a8c\u8bc1token",children:[],level:3},{value:"* \u5237\u65b0token",id:"-\u5237\u65b0token",children:[],level:3}],level:2}],u={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"oauth-access"},"OAuth Access"),(0,l.kt)("p",null,"\u8be5\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u5c55\u793a api \u7684\u8bbf\u95ee\u63a7\u5236\u7684\u5b89\u5168\u673a\u5236"),(0,l.kt)("h2",{id:"\u600e\u6837\u901a\u8fc7-api-\u8bbf\u95ee\u5e73\u53f0"},"\u600e\u6837\u901a\u8fc7 api \u8bbf\u95ee\u5e73\u53f0"),(0,l.kt)("p",null,"\u5f53\u5916\u90e8\u4ee5\u8c03\u7528\u63a5\u53e3\u7684\u65b9\u5f0f\u8bbf\u95ee\u5e73\u53f0\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u5e73\u53f0\u7684\u6388\u6743\u670d\u52a1\u7684\u6210\u529f\u8ba4\u8bc1\u624d\u80fd\u8bbf\u95ee\u5230\u76f8\u5e94\u63a5\u53e3\u3002\u6388\u6743\u670d\u52a1\u652f\u6301\u6807\u51c6\u7684 oaut2 \u534f\u8bae\u3002"),(0,l.kt)("h2",{id:"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b"},"\u652f\u6301\u7684\u6388\u6743\u7c7b\u578b"),(0,l.kt)("h3",{id:"1-password"},"1 password"),(0,l.kt)("p",null,"\u8d44\u6e90\u8bf7\u6c42\u65b9(client\u65b9)\u4f7f\u7528\n\u5982\u679c\u5145\u5206\u4fe1\u4efb\u63a5\u5165\u5e94\u7528(client), \u7528\u6237\u5c31\u53ef\u4ee5\u76f4\u63a5\u628a\u7528\u6237\u540d\u5bc6\u7801\u7ed9\u63a5\u5165\u5e94\u7528.\n\u63a5\u5165\u5e94\u7528\u4f7f\u7528\u7528\u6237\u8d26\u53f7\u5bc6\u7801\u7533\u8bf7\u4ee4\u724c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/oauth/token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Header"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded")," "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"password"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1,str2,str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b",(0,l.kt)("inlineCode",{parentName:"td"},"all"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response\u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDMyNzA3LCJzdWIiOiJhZG1pbiJ9.ECfUkCMUZE8I6GH3XTDcJnQgDryiRyyBhEHBW-dCxzFWaR-mvU5dsx3XV2bx-LWZzPJTBAQ3rB5QOb4BHjnBXw",\n    "expires_in": 7200,\n    "refresh_token": "AH-B00RKXTME9WXDPSBSTG",\n    "scope": "all",\n    "token_type": "Bearer"\n}\n')),(0,l.kt)("h3",{id:"2-authorization_code"},"2 authorization_code"),(0,l.kt)("h4",{id:"2-1-\u83b7\u53d6\u6388\u6743code"},"2-1 \u83b7\u53d6\u6388\u6743code"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728oauth2 server \u6ce8\u518c\u7684client_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1,str2,str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b",(0,l.kt)("inlineCode",{parentName:"td"},"all"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u8bf7\u6c42\u7684\u6807\u5fd7\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u653e",(0,l.kt)("inlineCode",{parentName:"td"},"code"),"\u7528\u7684\u56de\u8c03uri,\u56de\u8c03\u65f6\u4f1a\u5728uri\u540e\u9762\u8ddf\u4e0a",(0,l.kt)("inlineCode",{parentName:"td"},"?code=**&state=###"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=code&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"302 http://localhost:8080/oauth/on_code?code=XUNKO4OPPROWAPFKEWNZWA&state=xyz")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4f1a\u8fd4\u56de\u8bf7\u6c42\u65f6\u8bbe\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"state"),", \u8bf7\u5728\u8fdb\u884c\u4e0b\u4e00\u6b65\u4e4b\u524d\u9a8c\u8bc1\u5b83, \u9632\u6b62\u8bf7\u6c42\u88ab\u52ab\u6301\u6216\u8005\u7be1\u6539"),(0,l.kt)("h4",{id:"2-2-\u4f7f\u7528code\u4ea4\u6362token"},"2-2 \u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"h4"},"code"),"\u4ea4\u6362",(0,l.kt)("inlineCode",{parentName:"h4"},"token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/oauth/token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Header"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"authorization_code"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"1-1 \u53d1\u653e\u7684code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"1-1 \u586b\u5199\u7684redirect_uri")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response\u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU3MTU1NTksInN1YiI6InRlc3QifQ.ZMgIDQMW7FGxbF1V8zWOmEkmB7aLH1suGYjhDdrT7aCYMEudWUoiCkWHSvBmJahGm0RDXa3IyDoGFxeMfzlDNQ",\n    "expires_in": 7200,\n    "refresh_token": "JG7_WGLWXUOW2KV2VLJKSG",\n    "scope": "all",\n    "token_type": "Bearer"\n}\n')),(0,l.kt)("h3",{id:"3-implicit"},"3 implicit"),(0,l.kt)("p",null,"\u8d44\u6e90\u8bf7\u6c42\u65b9(client\u65b9)\u4f7f\u7528,\n\u591a\u7528\u4e8e\u6ca1\u6709\u540e\u7aef\u7684\u5e94\u7528,\n\u7528\u6237\u6388\u6743\u767b\u5f55\u4e4b\u540e, \u4f1a\u76f4\u63a5\u5411\u524d\u7aef\u53d1\u9001\u4ee4\u724c(",(0,l.kt)("inlineCode",{parentName:"p"},"access_token"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 oauth2 server \u6ce8\u518c\u7684client_id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"response_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"token"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1,str2,str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b",(0,l.kt)("inlineCode",{parentName:"td"},"all"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1\u8bf7\u6c42\u7684\u6807\u5fd7\u5b57\u6bb5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u653e",(0,l.kt)("inlineCode",{parentName:"td"},"code"),"\u7528\u7684\u56de\u8c03uri,\u56de\u8c03\u65f6\u4f1a\u5728uri\u540e\u9762\u8ddf\u4e0a",(0,l.kt)("inlineCode",{parentName:"td"},"?code=**&state=###"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=token&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http status code 302\nhttp://localhost:8080/oauth/on_code#access_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDI3OTMwLCJzdWIiOiJhZG1pbiJ9.RBYns9UnNYDHINSBzvHWHRzuKCpzKmsxUnKt30lntmGvXmVDoByZtlB0RHAVB59PHBlJNO_YUBZzC2odwCa8Tg\n&expires_in=3600&scope=all&state=xyz&token_type=Bearer\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u4f1a\u8fd4\u56de\u8bf7\u6c42\u65f6\u8bbe\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", \u8bf7\u5728\u8fdb\u884c\u4e0b\u4e00\u6b65\u4e4b\u524d\u9a8c\u8bc1\u5b83, \u9632\u6b62\u8bf7\u6c42\u88ab\u52ab\u6301\u6216\u8005\u7be1\u6539"),(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u79cd\u65b9\u5f0f\u628a\u4ee4\u724c\u76f4\u63a5\u4f20\u7ed9\u524d\u7aef\uff0c\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u3002\u56e0\u6b64\uff0c\u53ea\u80fd\u7528\u4e8e\u4e00\u4e9b\u5b89\u5168\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\uff0c\u5e76\u4e14\u4ee4\u724c\u7684\u6709\u6548\u671f\u5fc5\u987b\u975e\u5e38\u77ed\uff0c\u901a\u5e38\u5c31\u662f\u4f1a\u8bdd\u671f\u95f4\uff08session\uff09\u6709\u6548\uff0c\u6d4f\u89c8\u5668\u5173\u6389\uff0c\u4ee4\u724c\u5c31\u5931\u6548\u4e86")),(0,l.kt)("h3",{id:"4-client_credentials"},"4 client_credentials"),(0,l.kt)("p",null,"\u8d44\u6e90\u8bf7\u6c42\u65b9(client\u65b9)\u4f7f\u7528\n\u4f7f\u7528\u5728oauth2\u670d\u52a1\u5668\u6ce8\u518c\u7684client_id \u548c client_secret \u83b7\u53d6 access_token,\n\u53d1\u51fa API \u8bf7\u6c42\u65f6\uff0c\u5b83\u5e94\u5c06access_token\u4f5c\u4e3a Bearer \u4ee4\u724c\u4f20\u9012\u5230 Authorization \u8bf7\u6c42\u5934\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/oauth/token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Header"),"  "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body\u53c2\u6570\u8bf4\u660e"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"client_credentials"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scope"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u8303\u56f4,",(0,l.kt)("inlineCode",{parentName:"td"},"str1,str2,str3"),", \u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8bf4\u660e,\u586b",(0,l.kt)("inlineCode",{parentName:"td"},"all"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"scope")," \u9700\u8981\u63d0\u524d\u5728oauth2\u670d\u52a1\u6ce8\u518c")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbWJlZGVkLWg1LWFwaSIsImV4cCI6MTU4OTk3NzQyNn0.Pu93fy0-gyiFqExBkCFAKTVJ1on_RpOSexzkHqczA6n6kB2_mOHbTMOyGK_Di7bHxZ3JqpZeyDoKQBtUe_T7jw",\n    "expires_in": 7200,\n    "token_type": "Bearer"\n}\n')),(0,l.kt)("h3",{id:"-\u9a8c\u8bc1token"},"* \u9a8c\u8bc1token"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8bf4\u660e")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u662f\u8d44\u6e90\u7aef\u4f7f\u7528\u7684,\n\u7528\u6765\u9a8c\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"p"},"access_token")," ",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," ."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET"),"  ",(0,l.kt)("inlineCode",{parentName:"p"},"oauth/authenticate")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bearer Token"),(0,l.kt)("li",{parentName:"ul"},"Token: ",(0,l.kt)("inlineCode",{parentName:"li"},"access_token"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Status Code: 200\nResponse Body\n{\n    "client_id": "000000",\n    "domain": "http://localhost",\n    "expires_in": 2654,\n    "scope": "",\n    "user_id": "usr-2-362d85d770ec849ea8306df2f32e7074"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Status Code: 400\nResponse Body\n   invalid access token\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," "),(0,l.kt)("p",null,"\u5982\u679ctoken\u6b63\u786e, \u63a5\u53e3\u8fd8\u4f1a\u4e00\u8d77\u8fd4\u56de\u6743\u9650\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"p"},"scope")," client\u7684\u6ce8\u518cdomain, \u8fd9\u91cc\u63a8\u8350\u9a8c\u8bc1\u4e0b, \u8bf7\u6c42\u65b9\u7684\u8eab\u4efd\u548c\u6743\u9650."),(0,l.kt)("h3",{id:"-\u5237\u65b0token"},"* \u5237\u65b0token"),(0,l.kt)("p",null,"\u5237\u65b0access_token, \u4f7f\u7528refresh_token\u6362\u53d6access_token"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u65b9\u5f0f")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"/token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u5934 Authorization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"basic auth"),(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_id")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("inlineCode",{parentName:"li"},"client_secret"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Header")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Body\u53c2\u6570\u8bf4\u660e")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,l.kt)("inlineCode",{parentName:"td"},"refresh_token"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refresh_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e4b\u524d\u83b7\u53d6\u7684refresh_token")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU4MTc2MTMsInN1YiI6IjEifQ.yNpQIbklhtsSr5KEkJMAR4I30c85OEriYwAOpL_ukRBJ1qsSziT05HFN-kxVN1-qM18TzVEf8beCvugyhpgpsg",\n    "expires_in": 7200,\n    "refresh_token": "2AH_LQHPUYK8XML4LKMQKG",\n    "scope": "all",\n    "token_type": "Bearer"\n}\n')))}m.isMDXComponent=!0}}]);