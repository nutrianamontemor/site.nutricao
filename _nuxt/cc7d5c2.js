(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{420:function(t,e,n){"use strict";var r=n(428);e.a=r.a},429:function(t,e,n){"use strict";var r=n(32);n(6);function o(t,e,n){var r,o=null==(r=t._observe)?void 0:r[n.context._uid];o&&(o.observer.unobserve(t),delete t._observe[n.context._uid])}var c={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var c=e.modifiers||{},l=e.value,d="object"===Object(r.a)(l)?l:{handler:l,options:{}},h=d.handler,f=d.options,v=new IntersectionObserver((function(){var r,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,f=null==(r=t._observe)?void 0:r[n.context._uid];if(f){var v=l.some((function(t){return t.isIntersecting}));!h||c.quiet&&!f.init||c.once&&!v&&!f.init||h(l,d,v),v&&c.once?o(t,e,n):f.init=!0}}),f);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:v},v.observe(t)}},unbind:o};e.a=c},432:function(t,e,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("1cdf85c7",content,!0,{sourceMap:!1})},433:function(t,e,n){var r=n(61)(!1);r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=r},435:function(t,e,n){"use strict";n(22),n(28),n(48),n(49);var r=n(8),o=(n(6),n(87),n(95),n(37),n(29),n(20),n(63),n(189),n(30),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(40),n(26),n(421),n(0)),c=n(418),l=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(l.E)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},S=m("align",(function(){return{type:String,default:null,validator:y}})),_=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},j=m("justify",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},O=m("alignContent",(function(){return{type:String,default:null,validator:w}})),x={align:Object.keys(S),justify:Object.keys(j),alignContent:Object.keys(O)},z={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=z[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},S),{},{justify:{type:String,default:null,validator:_}},j),{},{alignContent:{type:String,default:null,validator:w}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var h=k.get(l);return h||function(){var t,e;for(e in h=[],x)x[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&h.push(o)}));h.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,h)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:h}),o)}})},451:function(t,e,n){"use strict";var r=n(32),o=(n(121),n(79),n(285),n(97),n(96),n(432),n(429)),c=n(420),l=n(122),d=n(77),h=n(418),f=n(31),v="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(d.a)(c.a,l.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!v||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(f.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var content=c.a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.a.options.render.call(this,t),data=Object(h.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:v?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},595:function(t,e,n){"use strict";n.r(e);var r={props:["titulo","texto","foto"],data:function(){return{}}},o=n(64),c=n(78),l=n.n(c),d=n(599),h=n(451),f=n(428),v=n(435),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",{staticClass:"d-flex justify-center align-center mx-2 pa-2 my-2",staticStyle:{background:"#e7d2cc",color:"#5d1916"},attrs:{"aspect-ratio":16/6}},[n("v-container",{staticStyle:{"font-size":"2em"}},[n("h1",{staticClass:"d-flex justify-center align-center headline"},[t._v(t._s(t.titulo))]),t._v(" "),n("v-row",{staticClass:"d-flex flex-row flex-wrap justify-center  mt-10"},[n("v-img",{attrs:{contain:"",src:t.foto,width:"500",height:"500"}}),t._v(" "),n("v-responsive",{staticClass:"d-flex justify-space-around align-center mx-2 pa-6",attrs:{width:"50%","min-width":"350"}},[n("div",{staticClass:"text-h5",domProps:{innerHTML:t._s(t.texto)}})])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VContainer:d.a,VImg:h.a,VResponsive:f.a,VRow:v.a})}}]);