(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db2e0"],{"6f82":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("flex-column",[n("flex-column-body",[n("v-container",[n("wrapper",[n("constrain",{attrs:{sm:""}},[n("div",{attrs:{title:""}},[t.user?t._e():n("h1",[t._v("Why, hello there!")]),t.user?n("h1",[t._v("Hey "+t._s(t.user.firstName)+"!")]):t._e(),n("p",[t._v("\n                                If you can see this then you are successfully running the Fluro Vue Boilerplate!\n                            ")])]),n("wrapper",[n("h2",{attrs:{title:""}},[t._v("\n                                Next Steps\n                            ")]),n("ol",{staticClass:"lg"},[n("li",[n("strong",[t._v("Create your application in Fluro")]),n("br"),t._v("\n                                    Create your application in the "),n("a",{attrs:{href:"https://admin.fluro.io/application",target:"_blank"}},[t._v("Fluro admin panel")]),t._v(" and configure it's settings."),n("br")]),n("li",[n("strong",[t._v("Allow Origin")]),n("br"),t._v("\n                                    Make sure to add 'http://localhost:8080' as an Allowed Origin in your Application Authentication settings so that you can authenticate while you're developing\n                                ")]),n("li",[n("strong",[t._v("Update your Development Environment")]),n("br"),t._v("\n                                    Edit and update the VUE_APP_REMOTE_URL in the "),n("strong",[t._v("vue.config.js")]),t._v(" file variable to match the domain of your application in Fluro.\n                                ")]),n("li",[t._v("\n                                    Make sure you checkout the "),n("a",{attrs:{target:"_blank",href:"https://fluro-developers.github.io/fluro-vue/#/"}},[t._v("Fluro Vue documentation")])])])]),n("wrapper",{attrs:{sm:""}},[n("h3",{attrs:{title:""}},[t._v("\n                                Other goodies and options\n                            ")]),n("ul",[n("li",[n("strong",[t._v("Font Awesome Icons")]),n("br"),t._v("\n                                    If you want to use the FontAwesome Pro Library update the '.npmrc' file with your license number\n                                ")])])]),n("wrapper",{attrs:{sm:""}},[n("h4",[t._v("Here's an example of how to render an image")]),n("fluro-image",{attrs:{contain:"",item:"5bd6340d1a289a5dfac59369",spinner:!0}})],1),n("wrapper",{attrs:{sm:""}},[n("h5",[t._v("Just for fun, let's load your definitions and spit out some forms")]),t._l(t.types,function(e){return[t._l(e.definitions,function(e){return[n("h2",[t._v(t._s(e.title))]),n("fluro-content-form",{attrs:{fields:e.fields},model:{value:t.blankModel,callback:function(e){t.blankModel=e},expression:"blankModel"}})]})]})],2)],1)],1)],1)],1)],1)],1)},r=[],a=n("795b"),i=n.n(a),l=(n("cadf"),n("551c"),n("097d"),n("f217")),s=n("6cd4"),u=n("1688"),c={components:{FluroContentForm:u["b"],FluroContentField:u["FluroContentField"]},methods:{},mixins:[l["a"],s["a"],u["e"]],data:function(){return{blankModel:{}}},asyncComputed:{types:{default:[],get:function(){var t=this;return new i.a(function(e,n){t.$fluro.api.post("/defined",{types:["article"]}).then(function(t){return e(t.data)},n)})}}}},p=c,d=n("2877"),f=n("6544"),h=n.n(f),v=n("a523"),_=Object(d["a"])(p,o,r,!1,null,null,null);e["default"]=_.exports;h()(_,{VContainer:v["a"]})}}]);
//# sourceMappingURL=chunk-2d0db2e0.e3af01ca.js.map