webpackJsonp([1],{"6u0o":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("viewer",{attrs:{"data-source":t.components,value:t.value},on:{input:function(e){return t.$emit("input",e)}}})},staticRenderFns:[]},a=n("VU/8")({props:["value","components"]},r,!1,null,null,null);e.default=a.exports},"6ujQ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-checkbox-group",t._b({attrs:{value:t.value||[]},on:{input:function(e){return t.$emit("input",e)}}},"el-checkbox-group",t.$attrs,!1),t._l(t.options,function(e){return n("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v("\n    "+t._s(e.value)+"\n  ")])}),1)},staticRenderFns:[]},a=n("VU/8")({props:["options","value"],data:function(){return{}},methods:{}},r,!1,null,null,null);e.default=a.exports},"9k9M":function(t,e){},ATnL:function(t,e){},Ah4v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Gu7T"),a=n.n(r),i={props:["value","components"],data:function(){return{}},methods:{add:function(){this.$emit("input",[].concat(a()(this.value||[]),[void 0]))},remove:function(t){this.$emit("input",this.value.filter(function(e,n){return n!==t}))},handleChange:function(t,e){this.$emit("input",this.value.map(function(n,r){return r===t?e:n}))}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.value,function(e,r){return n("el-row",{key:r,attrs:{gutter:5,type:"flex"}},[n("el-col",{staticStyle:{flex:"auto"}},[n("viewer",{attrs:{"data-source":t.components,value:t.value[r]},on:{input:function(e){return t.handleChange(r,e)}}})],1),t._v(" "),n("el-col",{staticStyle:{width:"36px"}},[n("a",{on:{click:function(e){return t.remove(r)}}},[n("i",{staticClass:"el-icon-delete"})])])],1)}),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:t.add}},[t._v("添加新项")])],2)},staticRenderFns:[]};var o=n("VU/8")(i,u,!1,function(t){n("UIFj")},"data-v-6903b1c1",null);e.default=o.exports},DEN3:function(t,e){t.exports={components:[{type:"input",title:"单行文本",tag:"基础组件"},{type:"number",title:"数字",tag:"基础组件"},{type:"textarea",title:"多行文本",tag:"基础组件"},{type:"select",title:"下拉框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"checkbox-group",title:"复选框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"radio-group",title:"单选框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}],tag:"基础组件"},{type:"switch",title:"开关",tag:"基础组件"},{type:"date",title:"日期",tag:"日期时间组件"},{type:"date-range",title:"日期范围",tag:"日期时间组件"},{type:"time",title:"时间",tag:"日期时间组件"},{type:"time-range",title:"时间范围",tag:"日期时间组件"},{type:"date-time",title:"日期时间",tag:"日期时间组件"},{type:"date-time-range",title:"日期时间范围",tag:"日期时间组件"},{type:"dynamic",title:"动态组件",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}],tag:"高级组件"},{type:"view",title:"视图组件",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}],tag:"高级组件"}],form:[{type:"input",title:"标签宽度",key:"labelWidth",defaultValue:"auto"},{type:"select",title:"对齐方式",key:"labelPosition",defaultValue:"right",options:[{key:"left",value:"左对齐"},{key:"right",value:"右对齐"},{key:"top",value:"顶部对齐"}]}],props:{input:["basic","placeholder","defaultValue"],number:["basic","placeholder","defaultValueNumber"],textarea:["basic","placeholder","defaultValue"],select:["basic","placeholder","defaultValue","options"],"checkbox-group":["basic","defaultValueArray"],"radio-group":["basic","defaultValue"],switch:["basic"],date:["basic"],"date-range":["basic"],time:["basic"],"time-range":["basic"],"date-time":["basic"],"date-time-range":["basic"],dynamic:["basic"]},defines:[{type:"input",title:"标题",key:"title",tag:"basic"},{type:"input",title:"字段索引",key:"key",tag:"basic"},{type:"input",title:"占位内容",key:"placeholder",tag:"placeholder"},{type:"input",title:"默认值",key:"defaultValue",tag:"defaultValue"},{type:"checkbox-group",title:"默认值",key:"defaultValue",tag:"defaultValueArray"},{type:"number",title:"默认值",key:"defaultValue",tag:"defaultValueNumber"},{type:"dynamic",title:"选项",key:"options",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}],tag:"options"}]}},DO9g:function(t,e){},Ez5z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-date-picker",t._b({attrs:{type:"daterange"},on:{input:function(e){return t.$emit("input",e)}}},"el-date-picker",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},GCpd:function(t,e){},GE5F:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-input",t._b({on:{input:function(e){return t.$emit("input",e)}}},"el-input",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},JJ6J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-time-picker",t._b({on:{input:function(e){return t.$emit("input",e)}}},"el-time-picker",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},JXDL:function(t,e){},Lrpo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-time-picker",t._b({attrs:{"is-range":""},on:{input:function(e){return t.$emit("input",e)}}},"el-time-picker",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},NEKm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-date-picker",t._b({attrs:{type:"datetime"},on:{input:function(e){return t.$emit("input",e)}}},"el-date-picker",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("W3Iv"),i=n.n(a),u=n("w/TU"),o=n.n(u),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-item",class:{active:t.active},on:{click:function(e){return t.$emit("click")}}},[t._t("default"),t._v(" "),n("div",{staticClass:"option"},[n("el-tooltip",{attrs:{content:"复制"}},[n("a",{on:{click:function(e){return t.$emit("copy")}}},[n("i",{staticClass:"el-icon-copy-document"})])]),t._v(" "),n("el-tooltip",{attrs:{content:"删除"}},[n("a",{on:{click:function(e){return t.$emit("remove")}}},[n("i",{staticClass:"el-icon-delete"})])])],1)],2)},staticRenderFns:[]};var c=n("VU/8")({props:["active"],data:function(){return{}},methods:{}},l,!1,function(t){n("JXDL")},"data-v-f7597526",null).exports,s=n("Dd8w"),d=n.n(s),p=n("oFuF"),f={props:["formConfig","current","dataSource","dataForm"],components:{draggable:o.a,FormBox:c},filters:{calcCondition:p.a},data:function(){return{}},methods:{remove:function(t){var e=this.dataSource.findIndex(function(e){return e.id===t});this.current===t&&this.$emit("click"),this.dataSource.splice(e,1)},copy:function(t){var e=this.dataSource.findIndex(function(e){return e.id===t}),n=Object(p.b)();this.dataSource.splice(e,0,d()({},this.dataSource[e],{id:n,key:this.dataSource[e].type+"_"+n.substr(0,4)}))}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.dataSource.length?t._e():n("div",{staticClass:"empty"},[t._v("从左侧拖拽或点击来添加字段")]),t._v(" "),n("el-form",t._b({},"el-form",t.formConfig,!1),[n("draggable",{staticClass:"drag-area",attrs:{list:t.dataSource,animation:200,"ghost-class":"ghost",group:"component"}},t._l(t.dataSource,function(e){return n("form-box",{key:e.id,attrs:{active:t.current===e.id},on:{click:function(n){return t.$emit("click",e)},copy:function(n){return t.copy(e.id)},remove:function(n){return t.remove(e.id)}}},[n("form-item",{attrs:{config:e,disabled:t._f("calcCondition")(e.disabled,t.dataForm)},model:{value:t.dataForm[e.key],callback:function(n){t.$set(t.dataForm,e.key,n)},expression:"dataForm[c.key]"}})],1)}),1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(f,m,!1,function(t){n("DO9g")},"data-v-90cc3d62",null).exports,_={props:["title","dataSource"],components:{draggable:o.a},data:function(){return{}},methods:{prepareClone:function(t){var e=Object(p.b)();return d()({id:e,key:t.type+"_"+e.substr(0,4)},t)},add:function(t){this.$emit("click",this.prepareClone(t))}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("draggable",{staticClass:"menu",attrs:{tag:"ul",list:t.dataSource,group:{name:"component",pull:"clone",put:!1},sort:!1,clone:t.prepareClone}},t._l(t.dataSource,function(e){return n("li",{key:e.type,staticClass:"menu-item"},[n("a",{on:{click:function(n){return t.add(e)}}},[t._v(t._s(e.title))])])}),0)],1)},staticRenderFns:[]};var h=n("VU/8")(_,y,!1,function(t){n("WsBO")},"data-v-7cd3a1bc",null).exports,b={props:["config"],components:{draggable:o.a,FormBox:c,Editor:v,DraggableMenus:h},data:function(){return{menus:this.prepareMenus(this.config.components),props:this.config.props,defines:this.config.defines,formDefines:this.config.form,current:"",currentConfig:"form",dataSource:[],customComponents:[],formConfig:{},dataForm:{}}},computed:{currentIdx:function(){var t=this;return this.dataSource.findIndex(function(e){return e.id===t.current})},currentProps:function(){var t=this.dataSource[this.currentIdx];if(t){var e=this.props[t.type]||[];return this.defines.filter(function(t){return e.includes(t.tag)})}}},methods:{init:function(){this.customComponents=[]},prepareMenus:function(t){return i()(t.reduce(function(t,e){return t[e.tag]=t[e.tag]||[],t[e.tag].push(e),t},{}))},add:function(t){this.dataSource.push(t)}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[t._l(t.menus,function(e){return n("draggable-menus",{key:e[0],attrs:{title:e[0],"data-source":e[1]},on:{click:t.add}})}),t._v(" "),n("draggable-menus",{attrs:{title:"自定义组件","data-source":t.customComponents},on:{click:t.add}})],2),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[n("el-button",{attrs:{type:"text"}},[t._v("导入")]),t._v(" "),n("el-button",{attrs:{type:"text"}},[t._v("生成JSON")]),t._v(" "),n("el-button",{attrs:{type:"text"}},[t._v("保存为组件")])],1),t._v(" "),n("div",{staticClass:"body"},[n("editor",{attrs:{current:t.current,"data-source":t.dataSource,"data-form":t.dataForm,"form-config":t.formConfig},on:{click:function(e){return t.current=e?e.id:""}}})],1)]),t._v(" "),n("div",{staticClass:"right"},[n("el-tabs",{attrs:{type:"border-card"},model:{value:t.currentConfig,callback:function(e){t.currentConfig=e},expression:"currentConfig"}},[n("el-tab-pane",{attrs:{label:"表单配置",name:"form"}},[n("viewer",{attrs:{"data-source":t.formDefines},model:{value:t.formConfig,callback:function(e){t.formConfig=e},expression:"formConfig"}}),t._v(" "),n("code",[n("pre",[t._v(t._s(JSON.stringify(t.formConfig,void 0,2)))])]),t._v(" "),n("code",[n("pre",[t._v(t._s(JSON.stringify(t.dataForm,void 0,2)))])]),t._v(" "),n("code",[n("pre",[t._v(t._s(JSON.stringify(t.dataSource,void 0,2)))])])],1),t._v(" "),t.current?n("el-tab-pane",{attrs:{label:"属性配置",name:"attr"}},["attr"===t.currentConfig?n("viewer",{attrs:{"data-source":t.currentProps},model:{value:t.dataSource[t.currentIdx],callback:function(e){t.$set(t.dataSource,t.currentIdx,e)},expression:"dataSource[currentIdx]"}}):t._e()],1):t._e()],1)],1)])},staticRenderFns:[]};var k=n("VU/8")(b,g,!1,function(t){n("uFsD")},"data-v-0e22f550",null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("viewer",{attrs:{"data-source":t.component,value:t.value},on:{input:function(e){return t.handleChange(e)}}})],1)},staticRenderFns:[]};var $=n("VU/8")({data:function(){return{value:{},component:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}]}},methods:{handleChange:function(t){this.value=t}}},x,!1,function(t){n("ATnL")},"data-v-4bd92f86",null).exports,F=n("DEN3"),C=n.n(F),V={name:"App",components:{FormFoundry:k,Test:$},data:function(){return{config:C.a}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("FormFoundry",{attrs:{config:this.config}})],1)},staticRenderFns:[]};var E=n("VU/8")(V,w,!1,function(t){n("GCpd")},null,null).exports,S=n("zL8q"),O=n.n(S),U=(n("tvR6"),n("woOf")),R=n.n(U),M={filters:{calcCondition:p.a},props:{dataSource:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{handleInput:function(t,e){var n=this;this.formData=R()({},this.value,this.formData),this.formData[t]=e,this.$nextTick(function(){n.$emit("input",n.formData)})}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{attrs:{"label-width":"auto"}},t._l(t.dataSource,function(e){return n("div",{key:e.id},[n("form-item",{attrs:{config:e,value:t.value[e.key],disabled:t._f("calcCondition")(e.disabled,t.value)},on:{input:function(n){return t.handleInput(e.key,n)}}})],1)}),0)},staticRenderFns:[]};var P=n("VU/8")(M,j,!1,function(t){n("9k9M")},"data-v-47cfbb87",null).exports,D={components:{"wardrobe-select":n("VFF/").default,"wardrobe-checkbox-group":n("6ujQ").default,"wardrobe-radio-group":n("kCUW").default,"wardrobe-input":n("GE5F").default,"wardrobe-number":n("VFT4").default,"wardrobe-textarea":n("odHd").default,"wardrobe-switch":n("sH1c").default,"wardrobe-date":n("qMfH").default,"wardrobe-date-range":n("Ez5z").default,"wardrobe-time":n("JJ6J").default,"wardrobe-time-range":n("Lrpo").default,"wardrobe-date-time":n("NEKm").default,"wardrobe-date-time-range":n("chIR").default,"wardrobe-dynamic":n("Ah4v").default,"wardrobe-view":n("6u0o").default},props:["config","value","disabled"],data:function(){return{}},watch:{"config.defaultValue":function(t){this.$emit("input",t)}},mounted:function(){void 0!==this.config.defaultValue&&this.$emit("input",this.config.defaultValue)},methods:{}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form-item",{attrs:{label:t.config.title,prop:t.config.key}},[n("wardrobe-"+(t.config.type||"input"),{tag:"component",attrs:{options:t.config.options,disabled:t.disabled,placeholder:t.config.placeholder,components:t.config.components,value:t.value},on:{input:function(e){return t.$emit("input",e)}}})],1)},staticRenderFns:[]},J=n("VU/8")(D,I,!1,null,null,null).exports;r.default.component("viewer",P),r.default.component("form-item",J),r.default.config.productionTip=!1,r.default.use(O.a,{size:"mini"}),new r.default({el:"#app",components:{App:E},template:"<App/>"})},UIFj:function(t,e){},"VFF/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",t._b({on:{input:function(e){return t.$emit("input",e)}}},"el-select",t.$attrs,!1),t._l(t.options,function(t){return n("el-option",{key:t.key,attrs:{value:t.key,label:t.value}})}),1)},staticRenderFns:[]},a=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);e.default=a.exports},VFT4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-input-number",t._b({on:{input:function(e){return t.$emit("input",e)}}},"el-input-number",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},WsBO:function(t,e){},chIR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-date-picker",t._b({attrs:{type:"datetimerange"},on:{input:function(e){return t.$emit("input",e)}}},"el-date-picker",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},kCUW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-radio-group",t._b({on:{input:function(e){return t.$emit("input",e)}}},"el-radio-group",t.$attrs,!1),t._l(t.options,function(e){return n("el-radio",{key:e.key,attrs:{label:e.key}},[t._v("\n    "+t._s(e.value)+"\n  ")])}),1)},staticRenderFns:[]},a=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);e.default=a.exports},oFuF:function(module,__webpack_exports__,__webpack_require__){"use strict";function uuid(){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return(t=(t=t.replace(/x/g,function(){return(16*Math.random()|0).toString(16)})).replace("y",(16*Math.random()&3|8).toString(16))).replace(/-/g,"").substr(0,24)}function calcCondition(condition,data){if(!condition)return!1;var con=condition.replace(/([^()&|='"]+)=+/g,"data.$1===");try{return eval(con)}catch(t){}return!1}__webpack_exports__.b=uuid,__webpack_exports__.a=calcCondition},odHd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-input",t._b({attrs:{type:"textarea"},on:{input:function(e){return t.$emit("input",e)}}},"el-input",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},qMfH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-date-picker",t._b({attrs:{type:"date"},on:{input:function(e){return t.$emit("input",e)}}},"el-date-picker",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},sH1c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-switch",t._b({on:{input:function(e){return t.$emit("input",e)}}},"el-switch",t.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);e.default=a.exports},tvR6:function(t,e){},uFsD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d810e3e2401704fae314.js.map