webpackJsonp([1],{"1Psw":function(e,t){const n=[{components:[{type:"input",title:"单行文本",tag:"基础组件"},{type:"number",title:"数字",tag:"基础组件"},{type:"textarea",title:"多行文本",tag:"基础组件"},{type:"select",title:"下拉框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"checkbox-group",title:"复选框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"radio-group",title:"单选框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"switch",title:"开关",tag:"基础组件"},{type:"date",title:"日期",tag:"日期时间组件"},{type:"date-range",title:"日期范围",tag:"日期时间组件"},{type:"time",title:"时间",tag:"日期时间组件"},{type:"time-range",title:"时间范围",tag:"日期时间组件"},{type:"date-time",title:"日期时间",tag:"日期时间组件"},{type:"date-time-range",title:"日期时间范围",tag:"日期时间组件"},{type:"dynamic",title:"动态组件",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}],tag:"高级组件"},{type:"view",title:"视图组件",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}],tag:"高级组件"}],mapping:{input:["basic","placeholder","defaultValue","rules","linkage"]},form:[{type:"select",title:"组件尺寸",key:"size",options:[{key:"medium",value:"大"},{key:"small",value:"中"},{key:"mini",value:"小"}]},{type:"switch",title:"行内布局",key:"inline",defaultValue:!1},{type:"input",title:"标签宽度",key:"labelWidth",defaultValue:"auto"},{type:"select",title:"对齐方式",key:"labelPosition",defaultValue:"right",options:[{key:"left",value:"左对齐"},{key:"right",value:"右对齐"},{key:"top",value:"顶部对齐"}]}],reference:[{type:"input",title:"标题",key:"title",tag:"basic"},{type:"input",title:"字段索引",key:"key",tag:"basic"},{type:"dynamic",title:"规则设置",key:"rules",components:[{type:"select",title:"规则类型",key:"type",options:[{key:"required",value:"必需"},{key:"number",value:"数字校验"}]},{type:"input",title:"错误信息",key:"message"},{type:"number",title:"最大值",key:"max",linkage:{type:"hidden",condition:"type==='number'"}}],tag:"rules"},{type:"dynamic",title:"联动设置",formConfig:{labelPosition:"top"},components:[{type:"select",title:"联动类型",key:"type",options:[{key:"disabled",value:"禁用"},{key:"enabled",value:"可用"},{key:"hidden",value:"隐藏"},{key:"shown",value:"显示"}]},{type:"dynamic",title:"条件设置",key:"condition",formConfig:{inline:!0},components:[{type:"select",key:"field",options:[]},{type:"select",key:"on",options:"=|>|>=|<|<=|!="},{type:"input",key:"value"}]},{type:"textarea",title:"条件设置",key:"condition"}],tag:"linkage"},{type:"input",title:"占位内容",key:"placeholder",tag:"placeholder"},{type:"input",title:"默认值",key:"defaultValue",tag:"defaultValue"}]}];e.exports=n.length<=1?n[0]:n},"45zJ":function(e,t){},"5reD":function(e,t){},"69c2":function(e,t){},"6hT7":function(e,t){},"6u0o":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("viewer",{attrs:{"data-source":e.components,value:e.value,"form-config":e.formConfig},on:{input:function(t){return e.$emit("input",t)}}})},staticRenderFns:[]},i=n("VU/8")({props:["value","components","formConfig"]},r,!1,null,null,null);t.default=i.exports},"6ujQ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",e._b({attrs:{value:e.value||[]},on:{input:function(t){return e.$emit("input",t)}}},"el-checkbox-group",e.$attrs,!1),e._l(e.options,function(t){return n("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v("\n    "+e._s(t.value)+"\n  ")])}),1)},staticRenderFns:[]},i=n("VU/8")({props:["options","value"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=i.exports},"6yi7":function(e,t){},Ah4v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gu7T"),i=n.n(r),a={props:["value","components","formConfig"],data:function(){return{}},methods:{add:function(){this.$emit("input",[].concat(i()(this.value||[]),[void 0]))},remove:function(e){this.$emit("input",this.value.filter(function(t,n){return n!==e}))},handleChange:function(e,t){this.$emit("input",this.value.map(function(n,r){return r===e?t:n}))}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.value,function(t,r){return n("el-row",{key:r,attrs:{gutter:5,type:"flex"}},[n("el-col",{staticStyle:{flex:"auto"}},[n("viewer",{attrs:{"data-source":e.components,"form-config":e.formConfig,value:e.value[r]},on:{input:function(t){return e.handleChange(r,t)}}})],1),e._v(" "),n("el-col",{staticStyle:{width:"36px"}},[n("a",{on:{click:function(t){return e.remove(r)}}},[n("i",{staticClass:"el-icon-delete"})])])],1)}),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.add}},[e._v("添加新项")])],2)},staticRenderFns:[]};var u=n("VU/8")(a,o,!1,function(e){n("lfo9")},"data-v-fbe6ad2a",null);t.default=u.exports},Ez5z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"daterange"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},GE5F:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},JJ6J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-time-picker",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-time-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},JXDL:function(e,t){},Lrpo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-time-picker",e._b({attrs:{"is-range":""},on:{input:function(t){return e.$emit("input",t)}}},"el-time-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},NEKm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"datetime"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),i=n("7nRM"),a=n.n(i),o=n("Dd8w"),u=n.n(o),l=n("W3Iv"),s=n.n(l),c=n("mvHQ"),d=n.n(c),p=n("oFuF"),f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"重命名",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("viewer",{attrs:{"data-source":e.dataSource},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}}),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirm(e.formData)}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var _=n("VU/8")({props:["title","formConfig"],data:function(){return{visible:!1,formData:{},dataSource:[],confirm:function(){}}},methods:{open:function(e,t){var n=this;this.dataSource=e,this.visible=!0,"function"==typeof t&&(this.confirm=function(e){t(e),n.close()})},close:function(){this.visible=!1}}},f,!1,function(e){n("YKfz")},"data-v-2b5bb7cb",null).exports,m={mounted:function(){this.init()},beforeDestroy:function(){window.removeEventListener("mousemove",this.handleMousemove)},methods:{init:function(){window.addEventListener("mousemove",this.handleMousemove)},handleMousemove:function(e){var t=100*e.clientX/window.innerWidth+"%",n=100*e.clientY/window.innerHeight+"%";this.$refs.left.style.left=t,this.$refs.left.style.top=n,this.$refs.left.style.transform="translate(-"+t+", -"+n+")",this.$refs.right.style.left=t,this.$refs.right.style.top=n,this.$refs.right.style.transform="translate(-"+t+", -"+n+")"}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"eyes"},[t("div",{staticClass:"eye"},[t("div",{ref:"left",staticClass:"ball"})]),this._v(" "),t("div",{staticClass:"eye"},[t("div",{ref:"right",staticClass:"ball"})]),this._v(" "),t("div",{staticClass:"mouse"})])},staticRenderFns:[]};var h=n("VU/8")(m,v,!1,function(e){n("ZrGR")},"data-v-1e24d3b0",null).exports,b=n("w/TU"),y=n.n(b),g={props:{title:String,dataSource:Array,current:String,operations:{type:Array,default:function(){return[]}},addable:{type:Boolean,default:function(){return!1}}},components:{draggable:y.a},data:function(){return{}},methods:{prepareClone:function(e){var t=Object(p.f)();return u()({},e,{id:t,$ref:e.id,key:e.type+"_"+t.substr(0,4)})}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("draggable",{staticClass:"menu",attrs:{tag:"ul",draggable:".draggable",list:e.dataSource,group:{name:"component",pull:"clone",put:!1},sort:!1,clone:e.prepareClone}},[e._l(e.dataSource,function(t,r){return n("li",{key:r,staticClass:"menu-item draggable"},[n("a",{class:{active:e.current&&e.current===t.id},on:{click:function(n){e.$emit("click",e.prepareClone(t),t)}}},[e._v(e._s(t.title))]),e._v(" "),e.operations.length?n("el-popover",{attrs:{"visible-arrow":!1,trigger:"click","popper-class":"no-padding"}},[n("ul",{staticClass:"context-menu"},e._l(e.operations,function(r,i){return n("li",{key:i},[n("a",{on:{click:function(e){return r.handler(t)}}},[n("i",{class:"el-icon-"+r.icon}),e._v("  "+e._s(r.title)+"\n            ")])])}),0),e._v(" "),n("i",{staticClass:"more el-icon-more",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1)}),e._v(" "),e.addable?n("li",{staticClass:"menu-item",attrs:{slot:"footer"},slot:"footer"},[n("a",{staticClass:"menu-item-add",on:{click:function(t){return e.$emit("add")}}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 添加")])]):e._e()],2)],1)},staticRenderFns:[]};var x=n("VU/8")(g,k,!1,function(e){n("eK6/")},"data-v-de9b0e28",null).exports,C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-item",class:{active:e.active},on:{click:function(t){return e.$emit("click")}}},[e._t("default"),e._v(" "),n("div",{staticClass:"option"},[n("el-tooltip",{attrs:{content:"复制"}},[n("a",{on:{click:function(t){return e.$emit("copy")}}},[n("i",{staticClass:"el-icon-copy-document"})])]),e._v(" "),n("el-tooltip",{attrs:{content:"删除"}},[n("a",{on:{click:function(t){return e.$emit("remove")}}},[n("i",{staticClass:"el-icon-delete"})])])],1)],2)},staticRenderFns:[]};var $=n("VU/8")({props:["active"],data:function(){return{}},methods:{}},C,!1,function(e){n("JXDL")},"data-v-f7597526",null).exports,E={props:["source","formConfig","current","dataSource","formData"],filters:{prepareRules:p.e,prepareConfig:p.d},components:{draggable:y.a,FormBox:$},data:function(){return{}},methods:{remove:function(e){var t=this.dataSource.findIndex(function(t){return t.id===e});this.current===e&&this.$emit("update:current",""),this.dataSource.splice(t,1)},copy:function(e){var t=this.dataSource.findIndex(function(t){return t.id===e}),n=Object(p.f)();this.dataSource.splice(t+1,0,u()({},this.dataSource[t],{id:n,key:this.dataSource[t].type+"_"+n.substr(0,4)}))},linkageShow:p.c,linkageEnable:p.b}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.dataSource.length?e._e():n("div",{staticClass:"empty"},[e._v("从左侧拖拽或点击来添加字段")]),e._v(" "),n("el-form",e._b({attrs:{model:e.formData}},"el-form",e.formConfig,!1),[n("draggable",{staticClass:"drag-area",attrs:{list:e.dataSource,animation:200,"ghost-class":"ghost",group:"component"}},e._l(e.dataSource,function(t){return n("form-box",{key:t.id,attrs:{active:e.current===t.id},on:{click:function(n){return e.$emit("click",t)},copy:function(n){return e.copy(t.id)},remove:function(n){return e.remove(t.id)}}},[n("el-form-item",{attrs:{prop:t.key,label:t.title,rules:e._f("prepareRules")(t.rules)}},[e.linkageShow(t.linkage,e.formData[t.key])?n("form-item",{attrs:{config:e._f("prepareConfig")(t,e.source),disabled:e.linkageEnable(t.linkage,e.formData[t.key])},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[c.key]"}}):e._e()],1)],1)}),1)],1)],1)},staticRenderFns:[]};var M=n("VU/8")(E,w,!1,function(e){n("45zJ")},"data-v-b58e94a2",null).exports,R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("code",[t("pre",[this._v(this._s(JSON.stringify(this.json,void 0,2)))])])},staticRenderFns:[]};var S=n("VU/8")({props:["json"]},R,!1,function(e){n("6hT7")},"data-v-291f85e2",null).exports,D={props:["dataSource","formConfig","visible"],components:{Code:S},data:function(){return{formData:{}}}},P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"dialog-no-header",attrs:{width:"75%",visible:e.visible,"before-close":function(){return e.$emit("update:visible",!1)}}},[n("el-tabs",[n("el-tab-pane",{attrs:{label:"表单",lazy:""}},[n("viewer",{attrs:{"data-source":e.dataSource,"form-config":e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}}),e._v(" "),n("Code",{attrs:{json:e.formData}})],1),e._v(" "),n("el-tab-pane",{attrs:{label:"JSON",lazy:""}},[n("Code",{attrs:{json:e.dataSource}})],1)],1),e._v(" "),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.$emit("update:visible",!1)}}},[e._v("关闭")])],1)],1)},staticRenderFns:[]};var O={props:["source","dataSource","config"],components:{FormBox:$,Editor:M,ModalPreview:n("VU/8")(D,P,!1,function(e){n("6yi7")},"data-v-b6e53072",null).exports,Code:S},data:function(){return{current:"",mainTab:"editor",currentConfig:"form",formConfig:{},formData:{},previewVisible:!1}},computed:{currentIdx:function(){var e=this;return this.dataSource.findIndex(function(t){return t.id===e.current})},currentProps:function(){var e=this.dataSource[this.currentIdx];if(e){var t=this.config.mapping[e.type]||[];return this.config.reference.filter(function(e){return t.includes(e.tag)})}}},methods:{add:function(e){this.dataSource.push(e)},select:function(e){this.current=e.id,this.currentConfig="attr"}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("splitpanes",{staticClass:"container"},[n("pane",{staticClass:"left"},[n("div",{staticClass:"header"},[n("el-button",{attrs:{type:"text"}},[e._v("导入")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.previewVisible=!0}}},[e._v("预览")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$emit("save",e.dataSource)}}},[e._v("保存")])],1),e._v(" "),n("el-tabs",{attrs:{"tab-position":"bottom",type:"border-card"},model:{value:e.mainTab,callback:function(t){e.mainTab=t},expression:"mainTab"}},[n("el-tab-pane",{attrs:{label:"编辑",name:"editor"}},[n("editor",{attrs:{current:e.current,source:e.source,"data-source":e.dataSource,"form-data":e.formData,"form-config":e.formConfig},on:{"update:current":function(t){e.current=t},click:e.select}})],1),e._v(" "),n("el-tab-pane",{attrs:{label:"预览",name:"viewer"}},["viewer"===e.mainTab?n("viewer",{attrs:{source:e.source,"data-source":e.dataSource,"form-config":e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}}):e._e()],1),e._v(" "),n("el-tab-pane",{attrs:{label:"代码",name:"coder"}},[n("Code",{attrs:{json:e.dataSource}})],1)],1)],1),e._v(" "),n("pane",{staticClass:"right",attrs:{size:"30"}},[n("el-tabs",{attrs:{"tab-position":"bottom",type:"border-card"},model:{value:e.currentConfig,callback:function(t){e.currentConfig=t},expression:"currentConfig"}},[n("el-tab-pane",{attrs:{label:"表单配置",name:"form"}},[n("viewer",{attrs:{"data-source":e.config.form},model:{value:e.formConfig,callback:function(t){e.formConfig=t},expression:"formConfig"}}),e._v(" "),n("code",[n("pre",[e._v(e._s(JSON.stringify(e.formData,void 0,2)))])])],1),e._v(" "),e.current?n("el-tab-pane",{attrs:{label:"属性配置",name:"attr"}},["attr"===e.currentConfig?n("viewer",{attrs:{"data-source":e.currentProps},model:{value:e.dataSource[e.currentIdx],callback:function(t){e.$set(e.dataSource,e.currentIdx,t)},expression:"dataSource[currentIdx]"}}):e._e()],1):e._e()],1),e._v(" "),n("modal-preview",{attrs:{visible:e.previewVisible,"data-source":e.dataSource,"form-config":e.formConfig},on:{"update:visible":function(t){e.previewVisible=t}}})],1)],1)},staticRenderFns:[]};var F={props:["config"],components:{DraggableMenus:x,EditorPanel:n("VU/8")(O,V,!1,function(e){n("RTSr")},"data-v-a98c7b0a",null).exports,Modal:_,Eye:h},mounted:function(){this.init()},data:function(){return{operations:[{title:"重命名",icon:"edit-outline",handler:this.showRenameModal},{title:"删除",icon:"delete",handler:this.remove}],current:"",myMenus:[],actives:[],menus:this.prepareMenus(this.config.components)}},methods:{init:function(){this.myMenus=this.load()},save:function(e){localStorage.setItem("lucy.db",d()(this.myMenus))},load:function(){try{return JSON.parse(localStorage.getItem("lucy.db"))||[]}catch(e){return[]}},prepareMenus:function(e){return s()(e.reduce(function(e,t){return e[t.tag]=e[t.tag]||[],e[t.tag].push(t),e},{}))},addComponent:function(e){var t=this,n=this.actives.findIndex(function(e){return e.id===t.current});n>-1&&this.$refs.editorPanel[n].add(e)},create:function(){this.current=Object(p.f)();var e={id:this.current,type:"view",title:"未命名",components:[],tag:"自定义组件"};this.myMenus.push(e),this.actives.push(e)},edit:function(e){this.actives.find(function(t){return t.id===e.id})||this.actives.push(e),this.current=e.id},showRenameModal:function(e){var t=this;this.$refs.rename.open([{title:"名称",key:"title",defaultValue:e.title}],function(n){t.rename(e,n)})},rename:function(e,t){var n=t.title;this.myMenus.find(function(t){return t.id===e.id}).title=n},remove:function(e){var t=this.myMenus.findIndex(function(t){return t.id===e.id});t>-1&&this.myMenus.splice(t,1);var n=this.actives.findIndex(function(t){return t.id===e.id});n>-1&&this.actives.splice(n,1),this.current===e.id&&this.actives[0]&&(this.current=this.actives[0].id)},close:function(e){var t=this.actives.findIndex(function(t){return t.id===e});this.actives.splice(t,1),e===this.current&&this.actives[0]&&(this.current=this.actives[0].id)}}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("draggable-menus",{attrs:{title:"自定义组件","data-source":e.myMenus,operations:e.operations,current:e.current,addable:""},on:{click:function(t,n){return e.edit(n)},add:e.create}}),e._v(" "),e._l(e.menus,function(t){return n("draggable-menus",{key:t[0],attrs:{title:t[0],"data-source":t[1]},on:{click:e.addComponent}})})],2),e._v(" "),n("div",{staticClass:"right"},[e.actives.length?n("el-tabs",{attrs:{type:"border-card",closable:""},on:{"tab-remove":e.close},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},e._l(e.actives,function(t){return n("el-tab-pane",{key:t.id,attrs:{name:t.id,label:t.title}},[n("editor-panel",{ref:"editorPanel",refInFor:!0,attrs:{source:e.myMenus,"data-source":t.components,config:e.config},on:{save:e.save}})],1)}),1):n("div",{staticClass:"empty"},[n("ul",[n("li",[e._v("添加自定义组件")]),e._v(" "),n("li",[e._v("拖动或点击左侧组件到编辑框内")])]),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",plain:""},on:{click:function(t){return e.create()}}},[e._v("创建")])],1)],1),e._v(" "),n("modal",{ref:"rename",attrs:{title:"重命名"}})],1)},staticRenderFns:[]};var U=n("VU/8")(F,j,!1,function(e){n("5reD")},"data-v-6825eb98",null).exports,I=n("1Psw"),A=n.n(I),T={name:"App",components:{Foundry:U},data:function(){return{config:this.prepareConfig(A.a)}},methods:{prepareConfig:function(e){return u()({},e,{components:this.prepareComponents(e.components),form:this.prepareComponents(e.form),reference:this.prepareComponents(e.reference)})},prepareComponents:function(e){return e?e.map(this.prepareComponent):e},prepareComponent:function(e){if("string"==typeof e){var t=e.split("|"),n=a()(t);return{type:n[0],title:n[1],tag:n[2],props:n.slice(3)}}var r=e.type.split("|");if(r.length>1){var i=a()(r),o=i[0],l=i[1],s=i[2],c=i.slice(3);return u()({title:l,tag:s,props:c},e,{components:this.prepareComponents(e.components),options:this.prepareOptions(e.options),type:o})}return u()({},e,{components:this.prepareComponents(e.components),options:this.prepareOptions(e.options)})},prepareOptions:function(e){return e?("string"==typeof e&&(e=e.split("|")),e.map(function(e){return"string"==typeof e&&(e=e.split(":")),Array.isArray(e)?{key:e[0],value:e[1]||e[0]}:e})):[]}}},L={render:function(){var e=this.$createElement;return(this._self._c||e)("Foundry",{attrs:{config:this.config}})},staticRenderFns:[]};var W={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("viewer",{attrs:{"data-source":e.component,value:e.value},on:{input:function(t){return e.handleChange(t)}}})],1)},staticRenderFns:[]};var K={name:"App",components:{Entry:n("VU/8")(T,L,!1,function(e){n("69c2")},"data-v-7aefcbc6",null).exports,Test:n("VU/8")({data:function(){return{value:{},component:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}]}},methods:{handleChange:function(e){this.value=e}}},W,!1,function(e){n("jfH2")},"data-v-7f181792",null).exports},data:function(){return{isMobile:Object(p.a)()}}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{"is-mobile":this.isMobile},attrs:{id:"app"}},[t("Entry")],1)},staticRenderFns:[]};var B=n("VU/8")(K,z,!1,function(e){n("pIAc")},null,null).exports,J=n("zL8q"),q=n.n(J),H=(n("tvR6"),n("M97j")),N=n.n(H),G=n("EZGA"),Y=(n("Z6VL"),{filters:{prepareRules:p.e,prepareConfig:p.d},props:{source:{type:Array,default:function(){return[]}},formConfig:{type:Object,default:function(){return{labelWidth:"auto"}}},dataSource:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{handleInput:function(e,t){this.value[e]=t,this.$emit("input",u()({},this.value))},linkageShow:p.c,linkageEnable:p.b}}),Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",e._b({attrs:{model:e.value}},"el-form",e.formConfig,!1),[e._l(e.dataSource,function(t){return[n("el-form-item",{key:t.id,attrs:{prop:t.key,label:t.title,rules:e._f("prepareRules")(t.rules)}},[e.linkageShow(t.linkage,e.value)?n("form-item",{attrs:{config:e._f("prepareConfig")(t,e.source),value:e.value[t.key],disabled:e.linkageEnable(t.linkage,e.value)},on:{input:function(n){return e.handleInput(t.key,n)}}}):e._e()],1)]})],2)},staticRenderFns:[]};var Q=n("VU/8")(Y,Z,!1,function(e){n("r/cY")},"data-v-0d2cb8dd",null).exports,X={components:{"wardrobe-select":n("VFF/").default,"wardrobe-checkbox-group":n("6ujQ").default,"wardrobe-radio-group":n("kCUW").default,"wardrobe-input":n("GE5F").default,"wardrobe-number":n("VFT4").default,"wardrobe-textarea":n("odHd").default,"wardrobe-switch":n("sH1c").default,"wardrobe-date":n("qMfH").default,"wardrobe-date-range":n("Ez5z").default,"wardrobe-time":n("JJ6J").default,"wardrobe-time-range":n("Lrpo").default,"wardrobe-date-time":n("NEKm").default,"wardrobe-date-time-range":n("chIR").default,"wardrobe-dynamic":n("Ah4v").default,"wardrobe-view":n("6u0o").default},props:["config","value","disabled"],data:function(){return{}},watch:{"config.defaultValue":function(e){this.$emit("input",e)}},mounted:function(){void 0!==this.config.defaultValue&&this.$emit("input",this.config.defaultValue)},methods:{configFilter:function(e){var t=u()({},e);return["$ref"].forEach(function(e){delete t[e]}),t}}},ee={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("wardrobe-"+(e.config.type||"input"),e._b({tag:"component",attrs:{disabled:e.disabled,value:e.value},on:{input:function(t){return e.$emit("input",t)}}},"component",e.configFilter(e.config),!1))},staticRenderFns:[]},te=n("VU/8")(X,ee,!1,null,null,null).exports,ne=(n("2CdK"),n("LF/+"),n("lljM"),{props:{value:{type:String,default:function(){return""}}},mounted:function(){this.aceEditor=N.a.edit(this.$refs.ace,{maxLines:20,minLines:10,fontSize:14,tabSize:2,value:this.value,theme:"ace/theme/monokai",mode:"ace/mode/json"}),this.session=this.aceEditor.getSession(),this.session.on("change",this.handleChange)},methods:{handleChange:function(){this.$emit("input",this.session.getValue())}}}),re={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"ace"})},staticRenderFns:[]};var ie=n("VU/8")(ne,re,!1,function(e){n("xb3/")},"data-v-3a699768",null).exports;r.default.use(N.a),r.default.component("ace",ie),r.default.component("splitpanes",G.Splitpanes),r.default.component("pane",G.Pane),r.default.component("viewer",Q),r.default.component("form-item",te),r.default.config.productionTip=!1,r.default.use(q.a,{size:"mini"}),new r.default({el:"#app",components:{App:B},template:"<App/>"})},RTSr:function(e,t){},"VFF/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-select",e.$attrs,!1),e._l(e.options,function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})}),1)},staticRenderFns:[]},i=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=i.exports},VFT4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input-number",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-input-number",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},YKfz:function(e,t){},Z6VL:function(e,t){},ZrGR:function(e,t){},chIR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"datetimerange"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},"eK6/":function(e,t){},jfH2:function(e,t){},kCUW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-radio-group",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-radio-group",e.$attrs,!1),e._l(e.options,function(t){return n("el-radio",{key:t.key,attrs:{label:t.key}},[e._v("\n    "+e._s(t.value)+"\n  ")])}),1)},staticRenderFns:[]},i=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=i.exports},lfo9:function(e,t){},oFuF:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.f=uuid,__webpack_exports__.c=linkageShow,__webpack_exports__.b=linkageEnable,__webpack_exports__.e=prepareRules,__webpack_exports__.d=prepareConfig,__webpack_exports__.a=isMobile;var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__=__webpack_require__("woOf"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__=__webpack_require__("+6Bu"),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);function uuid(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return(e=(e=e.replace(/x/g,function(){return(16*Math.random()|0).toString(16)})).replace("y",(16*Math.random()&3|8).toString(16))).replace(/-/g,"").substr(0,24)}function calcCondition(condition,data){if(!condition)return!1;var con=condition.replace(/([^()&|='"]+)=+/g,"data.$1===");try{return eval(con)}catch(e){}return!1}function linkageShow(e,t){return!e||("shown"===e.type?calcCondition(e.condition,t):"hidden"!==e.type||!calcCondition(e.condition,t))}function linkageEnable(e,t){return!!e&&("disabled"===e.type?calcCondition(e.condition,t):"enabled"===e.type&&!calcCondition(e.condition,t))}function prepareRules(e){return e?e.filter(function(e){return e}).map(function(e){var t=e.type,n=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(e,["type"]);return"required"===t?__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({required:!0},n):e}):e}function prepareConfig(e,t){return e.$ref?__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(t.find(function(t){return t.id===e.$ref})||{},e):e}function isMobile(){return"ontouchstart"in window}},odHd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({attrs:{type:"textarea"},on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},pIAc:function(e,t){},qMfH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"date"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},"r/cY":function(e,t){},sH1c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-switch",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-switch",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},tvR6:function(e,t){},"xb3/":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c8df821d3407414f43e8.js.map