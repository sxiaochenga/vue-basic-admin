import{d as F,aR as E,r as N,x as f,aF as C,b4 as V,b5 as j,b6 as O,o as l,B as n,w as r,f as u,aP as a,c as R,a5 as S,aM as v,g as p,F as A,C as i,b7 as M}from"./index-418c68f0.js";import{E as U,a as D}from"./el-form-item-b6d27945.js";import{E as L,a as T}from"./el-col-012358cf.js";import{c as $}from"./componentEnum-1406d743.js";const q={model:{type:Object,default:{}},inline:{type:Boolean},labelWidth:{type:[Number,String],default:"100px"},labelPosition:{type:String},size:{type:String},hideRequiredAsterisk:{type:Boolean},disabled:{type:Boolean}},m={columns:{type:Array,default:()=>[]},rowProps:{type:Object,default:()=>{}},colProps:{type:Object,default:()=>{}}},z=Object.assign({},q,m),J=F({__name:"base-form",props:z,setup(b,{expose:y}){const d=b,_=E(),c=N(),w=f(()=>({...{...C(d,Object.keys(m))},..._})),P=f(()=>{const{columns:o,model:t}=d;return o.filter(s=>V(s.show)?s.show({model:t,columns:o}):j(s.show)?s.show:O(s.active)||s.active)});return y({instance:c}),(o,t)=>{const s=U,g=L,k=T,h=D;return l(),n(h,a({model:o.model},p(w),{onSubmit:t[0]||(t[0]=M(()=>{},["prevent"])),ref_key:"baseFormRef",ref:c}),{default:r(()=>[u(k,a(o.rowProps,{gutter:0,class:"hidden"}),{default:r(()=>[(l(!0),R(S,null,v(p(P),e=>(l(),n(g,a({key:e.fieldName},e.colProps||o.colProps),{default:r(()=>[u(s,a({label:e.fieldDesc,prop:e.fieldName,class:"w100"},e),{default:r(()=>[e.fieldType!=="slot"?(l(),n(A(p($).get(e.fieldType)),a({key:0,modelValue:o.model[e.fieldName],"onUpdate:modelValue":B=>o.model[e.fieldName]=B},e.config,{class:"w100"}),null,16,["modelValue","onUpdate:modelValue"])):i(o.$slots,e.fieldName,{key:1,item:e})]),_:2},1040,["label","prop"])]),_:2},1040))),128))]),_:3},16),i(o.$slots,"action")]),_:3},16,["model"])}}});export{J as _};
