webpackJsonp([1],{"AV9+":function(e,t){},"E/4W":function(e,t){},FDPK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({attrs:{type:"textarea"},on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);t.default=a.exports},GMe7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("w/TU"),a=n.n(r),o=n("r1dg"),i={components:{draggable:a.a,FormBox:o.a},props:{components:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{overflow:"hidden"}},[n("draggable",{staticClass:"drag-area",attrs:{list:e.components,animation:200,"ghost-class":"ghost",group:"component",tag:"el-row"}},e._l(e.components,function(t){return n("el-col",{key:t.id,attrs:{span:12}},[n("form-box",[n("form-item",{attrs:{config:t},model:{value:e.value[t.key],callback:function(n){e.$set(e.value,t.key,n)},expression:"value[c.key]"}})],1)],1)}),1)],1)},staticRenderFns:[]};var l=n("VU/8")(i,u,!1,function(e){n("ag2q")},"data-v-874ab86a",null);t.default=l.exports},K8Bh:function(module,__webpack_exports__,__webpack_require__){"use strict";function uuid(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return(e=(e=e.replace(/x/g,function(){return(16*Math.random()|0).toString(16)})).replace("y",(16*Math.random()&3|8).toString(16))).replace(/-/g,"").substr(0,24)}function calcCondition(condition,data){if(!condition)return!1;var con=condition.replace(/([^()&|='"]+)=+/g,"data.$1===");try{return eval(con)}catch(e){}return!1}__webpack_exports__.b=uuid,__webpack_exports__.a=calcCondition},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),i=n("w/TU"),u=n.n(i),l=n("K8Bh"),c=n("hE8X"),s=n.n(c),d=n("r1dg"),f={components:{draggable:u.a,FormBox:d.a},filters:{calcCondition:l.a},data:function(){return{current:"",currentConfig:"form",menus:s.a.components,props:s.a.props,defines:s.a.defines,formDefines:s.a.form,dataSource:[],formConfig:{},dataForm:{}}},computed:{currentIdx:function(){var e=this;return this.dataSource.findIndex(function(t){return t.id===e.current})},currentProps:function(){var e=this.dataSource[this.currentIdx];if(e){var t=this.props[e.type]||[];return this.defines.filter(function(e){return t.includes(e.tag)})}}},methods:{prepareClone:function(e){var t=Object(l.b)();return o()({id:t,key:e.type+"_"+t.substr(0,4)},e)},remove:function(e){var t=this.dataSource.findIndex(function(t){return t.id===e});this.current===e&&(this.current=""),this.dataSource.splice(t,1)},copy:function(e){var t=this.dataSource.findIndex(function(t){return t.id===e}),n=Object(l.b)();this.dataSource.splice(t,0,o()({},this.dataSource[t],{id:n,key:this.dataSource[t].type+"_"+n.substr(0,4)}))}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"left"},[n("h2",[e._v("基础字段")]),e._v(" "),n("draggable",{staticClass:"menu",attrs:{tag:"ul",list:e.menus,group:{name:"component",pull:"clone",put:!1},sort:!1,clone:e.prepareClone}},e._l(e.menus,function(t){return n("li",{key:t.type,staticClass:"menu-item"},[n("a",[e._v(e._s(t.title))])])}),0)],1),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[e._v("\n      head\n    ")]),e._v(" "),n("div",{staticClass:"body"},[n("el-form",e._b({attrs:{"label-width":e.formConfig.labelWidth||"auto"}},"el-form",e.formConfig,!1),[n("draggable",{staticClass:"drag-area",attrs:{list:e.dataSource,animation:200,"ghost-class":"ghost",group:"component"}},e._l(e.dataSource,function(t){return n("form-box",{key:t.id,attrs:{active:e.current===t.id},on:{click:function(n){e.current=t.id},copy:function(n){return e.copy(t.id)},remove:function(n){return e.remove(t.id)}}},[n("form-item",{attrs:{config:t,disabled:e._f("calcCondition")(t.disabled,e.dataForm)},model:{value:e.dataForm[t.key],callback:function(n){e.$set(e.dataForm,t.key,n)},expression:"dataForm[c.key]"}})],1)}),1)],1)],1)]),e._v(" "),n("div",{staticClass:"right"},[n("el-tabs",{attrs:{type:"border-card"},model:{value:e.currentConfig,callback:function(t){e.currentConfig=t},expression:"currentConfig"}},[n("el-tab-pane",{attrs:{label:"表单配置",name:"form"}},[n("preview",{attrs:{"data-source":e.formDefines},model:{value:e.formConfig,callback:function(t){e.formConfig=t},expression:"formConfig"}}),e._v(" "),n("code",[n("pre",[e._v(e._s(JSON.stringify(e.formConfig,void 0,2)))])]),e._v(" "),n("code",[n("pre",[e._v(e._s(JSON.stringify(e.dataForm,void 0,2)))])]),e._v(" "),n("code",[n("pre",[e._v(e._s(JSON.stringify(e.dataSource,void 0,2)))])])],1),e._v(" "),e.current?n("el-tab-pane",{attrs:{label:"属性配置",name:"attr"}},["attr"===e.currentConfig?n("preview",{attrs:{"data-source":e.currentProps},model:{value:e.dataSource[e.currentIdx],callback:function(t){e.$set(e.dataSource,e.currentIdx,t)},expression:"dataSource[currentIdx]"}}):e._e()],1):e._e()],1)],1)])},staticRenderFns:[]};var v=n("VU/8")(f,p,!1,function(e){n("fESE")},"data-v-1cdb94a4",null).exports,m={filters:{calcCondition:l.a},props:{dataSource:{type:Array,default:function(){return[]}},value:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{handleInput:function(e,t){var n=this;clearTimeout(this.emitHandler),this.formData=this.formData||{},this.formData[e]=t,this.emitHandler=setTimeout(function(){n.$emit("input",n.formData)},0)}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-width":"auto"}},e._l(e.dataSource,function(t){return n("div",{key:t.id},[n("form-item",{attrs:{config:t,value:e.value[t.key],disabled:e._f("calcCondition")(t.disabled,e.value)},on:{input:function(n){return e.handleInput(t.key,n)}}})],1)}),0)},staticRenderFns:[]};var _=n("VU/8")(m,y,!1,function(e){n("pZGm")},"data-v-0a11183a",null).exports,h={components:{preview:_},data:function(){return{value:{},component:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}]}},methods:{handleChange:function(e){this.value=e}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("preview",{attrs:{"data-source":e.component,value:e.value},on:{input:function(t){return e.handleChange(t)}}})],1)},staticRenderFns:[]};var g={name:"App",components:{FormFoundry:v,Test:n("VU/8")(h,b,!1,function(e){n("oNZ1")},"data-v-1aa27c98",null).exports}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("FormFoundry")],1)},staticRenderFns:[]};var k=n("VU/8")(g,x,!1,function(e){n("AV9+")},null,null).exports,$=n("zL8q"),C=n.n($),V=(n("tvR6"),{components:{"ff-select":n("ZYan").default,"ff-checkbox-group":n("tG9Z").default,"ff-radio-group":n("Vv44").default,"ff-input":n("qg6B").default,"ff-number":n("cFp1").default,"ff-textarea":n("FDPK").default,"ff-custom":n("hTC+").default,"ff-dynamic":n("uKnk").default,"ff-grid":n("GMe7").default},props:["config","value","disabled"],data:function(){return{}},watch:{"config.defaultValue":function(e){this.$emit("input",e)}},mounted:function(){void 0!==this.config.defaultValue&&this.$emit("input",this.config.defaultValue)},methods:{}}),F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form-item",{attrs:{label:e.config.title,prop:e.config.key}},[n("ff-"+e.config.type,{tag:"component",attrs:{options:e.config.options,disabled:e.disabled,placeholder:e.config.placeholder,components:e.config.components,value:e.value},on:{input:function(t){return e.$emit("input",t)}}})],1)},staticRenderFns:[]},S=n("VU/8")(V,F,!1,null,null,null).exports;r.default.component("preview",_),r.default.component("form-item",S),r.default.config.productionTip=!1,r.default.use(C.a,{size:"mini"}),new r.default({el:"#app",components:{App:k},template:"<App/>"})},Raus:function(e,t){},Vv44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-radio-group",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-radio-group",e.$attrs,!1),e._l(e.options,function(t){return n("el-radio",{key:t.key,attrs:{label:t.key}},[e._v("\n    "+e._s(t.value)+"\n  ")])}),1)},staticRenderFns:[]},a=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=a.exports},ZYan:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-select",e.$attrs,!1),e._l(e.options,function(e){return n("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})}),1)},staticRenderFns:[]},a=n("VU/8")({props:["options"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=a.exports},ag2q:function(e,t){},cFp1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input-number",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-input-number",e.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);t.default=a.exports},fESE:function(e,t){},hE8X:function(e,t){e.exports={components:[{type:"input",title:"单行文本"},{type:"number",title:"数字"},{type:"textarea",title:"多行文本"},{type:"select",title:"下拉框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}]},{type:"checkbox-group",title:"复选框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}]},{type:"radio-group",title:"单选框",options:[{key:"option1",value:"选项1"},{key:"option2",value:"选项2"}]},{type:"dynamic",title:"动态组件",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}]}],form:[{type:"input",title:"标签宽度",key:"labelWidth",defaultValue:"auto"},{type:"select",title:"对齐方式",key:"labelPosition",defaultValue:"right",options:[{key:"left",value:"左对齐"},{key:"right",value:"右对齐"},{key:"top",value:"顶部对齐"}]}],props:{input:["basic","placeholder","defaultValue"],number:["basic","placeholder","defaultValueNumber"],textarea:["basic","placeholder","defaultValue"],select:["basic","placeholder","defaultValue","options"],"checkbox-group":["basic","defaultValueArray"],"radio-group":["basic","defaultValue"]},defines:[{type:"input",title:"标题",key:"title",tag:"basic"},{type:"input",title:"字段索引",key:"key",tag:"basic"},{type:"input",title:"占位内容",key:"placeholder",tag:"placeholder"},{type:"input",title:"默认值",key:"defaultValue",tag:"defaultValue"},{type:"checkbox-group",title:"默认值",key:"defaultValue",tag:"defaultValueArray"},{type:"number",title:"默认值",key:"defaultValue",tag:"defaultValueNumber"},{type:"dynamic",title:"选项",key:"options",components:[{type:"input",key:"key",placeholder:"key"},{type:"input",key:"value",placeholder:"value"}],tag:"options"}]}},"hTC+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({attrs:{type:"textarea"},on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")({props:[],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=a.exports},oNZ1:function(e,t){},pZGm:function(e,t){},qg6B:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",e._b({on:{input:function(t){return e.$emit("input",t)}}},"el-input",e.$attrs,!1))},staticRenderFns:[]},a=n("VU/8")(null,r,!1,null,null,null);t.default=a.exports},r1dg:function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-item",class:{active:e.active},on:{click:function(t){return e.$emit("click")}}},[e._t("default"),e._v(" "),n("div",{staticClass:"option"},[n("el-tooltip",{attrs:{content:"复制"}},[n("a",{on:{click:function(t){return e.$emit("copy")}}},[n("i",{staticClass:"el-icon-copy-document"})])]),e._v(" "),n("el-tooltip",{attrs:{content:"删除"}},[n("a",{on:{click:function(t){return e.$emit("remove")}}},[n("i",{staticClass:"el-icon-delete"})])])],1)],2)},staticRenderFns:[]};var a=n("VU/8")({props:["active"],data:function(){return{}},methods:{}},r,!1,function(e){n("E/4W")},"data-v-c446f832",null);t.a=a.exports},tG9Z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",e._b({attrs:{value:e.value||[]},on:{input:function(t){return e.$emit("input",t)}}},"el-checkbox-group",e.$attrs,!1),e._l(e.options,function(t){return n("el-checkbox",{key:t.key,attrs:{label:t.key}},[e._v("\n    "+e._s(t.value)+"\n  ")])}),1)},staticRenderFns:[]},a=n("VU/8")({props:["options","value"],data:function(){return{}},methods:{}},r,!1,null,null,null);t.default=a.exports},tvR6:function(e,t){},uKnk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Gu7T"),a=n.n(r),o={props:["value","components"],data:function(){return{}},methods:{add:function(){this.$emit("input",[].concat(a()(this.value||[]),[void 0]))},remove:function(e){this.$emit("input",this.value.filter(function(t,n){return n!==e}))},handleChange:function(e,t){this.$emit("input",this.value.map(function(n,r){return r===e?t:n}))}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.value,function(t,r){return n("el-row",{key:r,attrs:{gutter:5,type:"flex"}},[n("el-col",{staticStyle:{flex:"auto"}},[n("preview",{attrs:{"data-source":e.components,value:e.value[r]},on:{input:function(t){return e.handleChange(r,t)}}})],1),e._v(" "),n("el-col",{staticStyle:{width:"36px"}},[n("a",{on:{click:function(t){return e.remove(r)}}},[n("i",{staticClass:"el-icon-delete"})])])],1)}),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.add}},[e._v("添加新项")])],2)},staticRenderFns:[]};var u=n("VU/8")(o,i,!1,function(e){n("Raus")},"data-v-16b6380f",null);t.default=u.exports}},["NHnr"]);
//# sourceMappingURL=app.f20e6fd96307ec1a3c99.js.map