(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21636a"],{c205:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{center:""}},[a("v-container",{staticStyle:{"min-width":"320px"}},[a("wrapper",[a("constrain",{attrs:{xs:""}},[a("div",{staticClass:"login-logo"},[a("div",[a("h2",[e._v("Sign In")])])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("v-text-field",{ref:"email",attrs:{"error-messages":e.emailErrors,label:"Email Address",required:""},on:{blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{ref:"password",attrs:{"error-messages":e.passwordErrors,label:"Password",required:"",type:e.showPassword?"text":"password","append-icon":e.showPassword?"visibility":"visibility_off"},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()},"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{attrs:{block:"",large:"",disabled:e.$v.$invalid,loading:e.loading,color:"primary",type:"submit"}},[e._v("Sign In")]),e.signupEnabled?[a("v-btn",{attrs:{block:"",to:{name:"user.signup"},large:"",color:"light"}},[e._v("Create New Account")])]:e._e(),a("v-btn",{attrs:{block:"",to:{name:"user.forgot"},large:"",flat:""}},[e._v("Forgot Password?")])],2)])],1)],1)],1)},r=[],s=(a("a481"),a("2ef0"),a("f217")),o=a("6cd4"),n=a("1dce"),l=a("b5ae"),d=a("1688"),u=a("320d"),c={mixins:[s["a"],o["a"],d["e"],n["validationMixin"]],validations:{email:{required:l["required"],email:l["email"]},password:{required:l["required"]}},data:function(){return{loading:!1,password:"",showPassword:!1}},mounted:function(){this.email&&this.email.length?this.$refs.password.focus():this.$refs.email.focus()},methods:{submit:function(){var e=this,t=e.application&&"application"==e.application.authenticationStyle;function a(t){e.password="";var a=t.data;console.log("Login success",a),e.$fluro.notify("Welcome back ".concat(a.firstName,"!"),{duration:3500,type:"success"}),u["a"].intendedPath?(console.log("Go to intended path",u["a"].intendedPath),e.$router.replace(u["a"].intendedPath),u["a"].intendedPath=null):e.$router.replace({name:"home"}),e.loading=!1}function i(t){var a=e.$fluro.utils.errorMessage(t);console.log("ERROR!",a,t),e.$toasted.show(a,{duration:3500,type:"error"}),e.loading=!1}e.loading=!0,e.$fluro.auth.login({username:e.email,password:e.password},{bypassInterceptor:!0,application:t}).then(a,i)}},computed:{signupEnabled:function(){var e=this.application&&"application"==this.application.authenticationStyle;return e},email:{set:function(e){this.$store.commit("email",e)},get:function(e){return this.$store.getters.email}},emailErrors:function(){var e=[];return this.$v.email.$dirty?(this.$v.email.email||e.push("Must be valid email address"),this.$v.email.required||e.push("Email is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(this.$v.password.required||e.push("Please type your password"),e):e}}},p=c,m=a("2877"),h=a("6544"),f=a.n(h),w=a("8336"),v=a("a523"),g=a("2677"),b=Object(m["a"])(p,i,r,!1,null,null,null);t["default"]=b.exports;f()(b,{VBtn:w["a"],VContainer:v["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-2d21636a.a1cc6335.js.map