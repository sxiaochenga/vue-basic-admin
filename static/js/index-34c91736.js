import{d as s,x as n,o as i,A as p,w as r,B as l,ai as g,bE as m,g as f,ac as y,F as c}from"./index-b24fdcf6.js";const h=s({name:"ElCollapseTransition"}),T=s({...h,setup(o){const d=n("collapse-transition"),e={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,_)=>(i(),p(y,g({name:f(d).b()},m(e)),{default:r(()=>[l(t.$slots,"default")]),_:3},16,["name"]))}});var a=c(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);a.install=o=>{o.component(a.name,a)};const B=a;export{B as _};
