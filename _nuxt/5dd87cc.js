(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{351:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));r(48),r(12),r(33),r(50),r(37),r(18),r(59),r(66),r(43),r(25),r(30),r(20),r(31);var n=r(5),o=r(11),l=(r(32),r(65),r(123),r(22),r(42),r(6));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var v=/;(?![^(]*\))/g,h=/:(.*)/;function y(style){var e,t={},r=d(style.split(v));try{for(r.s();!(e=r.n()).done;){var n=e.value.split(h),c=Object(o.a)(n,2),f=c[0],m=c[1];(f=f.trim())&&("string"==typeof m&&(m=m.trim()),t[Object(l.a)(f)]=m)}}catch(e){r.e(e)}finally{r.f()}return t}function O(){for(var e,t={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(e=n[r]){case"class":case"directives":arguments[i][e]&&(t[e]=w(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=j(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=x(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]=f(f({},arguments[i][e]),t[e]);break;default:t[e]||(t[e]=arguments[i][e])}return t}function j(e,source){return e?source?(e=Object(l.r)("string"==typeof e?y(e):e)).concat("string"==typeof source?y(source):source):e:source}function w(e,source){return source?e&&e?Object(l.r)(e).concat(source):source:e}function x(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var e={},i=2;i--;){var t=i<0||arguments.length<=i?void 0:arguments[i];for(var r in t)t[r]&&(e[r]?e[r]=[].concat(t[r],e[r]):e[r]=t[r])}return e}},368:function(e,t,r){"use strict";r.r(t);var n=r(19),o=(r(84),{props:["texto_botao","color"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(e){return!!e||"Informe seu E-mail"},function(e){return/.+@.+\..+/.test(e)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nuxt.$loading.start(),e.loading=!0,e.$sha256(e.email).then((function(t){console.log(t);Math.floor(new Date/1e3);e.$axios.$post("https://api.issei.com.br/lead",{email:e.email,origin:"nutrianamontemor.com.br"},{}).then((function(t){console.log(t),e.loading=!1,e.$nuxt.$loading.finish(),e.$router.push("/obrigado")}))}));case 3:case"end":return t.stop()}}),t)})))()}}}),l=r(57),c=r(75),f=r.n(c),d=r(408),m=r(445),v=r(448),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[r("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:e.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",staticStyle:{color:"#3e1607","border-style":"double","border-color":"#3e1607"},attrs:{id:"envioLead",disabled:!e.valid&&e.loading,color:"#ede0E1",height:"40",rounded:"",loading:e.loading},on:{click:e.validate}},[e._v("\n    "+e._s(e.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:d.a,VForm:m.a,VTextField:v.a})}}]);