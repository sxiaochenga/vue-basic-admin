import{_ as u}from"./index-998c32a0.js";import{F as c}from"./componentEnum-ee19f918.js";import{d as p,b as l,a1 as f,en as d,o as g,c as _,f as F}from"./index-e4882791.js";import"./base-table-0efa2018.js";import"./el-tag-aca14402.js";import"./base-select.vue_vue_type_script_lang-7b2c925f.js";import"./el-tree-aa5de74e.js";import"./el-checkbox-47184759.js";import"./_Uint8Array-4716b191.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-a498ff7e.js";import"./base-column-setting-1325b364.js";import"./vuedraggable.umd-6e5cfb42.js";import"./vue.runtime.esm-bundler-b094e563.js";import"./index-44dd80f9.js";import"./el-col-182ed66d.js";import"./base-filter-ac43eaab.js";import"./base-form.vue_vue_type_script_setup_true_lang-568472ce.js";import"./el-form-item-2fbfa7c8.js";import"./base-input-number-47571d18.js";import"./localeData-9a1423cc.js";function C(){return{filterColumn:[{fieldName:"time",fieldDesc:"\u767B\u5F55\u65F6\u95F4",fieldType:c.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D"},{fieldName:"ip",fieldDesc:"\u767B\u5F55ip",showOverflowTooltip:!0},{fieldName:"os",fieldDesc:"\u64CD\u4F5C\u7CFB\u7EDF"},{fieldName:"browser",fieldDesc:"\u6D4F\u89C8\u5668"},{fieldName:"time",fieldDesc:"\u767B\u5F55\u65F6\u95F4"}]}}const D={class:"system-dict-container"},V=p({__name:"index",setup(s){const{tableColumn:i,filterColumn:m}=C(),n=l({columns:m,onSearch:o,showOpen:!1,searchInfo:{}}),e=l({columns:i,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:o});f(()=>{o()});async function o(){const{currentPage:a,pageSize:r}=e.pagination,t=await d({...n.searchInfo,currentPage:a,pageSize:r});e.data=t.data.list,e.pagination.total=t.data.total}return(a,r)=>{const t=u;return g(),_("div",D,[F(t,{"table-title":"\u767B\u5F55\u65E5\u5FD7","filter-config":n,"table-config":e},null,8,["filter-config","table-config"])])}}});export{V as default};
