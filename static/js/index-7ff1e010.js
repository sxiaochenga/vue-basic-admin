import{_ as I}from"./index-6026433d.js";import{ep as x,d as N,b as y,r as h,o as C,A as w,w as t,f as i,g as s,i as D,a5 as A,c2 as U,a0 as v,c as V,ab as L,_ as q}from"./index-b24fdcf6.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-90f4af1e.js";import{F as o}from"./componentEnum-3c51408c.js";import{S as E}from"./basic-2a5cf92e.js";import{g as B}from"./menu-0379a6be.js";import{_ as $}from"./base-dialog.vue_vue_type_style_index_0_lang-0d031038.js";import{_ as z}from"./base-form.vue_vue_type_script_setup_true_lang-9f07afc3.js";import{b as G,a as H}from"./el-radio-group-1e362e6b.js";import"./base-table-c6b41732.js";/* empty css                 */import"./el-tag-723e3959.js";import"./base-select.vue_vue_type_script_lang-cd2a706d.js";import"./el-popper-e67372c2.js";import"./el-tree-890ae575.js";import"./index-34c91736.js";import"./el-checkbox-75e59423.js";import"./_Uint8Array-673f992d.js";import"./debounce-8bdb55cb.js";import"./index-2737c85f.js";import"./el-empty-8dea67b0.js";import"./el-space-be5e3bb6.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-1ac1e28a.js";import"./dropdown-0c1ec3f1.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-76525628.js";import"./base-input.vue_vue_type_script_setup_true_lang-8e800e93.js";import"./base-column-setting-90dde805.js";import"./vuedraggable.umd-9a1df025.js";import"./vue.runtime.esm-bundler-2281e001.js";import"./index-b26c4894.js";import"./el-col-8e7c1ebb.js";import"./base-filter-98ac391f.js";import"./useTagViewSetting-dcc2216d.js";import"./base-input-number-4fc9e28e.js";import"./localeData-1bdd8b14.js";import"./index-02c20932.js";import"./position-21f8c082.js";import"./el-form-item-21e26e77.js";const K=u=>u==="D",W=u=>u==="M",T=u=>u==="B";function P(){const u=[{fieldName:"menuName",fieldDesc:"\u83DC\u5355\u540D\u79F0",fieldType:o.INPUT},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:o.SELECT,config:{options:E}}],r=[{fieldName:"menuName",fieldDesc:"\u83DC\u5355\u540D\u79F0",showOverflowTooltip:!0,align:"left"},{fieldName:"icon",fieldDesc:"\u56FE\u6807",formType:"slot",align:"left",width:100},{fieldName:"sort",fieldDesc:"\u6392\u5E8F",align:"left",width:100},{fieldName:"permission",fieldDesc:"\u6743\u9650\u6807\u8BC6",align:"left"},{fieldName:"path",fieldDesc:"\u8DEF\u5F84",align:"left"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",align:"left",type:e=>e.status===0?"danger":"",formatter:e=>x(E,e.status)},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",align:"left"}],l=[{fieldName:"menuType",fieldDesc:"\u83DC\u5355\u7C7B\u578B",fieldType:o.SLOT},{fieldName:"parentId",fieldDesc:"\u4E0A\u7EA7\u83DC\u5355",fieldType:o.SELECT,colProps:{span:12},config:{api:B,tree:!0,nodeKey:"id",props:{label:"menuName",children:"children"}}},{fieldName:"menuName",fieldDesc:"\u83DC\u5355\u540D\u79F0",fieldType:o.INPUT,colProps:{span:12}},{fieldName:"icon",fieldDesc:"\u83DC\u5355\u56FE\u6807",fieldType:o.ICON,colProps:{span:12},show:({model:e})=>!T(e.menuType)},{fieldName:"componentPath",fieldDesc:"\u7EC4\u4EF6\u5730\u5740",fieldType:o.INPUT,colProps:{span:12},show:({model:e})=>W(e.menuType)},{fieldName:"id",fieldDesc:"\u6743\u9650\u6807\u8BC6",fieldType:o.INPUT,colProps:{span:12},show:({model:e})=>!K(e.menuType)},{fieldName:"sort",fieldDesc:"\u6392\u5E8F",fieldType:o.NUMBER,colProps:{span:12}},{fieldName:"isFrame",fieldDesc:"\u662F\u5426\u5916\u94FE",fieldType:o.SWITCH,colProps:{span:12},show:({model:e})=>!T(e.menuType)},{fieldName:"path",fieldDesc:"\u8DEF\u7531\u5730\u5740",fieldType:o.INPUT,colProps:{span:12},show:({model:e})=>!T(e.menuType)}];return{filterColumn:u,tableColumn:r,dialogColumn:l}}const j=N({__name:"MenuDialog",emits:["success"],setup(u,{expose:r,emit:l}){const{success:e}=U(),n=y({menuType:"D"}),{dialogColumn:p}=P(),a=h(),m=h(),f={menuName:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:["blur","change"]}],sort:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u6392\u5E8F",trigger:["blur","change"]}],isFrame:[{required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5916\u94FE",trigger:["blur","change"]}],path:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:["blur","change"]}]},b=()=>{s(a).showDialog(),A(()=>{s(m).instance.resetFields()})},d=()=>{s(a).hideDialog()},F=async()=>{await s(m).instance.validate(async _=>{!_||(e("\u6A21\u62DF\u65B0\u589E\u83DC\u5355\u6210\u529F"),d(),l("success"))})};return r({showDialog:b,hideDialog:d}),(_,g)=>{const c=G,S=H,M=z,R=$;return C(),w(R,{ref_key:"baseDialogRef",ref:a,width:"660px",title:"\u65B0\u589E\u83DC\u5355",onSave:F},{default:t(()=>[i(M,{ref_key:"baseFormRef",ref:m,columns:s(p),rules:f,model:n},{menuType:t(()=>[i(S,{modelValue:n.menuType,"onUpdate:modelValue":g[0]||(g[0]=k=>n.menuType=k)},{default:t(()=>[i(c,{label:"D"},{default:t(()=>[D("\u76EE\u5F55")]),_:1}),i(c,{label:"M"},{default:t(()=>[D("\u83DC\u5355")]),_:1}),i(c,{label:"B"},{default:t(()=>[D("\u6309\u94AE")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["columns","model"])]),_:1},512)}}}),J={class:"system-menu-container"},Q=N({name:"Menu"}),ve=N({...Q,setup(u){const{tableColumn:r,filterColumn:l}=P(),e=y({columns:l,onSearch:a,showOpen:!1,searchInfo:{dictType:""}}),n=y({columns:r,data:[],indexShow:!1,showPagination:!1,onRefresh:a}),p=h();v(()=>{a()});async function a(){const f=await B();n.data=f.data}function m(){s(p).showDialog()}return(f,b)=>{const d=O,F=q,_=I;return C(),V("div",J,[i(_,{"table-title":"\u83DC\u5355\u5217\u8868","filter-config":e,"table-config":n},{buttons:t(()=>[i(d,{type:"primary",onClick:m},{default:t(()=>[D("\u65B0\u589E\u83DC\u5355")]),_:1})]),tableColumn:t(({scope:g,column:c})=>[c.fieldName==="icon"?(C(),w(F,{key:0,icon:g.row.icon,size:18},null,8,["icon"])):L("",!0)]),_:1},8,["filter-config","table-config"]),i(j,{ref_key:"menuDialogRef",ref:p,onSuccess:a},null,512)])}}});export{ve as default};