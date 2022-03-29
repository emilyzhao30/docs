"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6781],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=d(t),m=r,c=k["".concat(o,".").concat(m)]||k[m]||s[m]||l;return t?a.createElement(c,p(p({ref:n},u),{},{components:t})):a.createElement(c,p({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8207:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),p=["components"],i={sidebar_position:1,title:"OPENAPI",id:"openapi"},o=void 0,d={unversionedId:"appendix/openapi",id:"appendix/openapi",title:"OPENAPI",description:"\u901a\u7528\u7aef\u70b9",source:"@site/docs/appendix/openapi.md",sourceDirName:"appendix",slug:"/appendix/openapi",permalink:"/appendix/openapi",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/appendix/openapi.md",tags:[],version:"current",lastUpdatedAt:1648026225,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"OPENAPI",id:"openapi"},sidebar:"tutorialSidebar",previous:{title:"UserQuery",permalink:"/api/security/method_UserQuery"}},u={},s=[{value:"\u901a\u7528\u7aef\u70b9",id:"\u901a\u7528\u7aef\u70b9",level:2},{value:"Required API",id:"required-api",level:3},{value:"/v1/identify",id:"v1identify",level:4},{value:"/v1/status",id:"v1status",level:4},{value:"/v1/tenant/enable",id:"v1tenantenable",level:4},{value:"/v1/tenant/disable",id:"v1tenantdisable",level:4},{value:"Optional API",id:"optional-api",level:3},{value:"/v1/addons/identify",id:"v1addonsidentify",level:4}],k={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u901a\u7528\u7aef\u70b9"},"\u901a\u7528\u7aef\u70b9"),(0,l.kt)("p",null,"\u5e73\u53f0\u63d2\u4ef6\u5fc5\u987b\u5b9e\u73b0\u4ee5\u4e0b\u7aef\u70b9"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u7aef\u70b9\u8c03\u7528\u65f6\u9ed8\u8ba4\u4f20\u5165\n",(0,l.kt)("inlineCode",{parentName:"p"},'header=>Authorization:{"user_id":"admin"}')),(0,l.kt)("p",null,"\u7aef\u70b9\u54cd\u5e94\u901a\u7528\u90e8\u5206\uff1a"),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret":0, // \u8fd4\u56de\u7801 0 --\x3e ok -1 --\x3e fail\n    "msg":"ok" // \u6d88\u606f \u6210\u529f\u9ed8\u8ba4ok \u9519\u8bef\u60c5\u51b5\u4e0b\u643a\u5e26\u9519\u8bef\u4fe1\u606f\n}\n')),(0,l.kt)("h3",{id:"required-api"},"Required API"),(0,l.kt)("h4",{id:"v1identify"},"/v1/identify"),(0,l.kt)("p",null,"\u6ce8\u518c\u65f6\u8c03\u7528\u6b64\u63d2\u4ef6\u63a5\u53e3\uff0c\u7528\u4e8e\u9a8c\u8bc1\u63d2\u4ef6\u7684\u8eab\u4efd\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get /v1/identify\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "res": {\n        "ret": 0,\n        "msg":"ok",\n    },\n    "plugin_id": "yunify-xxx", // \u63d2\u4ef6\u540d\n    "version": "1.0", // \u63d2\u4ef6\u7248\u672c\n    "tkeel_version": "v0.4.0", // \u63d2\u4ef6\u5b89\u88c5\u7684 tkeel \u5e73\u53f0\u7248\u672c\u3002\n    "addons_points": [ // \u63d2\u4ef6\u81ea\u8eab\u7684\u6269\u5c55\u70b9\u53ca\u8bf4\u660e\uff08\u53ef\u9009\uff09\n        {\n            "addons_point": "create_plugins",\n            "desc": "\u6ce8\u518c\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u8fd4\u56de\u503cdata\u5185\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9"\n        },\n        {\n            "addons_point": "install_plugins",\n            "desc": "\u5b89\u88c5\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u8fd4\u56de\u503cdata\u5185\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9"\n        },\n        {\n            "addons_point": "update_plugins",\n            "desc": "\u5b89\u88c5\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u8fd4\u56de\u503cdata\u5185\u6570\u636e\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9"\n        },\n        {\n            "addons_point": "unstall_plugins",\n            "desc": "\u5378\u8f7d\u63d2\u4ef6\u6210\u529f\u540e\u8c03\u7528\uff0c\u65e0\u8fd4\u56de\u503c"\n        }\n    ],\n    "implemented_plugin": [ // \u5b9e\u73b0\u7684\u63d2\u4ef6\u6269\u5c55\u70b9\uff08\u53ef\u9009\uff09\n        {\n            "id": "xxxx", // \u88ab\u6269\u5c55\u7684\u63d2\u4ef6\u7684\u540d\u5b57\n            "version": "1.0", // \u88ab\u6269\u5c55\u63d2\u4ef6\u7684\u7248\u672c\n            "addons": [\n                {\n                    "addons_point": "xxxx", // \u6269\u5c55\u70b9\u540d\u79f0\n                    "implemented_endpoint": "xxx" // \u5bf9\u5e94\u5b9e\u73b0\u7aef\u70b9\u540d\u79f0\uff08\u56de\u8c03\u8def\u5f84\uff09 \u6b64\u8def\u5f84\u5fc5\u987b\u6ce8\u518c\u5230\u5e73\u53f0\u624d\u80fd\u88ab\u8c03\u7528\n                }\n            ]\n        }\n    ],\n    "entries": [ // \u57fa\u5ea7\u8bbf\u95ee\u83dc\u5355\uff08\u53ef\u9009\uff09\n        {\n            "id":"xx", // \u5165\u53e3 id\n            "name":"xxx", // \u5165\u53e3 name \u663e\u793a\u5728\u83dc\u5355\u4e0a\u7684\u540d\u5b57\n            "icon":"xxx", // \u5177\u4f53\u7684 icon\n            "path":"xxx/xxx", // \u8def\u5f84\n            "entry":"xxx/xxx/xxx",// \u8d44\u6e90\u8def\u5f84\n            "children":[] // \u5b50 entry\n        },\n    ],\n    "dependence":[ // \u4f9d\u8d56\u7684\u63d2\u4ef6\uff0c\u5b89\u88c5\u65f6\u4f1a\u68c0\u67e5\u662f\u5426\u5b89\u88c5\uff0c\u542f\u7528\u65f6\u5c06\u81ea\u52a8\u542f\u7528\u6240\u6709\u4f9d\u8d56\u7684\u63d2\u4ef6\uff08\u53ef\u9009\uff09\n        {\n            "id":"xxx", // \u63d2\u4ef6ID\n            "verison":"xxx", // \u63d2\u4ef6\u7248\u672c\n        },\n    ],\n    "permissions":[ // \u63d2\u4ef6\u58f0\u660e\u7684\u6743\u9650\uff0c\u53ef\u88ab\u6dfb\u52a0\u8fdb tKeel \u7684\u6743\u9650\u63a7\u5236\u4e2d\uff0c\u4e00\u79cd\u62bd\u8c61\u7684\u8d44\u6e90\uff08\u53ef\u9009\uff09\n        {   \n            "id":"XXX",// \u6743\u9650ID\uff0c\u540c\u7ea7\u6743\u9650\u552f\u4e00   \n            "name":"XDX",// \u6743\u9650\u540d\u79f0\uff0c\u663e\u793a\u7528\n            "dependences":[ // \u4f9d\u8d56\u7684\u6743\u9650\uff0c\u5f53\u6743\u9650\u88ab\u5141\u8bb8\u65f6\uff0c\u4f9d\u8d56\u7684\u6743\u9650\u4e5f\u88ab\u5141\u8bb8\n                "path":"AA/BB/CC", // \u4f9d\u8d56\u7684\u6743\u9650\u8def\u5f84\uff0c\u901a\u8fc7 \u63d2\u4ef6ID</\u7236\u7ea7ID>/\u6743\u9650ID \u7684\u683c\u5f0f\u6307\u5b9a\u4e00\u4e2a\u552f\u4e00\u7684\u6743\u9650\u3002\n                "desc":" dafda", // \u63cf\u8ff0\u4fe1\u606f\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u4f9d\u8d56\u4e4b\u7c7b\u7684\n            ],\n            "desc":"aaa", // \u6743\u9650\u7684\u63cf\u8ff0\u4fe1\u606f\n            "children":[], // \u5b50\u6743\u9650\u4fe1\u606f\n        },\n    ],\n}\n')),(0,l.kt)("h4",{id:"v1status"},"/v1/status"),(0,l.kt)("p",null,"\u65e0\u53c2\u6570\u8bf7\u6c42\uff0c\u5e73\u53f0\u4e0d\u5b9a\u65f6\u7684\u5bf9\u63d2\u4ef6\u8fdb\u884c\u72b6\u6001\u76d1\u6d4b\uff0c\u5982\u63d2\u4ef6\u8fd4\u56de\u5f02\u5e38\u6216\u672a\u54cd\u5e94\uff0c\u5219\u62e6\u622a\u5bf9\u4e8e\u8be5\u63d2\u4ef6\u7684\u76f8\u5173\u8c03\u7528\uff0c\u76f4\u81f3\u6062\u590d\u4e3a\u6b62\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Get /v1/status\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret": 0,\n    "msg": "ok",\n    "status": "ACTIVE"\n    // \u72b6\u6001\u6709\u4e0b\u5217\u51e0\u79cd \n    // ACTIVE   --\x3e \u6b63\u5e38\u8fd0\u884c\n    // STARTING --\x3e \u542f\u52a8\u4e2d \u7a0b\u5e8f\u6b63\u5728\u542f\u52a8\n    // STOPPING --\x3e \u505c\u6b62\u4e2d \u7a0b\u5e8f\u6b63\u5728\u505c\u6b62\n    // FAILED   --\x3e \u9519\u8bef \u7a0b\u5e8f\u81ea\u8eab\u9519\u8bef\n}\n')),(0,l.kt)("h4",{id:"v1tenantenable"},"/v1/tenant/enable"),(0,l.kt)("p",null,"\u79df\u6237\u542f\u7528\u65f6\u7684\u4e3b\u52a8\u8c03\u7528\uff0c\u8c03\u7528\u76f8\u5173\u63d2\u4ef6\u5e76\u8ba4\u8bc1\u3002\u63d2\u4ef6\u5728\u6536\u5230\u6b64\u8bf7\u6c42\u65f6\uff0c\u6839\u636e\u79df\u6237ID\u548c\u989d\u5916\u6570\u636e\u8fdb\u884c\u5bf9\u65b0\u79df\u6237\u6570\u636e\u7684\u521d\u59cb\u5316\u7b49\u64cd\u4f5c\uff0c\u8fd4\u56de\u6b63\u786e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Post /v1/tenant/enable\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tenant_id":"a",\n    "extra":dafa, // byte\n}\n')),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "res": {\n        "ret":0,\n        "msg":"ok",\n    }\n}\n')),(0,l.kt)("h4",{id:"v1tenantdisable"},"/v1/tenant/disable"),(0,l.kt)("p",null,"\u79df\u6237\u505c\u7528\u65f6\u7684\u4e3b\u52a8\u8c03\u7528\uff0c\u8c03\u7528\u76f8\u5173\u63d2\u4ef6\u5e76\u8ba4\u8bc1\u3002\u63d2\u4ef6\u6536\u5230\u6b64\u8bf7\u6c42\u65f6\u9700\u8981\u5220\u9664\u79df\u6237\u7684\u6570\u636e\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002\u8fd4\u56de\u6b63\u786e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Post /v1/tenant/disable\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tenant_id":"a",\n    "extra":dafa, // byte \n}\n')),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "res":{\n        "ret":0,\n        "msg":"ok",\n    }\n}\n')),(0,l.kt)("h3",{id:"optional-api"},"Optional API"),(0,l.kt)("h4",{id:"v1addonsidentify"},"/v1/addons/identify"),(0,l.kt)("p",null,"\u5e73\u53f0\u6709\u65b0\u63d2\u4ef6\u6ce8\u518c\uff0c\u4e14\u65b0\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5f53\u524d\u63d2\u4ef6\u7ed9\u51fa\u7684\u6269\u5c55\u70b9\u65f6\uff0c\u8c03\u7528\u5f53\u524d\u63d2\u4ef6\u6b64\u63a5\u53e3"),(0,l.kt)("p",null,"\u7528\u4e8e\u901a\u77e5\u5f53\u524d\u63d2\u4ef6\u6709\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5bf9\u5e94\u6269\u5c55\u70b9\uff0c\u9700\u81ea\u884c\u9a8c\u8bc1\u76f8\u5173\u63a5\u53e3\u662f\u5426\u53ef\u7528\uff0c\u5e76\u8fd4\u56de\u5e73\u53f0\u9a8c\u8bc1\u7ed3\u679c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Post /v1/addons/identify\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6210\u529f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u9519\u8bef")))),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugin": {\n        "id": "axafd", // \u8bf7\u6c42\u63d2\u4ef6id\n        "version": "1.0" // \u7248\u672c\n    }, // \u65b0\u589e\u7684\u63d2\u4ef6\u7684\u540d\u79f0\u548c\u7248\u672c\n    "endpoint": [\n        {\n            "addons_point": "xxxx",\n            "endpoint": "xxxx"\n        }\n    ] // \u65b0\u589e\u63d2\u4ef6\u5b9e\u73b0\u7684\u7aef\u70b9\u548c\u76ee\u6807\n}\n')),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \xa0 \n    "res":{\n        "ret":0,\n        "msg":"ok",\n    }\n}\n')))}m.isMDXComponent=!0}}]);