(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56f71b15"],{"07ac":function(t,e,r){var n=r("23e7"),i=r("6f53").values;n({target:"Object",stat:!0},{values:function(t){return i(t)}})},"6f53":function(t,e,r){var n=r("83ab"),i=r("df75"),c=r("fc6a"),s=r("d1e7").f,o=function(t){return function(e){var r,o=c(e),a=i(o),u=a.length,d=0,l=[];while(u>d)r=a[d++],n&&!s.call(o,r)||l.push(t?[r,o[r]]:o[r]);return l}};t.exports={entries:o(!0),values:o(!1)}},fd39:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bProducts"},[r("div",{staticClass:"bProducts__container container"},[r("div",{staticClass:"bProducts__row row"},[r("transition",{attrs:{name:"fade"}},[t.productListShown?r("div",{staticClass:"bProductList col-12 col-md-4 col-lg-2"},[r("div",{staticClass:"bProductList__container"},[r("ul",{staticClass:"bProductList__list row"},[r("li",{staticClass:"bProductList__item col-12"},[r("a",{staticClass:"bProductList__a",attrs:{href:"#"},on:{click:t.start_creating_newProduct}},[r("div",{staticClass:"bProductList__main"},[t._v(" 新增產品 ")])])]),t._l(t.products,(function(e,n){return r("li",{key:n,staticClass:"bProductList__item col-12"},[r("a",{staticClass:"bProductList__a",attrs:{href:"#"},on:{click:function(r){return t.start_editing(e.id)}}},[r("div",{staticClass:"bProductList__img"},[r("img",{attrs:{src:e.images.main,alt:""}})]),r("div",{staticClass:"bProductList__main"},[r("span",{staticClass:"bProductList__title"},[t._v(" "+t._s(e.title)+" ")]),r("span",{staticClass:"bProductList__id"},[t._v(" "+t._s(e.id)+" ")])])])])}))],2)])]):t._e()]),r("div",{staticClass:"bProductListFolder d-md-none"},[r("button",{staticClass:"bProductListFolder__btn btn btn-secondary",on:{click:function(e){e.preventDefault(),t.toggle_productList(!t.productListShown),t.toggle_productDetail(!t.productDetailShown)}}},[t.productListShown?t._e():r("span",[t._v(" 產品選單 ")]),t.productDetailShown?t._e():r("span",[t._v(" 產品細節 ")])])]),r("transition",{attrs:{name:"fade"}},[r("form",{staticClass:"col-12 col-md-8 col-lg-10",on:{submit:function(e){return e.preventDefault(),t.submit_form(t.currentProduct)}}},[t.productDetailShown?r("div",{staticClass:"bProductDetail"},[r("div",{staticClass:"bProductDetail__container"},[r("div",{staticClass:"bProductDetail__header"},[r("div",{staticClass:"bProductDetail__row row"},[r("p",{staticClass:"bProductDetail__title col"},[t._v(" 產品詳細資料 ")]),r("div",{staticClass:"bProductDetail__funcBtns"},[t.creatingNewProduct?t._e():r("button",{staticClass:"btn btn-success mr-1",attrs:{type:"submit"}},[t._v(" 儲存變更 ")]),t.creatingNewProduct?t._e():r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.delete_product(t.currentProduct)}}},[t._v(" 刪除產品 ")]),t.creatingNewProduct?r("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[t._v(" 新增產品 ")]):t._e()])])]),r("div",{staticClass:"bProductDetail__body"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"product_id"}},[t._v("產品ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentProduct.id,expression:"currentProduct.id"}],staticClass:"form-control",attrs:{type:"text",required:"",id:"product_id"},domProps:{value:t.currentProduct.id},on:{input:function(e){e.target.composing||t.$set(t.currentProduct,"id",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"product_title"}},[t._v("產品名稱")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentProduct.title,expression:"currentProduct.title"}],staticClass:"form-control",attrs:{type:"text",required:"",id:"product_title"},domProps:{value:t.currentProduct.title},on:{input:function(e){e.target.composing||t.$set(t.currentProduct,"title",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"product_price"}},[t._v("價格")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentProduct.price,expression:"currentProduct.price"}],staticClass:"form-control",attrs:{type:"number",min:"1",required:"",id:"product_price"},domProps:{value:t.currentProduct.price},on:{input:function(e){e.target.composing||t.$set(t.currentProduct,"price",e.target.value)}}})]),r("div",{staticClass:"form-group form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentProduct.is_new,expression:"currentProduct.is_new"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"product_is_new"},domProps:{checked:Array.isArray(t.currentProduct.is_new)?t._i(t.currentProduct.is_new,null)>-1:t.currentProduct.is_new},on:{change:function(e){var r=t.currentProduct.is_new,n=e.target,i=!!n.checked;if(Array.isArray(r)){var c=null,s=t._i(r,c);n.checked?s<0&&t.$set(t.currentProduct,"is_new",r.concat([c])):s>-1&&t.$set(t.currentProduct,"is_new",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.currentProduct,"is_new",i)}}}),r("label",{staticClass:"form-check-label",attrs:{for:"product_is_new"}},[t._v("使否標示為新產品")])]),r("div",{staticClass:"form-group form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentProduct.on_banner,expression:"currentProduct.on_banner"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"product_on_banner"},domProps:{checked:Array.isArray(t.currentProduct.on_banner)?t._i(t.currentProduct.on_banner,null)>-1:t.currentProduct.on_banner},on:{change:function(e){var r=t.currentProduct.on_banner,n=e.target,i=!!n.checked;if(Array.isArray(r)){var c=null,s=t._i(r,c);n.checked?s<0&&t.$set(t.currentProduct,"on_banner",r.concat([c])):s>-1&&t.$set(t.currentProduct,"on_banner",r.slice(0,s).concat(r.slice(s+1)))}else t.$set(t.currentProduct,"on_banner",i)}}}),r("label",{staticClass:"form-check-label",attrs:{for:"product_on_banner"}},[t._v("使否在首頁輪播")])]),r("hr"),r("div",{staticClass:"form-row"},[t._l(t.currentProduct.category,(function(e,n){return r("div",{key:n,staticClass:"form-group col-4 col-md-3"},[r("label",[r("span",{staticClass:"pr-1"},[t._v("產品分類--"+t._s(n+1))]),r("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return e.preventDefault(),t.delete_category(n)}}},[t._v(" 刪除 ")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.chinese,expression:"item.chinese"}],staticClass:"form-control",attrs:{type:"text",placeholder:"描述標題"},domProps:{value:e.chinese},on:{input:function(r){r.target.composing||t.$set(e,"chinese",r.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.english,expression:"item.english"}],staticClass:"form-control",attrs:{type:"text",placeholder:"描述內容"},domProps:{value:e.english},on:{input:function(r){r.target.composing||t.$set(e,"english",r.target.value)}}})])})),r("button",{staticClass:"btn btn-success col-4 col-md-3 mt-3 mb-3",on:{click:function(e){return e.preventDefault(),t.add_new_category(e)}}},[t._v(" 新增產品分類 ")])],2),r("div",{staticClass:"form-row"},t._l(t.categoryMenu,(function(e,n){return r("div",{key:n,staticClass:"p-1 col-4 col-md-3"},[r("button",{staticClass:"btn btn-secondary\n                    col d-flex flex-column align-items-center",on:{click:function(r){return r.preventDefault(),t.add_new_category(e)}}},[r("span",[t._v(t._s(e.chinese))]),r("span",[t._v(t._s(e.english))])])])})),0),r("hr"),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-4 col-md-3 mb-2"},[""===t.currentProduct.images.main?r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"mainImg"}},[t._v("新增主要圖片")]),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"mainImg",accept:"image/gif, image/jpeg, image/png"},on:{change:function(e){return t.previewImg(e.target)}}}),r("img",{staticClass:"obj-cover image w-100 h-100 rounded mt-2",attrs:{src:"",alt:"",id:"mainImgPreview"}})]):t._e(),""!==t.currentProduct.images.main?r("div",[r("button",{staticClass:"btn btn-secondary btn-sm mb-1",on:{click:function(e){return e.preventDefault(),t.delete_img("main")}}},[t._v(" 刪除主要圖片 ")]),r("img",{staticClass:"obj-cover image w-100 h-100 rounded",attrs:{src:t.currentProduct.images.main},on:{click:function(e){t.lightBoxindex=0}}})]):t._e()]),r("div",{staticClass:"col-4 col-md-3 mb-2"},[""===t.currentProduct.images.banner?r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"bannerImg"}},[t._v("新增首頁圖片")]),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"bannerImg",accept:"image/gif, image/jpeg, image/png"},on:{change:function(e){return t.previewImg(e.target)}}}),r("img",{staticClass:"obj-cover image w-100 h-100 rounded mt-2",attrs:{src:"",alt:"",id:"bannerImgPreview"}})]):t._e(),""!==t.currentProduct.images.banner?r("div",[r("button",{staticClass:"btn btn-secondary btn-sm mb-1",on:{click:function(e){return e.preventDefault(),t.delete_img("banner")}}},[t._v(" 刪除首頁圖片 ")]),r("img",{staticClass:"obj-cover image w-100 h-100 rounded",attrs:{src:t.currentProduct.images.banner},on:{click:function(e){t.lightBoxindex=1}}})]):t._e()]),t._l(t.currentProduct.images.others,(function(e,n){return r("div",{key:n,staticClass:"col-4 col-md-3 mb-2"},[""===e?r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"img"+n}},[t._v("其他圖片 "+t._s(n+1))]),r("input",{staticClass:"form-control-file",attrs:{type:"file",id:"img"+n,accept:"image/gif, image/jpeg, image/png"},on:{change:function(e){return t.previewImg(e.target)}}}),r("img",{staticClass:"obj-cover image w-100 h-100 rounded mt-2",attrs:{src:"",alt:"",id:"img"+n+"Preview"}})]):t._e(),""!==e?r("div",[r("button",{staticClass:"btn btn-secondary btn-sm mb-1",on:{click:function(e){return e.preventDefault(),t.delete_img(n)}}},[t._v(" 刪除 ")]),r("img",{staticClass:"obj-cover image w-100 h-100 rounded",attrs:{src:e},on:{click:function(e){t.lightBoxindex=n}}})]):t._e()])})),r("button",{staticClass:"btn btn-success col-4 col-md-3 mt-3 mb-3",on:{click:function(e){return e.preventDefault(),t.add_new_image(e)}}},[t._v(" 新增其他圖片 ")]),r("vue-gallery-slideshow",{attrs:{images:t.images,index:t.lightBoxindex},on:{close:function(e){t.lightBoxindex=null}}})],2),r("hr"),r("div",{staticClass:"form-row"},[t._l(t.currentProduct.description,(function(e,n){return r("div",{key:n,staticClass:"form-group col-4 col-md-3"},[r("label",[r("span",{staticClass:"pr-1"},[t._v("產品描述--"+t._s(n+1))]),r("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(e){return e.preventDefault(),t.delete_description(n)}}},[t._v(" 刪除 ")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"item.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"描述標題"},domProps:{value:e.title},on:{input:function(r){r.target.composing||t.$set(e,"title",r.target.value)}}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"item.text"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:e.text},on:{input:function(r){r.target.composing||t.$set(e,"text",r.target.value)}}})])})),r("button",{staticClass:"btn btn-success col-4 col-md-3 mt-3 mb-3",on:{click:function(e){return e.preventDefault(),t.add_new_description(e)}}},[t._v(" 新增產品描述 ")])],2),r("hr"),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"product_content"}},[t._v("產品內容")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentProduct.content,expression:"currentProduct.content"}],staticClass:"form-control",attrs:{id:"product_content",rows:"10"},domProps:{value:t.currentProduct.content},on:{input:function(e){e.target.composing||t.$set(t.currentProduct,"content",e.target.value)}}})])])])]):t._e()])])],1)])])},i=[],c=(r("a4d3"),r("e01a"),r("4de4"),r("7db0"),r("0481"),r("d81d"),r("a434"),r("4069"),r("d3b7"),r("07ac"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),s=r("1157"),o=r.n(s),a=r("b417"),u=r.n(a),d={components:{VueGallerySlideshow:u.a},computed:{products:function(){var t=[];return this.$bus.$on("son_get_data",(function(e){t=e.products})),this.$bus.$emit("son_call_data"),t},categories:function(){var t=[],e=this.products.map((function(t){return t.category})).flat(1).map((function(t){return JSON.stringify(t)})),r=Object(c["a"])(new Set(e)).map((function(t){return JSON.parse(t)}));return t=r,t},images:function(){var t=[],e=this.currentProduct.images,r=Object.values(e).flat(2);return t=r,t}},data:function(){return{productListShown:!0,productDetailShown:!1,creatingNewProduct:!0,currentProduct:{title:"",id:"",price:1,is_new:!1,on_banner:!1,category:[],images:{main:"",banner:"",others:[]},content:"",description:[]},categoryMenu:[],lightBoxindex:null}},methods:{go_page:function(t){this.$router.push(t)},toggle_productList:function(t){this.productListShown=t},toggle_productDetail:function(t){this.productDetailShown=t},submit_form:function(t){var e=this,r=function(){var t=!1;return""===e.currentProduct.images.main?e.$bus.$emit("show_toast","warning","不可以沒有主要圖片"):""===e.currentProduct.images.banner?e.$bus.$emit("show_toast","warning","不可以沒有首頁圖片"):t=!0,t};r()&&(this.creatingNewProduct?this.$bus.$emit("add_new_product",t):this.$bus.$emit("edit_product",t))},delete_product:function(t){var e=window.confirm("確定要刪除嗎?");e&&(this.$bus.$emit("delete_product",t),this.start_creating_newProduct())},add_new_description:function(){var t={title:"",text:""};this.currentProduct.description.push(t)},delete_description:function(t){this.currentProduct.description.splice(t,1)},reset_categoryMenu:function(){var t=this;this.categoryMenu=this.categories.filter((function(e){return void 0===t.currentProduct.category.find((function(t){return JSON.stringify(t)===JSON.stringify(e)}))}))},add_new_category:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{chinese:"",english:""};this.currentProduct.category.push(t),this.reset_categoryMenu()},delete_category:function(t){this.currentProduct.category.splice(t,1),this.reset_categoryMenu()},add_new_image:function(){var t="";this.currentProduct.images.others.push(t)},delete_img:function(t){switch(t){case"main":this.currentProduct.images.main="";break;case"banner":this.currentProduct.images.banner="";break;default:this.currentProduct.images.others[t]="";break}},start_creating_newProduct:function(){this.currentProduct={title:"",id:"",price:1,is_new:!1,on_banner:!1,category:[],images:{main:"",banner:"",others:[]},content:"",description:[]},this.creatingNewProduct=!0,this.rwdSet(),this.reset_categoryMenu()},start_editing:function(t){var e=this.products.find((function(e){return e.id===t}));this.currentProduct=JSON.parse(JSON.stringify(e)),this.creatingNewProduct=!1,this.rwdSet(),this.reset_categoryMenu()},rwdSet:function(){var t=o()(window).width();t>=768?(this.toggle_productList(!0),this.toggle_productDetail(!0)):(this.toggle_productList(!1),this.toggle_productDetail(!0))},previewImg:function(t){var e=t.id,r=document.getElementById("".concat(e,"Preview"));if(t.files&&t.files[0]){var n=new FileReader;n.readAsDataURL(t.files[0]),n.onload=function(t){r.setAttribute("src",t.target.result)}}else r.setAttribute("src","")}},created:function(){this.start_creating_newProduct()},mounted:function(){var t=this;this.rwdSet(),o()(window).resize((function(){t.rwdSet()}))}},l=d,m=r("2877"),_=Object(m["a"])(l,n,i,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-56f71b15.9c5fcf09.js.map