import{_ as S}from"./base-table-c6b41732.js";import{d as z,a6 as V,r as v,a3 as N,o as r,c as h,f as n,w as s,A as y,ah as P,ai as B,ab as f,B as _,t as F,e as $,a4 as j,i as M,bL as O,bd as A,_ as D,g as k,l as U}from"./index-b24fdcf6.js";import{E as I}from"./el-space-be5e3bb6.js";import{_ as L}from"./base-column-setting-90dde805.js";import{E as q}from"./el-popper-e67372c2.js";import{_ as G}from"./index-b26c4894.js";import{_ as J}from"./base-filter-98ac391f.js";import{u as K}from"./useTagViewSetting-dcc2216d.js";const Q={class:"base-page-table-container"},W={key:0,class:"mb15"},X={class:"flex-row-center justify-between"},Y=z({__name:"index",props:{tableTitle:{type:String,default:""},filterConfig:{type:Object},tableConfig:{type:Object}},emits:["refresh"],setup(t,{emit:H}){const p=t,x=V(),{getTagFullscreen:E}=K(),g=v(),C=v(0),T=()=>{var m;const e=k(E)?37:85,o=20,a=16,c=((m=k(g))==null?void 0:m.instance.offsetHeight)||0,u=20,l=x.buttons?101:54,b=p.tableConfig.showPagination===!1?0:40,d=e+c+l+u+b+o+a;C.value=`calc(100vh - ${d}px)`},w=()=>{var e,o,a;O((e=p.tableConfig)==null?void 0:e.onRefresh)&&((a=(o=p.tableConfig).onRefresh)==null||a.call(o)),H("refresh")};return N(g,A(()=>{T()},100)),(e,o)=>{const a=J,c=G,u=D,l=q,b=L,d=I,m=S;return r(),h("div",Q,[n(c,{class:"base-page-filter",ref_key:"baseFilterRef",ref:g},{default:s(()=>[e.$slots.filter?f("",!0):(r(),y(a,P(B({key:0},t.filterConfig)),null,16)),_(e.$slots,"filter",{},void 0,!0)]),_:3},512),n(c,{class:"base-page-table"},{title:s(()=>[e.$slots.buttons?(r(),h("div",W,F(t.tableTitle),1)):f("",!0),$("div",X,[$("div",null,[e.$slots.buttons?f("",!0):(r(),h(j,{key:0},[M(F(t.tableTitle),1)],64)),_(e.$slots,"buttons",{},void 0,!0)]),n(d,{size:6},{default:s(()=>[n(l,{placement:"top",content:"\u5237\u65B0"},{default:s(()=>[n(u,{icon:"refresh",size:18,hover:"",class:"mr10 pointer",onClick:w})]),_:1}),n(l,{placement:"top",content:"\u5BFC\u51FA"},{default:s(()=>[n(u,{icon:"svg-export",size:18,hover:"",class:"mr10 pointer"})]),_:1}),n(l,{placement:"top",content:"\u5217\u8BBE\u7F6E"},{default:s(()=>[n(b,{tableColumns:t.tableConfig.columns,"onUpdate:tableColumns":o[0]||(o[0]=i=>t.tableConfig.columns=i),filterColumns:t.filterConfig.columns,"onUpdate:filterColumns":o[1]||(o[1]=i=>t.filterConfig.columns=i)},null,8,["tableColumns","filterColumns"])]),_:1})]),_:1})])]),default:s(()=>[_(e.$slots,"table",{},void 0,!0),e.$slots.table?f("",!0):(r(),y(m,B({key:0},t.tableConfig,{"max-height":C.value}),{tableColumn:s(({scope:i,column:R})=>[_(e.$slots,"tableColumn",{scope:i,column:R},void 0,!0)]),_:3},16,["max-height"]))]),_:3})])}}});const ie=U(Y,[["__scopeId","data-v-206939cc"]]);export{ie as _};