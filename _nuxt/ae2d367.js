(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{420:function(t,e,r){"use strict";var n=r(425);e.a=n.a},422:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(423),o=r(9),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");n.a},423:function(t,e,r){"use strict";r(29),r(22),r(28),r(6),r(48),r(26),r(49);var n=r(8),o=(r(121),r(438),r(439),r(427),r(426)),c=r(445),l=r(432),d=r(77);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},427:function(t,e,r){var content=r(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("e23b7040",content,!0,{sourceMap:!1})},428:function(t,e,r){var n=r(61)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},429:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("1cdf85c7",content,!0,{sourceMap:!1})},430:function(t,e,r){var n=r(61)(!1);n.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=n},433:function(t,e,r){"use strict";r(22),r(28),r(48),r(49);var n=r(8),o=(r(6),r(87),r(95),r(37),r(29),r(20),r(63),r(189),r(30),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(40),r(26),r(421),r(0)),c=r(418),l=r(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(r,n){return r[t+Object(l.E)(n)]=e(),r}),{})}var x=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=m("justify",(function(){return{type:String,default:null,validator:_}})),S=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:S}})),w={align:Object.keys(y),justify:Object.keys(O),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function E(t,e,r){var n=C[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},y),{},{justify:{type:String,default:null,validator:_}},O),{},{alignContent:{type:String,default:null,validator:S}},j),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var f=k.get(l);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var n=r[t],o=E(e,t,n);o&&f.push(o)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),k.set(l,f)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},435:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("424d9537",content,!0,{sourceMap:!1})},436:function(t,e,r){var n=r(61)(!1);n.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=n},437:function(t,e,r){"use strict";r.r(e);var n=r(19),o=(r(88),r(20),{props:["texto_botao","color","estilo"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"Informe seu E-mail"},function(t){return/.+@.+\..+/.test(t)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$nuxt.$loading.start(),t.loading=!0,t.$sha256(t.email).then((function(e){console.log(e);Math.floor(new Date/1e3);t.$gtag("event","Lead",{email:t.email}),t.$axios.$post("https://api.issei.com.br/lead",{email:t.email,origin:"nutrianamontemor.com.br"},{}).then((function(e){console.log(e),t.loading=!1,t.$nuxt.$loading.finish(),t.$router.push("/obrigado")}))}));case 3:case"end":return e.stop()}}),e)})))()}}}),c=r(64),l=r(78),d=r.n(l),f=r(469),h=r(455),v=r(560),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[r("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:t.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",style:t.estilo,attrs:{id:"envioLead",disabled:!t.valid&&t.loading,color:t.color,height:"40",rounded:"",loading:t.loading},on:{click:t.validate}},[t._v("\n    "+t._s(t.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VForm:h.a,VTextField:v.a})},444:function(t,e,r){"use strict";r(22),r(28),r(48),r(49);var n=r(8),o=(r(6),r(121),r(29),r(20),r(63),r(189),r(30),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(40),r(87),r(26),r(97),r(421),r(0)),c=r(418),l=r(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),x=h.reduce((function(t,e){return t["order"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(x)};function _(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var n=r[t],o=_(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),o)}})},449:function(t,e,r){"use strict";var n=r(32),o=(r(121),r(79),r(285),r(97),r(96),r(429),r(431)),c=r(420),l=r(122),d=r(77),f=r(418),h=r(31),v="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(d.a)(c.a,l.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!v||r||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(h.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var n=img.naturalHeight,o=img.naturalWidth;n||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/n):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=c.a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.a.options.render.call(this,t),data=Object(f.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:v?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},455:function(t,e,r){"use strict";var n=r(8),o=(r(87),r(95),r(205),r(28),r(6),r(26),r(96),r(152),r(29),r(22),r(48),r(49),r(77)),c=r(204),l=r(424);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},457:function(t,e,r){"use strict";r(435);var n=r(208);e.a=n.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,n=t.right,footer=t.footer,o=t.insetFooter,c=t.bottom,l=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(footer+o+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},571:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){this.$router.push("/curso-familia-nutrida")},data:function(){return{headline:{titulo:'<SPAN STYLE="font-weight:bold;">PARE DE SE <SPAN STYLE="color: #d7837f; ">ESTRESSAR</SPAN> COM SEU <SPAN STYLE="color: #d7837f; ">FILHO</SPAN>  NA HORA DAS REFEIÇÕES',subtitulo:'Aulão: Os Desafios da Alimentação  <BR/>DIA 10/02 ÀS 20H<BR/><SPAN STYLE="font-size:16px;">ONLINE, GRATUITO E 100% SAUDÁVEL</SPAN>',texto_botao:"QUERO PARTICIPAR*",btnColor:"#03989e",style:"",imagem:"/familia3.png"},btnLead:{color:"#ede0E1",style:"color:#3e1607; border-style: double; border-color:#3e1607",texto_botao:"QUERO PARTICIPAR*"},praquemeh:{titulo:"VOCÊ VAI APRENDER...",style:"background: #e7d2cc; color: #5d1916;",imagem:"https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",itens:[{texto:"Como organizar a rotina da família",imagem:"/manage.svg"},{texto:"Como lidar com a criança que não come e não se comporta à mesa",imagem:"/crykids.svg"},{texto:"Como saber o que oferecer e dar para a criança comer",imagem:"/salada.svg"},{texto:"Como lidar com a falta de tempo na cozinha",imagem:"/quick.svg"}]},who:{titulo:"",foto:"/bio.png",texto:'<SPAN STYLE="font-weight:bold">Ana Paula Montemor</SPAN> é Nutricionista há 15 anos, especialista em  Nutrição Materno Infantil e Terapia Familiar. Depois de perceber que a “ nutrição infantil tradicional” não funcionava na rotina da família, desenvolveu o Método “ CHILD”, que já ajudou milhares de famílias a conquistar a alimentação saudável, com equilíbrio e paz.<br/>Criou o Aulão "Os Desafios da Alimentação" com a missão de ajudar toda e qualquer mulher a aprender a lidar com seus filhos que não comem de tudo, planejar refeições saudáveis e rápidas para otimizar o tempo na cozinha.'},conteudos:{titulo:"ESSA AULA É PARA VOCÊ QUE... ",style:"background: #FFFFFF; color: #5d1916;",itens:[{imagem:"/check.png",texto:"Não tem tempo de cozinhar todos os dias e não abre mão da qualidade da alimentação"},{imagem:"/check.png",texto:"Quer que o seu filho pare de rejeitar  os alimentos"},{imagem:"/check.png",texto:"Quer organizar  melhor a rotina alimentar da família"},{imagem:"/check.png",texto:"Tem dificuldades de alimentar de forma saudável o seu filho"}]}}}},o=r(64),c=r(78),l=r.n(c),d=r(423),f=r(422),h=r(444),v=r(595),m=r(466),x=r(449),y=r(457),_=r(425),O=r(433),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",[r("v-responsive",{staticClass:"d-flex justify-space-around justify-center align-center pa-0",staticStyle:{"background-color":"#ede0e1",color:"#5d1916"},attrs:{"aspect-ratio":16/6}},[r("v-container",[r("v-row",{staticClass:"justify-space-around",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"8",md:"7",sm:"7",xs:"7"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-lg-left  text-center text-sm-center text-xs-center",attrs:{cols:"12"}},[r("h1",{staticClass:"text-md-h4 text-sm-h4"},[r("span",{staticStyle:{"font-weight":"bold"}},[t._v("PARE DE SE "),r("span",{attrs:{STYLE:"color: #d7837f;"}},[t._v("FRUSTRAR")]),t._v(" COM A ALIMENTAÇÃO DO SEU "),r("span",{attrs:{STYLE:"color: #d7837f;"}},[t._v("FILHO")]),t._v("  NAS REFEIÇÕES")])]),t._v(" "),r("h4",{staticClass:"text-md-h5 text-sm-h6 mt-5"},[r("span",{attrs:{STYLE:"font-weight:bold"}},[t._v("DESCUBRA TÉCNICAS PARA TER REFEIÇÕES "),r("span",{attrs:{STYLE:"color: #d7837f; "}},[t._v("MAIS TRANQUILAS")])])]),t._v(" "),r("h4",{staticClass:"text-md-h5 text-sm-h6 mt-5",domProps:{innerHTML:t._s(t.headline.subtitulo)}})])],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"8",md:"6",sm:"10",xs:"10",align:"center",justify:"center"}},[r("Lead",{attrs:{texto_botao:t.btnLead.texto_botao,color:t.btnLead.color,estilo:t.btnLead.style}}),t._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center",staticStyle:{"font-size":"10px"}},[t._v("*Ao participar, de acordo com a lei 12.965/2014 e 13.709/2018, autorizo Ana Paula Montemor a enviar comunicações por e-mail ou qualquer outro meio e concordo com a sua política de privacidade.")])],1)],1)],1),t._v(" "),r("v-col",{staticClass:"d-flex flex-wrap justify-center",staticStyle:{height:"400px","background-image":"url('/ana2.png')","background-position":"50% 100%","background-repeat":"no-repeat","background-size":"contain",color:"#ffffff"},attrs:{lg:"4"}},[r("v-img",{attrs:{contain:"",src:"/",width:"350","max-width":"350","min-height":"377"}})],1)],1)],1)],1),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-center align-center pt-10 pb-10",staticStyle:{background:"#FFFFFF",color:"#3e1607"},attrs:{"aspect-ratio":3.2}},[r("v-container",[r("h1",{staticClass:"d-flex justify-center align-center text-md-h4 text-sm-h4",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.praquemeh.titulo))]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center align-center my-5"},[r("h1",{staticClass:"d-flex justify-center align-center headline",staticStyle:{color:"black"}})]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center align-center"},t._l(t.praquemeh.itens,(function(e,i){return r("v-card",{key:i,staticClass:"ma-2 rounded-xl",attrs:{width:"250",height:"270"}},[r("v-card-text",{staticClass:"d-flex flex-column justify-center align-center justify-space-between justify-space-around "},[r("v-img",{staticClass:"mt-1",attrs:{src:e.imagem,width:"67",height:"67"}}),t._v(" "),r("p",{staticClass:"mt-5 text-center text-h6",staticStyle:{color:"#000000"},domProps:{innerHTML:t._s(e.texto)}})],1)],1)})),1)],1)],1),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-center align-center pt-10 pb-10",staticStyle:{background:"#ede0e1",color:"#5d1916"},attrs:{"aspect-ratio":3.2}},[r("v-container",[r("div",{staticClass:"d-flex justify-center align-center headline text-md-h4 text-sm-h4",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.conteudos.titulo))]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center my-10"},[r("v-col",{staticClass:"d-flex align-stretch flex-column justify-center align-center pb-1"},t._l(t.conteudos.itens,(function(e,i){return r("v-col",{key:i,staticClass:"d-flex flex-row"},[r("v-icon",{staticClass:"mr-5",attrs:{large:""}},[t._v("mdi-check")]),t._v(" "),r("div",{staticClass:"text-h5",staticStyle:{"font-size":"16px",color:"#000000"},domProps:{innerHTML:t._s(e.texto)}})],1)})),1)],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"6",md:"6",sm:"10",xs:"10",align:"center",justify:"center"}},[r("Lead",{attrs:{texto_botao:t.btnLead.texto_botao,color:t.btnLead.color,estilo:t.btnLead.style}})],1)],1)],1)],1),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-center align-center py-5",staticStyle:{background:"#5d1916",color:"#FFFFFF"},attrs:{"aspect-ratio":3.2}},[r("v-container",[r("v-row",{staticClass:"d-flex flex-row flex-wrap justify-center"},[r("v-img",{attrs:{contain:"",src:t.who.foto,width:"550","max-height":"600"}}),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-space-around align-center mx-5 pt-5",attrs:{width:"50%","min-width":"350"}},[r("p",{staticClass:"text-h6",domProps:{innerHTML:t._s(t.who.texto)}})])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Lead:r(437).default}),l()(component,{VCard:d.a,VCardText:f.c,VCol:h.a,VContainer:v.a,VIcon:m.a,VImg:x.a,VMain:y.a,VResponsive:_.a,VRow:O.a})}}]);