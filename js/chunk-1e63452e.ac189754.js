(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e63452e"],{1148:function(e,t,a){"use strict";var i=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",r=i(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(a+=t);return a}},2532:function(e,t,a){"use strict";var i=a("23e7"),n=a("5a34"),r=a("1d80"),s=a("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(r(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"2d75":function(e,t,a){e.exports=a.p+"img/line_logo.acc41249.png"},"408a":function(e,t,a){var i=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=i(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,a){var i=a("861d"),n=a("c6b6"),r=a("b622"),s=r("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},"578a":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"login__block"},[a("div",{staticClass:"login__header"},[e._v(" 會員登入 ")]),a("div",{staticClass:"login__body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.loginVerify(t)}}},[a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" Email ")]),a("label",{attrs:{for:"account"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.email,expression:"loginForm.email"}],attrs:{type:"email"},domProps:{value:e.loginForm.email},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"email",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 密碼 ")]),a("label",{attrs:{for:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password"},domProps:{value:e.loginForm.password},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"password",t.target.value)}}})])]),e._m(0),e._m(1)])]),a("div",{staticClass:"login__header"},[e._v(" FB登入 ")]),a("div",{staticClass:"login__body"},[a("a",{staticClass:"myBtn myBtn--primary",attrs:{href:"#"},on:{click:function(t){return e.fb_login(!0)}}},[e._v(" FB登入 ")])])]),a("div",{staticClass:"login__block"},[a("div",{staticClass:"login__header"},[e._v(" 快速註冊會員 ")]),a("div",{staticClass:"login__body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 姓名 ")]),a("label",{attrs:{for:"name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.name,expression:"newMember.name"}],attrs:{type:"text"},domProps:{value:e.newMember.name},on:{input:function(t){t.target.composing||e.$set(e.newMember,"name",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 性別 ")]),a("label",{attrs:{for:"gender"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.gender,expression:"newMember.gender"}],attrs:{type:"radio",name:"gender",value:"male"},domProps:{checked:e._q(e.newMember.gender,"male")},on:{change:function(t){return e.$set(e.newMember,"gender","male")}}}),a("span",[e._v("男生")])]),a("label",{attrs:{for:"gender"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.gender,expression:"newMember.gender"}],attrs:{type:"radio",name:"gender",value:"female"},domProps:{checked:e._q(e.newMember.gender,"female")},on:{change:function(t){return e.$set(e.newMember,"gender","female")}}}),a("span",[e._v("女生")])])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 生日 ")]),a("label",{attrs:{for:"birthday"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.birthday,expression:"newMember.birthday"}],attrs:{type:"date"},domProps:{value:e.newMember.birthday},on:{input:function(t){t.target.composing||e.$set(e.newMember,"birthday",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 電話 ")]),a("label",{attrs:{for:"birthday"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.tel,expression:"newMember.tel"}],attrs:{type:"tel"},domProps:{value:e.newMember.tel},on:{input:function(t){t.target.composing||e.$set(e.newMember,"tel",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" E-mail ")]),a("label",{attrs:{for:"birthday"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.email,expression:"newMember.email"}],attrs:{type:"email"},domProps:{value:e.newMember.email},on:{input:function(t){t.target.composing||e.$set(e.newMember,"email",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 密碼 ")]),a("label",{attrs:{for:"birthday"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMember.password,expression:"newMember.password"}],attrs:{type:"password"},domProps:{value:e.newMember.password},on:{input:function(t){t.target.composing||e.$set(e.newMember,"password",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("div",{staticClass:"myForm__title"},[e._v(" 確認密碼 ")]),a("label",{attrs:{for:"birthday"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("captcha",{attrs:{id:"login__register"},on:{callVerification:e.verify}})],1),e._m(2)])])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myForm__remark"},[a("a",{attrs:{href:"#"}},[e._v("忘記密碼?")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myForm"},[a("button",{attrs:{type:"submit"}},[e._v("登入")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myForm"},[a("button",{attrs:{type:"submit"}},[e._v("註冊")])])}],r=(a("7db0"),a("caad"),a("d81d"),a("2532"),a("e7f8")),s={components:{captcha:r["a"]},data:function(){return{loginForm:{email:"",password:""},newMember:{id:"",name:"",gender:"",birthday:"",tel:"",email:"",password:"",favorites:[]},confirmPassword:"",captchaPass:!1}},computed:{members:function(){var e=[];return this.$bus.$on("son_get_data",(function(t){e=t.members})),this.$bus.$emit("son_call_data"),e}},methods:{createNewMember:function(){this.newMember={id:"",name:"",gender:"",birthday:"",tel:"",email:"",password:"",favorites:[]}},register:function(){var e=this.members.map((function(e){return e.email})).includes(this.newMember.email);e?this.$bus.$emit("show_toast","warning","此電子信箱已被註冊過，請登入會員或選擇其他電子信箱"):this.captchaPass?(this.newMember.id="m_".concat((new Date).yyyymmdd()),this.$bus.$emit("add_new_member",this.newMember),this.register_captcha_ok=0,this.createNewMember()):this.$bus.$emit("show_toast","warning","驗證碼錯誤"),this.$bus.$emit("create_new_code")},verify:function(e){this.captchaPass=e},loginVerify:function(){var e=this,t=this.members.find((function(t){return t.email===e.loginForm.email}));void 0===t?this.$bus.$emit("show_toast","warning","無此用戶"):t.password!==this.loginForm.password?(this.$bus.$emit("show_toast","warning","密碼錯誤"),this.loginForm.password=""):(this.$bus.$emit("log_in",t),this.$bus.$emit("createMail"))},fb_login:function(e){this.$bus.$emit("fb_login",e)}},created:function(){}},o=s,l=a("2877"),c=Object(l["a"])(o,i,n,!1,null,null,null);t["a"]=c.exports},"5a34":function(e,t,a){var i=a("44e7");e.exports=function(e){if(i(e))throw TypeError("The method doesn't accept regular expressions");return e}},"92f8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OUI0N0RDM0RENEYxMUU2ODVGRTk3NDVDRDQwNUE1QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OUI0N0RDNERENEYxMUU2ODVGRTk3NDVDRDQwNUE1QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5QjQ3REMxREQ0RjExRTY4NUZFOTc0NUNENDA1QTVCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg5QjQ3REMyREQ0RjExRTY4NUZFOTc0NUNENDA1QTVCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FG738wAABJxJREFUeNrs3UtLVGEYwPHX8a6jonhBDa+BqCCCrnTlQlzoF3AVgvMRKqg2IUTWukVaSJ/Bonau/AKCC00RIfCGC3VGHW/T8xwQJk1I5z3Hju//Bw+JAxav/86cc2bOmaypqSlzRa3MuMyITIdM1ADXxWUWZb7KfI7FYhvpD2alhZUl80zmFTHhDpFNyLyXwFL6jUhaVDMyb4kKd6DNTGpD09PTWelhPZd5wvogQ9rQ08unwkfy50+ZAtYFFiRkHusWa4yoYFGxTEzDGmYtYNmIhtXCOsCydg2rinWAZSUR1gB+ICwQFggLhAUQFggLhAUQFggLhAUQFggLbsphCf5/RUVF3kQiEZObm3vt8WQy+cfXqVTKnJ6empOTE+9rwnL9f3lOjqmpqTHV1dWmqqrKlJeXm+LiYpOdnX3nn3l2dubFlj6JRMJsbW2Z1dVVwnrIMbW0tHhTV1eXUUQ3/XwdDTRdSUkJYT1E0WjUdHZ2mra2NpOfn88+FjKTl5dnuru7vah0S8LOOzLW3Nxs+vv7TWFhIUeFyJwezfX19Zn29nZON8DeU9/g4KC3Y+7UQQm/ev8UFBSY4eFhU1FR4d5Wml+/f6cRhoaGnIyKsHw0MDDgneh0dr+SBOzr6uoyTU1Nbh+wkIFd+jJMb28vR8KkYJeeVrD9sgxhOa6hocG50wqEFYCenh4WgbDsqq2tNZWVlSwEYdnl0ss1hBUQPRna2NjIQhCWXfX19Q/6LTCEdU9cPxn61604S5A5fZ/6fdALJY6OjryLJvS97bexv79PWP8zfVtxWVlZYH/f7u6uWVtbM5ubm2ZnZ+fWQbHFComgXmjWK2vm5+fN+vo6T4Uu0Ktd/KZPW7Ozs+bw8JCdd8Kytx81NzcXqqgIywK9jMtPy8vLZnt7m9MNrtFL3/20tLQUynUhrAzpxRJ+0fsvhHFrRVg2FjDi3xLu7e3d2009COu+D6t9fCnH75OYhOUofSokLFh3fn5OWABhgbBAWABhgbBAWABhgbBAWABhgbBAWABhwRfOXf6ln13T2tpq7ef5+SkTeqMRPy6G1aun9cofwrKotLTUu4lHGOgndl391C4b9Cpqngph3cHBAWGBsBASQVykQVgOisfjhAW2WAiBi4uLQG4wQlgO7rgHcXU1YXFESFggLBAWCIuwQFggLDhBb4t0fHxMWLAryBu5EZZDgniNkLDYYhEWwrXjTliERVgIV1jOXUyRTCatLrBe7ODXvd71cwj130tYIbCwsOCNLaOjo759ns7Kyor3UXJhxFMhCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcICCAuEBcIC/jmsHZYBlsU1rHXWAZYtaVg/WAdY9l3D+ihzzFrAkoTMBw3rl8xr1gOWTMRisc3Lo8JJmS+sCTKkDb27PCpUKZkxmZe6R8/64LZHgTIvtCHZWmlLJiftQf3GG5kZmXGZEZkOmSjrhhtiWpT5JvNJgtpIf/C3AAMA3PAuDXhm09sAAAAASUVORK5CYII="},ab13:function(e,t,a){var i=a("b622"),n=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,"/./"[e](t)}catch(i){}}return!1}},b680:function(e,t,a){"use strict";var i=a("23e7"),n=a("a691"),r=a("408a"),s=a("1148"),o=a("d039"),l=1..toFixed,c=Math.floor,m=function(e,t,a){return 0===t?a:t%2===1?m(e,t-1,a*e):m(e*e,t/2,a)},d=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},u=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){l.call({})}));i({target:"Number",proto:!0,forced:u},{toFixed:function(e){var t,a,i,o,l=r(this),u=n(e),v=[0,0,0,0,0,0],h="",p="0",f=function(e,t){var a=-1,i=t;while(++a<6)i+=e*v[a],v[a]=i%1e7,i=c(i/1e7)},b=function(e){var t=6,a=0;while(--t>=0)a+=v[t],v[t]=c(a/e),a=a%e*1e7},_=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==v[e]){var a=String(v[e]);t=""===t?a:t+s.call("0",7-a.length)+a}return t};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(h="-",l=-l),l>1e-21)if(t=d(l*m(2,69,1))-69,a=t<0?l*m(2,-t,1):l/m(2,t,1),a*=4503599627370496,t=52-t,t>0){f(0,a),i=u;while(i>=7)f(1e7,0),i-=7;f(m(10,i,1),0),i=t-1;while(i>=23)b(1<<23),i-=23;b(1<<i),f(1,1),b(2),p=_()}else f(0,a),f(1<<-t,0),p=_()+s.call("0",u);return u>0?(o=p.length,p=h+(o<=u?"0."+s.call("0",u-o)+p:p.slice(0,o-u)+"."+p.slice(o-u))):p=h+p,p}})},caad:function(e,t,a){"use strict";var i=a("23e7"),n=a("4d64").includes,r=a("44d2"),s=a("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d81d:function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").map,r=a("1dde"),s=a("ae40"),o=r("map"),l=s("map");i({target:"Array",proto:!0,forced:!o||!l},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e7f8:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"captcha"},[a("p",{staticClass:"captcha__title"},[e._v("輸入驗證碼")]),a("canvas",{staticClass:"canvas",attrs:{height:"40",width:"75",id:e.id+"__canvas"}}),a("label",{attrs:{for:"captcha"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input_code,expression:"input_code"}],attrs:{type:"text",required:"",id:e.id},domProps:{value:e.input_code},on:{input:function(t){t.target.composing||(e.input_code=t.target.value)}}})]),a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.emit_create_code(t)}}},[e._v("換一個")])])},n=[],r=(a("b680"),a("1157")),s=a.n(r),o={props:["id"],data:function(){return{input_code:""}},methods:{emit_create_code:function(){this.$bus.$emit("create_new_code")}},mounted:function(){var e=this,t="",a=function(){e.input_code="";for(var a=4,i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",r=0;r<a;r+=1){var s=parseInt(Math.floor(Math.random()*i.length),10),o=i[s];n+=o}t=n;var l=document.querySelector("#".concat(e.id,"__canvas")),c=l.getContext("2d");c.fillStyle="white",c.fillRect(0,0,100,100),c.font="bolder 25px Roboto",c.fillStyle="black",c.fillText(n,5,30),c.strokeStyle="black",c.beginPath(),c.lineWidth="1",c.moveTo(Math.floor(70*Math.random())+5,0),c.lineTo(Math.floor(60*Math.random())+5,25),c.moveTo(Math.floor(70*Math.random())+5,10),c.lineTo(Math.floor(70*Math.random())+5,28),c.stroke(),c.strokeStyle="black",c.beginPath(),c.lineWidth="1";for(var m=0;m<100;m+=1){var d=Math.floor(78*Math.random()),u=Math.floor(28*Math.random()),v=parseFloat((2*Math.random()).toFixed(2)),h=parseFloat((2*Math.random()).toFixed(2)),p=d+v,f=u+h;c.moveTo(d,u),c.lineTo(p,f)}c.stroke()};this.$bus.$on("create_new_code",(function(){a()})),this.$bus.$emit("create_new_code"),s()("#".concat(this.id)).change((function(){var a=s()("#".concat(e.id)).val()===t;e.$emit("callVerification",a)}))}},l=o,c=a("2877"),m=Object(c["a"])(l,i,n,!1,null,null,null);t["a"]=m.exports},f743:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("h1",[e._v("聯絡我們")]),a("div",{staticClass:"contact__container"},[e._m(0),""===e.user.id?a("div",{staticClass:"contact__block contact__block--rwdControl"},[a("div",{staticClass:"contact__block__header"},[e._v(" 登入會員 ")]),a("div",{staticClass:"contact__block__body"},[a("login")],1)]):e._e(),a("div",{staticClass:"contact__block contact__block--rwdControl"},[""===e.user.id?a("div",{staticClass:"contact__block__header"},[e._v(" 以訪客身分留言 ")]):e._e(),""!==e.user.id?a("div",{staticClass:"contact__block__header"},[e._v(" 快速留言 ")]):e._e(),a("div",{staticClass:"contact__block__body contact__block__body--rwdControl"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.sendMail(t)}}},[a("div",{staticClass:"myForm"},[a("label",{attrs:{for:"name"}},[a("div",{staticClass:"myForm__title"},[e._v(" 姓名 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMail.name,expression:"newMail.name"}],attrs:{type:"text",placeholder:"姓名",required:""},domProps:{value:e.newMail.name},on:{input:function(t){t.target.composing||e.$set(e.newMail,"name",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("label",{attrs:{for:"tel"}},[a("div",{staticClass:"myForm__title"},[e._v(" 聯絡電話 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMail.tel,expression:"newMail.tel"}],attrs:{type:"tel",placeholder:"聯絡電話",required:""},domProps:{value:e.newMail.tel},on:{input:function(t){t.target.composing||e.$set(e.newMail,"tel",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("label",{attrs:{for:"email"}},[a("div",{staticClass:"myForm__title"},[e._v(" E-mail ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newMail.mail,expression:"newMail.mail"}],attrs:{type:"email",placeholder:"E-mail",required:""},domProps:{value:e.newMail.mail},on:{input:function(t){t.target.composing||e.$set(e.newMail,"mail",t.target.value)}}})])]),a("div",{staticClass:"myForm"},[a("label",{attrs:{for:"content"}},[a("div",{staticClass:"myForm__title"},[e._v(" 留言給我們 ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newMail.content,expression:"newMail.content"}],attrs:{placeholder:"留言給我們",required:""},domProps:{value:e.newMail.content},on:{input:function(t){t.target.composing||e.$set(e.newMail,"content",t.target.value)}}})])]),a("div",{staticClass:"myForm myForm--df"},[a("captcha",{attrs:{id:"contact__sendMessage"},on:{callVerification:e.verify}})],1),e._m(1)])])])])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contact__block"},[i("div",{staticClass:"contact__block__header"},[e._v(" 社交平台 ")]),i("div",{staticClass:"contact__block__body"},[i("a",{staticClass:"contact__block__sharelink",attrs:{href:"#"}},[i("img",{attrs:{src:a("2d75"),alt:""}})]),i("a",{staticClass:"contact__block__sharelink",attrs:{href:"#"}},[i("img",{attrs:{src:a("92f8"),alt:""}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myForm"},[a("button",{attrs:{type:"submit"}},[e._v("送出")])])}],r=(a("99af"),a("b0c0"),a("578a")),s=a("e7f8"),o={components:{login:r["a"],captcha:s["a"]},data:function(){return{newMail:null,captchaPass:!1}},computed:{user:function(){var e={};return this.$bus.$on("son_get_data",(function(t){e=t.member})),this.$bus.$emit("son_call_data"),e}},methods:{createMail:function(){this.newMail={id:this.user.id,time:Date.parse(new Date),name:this.user.name,tel:this.user.tel,mail:this.user.email,content:"",read:!1,reply:{id:"",time:"",name:"",content:""}}},sendMail:function(){var e=(new Date).getTime(),t=JSON.stringify(e);if(this.captchaPass){if(""===this.newMail.id){var a="mail".concat(t);this.newMail.id=a}else{var i="".concat(this.user.id).concat(t);this.newMail.id=i}this.$bus.$emit("add_new_mail",this.newMail),alert("留言送出成功!"),this.createMail()}else alert("驗證碼錯誤");this.$bus.$emit("create_new_code")},verify:function(e){this.captchaPass=e}},created:function(){var e=this;this.$bus.$on("createMail",(function(){e.createMail()})),this.createMail()}},l=o,c=a("2877"),m=Object(c["a"])(l,i,n,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1e63452e.ac189754.js.map