(window.webpackJsonp=window.webpackJsonp||[]).push([[22,7],{355:function(e,t,o){"use strict";var r=o(358);t.a=r.a},357:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return d})),o.d(t,"d",(function(){return m}));var r=o(369),n=o(6),c=Object(n.g)("v-card__actions"),l=Object(n.g)("v-card__subtitle"),d=Object(n.g)("v-card__text"),m=Object(n.g)("v-card__title");r.a},363:function(e,t,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(48).default)("1cdf85c7",content,!0,{sourceMap:!1})},364:function(e,t,o){var r=o(47)(!1);r.push([e.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),e.exports=r},368:function(e,t,o){"use strict";o.r(t);var r=o(19),n=(o(84),{props:["texto_botao","color"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(e){return!!e||"Informe seu E-mail"},function(e){return/.+@.+\..+/.test(e)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nuxt.$loading.start(),e.loading=!0,e.$sha256(e.email).then((function(t){console.log(t);Math.floor(new Date/1e3);e.$axios.$post("https://api.issei.com.br/lead",{email:e.email},{}).then((function(t){console.log(t),e.loading=!1,e.$nuxt.$loading.finish(),e.$router.push("/obrigado")}))}));case 3:case"end":return t.stop()}}),t)})))()}}}),c=o(57),l=o(74),d=o.n(l),m=o(420),h=o(458),f=o(464),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("div",{staticClass:"d-flex flex-wrap justify-center"},[o("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:e.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",staticStyle:{color:"#3e1607","border-style":"double","border-color":"#3e1607"},attrs:{id:"envioLead",disabled:!e.valid&&e.loading,color:"#ede0E1",height:"40",loading:e.loading},on:{click:e.validate}},[e._v("\n    "+e._s(e.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VForm:h.a,VTextField:f.a})},393:function(e,t,o){"use strict";o(18),o(25),o(30),o(31);var r=o(5),n=(o(100),o(22),o(32),o(58),o(375),o(12),o(37),o(376),o(377),o(379),o(380),o(381),o(382),o(383),o(384),o(385),o(386),o(387),o(388),o(389),o(43),o(75),o(20),o(73),o(359),o(0)),c=o(356),l=o(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],f=h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),v=h.reduce((function(e,t){return e["offset"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),x=h.reduce((function(e,t){return e["order"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),S={col:Object.keys(f),offset:Object.keys(v),order:Object.keys(x)};function _(e,t,o){var r=e;if(null!=o&&!1!==o){if(t){var n=t.replace(e,"");r+="-".concat(n)}return"col"!==e||""!==o&&!0!==o?(r+="-".concat(o)).toLowerCase():r.toLowerCase()}}var y=new Map;t.a=n.a.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var o=t.props,data=t.data,n=t.children,l=(t.parent,"");for(var d in o)l+=String(o[d]);var m=y.get(l);return m||function(){var e,t;for(t in m=[],S)S[t].forEach((function(e){var r=o[e],n=_(t,e,r);n&&m.push(n)}));var n=m.some((function(e){return e.startsWith("col-")}));m.push((e={col:!n||!o.cols},Object(r.a)(e,"col-".concat(o.cols),o.cols),Object(r.a)(e,"offset-".concat(o.offset),o.offset),Object(r.a)(e,"order-".concat(o.order),o.order),Object(r.a)(e,"align-self-".concat(o.alignSelf),o.alignSelf),e)),y.set(l,m)}(),e(o.tag,Object(c.a)(data,{class:m}),n)}})},401:function(e,t,o){"use strict";var r=o(26),n=(o(100),o(77),o(229),o(73),o(76),o(363),o(360)),c=o(355),l=o(101),d=o(56),m=o(356),h=o(23),f="undefined"!=typeof window&&"IntersectionObserver"in window;t.a=Object(d.a)(c.a,l.a).extend({name:"v-img",directives:{intersect:n.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push("linear-gradient(".concat(this.gradient,")")),t&&e.push('url("'.concat(t,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(e,t,o){if(!f||o||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var e=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(t){Object(h.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(e.normalisedSrc.src)+(t.message?"\nOriginal error: ".concat(t.message):""),e)})).then(e.onLoad):e.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=function o(){var r=img.naturalHeight,n=img.naturalWidth;r||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/r):img.complete||!e.isLoading||e.hasError||null==t||setTimeout(o,t)};o()},genContent:function(){var content=c.a.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(e){var t=c.a.options.render.call(this,e),data=Object(m.a)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,data,t.children)}})},410:function(e,t,o){"use strict";o.r(t);var r={props:["titulo","conteudo"],data:function(){return{}}},n=o(57),c=o(74),l=o.n(c),d=o(369),m=o(357),h=o(402),f=o(401),v=o(358),x=o(459),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-responsive",{staticClass:"d-flex justify-center align-center pa-2",staticStyle:{background:"#e7d2cc",color:"#3e1607"},attrs:{"aspect-ratio":3.2}},[o("v-container",[o("h1",{staticClass:"d-flex justify-center align-center text-md-h3 text-sm-h4 mt-10",staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.titulo))]),e._v(" "),o("v-row",{staticClass:"d-flex justify-center align-center my-5"},[o("h1",{staticClass:"d-flex justify-center align-center headline",staticStyle:{color:"black"}})]),e._v(" "),o("v-row",{staticClass:"d-flex justify-center align-center mb-15"},e._l(e.conteudo.itens,(function(t,i){return o("v-card",{key:i,staticClass:"ma-2 rounded-xl",attrs:{width:"250",height:"270"}},[o("v-card-text",{staticClass:"d-flex flex-column justify-center align-center justify-space-between justify-space-around "},[o("v-img",{staticClass:"mt-1",attrs:{src:t.imagem,width:"67",height:"67"}}),e._v(" "),o("p",{staticClass:"mt-5 text-lg-center text-h5",domProps:{innerHTML:e._s(t.texto)}})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:d.a,VCardText:m.c,VContainer:h.a,VImg:f.a,VResponsive:v.a,VRow:x.a})},422:function(e,t,o){"use strict";o.r(t);var r={props:["headline"],data:function(){return{}}},n=o(57),c=o(74),l=o.n(c),d=o(393),m=o(402),h=o(401),f=o(358),v=o(459),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-responsive",{staticClass:"d-flex justify-center align-center ",style:e.headline.style,attrs:{"aspect-ratio":16/6}},[o("v-container",[o("v-row",{staticClass:"justify-space-around",attrs:{align:"center",justify:"center"}},[o("v-col",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-lg-left  text-center text-sm-center text-xs-center",attrs:{cols:"12"}},[o("h1",{staticClass:"text-md-h3 text-sm-h4",domProps:{innerHTML:e._s(e.headline.titulo)}}),e._v(" "),o("h4",{staticClass:"text-md-h6 text-sm-h7 mt-5",domProps:{innerHTML:e._s(e.headline.subtitulo)}})])],1)],1),e._v(" "),o("v-col",[o("v-img",{attrs:{contain:"",src:e.headline.imagem,width:"600"}})],1)],1),e._v(" "),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{lg:"7",xs:"12",align:"center",justify:"center"}},[o("Lead",{attrs:{texto_botao:e.headline.texto_botao,color:e.headline.btnColor}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{Lead:o(368).default}),l()(component,{VCol:d.a,VContainer:m.a,VImg:h.a,VResponsive:f.a,VRow:v.a})},423:function(e,t,o){"use strict";o.r(t);var r={props:["titulo","itens","imagem","btnColor","texto_botao","style"],data:function(){return{}}},n=o(57),c=o(74),l=o.n(c),d=o(393),m=o(402),h=o(358),f=o(459),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-responsive",{staticClass:"d-flex justify-center align-center mx-2 pa-2 my-2",style:e.style,attrs:{"aspect-ratio":16/6}},[o("v-container",[o("div",{staticClass:"d-flex justify-center align-center headline text-md-h3 text-sm-h4",staticStyle:{"font-weight":"bold","font-size":"30px"}},[e._v(e._s(e.titulo))]),e._v(" "),o("v-row",{staticClass:"d-flex justify-center my-10"},[o("v-col",{staticClass:"d-flex align-stretch flex-column justify-center align-center pb-1"},e._l(e.itens,(function(t,i){return o("v-col",{key:i,staticClass:"d-flex flex-row"},[o("img",{staticClass:"mr-5",attrs:{src:t.imagem,width:"67",height:"58"}}),e._v(" "),o("div",{staticClass:"text-h5",staticStyle:{"font-size":"20px"},domProps:{innerHTML:e._s(t.texto)}})])})),1)],1),e._v(" "),o("v-row",[o("v-col",[o("Lead",{attrs:{texto_botao:e.headline.texto_botao,color:e.headline.btnColor}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{Lead:o(368).default}),l()(component,{VCol:d.a,VContainer:m.a,VResponsive:h.a,VRow:f.a})},424:function(e,t,o){"use strict";o.r(t);var r={props:["titulo","texto","foto"],data:function(){return{}}},n=o(57),c=o(74),l=o.n(c),d=o(402),m=o(401),h=o(358),f=o(459),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-responsive",{staticClass:"d-flex justify-center align-center mx-2 pa-2 my-2",staticStyle:{background:"#e7d2cc",color:"#5d1916"},attrs:{"aspect-ratio":16/6}},[o("v-container",{staticStyle:{"font-size":"2em"}},[o("h1",{staticClass:"d-flex justify-center align-center headline"},[e._v(e._s(e.titulo))]),e._v(" "),o("v-row",{staticClass:"d-flex flex-row flex-wrap justify-center  mt-10"},[o("v-img",{attrs:{contain:"",src:e.foto,width:"500",height:"500"}}),e._v(" "),o("v-responsive",{staticClass:"d-flex justify-space-around align-center mx-2 pa-6",attrs:{width:"50%","min-width":"350"}},[o("div",{staticClass:"text-h5",domProps:{innerHTML:e._s(e.texto)}})])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VContainer:d.a,VImg:m.a,VResponsive:h.a,VRow:f.a})},465:function(e,t,o){"use strict";o.r(t);var r={layout:"servico",mounted:function(){},data:function(){return{headline:{titulo:'<SPAN STYLE="font-weight:bold; ">LIBERTE-SE DAS <SPAN STYLE="color: #3e1607; ">BIRRAS</SPAN> NA HORA DAS <SPAN STYLE="color: #3e1607; ">REFEIÇÕES</SPAN> E CONQUISTE A <SPAN STYLE="color: #3e1607; ">TRANQUILIDADE</SPAN> QUE SEMPRE SONHOU</SPAN>',subtitulo:"AULA GRATUITA | DIA 10/02 ÀS 20H",texto_botao:"QUERO PARTICIPAR",btnColor:"#03989e",style:"color: #ffffff;background: #d7837f;",imagem:"./familia3.png"},praquemeh:{titulo:"VOCÊ VAI APRENDER...",style:"background: #e7d2cc; color: #5d1916;",imagem:"https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",itens:[{texto:"Como organizar a rotina da família",imagem:"./manage.svg"},{texto:"Como lidar com a criança que não come e não se comporta à mesa",imagem:"./crykids.svg"},{texto:"Como saber o que oferecer e dar para a criança comer",imagem:"./salada.svg"},{texto:"Como lidar com a falta de tempo na cozinha",imagem:"./quick.svg"}]},chamadaAcao:{titulo:"Como participar?",descricao:"Cadastre-se na lista de espera para ser avisado da próxima turma.",style:"background: #FFFFFF; color: #000000;",btnColor:"#03989e"},who:{titulo:"",foto:"./bio.png",texto:'<p><SPAN STYLE="font-weight:bold">Ana Paula Montemor</SPAN> é Nutricionista há 15 anos, especialista em  Nutrição Materno Infantil e Terapia Familiar. Depois de perceber que a “ nutrição infantil tradicional” não funcionava na rotina da família, desenvolveu o Método “ CHILD”, que já ajudou milhares de famílias a conquistar a alimentação saudável, com equilíbrio e paz.</p><p>Criou o Aulão "Os Desafios da Alimentação" com a missão de ajudar toda e qualquer mulher a aprender a lidar com seus filhos que não comem de tudo, planejar refeições saudáveis e rápidas para otimizar o tempo na cozinha.</p>'},what:{titulo:"Para quem é?",texto:"Você tem alguma agência ou pessoa responsável pela sua estratégia de venda?<br />Vejo que você tem muito potencial, se alinhar o seu conteúdo com uma boa estratégia de venda você pode ter muito mais resultado e alcançar muito mais pessoas. Se tiver interesse no Dia tal eu tenho um horário, podemos marcar uma call e conversarmos sobre o que eu imagino que pode ser feito para impulsionar suas redes, quem sabe rola uma parceria",imagem:"./img/undraw_stepping_up_g6oo.svg"},praquem:{titulo:"ESSA MASTERCLASS É PARA VOCÊ QUE ...",itens:[{imagem:"https://issei.imgix.net/talita/pensamento.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"COMO ORGANIZAR A ROTINA ALIMENTAR DA FAMÍLIA"},{imagem:"https://issei.imgix.net/talita/quebra-cabeca.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"para mães que queiram paz e harmonia nas refeições das crianças"},{imagem:"https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"para quem não tempo de cozinhar todos os dias e não abrem mão da qualidade"},{imagem:"https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"para quem não sabe cozinhar comidas saudáveis"}]},conteudos:{titulo:"ESSA AULA É PARA VOCÊ QUE... ",style:"background: #FFFFFF; color: #5d1916;",itens:[{imagem:"./check.png",texto:"NÃO TEM TEMPO DE COZINHAR TODOS OS DIAS E NÃO ABRE MÃO DA QUALIDADE DA ALIMENTAÇÃO"},{imagem:"./check.png",texto:"QUER QUE O SEU FILHO PARE DE REJEITAR  OS ALIMENTOS"},{imagem:"./check.png",texto:"QUER ORGANIZAR  MELHOR A ROTINA ALIMENTAR DA FAMÍLIA"},{imagem:"./check.png",texto:"TEM DIFICULDADES DE ALIMENTAR DE FORMA SAUDÁVEL O SEU FILHO"}]},faqs:[{pergunta:"Precisa ter conhecimento em programação?",resposta:"Não, o curso é para crianças e adolescentes que tenham interesse e querem aprender conceitos de programação."},{pergunta:"O curso é presencial?",resposta:"Não, para atender todos os interessados, nosso curso é 100% online."},{pergunta:"Tem suporte para tirar as dúvidas?",resposta:"Sim, o aluno e os pais terão contato direto com o Professor através do WhatsApp e e-mail."},{pergunta:"Por que aprender programação e tecnologia ainda em idade escolar?",resposta:"Entre os muitos benefícios da lógica de programação podemos citar: desenvolvimento criativo, ampliação do raciocínio lógico e resolução de problemas. Saber programar é praticamente tão importante quanto dominar o inglês, uma vez que as empresas procuram cada vez mais por profissionais com essa habilidade. Inclusive, essa tendência tende a continuar crescente nos próximos anos. Por isso, investir na programação para crianças é uma forma de garantir ao seu filho um diferencial competitivo para quando ele entrar no mercado de trabalho."},{pergunta:"O curso oferece garantia?",resposta:"Os novos alunos matriculados tem 14 dias para conhecer a nossa metodologia. Caso ele não goste do curso, você poderá enviar um e-mail para o nosso suporte e ter o reembolso do valor integral do curso."},{pergunta:"Quando será aberta as inscrições para a próxima turma?",resposta:"Avisaremos por e-mail quando iniciarmos as inscrições . Caso tenha interesse, cadastre-se na lista de espera."},{pergunta:"Eu posso começar a fazer o Curso de Programação agora?",resposta:"As inscrições não estão abertas, abriremos algumas vezes ao ano, pois dessa forma conseguimos nos organizar para receber todos os alunos com o maior nível de excelência possível. Caso tenha interesse em saber sobre a abertura das inscrições, cadastre-se na lista de espera."}]}}},n=o(57),c=o(74),l=o.n(c),d=o(352),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-main",[o("Head",{attrs:{headline:e.headline}}),e._v(" "),o("Boxes",{attrs:{conteudo:e.praquemeh,titulo:e.praquemeh.titulo}}),e._v(" "),o("ListaItens",{style:e.conteudos.style,attrs:{titulo:e.conteudos.titulo,itens:e.conteudos.itens,imagem:e.conteudos.imagem,btnColor:e.headline.btnColor,texto_botao:e.headline.texto_botao}}),e._v(" "),o("Quemsomos",{attrs:{texto:e.who.texto,foto:e.who.foto}})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{Head:o(422).default,Boxes:o(410).default,ListaItens:o(423).default,Quemsomos:o(424).default}),l()(component,{VMain:d.a})}}]);