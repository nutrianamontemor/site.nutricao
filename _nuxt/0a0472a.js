(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{353:function(t,e,r){"use strict";r(22),r(18),r(25),r(30),r(20),r(31);var n=r(5),o=(r(99),r(367),r(361),r(354)),c=r(391),l=r(360),d=r(56);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},361:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("e23b7040",content,!0,{sourceMap:!1})},362:function(t,e,r){var n=r(54)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},390:function(t,e,r){"use strict";r(18),r(25),r(30),r(31);var n=r(5),o=(r(99),r(22),r(32),r(57),r(368),r(12),r(37),r(369),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(43),r(74),r(20),r(72),r(352),r(0)),c=r(350),l=r(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=h.reduce((function(t,e){return t["offset"+Object(l.q)(e)]={type:[String,Number],default:null},t}),{}),m=h.reduce((function(t,e){return t["order"+Object(l.q)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(_),order:Object.keys(m)};function y(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var n=r[t],o=y(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},455:function(t,e,r){"use strict";r.r(e);var n={props:["estilo","conteudo","conteudo2"],data:function(){return{}}},o=r(73),c=r(100),l=r.n(c),d=r(353),v=r(390),h=r(392),f=r(443),_=r(385),m=r(444),x=r(102),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",{staticClass:"d-flex justify-center align-center pa-2",style:t.estilo,attrs:{"aspect-ratio":4}},[r("v-container",[r("v-row",[r("v-col",{staticClass:"d-flex align-stretch"},[r("v-card",{staticClass:"pa-5",attrs:{shaped:""}},[r("div",{staticClass:"mb-5"},[r("p",{staticClass:"headline text-center",domProps:{innerHTML:t._s(t.conteudo.titulo)}})]),t._v(" "),t._l(t.conteudo.items,(function(e,i){return r("v-col",{key:i,staticClass:"d-inline-flex align-self-auto align-center align-stretch"},[r("v-img",{attrs:{src:e.imagem,width:"67",height:"58"}}),t._v(" "),r("v-sheet",{staticClass:"pl-3 justify-space-around",attrs:{width:"100%","min-height":"80"}},[r("span",{staticClass:"font-weight-black"},[t._v(t._s(e.titulo))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.descricao)}})])],1)}))],2)],1),t._v(" "),r("v-col",{staticClass:"d-flex align-stretch"},[r("v-card",{staticClass:"pa-5",attrs:{shaped:""}},[r("div",{staticClass:"mb-5"},[r("p",{staticClass:"headline text-center",domProps:{innerHTML:t._s(t.conteudo2.titulo)}})]),t._v(" "),t._l(t.conteudo2.items,(function(e,i){return r("v-col",{key:i,staticClass:"d-inline-flex align-self-auto align-center align-stretch"},[r("v-img",{attrs:{src:e.imagem,width:"67",height:"58"}}),t._v(" "),r("v-sheet",{staticClass:"pl-3 justify-space-around",attrs:{width:"100%","min-height":"80"}},[r("span",{staticClass:"font-weight-black"},[t._v(t._s(e.titulo))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.descricao)}})])],1)}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCol:v.a,VContainer:h.a,VImg:f.a,VResponsive:_.a,VRow:m.a,VSheet:x.a})}}]);