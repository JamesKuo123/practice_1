(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c2d1"],{f1b2:function(e,o,s){"use strict";s.r(o);var n=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"orderinfo"},[s("h1",[e._v("購物指南")]),s("div",{staticClass:"orderinfo__container"},e._l(e.orderInfos,(function(o,n){return s("div",{key:n,staticClass:"orderinfo__collapse"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-"+n,expression:"`collapse-${index}`"}],staticClass:"orderinfo__collapse__header",domProps:{innerHTML:e._s(o.title)}}),s("b-collapse",{attrs:{id:"collapse-"+n}},[s("div",{staticClass:"orderinfo__collapse__body",domProps:{innerHTML:e._s(o.content)}})])],1)})),0)])},t=[],r={computed:{orderInfos:function(){var e=[];return this.$bus.$on("son_get_data",(function(o){e=o.orderInfos})),this.$bus.$emit("son_call_data"),e}}},a=r,i=s("2877"),l=Object(i["a"])(a,n,t,!1,null,null,null);o["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d22c2d1.53a3a296.js.map