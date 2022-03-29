"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[458],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8919:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"\u914d\u7f6e",sidebar_position:2},c=void 0,p={unversionedId:"developer_cookbook/core/introduction/configuration",id:"developer_cookbook/core/introduction/configuration",title:"\u914d\u7f6e",description:"Example:",source:"@site/docs/developer_cookbook/core/introduction/configuration.md",sourceDirName:"developer_cookbook/core/introduction",slug:"/developer_cookbook/core/introduction/configuration",permalink:"/developer_cookbook/core/introduction/configuration",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/introduction/configuration.md",tags:[],version:"current",lastUpdatedAt:1648175826,formattedLastUpdatedAt:"2022/3/25",sidebarPosition:2,frontMatter:{title:"\u914d\u7f6e",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/developer_cookbook/core/introduction/architecture"},next:{title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",permalink:"/developer_cookbook/core/tutorial/iot-create-entity-from-model"}},d={},u=[{value:"\u547d\u4ee4\u884c\u53c2\u6570\u8be6\u89e3",id:"\u547d\u4ee4\u884c\u53c2\u6570\u8be6\u89e3",level:3}],m={toc:u};function s(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# proxy \u7528\u4e8e\u914d\u7f6e core \u5185\u90e8\u56de\u8c03\u6a21\u5757\nproxy:\n  # http_port \u6307\u5b9a api \u56de\u8c03\u7684 http \u7aef\u53e3\uff0c\u9ed8\u8ba4\u503c\u4e3a 20000\n  # \u8be5\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6307\u5b9a\uff0c\u8be6\u89c1\u4e0b\u6587\n  http_port: 20000\n  # grpc_port \u6307\u5b9a api \u56de\u8c03\u7684 grpc \u7aef\u53e3\uff0c\u9ed8\u8ba4\u503c\u4e3a 20001\n  # \u8be5\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u6307\u5b9a\uff0c\u8be6\u89c1\u4e0b\u6587\n  grpc_port: 20001\n\n\n# server\nserver:\n  # name \u7528\u4e8e\u6307\u5b9a\u5f53\u524d core \u8282\u70b9\u540d\u79f0\uff0c\u552f\u4e00\u6807\u8bc6 core \u8282\u70b9\u5b9e\u4f8b\n  name: core\n  # app_id \u7528\u4e8e\u6307\u5b9a\u670d\u52a1\u540d\u79f0\n  app_id: core\n  # sources \u6307\u5b9a core::runtime \u7684\u8f93\u5165\u6570\u636e\u6e90\n  sources:\n    - kafka://139.198.125.147:9092/core0/core\n    - kafka://139.198.125.147:9092/core1/core\n    - kafka://139.198.125.147:9092/core2/core\n    - kafka://139.198.125.147:9092/core3/core\n\n\n# logger \u914d\u7f6e \u670d\u52a1\u7684\u65e5\u5fd7\nlogger:\n  # level \u6307\u5b9a\u65e5\u5fd7\u7ea7\u522b\n  level: debug\n  # output \u6307\u5b9a\u65e5\u5fd7\u7684\u6587\u4ef6\u8f93\u51fa\u8def\u5f84\uff0c\u9ed8\u8ba4\u503c\u4e3a DEBUG\n  # output: \n  # encoding \u6307\u5b9a\u65e5\u5fd7\u7684\u8f93\u51fa\u683c\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a JSON\n  # encoding: JSON\n\n\n# discovery \u6307\u5b9a core \u670d\u52a1\u7684\u670d\u52a1\u6ce8\u518c\u3001\u53d1\u73b0\u6a21\u5757\u914d\u7f6e\ndiscovery:\n  # dial_timeout \u6307\u5b9a discovery \u8fde\u63a5\u5fc3\u8df3\u5468\u671f\uff0c \u9ed8\u8ba4\u503c\u4e3a 3s\n  heart_time: 3\n  # dial_timeout \u6307\u5b9a discovery \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c \u9ed8\u8ba4\u503c\u4e3a 3s\n  dial_timeout: 3\n  # endpoints \u6307\u5b9a discovery \u96c6\u7fa4 \u5730\u5740\n  endpoints: \n    - http://localhost:2379\n\n\n# components \u7528\u4e8e\u914d\u7f6e core \u9ed8\u8ba4\u7684\u4e2d\u95f4\u4ef6\u914d\u7f6e\ncomponents:\n  # etcd \u6307\u5b9a core \u4f7f\u7528\u7684 rtcd \u914d\u7f6e\uff0c etcd \u662fcore \u5fc5\u987b\u4f9d\u8d56\u7684\u4e2d\u95f4\u4ef6.\n  etcd: \n    # dial_timeout \u6307\u5b9a etcd \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c \u9ed8\u8ba4\u503c\u4e3a 3s\n    dial_timeout: 3\n    # endpoints \u6307\u5b9a etcd \u96c6\u7fa4 \u5730\u5740\n    endpoints: \n      - http://localhost:2379\n  # store \u6307\u5b9a core \u670d\u52a1\u9ed8\u8ba4\u7684\u72b6\u6001\u5b58\u50a8, \u9ed8\u8ba4\u503c\u5b9a noop \u7c7b\u578b.\n  store:\n    name: noop\n    properties:\n      - key: name\n        value: core1.noop\n      - key: store_name\n        value: core-state\n\n  # time_series \u6307\u5b9a core \u670d\u52a1\u9ed8\u8ba4\u7684\u65f6\u5e8f\u5b58\u50a8, \u9ed8\u8ba4\u503c\u5b9a noop \u7c7b\u578b.\n  time_series:\n    name: noop\n    properties:\n      - key: name\n        value: core1.noop\n  \n  # search_engine \u6307\u5b9a core \u670d\u52a1\u7684\u9ed8\u8ba4\u641c\u7d22\u5f15\u64ce.\n  search_engine: es://admin:admin@elasticsearch-master:9200\n\n\n\n\n# \u6307\u5b9a dispatcher \u6a21\u5757\u7684\u914d\u7f6e\uff0cdispatcher \u5b58\u5728\u4e24\u79cd\u542f\u52a8\u6a21\u5f0f\uff1a\u72ec\u7acb\u90e8\u7f72|\u548ccore\u96c6\u6210\u90e8\u7f72\ndispatcher:\n  # \u914d\u7f6e dispatcher id.\n  id: dispatcher0\n  # \u5728 core \u670d\u52a1 dispatcher \u6a21\u5757\u662f\u5426\u542f\u7528.\n  enabled: true\n  # \u6307\u5b9a dispatcher \u540d\u79f0\n  name: dispatcher\n  # \u6307\u5b9a dispatcher \u6a21\u5757\u7684\u4e0a\u6e38\u6d88\u8d39 stream \u6570\u636e\u6e90.\n  upstreams:\n  # \u6307\u5b9a dispatcher \u6a21\u5757\u7684\u4e0b\u6e38\u8f93\u51fa stream \u6570\u636e\u6e90\uff0cdownstreams \u662f\u5fc5\u987b\u6307\u5b9a\u7684\uff0c\u5fc5\u987b\u5305\u542b\u6240\u6709 core.server.sources\n  downstreams:\n    - kafka://139.198.125.147:9092/core0/core\n    - kafka://139.198.125.147:9092/core1/core\n    - kafka://139.198.125.147:9092/core2/core\n    - kafka://139.198.125.147:9092/core3/core\n    - kafka://139.198.125.147:9092/core4/core\n    - kafka://139.198.125.147:9092/core5/core\n    - kafka://139.198.125.147:9092/core6/core\n    - kafka://139.198.125.147:9092/core7/core\n")),(0,o.kt)("h3",{id:"\u547d\u4ee4\u884c\u53c2\u6570\u8be6\u89e3"},"\u547d\u4ee4\u884c\u53c2\u6570\u8be6\u89e3"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f4d\u7f6e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"conf"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},"config.yml"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a Core \u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"http_addr"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},":6789"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a Core \u670d\u52a1Http\u7684\u5730\u5740")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"grpc_addr"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},":31233"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a Core \u670d\u52a1Grpc\u7684\u5730\u5740")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proxy_http_port"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},":6789"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a Core \u670d\u52a1 api \u56de\u8c03\u6a21\u5757Http\u7684\u7aef\u53e3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proxy_grpc_port"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},":31233"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a Core \u670d\u52a1 api \u56de\u8c03\u6a21\u5757Grpc\u7684\u7aef\u53e3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"etcd"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},"http://localhost:2379"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a Etcd \u96c6\u7fa4\u5730\u5740\u914d\u7f6e\u9879")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"search_engine"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"CMD"),(0,o.kt)("td",{parentName:"tr",align:null},"es://admin:admin@elasticsearch-master:9200"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u641c\u7d22\u5f15\u64ce\u96c6\u7fa4\u5730\u5740\u914d\u7f6e\u9879")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"try: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/core/tree/main/examples/configs/README.md"},"https://github.com/tkeel-io/core/tree/main/examples/configs/README.md"))))}s.isMDXComponent=!0}}]);