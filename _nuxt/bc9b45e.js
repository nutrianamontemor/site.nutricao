(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{422:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return j}));r(66),r(6),r(27),r(55),r(30),r(22),r(67),r(80),r(40),r(28),r(48),r(26),r(49);var n=r(8),o=r(16),c=(r(20),r(72),r(123),r(29),r(37),r(9));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m=/;(?![^(]*\))/g,v=/:(.*)/;function y(style){var t,e={},r=d(style.split(m));try{for(r.s();!(t=r.n()).done;){var n=t.value.split(v),l=Object(o.a)(n,2),f=l[0],h=l[1];(f=f.trim())&&("string"==typeof h&&(h=h.trim()),e[Object(c.c)(f)]=h)}}catch(t){r.e(t)}finally{r.f()}return e}function O(){for(var t,e={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(t=n[r]){case"class":case"directives":arguments[i][t]&&(e[t]=j(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=w(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=$(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=f(f({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function w(t,source){return t?source?(t=Object(c.F)("string"==typeof t?y(t):t)).concat("string"==typeof source?y(source):source):t:source}function j(t,source){return source?t&&t?Object(c.F)(t).concat(source):source:t}function $(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var r in e)e[r]&&(t[r]?t[r]=[].concat(e[r],t[r]):t[r]=e[r])}return t}},446:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(88),r(20),{props:["texto_botao","color","estilo"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"Informe seu E-mail"},function(t){return/.+@.+\..+/.test(t)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$nuxt.$loading.start(),t.loading=!0,t.$sha256(t.email).then((function(e){console.log(e);Math.floor(new Date/1e3);t.$gtag("event","Lead",{email:t.email}),t.$axios.$post("https://api.issei.com.br/lead",{email:t.email,origin:"nutrianamontemor.com.br"},{}).then((function(e){console.log(e),t.loading=!1,t.$nuxt.$loading.finish(),t.$router.push("/obrigado")}))}));case 3:case"end":return e.stop()}}),e)})))()}}}),c=r(54),l=r(65),f=r.n(l),d=r(472),h=r(461),m=r(545),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[r("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:t.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",style:t.estilo,attrs:{id:"envioLead",disabled:!t.valid&&t.loading,color:t.color,height:"40",rounded:"",loading:t.loading},on:{click:t.validate}},[t._v("\n    "+t._s(t.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VForm:h.a,VTextField:m.a})},461:function(t,e,r){"use strict";var n=r(8),o=(r(87),r(95),r(205),r(28),r(6),r(26),r(96),r(153),r(29),r(22),r(48),r(49),r(78)),c=r(204),l=r(428);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);