import{_ as s}from"./index-6026433d.js";import{F as u}from"./componentEnum-3c51408c.js";import{d as c,b as m,a0 as f,eu as d,o as g,c as _,f as F}from"./index-b24fdcf6.js";import"./base-table-c6b41732.js";/* empty css                 */import"./el-tag-723e3959.js";import"./base-select.vue_vue_type_script_lang-cd2a706d.js";import"./el-popper-e67372c2.js";import"./el-tree-890ae575.js";import"./index-34c91736.js";import"./el-checkbox-75e59423.js";import"./_Uint8Array-673f992d.js";import"./debounce-8bdb55cb.js";import"./index-2737c85f.js";import"./el-empty-8dea67b0.js";import"./el-space-be5e3bb6.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-1ac1e28a.js";import"./dropdown-0c1ec3f1.js";import"./base-dialog.vue_vue_type_style_index_0_lang-0d031038.js";import"./index.vue_vue_type_script_setup_true_lang-90f4af1e.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-76525628.js";import"./base-input.vue_vue_type_script_setup_true_lang-8e800e93.js";import"./base-column-setting-90dde805.js";import"./vuedraggable.umd-9a1df025.js";import"./vue.runtime.esm-bundler-2281e001.js";import"./index-b26c4894.js";import"./el-col-8e7c1ebb.js";import"./base-filter-98ac391f.js";import"./base-form.vue_vue_type_script_setup_true_lang-9f07afc3.js";import"./el-form-item-21e26e77.js";import"./useTagViewSetting-dcc2216d.js";import"./base-input-number-4fc9e28e.js";import"./localeData-1bdd8b14.js";import"./index-02c20932.js";import"./position-21f8c082.js";function C(){return{filterColumn:[{fieldName:"time",fieldDesc:"\u767B\u5F55\u65F6\u95F4",fieldType:u.DATE,config:{type:"daterange"}}],tableColumn:[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D"},{fieldName:"ip",fieldDesc:"\u767B\u5F55ip",showOverflowTooltip:!0},{fieldName:"os",fieldDesc:"\u64CD\u4F5C\u7CFB\u7EDF"},{fieldName:"browser",fieldDesc:"\u6D4F\u89C8\u5668"},{fieldName:"time",fieldDesc:"\u767B\u5F55\u65F6\u95F4"}]}}const D={class:"system-dict-container"},it=c({__name:"index",setup(p){const{tableColumn:i,filterColumn:l}=C(),r=m({columns:l,onSearch:e,showOpen:!1,searchInfo:{}}),t=m({columns:i,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:e});f(()=>{e()});async function e(){const{currentPage:n,pageSize:a}=t.pagination,o=await d({...r.searchInfo,currentPage:n,pageSize:a});t.data=o.data.list,t.pagination.total=o.data.total}return(n,a)=>{const o=s;return g(),_("div",D,[F(o,{"table-title":"\u767B\u5F55\u65E5\u5FD7","filter-config":r,"table-config":t},null,8,["filter-config","table-config"])])}}});export{it as default};