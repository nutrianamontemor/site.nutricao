(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{352:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return d})),o.d(t,"d",(function(){return m}));var r=o(355),n=o(6),c=Object(n.e)("v-card__actions"),l=Object(n.e)("v-card__subtitle"),d=Object(n.e)("v-card__text"),m=Object(n.e)("v-card__title");r.a},355:function(e,t,o){"use strict";o(22),o(18),o(25),o(30),o(20),o(31);var r=o(5),n=(o(100),o(387),o(363),o(354)),c=o(397),l=o(357),d=o(56);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=c.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),o=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(o,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},363:function(e,t,o){var content=o(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("e23b7040",content,!0,{sourceMap:!1})},364:function(e,t,o){var r=o(54)(!1);r.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=r},368:function(e,t,o){"use strict";o.r(t);var r=o(19),n=(o(84),{props:["texto_botao","color"],data:function(){return{loading:!1,valid:!0,email:"",emailRules:[function(e){return!!e||"Informe seu E-mail"},function(e){return/.+@.+\..+/.test(e)||"Informe E-mail válido ex. email@dominio.com.br "}]}},methods:{validate:function(){this.$refs.form.validate(),this.nameOfFunction()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.loading=!1,this.$refs.form.resetValidation()},nameOfFunction:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$nuxt.$loading.start(),e.loading=!0,e.$sha256(e.email).then((function(t){console.log(t);Math.floor(new Date/1e3);e.$axios.$post("https://api.issei.com.br/lead",{email:e.email,origin:"nutrianamontemor.com.br"},{}).then((function(t){console.log(t),e.loading=!1,e.$nuxt.$loading.finish(),e.$router.push("/obrigado")}))}));case 3:case"end":return t.stop()}}),t)})))()}}}),c=o(57),l=o(75),d=o.n(l),m=o(408),v=o(445),f=o(448),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("div",{staticClass:"d-flex flex-wrap justify-center  mb-3"},[o("v-text-field",{staticClass:"d-flex align-self-auto",attrs:{rules:e.emailRules,placeholder:"Informe seu melhor e-mail",filled:"",dense:"",label:"Informe o seu melhor e-mail",solo:"","single-line":"",rounded:"",required:"","full-width":"",height:"40",color:"#ffab1a",green:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),o("v-btn",{staticClass:"d-flex align-self-auto ml-4 align-center",staticStyle:{color:"#3e1607","border-style":"double","border-color":"#3e1607"},attrs:{id:"envioLead",disabled:!e.valid&&e.loading,color:"#ede0E1",height:"40",rounded:"",loading:e.loading},on:{click:e.validate}},[e._v("\n    "+e._s(e.texto_botao)+"\n  ")])],1)])}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VForm:v.a,VTextField:f.a})},389:function(e,t,o){"use strict";o(18),o(25),o(30),o(31);var r=o(5),n=(o(100),o(22),o(32),o(58),o(370),o(12),o(37),o(371),o(372),o(373),o(374),o(375),o(376),o(377),o(378),o(379),o(380),o(381),o(382),o(383),o(43),o(74),o(20),o(73),o(353),o(0)),c=o(351),l=o(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],f=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=v.reduce((function(e,t){return e["offset"+Object(l.q)(t)]={type:[String,Number],default:null},e}),{}),x=v.reduce((function(e,t){return e["order"+Object(l.q)(t)]={type:[String,Number],default:null},e}),{}),_={col:Object.keys(f),offset:Object.keys(h),order:Object.keys(x)};function y(e,t,o){var r=e;if(null!=o&&!1!==o){if(t){var n=t.replace(e,"");r+="-".concat(n)}return"col"!==e||""!==o&&!0!==o?(r+="-".concat(o)).toLowerCase():r.toLowerCase()}}var w=new Map;t.a=n.a.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var o=t.props,data=t.data,n=t.children,l=(t.parent,"");for(var d in o)l+=String(o[d]);var m=w.get(l);return m||function(){var e,t;for(t in m=[],_)_[t].forEach((function(e){var r=o[e],n=y(t,e,r);n&&m.push(n)}));var n=m.some((function(e){return e.startsWith("col-")}));m.push((e={col:!n||!o.cols},Object(r.a)(e,"col-".concat(o.cols),o.cols),Object(r.a)(e,"offset-".concat(o.offset),o.offset),Object(r.a)(e,"order-".concat(o.order),o.order),Object(r.a)(e,"align-self-".concat(o.alignSelf),o.alignSelf),e)),w.set(l,m)}(),e(o.tag,Object(c.a)(data,{class:m}),n)}})},401:function(e,t,o){var content=o(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(55).default)("424d9537",content,!0,{sourceMap:!1})},402:function(e,t,o){var r=o(54)(!1);r.push([e.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),e.exports=r},413:function(e,t,o){"use strict";o(401);var r=o(164);t.a=r.a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var e=this.$vuetify.application,t=e.bar,o=e.top,r=e.right,footer=e.footer,n=e.insetFooter,c=e.bottom,l=e.left;return{paddingTop:"".concat(o+t,"px"),paddingRight:"".concat(r,"px"),paddingBottom:"".concat(footer+n+c,"px"),paddingLeft:"".concat(l,"px")}}},render:function(e){var data={staticClass:"v-main",style:this.styles,ref:"main"};return e(this.tag,data,[e("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},452:function(e,t,o){"use strict";o.r(t);var r={mounted:function(){},data:function(){return{headline:{titulo:'<SPAN STYLE="font-weight:bold; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #5d1916;">LIBERTE-SE DAS <SPAN STYLE="color: #FFFFFF; ">BIRRAS</SPAN> NA HORA DAS <SPAN STYLE="color: #FFFFFF; ">REFEIÇÕES</SPAN> E CONQUISTE A <SPAN STYLE="color: #FFFFFF; ">TRANQUILIDADE</SPAN> QUE SEMPRE SONHOU</SPAN>',subtitulo:'Aulão: Os Desafios da Alimentação  <BR/>DIA 10/02 ÀS 20H<BR/><SPAN STYLE="font-size:16px;">ONLINE, GRATUITO E 100% SAUDÁVEL</SPAN>',texto_botao:"QUERO PARTICIPAR*",btnColor:"#03989e",style:"background-image: url('/couve.jpg'); background-position: 50% 30%; background-repeat: no-repeat;  background-size: cover; color: #ffffff;",imagem:"/familia3.png"},praquemeh:{titulo:"VOCÊ VAI APRENDER...",style:"background: #e7d2cc; color: #5d1916;",imagem:"https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",itens:[{texto:"Como organizar a rotina da família",imagem:"/manage.svg"},{texto:"Como lidar com a criança que não come e não se comporta à mesa",imagem:"/crykids.svg"},{texto:"Como saber o que oferecer e dar para a criança comer",imagem:"/salada.svg"},{texto:"Como lidar com a falta de tempo na cozinha",imagem:"/quick.svg"}]},chamadaAcao:{titulo:"Como participar?",descricao:"Cadastre-se na lista de espera para ser avisado da próxima turma.",style:"background: #FFFFFF; color: #000000;",btnColor:"#03989e"},who:{titulo:"",foto:"/bio.png",texto:'<SPAN STYLE="font-weight:bold">Ana Paula Montemor</SPAN> é Nutricionista há 15 anos, especialista em  Nutrição Materno Infantil e Terapia Familiar. Depois de perceber que a “ nutrição infantil tradicional” não funcionava na rotina da família, desenvolveu o Método “ CHILD”, que já ajudou milhares de famílias a conquistar a alimentação saudável, com equilíbrio e paz.<br/>Criou o Aulão "Os Desafios da Alimentação" com a missão de ajudar toda e qualquer mulher a aprender a lidar com seus filhos que não comem de tudo, planejar refeições saudáveis e rápidas para otimizar o tempo na cozinha.'},what:{titulo:"Para quem é?",texto:"Você tem alguma agência ou pessoa responsável pela sua estratégia de venda?<br />Vejo que você tem muito potencial, se alinhar o seu conteúdo com uma boa estratégia de venda você pode ter muito mais resultado e alcançar muito mais pessoas. Se tiver interesse no Dia tal eu tenho um horário, podemos marcar uma call e conversarmos sobre o que eu imagino que pode ser feito para impulsionar suas redes, quem sabe rola uma parceria",imagem:"/img/undraw_stepping_up_g6oo.svg"},praquem:{titulo:"ESSA MASTERCLASS É PARA VOCÊ QUE ...",itens:[{imagem:"https://issei.imgix.net/talita/pensamento.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"COMO ORGANIZAR A ROTINA ALIMENTAR DA FAMÍLIA"},{imagem:"https://issei.imgix.net/talita/quebra-cabeca.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"para mães que queiram paz e harmonia nas refeições das crianças"},{imagem:"https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"para quem não tempo de cozinhar todos os dias e não abrem mão da qualidade"},{imagem:"https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",titulo:"",descricao:"para quem não sabe cozinhar comidas saudáveis"}]},conteudos:{titulo:"ESSA AULA É PARA VOCÊ QUE... ",style:"background: #FFFFFF; color: #5d1916;",itens:[{imagem:"/check.png",texto:"Não tem tempo de cozinhar todos os dias e não abre mão da qualidade da alimentação"},{imagem:"/check.png",texto:"Quer que o seu filho pare de rejeitar  os alimentos"},{imagem:"/check.png",texto:"Quer organizar  melhor a rotina alimentar da família"},{imagem:"/check.png",texto:"Tem dificuldades de alimentar de forma saudável o seu filho"}]},faqs:[{pergunta:"Precisa ter conhecimento em programação?",resposta:"Não, o curso é para crianças e adolescentes que tenham interesse e querem aprender conceitos de programação."},{pergunta:"O curso é presencial?",resposta:"Não, para atender todos os interessados, nosso curso é 100% online."},{pergunta:"Tem suporte para tirar as dúvidas?",resposta:"Sim, o aluno e os pais terão contato direto com o Professor através do WhatsApp e e-mail."},{pergunta:"Por que aprender programação e tecnologia ainda em idade escolar?",resposta:"Entre os muitos benefícios da lógica de programação podemos citar: desenvolvimento criativo, ampliação do raciocínio lógico e resolução de problemas. Saber programar é praticamente tão importante quanto dominar o inglês, uma vez que as empresas procuram cada vez mais por profissionais com essa habilidade. Inclusive, essa tendência tende a continuar crescente nos próximos anos. Por isso, investir na programação para crianças é uma forma de garantir ao seu filho um diferencial competitivo para quando ele entrar no mercado de trabalho."},{pergunta:"O curso oferece garantia?",resposta:"Os novos alunos matriculados tem 14 dias para conhecer a nossa metodologia. Caso ele não goste do curso, você poderá enviar um e-mail para o nosso suporte e ter o reembolso do valor integral do curso."},{pergunta:"Quando será aberta as inscrições para a próxima turma?",resposta:"Avisaremos por e-mail quando iniciarmos as inscrições . Caso tenha interesse, cadastre-se na lista de espera."},{pergunta:"Eu posso começar a fazer o Curso de Programação agora?",resposta:"As inscrições não estão abertas, abriremos algumas vezes ao ano, pois dessa forma conseguimos nos organizar para receber todos os alunos com o maior nível de excelência possível. Caso tenha interesse em saber sobre a abertura das inscrições, cadastre-se na lista de espera."}]}}},n=o(57),c=o(75),l=o.n(c),d=o(355),m=o(352),v=o(389),f=o(400),h=o(405),x=o(443),_=o(413),y=o(391),w=o(444),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-main",[o("v-responsive",{staticClass:"d-flex justify-center align-center pa-0",style:e.headline.style,attrs:{"aspect-ratio":3.2}},[o("v-container",[o("v-row",{staticClass:"justify-space-around",attrs:{align:"center",justify:"center"}},[o("v-col"),e._v(" "),o("v-col",{attrs:{lg:"6",md:"7",sm:"7",xs:"7"}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-lg-right  text-center text-sm-center text-xs-center",attrs:{cols:"12"}},[o("h1",{staticClass:"text-md-h3 text-sm-h4",domProps:{innerHTML:e._s(e.headline.titulo)}}),e._v(" "),o("h4",{staticClass:"text-md-h5 text-sm-h6 mt-5",domProps:{innerHTML:e._s(e.headline.subtitulo)}})])],1)],1)],1),e._v(" "),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{lg:"6",md:"6",sm:"10",xs:"10",align:"center",justify:"center"}},[o("Lead",{attrs:{texto_botao:e.headline.texto_botao,color:e.headline.btnColor}}),e._v(" "),o("div",{staticClass:"d-flex flex-wrap justify-center",staticStyle:{"font-size":"10px"}},[e._v("*Ao participar, de acordo com a lei 12.965/2014 e 13.709/2018, autorizo Ana Paula Montemor a enviar comunicações por e-mail ou qualquer outro meio e concordo com a sua política de privacidade.")])],1)],1)],1)],1),e._v(" "),o("v-responsive",{staticClass:"d-flex justify-center align-center pt-10 pb-10",staticStyle:{background:"#ede0e1",color:"#3e1607"},attrs:{"aspect-ratio":3.2}},[o("v-container",[o("h1",{staticClass:"d-flex justify-center align-center text-md-h4 text-sm-h4",staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.praquemeh.titulo))]),e._v(" "),o("v-row",{staticClass:"d-flex justify-center align-center my-5"},[o("h1",{staticClass:"d-flex justify-center align-center headline",staticStyle:{color:"black"}})]),e._v(" "),o("v-row",{staticClass:"d-flex justify-center align-center"},e._l(e.praquemeh.itens,(function(t,i){return o("v-card",{key:i,staticClass:"ma-2 rounded-xl",attrs:{width:"250",height:"270"}},[o("v-card-text",{staticClass:"d-flex flex-column justify-center align-center justify-space-between justify-space-around "},[o("v-img",{staticClass:"mt-1",attrs:{src:t.imagem,width:"67",height:"67"}}),e._v(" "),o("p",{staticClass:"mt-5 text-lg-center text-h5",staticStyle:{color:"#000000"},domProps:{innerHTML:e._s(t.texto)}})],1)],1)})),1)],1)],1),e._v(" "),o("v-responsive",{staticClass:"d-flex justify-center align-center pt-10 pb-10",style:e.conteudos.style,attrs:{"aspect-ratio":16/6}},[o("v-container",[o("div",{staticClass:"d-flex justify-center align-center headline text-md-h4 text-sm-h4",staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.conteudos.titulo))]),e._v(" "),o("v-row",{staticClass:"d-flex justify-center my-10"},[o("v-col",{staticClass:"d-flex align-stretch flex-column justify-center align-center pb-1"},e._l(e.conteudos.itens,(function(t,i){return o("v-col",{key:i,staticClass:"d-flex flex-row"},[o("v-icon",{staticClass:"mr-5",attrs:{large:""}},[e._v("mdi-check")]),e._v(" "),o("div",{staticClass:"text-h5",staticStyle:{"font-size":"16px",color:"#000000"},domProps:{innerHTML:e._s(t.texto)}})],1)})),1)],1),e._v(" "),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{lg:"6",md:"6",sm:"10",xs:"10",align:"center",justify:"center"}},[o("Lead",{attrs:{texto_botao:e.headline.texto_botao,color:e.headline.btnColor}})],1)],1)],1)],1),e._v(" "),o("v-responsive",{staticClass:"d-flex justify-center align-center pa-4",staticStyle:{background:"#ede0e1",color:"#5d1916"},attrs:{"aspect-ratio":3.2}},[o("v-container",[o("v-row",{staticClass:"d-flex flex-row flex-wrap justify-center"},[o("v-img",{attrs:{contain:"",src:e.who.foto,width:"550",height:"600"}}),e._v(" "),o("v-responsive",{staticClass:"d-flex justify-space-around align-center mx-2",attrs:{width:"50%","min-width":"350"}},[o("p",{staticClass:"text-h6",domProps:{innerHTML:e._s(e.who.texto)}})])],1)],1)],1)],1)}),[],!1,null,"73c93a96",null);t.default=component.exports;l()(component,{Lead:o(368).default}),l()(component,{VCard:d.a,VCardText:m.c,VCol:v.a,VContainer:f.a,VIcon:h.a,VImg:x.a,VMain:_.a,VResponsive:y.a,VRow:w.a})}}]);