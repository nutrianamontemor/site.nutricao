(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{424:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(84),n(20),{props:["texto_botao","color","estilo"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"Informe seu E-mail"},function(t){return/.+@.+\..+/.test(t)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$nuxt.$loading.start(),t.loading=!0,t.$sha256(t.email).then((function(e){console.log(e);Math.floor(new Date/1e3);t.$axios.$post("https://api.issei.com.br/lead",{email:t.email,origin:"nutrianamontemor.com.br"},{}).then((function(e){console.log(e),t.loading=!1,t.$nuxt.$loading.finish(),t.$router.push("/obrigado")}))}));case 3:case"end":return e.stop()}}),e)})))()}}}),l=n(60),c=n(74),f=n.n(c),d=n(463),v=n(502),m=n(507),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[n("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:t.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",style:t.estilo,attrs:{id:"envioLead",disabled:!t.valid&&t.loading,color:t.color,height:"40",rounded:"",loading:t.loading},on:{click:t.validate}},[t._v("\n    "+t._s(t.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VForm:v.a,VTextField:m.a})},426:function(t,e,n){"use strict";n(21),n(28),n(44),n(45);var r=n(8),o=(n(6),n(83),n(92),n(35),n(27),n(20),n(59),n(184),n(29),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(38),n(25),n(415),n(0)),l=n(412),c=n(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(c.v)(r)]=e(),n}),{})}var O=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:h}})),x=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:x}})),C={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(S)},_={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:x}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var f in n)c+=String(n[f]);var d=k.get(c);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=P(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(c,d)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:d}),o)}})},434:function(t,e,n){"use strict";n(21),n(28),n(44),n(45);var r=n(8),o=(n(6),n(117),n(27),n(20),n(59),n(184),n(29),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(38),n(83),n(25),n(91),n(415),n(0)),l=n(412),c=n(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(c.v)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(c.v)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(O)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var f in n)c+=String(n[f]);var d=w.get(c);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),o)}})},524:function(t,e,n){"use strict";n.r(e);var r={props:["titulo","itens","imagem","btnColor","texto_botao","style"],data:function(){return{}}},o=n(60),l=n(74),c=n.n(l),f=n(434),d=n(532),v=n(455),m=n(417),y=n(426),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"d-flex justify-center align-center mx-2 pa-2 my-2",style:t.style,attrs:{"aspect-ratio":16/6}},[n("v-container",[n("div",{staticClass:"d-flex justify-center align-center headline text-md-h3 text-sm-h4",staticStyle:{"font-weight":"bold","font-size":"30px"}},[t._v(t._s(t.titulo))]),t._v(" "),n("v-row",{staticClass:"d-flex justify-center my-10"},[n("v-col",{staticClass:"d-flex align-stretch flex-column justify-center align-center pb-1"},t._l(t.itens,(function(e,i){return n("v-col",{key:i,staticClass:"d-flex flex-row"},[n("v-icon",{staticClass:"mr-5",attrs:{large:""}},[t._v("mdi-check")]),t._v(" "),n("div",{staticClass:"text-h5",staticStyle:{"font-size":"20px"},domProps:{innerHTML:t._s(e.texto)}})],1)})),1)],1),t._v(" "),n("v-row",[n("v-col",[n("Lead",{attrs:{texto_botao:t.headline.texto_botao,color:t.headline.btnColor}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Lead:n(424).default}),c()(component,{VCol:f.a,VContainer:d.a,VIcon:v.a,VResponsive:m.a,VRow:y.a})}}]);