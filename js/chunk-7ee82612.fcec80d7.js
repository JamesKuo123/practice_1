(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ee82612"],{"0fbe":function(s,t,e){"use strict";e.r(t);var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"news"},[e("h1",[s._v("最新消息")]),e("div",{staticClass:"news__container"},[e("ul",{staticClass:"news__list"},s._l(s.news,(function(t,i){return e("li",{key:i,staticClass:"news__list__item"},[e("a",{staticClass:"news__a",attrs:{href:"#"},on:{click:function(e){return s.go_page("/front/news/"+t.id)}}},[e("div",{staticClass:"news__img"},[e("img",{attrs:{src:t.banner,alt:""}})]),e("div",{staticClass:"news__main"},[e("div",{staticClass:"news__main__header"},[e("div",{staticClass:"news__title"},[s._v(s._s(t.title))]),e("div",{staticClass:"news__date"},[s._v(s._s(t.date))])]),e("div",{staticClass:"news__description",domProps:{innerHTML:s._s(t.description)}}),e("div",{staticClass:"news__link"},[s._v("READ MORE")])])])])})),0)])])},n=[],a=(e("fb6a"),{computed:{news:function(){var s=[];return this.$bus.$on("son_get_data",(function(t){s=t.news})),this.$bus.$emit("son_call_data"),s.sort((function(s,t){var e=JSON.parse(s.id.slice(-8)),i=JSON.parse(t.id.slice(-8));return i-e})),s}},methods:{go_page:function(s){this.$router.push(s)}}}),r=a,c=e("2877"),o=Object(c["a"])(r,i,n,!1,null,null,null);t["default"]=o.exports},fb6a:function(s,t,e){"use strict";var i=e("23e7"),n=e("861d"),a=e("e8b5"),r=e("23cb"),c=e("50c4"),o=e("fc6a"),l=e("8418"),_=e("b622"),d=e("1dde"),u=e("ae40"),v=d("slice"),f=u("slice",{ACCESSORS:!0,0:0,1:2}),w=_("species"),p=[].slice,h=Math.max;i({target:"Array",proto:!0,forced:!v||!f},{slice:function(s,t){var e,i,_,d=o(this),u=c(d.length),v=r(s,u),f=r(void 0===t?u:t,u);if(a(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?n(e)&&(e=e[w],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return p.call(d,v,f);for(i=new(void 0===e?Array:e)(h(f-v,0)),_=0;v<f;v++,_++)v in d&&l(i,_,d[v]);return i.length=_,i}})}}]);
//# sourceMappingURL=chunk-7ee82612.fcec80d7.js.map