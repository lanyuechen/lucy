webpackJsonp([1],{"4C96":function(e,t){},"5reD":function(e,t){},"6AfK":function(e,t){},"6hT7":function(e,t){},"6u0o":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("viewer",{attrs:{"data-source":e.components,value:e.value,"form-config":e.formConfig,theme:e.theme},on:{input:function(t){return e.$emit("input",t)}}})},staticRenderFns:[]},i=n("VU/8")({props:["value","components","formConfig","theme"]},r,!1,null,null,null);t.default=i.exports},"6ujQ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",e._b({attrs:{value:e.value||[]},on:{input:function(t){return e.$emit("input",t)}}},"el-checkbox-group",e.$attrs,!1),e._l(e.options,function(t){return n("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v("\n    "+e._s(t.value)+"\n  ")])}),1)},staticRenderFns:[]},i=n("VU/8")({props:["options","value"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=i.exports},"6yi7":function(e,t){},Ah4v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gu7T"),i=n.n(r),a={props:["value","components","formConfig","useView","theme"],data:function(){return{}},methods:{add:function(){this.$emit("input",[].concat(i()(this.value||[]),[void 0]))},remove:function(e){this.$emit("input",this.value.filter(function(t,n){return n!==e}))},handleChange:function(e,t){this.$emit("input",this.value.map(function(n,r){return r===e?t:n}))}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.value,function(t,r){return n("el-row",{key:r,attrs:{gutter:5,type:"flex"}},[n("el-col",{staticStyle:{flex:"auto"}},[e.useView?n("viewer",{attrs:{"data-source":[{type:"view",key:"_key",title:"项目"+(r+1),components:e.components}],"form-config":e.formConfig,value:{_key:e.value[r]},theme:e.theme},on:{input:function(t){var n=t._key;return e.handleChange(r,n)}}}):n("viewer",{attrs:{"data-source":e.components,"form-config":e.formConfig,value:e.value[r],theme:e.theme},on:{input:function(t){return e.handleChange(r,t)}}})],1),e._v(" "),n("el-col",{staticStyle:{width:"36px"}},[n("a",{on:{click:function(t){return e.remove(r)}}},[n("i",{staticClass:"el-icon-delete"})])])],1)}),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.add}},[e._v("添加新项")])],2)},staticRenderFns:[]};var l=n("VU/8")(a,o,!1,function(e){n("IXd0")},"data-v-79cf25ff",null);t.default=l.exports},BOA6:function(e,t){const n=[[{type:"input",title:"单行文本",tag:"基础组件"},{type:"number",title:"数字",tag:"基础组件"},{type:"textarea",title:"多行文本",tag:"基础组件"},{type:"select",title:"下拉框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"radio-group",title:"单选框组",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"checkbox-group",title:"复选框组",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"checkbox",title:"复选框",tag:"基础组件"},{type:"switch",title:"开关",tag:"基础组件"},{type:"upload",title:"上传",tag:"基础组件"},{type:"date",title:"日期",tag:"日期时间组件"},{type:"date-range",title:"日期范围",tag:"日期时间组件"},{type:"time",title:"时间",tag:"日期时间组件"},{type:"time-range",title:"时间范围",tag:"日期时间组件"},{type:"date-time",title:"日期时间",tag:"日期时间组件"},{type:"date-time-range",title:"日期时间范围",tag:"日期时间组件"}]];e.exports=n.length<=1?n[0]:n},DWs2:function(e,t){const n=[[{type:"select",title:"组件尺寸",key:"size",options:[{key:"medium",value:"大"},{key:"small",value:"中"},{key:"mini",value:"小"}]},{type:"switch",title:"行内布局",key:"inline",defaultValue:!1},{type:"input",title:"标签宽度",key:"labelWidth",defaultValue:"auto"},{type:"select",title:"对齐方式",key:"labelPosition",defaultValue:"right",options:[{key:"left",value:"左对齐"},{key:"right",value:"右对齐"},{key:"top",value:"顶部对齐"}]}]];e.exports=n.length<=1?n[0]:n},Ez5z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"daterange"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},GE5F:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},IXd0:function(e,t){},IZ3U:function(e,t){},J80b:function(e,t){},JJ6J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-time-picker",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-time-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},JXDL:function(e,t){},Lrpo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-time-picker",e._b({attrs:{"is-range":""},on:{input:function(t){return e.$emit("input",t)}}},"el-time-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},NEKm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"datetime"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("lRwf"),i=n.n(r),a=(n("IZ3U"),{render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]});var o=n("VU/8")({name:"App"},a,!1,function(e){n("lUBo")},null,null).exports,l=n("l6IN"),u=n.n(l),s=n("/ocq"),c=n("EZGA"),d=(n("Z6VL"),n("Dd8w")),f=n.n(d),p=n("fZjL"),_=n.n(p),m=n("pFYg"),v=n.n(m),h={components:{"wardrobe-select":n("VFF/").default,"wardrobe-radio-group":n("kCUW").default,"wardrobe-checkbox-group":n("6ujQ").default,"wardrobe-checkbox":n("rT4g").default,"wardrobe-input":n("GE5F").default,"wardrobe-number":n("VFT4").default,"wardrobe-textarea":n("odHd").default,"wardrobe-switch":n("sH1c").default,"wardrobe-upload":n("XV+k").default,"wardrobe-date":n("qMfH").default,"wardrobe-date-range":n("Ez5z").default,"wardrobe-time":n("JJ6J").default,"wardrobe-time-range":n("Lrpo").default,"wardrobe-date-time":n("NEKm").default,"wardrobe-date-time-range":n("chIR").default,"wardrobe-dynamic":n("Ah4v").default,"wardrobe-view":n("6u0o").default},props:["config","value","disabled","theme"],filters:{filter:function(e){return e?e.filter(function(e){return e}):[]}},data:function(){return{}},watch:{"config.defaultValue":function(e){this.$emit("input",e)}},mounted:function(){void 0!==this.config.defaultValue&&this.$emit("input",this.config.defaultValue)},methods:{configFilter:function(e){var t=f()({},e);return["$ref"].forEach(function(e){delete t[e]}),t}}},b={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("wardrobe-"+(e.config.type||"input"),e._b({tag:"component",attrs:{options:e._f("filter")(e.config.options),disabled:e.disabled,value:e.value,theme:e.theme},on:{input:function(t){return e.$emit("input",t)}}},"component",e.configFilter(e.config),!1))},staticRenderFns:[]},y=n("VU/8")(h,b,!1,null,null,null).exports,g=n("oFuF"),k={components:{Wardrobe:y},filters:{prepareRules:g.d,prepareConfig:g.c},props:{source:{type:Array,default:function(){return[]}},formConfig:{type:Object,default:function(){return{labelWidth:"auto"}}},dataSource:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}},theme:{type:String}},data:function(){return{collapsed:[]}},methods:{toggle:function(e){var t=this.collapsed.indexOf(e);t>-1?this.collapsed.splice(t,1):this.collapsed.push(e)},handleInput:function(e,t){var n=this;e?this.value[e]=t:"object"===(void 0===t?"undefined":v()(t))&&_()(t).forEach(function(e){n.value[e]=t[e]}),this.$emit("input",f()({},this.value))},linkageShow:g.b,linkageEnable:g.a}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",e._b({class:e.theme?"theme-"+e.theme:"",attrs:{model:e.value}},"el-form",e.formConfig,!1),[e._l(e.dataSource,function(t,r){return[e.linkageShow(t.linkage,e.value)?n("el-form-item",{key:t.id,class:{"form-item-dynamic":"dynamic"===t.type,"form-item-view":"view"===t.type,"form-item-collapsed":e.collapsed.includes(r)},attrs:{prop:t.key,label:t.title,rules:e._f("prepareRules")(t.rules)}},[e.theme&&["dynamic","view"].includes(t.type)?n("template",{slot:"label"},[n("div",{staticClass:"collapsed-btn",on:{click:function(t){return e.toggle(r)}}},[e._v("\n          "+e._s(e.collapsed.includes(r)?"+":"-")+"\n        ")]),e._v("\n        "+e._s(t.title)+"\n      ")]):e._e(),e._v(" "),n("wardrobe",{attrs:{config:e._f("prepareConfig")(t,e.source),value:t.key?e.value[t.key]:e.value,disabled:e.linkageEnable(t.linkage,e.value),theme:e.theme},on:{input:function(n){return e.handleInput(t.key,n)}}})],2):e._e()]})],2)},staticRenderFns:[]};var w=n("VU/8")(k,x,!1,function(e){n("pp6a")},"data-v-73ebb1a6",null).exports,C=n("W3Iv"),$=n.n(C),E=n("mvHQ"),M=n.n(E),R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"重命名",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("viewer",{attrs:{"data-source":e.dataSource},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}}),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirm(e.formData)}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var V=n("VU/8")({props:["title","formConfig"],data:function(){return{visible:!1,formData:{},dataSource:[],confirm:function(){}}},methods:{open:function(e,t){var n=this;this.dataSource=e,this.visible=!0,"function"==typeof t&&(this.confirm=function(e){t(e),n.close()})},close:function(){this.visible=!1}}},R,!1,function(e){n("YKfz")},"data-v-2b5bb7cb",null).exports,D={mounted:function(){this.init()},beforeDestroy:function(){window.removeEventListener("mousemove",this.handleMousemove)},methods:{init:function(){window.addEventListener("mousemove",this.handleMousemove)},handleMousemove:function(e){var t=100*e.clientX/window.innerWidth+"%",n=100*e.clientY/window.innerHeight+"%";this.$refs.left.style.left=t,this.$refs.left.style.top=n,this.$refs.left.style.transform="translate(-"+t+", -"+n+")",this.$refs.right.style.left=t,this.$refs.right.style.top=n,this.$refs.right.style.transform="translate(-"+t+", -"+n+")"}}},O={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"eyes"},[t("div",{staticClass:"eye"},[t("div",{ref:"left",staticClass:"ball"})]),this._v(" "),t("div",{staticClass:"eye"},[t("div",{ref:"right",staticClass:"ball"})]),this._v(" "),t("div",{staticClass:"mouse"})])},staticRenderFns:[]};var P=n("VU/8")(D,O,!1,function(e){n("ZrGR")},"data-v-1e24d3b0",null).exports,F=n("w/TU"),S=n.n(F),U={props:{title:String,dataSource:Array,current:String,operations:{type:Array,default:function(){return[]}},addable:{type:Boolean,default:function(){return!1}}},components:{draggable:S.a},data:function(){return{}},methods:{prepareClone:function(e){var t=Object(g.e)();return f()({},e,{id:t,$ref:e.id,key:e.type+"_"+t.substr(0,4)})}}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("draggable",{staticClass:"menu",attrs:{tag:"ul",draggable:".draggable",list:e.dataSource,group:{name:"component",pull:"clone",put:!1},sort:!1,clone:e.prepareClone}},[e._l(e.dataSource,function(t,r){return n("li",{key:r,staticClass:"menu-item draggable"},[n("a",{class:{active:e.current&&e.current===t.id},on:{click:function(n){e.$emit("click",e.prepareClone(t),t)}}},[e._v(e._s(t.title))]),e._v(" "),e.operations.length?n("el-popover",{attrs:{"visible-arrow":!1,trigger:"click","popper-class":"no-padding"}},[n("ul",{staticClass:"context-menu"},e._l(e.operations,function(r,i){return n("li",{key:i},[n("a",{on:{click:function(e){return r.handler(t)}}},[n("i",{class:"el-icon-"+r.icon}),e._v("  "+e._s(r.title)+"\n            ")])])}),0),e._v(" "),n("i",{staticClass:"more el-icon-more",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1)}),e._v(" "),e.addable?n("li",{staticClass:"menu-item",attrs:{slot:"footer"},slot:"footer"},[n("a",{staticClass:"menu-item-add",on:{click:function(t){return e.$emit("add")}}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 添加")])]):e._e()],2)],1)},staticRenderFns:[]};var I=n("VU/8")(U,j,!1,function(e){n("eK6/")},"data-v-de9b0e28",null).exports,A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-item",class:{active:e.active},on:{click:function(t){return e.$emit("click")}}},[e._t("default"),e._v(" "),n("div",{staticClass:"option"},[n("el-tooltip",{attrs:{content:"复制"}},[n("a",{on:{click:function(t){return e.$emit("copy")}}},[n("i",{staticClass:"el-icon-copy-document"})])]),e._v(" "),n("el-tooltip",{attrs:{content:"删除"}},[n("a",{on:{click:function(t){return e.$emit("remove")}}},[n("i",{staticClass:"el-icon-delete"})])])],1)],2)},staticRenderFns:[]};var T=n("VU/8")({props:["active"],data:function(){return{}},methods:{}},A,!1,function(e){n("JXDL")},"data-v-f7597526",null).exports,W={props:["source","formConfig","current","dataSource","formData"],filters:{prepareRules:g.d,prepareConfig:g.c},components:{draggable:S.a,FormBox:T,Wardrobe:y},data:function(){return{}},methods:{remove:function(e){var t=this.dataSource.findIndex(function(t){return t.id===e});this.current===e&&this.$emit("update:current",""),this.dataSource.splice(t,1)},copy:function(e){var t=this.dataSource.findIndex(function(t){return t.id===e}),n=Object(g.e)();this.dataSource.splice(t+1,0,f()({},this.dataSource[t],{id:n,key:this.dataSource[t].type+"_"+n.substr(0,4)}))},linkageShow:g.b,linkageEnable:g.a}},K={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.dataSource.length?e._e():n("div",{staticClass:"empty"},[e._v("从左侧拖拽或点击来添加字段")]),e._v(" "),n("el-form",e._b({attrs:{model:e.formData}},"el-form",e.formConfig,!1),[n("draggable",{staticClass:"drag-area",attrs:{list:e.dataSource,animation:200,"ghost-class":"ghost",group:"component"}},e._l(e.dataSource,function(t){return n("form-box",{key:t.id,attrs:{active:e.current===t.id},on:{click:function(n){return e.$emit("click",t)},copy:function(n){return e.copy(t.id)},remove:function(n){return e.remove(t.id)}}},[n("el-form-item",{attrs:{prop:t.key,label:t.title,rules:e._f("prepareRules")(t.rules)}},[e.linkageShow(t.linkage,e.formData[t.key])?n("wardrobe",{attrs:{config:e._f("prepareConfig")(t,e.source),disabled:e.linkageEnable(t.linkage,e.formData[t.key])},model:{value:e.formData[t.key],callback:function(n){e.$set(e.formData,t.key,n)},expression:"formData[c.key]"}}):e._e()],1)],1)}),1)],1)],1)},staticRenderFns:[]};var L=n("VU/8")(W,K,!1,function(e){n("aARY")},"data-v-721e4b76",null).exports,B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("code",[t("pre",[this._v(this._s(JSON.stringify(this.json,void 0,2)))])])},staticRenderFns:[]};var J=n("VU/8")({props:["json"]},B,!1,function(e){n("6hT7")},"data-v-291f85e2",null).exports,q={props:["dataSource","formConfig","visible"],components:{Code:J},data:function(){return{formData:{}}}},z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"dialog-no-header",attrs:{width:"75%",visible:e.visible,"before-close":function(){return e.$emit("update:visible",!1)}}},[n("el-tabs",[n("el-tab-pane",{attrs:{label:"表单",lazy:""}},[n("viewer",{attrs:{"data-source":e.dataSource,"form-config":e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}}),e._v(" "),n("Code",{attrs:{json:e.formData}})],1),e._v(" "),n("el-tab-pane",{attrs:{label:"JSON",lazy:""}},[n("Code",{attrs:{json:e.dataSource}})],1)],1),e._v(" "),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.$emit("update:visible",!1)}}},[e._v("关闭")])],1)],1)},staticRenderFns:[]};var N={props:["source","dataSource","config"],components:{FormBox:T,Editor:L,ModalPreview:n("VU/8")(q,z,!1,function(e){n("6yi7")},"data-v-b6e53072",null).exports,Code:J},data:function(){return{current:"",mainTab:"editor",currentConfig:"form",formConfig:{},formData:{},previewVisible:!1}},computed:{currentIdx:function(){var e=this;return this.dataSource.findIndex(function(t){return t.id===e.current})},currentProps:function(){var e=this,t=this.dataSource[this.currentIdx];if(t)return(this.config.mapping[t.type]||[]).map(function(t){return"string"==typeof t?e.config.reference[t]:t}).filter(function(e){return e})}},methods:{add:function(e){this.dataSource.push(e)},select:function(e){this.current=e.id,this.currentConfig="attr"}}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("splitpanes",{staticClass:"container"},[n("pane",{staticClass:"left"},[n("div",{staticClass:"header"},[n("el-button",{attrs:{type:"text"}},[e._v("导入")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.previewVisible=!0}}},[e._v("预览")]),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$emit("save",e.dataSource)}}},[e._v("保存")])],1),e._v(" "),n("el-tabs",{attrs:{"tab-position":"bottom",type:"border-card"},model:{value:e.mainTab,callback:function(t){e.mainTab=t},expression:"mainTab"}},[n("el-tab-pane",{attrs:{label:"编辑",name:"editor"}},[n("editor",{attrs:{current:e.current,source:e.source,"data-source":e.dataSource,"form-data":e.formData,"form-config":e.formConfig},on:{"update:current":function(t){e.current=t},click:e.select}})],1),e._v(" "),n("el-tab-pane",{attrs:{label:"预览",name:"viewer"}},["viewer"===e.mainTab?n("viewer",{attrs:{source:e.source,"data-source":e.dataSource,"form-config":e.formConfig},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}}):e._e()],1),e._v(" "),n("el-tab-pane",{attrs:{label:"代码",name:"coder"}},[n("Code",{attrs:{json:e.dataSource}})],1)],1)],1),e._v(" "),n("pane",{staticClass:"right",attrs:{size:"30"}},[n("el-tabs",{attrs:{"tab-position":"bottom",type:"border-card"},model:{value:e.currentConfig,callback:function(t){e.currentConfig=t},expression:"currentConfig"}},[n("el-tab-pane",{attrs:{label:"表单配置",name:"form"}},[n("viewer",{attrs:{"data-source":e.config.form,theme:"mini"},model:{value:e.formConfig,callback:function(t){e.formConfig=t},expression:"formConfig"}}),e._v(" "),n("code",[n("pre",[e._v(e._s(JSON.stringify(e.formData,void 0,2)))])])],1),e._v(" "),e.current?n("el-tab-pane",{attrs:{label:"属性配置",name:"attr"}},["attr"===e.currentConfig?n("viewer",{attrs:{"data-source":e.currentProps,theme:"mini"},model:{value:e.dataSource[e.currentIdx],callback:function(t){e.$set(e.dataSource,e.currentIdx,t)},expression:"dataSource[currentIdx]"}}):e._e()],1):e._e()],1),e._v(" "),n("modal-preview",{attrs:{visible:e.previewVisible,"data-source":e.dataSource,"form-config":e.formConfig},on:{"update:visible":function(t){e.previewVisible=t}}})],1)],1)},staticRenderFns:[]};var Y={props:["config"],components:{DraggableMenus:I,EditorPanel:n("VU/8")(N,H,!1,function(e){n("6AfK")},"data-v-94f126b8",null).exports,Modal:V,Eye:P},mounted:function(){this.init()},data:function(){return{operations:[{title:"重命名",icon:"edit-outline",handler:this.showRenameModal},{title:"删除",icon:"delete",handler:this.remove}],current:"",myMenus:[],actives:[],menus:this.prepareMenus(this.config.components)}},methods:{init:function(){this.myMenus=this.load()},save:function(e){localStorage.setItem("lucy.db",M()(this.myMenus))},load:function(){try{return JSON.parse(localStorage.getItem("lucy.db"))||[]}catch(e){return[]}},prepareMenus:function(e){return $()(e.reduce(function(e,t){return e[t.tag]=e[t.tag]||[],e[t.tag].push(t),e},{}))},addComponent:function(e){var t=this,n=this.actives.findIndex(function(e){return e.id===t.current});n>-1&&this.$refs.editorPanel[n].add(e)},create:function(){this.current=Object(g.e)();var e={id:this.current,type:"view",title:"未命名",components:[],tag:"自定义组件"};this.myMenus.push(e),this.actives.push(e)},edit:function(e){this.actives.find(function(t){return t.id===e.id})||this.actives.push(e),this.current=e.id},showRenameModal:function(e){var t=this;this.$refs.rename.open([{title:"名称",key:"title",defaultValue:e.title}],function(n){t.rename(e,n)})},rename:function(e,t){var n=t.title;this.myMenus.find(function(t){return t.id===e.id}).title=n},remove:function(e){var t=this.myMenus.findIndex(function(t){return t.id===e.id});t>-1&&this.myMenus.splice(t,1);var n=this.actives.findIndex(function(t){return t.id===e.id});n>-1&&this.actives.splice(n,1),this.current===e.id&&this.actives[0]&&(this.current=this.actives[0].id)},close:function(e){var t=this.actives.findIndex(function(t){return t.id===e});this.actives.splice(t,1),e===this.current&&this.actives[0]&&(this.current=this.actives[0].id)}}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("draggable-menus",{attrs:{title:"自定义组件","data-source":e.myMenus,operations:e.operations,current:e.current,addable:""},on:{click:function(t,n){return e.edit(n)},add:e.create}}),e._v(" "),e._l(e.menus,function(t){return n("draggable-menus",{key:t[0],attrs:{title:t[0],"data-source":t[1]},on:{click:e.addComponent}})})],2),e._v(" "),n("div",{staticClass:"right"},[e.actives.length?n("el-tabs",{attrs:{type:"border-card",closable:""},on:{"tab-remove":e.close},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},e._l(e.actives,function(t){return n("el-tab-pane",{key:t.id,attrs:{name:t.id,label:t.title}},[n("editor-panel",{ref:"editorPanel",refInFor:!0,attrs:{source:e.myMenus,"data-source":t.components,config:e.config},on:{save:e.save}})],1)}),1):n("div",{staticClass:"empty"},[n("ul",[n("li",[e._v("添加自定义组件")]),e._v(" "),n("li",[e._v("拖动或点击左侧组件到编辑框内")])]),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",plain:""},on:{click:function(t){return e.create()}}},[e._v("创建")])],1)],1),e._v(" "),n("modal",{ref:"rename",attrs:{title:"重命名"}})],1)},staticRenderFns:[]};var G=n("VU/8")(Y,Z,!1,function(e){n("5reD")},"data-v-6825eb98",null).exports,X=n("7nRM"),Q=n.n(X);function ee(e){return e?e.map(te):e}function te(e){if("string"==typeof e){var t=e.split("|"),n=Q()(t);return{type:n[0],title:n[1],tag:n[2],props:n.slice(3)}}var r=e.type.split("|");if(r.length>1){var i=Q()(r),a=i[0],o=i[1],l=i[2],u=i.slice(3);return f()({title:o,tag:l,props:u},e,{components:ee(e.components),options:ne(e.options),type:a})}return f()({},e,{components:ee(e.components),options:ne(e.options)})}function ne(e){return e?("string"==typeof e&&(e=e.split("|")),e.map(function(e){return"string"==typeof e&&(e=e.split(":")),Array.isArray(e)?{key:e[0],value:e[1]||e[0]}:e})):[]}var re=n("BOA6"),ie=n.n(re),ae=n("DWs2"),oe=n.n(ae),le=n("cAwK"),ue=n.n(le),se=n("bvFY"),ce=n.n(se),de={name:"App",components:{Foundry:G},data:function(){return{config:(e={components:ie.a,form:oe.a,mapping:ue.a,reference:ce.a},f()({},e,{components:ee(e.components),form:ee(e.form),reference:$()(e.reference).reduce(function(e,t){return e[t[0]]=te(t[1]),e},{})}))};var e},methods:{}},fe={render:function(){var e=this.$createElement;return(this._self._c||e)("Foundry",{attrs:{config:this.config}})},staticRenderFns:[]};var pe=n("VU/8")(de,fe,!1,function(e){n("J80b")},"data-v-408b9940",null).exports,_e=n("gRE1"),me=n.n(_e),ve={components:{Code:J},data:function(){return{value:{},components:ee(me()(ce.a))}},methods:{handleChange:function(e){this.value=e}}},he={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("viewer",{attrs:{"data-source":e.components,value:e.value,theme:"mini"},on:{input:function(t){return e.handleChange(t)}}}),e._v(" "),n("Code",{attrs:{json:e.value}})],1)},staticRenderFns:[]};var be=[{path:"/",component:pe},{path:"/test",component:n("VU/8")(ve,he,!1,function(e){n("4C96")},"data-v-8edfd946",null).exports}];i.a.use(s.a),i.a.component("splitpanes",c.Splitpanes),i.a.component("pane",c.Pane),i.a.component("viewer",w),i.a.config.productionTip=!1,i.a.use(u.a,{size:"mini"}),new i.a({el:"#app",components:{App:o},router:new s.a({routes:be}),template:"<App/>"})},"VFF/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-select",e.$attrs,!1),e._l(e.options,function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})}),1)},staticRenderFns:[]},i=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=i.exports},VFT4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input-number",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-input-number",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},"XV+k":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gu7T"),i=n.n(r),a={props:{value:{type:Array,default:function(){return[]}}},methods:{beforeUpload:function(e){return this.$emit("input",[].concat(i()(this.value),[e])),!1},beforeRemove:function(e,t){return this.$emit("input",t.filter(function(t){return t!==e})),!1}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-upload",{attrs:{drag:"",multiple:"",action:"","before-upload":e.beforeUpload,"before-remove":e.beforeRemove,"file-list":e.value}},[n("i",{staticClass:"el-icon-upload"}),e._v(" "),n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])])},staticRenderFns:[]},l=n("VU/8")(a,o,!1,null,null,null);t.default=l.exports},YKfz:function(e,t){},Z6VL:function(e,t){},ZrGR:function(e,t){},aARY:function(e,t){},bvFY:function(e,t){const n=[{title:{type:"input",title:"标题",key:"title"},key:{type:"input",title:"字段索引",key:"key"},placeholder:{type:"input",title:"占位内容",key:"placeholder"},defaultValue:{type:"input",title:"默认值",key:"defaultValue"},options:{type:"view",title:"选项配置",components:[{type:"radio-group",title:"选项类型",key:"optionType",options:"local:本地数据|remote:远程数据",defaultValue:"local"},{type:"dynamic",title:"选项",key:"options",useView:!0,components:[{type:"input",key:"key",title:"选项值"},{type:"input",key:"value",title:"显示名"}],linkage:{type:"shown",condition:"optionType==='local'"}},{type:"input",title:"接口地址",key:"url",linkage:{type:"shown",condition:"optionType==='remote'"}}]},rules:{type:"dynamic",title:"规则设置",key:"rules",useView:!0,components:[{type:"select",title:"规则类型",key:"type",options:[{key:"required",value:"必需"},{key:"number",value:"数字校验"}]},{type:"input",title:"错误信息",key:"message"},{type:"number",title:"最大值",key:"max",linkage:{type:"shown",condition:"type==='number'"}}]},linkage:{type:"view",title:"联动设置",key:"linkage",components:[{type:"select",title:"联动类型",key:"type",options:[{key:"disabled",value:"禁用"},{key:"enabled",value:"可用"},{key:"hidden",value:"隐藏"},{key:"shown",value:"显示"}]},{type:"dynamic",title:"条件设置",key:"condition",useView:!0,components:[{type:"select",title:"字段",key:"field",options:[]},{type:"select",title:"条件",key:"on",options:"=|>|>=|<|<=|!="},{type:"input",title:"值",key:"value"}]}]}}];e.exports=n.length<=1?n[0]:n},cAwK:function(e,t){const n=[{input:["title","key","placeholder","defaultValue","rules","linkage"],select:["title","key","placeholder","options","rules","linkage"],number:["title","key","rules","linkage"],"radio-group":["title","key","options","rules","linkage"],"checkbox-group":["title","key","options","rules","linkage"],checkbox:["title","key","rules","linkage"],switch:["title","key","rules","linkage"],textarea:["title","key","placeholder","defaultValue","rules","linkage"],upload:["title","key","rules","linkage"],date:["title","key","rules","linkage"],"date-range":["title","key","rules","linkage"],time:["title","key","rules","linkage"],"time-range":["title","key","rules","linkage"],"date-time":["title","key","rules","linkage"],"date-time-range":["title","key","rules","linkage"],dynamic:["title","key","rules","linkage"],view:["title","key","rules","linkage"]}];e.exports=n.length<=1?n[0]:n},chIR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"datetimerange"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},"eK6/":function(e,t){},kCUW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-radio-group",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-radio-group",e.$attrs,!1),e._l(e.options,function(t){return n("el-radio",{key:t.key,attrs:{label:t.key}},[e._v("\n    "+e._s(t.value)+"\n  ")])}),1)},staticRenderFns:[]},i=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=i.exports},l6IN:function(e,t){e.exports=ELEMENT},lRwf:function(e,t){e.exports=Vue},lUBo:function(e,t){},oFuF:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.e=uuid,__webpack_exports__.b=linkageShow,__webpack_exports__.a=linkageEnable,__webpack_exports__.d=prepareRules,__webpack_exports__.c=prepareConfig;var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__=__webpack_require__("woOf"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__=__webpack_require__("Dd8w"),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__=__webpack_require__("+6Bu"),__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);function uuid(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return(e=(e=e.replace(/x/g,function(){return(16*Math.random()|0).toString(16)})).replace("y",(16*Math.random()&3|8).toString(16))).replace(/-/g,"").substr(0,24)}function calcCondition(condition,data){if(!condition)return!1;var con=condition.replace(/([^()&|='"]+)=+/g,"data.$1===");try{return eval(con)}catch(e){}return!1}function linkageShow(e,t){return!e||("shown"===e.type?calcCondition(e.condition,t):"hidden"!==e.type||!calcCondition(e.condition,t))}function linkageEnable(e,t){return!!e&&("disabled"===e.type?calcCondition(e.condition,t):"enabled"===e.type&&!calcCondition(e.condition,t))}function prepareRules(e){return e?e.filter(function(e){return e}).map(function(e){var t=e.type,n=__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(e,["type"]);return"required"===t?__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({required:!0},n):e}):e}function prepareConfig(e,t){return e.$ref?__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(t.find(function(t){return t.id===e.$ref})||{},e):e}},odHd:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({attrs:{type:"textarea"},on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},pp6a:function(e,t){},qMfH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",e._b({attrs:{type:"date"},on:{input:function(t){return e.$emit("input",t)}}},"el-date-picker",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},rT4g:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-checkbox",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-checkbox",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports},sH1c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-switch",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-switch",e.$attrs,!1))},staticRenderFns:[]},i=n("VU/8")(null,r,!1,null,null,null);t.default=i.exports}},["NHnr"]);
//# sourceMappingURL=app.js.map