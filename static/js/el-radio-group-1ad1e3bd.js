import{n as E,am as z,an as S,R as $,z as h,T as w,bB as j,r as B,v as O,x as v,U as X,ap as x,d as y,y as k,o as I,c as G,e as g,au as C,dA as N,g as e,av as P,D as b,C as V,h as D,t as T,b7 as A,G as _,a6 as F,E as J,a8 as Q,aq as Y,at as Z,a1 as ee,I as ae,b as oe,X as le,V as se,W as ne,H as te,ae as K}from"./index-e4882791.js";const M=Symbol("radioGroupKey"),U=E({size:z,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),re=E({...U,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),L={[S]:s=>$(s)||h(s)||w(s),[j]:s=>$(s)||h(s)||w(s)},q=(s,c)=>{const n=B(),o=O(M,void 0),d=v(()=>!!o),m=v({get(){return d.value?o.modelValue:s.modelValue},set(i){d.value?o.changeEvent(i):c&&c(S,i),n.value.checked=s.modelValue===s.label}}),r=X(v(()=>o==null?void 0:o.size)),u=x(v(()=>o==null?void 0:o.disabled)),l=B(!1),p=v(()=>u.value||d.value&&m.value!==s.label?-1:0);return{radioRef:n,isGroup:d,radioGroup:o,focus:l,size:r,disabled:u,tabIndex:p,modelValue:m}},ie=["value","name","disabled"],de=y({name:"ElRadio"}),ue=y({...de,props:re,emits:L,setup(s,{emit:c}){const n=s,o=k("radio"),{radioRef:d,radioGroup:m,focus:r,size:u,disabled:l,modelValue:p}=q(n,c);function i(){F(()=>c("change",p.value))}return(a,t)=>{var f;return I(),G("label",{class:b([e(o).b(),e(o).is("disabled",e(l)),e(o).is("focus",e(r)),e(o).is("bordered",a.border),e(o).is("checked",e(p)===a.label),e(o).m(e(u))])},[g("span",{class:b([e(o).e("input"),e(o).is("disabled",e(l)),e(o).is("checked",e(p)===a.label)])},[C(g("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":t[0]||(t[0]=R=>P(p)?p.value=R:null),class:b(e(o).e("original")),value:a.label,name:a.name||((f=e(m))==null?void 0:f.name),disabled:e(l),type:"radio",onFocus:t[1]||(t[1]=R=>r.value=!0),onBlur:t[2]||(t[2]=R=>r.value=!1),onChange:i},null,42,ie),[[N,e(p)]]),g("span",{class:b(e(o).e("inner"))},null,2)],2),g("span",{class:b(e(o).e("label")),onKeydown:t[3]||(t[3]=A(()=>{},["stop"]))},[V(a.$slots,"default",{},()=>[D(T(a.label),1)])],34)],2)}}});var pe=_(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ce=E({...U,name:{type:String,default:""}}),me=["value","name","disabled"],be=y({name:"ElRadioButton"}),fe=y({...be,props:ce,setup(s){const c=s,n=k("radio"),{radioRef:o,focus:d,size:m,disabled:r,modelValue:u,radioGroup:l}=q(c),p=v(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(i,a)=>{var t;return I(),G("label",{class:b([e(n).b("button"),e(n).is("active",e(u)===i.label),e(n).is("disabled",e(r)),e(n).is("focus",e(d)),e(n).bm("button",e(m))])},[C(g("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=f=>P(u)?u.value=f:null),class:b(e(n).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((t=e(l))==null?void 0:t.name),disabled:e(r),onFocus:a[1]||(a[1]=f=>d.value=!0),onBlur:a[2]||(a[2]=f=>d.value=!1)},null,42,me),[[N,e(u)]]),g("span",{class:b(e(n).be("button","inner")),style:J(e(u)===i.label?e(p):{}),onKeydown:a[3]||(a[3]=A(()=>{},["stop"]))},[V(i.$slots,"default",{},()=>[D(T(i.label),1)])],38)],2)}}});var H=_(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ve=E({id:{type:String,default:void 0},size:z,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=L,ye=["id","aria-label","aria-labelledby"],Ee=y({name:"ElRadioGroup"}),Re=y({...Ee,props:ve,emits:ge,setup(s,{emit:c}){const n=s,o=k("radio"),d=Q(),m=B(),{formItem:r}=Y(),{inputId:u,isLabeledByFormItem:l}=Z(n,{formItemContext:r}),p=a=>{c(S,a),F(()=>c("change",a))};ee(()=>{const a=m.value.querySelectorAll("[type=radio]"),t=a[0];!Array.from(a).some(f=>f.checked)&&t&&(t.tabIndex=0)});const i=v(()=>n.name||d.value);return ae(M,oe({...le(n),changeEvent:p,name:i})),se(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(a=>ne()))}),(a,t)=>(I(),G("div",{id:e(u),ref_key:"radioGroupRef",ref:m,class:b(e(o).b("group")),role:"radiogroup","aria-label":e(l)?void 0:a.label||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[V(a.$slots,"default")],10,ye))}});var W=_(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Se=te(pe,{RadioButton:H,RadioGroup:W}),ke=K(W),Ie=K(H);export{Ie as E,ke as a,Se as b};
