(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ef742c"],{b7a1:function(e,t,a){"use strict";var n=a("5176"),r=a.n(n),c=a("e814"),o=a.n(c);a("c5f6");t["a"]={props:{currentPage:{type:Number,default:function(){return o()(this.$route.query.page)||1}}},methods:{pageChanged:function(e){this.currentPage=e,this.$router.push({query:r()({},this.$route.query,{page:e})})}}}},f2ea:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",[a("v-container",[e.user?e._e():a("constrain",{staticClass:"text-xs-center",attrs:{xs:""}},[a("p",[e._v("This page is only available to authenticated users")])]),e.user?a("constrain",[a("v-container",{staticClass:"page-header"},[a("h1",[e._v("Change Account")]),a("p",[e._v("Select an account below")]),e.loaded?e._e():a("div",[a("v-progress-circular",{attrs:{indeterminate:""}}),a("div",[e._v("Loading...")])],1)]),e.accounts.length?a("v-container",[a("v-card",[a("v-card-title",[e._v("\n                        Accounts\n                        "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{"rows-per-page-items":e.pageOptions,headers:e.headers,items:e.filtered},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[a("strong",[e._v(e._s(t.item.title))])]),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(a){return e.changeAccount(t.item)}}},[a("span",[e._v("Sign In")]),a("font-awesome-icon",{attrs:{right:"",icon:["fas","arrow-right"]}})],1)],1)]}}],null,!1,3686837940)})],1)],1):e._e()],1):e._e()],1)],1)},r=[],c=a("795b"),o=a.n(c),s=(a("386d"),a("cadf"),a("551c"),a("097d"),a("2ef0")),i=a.n(s),u=a("f217"),l=a("6cd4"),h=a("b7a1"),d=a("1688"),f={mixins:[u["a"],h["a"],l["a"],d["e"]],data:function(){return{search:"",pageOptions:[10,25,50,100],headers:[{text:"Account Name",align:"left",sortable:!0,value:"title"},{text:"Actions",sortable:!1,value:"_id"}],loaded:!1,accounts:[]}},created:function(){var e=this;return e.routeSearch&&e.routeSearch.component&&e.routeSearch.component.$on("search",function(t){e.search=t}),e.retrieveAccounts()},computed:{routeSearch:function(){return i.a.get(this,"$route.meta.search")}},asyncComputed:{filtered:{default:[],get:function(){var e=this,t=e.search;return new o.a(function(a,n){if(!t||!t.length)return a(e.accounts);var r={shouldSort:!0,tokenize:!0,matchAllTokens:!0,findAllMatches:!0,threshold:.3,location:0,distance:2,maxPatternLength:32,minMatchCharLength:5,keys:["title"]};e.$search(t,e.accounts,r).then(function(e){return a(e)},function(e){return a([])})})}}},methods:{changeAccount:function(e){var t=this,a=i.a.get(t,"user.account._id");if(a==e._id)return r();var n=t.$fluro.auth.changeAccount(e);function r(){console.log("Switched into",e.title),t.$router.push({name:"home"})}n.then(r,function(e){console.log("ERROR",e);t.$fluro.utils.errorMessage(e)})},retrieveAccounts:function(){var e=this;if(e.user){e.loaded=!1;var t=e.$fluro.api.get("/user/accounts",{});t.then(function(t){e.accounts=t.data,e.loaded=!0},function(t){console.log("ERROR!",t),e.loaded=!0})}}}},p=f,g=a("2877"),v=a("6544"),m=a.n(v),b=a("8336"),_=a("b0af"),x=a("12b2"),w=a("a523"),C=a("8fea"),A=a("490a"),S=a("9910"),$=a("2677"),k=Object(g["a"])(p,n,r,!1,null,null,null);t["default"]=k.exports;m()(k,{VBtn:b["a"],VCard:_["a"],VCardTitle:x["a"],VContainer:w["a"],VDataTable:C["a"],VProgressCircular:A["a"],VSpacer:S["a"],VTextField:$["a"]})}}]);
//# sourceMappingURL=chunk-15ef742c.84c88643.js.map