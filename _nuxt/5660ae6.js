(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1302:function(t,e,r){"use strict";r.r(e);r(15),r(13),r(12),r(16),r(14),r(17);var n=r(0),o=r(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={data:function(){return{form:{},loading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({profile:"user/getProfile"})),methods:{socialSubmit:function(){this.loading=!0,this.$store.dispatch("user/updateSocial",{form:this.form}),this.reset()},reset:function(){this.loading=!1}}},d=r(7),f=r(8),m=r.n(f),v=r(113),h=r(127),O=r(11),y=r(1215),j=r(140),w=r(114),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"user-bg",attrs:{elevation:"12"}},[r("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[r("span",{staticClass:"f-25 f-semibold"},[t._v("Сошиал хаяг")])]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.socialSubmit(e)}},model:{value:t.form.valid,callback:function(e){t.$set(t.form,"valid",e)},expression:"form.valid"}},[r("v-text-field",{attrs:{loading:t.loading,"prepend-inner-icon":"mdi-instagram",placeholder:"https://instagram.com/",label:"Instagram",outlined:"",dense:""},model:{value:t.form.github,callback:function(e){t.$set(t.form,"github",e)},expression:"form.github"}}),t._v(" "),r("v-text-field",{staticClass:"mt-5",attrs:{loading:t.loading,"prepend-inner-icon":"mdi-facebook",label:"Facebook",outlined:"",dense:""},model:{value:t.form.face,callback:function(e){t.$set(t.form,"face",e)},expression:"form.face"}}),t._v(" "),r("v-text-field",{attrs:{loading:t.loading,"prepend-inner-icon":"mdi-instagram",placeholder:"https://instagram.com/",label:"Instagram",outlined:"",dense:""},model:{value:t.form.inst,callback:function(e){t.$set(t.form,"inst",e)},expression:"form.inst"}}),t._v(" "),r("v-card-actions",{staticClass:"mt-2"},[r("v-btn",{attrs:{loading:t.loading,disabled:!t.form.valid||t.loading,type:"submit",block:"",rounded:"",elevation:"2",color:"primary"},scopedSlots:t._u([{key:"loader",fn:function(){return[r("span",{staticClass:"custom-loader"},[r("v-icon",{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[r("span",[t._v("Болсон")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VCardActions:O.a,VCardText:O.b,VCardTitle:O.c,VForm:y.a,VIcon:j.a,VTextField:w.a})}}]);