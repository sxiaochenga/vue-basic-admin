import{_ as b}from"./base-input-number-4fc9e28e.js";import{_ as x}from"./index-b26c4894.js";import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-90f4af1e.js";import{d as D,r as u,cy as L,o as s,c as _,az as A,A as g,w as t,f as l,i,a4 as T,b8 as V,t as $,bU as f}from"./index-b24fdcf6.js";import"./base-input.vue_vue_type_script_setup_true_lang-8e800e93.js";/* empty css                 */import"./el-popper-e67372c2.js";import"./el-col-8e7c1ebb.js";/* empty css                  */const w={class:"com-loading-container"},K=D({__name:"index",setup(h){const r=u(!1),m=u(!1),c=u(1e3),v=u(["pulse","rect","plane","cube","preloader","chase","dot"]),p=o=>{m.value=o===2,r.value=!0,setTimeout(()=>{r.value=!1},2e3)},E=o=>{const{open:e,close:a}=f({spin:o});e(),setTimeout(()=>{a()},2e3)},y=()=>{const{open:o,close:e}=f({minTime:c.value});o(),e()};return(o,e)=>{const a=B,d=x,C=b,F=L("custom-loading");return s(),_("div",w,[A((s(),g(d,{title:"\u6307\u4EE4\u65B9\u5F0F\u52A0\u8F7Dloading",class:"relative",height:"150px","loading-text":"\u81EA\u5B9A\u4E49\u6307\u4EE4loading","loading-spin":"pulse","loading-full":m.value},{default:t(()=>[l(a,{type:"primary",onClick:e[0]||(e[0]=n=>p(1))},{default:t(()=>[i(" v-custom-loading\u6307\u4EE4\u975E\u5168\u5C4F ")]),_:1}),l(a,{type:"primary",onClick:e[1]||(e[1]=n=>p(2))},{default:t(()=>[i(" v-custom-loading\u6307\u4EE4\u5168\u5C4F ")]),_:1})]),_:1},8,["loading-full"])),[[F,r.value]]),l(d,{title:"hook\u52A0\u8F7Dloading"},{default:t(()=>[(s(!0),_(T,null,V(v.value,(n,k)=>(s(),g(a,{type:"primary",key:n,onClick:N=>E(n)},{default:t(()=>[i(" loading"+$(k+1),1)]),_:2},1032,["onClick"]))),128))]),_:1}),l(d,{title:"loading\u6700\u5C0F\u65F6\u957F"},{default:t(()=>[l(C,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=n=>c.value=n),class:"mr25"},null,8,["modelValue"]),l(a,{type:"primary",onClick:y},{default:t(()=>[i(" \u70B9\u51FB\u89E6\u53D1loading ")]),_:1})]),_:1})])}}});export{K as default};
