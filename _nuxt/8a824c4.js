(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{351:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var o=r(353),n=r(6),c=Object(n.e)("v-card__actions"),l=Object(n.e)("v-card__subtitle"),d=Object(n.e)("v-card__text"),f=Object(n.e)("v-card__title");o.a},353:function(t,e,r){"use strict";r(22),r(18),r(25),r(30),r(20),r(31);var o=r(5),n=(r(100),r(366),r(356),r(355)),c=r(386),l=r(359),d=r(56);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},356:function(t,e,r){var content=r(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("e23b7040",content,!0,{sourceMap:!1})},357:function(t,e,r){var o=r(54)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},364:function(t,e,r){"use strict";r.r(e);var o=r(19),n=(r(84),{props:["texto_botao","color"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"Informe seu E-mail"},function(t){return/.+@.+\..+/.test(t)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$nuxt.$loading.start(),t.loading=!0,t.$sha256(t.email).then((function(e){console.log(e);Math.floor(new Date/1e3);t.$axios.$post("https://api.issei.com.br/lead",{email:t.email,origin:"nutrianamontemor.com.br"},{}).then((function(e){console.log(e),t.loading=!1,t.$nuxt.$loading.finish(),t.$router.push("/obrigado")}))}));case 3:case"end":return e.stop()}}),e)})))()}}}),c=r(57),l=r(74),d=r.n(l),f=r(411),v=r(447),m=r(448),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[r("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:t.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",staticStyle:{color:"#3e1607","border-style":"double","border-color":"#3e1607"},attrs:{id:"envioLead",disabled:!t.valid&&t.loading,color:"#ede0E1",height:"40",rounded:"",loading:t.loading},on:{click:t.validate}},[t._v("\n    "+t._s(t.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VForm:v.a,VTextField:m.a})},385:function(t,e,r){"use strict";r(18),r(25),r(30),r(31);var o=r(5),n=(r(100),r(22),r(32),r(58),r(367),r(12),r(37),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(43),r(75),r(20),r(73),r(354),r(0)),c=r(352),l=r(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.q)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(l.q)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(x)};function y(t,e,r){var o=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");o+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(o+="-".concat(r)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var o=r[t],n=y(e,t,o);n&&f.push(n)}));var n=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!n||!r.cols},Object(o.a)(t,"col-".concat(r.cols),r.cols),Object(o.a)(t,"offset-".concat(r.offset),r.offset),Object(o.a)(t,"order-".concat(r.order),r.order),Object(o.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),n)}})},388:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("424d9537",content,!0,{sourceMap:!1})},389:function(t,e,r){var o=r(54)(!1);o.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=o},410:function(t,e,r){"use strict";r(388);var o=r(162);e.a=o.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,r=t.top,o=t.right,footer=t.footer,n=t.insetFooter,c=t.bottom,l=t.left;return{paddingTop:"".concat(r+e,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(footer+n+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},451:function(t,e,r){"use strict";r.r(e);var o={mounted:function(){},data:function(){return{headline:{titulo:'<SPAN STYLE="font-weight:bold;">PARE DE SE <SPAN STYLE="color: #d7837f; ">ESTRESSAR</SPAN> COM SEU <SPAN STYLE="color: #d7837f; ">FILHO</SPAN>  NA HORA DAS REFEIÇÕES',subtitulo:'Aulão: Os Desafios da Alimentação  <BR/>DIA 10/02 ÀS 20H<BR/><SPAN STYLE="font-size:16px;">ONLINE, GRATUITO E 100% SAUDÁVEL</SPAN>',texto_botao:"QUERO PARTICIPAR*",btnColor:"#03989e",style:"",imagem:"/familia3.png"},praquemeh:{titulo:"VOCÊ VAI APRENDER...",style:"background: #e7d2cc; color: #5d1916;",imagem:"https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",itens:[{texto:"Como organizar a rotina da família",imagem:"/manage.svg"},{texto:"Como lidar com a criança que não come e não se comporta à mesa",imagem:"/crykids.svg"},{texto:"Como saber o que oferecer e dar para a criança comer",imagem:"/salada.svg"},{texto:"Como lidar com a falta de tempo na cozinha",imagem:"/quick.svg"}]},who:{titulo:"",foto:"/bio.png",texto:'<SPAN STYLE="font-weight:bold">Ana Paula Montemor</SPAN> é Nutricionista há 15 anos, especialista em  Nutrição Materno Infantil e Terapia Familiar. Depois de perceber que a “ nutrição infantil tradicional” não funcionava na rotina da família, desenvolveu o Método “ CHILD”, que já ajudou milhares de famílias a conquistar a alimentação saudável, com equilíbrio e paz.<br/>Criou o Aulão "Os Desafios da Alimentação" com a missão de ajudar toda e qualquer mulher a aprender a lidar com seus filhos que não comem de tudo, planejar refeições saudáveis e rápidas para otimizar o tempo na cozinha.'},conteudos:{titulo:"ESSA AULA É PARA VOCÊ QUE... ",style:"background: #FFFFFF; color: #5d1916;",itens:[{imagem:"/check.png",texto:"Não tem tempo de cozinhar todos os dias e não abre mão da qualidade da alimentação"},{imagem:"/check.png",texto:"Quer que o seu filho pare de rejeitar  os alimentos"},{imagem:"/check.png",texto:"Quer organizar  melhor a rotina alimentar da família"},{imagem:"/check.png",texto:"Tem dificuldades de alimentar de forma saudável o seu filho"}]}}}},n=r(57),c=r(74),l=r.n(c),d=r(353),f=r(351),v=r(385),m=r(403),h=r(406),x=r(445),_=r(410),y=r(394),w=r(446),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-main",[r("v-responsive",{staticClass:"d-flex justify-space-around justify-center align-center pa-0",staticStyle:{"background-color":"#ede0e1",color:"#5d1916"},attrs:{"aspect-ratio":16/6}},[r("v-container",[r("v-row",{staticClass:"justify-space-around",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"8",md:"7",sm:"7",xs:"7"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"text-lg-left  text-center text-sm-center text-xs-center",attrs:{cols:"12"}},[r("h1",{staticClass:"text-md-h4 text-sm-h4"},[r("span",{staticStyle:{"font-weight":"bold"}},[t._v("PARE DE SE "),r("span",{attrs:{STYLE:"color: #d7837f;"}},[t._v("FRUSTRAR")]),t._v(" COM A ALIMENTAÇÃO DE SEU "),r("span",{attrs:{STYLE:"color: #d7837f;"}},[t._v("FILHO")]),t._v("  NAS REFEIÇÕES")])]),t._v(" "),r("h4",{staticClass:"text-md-h5 text-sm-h6 mt-5"},[r("span",{attrs:{STYLE:"font-weight:bold"}},[t._v("DESCUBRA TÉCNICAS PARA TER REFEIÇÕES "),r("span",{attrs:{STYLE:"color: #d7837f; "}},[t._v("MAIS TRANQUILAS")])])]),t._v(" "),r("h4",{staticClass:"text-md-h5 text-sm-h6 mt-5",domProps:{innerHTML:t._s(t.headline.subtitulo)}})])],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"8",md:"6",sm:"10",xs:"10",align:"center",justify:"center"}},[r("Lead",{attrs:{texto_botao:t.headline.texto_botao,color:t.headline.btnColor}}),t._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center",staticStyle:{"font-size":"10px"}},[t._v("*Ao participar, de acordo com a lei 12.965/2014 e 13.709/2018, autorizo Ana Paula Montemor a enviar comunicações por e-mail ou qualquer outro meio e concordo com a sua política de privacidade.")])],1)],1)],1),t._v(" "),r("v-col",{staticClass:"d-flex flex-wrap justify-center",staticStyle:{height:"400px","background-image":"url('/ana2.png')","background-position":"50% 100%","background-repeat":"no-repeat","background-size":"contain",color:"#ffffff"},attrs:{lg:"4"}},[r("v-img",{attrs:{contain:"",src:"/",width:"350","max-width":"350","min-height":"377"}})],1)],1)],1)],1),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-center align-center pt-10 pb-10",staticStyle:{background:"#FFFFFF",color:"#3e1607"},attrs:{"aspect-ratio":3.2}},[r("v-container",[r("h1",{staticClass:"d-flex justify-center align-center text-md-h4 text-sm-h4",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.praquemeh.titulo))]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center align-center my-5"},[r("h1",{staticClass:"d-flex justify-center align-center headline",staticStyle:{color:"black"}})]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center align-center"},t._l(t.praquemeh.itens,(function(e,i){return r("v-card",{key:i,staticClass:"ma-2 rounded-xl",attrs:{width:"250",height:"270"}},[r("v-card-text",{staticClass:"d-flex flex-column justify-center align-center justify-space-between justify-space-around "},[r("v-img",{staticClass:"mt-1",attrs:{src:e.imagem,width:"67",height:"67"}}),t._v(" "),r("p",{staticClass:"mt-5 text-center text-h6",staticStyle:{color:"#000000"},domProps:{innerHTML:t._s(e.texto)}})],1)],1)})),1)],1)],1),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-center align-center pt-10 pb-10",staticStyle:{background:"#ede0e1",color:"#5d1916"},attrs:{"aspect-ratio":3.2}},[r("v-container",[r("div",{staticClass:"d-flex justify-center align-center headline text-md-h4 text-sm-h4",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.conteudos.titulo))]),t._v(" "),r("v-row",{staticClass:"d-flex justify-center my-10"},[r("v-col",{staticClass:"d-flex align-stretch flex-column justify-center align-center pb-1"},t._l(t.conteudos.itens,(function(e,i){return r("v-col",{key:i,staticClass:"d-flex flex-row"},[r("v-icon",{staticClass:"mr-5",attrs:{large:""}},[t._v("mdi-check")]),t._v(" "),r("div",{staticClass:"text-h5",staticStyle:{"font-size":"16px",color:"#000000"},domProps:{innerHTML:t._s(e.texto)}})],1)})),1)],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"6",md:"6",sm:"10",xs:"10",align:"center",justify:"center"}},[r("Lead",{attrs:{texto_botao:t.headline.texto_botao,color:t.headline.btnColor}})],1)],1)],1)],1),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-center align-center py-5",staticStyle:{background:"#5d1916",color:"#FFFFFF"},attrs:{"aspect-ratio":3.2}},[r("v-container",[r("v-row",{staticClass:"d-flex flex-row flex-wrap justify-center"},[r("v-img",{attrs:{contain:"",src:t.who.foto,width:"550","max-height":"600"}}),t._v(" "),r("v-responsive",{staticClass:"d-flex justify-space-around align-center mx-5 pt-5",attrs:{width:"50%","min-width":"350"}},[r("p",{staticClass:"text-h6",domProps:{innerHTML:t._s(t.who.texto)}})])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Lead:r(364).default}),l()(component,{VCard:d.a,VCardText:f.c,VCol:v.a,VContainer:m.a,VIcon:h.a,VImg:x.a,VMain:_.a,VResponsive:y.a,VRow:w.a})}}]);