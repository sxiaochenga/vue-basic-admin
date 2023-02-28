import{_ as S}from"./index-4756af5b.js";import{d as C,r as _,b,a1 as w,x,o as E,B as I,w as h,f as m,g as u,a6 as M,cb as P,aX as T,c as O,h as $,ea as L,i as U}from"./index-418c68f0.js";import{e as q,a as v,b as A,d as K,c as j}from"./role-c63a6a5e.js";import{_ as z}from"./base-form.vue_vue_type_script_setup_true_lang-1578dbdb.js";import{E as V}from"./el-tree-84c4ad59.js";import"./el-checkbox-c4553549.js";import{F as c}from"./componentEnum-1406d743.js";import{S as X}from"./basic-2a5cf92e.js";import{g as G}from"./menu-9a0c045c.js";import"./base-table-efe87740.js";import"./el-tag-325891d9.js";import"./base-select.vue_vue_type_script_lang-814da1af.js";import"./_Uint8Array-5c46ace6.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-866d71f6.js";import"./base-column-setting-949f4afc.js";import"./vuedraggable.umd-2e55fe23.js";import"./vue.runtime.esm-bundler-50a76103.js";import"./index-fcd058e8.js";import"./el-col-012358cf.js";import"./base-filter-a9aa0123.js";import"./el-form-item-b6d27945.js";import"./base-input-number-1239cee9.js";import"./localeData-10ad5d67.js";function N(a){const d=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:c.SELECT,config:{options:X}}],f=[{fieldName:"id",fieldDesc:"id",showOverflowTooltip:!0},{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0"},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",formType:"tag"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"switch",callFunction:a==null?void 0:a.changeSwitch},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:a==null?void 0:a.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:a==null?void 0:a.delete}]}],l=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",fieldType:c.INPUT},{fieldName:"menuIds",fieldDesc:"\u83DC\u5355",fieldType:c.SLOT},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:c.INPUT,config:{type:"textarea"}}];return{filterColumn:d,tableColumn:f,dialogColumn:l}}const H=C({__name:"RoleDialog",emits:["success"],setup(a,{expose:d,emit:f}){const{success:l}=T(),{dialogColumn:p}=N(),i=_(),r=_(),s=_(),e=b({isEdit:!1,treeData:[],defaultProps:{children:"children",label:"menuName"},formModel:{}}),D={roleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:["blur","change"]}],role:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",trigger:["blur","change"]}],menuIds:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355",trigger:["blur","change"]}]};w(async()=>{const t=await G();e.treeData=t.data});const y=x(()=>e.isEdit?"\u4FEE\u6539\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),F=(t={})=>{u(i).showDialog(),M(()=>{u(r).instance.resetFields(),e.isEdit=!!t.id,e.isEdit?(Object.assign(e.formModel,t),u(s).setCheckedKeys(t.menuIds)):u(s).setCheckedKeys([])})},o=()=>{u(i).hideDialog()},n=async t=>{Object.assign(e.formModel,{menuIds:u(s).getCheckedKeys()}),await u(r).instance.validate(async g=>{if(!!g){t(!0);try{e.isEdit?await q(e.formModel):await v(e.formModel),l(e.isEdit?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),f("success"),o()}finally{t(!1)}}})};return d({showDialog:F,hideDialog:o}),(t,g)=>{const B=V,k=z,R=P;return E(),I(R,{ref_key:"baseDialogRef",ref:i,width:"560px",title:u(y),onSave:n},{default:h(()=>[m(k,{ref_key:"baseFormRef",ref:r,columns:u(p),rules:D,model:e.formModel},{menuIds:h(()=>[m(B,{ref_key:"roleTreeRef",ref:s,"node-key":"id","highlight-current":"",data:e.treeData,props:e.defaultProps,"show-checkbox":"","expand-on-click-node":!1},null,8,["data","props"])]),_:1},8,["columns","model"])]),_:1},8,["title"])}}}),J={class:"system-role-container"},ye=C({__name:"index",setup(a){const{tableColumn:d,filterColumn:f}=N({edit:D,delete:y,changeSwitch:F}),{success:l}=T(),p=b({columns:f,onSearch:s,showOpen:!1,searchInfo:{}}),i=b({columns:d,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:s}),r=_();w(()=>{s()});async function s(){const{currentPage:o,pageSize:n}=i.pagination,t=await A({...p.searchInfo,currentPage:o,pageSize:n});i.data=t.data.list||[],i.pagination.total=t.data.total}function e(){u(r).showDialog()}function D(o){u(r).showDialog(o.row)}async function y(o){const{id:n}=o.row;await K({id:n}),l("\u5220\u9664\u6210\u529F"),s()}async function F(o){return L(`\u786E\u8BA4\u8981${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u8BE5\u89D2\u8272\u5417?`).then(async()=>{await j({id:o.id}),l(`${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F}`),s()})}return(o,n)=>{const t=U,g=S;return E(),O("div",J,[m(g,{"table-title":"\u89D2\u8272\u5217\u8868","filter-config":p,"table-config":i},{buttons:h(()=>[m(t,{type:"primary",onClick:e},{default:h(()=>[$("\u65B0\u589E\u89D2\u8272")]),_:1})]),_:1},8,["filter-config","table-config"]),m(H,{ref_key:"roleDialogRef",ref:r,onSuccess:s},null,512)])}}});export{ye as default};
