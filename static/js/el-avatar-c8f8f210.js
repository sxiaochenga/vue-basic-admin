import{m as k,O as z,y as v,aL as _,n as C,d,x as b,r as w,v as l,Q as A,a9 as B,U as P,o as n,c as u,D as m,g as o,A as f,w as L,E as N,aM as D,B as F,C as I,F as T,G as U}from"./index-b24fdcf6.js";const j=k({size:{type:[Number,String],values:z,default:"",validator:e=>v(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:_},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:C(String),default:"cover"}}),q={error:e=>e instanceof Event},G=["src","alt","srcset"],M=d({name:"ElAvatar"}),O=d({...M,props:j,emits:q,setup(e,{emit:y}){const t=e,a=b("avatar"),c=w(!1),S=l(()=>{const{size:s,icon:i,shape:p}=t,r=[a.b()];return A(s)&&r.push(a.m(s)),i&&r.push(a.m("icon")),p&&r.push(a.m(p)),r}),h=l(()=>{const{size:s}=t;return v(s)?a.cssVarBlock({size:B(s)||""}):void 0}),E=l(()=>({objectFit:t.fit}));P(()=>t.src,()=>c.value=!1);function g(s){c.value=!0,y("error",s)}return(s,i)=>(n(),u("span",{class:I(o(S)),style:m(o(h))},[(s.src||s.srcSet)&&!c.value?(n(),u("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:m(o(E)),onError:g},null,44,G)):s.icon?(n(),f(o(D),{key:1},{default:L(()=>[(n(),f(N(s.icon)))]),_:1})):F(s.$slots,"default",{key:2})],6))}});var Q=T(O,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const $=U(Q);export{$ as E};
