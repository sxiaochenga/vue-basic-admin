import{d as g,S as B,c as v,aI as S,aJ as w,o as r,v as y,w as t,V as d,f as c,b as e,y as _,W as $,aK as N,u as b,aC as E,aG as C,n as I,k as x,N as V,x as H,_ as z,I as R,a6 as T,G as P}from"./.pnpm.b1628590.js";import{i as h,c as A,d as D}from"./index.f730c59d.js";const G={key:0},j=g({__name:"base-skeleton",props:{loading:{type:Boolean,default:!1},count:{type:Number,default:1},animated:{type:Boolean,default:!0},rows:{type:Number,default:3},isBox:{type:Boolean,default:!1},throttle:{type:Number,default:0}},setup(o){const p=o,f=B(),u=v(()=>({...p,...f}));return(i,n)=>{const a=S,s=E,l=C,m=w;return r(),y(m,$(N(b(u))),{default:t(()=>[d(i.$slots,"default")]),template:t(()=>[d(i.$slots,"template"),!i.$slots.template&&o.isBox?(r(),c("div",G,[e(l,{gutter:8},{default:t(()=>[e(s,{span:22},{default:t(()=>[e(a,{variant:"text"})]),_:1})]),_:1}),e(l,{gutter:8},{default:t(()=>[e(s,{span:8},{default:t(()=>[e(a,{variant:"text"})]),_:1}),e(s,{span:15},{default:t(()=>[e(a,{variant:"text"})]),_:1})]),_:1}),e(l,{gutter:8},{default:t(()=>[e(s,{span:6},{default:t(()=>[e(a,{variant:"text"})]),_:1}),e(s,{span:18},{default:t(()=>[e(a,{variant:"text"})]),_:1})]),_:1}),e(l,{gutter:8},{default:t(()=>[e(s,{span:13},{default:t(()=>[e(a,{variant:"text"})]),_:1}),e(s,{span:8},{default:t(()=>[e(a,{variant:"text"})]),_:1})]),_:1}),e(l,{gutter:8},{default:t(()=>[e(s,{span:4},{default:t(()=>[e(a,{variant:"text"})]),_:1}),e(s,{span:3},{default:t(()=>[e(a,{variant:"text"})]),_:1}),e(s,{span:16},{default:t(()=>[e(a,{variant:"text"})]),_:1})]),_:1})])):_("",!0)]),_:3},16)}}});const J={key:0,class:"base-box-header"},K={class:"flex-row-center justify-between"},W={key:0,class:"base-box-title flex-row-center"},q={class:"base-box-extra tr"},F={class:"base-box-content"},L=g({__name:"index",props:{title:{type:String,default:""},shadow:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},showHelp:{type:Boolean,default:!1},helpIcon:{type:String,default:"svg-help"},helpText:{type:String,default:"\u63D0\u793A"},maxHeight:{type:[Number,String]},height:{type:[Number,String]},loading:{type:Boolean,default:!1}},setup(o,{expose:p}){const f=o,u=I(),i=v(()=>{const{height:n,maxHeight:a}=f;return{height:h(n)?n:`${n}px`,maxHeight:h(a)?a:`${a}px`}});return p({instance:u}),(n,a)=>{const s=A,l=T,m=j,k=P;return r(),c("div",{class:R(["base-box-container base-box-bg",{shadow:o.shadow,hover:o.hover}]),ref_key:"baseBoxRef",ref:u},[o.title||n.$slots.title?(r(),c("div",J,[x("div",K,[n.$slots.title?_("",!0):(r(),c("div",W,[V(H(o.title)+" ",1),o.showHelp?(r(),y(l,{key:0,effect:"dark",content:o.helpText,placement:"right"},{default:t(()=>[e(s,{icon:o.helpIcon,size:20,class:"ml5"},null,8,["icon"])]),_:1},8,["content"])):_("",!0)])),x("div",q,[d(n.$slots,"extra",{},void 0,!0)])]),d(n.$slots,"title",{},void 0,!0)])):_("",!0),x("div",F,[e(k,{style:z(b(i))},{default:t(()=>[e(m,{loading:o.loading,"is-box":""},{default:t(()=>[d(n.$slots,"default",{},void 0,!0)]),_:3},8,["loading"])]),_:3},8,["style"])])],2)}}});const Q=D(L,[["__scopeId","data-v-81a1a7de"]]);export{Q as _};