import{aC as nn,S as Tl,bN as tn,M as Ll,O as El,bO as on,v as ke,x as w,as as Fe,bP as U,V as W,g as K,ar as He,d as fe,y as ce,b as de,X as Oe,a2 as an,a6 as $,G as we,au as Se,bt as yl,o as A,c as R,C as me,e as z,t as ie,D as V,b7 as oe,r as F,a1 as Te,a4 as Ul,E as ve,be as Cl,bD as rn,bQ as Ml,aq as sn,U as un,W as dn,Z as ml,bR as Ce,bS as cn,bT as dl,bl as Al,A as Il,an as Q,bU as fn,bk as pn,bV as vn,bB as Ql,bi as mn,aV as gn,aU as bn,bj as hn,bs as yn,bA as Cn,a_ as Sn,bz as Pl,bd as On,bn as wn,bW as Tn,I as Xl,bX as ue,bY as Ln,f as Y,w as D,B as Z,a5 as cl,aM as Vl,ac as j,ad as En,bp as G,bZ as Mn,aL as An,F as $l,H as In,ae as Zl,b_ as Bl,bG as Kl,aF as Pn,b4 as Vn,b$ as Nl,aP as Dl,c0 as $n,c1 as Bn}from"./index-e4882791.js";import{E as Kn,t as Nn}from"./el-tag-aca14402.js";import{_ as gl}from"./el-tree-aa5de74e.js";import{p as Re}from"./el-checkbox-47184759.js";import{U as kl,h as Fl,d as Rl,f as ql,S as fl,j as Dn}from"./_Uint8Array-4716b191.js";var kn="__lodash_hash_undefined__";function Fn(e){return this.__data__.set(e,kn),this}function Rn(e){return this.__data__.has(e)}function qe(e){var l=-1,t=e==null?0:e.length;for(this.__data__=new nn;++l<t;)this.add(e[l])}qe.prototype.add=qe.prototype.push=Fn;qe.prototype.has=Rn;function qn(e,l){for(var t=-1,u=e==null?0:e.length;++t<u;)if(l(e[t],t,e))return!0;return!1}function zn(e,l){return e.has(l)}var Wn=1,Hn=2;function Yl(e,l,t,u,f,r){var i=t&Wn,d=e.length,c=l.length;if(d!=c&&!(i&&c>d))return!1;var y=r.get(e),s=r.get(l);if(y&&s)return y==l&&s==e;var p=-1,v=!0,h=t&Hn?new qe:void 0;for(r.set(e,l),r.set(l,e);++p<d;){var o=e[p],g=l[p];if(u)var C=i?u(g,o,p,l,e,r):u(o,g,p,e,l,r);if(C!==void 0){if(C)continue;v=!1;break}if(h){if(!qn(l,function(S,m){if(!zn(h,m)&&(o===S||f(o,S,t,u,r)))return h.push(m)})){v=!1;break}}else if(!(o===g||f(o,g,t,u,r))){v=!1;break}}return r.delete(e),r.delete(l),v}function jn(e){var l=-1,t=Array(e.size);return e.forEach(function(u,f){t[++l]=[f,u]}),t}function Gn(e){var l=-1,t=Array(e.size);return e.forEach(function(u){t[++l]=u}),t}var Un=1,Qn=2,Xn="[object Boolean]",Zn="[object Date]",Yn="[object Error]",Jn="[object Map]",xn="[object Number]",_n="[object RegExp]",et="[object Set]",lt="[object String]",nt="[object Symbol]",tt="[object ArrayBuffer]",ot="[object DataView]",zl=Tl?Tl.prototype:void 0,pl=zl?zl.valueOf:void 0;function it(e,l,t,u,f,r,i){switch(t){case ot:if(e.byteLength!=l.byteLength||e.byteOffset!=l.byteOffset)return!1;e=e.buffer,l=l.buffer;case tt:return!(e.byteLength!=l.byteLength||!r(new kl(e),new kl(l)));case Xn:case Zn:case xn:return tn(+e,+l);case Yn:return e.name==l.name&&e.message==l.message;case _n:case lt:return e==l+"";case Jn:var d=jn;case et:var c=u&Un;if(d||(d=Gn),e.size!=l.size&&!c)return!1;var y=i.get(e);if(y)return y==l;u|=Qn,i.set(e,l);var s=Yl(d(e),d(l),u,f,r,i);return i.delete(e),s;case nt:if(pl)return pl.call(e)==pl.call(l)}return!1}var at=1,rt=Object.prototype,st=rt.hasOwnProperty;function ut(e,l,t,u,f,r){var i=t&at,d=Fl(e),c=d.length,y=Fl(l),s=y.length;if(c!=s&&!i)return!1;for(var p=c;p--;){var v=d[p];if(!(i?v in l:st.call(l,v)))return!1}var h=r.get(e),o=r.get(l);if(h&&o)return h==l&&o==e;var g=!0;r.set(e,l),r.set(l,e);for(var C=i;++p<c;){v=d[p];var S=e[v],m=l[v];if(u)var T=i?u(m,S,v,l,e,r):u(S,m,v,e,l,r);if(!(T===void 0?S===m||f(S,m,t,u,r):T)){g=!1;break}C||(C=v=="constructor")}if(g&&!C){var E=e.constructor,M=l.constructor;E!=M&&"constructor"in e&&"constructor"in l&&!(typeof E=="function"&&E instanceof E&&typeof M=="function"&&M instanceof M)&&(g=!1)}return r.delete(e),r.delete(l),g}var dt=1,Wl="[object Arguments]",Hl="[object Array]",Ke="[object Object]",ct=Object.prototype,jl=ct.hasOwnProperty;function ft(e,l,t,u,f,r){var i=Ll(e),d=Ll(l),c=i?Hl:Rl(e),y=d?Hl:Rl(l);c=c==Wl?Ke:c,y=y==Wl?Ke:y;var s=c==Ke,p=y==Ke,v=c==y;if(v&&ql(e)){if(!ql(l))return!1;i=!0,s=!1}if(v&&!s)return r||(r=new fl),i||Dn(e)?Yl(e,l,t,u,f,r):it(e,l,c,t,u,f,r);if(!(t&dt)){var h=s&&jl.call(e,"__wrapped__"),o=p&&jl.call(l,"__wrapped__");if(h||o){var g=h?e.value():e,C=o?l.value():l;return r||(r=new fl),f(g,C,t,u,r)}}return v?(r||(r=new fl),ut(e,l,t,u,f,r)):!1}function Jl(e,l,t,u,f){return e===l?!0:e==null||l==null||!El(e)&&!El(l)?e!==e&&l!==l:ft(e,l,t,u,Jl,f)}function bl(e,l){return Jl(e,l)}const pt=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),vt=e=>on[e||"default"],mt=e=>({focus:()=>{var l,t;(t=(l=e.value)==null?void 0:l.focus)==null||t.call(l)}}),xl="ElSelectGroup",je="ElSelect";function gt(e,l){const t=ke(je),u=ke(xl,{disabled:!1}),f=w(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),r=w(()=>t.props.multiple?p(t.props.modelValue,e.value):v(e.value,t.props.modelValue)),i=w(()=>{if(t.props.multiple){const g=t.props.modelValue||[];return!r.value&&g.length>=t.props.multipleLimit&&t.props.multipleLimit>0}else return!1}),d=w(()=>e.label||(f.value?"":e.value)),c=w(()=>e.value||e.label||""),y=w(()=>e.disabled||l.groupDisabled||i.value),s=He(),p=(g=[],C)=>{if(f.value){const S=t.props.valueKey;return g&&g.some(m=>Fe(U(m,S))===U(C,S))}else return g&&g.includes(C)},v=(g,C)=>{if(f.value){const{valueKey:S}=t.props;return U(g,S)===U(C,S)}else return g===C},h=()=>{!e.disabled&&!u.disabled&&(t.hoverIndex=t.optionsArray.indexOf(s.proxy))};W(()=>d.value,()=>{!e.created&&!t.props.remote&&t.setSelected()}),W(()=>e.value,(g,C)=>{const{remote:S,valueKey:m}=t.props;if(Object.is(g,C)||(t.onOptionDestroy(C,s.proxy),t.onOptionCreate(s.proxy)),!e.created&&!S){if(m&&typeof g=="object"&&typeof C=="object"&&g[m]===C[m])return;t.setSelected()}}),W(()=>u.disabled,()=>{l.groupDisabled=u.disabled},{immediate:!0});const{queryChange:o}=Fe(t);return W(o,g=>{const{query:C}=K(g),S=new RegExp(pt(C),"i");l.visible=S.test(d.value)||e.created,l.visible||t.filteredOptionsCount--}),{select:t,currentLabel:d,currentValue:c,itemSelected:r,isDisabled:y,hoverItem:h}}const bt=fe({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ce("select"),t=de({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:u,itemSelected:f,isDisabled:r,select:i,hoverItem:d}=gt(e,t),{visible:c,hover:y}=Oe(t),s=He().proxy;i.onOptionCreate(s),an(()=>{const v=s.value,{selected:h}=i,g=(i.props.multiple?h:[h]).some(C=>C.value===s.value);$(()=>{i.cachedOptions.get(v)===s&&!g&&i.cachedOptions.delete(v)}),i.onOptionDestroy(v,s)});function p(){e.disabled!==!0&&t.groupDisabled!==!0&&i.handleOptionSelect(s,!0)}return{ns:l,currentLabel:u,itemSelected:f,isDisabled:r,select:i,hoverItem:d,visible:c,hover:y,selectOptionClick:p,states:t}}});function ht(e,l,t,u,f,r){return Se((A(),R("li",{class:V([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...i)=>e.hoverItem&&e.hoverItem(...i)),onClick:l[1]||(l[1]=oe((...i)=>e.selectOptionClick&&e.selectOptionClick(...i),["stop"]))},[me(e.$slots,"default",{},()=>[z("span",null,ie(e.currentLabel),1)])],34)),[[yl,e.visible]])}var Sl=we(bt,[["render",ht],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const yt=fe({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ke(je),l=ce("select"),t=w(()=>e.props.popperClass),u=w(()=>e.props.multiple),f=w(()=>e.props.fitInputWidth),r=F("");function i(){var d;r.value=`${(d=e.selectWrapper)==null?void 0:d.offsetWidth}px`}return Te(()=>{i(),Ul(e.selectWrapper,i)}),{ns:l,minWidth:r,popperClass:t,isMultiple:u,isFitInputWidth:f}}});function Ct(e,l,t,u,f,r){return A(),R("div",{class:V([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ve({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[me(e.$slots,"default")],6)}var St=we(yt,[["render",Ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function Ot(e){const{t:l}=Cl();return de({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const wt=(e,l,t)=>{const{t:u}=Cl(),f=ce("select");rn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},w(()=>e.suffixTransition===!1));const r=F(null),i=F(null),d=F(null),c=F(null),y=F(null),s=F(null),p=F(-1),v=Ml({query:""}),h=Ml(""),{form:o,formItem:g}=sn(),C=w(()=>!e.filterable||e.multiple||!l.visible),S=w(()=>e.disabled||(o==null?void 0:o.disabled)),m=w(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!S.value&&l.inputHovering&&n}),T=w(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),E=w(()=>f.is("reverse",T.value&&l.visible&&e.suffixTransition)),M=w(()=>e.remote?300:0),I=w(()=>e.loading?e.loadingText||u("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||u("el.select.noMatch"):l.options.size===0?e.noDataText||u("el.select.noData"):null),L=w(()=>Array.from(l.options.values())),N=w(()=>Array.from(l.cachedOptions.values())),P=w(()=>{const n=L.value.filter(a=>!a.created).some(a=>a.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),k=un(),J=w(()=>["small"].includes(k.value)?"small":"default"),Ge=w({get(){return l.visible&&I.value!==!1},set(n){l.visible=n}});W([()=>S.value,()=>k.value,()=>o==null?void 0:o.size],()=>{$(()=>{X()})}),W(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),W(()=>e.modelValue,(n,a)=>{e.multiple&&(X(),n&&n.length>0||i.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",_(l.query))),ge(),e.filterable&&!e.multiple&&(l.inputLength=20),!bl(n,a)&&e.validateEvent&&(g==null||g.validate("change").catch(b=>dn()))},{flush:"post",deep:!0}),W(()=>l.visible,n=>{var a,b,O;n?((b=(a=d.value)==null?void 0:a.updatePopper)==null||b.call(a),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(O=i.value)==null||O.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),_(l.query),!e.multiple&&!e.remote&&(v.value.query="",Ce(v),Ce(h)))):(e.filterable&&(ml(e.filterMethod)&&e.filterMethod(),ml(e.remoteMethod)&&e.remoteMethod()),i.value&&i.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ue(),$(()=>{i.value&&i.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",n)}),W(()=>l.options.entries(),()=>{var n,a,b;if(!cn)return;(a=(n=d.value)==null?void 0:n.updatePopper)==null||a.call(n),e.multiple&&X();const O=((b=y.value)==null?void 0:b.querySelectorAll("input"))||[];Array.from(O).includes(document.activeElement)||ge(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ee()},{flush:"post"}),W(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1?p.value=L.value[n]||{}:p.value={},L.value.forEach(a=>{a.hover=p.value===a})});const X=()=>{e.collapseTags&&!e.filterable||$(()=>{var n,a;if(!r.value)return;const b=r.value.$el.querySelector("input"),O=c.value,B=vt(k.value||(o==null?void 0:o.size));b.style.height=`${(l.selected.length===0?B:Math.max(O?O.clientHeight+(O.clientHeight>B?6:0):0,B))-2}px`,l.tagInMultiLine=Number.parseFloat(b.style.height)>=B,l.visible&&I.value!==!1&&((a=(n=d.value)==null?void 0:n.updatePopper)==null||a.call(n))})},_=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,$(()=>{var a,b;l.visible&&((b=(a=d.value)==null?void 0:a.updatePopper)==null||b.call(a))}),l.hoverIndex=-1,e.multiple&&e.filterable&&$(()=>{const a=i.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,a):a,Le(),X()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),Ce(h)):(l.filteredOptionsCount=l.optionsCount,v.value.query=n,Ce(v),Ce(h)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await $(),Ee())}},Le=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=i.value.value?"":l.cachedPlaceHolder)},Ee=()=>{const n=L.value.filter(O=>O.visible&&!O.disabled&&!O.states.groupDisabled),a=n.find(O=>O.created),b=n[0];l.hoverIndex=be(L.value,a||b)},ge=()=>{var n;if(e.multiple)l.selectedLabel="";else{const b=Me(e.modelValue);(n=b.props)!=null&&n.created?(l.createdLabel=b.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=b.currentLabel,l.selected=b,e.filterable&&(l.query=l.selectedLabel);return}const a=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(b=>{a.push(Me(b))}),l.selected=a,$(()=>{X()})},Me=n=>{let a;const b=dl(n).toLowerCase()==="object",O=dl(n).toLowerCase()==="null",B=dl(n).toLowerCase()==="undefined";for(let x=l.cachedOptions.size-1;x>=0;x--){const q=N.value[x];if(b?U(q.value,e.valueKey)===U(n,e.valueKey):q.value===n){a={value:n,currentLabel:q.currentLabel,isDisabled:q.isDisabled};break}}if(a)return a;const ne=b?n.label:!O&&!B?n:"",te={value:n,currentLabel:ne};return e.multiple&&(te.hitState=!1),te},Ue=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(a=>L.value.findIndex(b=>U(b,n)===U(a,n)))):l.hoverIndex=-1:l.hoverIndex=L.value.findIndex(a=>ye(a)===ye(l.selected))},300)},Qe=()=>{var n,a;Xe(),(a=(n=d.value)==null?void 0:n.updatePopper)==null||a.call(n),e.multiple&&!e.filterable&&X()},Xe=()=>{var n;l.inputWidth=(n=r.value)==null?void 0:n.$el.getBoundingClientRect().width},Ze=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,_(l.query))},Ye=Al(()=>{Ze()},M.value),Je=Al(n=>{_(n.target.value)},M.value),ae=n=>{bl(e.modelValue,n)||t.emit(Ql,n)},xe=n=>{if(n.target.value.length<=0&&!he()){const a=e.modelValue.slice();a.pop(),t.emit(Q,a),ae(a)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},_e=(n,a)=>{const b=l.selected.indexOf(a);if(b>-1&&!S.value){const O=e.modelValue.slice();O.splice(b,1),t.emit(Q,O),ae(O),t.emit("remove-tag",a.value)}n.stopPropagation()},re=n=>{n.stopPropagation();const a=e.multiple?[]:"";if(typeof a!="string")for(const b of l.selected)b.isDisabled&&a.push(b.value);t.emit(Q,a),ae(a),l.hoverIndex=-1,l.visible=!1,t.emit("clear")},Ae=(n,a)=>{var b;if(e.multiple){const O=(e.modelValue||[]).slice(),B=be(O,n.value);B>-1?O.splice(B,1):(e.multipleLimit<=0||O.length<e.multipleLimit)&&O.push(n.value),t.emit(Q,O),ae(O),n.created&&(l.query="",_(""),l.inputLength=20),e.filterable&&((b=i.value)==null||b.focus())}else t.emit(Q,n.value),ae(n.value),l.visible=!1;l.isSilentBlur=a,el(),!l.visible&&$(()=>{ee(n)})},be=(n=[],a)=>{if(!Il(a))return n.indexOf(a);const b=e.valueKey;let O=-1;return n.some((B,ne)=>Fe(U(B,b))===U(a,b)?(O=ne,!0):!1),O},el=()=>{l.softFocus=!0;const n=i.value||r.value;n&&(n==null||n.focus())},ee=n=>{var a,b,O,B,ne;const te=Array.isArray(n)?n[0]:n;let x=null;if(te!=null&&te.value){const q=L.value.filter(Be=>Be.value===te.value);q.length>0&&(x=q[0].$el)}if(d.value&&x){const q=(B=(O=(b=(a=d.value)==null?void 0:a.popperRef)==null?void 0:b.contentRef)==null?void 0:O.querySelector)==null?void 0:B.call(O,`.${f.be("dropdown","wrap")}`);q&&fn(q,x)}(ne=s.value)==null||ne.handleScroll()},ll=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},nl=(n,a)=>{l.options.get(n)===a&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},tl=n=>{n.code!==pn.backspace&&he(!1),l.inputLength=i.value.value.length*15+20,X()},he=n=>{if(!Array.isArray(l.selected))return;const a=l.selected[l.selected.length-1];if(!!a)return n===!0||n===!1?(a.hitState=n,n):(a.hitState=!a.hitState,a.hitState)},ol=n=>{const a=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,$(()=>_(a));else{const b=a[a.length-1]||"";l.isOnComposition=!vn(b)}},il=()=>{$(()=>ee(l.selected))},le=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",n))},Ie=()=>{var n;l.visible=!1,(n=r.value)==null||n.blur()},al=n=>{$(()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",n)}),l.softFocus=!1},Pe=n=>{re(n)},rl=()=>{l.visible=!1},sl=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ve=n=>{var a;n&&!l.mouseEnter||S.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!d.value||!d.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((a=i.value||r.value)==null||a.focus()))},$e=()=>{l.visible?L.value[l.hoverIndex]&&Ae(L.value[l.hoverIndex],void 0):Ve()},ye=n=>Il(n.value)?U(n.value,e.valueKey):n.value,ul=w(()=>L.value.filter(n=>n.visible).every(n=>n.disabled)),pe=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ul.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const a=L.value[l.hoverIndex];(a.disabled===!0||a.states.groupDisabled===!0||!a.visible)&&pe(n),$(()=>ee(p.value))}};return{optionsArray:L,selectSize:k,handleResize:Qe,debouncedOnInputChange:Ye,debouncedQueryChange:Je,deletePrevTag:xe,deleteTag:_e,deleteSelected:re,handleOptionSelect:Ae,scrollToOption:ee,readonly:C,resetInputHeight:X,showClose:m,iconComponent:T,iconReverse:E,showNewOption:P,collapseTagSize:J,setSelected:ge,managePlaceholder:Le,selectDisabled:S,emptyText:I,toggleLastOptionHitState:he,resetInputState:tl,handleComposition:ol,onOptionCreate:ll,onOptionDestroy:nl,handleMenuEnter:il,handleFocus:le,blur:Ie,handleBlur:al,handleClearClick:Pe,handleClose:rl,handleKeydownEscape:sl,toggleMenu:Ve,selectOption:$e,getValueKey:ye,navigateOptions:pe,dropMenuVisible:Ge,queryChange:v,groupQueryChange:h,reference:r,input:i,tooltipRef:d,tags:c,selectWrapper:y,scrollbar:s,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}},Gl="ElSelect",Tt=fe({name:Gl,componentName:Gl,components:{ElInput:mn,ElSelectMenu:St,ElOption:Sl,ElTag:Kn,ElScrollbar:gn,ElTooltip:bn,ElIcon:hn},directives:{ClickOutside:yn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Cn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Sn.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Pl,default:On},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:Pl,default:wn},tagType:{...Nn.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Tn,default:"bottom-start"}},emits:[Q,Ql,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=ce("select"),u=ce("input"),{t:f}=Cl(),r=Ot(e),{optionsArray:i,selectSize:d,readonly:c,handleResize:y,collapseTagSize:s,debouncedOnInputChange:p,debouncedQueryChange:v,deletePrevTag:h,deleteTag:o,deleteSelected:g,handleOptionSelect:C,scrollToOption:S,setSelected:m,resetInputHeight:T,managePlaceholder:E,showClose:M,selectDisabled:I,iconComponent:L,iconReverse:N,showNewOption:P,emptyText:k,toggleLastOptionHitState:J,resetInputState:Ge,handleComposition:X,onOptionCreate:_,onOptionDestroy:Le,handleMenuEnter:Ee,handleFocus:ge,blur:Me,handleBlur:Ue,handleClearClick:Qe,handleClose:Xe,handleKeydownEscape:Ze,toggleMenu:Ye,selectOption:Je,getValueKey:ae,navigateOptions:xe,dropMenuVisible:_e,reference:re,input:Ae,tooltipRef:be,tags:el,selectWrapper:ee,scrollbar:ll,queryChange:nl,groupQueryChange:tl,handleMouseEnter:he,handleMouseLeave:ol}=wt(e,r,l),{focus:il}=mt(re),{inputWidth:le,selected:Ie,inputLength:al,filteredOptionsCount:Pe,visible:rl,softFocus:sl,selectedLabel:Ve,hoverIndex:$e,query:ye,inputHovering:ul,currentPlaceholder:pe,menuVisibleOnFocus:Ol,isOnComposition:wl,isSilentBlur:n,options:a,cachedOptions:b,optionsCount:O,prefixWidth:B,tagInMultiLine:ne}=Oe(r),te=w(()=>{const H=[t.b()],se=K(d);return se&&H.push(t.m(se)),e.disabled&&H.push(t.m("disabled")),H}),x=w(()=>({maxWidth:`${K(le)-32}px`,width:"100%"})),q=w(()=>({maxWidth:`${K(le)>123?K(le)-123:K(le)-75}px`}));Xl(je,de({props:e,options:a,optionsArray:i,cachedOptions:b,optionsCount:O,filteredOptionsCount:Pe,hoverIndex:$e,handleOptionSelect:C,onOptionCreate:_,onOptionDestroy:Le,selectWrapper:ee,selected:Ie,setSelected:m,queryChange:nl,groupQueryChange:tl})),Te(()=>{r.cachedPlaceHolder=pe.value=e.placeholder||f("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(pe.value=""),Ul(ee,y),e.remote&&e.multiple&&T(),$(()=>{const H=re.value&&re.value.$el;if(!!H&&(le.value=H.getBoundingClientRect().width,l.slots.prefix)){const se=H.querySelector(`.${u.e("prefix")}`);B.value=Math.max(se.getBoundingClientRect().width+5,30)}}),m()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(Q,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(Q,"");const Be=w(()=>{var H,se;return(se=(H=be.value)==null?void 0:H.popperRef)==null?void 0:se.contentRef});return{tagInMultiLine:ne,prefixWidth:B,selectSize:d,readonly:c,handleResize:y,collapseTagSize:s,debouncedOnInputChange:p,debouncedQueryChange:v,deletePrevTag:h,deleteTag:o,deleteSelected:g,handleOptionSelect:C,scrollToOption:S,inputWidth:le,selected:Ie,inputLength:al,filteredOptionsCount:Pe,visible:rl,softFocus:sl,selectedLabel:Ve,hoverIndex:$e,query:ye,inputHovering:ul,currentPlaceholder:pe,menuVisibleOnFocus:Ol,isOnComposition:wl,isSilentBlur:n,options:a,resetInputHeight:T,managePlaceholder:E,showClose:M,selectDisabled:I,iconComponent:L,iconReverse:N,showNewOption:P,emptyText:k,toggleLastOptionHitState:J,resetInputState:Ge,handleComposition:X,handleMenuEnter:Ee,handleFocus:ge,blur:Me,handleBlur:Ue,handleClearClick:Qe,handleClose:Xe,handleKeydownEscape:Ze,toggleMenu:Ye,selectOption:Je,getValueKey:ae,navigateOptions:xe,dropMenuVisible:_e,focus:il,reference:re,input:Ae,tooltipRef:be,popperPaneRef:Be,tags:el,selectWrapper:ee,scrollbar:ll,wrapperKls:te,selectTagsStyle:x,nsSelect:t,tagTextStyle:q,handleMouseEnter:he,handleMouseLeave:ol}}}),Lt=["disabled","autocomplete"],Et={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Mt(e,l,t,u,f,r){const i=ue("el-tag"),d=ue("el-tooltip"),c=ue("el-icon"),y=ue("el-input"),s=ue("el-option"),p=ue("el-scrollbar"),v=ue("el-select-menu"),h=Ln("click-outside");return Se((A(),R("div",{ref:"selectWrapper",class:V(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...o)=>e.handleMouseEnter&&e.handleMouseEnter(...o)),onMouseleave:l[23]||(l[23]=(...o)=>e.handleMouseLeave&&e.handleMouseLeave(...o)),onClick:l[24]||(l[24]=oe((...o)=>e.toggleMenu&&e.toggleMenu(...o),["stop"]))},[Y(d,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:D(()=>[z("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=o=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=o=>e.inputHovering=!1)},[e.multiple?(A(),R("div",{key:0,ref:"tags",class:V(e.nsSelect.e("tags")),style:ve(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(A(),R("span",{key:0,class:V([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[Y(i,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=o=>e.deleteTag(o,e.selected[0]))},{default:D(()=>[z("span",{class:V(e.nsSelect.e("tags-text")),style:ve(e.tagTextStyle)},ie(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(A(),Z(i,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:D(()=>[e.collapseTagsTooltip?(A(),Z(d,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:D(()=>[z("span",{class:V(e.nsSelect.e("tags-text"))},"+ "+ie(e.selected.length-1),3)]),content:D(()=>[z("div",{class:V(e.nsSelect.e("collapse-tags"))},[(A(!0),R(cl,null,Vl(e.selected.slice(1),(o,g)=>(A(),R("div",{key:g,class:V(e.nsSelect.e("collapse-tag"))},[(A(),Z(i,{key:e.getValueKey(o),class:"in-tooltip",closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:C=>e.deleteTag(C,o)},{default:D(()=>[z("span",{class:V(e.nsSelect.e("tags-text")),style:ve({maxWidth:e.inputWidth-75+"px"})},ie(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(A(),R("span",{key:1,class:V(e.nsSelect.e("tags-text"))},"+ "+ie(e.selected.length-1),3))]),_:1},8,["size","type"])):j("v-if",!0)],2)):j("v-if",!0),j(" <div> "),e.collapseTags?j("v-if",!0):(A(),Z(En,{key:1,onAfterLeave:e.resetInputHeight},{default:D(()=>[z("span",{class:V([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(A(!0),R(cl,null,Vl(e.selected,o=>(A(),Z(i,{key:e.getValueKey(o),closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,hit:o.hitState,type:e.tagType,"disable-transitions":"",onClose:g=>e.deleteTag(g,o)},{default:D(()=>[z("span",{class:V(e.nsSelect.e("tags-text")),style:ve({maxWidth:e.inputWidth-75+"px"})},ie(o.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),j(" </div> "),e.filterable?Se((A(),R("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=o=>e.query=o),type:"text",class:V([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ve({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:l[3]||(l[3]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onKeyup:l[4]||(l[4]=(...o)=>e.managePlaceholder&&e.managePlaceholder(...o)),onKeydown:[l[5]||(l[5]=(...o)=>e.resetInputState&&e.resetInputState(...o)),l[6]||(l[6]=G(oe(o=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=G(oe(o=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=G((...o)=>e.handleKeydownEscape&&e.handleKeydownEscape(...o),["esc"])),l[9]||(l[9]=G(oe((...o)=>e.selectOption&&e.selectOption(...o),["stop","prevent"]),["enter"])),l[10]||(l[10]=G((...o)=>e.deletePrevTag&&e.deletePrevTag(...o),["delete"])),l[11]||(l[11]=G(o=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionupdate:l[13]||(l[13]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onCompositionend:l[14]||(l[14]=(...o)=>e.handleComposition&&e.handleComposition(...o)),onInput:l[15]||(l[15]=(...o)=>e.debouncedQueryChange&&e.debouncedQueryChange(...o))},null,46,Lt)),[[Mn,e.query]]):j("v-if",!0)],6)):j("v-if",!0),Y(y,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=o=>e.selectedLabel=o),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:V([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=G(oe(o=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=G(oe(o=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),G(oe(e.selectOption,["stop","prevent"]),["enter"]),G(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=G(o=>e.visible=!1,["tab"]))]},An({suffix:D(()=>[e.iconComponent&&!e.showClose?(A(),Z(c,{key:0,class:V([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:D(()=>[(A(),Z($l(e.iconComponent)))]),_:1},8,["class"])):j("v-if",!0),e.showClose&&e.clearIcon?(A(),Z(c,{key:1,class:V([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:D(()=>[(A(),Z($l(e.clearIcon)))]),_:1},8,["class","onClick"])):j("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:D(()=>[z("div",Et,[me(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:D(()=>[Y(v,null,{default:D(()=>[Se(Y(p,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:V([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:D(()=>[e.showNewOption?(A(),Z(s,{key:0,value:e.query,created:!0},null,8,["value"])):j("v-if",!0),me(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[yl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(A(),R(cl,{key:0},[e.$slots.empty?me(e.$slots,"empty",{key:0}):(A(),R("p",{key:1,class:V(e.nsSelect.be("dropdown","empty"))},ie(e.emptyText),3))],64)):j("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[h,e.handleClose,e.popperPaneRef]])}var At=we(Tt,[["render",Mt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const It=fe({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ce("select"),t=F(!0),u=He(),f=F([]);Xl(xl,de({...Oe(e)}));const r=ke(je);Te(()=>{f.value=i(u.subTree)});const i=c=>{const y=[];return Array.isArray(c.children)&&c.children.forEach(s=>{var p;s.type&&s.type.name==="ElOption"&&s.component&&s.component.proxy?y.push(s.component.proxy):(p=s.children)!=null&&p.length&&y.push(...i(s))}),y},{groupQueryChange:d}=Fe(r);return W(d,()=>{t.value=f.value.some(c=>c.visible===!0)},{flush:"post"}),{visible:t,ns:l}}});function Pt(e,l,t,u,f,r){return Se((A(),R("ul",{class:V(e.ns.be("group","wrap"))},[z("li",{class:V(e.ns.be("group","title"))},ie(e.label),3),z("li",null,[z("ul",{class:V(e.ns.b("group"))},[me(e.$slots,"default")],2)])],2)),[[yl,e.visible]])}var _l=we(It,[["render",Pt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const ze=In(At,{Option:Sl,OptionGroup:_l}),We=Zl(Sl);Zl(_l);const Vt=(e,{attrs:l},{tree:t,key:u})=>{const f=ce("tree-select"),r={...Re(Oe(e),Object.keys(ze.props)),...l,valueKey:u,popperClass:w(()=>{const i=[f.e("popper")];return e.popperClass&&i.push(e.popperClass),i.join(" ")}),filterMethod:(i="")=>{e.filterMethod&&e.filterMethod(i),$(()=>{var d;(d=t.value)==null||d.filter(i)})},onVisibleChange:i=>{var d;(d=l.onVisibleChange)==null||d.call(l,i),e.filterable&&i&&r.filterMethod()}};return r},$t=fe({extends:We,setup(e,l){const t=We.setup(e,l);delete t.selectOptionClick;const u=He().proxy;return $(()=>{t.select.cachedOptions.get(u.value)||t.select.onOptionCreate(u)}),t},methods:{selectOptionClick(){this.$el.parentElement.click()}}});function hl(e){return e||e===0}function en(e){return Array.isArray(e)&&e.length}function vl(e){return Array.isArray(e)?e:hl(e)?[e]:[]}function Ne(e,l,t,u,f){for(let r=0;r<e.length;r++){const i=e[r];if(l(i,r,e,f))return u?u(i,r,e,f):i;{const d=t(i);if(en(d)){const c=Ne(d,l,t,u,i);if(c)return c}}}}const Bt=(e,{attrs:l,slots:t,emit:u},{select:f,tree:r,key:i})=>{W(()=>e.modelValue,()=>{e.showCheckbox&&$(()=>{const s=r.value;s&&!bl(s.getCheckedKeys(),vl(e.modelValue))&&s.setCheckedKeys(vl(e.modelValue))})},{immediate:!0,deep:!0});const d=w(()=>({value:i.value,...e.props})),c=(s,p)=>{var v;const h=d.value[s];return ml(h)?h(p,(v=r.value)==null?void 0:v.getNode(c("value",p))):p[h]},y=vl(e.modelValue).map(s=>Ne(e.data||[],p=>c("value",p)===s,p=>c("children",p),(p,v,h,o)=>o&&c("value",o))).filter(s=>hl(s));return{...Re(Oe(e),Object.keys(gl.props)),...l,nodeKey:i,expandOnClickNode:w(()=>!e.checkStrictly&&e.expandOnClickNode),defaultExpandedKeys:w(()=>e.defaultExpandedKeys?e.defaultExpandedKeys.concat(y):y),renderContent:(s,{node:p,data:v,store:h})=>s($t,{value:c("value",v),label:c("label",v),disabled:c("disabled",v)},e.renderContent?()=>e.renderContent(s,{node:p,data:v,store:h}):t.default?()=>t.default({node:p,data:v,store:h}):void 0),filterNodeMethod:(s,p,v)=>{var h;return e.filterNodeMethod?e.filterNodeMethod(s,p,v):s?(h=c("label",p))==null?void 0:h.includes(s):!0},onNodeClick:(s,p,v)=>{var h,o,g;if((h=l.onNodeClick)==null||h.call(l,s,p,v),!(e.showCheckbox&&e.checkOnClickNode))if(!e.showCheckbox&&(e.checkStrictly||p.isLeaf)){if(!c("disabled",s)){const C=(o=f.value)==null?void 0:o.options.get(c("value",s));(g=f.value)==null||g.handleOptionSelect(C,!0)}}else e.expandOnClickNode&&v.proxy.handleExpandIconClick()},onCheck:(s,p)=>{var v;(v=l.onCheck)==null||v.call(l,s,p);const h=c("value",s);if(e.checkStrictly)u(Q,e.multiple?p.checkedKeys:p.checkedKeys.includes(h)?h:void 0);else if(e.multiple)u(Q,r.value.getCheckedKeys(!0));else{const o=Ne([s],S=>!en(c("children",S))&&!c("disabled",S),S=>c("children",S)),g=o?c("value",o):void 0,C=hl(e.modelValue)&&!!Ne([s],S=>c("value",S)===e.modelValue,S=>c("children",S));u(Q,g===e.modelValue||C?void 0:g)}}}},Kt=fe({name:"ElTreeSelect",inheritAttrs:!1,props:{...ze.props,...gl.props},setup(e,l){const{slots:t,expose:u}=l,f=F(),r=F(),i=w(()=>e.nodeKey||e.valueKey||"value"),d=Vt(e,l,{select:f,tree:r,key:i}),c=Bt(e,l,{select:f,tree:r,key:i}),y=de({});return u(y),Te(()=>{Object.assign(y,{...Re(r.value,["filter","updateKeyChildren","getCheckedNodes","setCheckedNodes","getCheckedKeys","setCheckedKeys","setChecked","getHalfCheckedNodes","getHalfCheckedKeys","getCurrentKey","getCurrentNode","setCurrentKey","setCurrentNode","getNode","remove","append","insertBefore","insertAfter"]),...Re(f.value,["focus","blur"])})}),()=>Bl(ze,de({...d,ref:s=>f.value=s}),{...t,default:()=>Bl(gl,de({...c,ref:s=>r.value=s}))})}});var De=we(Kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);De.install=e=>{e.component(De.name,De)};const Nt=De,Dt=Nt;const kt={modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},multiple:{type:Boolean,default:!1},multipleLimit:{type:Number,default:0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"\u8BF7\u9009\u62E9"},clearable:{type:Boolean,default:!0},filterable:{type:Boolean,default:!1},valueKey:{type:String,default:"value"},remote:{type:Boolean,default:!1},allowCreate:{type:Boolean,default:!1}},ln={labelInValue:{type:Boolean,default:!1},text:{type:Boolean,default:!1},labelKey:{type:String,default:"label"},options:{type:Array,default:()=>[]},valueObject:{type:Boolean,default:!1},maxTagCount:{type:Number,default:2},maxTagPlaceholder:{type:Function},modelLabel:{type:[Array,String,Number,Boolean,Object],default:void 0},api:{type:Function},init:{type:Boolean,default:!0},params:{type:Object},tree:{type:Boolean,default:!1}},Ft=Object.assign({},kt,ln);function Rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Bn(e)}const Gt=fe({props:Ft,emits:["update:modelValue","update:modelLabel","change"],setup(e,{attrs:l,emit:t,slots:u}){const f=Kl(e,"modelValue",t,{defaultValue:""}),r=Kl(e,"modelLabel",t,{defaultValue:""}),i=F(),d=F(e.options),c=w(()=>({...{...Pn(e,Object.keys(ln))},...l,collapseTags:!1}));Te(()=>{e.multiple&&v(),e.init&&p()});const y=m=>{var k;const{labelInValue:T,labelKey:E,valueKey:M,multiple:I,valueObject:L}=e;let N=Nl(m)?m:[m];L&&(N=N.map(J=>J[M]));const P=K(d).filter(J=>N.includes(J[M]));if(r.value=I?P==null?void 0:P.map(J=>J[E]):(k=P[0])==null?void 0:k[E],T){t("change",I?P||[]:P[0]||{});return}t("change",m)},s=async m=>{m&&K(d).length===0&&p()},p=async()=>{var M;const{params:m,api:T}=e;if(!Vn(T))return;const E=await T(m);d.value=((M=E.data)==null?void 0:M.list)||E.data},v=()=>{var T,E;if(!K(i))return;const m=document.createElement("span");m.style.display="none",m.className="el-tag el-tag--info el-tag--default el-tag--light el-tag-max-count",(E=(T=K(i).$refs.tags)==null?void 0:T.children)==null||E[0].appendChild(m)},h=()=>{$(()=>{var E,M;if(!K(i))return;const{maxTagCount:m,maxTagPlaceholder:T}=e;Array.from(((M=(E=K(i).$refs.tags)==null?void 0:E.children)==null?void 0:M[0].children)||[]).filter(I=>{if(I.className.includes("el-tag-max-count")){const L=K(f);return L.length>m?(I.style.display="inline-flex",I.innerHTML=`<span class="el-tag__content"><span class="el-select__tags-text">
                                    ${T?T(L.length-m):`+${L.length-m}`}
                                    </span></span>`):I.style.display="none",!1}return!0}).forEach((I,L)=>{L>=m?I.style.display="none":I.style.display="inline-flex"})})},o=()=>{const{valueObject:m,modelValue:T,valueKey:E,labelKey:M}=e;let I=[];const L=Nl(T)?T:[T];return m?I=L.map(N=>N[M]):L.forEach(N=>{const P=K(d).find(k=>k[E]===N);I.push(P?P[M]:N)}),Y("span",null,[I.join()])},g=()=>{let m;return Y(ze,Dl({ref:i},c.value,{modelValue:f.value,"onUpdate:modelValue":T=>f.value=T,onChange:y,"onVisible-change":s}),Rt(m=S())?m:{default:()=>[m]})},C=()=>Y(Dt,Dl({ref:i},c.value,{modelValue:f.value,"onUpdate:modelValue":m=>f.value=m,"check-strictly":!0,"default-expand-all":!0,"onVisible-change":s,data:d.value}),null),S=()=>{const{valueKey:m,labelKey:T,valueObject:E,modelValue:M,modelLabel:I,multiple:L}=e;if(u.default)return u.default();const N=K(d).map(P=>Y(We,{key:P[m],label:P[T],value:E?P:P[m],disabled:P.disabled},{default:()=>{var k;return[(k=u.option)==null?void 0:k.call(u,{scope:P})]}}));return!L&&!E&&!$n(M)&&(K(d).length===0||!K(d).find(P=>P[m]===M))&&N.push(Y(We,{label:I,value:M},null)),N};return()=>{const{text:m,tree:T,multiple:E}=e;return E&&h(),m?o():T?C():g()}}});export{We as E,Gt as _,ze as a,bl as i};
