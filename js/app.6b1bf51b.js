(function(n){function e(e){for(var t,l,r=e[0],o=e[1],u=e[2],d=0,s=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&s.push(a[l][0]),a[l]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t]);p&&p(e);while(s.length)s.shift()();return c.push.apply(c,u||[]),i()}function i(){for(var n,e=0;e<c.length;e++){for(var i=c[e],t=!0,l=1;l<i.length;l++){var r=i[l];0!==a[r]&&(t=!1)}t&&(c.splice(e--,1),n=o(o.s=i[0]))}return n}var t={},l={app:0},a={app:0},c=[];function r(n){return o.p+"js/"+({}[n]||n)+"."+{"chunk-1a90f2ae":"e622b7ad","chunk-1e63452e":"0d77e406","chunk-2398d9a9":"6dde8e7d","chunk-2d0afdef":"46b31286","chunk-2d0e5232":"e47b8be3","chunk-2d0f0a00":"39db5a3a","chunk-2d21f87b":"e1b8276a","chunk-2d22c2d1":"de5da333","chunk-2fd82cd3":"8706a6e3","chunk-051a6a8e":"1e10b24e","chunk-550df6e0":"ba73d03b","chunk-8ad5e42a":"6b492bd4","chunk-55fbc1e0":"e57c68d7","chunk-5b55498e":"dac273a4","chunk-69ded143":"2e9e3ec6","chunk-ed178fec":"3c1ed611"}[n]+".js"}function o(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(n){var e=[],i={"chunk-69ded143":1};l[n]?e.push(l[n]):0!==l[n]&&i[n]&&e.push(l[n]=new Promise((function(e,i){for(var t="css/"+({}[n]||n)+"."+{"chunk-1a90f2ae":"31d6cfe0","chunk-1e63452e":"31d6cfe0","chunk-2398d9a9":"31d6cfe0","chunk-2d0afdef":"31d6cfe0","chunk-2d0e5232":"31d6cfe0","chunk-2d0f0a00":"31d6cfe0","chunk-2d21f87b":"31d6cfe0","chunk-2d22c2d1":"31d6cfe0","chunk-2fd82cd3":"31d6cfe0","chunk-051a6a8e":"31d6cfe0","chunk-550df6e0":"31d6cfe0","chunk-8ad5e42a":"31d6cfe0","chunk-55fbc1e0":"31d6cfe0","chunk-5b55498e":"31d6cfe0","chunk-69ded143":"0f92c67e","chunk-ed178fec":"31d6cfe0"}[n]+".css",a=o.p+t,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===t||d===a))return e()}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){u=s[r],d=u.getAttribute("data-href");if(d===t||d===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var t=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+n+" failed.\n("+t+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=t,delete l[n],p.parentNode.removeChild(p),i(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){l[n]=0})));var t=a[n];if(0!==t)if(t)e.push(t[2]);else{var c=new Promise((function(e,i){t=a[n]=[e,i]}));e.push(t[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=r(n);var s=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(p);var i=a[n];if(0!==i){if(i){var t=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+t+": "+l+")",s.name="ChunkLoadError",s.type=t,s.request=l,i[1](s)}a[n]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},o.m=n,o.c=t,o.d=function(n,e,i){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(i,t,function(e){return n[e]}.bind(null,t));return i},o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=d;c.push([0,"chunk-vendors"]),i()})({0:function(n,e,i){n.exports=i("56d7")},"003e":function(n,e){(function(n,e,i){var t,l=n.getElementsByTagName(e)[0];n.getElementById(i)||(t=n.createElement(e),t.id=i,t.src="https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js",l.parentNode.insertBefore(t,l))})(document,"script","facebook-jssdk")},1171:function(n,e,i){n.exports=i.p+"img/1ee48c4dd09fda3a1a10faef4eb42a0f.56131e3d.jpg"},"129c":function(n,e,i){n.exports=i.p+"img/5473841147f184ad659ddc641bb4620b.f9dcf7b5.jpg"},1684:function(n,e,i){n.exports=i.p+"img/9353b1ade7f63643be5f18a1fdd0493d.0de682f8.jpg"},"1aa2":function(n,e,i){n.exports=i.p+"img/4dcd1f8d37c692feb1a401c7d16b624e.6df061bd.jpg"},"1d3d":function(n,e,i){n.exports=i.p+"img/f920d09e6f0a5cda0c3a14f77253300b.e187a6cc.jpg"},2031:function(n,e,i){n.exports=i.p+"img/57ecb7ae85d328c29c1920cd1619db40.2582f9ee.jpg"},2146:function(n,e,i){n.exports=i.p+"img/894480a22d67a46a9b8b6a256f9af6e9.827b77e4.jpg"},"232c":function(n,e,i){n.exports=i.p+"img/9ae582904dd0714765e072dce9bd3133.07812649.jpg"},"2fbb":function(n,e,i){n.exports=i.p+"img/45ab049212fab22cb82d9774791b72a5.853ddd15.jpg"},3925:function(n,e,i){n.exports=i.p+"img/e2ba4176fd04f354a569f27239e2a9f5.455a1c20.jpg"},"397b":function(n,e,i){n.exports=i.p+"img/8e2691d4897c02207eea570a0ef0d2de.215fb38e.jpg"},"3af1":function(n,e,i){n.exports=i.p+"img/1074722c095c5d6c66ce6235a56cb4b1.19d6e974.jpg"},"3ed6":function(n,e,i){n.exports=i.p+"img/7f008db95d06c8dbe2f82d0b385b50b2.2102edce.jpg"},"4a95":function(n,e,i){n.exports=i.p+"img/5b72a9a700b20db128bc60ca209f15f1.1f3c763d.jpg"},"557a":function(n,e,i){n.exports=i.p+"img/61769c140faa8de09ec5b1e10b054667.62be6b9d.jpg"},"56d7":function(n,e,i){"use strict";i.r(e);i("a15b"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("2b0e"),l=i("5f5b"),a=(i("f9e3"),i("2dd8"),i("bc3a")),c=i.n(a),r=i("a7fe"),o=i.n(r),u=i("1157"),d=i.n(u),s=i("5e2b"),p=i("b417"),f=i.n(p),b=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},m=[],h=(i("7db0"),i("c740"),i("a434"),i("b0c0"),{data:function(){return{profile:{},authorized:!1,products:[{title:"黃色鬱金香",id:"UG061",price:999,is_new:!0,on_banner:!0,category:[{chinese:"黃黃的",english:"yellow"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("3af1"),banner:i("9132"),others:[i("df8e"),i("c133")]},content:"<p>\n  鬱金香（學名：Tulipa gesneriana）是百合科鬱金香屬的一個栽培種，又稱洋荷花、旱荷花。\n</p>\n<br>\n<p>\n  絕大多數鬱金香屬栽培品種都屬於本種，其起源地為土耳其，可能起源於眼斑鬱金香（學名：Tulipa\n  agenensis）、亞美尼亞鬱金香（學名：Tulipa armena）、準噶爾鬱金香（學名：Tulipa suaveolens）等種的雜交。[1]\n</p>\n<br>\n<p>\n  為人熟知的外銷大國荷蘭初次引進鬱金香是在16世紀末，因生長地區緯度不同而花期各異，普遍在3月下旬至5月上旬。雖然全世界約有2,000多個鬱金香品種，但大量生產者大約只有150種。\n</p>\n<br>\n<p>\n  被歐洲人稱為「魔幻之花」的鬱金香，自古以來就有一種莫名的魔力使園藝學家熱衷於品種改良，甚至有人傾家蕩產只為了它那稀有的球根[來源請求]。後來鬱金香是成為了荷蘭的國花。\n</p>\n<br>\n<p>\n  亞洲很多國家也種植鬱金香，土耳其等國使用他們裝飾，還有伊朗在伊朗國旗和伊朗國徽上也可以看見有鬱金香的圖案。\n</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"紅色玫瑰花",id:"UB004",price:1314,is_new:!1,on_banner:!1,category:[{chinese:"紅紅的",english:"red"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("883a"),banner:i("ed86"),others:[i("796b"),i("1684")]},content:"<p>在歐洲諸語言中，所有薔薇屬植物都是使用同一個詞，如英語、法文都是rose，德語是die Rose。中國原產的薔薇屬物種以薔薇（R. multiflora）、月季（R. chinensis）和玫瑰（R. rugosa）最為常見，因此rose一詞常翻譯成「薔薇」、「月季」或「玫瑰」，造成名稱使用混亂。</p>\n          ",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"藍色玫瑰花",id:"UG060",price:1520,is_new:!0,on_banner:!0,category:[{chinese:"藍藍的",english:"blue"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("557a"),banner:i("1171"),others:[i("3ed6"),i("fa21")]},content:'<p>藍玫瑰包含了基因轉殖的玫瑰品種和染色後的玫瑰。</p>\n<p>自然界中並不存在藍色的玫瑰。第一種基因轉殖合成的藍玫瑰品種，由日本三得利公司在2004年首次培育成功[1]，該品種由於含有翠雀花素（一種花青素）而呈色；[2][3]雖然取名「藍玫瑰」，它真正的花色介於薰衣草色和藕合色之間。[4] 天津大學和中科院的研究人員在2018年也用白玫瑰通過基因轉殖技術培育出了藍玫瑰[5]。</p>\n<p>藍色妖姬等品種不是真正的藍玫瑰，而是用白玫瑰或白月季染色成的。</p>\n<p>在一些文化中，藍玫瑰傳統上與"藍色"皇室血液聯繫在一起，因此藍玫瑰代表王權和輝煌。 由於藍玫瑰實質上的缺失，它們也象徵神秘和渴望實現不可能的事物。[6]</p>',description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"黃色小雛菊",id:"UG035",price:850,is_new:!1,on_banner:!1,category:[{chinese:"黃黃的",english:"yellow"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("be04"),banner:i("232c"),others:[i("a4ad"),i("8232")]},content:"<p>小雛菊的顏色繁多，每種顏色代表著不同的含義，那麼小雛菊顏色不同花語分別是什麼呢，紫雛菊代表著隱瞞的愛，綠雛菊代表著暗戀，白雛菊代表著純潔的美，黃雛菊代表著和平、希望，藍雛菊代表著幸福、純潔、天真的意思，分別適合送給身邊不同的人。</p>\n<p>黃雛菊在小雛菊的品種中是十分常見的，雖然顏色沒有什麼特殊的地方，但是黃雛菊代表的含義十分豐富，它代表著和平、希望的顏色，適合送給身邊朋友、親人、愛人等各種場合，可以增加兩人之間的友情、感情。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"藍色薰衣草",id:"UG050",price:2050,is_new:!0,on_banner:!0,category:[{chinese:"藍藍的",english:"blue"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("cb46"),banner:i("7590"),others:[i("2fbb"),i("a9ce")]},content:"<p>薰衣草屬（學名：Lavandula）是唇形科的一個屬，約有25-30種。多年生草本、亞灌木或小灌木[1]。</p>\n<p>原產地由地中海地區（如西班牙、葡萄牙）、南至熱帶非洲、東至印度，包括加那利群島、非洲北部和東部、歐洲南部、地中海地區、阿拉伯半島和印度等地區。</p>\n<p>狹葉薰衣草（又叫真薰衣草或英國薰衣草）原産於地中海的西部，它的出油率較高，出油品質最高。提鍊後得到的精油可以直接在皮膚上使用。主要種植地是歐洲的英國，保加利亞的高山地區，大洋洲的澳大利亞和中國大陸的甘肅清水地區少量種植。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"蘭花",id:"LG011",price:1800,is_new:!1,on_banner:!1,category:[{chinese:"白白的",english:"white"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("397b"),banner:i("b4e9"),others:[i("6e51")]},content:"<p>蘭花是很多人心目中最想養的花卉，也是很多人養不好的花卉。蘭花在中國歷來被看做是高潔典雅的象徵，並與「梅、竹、菊」並列，合稱「四君子」。那麼蘭花是如何養殖的呢？</p>\n<p>一，蘭花的最佳生長土壤：蘭花用土應以腐殖質為主，主要採用腐葉土或山林腐殖土。在南方用原產地的腐殖土，俗稱蘭花泥；也可用腐葉土、蛭石、珍珠岩等及人工配製成疏鬆、通氣、透水的培養土。所配製培養土均是呈微酸性的。選配不當，保水性太強或澆水過頻，導致土壤老是濕漉漉的。當這種過濕狀態持續時間超過蘭花所能的忍受限度時，蘭根就腐爛了，蘭株最終死亡。此外，也有人聽說蘭花「怕」水，就很少給它澆水，結果矯枉過正，蘭花被「渴死」了，這種情況也有的。由此可見，能否掌控好土壤中的含水量，是決定養蘭成敗的關鍵。</p>\n<p>二，最佳生長溫度和澆水：蘭花生長適宜溫度為16～24℃。冬夏都要注意溫度的控制。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"水蜜桃禮盒",id:"PH004",price:2680,is_new:!0,on_banner:!0,category:[{chinese:"紅紅的",english:"red"},{chinese:"有水果吃",english:"with_fruit"}],images:{main:i("2146"),banner:i("2031"),others:[i("8f4a"),i("1d3d")]},content:"<p>桃（學名：Prunus persica）是薔薇科李屬的一種，花可以觀賞，果實多汁，作為水果，可以生食或製桃脯、罐頭等，核仁也可以食用。\n\n  果肉有白色和黃色的，一般在日本最受歡迎的品種多為白色果肉，香甜多汁；歐洲、澳洲和北美洲的人則在歷史上喜歡黃色果肉較酸的品種。</p>\n<p>桃原產於中國，最遠可以追溯到周朝，《詩經·國風·周南》即有〈桃夭〉一詩，逐漸傳播到亞洲周邊地區，從波斯傳入西方，桃的種小名「persica」意思就是波斯的水果。</p>\n<p>桃是一種溫帶植物，需要一定的夏日光照但晚上要比較涼爽的氣溫及充足的水分和肥料，而且不耐旱。一般用嫁接法種植。把樹型要修整為張開的手掌形以使各部分能獲得充分的陽光（和蘋果要有一個向上的中心領導枝不同），桃園和蘋果園可以從樹型上很容易地區別。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"粉紅玫瑰",id:"FV068",price:1314,is_new:!1,on_banner:!1,category:[{chinese:"紅紅的",english:"red"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("6169"),banner:i("a748"),others:[i("c0e3")]},content:"<p>玫瑰一直是愛情的象徵，沒有人不喜愛玫瑰。而粉紅色玫瑰更是女人們的最好，那粉紅色玫瑰花語是什麼呢?粉紅色玫瑰花語代表著什麼呢?今天小編就給大家講一講，補充一下知識。</p>\n<p>【粉紅色玫瑰花語】</p>\n<p>粉色玫瑰花語就和粉玫瑰的顏色一樣，帶著淡淡的粉色，粉玫瑰花語的內容是這樣的：初戀，特別的關懷，喜歡你那燦爛的微笑。粉玫瑰花語還是與美好的愛情有關，而且是純真的初戀哦。\n\n  送花對象：愛人、情人\n  \n  花語：感動、愛的宣言、銘記於心 、初戀，喜歡你那燦爛的笑容，粉玫瑰贈予給堅實的愛情。彼此寄託，彼此信任。一縷微笑，絕代佳人，像雪一樣白，像月亮一樣亮。一花一鳥，一樹一石，一山一水，都負荷著無限的深意、無邊的情誼。一念花開，一念花落。roseonly以可愛嬌嫩之粉玫瑰，與愛配料，調製魔藥，您親吻花瓣之時，魔力揮散，與佳人廝守，即得堅實的愛情。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"草莓禮盒",id:"SB014",price:2688,is_new:!1,on_banner:!1,category:[{chinese:"紅紅的",english:"red"},{chinese:"有水果吃",english:"with_fruit"}],images:{main:i("6543"),banner:i("c4e8"),others:[i("3925"),i("129c")]},content:"<p>草莓（學名：Fragaria × ananassa），為草莓屬中最常見的雜交栽培種。也常指其果實。草莓是多年生草本植物，一般存活時間為3年左右。在中國大陸和台灣稱草莓，香港稱為士多啤梨。</p>\n<p>最佳的保存環境是保存在接近零度但不結霜的冰箱。除此之外，亦有使用紫外線或惰性氣體保存。急凍亦是其中有效的保存方法。洗草莓時，先輕輕洗淨再去掉蒂頭，可避免維生素C流失，附著在草莓上的雜質，也不會在清洗過程中從蒂頭跑進去。</p>\n<p>在早晨或傍晚採收，新鮮食用宜在成熟至八成時採收，加工用的只要在著色七至八成便可。採摘時必須保留半厘米至一厘米的果梗，太長的話容易損害其他草莓。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]},{title:"蒲公英",id:"UB005",price:680,is_new:!0,on_banner:!0,category:[{chinese:"白白的",english:"white"},{chinese:"沒水果吃",english:"no_fruit"}],images:{main:i("1aa2"),banner:i("4a95"),others:[i("ace6"),i("a7de"),i("b010")]},content:"<p>蒲公英屬（學名：Taraxacum）植物通稱蒲公英、黃花地丁、婆婆丁，華花郎、蒲公草、食用蒲公英、尿床草、西洋蒲公英，為菊目菊科的一屬，是溫帶至亞熱帶常見的一種植物。蒲公英採孤雌生殖，葉邊的形狀像獅子的尖牙。其英文名字Dandelion來自法語dent-de-lion，正是獅子牙齒之意，蒲公英花語為我在遠處為你的幸福而祈禱。</p>\n<p>蒲公英為多年生草本植物，花莖是空心的，折斷之後有白色的乳汁。匙形或狹長倒卵形的葉子呈蓮座狀平鋪，羽狀淺裂或齒裂。</p>\n<p>早春的嫩蒲公英也是一種野菜。現在已經有家養出來的，比野生的大很多。嫩蒲公英可以涼拌、燒湯或炒熟。老了的也能吃，但是比較苦。不苦的蒲公英也可以拌肉作餃子餡，味道和西洋菜做的餡差不多。歐洲人在中世紀時就已經用蒲公英花來釀酒。蒲公英葉子含有很多維生素A和維生素C。 蜜蜂也常到蒲公英採集花粉和蜜糖。</p>",description:[{title:"商品尺寸",text:"<ul>\n  <li>\n    長: 15cm\n  </li>\n  <li>\n    寬: 15cm\n  </li>\n  <li>\n    高: 15cm\n  </li>\n</ul>"},{title:"最佳觀賞期",text:"<ul>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n  <li>\n    最佳觀賞期\n  </li>\n</ul>"},{title:"照顧方式",text:"<ul>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n  <li>\n    照顧方式\n  </li>\n</ul>"},{title:"付款方式",text:"<ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",text:"<ul>\n  <li>\n    黑貓宅配\n  </li>\n  <li>\n    專人配送\n  </li>\n  <li>\n    門市取貨\n  </li>\n</ul>"},{title:"購物須知",text:"<ul>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n  <li>\n    購物須知購物須知購物須知購物須知購物須知\n  </li>\n</ul>"}]}],news:[{id:"NEW2020080501",title:"客製化花藝也能做電商，佈局「數位虛擬花店」",date:"2020-08-05",description:"\n          <p>2020 年零售業者因新冠肺炎疫情影響紛紛開展線上通路，仍有不少店家因為商品性質而觀望不前。以婚宴會場、精品活動合作聞名的花藝店「花意空間」，卻超前部署拓展電商通路，透過客製化的花束搶佔線上商機、更在今年母親節檔期利用線上網店提升品牌曝光，大幅增加品牌的會員與 LINE 好友數，以利進行顧客再行銷。透過電商通路作為銷售生力軍，結合實體店面提供的專業花藝服務，在疫情間仍創下好的銷售成績，正是花意空間把握數位轉型的美好成果。</p>\n          ",banner:i("ab08"),content:"<p>重新定義花店概念，「花意空間」透過電商讓消費者也能下單客製化花藝</p>\n<p>於 1996 成立於台北的花意空間，為台灣最具規模的花店之一，創辦人師承法國有名花藝師，為了把法國的工藝及美學透過實體的花藝佈置傳達給更多台灣人。如今花意空間在台灣已有兩間實體店面，在上海更成立旗艦店和四家分店，除了提供客製化花藝服務、會場佈置外，近期更發展花藝課程。</p>\n<p>經營即將邁向 25 年的花意空間，仍致力在經營模式上追求創新，年初雖然有許多實體店面受疫情影響，但花意空間團隊卻早已進行數位轉型，並透過 SHOPLINE 開啟電商經營之路，讓喜愛精緻花藝的朋友們能夠不受疫情限制，隨時訂購花束、即時掌握花店資訊。</p>",remark:"\n          <br>1、 櫻花\n<br>搖曳英華揮冷月 橫斜倩影弄余香\n<br>芳心蕩破春歸路 落瓣如刀斷客腸\n<br>\n<br>2、 菊花\n<br>獨立西風寧自黃 孤標能傲九秋霜\n<br>非凡志醞非凡品 自在花開自在香\n<br>\n<br>3、 桃花\n<br>麗影繽紛迎暖日 紅妝窈窕綻芳叢\n<br>勸君惜取三春色 莫負東風萬點紅\n<br>\n<br>4、 杜鵑\n<br>過眼斑斕花弄影 彤彤開似錦霞迎\n<br>子規啼卻心頭血 片片紅云動客情\n<br>"},{id:"NEW2020041401",title:"（歷史消息）台北年後賞花指南！士林官邸、陽明山等4處免費觀賞",date:"2020-04-14",description:"\n          <p>假日賞花何處去？盤點台北市2020年第一季賞花指南，台北市即將登場的花季活動，除士林官邸梅花、陽明山的櫻花，還有鬱金香，草花花海圖等，均可免費參觀。</p><p>\n率先登場的是「2020樂活夜櫻季」將於2月2日開幕至3月1日，屆時可到內湖樂活公園漫步河畔，欣賞夜空為背景、絢爛燈光點綴的櫻花步道。公園處還設計櫻花郵筒，2月22日前開放索取限量明信片傳情。</p>",banner:i("b29e"),content:"<p>\n「士林官邸鬱金香展」則在西洋情人節2月14日揭幕，至2月23日，每日上午8時至下午18時開放參觀，展場以日本、荷蘭鬱金香妝點布置，營造夢幻鬱金香花海，在市區就有被花朵簇擁的幸福感，展場規畫共計35個攤位。同時士林官邸自大年初一起展出春節花卉展至3月1日，可依同享受喜氣洋洋的花之饗宴，室內展館開放時間是上午8點30分至下午5點。</p><p>\n成美右岸河濱公園用多達6萬盆當季花草打造542坪的2區花海，如四季秋海棠、一串紫、金魚草、情人菊等，自即日起可以一路觀賞至明年2月上旬。</p><p>\n北市觀山河濱公園基隆河5號疏散門前使用約7萬6千多盆當季草花打造2067平方公尺的花海，透過一串紅、一串紫、四季秋海棠、孔雀草、黃花瑪格麗特、非洲鳳仙花、香堇菜、三色堇，以及大眾十分喜愛的羽葉薰衣草鋪排充滿生命力的幾何圖騰。目前約有7成以上草花盛開，花況預計元宵節前全面盛開，可一路觀賞至3月下旬。</p>",remark:"\n                    <br>1、 櫻花\n          <br>搖曳英華揮冷月 橫斜倩影弄余香\n          <br>芳心蕩破春歸路 落瓣如刀斷客腸\n          <br>\n          <br>2、 菊花\n          <br>獨立西風寧自黃 孤標能傲九秋霜\n          <br>非凡志醞非凡品 自在花開自在香\n          <br>\n          <br>3、 桃花\n          <br>麗影繽紛迎暖日 紅妝窈窕綻芳叢\n          <br>勸君惜取三春色 莫負東風萬點紅\n          <br>\n          <br>4、 杜鵑\n          <br>過眼斑斕花弄影 彤彤開似錦霞迎\n          <br>子規啼卻心頭血 片片紅云動客情\n          <br>"}],abouts:[],orderInfos:[{title:"訂購方式",content:"<ul>\n    <li>線上訂購<br>\n        線上選購 &gt; 加入購物車&nbsp;&gt; 填寫訂購資料&nbsp;&gt;&nbsp;進行結帳 &gt; 訂購完成。</li>\n    <li>Line或FB訂購<br>\n        將欲訂購的商品及配送資訊，傳送至Line或FB粉絲專頁。</li>\n</ul>"},{title:"付款方式",content:"            <ul>\n<li>ATM</li>\n<li>信用卡</li>\n<li>超商付款</li>\n<li>門市付款</li>\n</ul>"},{title:"運送方式",content:"<p>＊因每樣商品不同，我們為您安排適當配送方式。</p>\n\n<ul>\n    <li>專人配送<br>\n        專人配送時間為週一至週日<br>\n        上午 08：00－13：00、下午 14：00－18：00。<br>\n    </li>\n    <li>黑貓宅配<br>\n        使用訂製宅配箱出貨，提供商品完整保護，並由台灣地區最好的物流進行配送。<br>\n        鮮花類商品一律使用低溫宅配出貨，確保商品送達時保持完好狀態。<br>\n    </li>\n    <li>門市取貨<br>\n        門市營業時間: 週一至週日08:00-20:00</li>\n</ul>\n\n<p>＊因每樣商品不同，我們為您安排適當配送方式。</p>"},{title:"照顧方式",content:"<p>如何照顧自己的盆栽植物，你知道嗎，教你小方法</p>\n<ul>\n    <li>在花盆下放一個碟子，以承接排水。 碟子可以防止髒水直接流在你的地板、窗台或書桌上。</li>\n    <li>當土壤乾燥時或按照植物標籤上的指示澆水。</li>\n    <li>添加慢速釋放肥料，或如標籤所建議的施肥。</li>\n    <li>每當你看到枯葉時就修剪你的植物。</li>\n    <li>切斷植物的任何部分腐爛或真菌並注意對付害蟲。</li>\n</ul>"}],mails:[{id:"1608268690000",name:"Patrick Star",tel:"09123456789",mail:"pa_star@seastar.com",content:"No this is Patrick."}],orders:[{id:"20210128171816275",date:"20210128",sum:6600,cart:{sum:7600,products:[{img:"img/61769c140faa8de09ec5b1e10b054667.62be6b9d.jpg",title:"藍色玫瑰花",id:"UG060",price:1520,quantity:5}]},coupon:{id:"minus1000",description:"折價1000元",discount_method:"",discount_index:0,discount:1e3,dMethod:"minus",dIndex:1e3},member:{id:"james",name:"郭達軒",gender:"male",birthday:"1993-08-16",tel:"0975938293",email:"hugh820816@gmail.com",password:"hugh820816",favorites:["UB004","SB014"]},buyer:{name:"郭達軒",tel:"0975938293",email:"hugh820816@gmail.com"},invoice:{type:"personal",address:{county:"嘉義市",district:"東區",zipCode:"600",detail:"保義路278號"},carrier:"no"},recipient:{name:"郭哲安",tel:"0975021591",address:{county:"新北市",district:"樹林區",zipCode:"238",detail:"太平路150巷27號4F"}},delivery:{get_from_store:!1,anonymous:!0,esdDate:"2021-02-05",esdTime:"afternoon",has_recipient2:!1,recipient2Name:""},others:{cardContent:"忽如一夜春風來",remark:"千樹萬樹梨花開"},payment:{time:"2021 01月28日 17:18:35",status:"paid",type:"creditCard",creditNum:"1234123412341234",creditExp:{m:"12",y:"25"},cvc:"123"}}],coupons:[{id:"minus1000",description:"折價1000元",discount_method:"minus",discount_index:1e3,discount:0},{id:"times0.8",description:"8折優惠",discount_method:"times",discount_index:.8,discount:0}],members:[{id:"james",name:"郭達軒",gender:"male",birthday:"1993-08-16",tel:"0975938293",email:"hugh820816@gmail.com",password:"hugh820816",favorites:["UB004","SB014"]},{id:"fb__3700959833274377",name:"test_james_fb",gender:"male",birthday:"1968-10-12",tel:"091235678",email:"testfb@test.com",password:"password123",favorites:["UB005","SB014","UG050"]},{id:"123456",name:"sherry",gender:"female",birthday:"2000-01-01",tel:"0987654321",email:"sherry@sherry.com",password:"55555555",favorites:["UG035"]}],administrators:[{id:"admin",name:"郭達軒",account:"admin",password:"admin"},{id:"admin2",name:"James",account:"admin2",password:"admin2"}],member:{id:"",name:"",gender:"",birthday:"",tel:"",email:"",password:"",favorites:[]},administrator:{id:"",name:"",account:"",password:""},newOrder:{id:"",date:"",sum:"",cart:{sum:0,products:[]},coupon:{id:"",description:"",dMethod:"",dIndex:"",discount:0},member:{},buyer:{name:"",tel:"",email:""},invoice:{type:""},recipient:{name:"",tel:"",address:{}},delivery:{get_from_store:!1,anonymous:!1,esdDate:"",esdTime:"",has_recipient2:!1,recipient2Name:""},others:{cardContent:"",remark:""},payment:{status:"not yet",type:"",creditNum:"",creditExp:{m:"",y:""},cvc:""}}}},methods:{fb_login:function(){var n=this;if(FB.login((function(e){n.fb_status_change(e)}),{scope:"email, public_profile",return_scopes:!0}),this.authorized){var e="fb__".concat(this.profile.id),i=this.members.find((function(n){return n.id===e}));if(void 0===i){"fb__".concat(e),"".concat(this.profile.name),"".concat(this.profile.email);this.register(newMember)}else this.login(e)}},fb_logout:function(){var n=this;FB.logout((function(e){n.fb_status_change(e)})),this.authorized||this.logout()},fb_status_change:function(n){var e=this;"connected"===n.status?(e.authorized=!0,e.fb_getProfile()):(n.status,e.authorized=!1,e.profile={})},fb_getProfile:function(){var n=this;FB.api("/me?fields=name,id,email",(function(e){n.profile=e}))},login:function(n){var e=this.members.find((function(e){return e.id===n}));this.member=e,alert("登入成功")},logout:function(){this.member={id:"",name:"",gender:"",birthday:"",tel:"",email:"",password:"",favorites:[]},this.authorized&&this.fb_logout(),alert("登出成功")},register:function(n){this.members.push(n),alert("註冊成功")}},created:function(){var n=this;this.$bus.$on("son_call_data",(function(){n.$bus.$emit("son_get_data",n.$data)})),this.$bus.$on("add_new_mail",(function(e){n.mails.push(e)})),this.$bus.$on("add_new_member",(function(e){n.register(e)})),this.$bus.$on("log_in",(function(e){n.login(e.id)})),this.$bus.$on("log_out",(function(){n.logout()})),this.$bus.$on("fb_login",(function(e){e?n.fb_login():n.fb_logout()})),this.$bus.$on("edit_favorite",(function(e,i){if(i)n.member.favorites.push(e);else{var t=n.member.favorites.findIndex((function(n){return n===e}));n.member.favorites.splice(t,1)}})),this.$bus.$on("add_new_order",(function(e){n.orders.push(e)})),this.$bus.$on("make_payment",(function(e,i){console.log(e,i);var t=n.orders.find((function(n){return n.id===e}));t.payment=i,t.payment.status="paid"}))},mounted:function(){var n=this;window.fbAsyncInit=function(){FB.init({appId:"256052322609908",cookie:!0,xfbml:!0,version:"v9.0"}),FB.AppEvents.logPageView(),FB.getLoginStatus((function(e){n.status_change(e),console.log(e)}))}}}),g=h,x=i("2877"),_=Object(x["a"])(g,b,m,!1,null,null,null),y=_.exports,v=(i("d3b7"),i("8c4f"));t["default"].use(v["a"]);var k=[{path:"/",name:"Home",component:function(){return Promise.all([i.e("chunk-2fd82cd3"),i.e("chunk-8ad5e42a")]).then(i.bind(null,"bb51"))}},{path:"/front",name:"Front",component:function(){return Promise.all([i.e("chunk-2fd82cd3"),i.e("chunk-550df6e0")]).then(i.bind(null,"de8a"))},children:[{path:"onlinestore",name:"Onlinestore",chinese:"線上購物",component:function(){return i.e("chunk-2d0e5232").then(i.bind(null,"92cf"))},onNav:!0,children:[{path:":category",name:"Category",component:function(){return Promise.all([i.e("chunk-2fd82cd3"),i.e("chunk-051a6a8e")]).then(i.bind(null,"39b9"))}},{path:":category/:id",name:"Product",component:function(){return i.e("chunk-69ded143").then(i.bind(null,"658f"))}}]},{path:"news",name:"News",chinese:"最新消息",component:function(){return i.e("chunk-2d0afdef").then(i.bind(null,"0fbe"))},onNav:!0},{path:"news/:id",name:"NewsDetail",chinese:"新聞內容",component:function(){return i.e("chunk-55fbc1e0").then(i.bind(null,"bea4"))},onNav:!1},{path:"about",name:"About",chinese:"關於我們",component:function(){return i.e("chunk-2d0f0a00").then(i.bind(null,"9cbb"))},onNav:!0},{path:"orderinfo",name:"Orderinfo",chinese:"購物指南",component:function(){return i.e("chunk-2d22c2d1").then(i.bind(null,"f1b2"))},onNav:!0},{path:"contact",name:"Contact",chinese:"聯絡我們",component:function(){return i.e("chunk-1e63452e").then(i.bind(null,"f743"))},onNav:!0},{path:"checkout",name:"Checkout",chinese:"結帳",component:function(){return i.e("chunk-ed178fec").then(i.bind(null,"2cf6"))},onNav:!1},{path:"checkout_payment/:orderId",name:"Checkout_payment",chinese:"付款頁面",component:function(){return i.e("chunk-2398d9a9").then(i.bind(null,"d31c"))},onNav:!1},{path:"login",name:"LoginPage",chinese:"登入",component:function(){return i.e("chunk-5b55498e").then(i.bind(null,"bd13"))},onNav:!1},{path:"member",name:"Member",chinese:"會員專區",component:function(){return i.e("chunk-1a90f2ae").then(i.bind(null,"bfa4"))},onNav:!1},{path:"test",name:"",chinese:"",component:function(){return i.e("chunk-2d21f87b").then(i.bind(null,"d9e5"))},onNav:!1}]}],j=new v["a"]({routes:k}),w=j;t["default"].prototype.$bus=new t["default"];i("003e"),i("85ae");t["default"].config.productionTip=!1,t["default"].prototype.$=d.a,t["default"].use(l["a"]),t["default"].use(o.a,c.a),t["default"].use(s["c"]),t["default"].use(f.a),Date.prototype.yyyymmdd=function(){var n=this.getMonth()+1,e=this.getDate();return[this.getFullYear(),(n>9?"":"0")+n,(e>9?"":"0")+e].join("")},Date.prototype.msCode=function(){var n=this.getMonth()+1,e=this.getDate(),i=this.getHours(),t=this.getMinutes(),l=this.getSeconds(),a=this.getMilliseconds();return[this.getFullYear(),(n>9?"":"0")+n,(e>9?"":"0")+e,i,t,l,a].join("")},Date.prototype.timeText=function(){var n=this.getMonth()+1,e=this.getDate(),i=this.getHours(),t=this.getMinutes(),l=this.getSeconds();return[this.getFullYear()," ",(n>9?"":"0")+n+"月",(e>9?"":"0")+e+"日"," ",i+":",t+":",l].join("")},new t["default"]({router:w,render:function(n){return n(y)}}).$mount("#app")},6169:function(n,e,i){n.exports=i.p+"img/b2afebe130ce13231e1d35e668eca253.68bd5860.jpg"},6543:function(n,e,i){n.exports=i.p+"img/e298a71fed3f63ef2a6fd363649cd94d.b294b209.jpg"},"6e51":function(n,e,i){n.exports=i.p+"img/d951cb3b496fdfdab0013fec544bddfb.662e0037.jpg"},7590:function(n,e,i){n.exports=i.p+"img/8825f9e77655b58539eba0f7baa03e57.d459d0c0.jpg"},"796b":function(n,e,i){n.exports=i.p+"img/16fbb9c53a8779a1ff498b4c78e5f764.25a77542.jpg"},8232:function(n,e,i){n.exports=i.p+"img/b4572f5ba883caa1c3b30a218246fe3b.e4da9e32.jpg"},"85ae":function(n,e,i){},"883a":function(n,e,i){n.exports=i.p+"img/e8aee34a40ce4a0c3ead22f649ee7894.f0904986.jpg"},"8f4a":function(n,e,i){n.exports=i.p+"img/39dba23df52b66b8c311d802d880cb27.e495394d.jpg"},9132:function(n,e,i){n.exports=i.p+"img/c22c4693d293f670e2242a0a5a866da8.58700e09.jpg"},a4ad:function(n,e,i){n.exports=i.p+"img/2826d6eea015c2fed4d727240aa67b97.18c7937d.jpg"},a748:function(n,e,i){n.exports=i.p+"img/4c30cd364d805c69067b7e4c5694aa89.536f6f25.jpg"},a7de:function(n,e,i){n.exports=i.p+"img/9e1b23b12fb18af8f731d7d6e95bb705.de31e279.jpg"},a9ce:function(n,e,i){n.exports=i.p+"img/53d23594142c97ef976235568b8d7468.0912b7be.jpg"},ab08:function(n,e,i){n.exports=i.p+"img/a8725cb076653957a52d4079b6465679.ba522607.jpg"},ace6:function(n,e,i){n.exports=i.p+"img/6e7c6f3124341aa94e5615a5d91707ba.85c8e22b.jpg"},b010:function(n,e,i){n.exports=i.p+"img/e606ca644fa803c2a013bc169626d34f.78c188c6.jpg"},b29e:function(n,e,i){n.exports=i.p+"img/2fbd10de1252bd22ad1a4cfed008b5be.31cca1d3.jpg"},b4e9:function(n,e,i){n.exports=i.p+"img/aed6f57ffe1dd8195118c5483a886a25.894da738.jpg"},be04:function(n,e,i){n.exports=i.p+"img/e86a4340569db741e6f27f0fdbb1e607.5ac81f60.jpg"},c0e3:function(n,e,i){n.exports=i.p+"img/6aa8bc1e626160446e6d660356ca6dd4.e21aa6f9.jpg"},c133:function(n,e,i){n.exports=i.p+"img/cb234d2c5e8957e44cd121b4e57bfb6e.bcad4946.jpg"},c4e8:function(n,e,i){n.exports=i.p+"img/8ebfbbdc7a95f4401002dd1ae9550393.b93cf13d.jpg"},cb46:function(n,e,i){n.exports=i.p+"img/2e34e68a7dc33dc2a634585fb4271b9e.e1269551.jpg"},df8e:function(n,e,i){n.exports=i.p+"img/55cb214ca448f90aae7f4ae9f35ba6c5.e5faef01.jpg"},ed86:function(n,e,i){n.exports=i.p+"img/3ab36fff3baab97ecf174b5097d52c0b.26dfed8a.jpg"},fa21:function(n,e,i){n.exports=i.p+"img/ea605b52a72ce0c5c2859aeab6e8fe58.cb832582.jpg"}});
//# sourceMappingURL=app.6b1bf51b.js.map