(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{433:function(t,e,n){"use strict";n(22),n(28),n(48),n(49);var r=n(8),o=(n(6),n(87),n(95),n(37),n(29),n(20),n(63),n(189),n(30),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(40),n(26),n(421),n(0)),l=n(418),c=n(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(n,r){return n[t+Object(c.E)(r)]=e(),n}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:j}})),_=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},x=m("alignContent",(function(){return{type:String,default:null,validator:_}})),P={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(x)},S={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},y),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:_}},x),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var f in n)c+=String(n[f]);var d=E.get(c);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(c,d)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:d}),o)}})},437:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(88),n(20),{props:["texto_botao","color","estilo"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"Informe seu E-mail"},function(t){return/.+@.+\..+/.test(t)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$nuxt.$loading.start(),t.loading=!0,t.$sha256(t.email).then((function(e){console.log(e);Math.floor(new Date/1e3);t.$gtag("event","Lead",{email:t.email}),t.$axios.$post("https://api.issei.com.br/lead",{email:t.email,origin:"nutrianamontemor.com.br"},{}).then((function(e){console.log(e),t.loading=!1,t.$nuxt.$loading.finish(),t.$router.push("/obrigado")}))}));case 3:case"end":return e.stop()}}),e)})))()}}}),l=n(64),c=n(78),f=n.n(c),d=n(469),v=n(455),h=n(560),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[n("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:t.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",style:t.estilo,attrs:{id:"envioLead",disabled:!t.valid&&t.loading,color:t.color,height:"40",rounded:"",loading:t.loading},on:{click:t.validate}},[t._v("\n    "+t._s(t.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VForm:v.a,VTextField:h.a})},444:function(t,e,n){"use strict";n(22),n(28),n(48),n(49);var r=n(8),o=(n(6),n(121),n(29),n(20),n(63),n(189),n(30),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(40),n(87),n(26),n(97),n(421),n(0)),l=n(418),c=n(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(c.E)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(c.E)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(O)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var f in n)c+=String(n[f]);var d=w.get(c);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),o)}})},455:function(t,e,n){"use strict";var r=n(8),o=(n(87),n(95),n(205),n(28),n(6),n(26),n(96),n(152),n(29),n(22),n(48),n(49),n(77)),l=n(204),c=n(424);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},583:function(t,e,n){"use strict";n.r(e);var r={props:["titulo","subtitulo","style","btnColor"],components:{Lead:n(437).default},data:function(){return{}}},o=n(64),l=n(78),c=n.n(l),f=n(444),d=n(595),v=n(425),h=n(433),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"d-flex justify-center align-center mx-2 pa-2 my-2",style:t.style,attrs:{id:"lead","aspect-ratio":3.2}},[n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"d-flex justify-center align-center h3 my-4"},[t._v("\n           "+t._s(t.titulo)+"\n         ")]),t._v(" "),n("span",{staticClass:"d-flex justify-center align-center h3 my-4"},[t._v("\n           "+t._s(t.subtitulo)+"\n         ")]),t._v(" "),n("Lead",{attrs:{texto_botao:"Entre na lista de espera",color:t.btnColor}}),t._v(" "),n("span",{staticClass:"caption"},[t._v("Ao inscrever-se em nossa lista, você concorda com nossa "),n("NuxtLink",{attrs:{to:"/politica-de-privacidade"}},[t._v("Política de Privacidade")]),t._v(".")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Lead:n(437).default}),c()(component,{VCol:f.a,VContainer:d.a,VResponsive:v.a,VRow:h.a})}}]);