import{_ as I}from"./index-7ffd5008.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-22f78865.js";import{_ as A}from"./base-dialog.vue_vue_type_style_index_0_lang-ede0cede.js";import{_ as S}from"./base-form.vue_vue_type_script_setup_true_lang-f283f5de.js";import{F as r}from"./componentEnum-5b7fa99f.js";import{g as k,a as R,b as v}from"./dept-06ff9049.js";import{ep as M,d as F,r as _,b as D,v as L,o as y,A as P,w as h,f,g as a,a5 as q,c2 as T,a0 as U,c as V,i as $}from"./index-dea3e1d5.js";import{S as N}from"./basic-2a5cf92e.js";import"./base-table-cab511bd.js";/* empty css                 */import"./el-tag-d84f10ee.js";import"./base-select.vue_vue_type_script_lang-0e5115c3.js";import"./el-popper-deca58d6.js";import"./el-tree-6d6bf403.js";import"./index-a21d8604.js";import"./el-checkbox-e5e48d6b.js";import"./_Uint8Array-27b31b61.js";import"./debounce-f9c318a9.js";import"./index-337dd103.js";import"./el-empty-5c9929ab.js";import"./el-space-2d98409b.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-04b13769.js";import"./dropdown-7262a7f6.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-486ce22a.js";import"./base-input.vue_vue_type_script_setup_true_lang-a4e7371c.js";import"./base-column-setting-2234be66.js";import"./vuedraggable.umd-65e27c1f.js";import"./vue.runtime.esm-bundler-8e5f7356.js";import"./index-844f6123.js";import"./el-col-6ac2f80e.js";import"./base-filter-f49b4bff.js";import"./useTagViewSetting-614e0d1a.js";import"./el-form-item-42613a54.js";import"./base-input-number-1d450847.js";import"./localeData-d8efea56.js";import"./index-fdd0f4cc.js";import"./position-f36c577e.js";function w(o){const l=[{fieldName:"deptName",fieldDesc:"\u90E8\u95E8\u540D\u79F0",fieldType:r.INPUT},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:r.SELECT,config:{options:N}}],m=[{fieldName:"deptName",fieldDesc:"\u90E8\u95E8\u540D\u79F0"},{fieldName:"parentName",fieldDesc:"\u4E0A\u7EA7\u90E8\u95E8"},{fieldName:"sort",fieldDesc:"\u6392\u5E8F"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",type:i=>i.status===0?"danger":"",formatter:i=>M(N,i.status)},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:o==null?void 0:o.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:o==null?void 0:o.delete}]}],d=[{fieldName:"deptName",fieldDesc:"\u90E8\u95E8\u540D\u79F0",fieldType:r.INPUT},{fieldName:"parentId",fieldDesc:"\u4E0A\u7EA7\u90E8\u95E8",fieldType:r.SELECT,config:{api:k,tree:!0,nodeKey:"deptId",init:!0,props:{label:"deptName",children:"children"}}},{fieldName:"sort",fieldDesc:"\u6392\u5E8F",fieldType:r.NUMBER},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:r.SWITCH,config:{activeValue:1,inactiveValue:0}},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:r.INPUT,config:{type:"textarea"}}];return{filterColumn:l,tableColumn:m,dialogColumn:d}}const O=F({__name:"DeptDialog",emits:["success"],setup(o,{expose:l,emit:m}){const{success:d}=T(),{dialogColumn:i}=w(),n=_(),u=_(),e=D({isEdit:!1,treeData:[],defaultProps:{children:"children",label:"menuName"},formModel:{}}),p={deptName:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:["blur","change"]}],parentId:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8",trigger:["blur","change"]}],sort:[{required:!0,message:"\u8BF7\u8F93\u5165\u6392\u5E8F",trigger:["blur","change"]}],status:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001",trigger:["blur","change"]}]},E=L(()=>e.isEdit?"\u4FEE\u6539\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8"),g=(t={})=>{a(n).showDialog(),q(()=>{a(u).instance.resetFields(),e.isEdit=!!t.deptId||t.deptId===0,e.isEdit&&Object.assign(e.formModel,t)})},s=()=>{a(n).hideDialog()},b=async t=>{await a(u).instance.validate(async c=>{if(!!c){t(!0);try{e.isEdit||await R(e.formModel),d(e.isEdit?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),m("success"),s()}finally{t(!1)}}})};return l({showDialog:g,hideDialog:s}),(t,c)=>{const C=S,B=A;return y(),P(B,{ref_key:"baseDialogRef",ref:n,width:"560px",title:a(E),onSave:b},{default:h(()=>[f(C,{ref_key:"baseFormRef",ref:u,columns:a(i),rules:p,model:e.formModel},null,8,["columns","model"])]),_:1},8,["title"])}}}),K={class:"system-department-container"},j=F({name:"Department"}),Ae=F({...j,setup(o){const{tableColumn:l,filterColumn:m}=w({edit:E,delete:g}),{success:d}=T(),i=D({columns:m,onSearch:e,showOpen:!1,searchInfo:{}}),n=D({columns:l,data:[],showPagination:!1,rowKey:"deptId",indexShow:!1,defaultExpandAll:!0,onRefresh:e}),u=_();U(()=>{e()});async function e(){const s=await v({...i.searchInfo});n.data=s.data}function p(){a(u).showDialog()}function E(s){a(u).showDialog(s.row)}async function g(){d("\u6A21\u62DF\u5220\u9664\u6210\u529F")}return(s,b)=>{const t=x,c=I;return y(),V("div",K,[f(c,{"table-title":"\u90E8\u95E8\u5217\u8868","filter-config":i,"table-config":n},{buttons:h(()=>[f(t,{type:"primary",onClick:p},{default:h(()=>[$("\u65B0\u589E\u90E8\u95E8")]),_:1})]),_:1},8,["filter-config","table-config"]),f(O,{ref_key:"deptDialogRef",ref:u,onSuccess:e},null,512)])}}});export{Ae as default};