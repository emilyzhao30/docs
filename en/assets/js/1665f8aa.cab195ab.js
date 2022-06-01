"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[3878],{3905:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return k}});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),r=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):c(c({},t),e)),l},s=function(e){var t=r(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=r(l),k=a,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return l?n.createElement(m,c(c({ref:t},s),{},{components:l})):n.createElement(m,c({ref:t},s))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,c=new Array(i);c[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var r=2;r<i;r++)c[r]=l[r];return n.createElement.apply(null,c)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2524:function(e,t,l){l.r(t),l.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return r},toc:function(){return u}});var n=l(87462),a=l(63366),i=(l(67294),l(3905)),c=["components"],p={title:"\u6279\u91cf\u5de5\u51771",sidebar_position:1},o=void 0,r={unversionedId:"developer_cookbook/device/batch/batch_1",id:"developer_cookbook/device/batch/batch_1",title:"\u6279\u91cf\u5de5\u51771",description:"1. \u4ec0\u4e48\u662f\u6279\u91cf\u5de5\u5177",source:"@site/docs/developer_cookbook/device/batch/batch_1.md",sourceDirName:"developer_cookbook/device/batch",slug:"/developer_cookbook/device/batch/batch_1",permalink:"/en/developer_cookbook/device/batch/batch_1",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/device/batch/batch_1.md",tags:[],version:"current",lastUpdatedAt:1654072625,formattedLastUpdatedAt:"6/1/2022",sidebarPosition:1,frontMatter:{title:"\u6279\u91cf\u5de5\u51771",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6700\u4f73\u5b9e\u8df51",permalink:"/en/developer_cookbook/device/practice/practice_1"},next:{title:"Don't Repeat Yourself",permalink:"/en/developer_cookbook/tools/do_not_repeat_youself"}},s={},u=[{value:"1. \u4ec0\u4e48\u662f\u6279\u91cf\u5de5\u5177",id:"1-\u4ec0\u4e48\u662f\u6279\u91cf\u5de5\u5177",level:2},{value:"2. \u6279\u91cf\u5de5\u5177\u89e3\u51b3\u7684\u95ee\u9898",id:"2-\u6279\u91cf\u5de5\u5177\u89e3\u51b3\u7684\u95ee\u9898",level:2},{value:"3. \u90a3\u4e9b\u53ef\u4ee5\u6279\u91cf",id:"3-\u90a3\u4e9b\u53ef\u4ee5\u6279\u91cf",level:2},{value:"4. \u64cd\u4f5c\u5165\u53e3",id:"4-\u64cd\u4f5c\u5165\u53e3",level:2},{value:"4.1 \u524d\u7aef\uff08to do \uff09",id:"41-\u524d\u7aefto-do-",level:3},{value:"4.2 \u547d\u4ee4\u884c\u5de5\u5177",id:"42-\u547d\u4ee4\u884c\u5de5\u5177",level:3},{value:"4.2.1 \u547d\u4ee4\u884c\u5de5\u5177\u89c6\u56fe",id:"421-\u547d\u4ee4\u884c\u5de5\u5177\u89c6\u56fe",level:4},{value:"4.2.2 \u547d\u4ee4\u793a\u4f8b",id:"422-\u547d\u4ee4\u793a\u4f8b",level:4},{value:"4.2.2.1 \u8bbe\u5907\u6a21\u677f\u6279\u91cf\u9884\u671f\u7ed3\u679c",id:"4221-\u8bbe\u5907\u6a21\u677f\u6279\u91cf\u9884\u671f\u7ed3\u679c",level:5},{value:"4.2.2.2 \u7a7a\u95f4\u6811\u6279\u91cf\u9884\u671f\u7ed3\u679c",id:"4222-\u7a7a\u95f4\u6811\u6279\u91cf\u9884\u671f\u7ed3\u679c",level:5},{value:"4.2.2.3 \u8bbe\u5907\u5217\u8868\u6279\u91cf\u9884\u671f\u7ed3\u679c",id:"4223-\u8bbe\u5907\u5217\u8868\u6279\u91cf\u9884\u671f\u7ed3\u679c",level:5},{value:"4.2.2.4 \u8bbe\u5907\u6570\u636e\u6620\u5c04\u6279\u91cf\u9884\u671f\u7ed3\u679c",id:"4224-\u8bbe\u5907\u6570\u636e\u6620\u5c04\u6279\u91cf\u9884\u671f\u7ed3\u679c",level:5},{value:"4.2.3 EXCEL \u683c\u5f0f",id:"423-excel-\u683c\u5f0f",level:4},{value:"4.2.3.1 \u8bbe\u5907\u6a21\u677fexcel\u683c\u5f0f",id:"4231-\u8bbe\u5907\u6a21\u677fexcel\u683c\u5f0f",level:5},{value:"4.2.3.2 \u7a7a\u95f4\u6811excel\u683c\u5f0f",id:"4232-\u7a7a\u95f4\u6811excel\u683c\u5f0f",level:5},{value:"4.2.3.3 \u8bbe\u5907excel \u683c\u5f0f",id:"4233-\u8bbe\u5907excel-\u683c\u5f0f",level:5},{value:"4.2.3.4 \u8bbe\u5907\u6570\u636e\u6620\u5c04excel \u683c\u5f0f",id:"4234-\u8bbe\u5907\u6570\u636e\u6620\u5c04excel-\u683c\u5f0f",level:5}],d={toc:u};function k(e){var t=e.components,p=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u4ec0\u4e48\u662f\u6279\u91cf\u5de5\u5177"},"1. \u4ec0\u4e48\u662f\u6279\u91cf\u5de5\u5177"),(0,i.kt)("p",null,"\u200b\t\t\u5bf9\u4e8e\u5f00\u53d1\u8005\u6216\u8005\u9879\u76ee\u5b9e\u65bd\u6765\u8bf4\uff0c\u6839\u636eexcel \u53c2\u6570\u683c\u5f0f\u7f16\u8f91excel\u8868\uff0c\u901a\u8fc7\u5bfc\u5165EXCEL\u6587\u4ef6\u7684\u65b9\u5f0f\u5feb\u901f\u5728\u5e73\u53f0\u6279\u91cf\u5b9a\u4e49\u8bbe\u5907\u6a21\u677f\u3001\u6570\u5b57\u5316\u8bbe\u5907\u3001\u8bbe\u5907\u6570\u636e\u5173\u7cfb\u3002"),(0,i.kt)("h2",{id:"2-\u6279\u91cf\u5de5\u5177\u89e3\u51b3\u7684\u95ee\u9898"},"2. \u6279\u91cf\u5de5\u5177\u89e3\u51b3\u7684\u95ee\u9898"),(0,i.kt)("p",null,"\u200b     1\u3001\u964d\u4f4e\u5e73\u53f0\u4f7f\u7528\u95e8\u69db\uff1b"),(0,i.kt)("p",null,"\u200b     2\u3001\u6781\u5927\u7684\u63d0\u9ad8\u6548\u7387"),(0,i.kt)("h2",{id:"3-\u90a3\u4e9b\u53ef\u4ee5\u6279\u91cf"},"3. \u90a3\u4e9b\u53ef\u4ee5\u6279\u91cf"),(0,i.kt)("p",null,"\u200b     1\u3001\u8bbe\u5907\u6a21\u677f"),(0,i.kt)("p",null,"\u200b     2\u3001\u8bbe\u5907"),(0,i.kt)("p",null,"\u200b     3\u3001\u7a7a\u95f4\u6811\uff08\u8bbe\u5907\u7ec4\uff09"),(0,i.kt)("p",null,"\u200b     3\u3001\u8bbe\u5907\u6570\u636e\u5173\u7cfb\u6620\u5c04"),(0,i.kt)("h2",{id:"4-\u64cd\u4f5c\u5165\u53e3"},"4. \u64cd\u4f5c\u5165\u53e3"),(0,i.kt)("h3",{id:"41-\u524d\u7aefto-do-"},"4.1 \u524d\u7aef\uff08to do \uff09"),(0,i.kt)("h3",{id:"42-\u547d\u4ee4\u884c\u5de5\u5177"},"4.2 \u547d\u4ee4\u884c\u5de5\u5177"),(0,i.kt)("h4",{id:"421-\u547d\u4ee4\u884c\u5de5\u5177\u89c6\u56fe"},"4.2.1 \u547d\u4ee4\u884c\u5de5\u5177\u89c6\u56fe"),(0,i.kt)("p",null,"gihub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/tkeel-io/tkeel-batch-tool.git\ngo build\n./tkeelBatchTool -h\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'tanli@ubuntu:~/Desktop/workspace/project/tkeel-batch-tool$ ./tkeelBatchTool -h\nA longer description that spans multiple lines and likely contains\nexamples and usage of using your application. For example:\n\nCobra is a CLI library for Go that empowers applications.\nThis application is a tool to generate the needed files\nto quickly create a Cobra application.\n\nUsage:\n  tkeelBatchTool [command]\n\nAvailable Commands:\n  dev         Creat device from excel\n  help        Help about any command\n  mapper      Creat mapper from excel\n  spaceTree   Creat spaceTree from excel\n  template    Creat template from excel\n\nFlags:\n  -c, --conf string   The iot api config\n  -f, --file string   The data excel\n  -h, --help          help for tkeelBatchTool\n  -o, --op string     add or del\n\nUse "tkeelBatchTool [command] --help" for more information about a command.\n\n')),(0,i.kt)("h4",{id:"422-\u547d\u4ee4\u793a\u4f8b"},"4.2.2 \u547d\u4ee4\u793a\u4f8b"),(0,i.kt)("p",null,"\u524d\u7f6e\u6761\u4ef6\uff1a\u914d\u7f6e\u6587\u4ef6config.json "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "iotUrl":"http://127.0.0.1:31234",      "token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1NDA3NzE4MSwic3ViIjoidXNyLWY0ZTFiMDY4YWE3YzE4YzFiNjQxYjJhNTA2OTUifQ.ZP4aJvJrFad5nJQEqO4kGqINdTg7ST7yrJTbJEH_q017FF_UP3fS\n  }      \n')),(0,i.kt)("p",null,"\u547d\u4ee4\u6982\u89c8\uff1a\u4ee5\u4e0b\u547d\u4ee4\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6d41\u7a0b  \u6ce8\u610f\u987a\u5e8f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u6279\u91cf\u65b0\u589e\uff1a\n./tkeelBatchTool template -o add -f excel_file/template.xlsx //\u6279\u91cf\u65b0\u589e\u6a21\u677f\n./tkeelBatchTool spaceTree -o add -f excel_file/spaceTree.xlsx  //\u6279\u91cf\u65b0\u589e\u7a7a\u95f4\u8282\u70b9\uff08\u8bbe\u5907\u7ec4\uff09\n./tkeelBatchTool dev -o add -f excel_file/devices.xlsx  //\u6279\u91cf\u65b0\u589e\u8bbe\u5907\n./tkeelBatchTool mapper -o add -f excel_file/mapper.xlsx        //\u6279\u91cf\u65b0\u589e\u8bbe\u5907\u6570\u636e\u6620\u5c04\u5173\u7cfb\n\n\u6279\u91cf\u5220\u9664\uff1a\n./tkeelBatchTool mapper -o del -f excel_file/mapper.xlsx        //\u6279\u91cf\u5220\u9664\u8bbe\u5907\u6570\u636e\u6620\u5c04\u5173\u7cfb \n./tkeelBatchTool dev -o del -f excel_file/devices.xlsx  //\u6279\u91cf\u5220\u9664\u8bbe\u5907\n./tkeelBatchTool template -o del -f excel_file/template.xlsx  //\u6279\u91cf\u5220\u9664\u6a21\u677f\n./tkeelBatchTool spaceTree -o del -f excel_file/spaceTree.xlsx  //\u6279\u91cf\u5220\u9664\u7a7a\u95f4\u8282\u70b9\uff08\u8bbe\u5907\u7ec4\uff09\n\n\u9ed8\u8ba4\u8bfb\u53d6./config.json   \u6307\u5b9a\u8def\u5f84 -c xxx/path\n")),(0,i.kt)("h5",{id:"4221-\u8bbe\u5907\u6a21\u677f\u6279\u91cf\u9884\u671f\u7ed3\u679c"},"4.2.2.1 \u8bbe\u5907\u6a21\u677f\u6279\u91cf\u9884\u671f\u7ed3\u679c"),(0,i.kt)("p",null,"\u6279\u91cf\u65b0\u589e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool template -o add -f excel_file/template.xlsx\n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601161854328",src:l(65252).Z,width:"1840",height:"750"})),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a\u65b0\u589e\u4e86UPS   \u6e29\u5ba4\u5ea6\u4f20\u611f\u5668   SICAM \u7535\u8868  \u4e09\u4e2a\u8bbe\u5907\u6a21\u677f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220531151943844",src:l(37980).Z,width:"1586",height:"777"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220531152015422",src:l(32709).Z,width:"1772",height:"771"})),(0,i.kt)("p",null,"\u6279\u91cf\u5220\u9664\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool template -o del -f excel_file/template.xlsx  //\u6279\u91cf\u5220\u9664\u6a21\u677f\n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601161815592",src:l(26919).Z,width:"1549",height:"792"})),(0,i.kt)("p",null,"\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220531172335160",src:l(39603).Z,width:"1579",height:"723"})),(0,i.kt)("h5",{id:"4222-\u7a7a\u95f4\u6811\u6279\u91cf\u9884\u671f\u7ed3\u679c"},"4.2.2.2 \u7a7a\u95f4\u6811\u6279\u91cf\u9884\u671f\u7ed3\u679c"),(0,i.kt)("p",null,"\u6279\u91cf\u65b0\u589e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool spaceTree -o add -f excel_file/spaceTree.xlsx \n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601161934089",src:l(41920).Z,width:"1686",height:"800"})),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a\u65b0\u589e\u4e86\u7a7a\u95f4\u6811"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601134048694",src:l(59484).Z,width:"1558",height:"547"})),(0,i.kt)("p",null,"\u6279\u91cf\u5220\u9664"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool spaceTree -o del -f excel_file/spaceTree.xlsx \n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601161718526",src:l(64443).Z,width:"1839",height:"394"})),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601134338894",src:l(97701).Z,width:"1583",height:"799"})),(0,i.kt)("h5",{id:"4223-\u8bbe\u5907\u5217\u8868\u6279\u91cf\u9884\u671f\u7ed3\u679c"},"4.2.2.3 \u8bbe\u5907\u5217\u8868\u6279\u91cf\u9884\u671f\u7ed3\u679c"),(0,i.kt)("p",null,"\u6279\u91cf\u65b0\u589e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool dev -o add -f excel_file/device.xlsx \n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601162007602",src:l(54307).Z,width:"1828",height:"790"})),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a\u5728\u7a7a\u95f4\u8282\u70b9 F103 \u4e0b\u9762 \u65b0\u589e\u4e86\u4e00\u6279\u8bbe\u5907"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601143057770",src:l(42419).Z,width:"1601",height:"744"})),(0,i.kt)("p",null,"\u6279\u91cf\u5220\u9664"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool dev -o del -f excel_file/device.xlsx \n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601161619649",src:l(79886).Z,width:"1835",height:"373"})),(0,i.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601143243049",src:l(34296).Z,width:"1583",height:"741"})),(0,i.kt)("h5",{id:"4224-\u8bbe\u5907\u6570\u636e\u6620\u5c04\u6279\u91cf\u9884\u671f\u7ed3\u679c"},"4.2.2.4 \u8bbe\u5907\u6570\u636e\u6620\u5c04\u6279\u91cf\u9884\u671f\u7ed3\u679c"),(0,i.kt)("p",null,"\u6279\u91cf\u65b0\u589e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool mapper -o add -f excel_file/mapper.xlsx \n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160230215",src:l(97019).Z,width:"1843",height:"681"})),(0,i.kt)("p",null,"\u9875\u9762\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,"DB1 \u8bbe\u5907"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160256996",src:l(41166).Z,width:"1767",height:"417"})),(0,i.kt)("p",null,"DB2\u8bbe\u5907"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160344899",src:l(14844).Z,width:"1766",height:"405"})),(0,i.kt)("p",null,"DB3 \u8bbe\u5907"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160425642",src:l(41548).Z,width:"1772",height:"308"})),(0,i.kt)("p",null,"DB4 \u8bbe\u5907"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160449927",src:l(60430).Z,width:"1763",height:"531"})),(0,i.kt)("p",null,"\u6279\u91cf\u5220\u9664"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./tkeelBatchTool mapper -o del -f excel_file/mapper.xlsx \n")),(0,i.kt)("p",null,"\u5de5\u5177\u65e5\u5fd7"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160623880",src:l(9570).Z,width:"1708",height:"627"})),(0,i.kt)("p",null,"\u9875\u9762\u7ed3\u679c\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160705927",src:l(22081).Z,width:"1783",height:"551"})),(0,i.kt)("h4",{id:"423-excel-\u683c\u5f0f"},"4.2.3 EXCEL \u683c\u5f0f"),(0,i.kt)("h5",{id:"4231-\u8bbe\u5907\u6a21\u677fexcel\u683c\u5f0f"},"4.2.3.1 \u8bbe\u5907\u6a21\u677fexcel\u683c\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220531152719962",src:l(37219).Z,width:"1078",height:"572"}),"\n\u53c2\u6570\u8bf4\u660e\uff1a\u7ea2\u8272\u4e3a\u5fc5\u586b"),(0,i.kt)("p",null,"1\u3001\u6a21\u677f\u540d\u79f0\uff1a\u9700\u8981\u521b\u5efa\u7684\u8bbe\u5907\u6a21\u677f\u5bf9\u8c61\u540d\u79f0"),(0,i.kt)("p",null,"2\u3001\u6a21\u677f\u5bf9\u8c61ID  \uff1a\u5982\u679c\u586b\u5199\u5219\u6309\u6b64ID \u521b\u5efa  \uff0c \u5982\u679c\u4e0d\u586b\u3001\u6267\u884c\u547d\u4ee4\u540e ",(0,i.kt)("strong",{parentName:"p"},"\u4f1a\u81ea\u52a8\u6839\u636e\u5e73\u53f0\u751f\u4ea7\u7684ID \u53cd\u5199\u5165excel")," \u6b64\u5217  \uff0c\u4fbf\u4e8e\u5176\u4ed6excel \u8868\u9700\u8981\u586b\u5199\u6b64ID \u65f6  \u76f4\u63a5\u62f7\u8d1d\u5f15\u7528\uff0c \u6267\u884c\u6279\u91cf\u65b0\u589e\u4ee5\u540e\u7684excel \u8868  \u53ef\u4ee5\u6267\u884c\u6279\u91cf\u5220\u9664\u547d\u4ee4\uff08\u6839\u636e\u8bfb\u53d6\u7684\u53cd\u5199\u6a21\u677f\u5bf9\u8c61ID \uff0c\u6267\u884c\u6279\u91cf\u5220\u9664\uff09"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220531164843190",src:l(97437).Z,width:"1251",height:"585"})),(0,i.kt)("p",null,"3\u3001\u6d4b\u70b9\u540d\u79f0\uff1a\u6570\u636e\u6d4b\u70b9\u7684\u663e\u793a\u540d\u79f0\uff1a\u4f8b\u5982\u7535\u538b\u3001\u7535\u6d41\u4e4b\u7c7b\u7684\u660e\u6587"),(0,i.kt)("p",null,"4\u3001\u6d4b\u70b9\u6570\u636e\u5b57\u6bb5\uff08id\uff09\uff1a\u5bf9\u5e94\u5e73\u53f0\u7684 \u5c5e\u6027ID \u3001\u9065\u6d4bID\uff0c\u552f\u4e00\u8868\u793a\u8fd9\u4e2a\u6d4b\u70b9 \uff0c\u4f8b\u5982\uff1a\u4e0a\u62a5\u7684\u8bbe\u5907\u6570\u636e\u62a5\u6587\u91cc\u7684\u5b57\u6bb5\u540d"),(0,i.kt)("p",null,"5\u3001\u6d4b\u70b9\u6570\u636e\u7c7b\u578b\uff1a int  float  double enum  bool  string\u7b49"),(0,i.kt)("p",null,"6\u3001\u6d4b\u70b9\u7c7b\u578b\uff1a\u5bf9\u5e94\u5e73\u53f0\u7684attribute telemetry command    \u4e5f\u5bf9\u5e94\u4f20\u7edf\u7684AI \u3001AO \u3001DI\u3001DO "),(0,i.kt)("p",null,"7\u3001\u6d4b\u70b9\u6570\u636e\u5b9a\u4e49\u548c\u7ea6\u675f\u5173\u952e\u5b57\uff1a \u53ef\u4ee5\u914d\u7f6ejson schema \u7684\u5173\u952e\u5b57  \u4f8b\u5982  :  minimum maximun  patternn  ;\u53ef\u4ee5\u914d\u7f6e\u7269\u8054\u7f51\u7279\u5f81 \u4f8b\u5982\u5355\u4f4d\u3001\u7cbe\u5ea6\u3001\u6b65\u957f \u8fd8\u6709\u5176\u4ed6\u4e00\u4e9b\u6269\u5c55\u914d\u7f6e \u4f8b\u5982\uff1a\u53d8\u6bd4\u3001\u522b\u540d\u7b49;    \u683c\u5f0f\u4e3aJson \u7684\u76ee\u7684\u662f\u4e3a\u4e86\u65b9\u4fbf\u89e3\u6790;"),(0,i.kt)("p",null,"8\u3001\u6d4b\u70b9\u8bf4\u660e\uff1a\u6b64\u6d4b\u70b9\u7684\u63cf\u8ff0"),(0,i.kt)("h5",{id:"4232-\u7a7a\u95f4\u6811excel\u683c\u5f0f"},"4.2.3.2 \u7a7a\u95f4\u6811excel\u683c\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601134405097",src:l(26275).Z,width:"1306",height:"539"})),(0,i.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a\u7ea2\u8272\u4e3a\u5fc5\u586b"),(0,i.kt)("p",null,"1\u3001\u7236\u7a7a\u95f4\u8282\u70b9\u540d\uff1a\u7236\u8bbe\u5907\u7ec4"),(0,i.kt)("p",null,"2\u3001\u7236\u7a7a\u95f4\u8282\u70b9ID\uff1a 1\u3001\u5982\u679c\u586b\u5199\u5219\u6309\u6b64ID\u30012\u3001\u5982\u679c\u4e0d\u586b \u5219\u81ea\u52a8\u751f\u6210\u5e76\u53cd\u5199 3\u3001\u5982\u679c\u524d\u9762\u884c\u5df2\u7ecf\u521b\u5efa\u8fc7\u6b64\u8282\u70b9\u5219\u4f1a\u81ea\u52a8\u5f15\u7528\u521b\u5efa\u8fc7\u7684\u8282\u70b9ID\uff0c"),(0,i.kt)("p",null,"3\u3001\u5f53\u524d\u7a7a\u95f4\u8282\u70b9\u540d\uff1a\u8bbe\u5907\u7ec4\u540d\u79f0 \uff0c\u76ee\u524d\u662f \u7528\u6237\u4e0b\u5168\u5c40\u552f\u4e00  \uff0c\u4e5f\u5c31\u662f\u6b64\u5217\u540d\u79f0\u4e0d\u91cd\u590d"),(0,i.kt)("p",null,"4\u3001\u5f53\u524d\u7a7a\u95f4\u8282\u70b9ID\uff1a1\u3001\u5982\u679c\u586b\u5199\u5219\u6309\u6b64ID\u30012\u3001\u5982\u679c\u4e0d\u586b \u5219\u81ea\u52a8\u751f\u6210\u5e76\u53cd\u5199 \uff0c3\u3001\u521b\u5efa\u540e \u53ef\u76f4\u63a5\u590d\u5236\u7528\u4e8e \u8bbe\u5907\u6279\u91cfexcel \u8868 \u586b\u5199"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601135222501",src:l(78981).Z,width:"1423",height:"328"})),(0,i.kt)("p",null,"5\u3001\u5f53\u524d\u7a7a\u95f4\u8282\u70b9\u6269\u5c55\u4fe1\u606f\uff1a\u627f\u8f7d\u5173\u4e8e\u6b21\u7a7a\u95f4\u8282\u70b9\uff08\u8bbe\u5907\u7ec4\uff09\u7ef4\u5ea6\u7684\u914d\u7f6e\uff0cjson \u683c\u5f0f  \u4fbf\u4e8e\u89e3\u6790"),(0,i.kt)("p",null,"6\u3001\u63cf\u8ff0"),(0,i.kt)("h5",{id:"4233-\u8bbe\u5907excel-\u683c\u5f0f"},"4.2.3.3 \u8bbe\u5907excel \u683c\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601143544126",src:l(58513).Z,width:"1367",height:"299"})),(0,i.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a\u7ea2\u8272\u4e3a\u5fc5\u586b"),(0,i.kt)("p",null,"1\u3001\u7a7a\u95f4\u8282\u70b9\u540d\uff1a\u6765\u6e90\u4e8e\u7a7a\u95f4\u6811excel \u8868  \u6216\u8005\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728\u7684"),(0,i.kt)("p",null,"2\u3001\u7a7a\u95f4\u8282\u70b9ID\uff1a\u6765\u6e90\u4e8e\u7a7a\u95f4\u6811excel \u8868  \u6216\u8005\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728\u7684"),(0,i.kt)("p",null,"3\u3001\u8bbe\u5907\u540d\u79f0\uff1a\u521b\u5efa\u8bbe\u5907\u7684\u540d\u5b57"),(0,i.kt)("p",null,"4\u3001\u8bbe\u5907ID\uff1a1\u3001\u5982\u679c\u586b\u5199\u5219\u6309\u6b64ID \uff0c 2\u3001\u5982\u679c\u4e0d\u586b\u81ea\u52a8\u751f\u6210\u5e76\u53cd\u5199 3\u3001\u521b\u5efa\u540e\u53ef\u76f4\u63a5\u62f7\u8d1d\u7528\u4e8e\u5176\u4ed6excel\u8868\uff08mapper\uff09"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601145407300",src:l(84020).Z,width:"1774",height:"307"})),(0,i.kt)("p",null,"5\u3001\u8bbe\u5907\u662f\u5426\u76f4\u8fde\uff1a \u76f4\u63a5\u5bf9\u5e94\u7269\u7406\u4e16\u754c\u8bbe\u5907\u8fde\u63a5\u5e76\u63a5\u53d7\u6570\u636e\u7684\u4e3a\u76f4\u8fde   TRUE or FALSE"),(0,i.kt)("p",null,"6\u3001\u8bbe\u5907\u6a21\u677f\u81ea\u5b66\u5f00\u5173\uff1a\u4e0d\u5b58\u5728\u4e8e\u6a21\u677f\u5185\u7684\u6570\u636e  \u53ef\u4ee5\u5c55\u793a\u5e76\u53ef\u4ee5\u7f16\u8f91\u4fdd\u5b58\u4e3a\u6a21\u677f\u7b49\u5176\u4ed6\u64cd\u4f5c TRUE or FALSE"),(0,i.kt)("p",null,"7\u3001\u8bbe\u5907\u6a21\u677f\u540d\u79f0\uff1a\u6765\u6e90\u4e8e\u8bbe\u5907\u6a21\u677fexcel \u8868 \u6216\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728\u7684"),(0,i.kt)("p",null,"8\u3001\u8bbe\u5907\u6a21\u677fID\uff1a\u6765\u6e90\u4e8e\u8bbe\u5907\u6a21\u677fexcel \u8868  \u6216 \u5e73\u53f0\u5df2\u7ecf\u5b58\u5728\u7684"),(0,i.kt)("p",null,"9\u3001\u8bbe\u5907\u6269\u5c55\u4fe1\u606fjson\uff1a\u627f\u8f7d\u5355\u4e2a\u8bbe\u5907\u7ef4\u5ea6\u7684\u914d\u7f6e\uff0cjson \u683c\u5f0f \uff0c\u4fbf\u4e8e\u89e3\u6790"),(0,i.kt)("p",null,"10\u3001\u8bbe\u5907\u63cf\u8ff0"),(0,i.kt)("h5",{id:"4234-\u8bbe\u5907\u6570\u636e\u6620\u5c04excel-\u683c\u5f0f"},"4.2.3.4 \u8bbe\u5907\u6570\u636e\u6620\u5c04excel \u683c\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220601160728594",src:l(48186).Z,width:"1906",height:"424"})),(0,i.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a\u7ea2\u8272\u4e3a\u5fc5\u586b"),(0,i.kt)("p",null,"1\u3001\u8bbe\u5907\u540d\uff1a\u9700\u8981\u6620\u5c04\u7684\u8bbe\u5907\u540d \uff0c\u53ef\u6765\u6e90\u4e8e\u8bbe\u5907\u5217\u8868excel  \u4e5f\u53ef\u4ee5\u662f\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728"),(0,i.kt)("p",null,"2\u3001\u8bbe\u5907ID\uff1a \u9700\u8981\u6620\u5c04\u7684\u8bbe\u5907ID \uff0c\u53ef\u6765\u6e90\u4e8e\u8bbe\u5907\u5217\u8868excel  \u4e5f\u53ef\u4ee5\u662f\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728"),(0,i.kt)("p",null,"3\u3001\u6570\u636e\u7c7b\u522b\uff1a\u53ea\u67092\u79cd  \u5c5e\u6027\u6620\u5c04\uff1aattributes  \u548c  \u9065\u6d4b\u6620\u5c04\uff1atelemetry "),(0,i.kt)("p",null,"4\u3001\u6570\u636e\u5b57\u6bb5\u540d\uff1a\u9065\u6d4bID  \u6216 \u4e0a\u62a5\u7684\u6570\u636e\u5b57\u6bb5\u540d"),(0,i.kt)("p",null,"5\u3001\u89c4\u5219\u8868\u8fbe\u5f0f\uff1a\u76ee\u524d\u53ea\u6709$eq  \u8868\u793a \u7b49\u4e8e"),(0,i.kt)("p",null,"6\u3001\u6765\u6e90\u8bbe\u5907\u540d\uff1a\u6620\u5c04\u6570\u636e\u6765\u6e90\u7684\u8bbe\u5907\u540d \uff0c\u53ef\u6765\u6e90\u4e8e\u8bbe\u5907\u5217\u8868excel  \u4e5f\u53ef\u4ee5\u662f\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728"),(0,i.kt)("p",null,"7\u3001\u6765\u6e90\u8bbe\u5907ID\uff1a \u6620\u5c04\u6570\u636e\u6765\u6e90\u7684\u8bbe\u5907ID \uff0c\u53ef\u6765\u6e90\u4e8e\u8bbe\u5907\u5217\u8868excel  \u4e5f\u53ef\u4ee5\u662f\u5e73\u53f0\u5df2\u7ecf\u5b58\u5728"),(0,i.kt)("p",null,"8\u3001\u6570\u636e\u7c7b\u522b\uff1a\u53ea\u67092\u79cd  \u5c5e\u6027\u6620\u5c04\uff1aattributes  \u548c  \u9065\u6d4b\u6620\u5c04\uff1atelemetry "),(0,i.kt)("p",null,"9\u3001\u6570\u636e\u5b57\u6bb5\u540d\uff1a\u9065\u6d4bID  \u6216 \u4e0a\u62a5\u7684\u6570\u636e\u5b57\u6bb5\u540d"),(0,i.kt)("p",null,"\u8bf4\u660e\uff1a1\u3001",(0,i.kt)("strong",{parentName:"p"},"DB1  DB2  DB3  \u8868\u8fbe\u7684\u662f \u62c6\u5206\u8bbe\u5907   \u4f8b\u5982\u7f51\u5173\u62c6\u5206\u4e3a\u5404\u79cd\u5b50\u8bbe\u5907")),(0,i.kt)("p",null,"\u200b            2\u3001",(0,i.kt)("strong",{parentName:"p"},"DB4  \u8868\u8fbe\u7684\u662f\u5408\u5e76\u8bbe\u5907  \uff0c\u4f8b\u5982\u7ec4\u5408\u8bbe\u5907")))}k.isMDXComponent=!0},37980:function(e,t,l){t.Z=l.p+"assets/images/image-20220531151943844-a3e646de642f7638b20435147ac68f48.png"},32709:function(e,t,l){t.Z=l.p+"assets/images/image-20220531152015422-74d98fe7b53b322fc6d758e1685a6ad4.png"},37219:function(e,t,l){t.Z=l.p+"assets/images/image-20220531152719962-463c9a977aac92ced501607672c999be.png"},97437:function(e,t,l){t.Z=l.p+"assets/images/image-20220531164843190-deb1425693ff338bbe059be526002f94.png"},39603:function(e,t,l){t.Z=l.p+"assets/images/image-20220531172335160-0d1f442f7bde0d7c967c3249063b1aae.png"},59484:function(e,t,l){t.Z=l.p+"assets/images/image-20220601134048694-7435de604cb9f1f7988a67c7a5dcc610.png"},97701:function(e,t,l){t.Z=l.p+"assets/images/image-20220601134338894-1009da4abbeccee6b5b449a26cfdd13a.png"},26275:function(e,t,l){t.Z=l.p+"assets/images/image-20220601134405097-9fe766a3ebc7e6965400c0ed5631808f.png"},78981:function(e,t,l){t.Z=l.p+"assets/images/image-20220601135222501-4eef8733f7adf3d771846fa9748708f1.png"},42419:function(e,t,l){t.Z=l.p+"assets/images/image-20220601143057770-9fff66e7dd033b6109461e1f5d089d9b.png"},34296:function(e,t,l){t.Z=l.p+"assets/images/image-20220601143243049-995a3db040188f359e0f794a9058bfd7.png"},58513:function(e,t,l){t.Z=l.p+"assets/images/image-20220601143544126-47a4265a6c1aa627444fdba2ab8d3fe5.png"},84020:function(e,t,l){t.Z=l.p+"assets/images/image-20220601145407300-490189620cc66a5364352e858ed76824.png"},97019:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160230215-398d9c15b96aa2445c88094c1ba0c191.png"},41166:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160256996-47e048a96dcbd74b31d288673cec258f.png"},14844:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160344899-7debf6d801020737469ce865a3e8eb6a.png"},41548:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160425642-f4aced04ae316c561eac70a8d0a9bf96.png"},60430:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160449927-37f89bcf774159235fda70c1b30de5b7.png"},9570:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160623880-cd71f049dc6f61a711853c63f8e7d127.png"},22081:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160705927-e6811b492b6aa2f178b32fd0c5f77564.png"},48186:function(e,t,l){t.Z=l.p+"assets/images/image-20220601160728594-ee3086bae6d9f9c3c03827db43658ce9.png"},79886:function(e,t,l){t.Z=l.p+"assets/images/image-20220601161619649-d22832a1050da5b2da1d709bd8d9538f.png"},64443:function(e,t,l){t.Z=l.p+"assets/images/image-20220601161718526-ab62b5a77e9554dcf033d9bf2034d2c6.png"},26919:function(e,t,l){t.Z=l.p+"assets/images/image-20220601161815592-d27f30a88c8c5882b1bca87b4f2651a5.png"},65252:function(e,t,l){t.Z=l.p+"assets/images/image-20220601161854328-f776dbada4f2669fbda3f0e264dbc193.png"},41920:function(e,t,l){t.Z=l.p+"assets/images/image-20220601161934089-0450647f72b8c81a0a9c01f34503cd40.png"},54307:function(e,t,l){t.Z=l.p+"assets/images/image-20220601162007602-2f0e464347b488d9c5eb6e23a2f75fcc.png"}}]);