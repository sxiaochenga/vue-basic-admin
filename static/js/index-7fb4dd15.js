import{_ as g}from"./index-b26c4894.js";import{d as D,r as h,ej as i,ek as m,o as u,c as o,f as d,w as l,a4 as v,b8 as x,i as $,t,e as n,g as s,el as A,l as Y}from"./index-b24fdcf6.js";import"./el-popper-e67372c2.js";import"./el-col-8e7c1ebb.js";const b={class:"page-func-time-ago"},y={class:"ml15"},k={class:"time-item"},w={class:"time-item"},B=D({__name:"index",setup(N){const p=h(["2022-02-24 11:11:11","2022-10-24 15:35:34","2023-01-24 15:35:34","2023-02-24 16:48:34","2023-02-24 16:52:11","2023-03-25 12:12:12","2023-06-25 12:12:12"]),F=i(m(),"YYYY-MM-DD HH:mm:ss"),c=i(m({interval:0}),"YYYY-MM-DD HH:mm:ss"),f={justNow:"\u521A\u521A",past:e=>e.match(/\d/)?`${e}\u524D`:e,future:e=>e.match(/\d/)?`${e}\u540E`:e,month:e=>`${e} \u6708`,year:e=>`${e} \u5E74`,day:e=>`${e} \u5929`,week:e=>`${e} \u5468`,hour:e=>`${e}\u5C0F\u65F6`,minute:e=>`${e}\u5206\u949F`,second:e=>`${e}\u79D2`},_=e=>s(A(e,{updateInterval:1e3,messages:f}));return(e,E)=>{const r=g;return u(),o("div",b,[d(r,{title:"\u76F8\u5BF9\u5F53\u524D\u65F6\u95F4"},{default:l(()=>[(u(!0),o(v,null,x(p.value,a=>(u(),o("div",{class:"time-item",key:a},[$(t(a)+"\uFF1A",1),n("span",y,t(_(a)),1)]))),128))]),_:1}),d(r,{title:"\u81EA\u52A8\u66F4\u65B0"},{default:l(()=>[n("div",k,"\u5F53\u524D\u65F6\u95F4\uFF1A"+t(s(F)),1),n("div",w,t(s(c))+"\uFF1A"+t(_(s(c))),1)]),_:1})])}}});const C=Y(B,[["__scopeId","data-v-5d0a36fb"]]);export{C as default};
