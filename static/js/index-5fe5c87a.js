import{d as S,r as u,V as z,o as T,B as K,w as t,f as e,e as _,g as o,t as O,h as B,a6 as N,b4 as U,bi as M,aV as V,j as q,cb as G,p as H,k as J,m as P,a1 as Q,c as W,a5 as X,i as Y}from"./index-418c68f0.js";import{E as R,a as I}from"./el-col-012358cf.js";import{E as Z}from"./el-tree-84c4ad59.js";import"./el-checkbox-c4553549.js";import{D as ee}from"./vuedraggable.umd-2e55fe23.js";import{_ as te}from"./index-fcd058e8.js";import{_ as ae}from"./base-json.vue_vue_type_script_setup_true_lang-24113004.js";import{g as le}from"./dept-be5af7e1.js";import"./vue.runtime.esm-bundler-50a76103.js";const A=l=>(H("data-v-0b8a185d"),l=l(),J(),l),se=A(()=>_("div",{class:"base-column-title pl15"},"\u5B57\u6BB5",-1)),oe={class:"padding15 border-box"},ne=A(()=>_("div",{class:"base-column-title pl15"},"\u5DF2\u9009\u5B57\u6BB5",-1)),ce={class:"padding15 border-box"},ue={class:"base-column-choose-item flex-row-center pl10 pr10"},de=["title"],ie={class:"base-column-setting-tip"},_e=S({__name:"base-tree-select",props:{data:{type:Array,default:()=>[]},nodeKey:{type:String,default:"id"},fieldNames:{type:Object,default:()=>({label:"label",children:"children"})},height:{type:String,default:"450px"}},emits:["save"],setup(l,{expose:m,emit:g}){const f=l,c=u(""),d=u([]),h=u(null),i=u(),s=u(),k=({data:a,callback:n,type:D="key"})=>{o(s).showDialog(),h.value=n,N(()=>{D==="node"?o(i).setCheckedNodes(a||[]):o(i).setCheckedKeys(a||[]),b()})},v=()=>{r(),o(s).hideDialog()},r=()=>{c.value="",d.value=[],h.value=null},y=(a,n)=>a?n[f.fieldNames.label].indexOf(a)!==-1:!0,b=()=>{d.value=o(i).getCheckedNodes()},x=a=>{o(i).setChecked(a,!1,!0),N(()=>{b()})},w=a=>{var n;U(h.value)&&(a(!0),(n=o(h))==null||n(d.value),setTimeout(()=>{a(!1),v()},600)),g("save",d.value)};return z(c,a=>{o(i).filter(a)}),m({showDialog:k,hideDialog:v}),(a,n)=>{const D=M,$=Z,F=V,C=R,E=q,L=I,j=G;return T(),K(j,{class:"base-tree-select",title:"\u9009\u62E9\u5B57\u6BB5",ref_key:"baseDialogRef",ref:s,width:"870px",saveText:"\u4FDD \u5B58",cancelText:"\u53D6 \u6D88",closeFun:r,onSave:w},{default:t(()=>[e(L,{gutter:0},{default:t(()=>[e(C,{span:12,class:"base-tree-box"},{default:t(()=>[se,_("div",oe,[e(D,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=p=>c.value=p),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\u79F0",class:"mb15"},null,8,["modelValue"]),e(F,{"view-style":{height:l.height}},{default:t(()=>[e($,{data:l.data,"node-key":l.nodeKey,ref_key:"treeRef",ref:i,"show-checkbox":"",props:l.fieldNames,"filter-node-method":y,"expand-on-click-node":!1,onCheck:b,"default-expand-all":""},null,8,["data","node-key","props"])]),_:1},8,["view-style"])])]),_:1}),e(C,{span:12,class:"base-tree-box"},{default:t(()=>[ne,_("div",ce,[e(F,{"view-style":{height:l.height}},{default:t(()=>[e(o(ee),{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=p=>d.value=p),animation:100,"item-key":"fieldName",forceFallback:!0,handle:".move"},{item:t(({element:p})=>[_("div",ue,[e(E,{"el-name":"rank",size:16,class:"move mr5",hover:""}),_("div",{class:"text-hidden w100",title:p[l.fieldNames.label]},O(p[l.fieldNames.label]),9,de),e(E,{"el-name":"close",size:14,class:"pointer",hover:"",onClick:me=>x(p)},null,8,["onClick"])])]),_:1},8,["modelValue"])]),_:1},8,["view-style"])])]),_:1}),_("div",ie,[B(" \u6CE8\uFF1A\u62D6\u52A8 "),e(E,{"el-name":"rank",size:14,class:"ml5 mr5"}),B(" \u56FE\u6807\u53EF\u8C03\u6574\u987A\u5E8F ")])]),_:1})]),_:1},512)}}});const re=P(_e,[["__scopeId","data-v-0b8a185d"]]),pe={class:"page-func-tree-select"},Be=S({__name:"index",setup(l){const m=u(),g=u([]),f=u([]),c=u([5,6]),d={label:"deptName",children:"children"};Q(async()=>{const s=await le();g.value=s.data});const h=()=>{o(m).showDialog({data:f.value,type:"node",callback:s=>{f.value=s}})},i=()=>{o(m).showDialog(c.value,s=>{f.value=s}),o(m).showDialog({data:c.value,type:"keys",callback:s=>{c.value=s.map(k=>k.deptId)}})};return(s,k)=>{const v=Y,r=R,y=ae,b=V,x=I,w=te,a=re;return T(),W(X,null,[_("div",pe,[e(w,{title:"\u57FA\u7840\u793A\u4F8B"},{default:t(()=>[e(x,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(v,{onClick:h},{default:t(()=>[B("\u70B9\u51FB\u9009\u62E9\u90E8\u95E8")]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(b,{"view-style":"height:500px"},{default:t(()=>[e(y,{data:f.value},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1}),e(w,{title:"\u521D\u59CB\u503C"},{default:t(()=>[e(x,null,{default:t(()=>[e(r,{span:12},{default:t(()=>[e(v,{onClick:i},{default:t(()=>[B("\u70B9\u51FB\u9009\u62E9\u90E8\u95E8")]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(b,{"view-style":"height:500px"},{default:t(()=>[e(y,{data:c.value},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1})]),e(a,{ref_key:"baseTreeSelectRef",ref:m,"node-key":"deptId",fieldNames:d,data:g.value},null,8,["data"])],64)}}});export{Be as default};
