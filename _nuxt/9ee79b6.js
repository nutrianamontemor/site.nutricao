(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{367:function(e,t,n){"use strict";var o=n(26);function r(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var c={inserted:function(e,t){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=t.modifiers||{},c=t.value,v="object"===Object(o.a)(c)?c:{handler:c,options:{}},l=v.handler,d=v.options,f=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(e._observe){var c=t.some((function(e){return e.isIntersecting}));!l||n.quiet&&!e._observe.init||n.once&&!c&&e._observe.init||l(t,o,c),c&&n.once?r(e):e._observe.init=!0}}),d);e._observe={init:!1,observer:f},f.observe(e)}},unbind:r};t.a=c},464:function(e,t,n){"use strict";n.r(t);var o={props:["titulo","texto","foto"],data:function(){return{}}},r=n(57),c=n(75),v=n.n(c),l=n(400),d=n(443),f=n(391),w=n(444),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-responsive",{staticClass:"d-flex justify-center align-center mx-2 pa-2 my-2",staticStyle:{background:"#e7d2cc",color:"#5d1916"},attrs:{"aspect-ratio":16/6}},[n("v-container",{staticStyle:{"font-size":"2em"}},[n("h1",{staticClass:"d-flex justify-center align-center headline"},[e._v(e._s(e.titulo))]),e._v(" "),n("v-row",{staticClass:"d-flex flex-row flex-wrap justify-center  mt-10"},[n("v-img",{attrs:{contain:"",src:e.foto,width:"500",height:"500"}}),e._v(" "),n("v-responsive",{staticClass:"d-flex justify-space-around align-center mx-2 pa-6",attrs:{width:"50%","min-width":"350"}},[n("div",{staticClass:"text-h5",domProps:{innerHTML:e._s(e.texto)}})])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VContainer:l.a,VImg:d.a,VResponsive:f.a,VRow:w.a})}}]);