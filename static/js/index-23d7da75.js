import{_ as A}from"./index-44dd80f9.js";import{_ as x}from"./base-select.vue_vue_type_script_lang-7b2c925f.js";import{g as B}from"./user-8cdd83ee.js";import{g as U}from"./menu-4e9220f8.js";import{d as T,r as a,o as D,c as L,f as u,w as n,e as f,t as p,g as _}from"./index-e4882791.js";import"./el-col-182ed66d.js";import"./el-tag-aca14402.js";import"./el-tree-aa5de74e.js";import"./el-checkbox-47184759.js";import"./_Uint8Array-4716b191.js";const k={class:"com-select-container"},y={class:"mt10"},I={class:"mt10"},G=T({__name:"index",setup(N){const r=a(""),v=a(""),m=a(""),V=a(""),c=a(""),C=a(""),F=a([]),d=a(""),b=a({}),s=a([{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"},{label:"\u9009\u9879\u56DB",value:"4"},{label:"\u9009\u9879\u4E94",value:"5"}]),g=i=>{b.value=i},E=i=>`\u6298\u53E0\u6570\u91CF\uFF1A${i}`;return(i,e)=>{const t=x,o=A;return D(),L("div",k,[u(o,{title:"\u5E38\u89C4select"},{default:n(()=>[u(t,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),options:s.value},null,8,["modelValue","options"])]),_:1}),u(o,{title:"\u6269\u5C55labelInValue"},{default:n(()=>[u(t,{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=l=>v.value=l),options:s.value,labelInValue:"",onChange:g},null,8,["modelValue","options"]),f("div",y,"change\uFF1A"+p(b.value),1)]),_:1}),u(o,{title:"\u540C\u65F6\u7ED1\u5B9Alabel\u548Cvalue"},{default:n(()=>[u(t,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),modelLabel:d.value,"onUpdate:modelLabel":e[3]||(e[3]=l=>d.value=l),options:s.value,labelInValue:""},null,8,["modelValue","modelLabel","options"]),f("div",I,"label\uFF1A"+p(d.value)+"\uFF0Cvalue\uFF1A"+p(m.value),1)]),_:1}),u(o,{title:"\u6269\u5C55maxTag\u6570\u91CF"},{default:n(()=>[u(t,{modelValue:V.value,"onUpdate:modelValue":e[4]||(e[4]=l=>V.value=l),options:s.value,multiple:"",maxTagCount:3},null,8,["modelValue","options"])]),_:1}),u(o,{title:"\u6269\u5C55maxTagPlaceholder"},{default:n(()=>[u(t,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=l=>c.value=l),options:s.value,multiple:"",maxTagCount:3,maxTagPlaceholder:E},null,8,["modelValue","options"])]),_:1}),u(o,{title:"\u6269\u5C55ApiSelect(\u9ED8\u8BA4\u4E3Avisible-change\u6253\u5F00\u7684\u65F6\u5019\u624D\u4F1A\u8BF7\u6C42\u63A5\u53E3\uFF0C\u8BBE\u7F6Einit\u4E3Atrue\u5219\u521D\u59CB\u5316\u8BF7\u6C42\u63A5\u53E3)"},{default:n(()=>[u(t,{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=l=>C.value=l),multiple:"",maxTagCount:3,api:_(B),"label-key":"username","value-key":"id"},null,8,["modelValue","api"])]),_:1}),u(o,{title:"selectTree"},{default:n(()=>[u(t,{modelValue:F.value,"onUpdate:modelValue":e[7]||(e[7]=l=>F.value=l),api:_(U),tree:"",nodeKey:"id",props:{label:"menuName",children:"children"}},null,8,["modelValue","api"])]),_:1})])}}});export{G as default};
