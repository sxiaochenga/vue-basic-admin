import{d as S,r as N,x as f,g as i,b8 as _,b9 as h,V as v,o as z,c as w,t as B,E,ba as k,bb as T}from"./index-e4882791.js";const C=S({__name:"index",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2023},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(s){return s>=0}},separator:{type:String,default:","},prefix:{type:String,default:""},suffix:{type:String,default:""},transition:{type:String,default:"linear"},size:{type:Number,default:16},color:{type:String,default:"inherit"}},setup(s,{expose:m}){const t=s,a=N(t.startVal);let o=null;const u=f(()=>b(i(o))),y=f(()=>({color:t.color,fontSize:t.size+"px"})),p=()=>{c(),a.value=t.endVal},c=()=>{a.value=t.startVal,o=k(a,{duration:t.duration,transition:T[t.transition]})},b=e=>{if(!e&&e!==0)return"";const{decimals:l,separator:n,suffix:V,prefix:x}=t;e=Number(e).toFixed(l)+"";let r=e.split(".")[0];const g=l>0?"."+e.split(".")[1]:"",d=/(\d+)(\d{3})/;if(n&&!_(n))for(;d.test(r);)r=r.replace(d,"$1"+n+"$2");return x+r+g+V};return h(()=>{a.value=t.startVal}),v([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&p()},{immediate:!0}),m({value:u,start:p,reset:c}),(e,l)=>(z(),w("span",{style:E(i(y))},B(i(u)),5))}});export{C as _};
