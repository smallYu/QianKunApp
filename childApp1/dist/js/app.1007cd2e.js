(function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n(require("VueRouter"),require("Vue")):"function"===typeof define&&define.amd?define(["VueRouter","Vue"],n):"object"===typeof exports?exports["VueApp1"]=n(require("VueRouter"),require("Vue")):e["VueApp1"]=n(e["VueRouter"],e["Vue"])})(window,(function(e,n){return function(e){function n(n){for(var r,i,c=n[0],a=n[1],p=n[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);s&&s(n);while(d.length)d.shift()();return u.push.apply(u,p||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e2517":"d73ffbfe","chunk-2d0e4c8a":"cdb1a0d8"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=i(e);var p=new Error;u=function(n){a.onerror=a.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",p.name="ChunkLoadError",p.type=r,p.request=u,t[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp_VueApp1"]=window["webpackJsonp_VueApp1"]||[],p=a.push.bind(a);a.push=n,a=a.slice();for(var f=0;f<a.length;f++)n(a[f]);var s=p;return u.push([0,"chunk-vendors"]),t()}({0:function(e,n,t){e.exports=t("56d7")},"0535":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"Test"},[e._v(" 我是一个全局组件 ")])},o=[],u={name:"Test",created:function(){},mounted:function(){},methods:{},components:{},computed:{},watch:{},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=u,c=(t("6d8b"),t("9ca4")),a=Object(c["a"])(i,r,o,!1,null,null,null),p=a.exports;n["default"]=p},"2af9":function(e,n,t){"use strict";t.r(n);t("fe59"),t("053b"),t("e18c"),t("08ba"),t("af86");var r=t("8bbf"),o=t.n(r),u=t("d83c");u.keys().forEach((function(e){var n=u(e),t=n.default||n;o.a.component(t.name,t)}))},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"bootstrap",(function(){return w})),t.d(n,"mount",(function(){return y})),t.d(n,"unmount",(function(){return O})),t.d(n,"update",(function(){return x}));t("b130"),t("b449");var r=t("85ff"),o=(t("a133"),t("ed0d"),t("f09c"),t("e117"),t("8bbf")),u=t.n(o),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"VueApp1"}},[e._v(" 我是微应用的app1 "),t("router-view")],1)},c=[],a=t("9ca4"),p={},f=Object(a["a"])(p,i,c,!1,null,null,null),s=f.exports,d=t("6389"),l=t.n(d),h=(t("e18c"),[{path:"/",name:"home",component:function(){return t.e("chunk-2d0e4c8a").then(t.bind(null,"9261"))}},{path:"/about",name:"about",component:function(){return t.e("chunk-2d0e2517").then(t.bind(null,"7dd8"))}}]),m=h;u.a.use(l.a),console.log(window.__POWERED_BY_QIANKUN__);var b=new l.a({mode:"hash",routes:m}),v=null;function w(){return _.apply(this,arguments)}function _(){return _=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("VueApp1 bootstraped");case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:V(n);case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:v.$destroy(),v=null;case 2:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function x(e){return E.apply(this,arguments)}function E(){return E=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("update props",n);case 1:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function V(e){e&&(u.a.prototype.$action=e),v=new u.a({router:b,render:function(e){return e(s)}}).$mount("#VueApp1")}u.a.config.productionTip=!1,window.__POWERED_BY_QIANKUN__&&(t.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__),t("2af9"),/iphone|ipod|ipad/i.test(navigator.appVersion)&&document.addEventListener("blur",(function(e){["input","textarea"].includes(e.target.localName)&&document.body.scrollIntoView(!1)}),!0),window.__POWERED_BY_QIANKUN__||V()},5922:function(e,n,t){},6389:function(n,t){n.exports=e},"6d8b":function(e,n,t){"use strict";var r=t("5922"),o=t.n(r);o.a},"8bbf":function(e,t){e.exports=n},d83c:function(e,n,t){var r={"./Test/index.js":"0535"};function o(e){var n=u(e);return t(n)}function u(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id="d83c"}})}));