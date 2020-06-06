(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a87"],{"786f":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("page",{attrs:{center:""}},[t("v-container",{staticStyle:{"min-width":"320px"}},[t("wrapper",[t("constrain",{attrs:{sm:""}},[t("div",{staticClass:"login-logo"},[t("div",[t("h2",[e._v("Sign Up")]),t("p",{staticClass:"text-muted small"},[e._v("Create your new account to get started")])])]),t("form",{on:{submit:function(r){return r.preventDefault(),e.submit(r)}}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{"pr-4":"","d-flex":"","align-center":"",xs12:"",sm6:""}},[t("v-text-field",{ref:"firstName",attrs:{"error-messages":e.firstNameErrors,required:"",label:"First Name"},on:{blur:function(r){return e.$v.firstName.$touch()}},model:{value:e.firstName,callback:function(r){e.firstName=r},expression:"firstName"}})],1),t("v-flex",{attrs:{"d-flex":"","align-center":"",xs12:"",sm6:""}},[t("v-text-field",{ref:"lastName",attrs:{"error-messages":e.lastNameErrors,required:"",label:"Last Name"},on:{blur:function(r){return e.$v.lastName.$touch()}},model:{value:e.lastName,callback:function(r){e.lastName=r},expression:"lastName"}})],1)],1),t("v-text-field",{ref:"email",attrs:{"error-messages":e.emailErrors,label:"Email Address",required:""},on:{blur:function(r){return e.$v.email.$touch()}},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}}),t("v-text-field",{ref:"password",attrs:{type:"password","error-messages":e.passwordErrors,label:"Create a Password",required:""},on:{input:function(r){return e.$v.password.$touch()},blur:function(r){return e.$v.password.$touch()}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),t("v-text-field",{attrs:{type:"password","error-messages":e.confirmErrors,label:"Confirm your password",required:""},on:{input:function(r){return e.$v.confirmPassword.$touch()},blur:function(r){return e.$v.confirmPassword.$touch()}},model:{value:e.confirmPassword,callback:function(r){e.confirmPassword=r},expression:"confirmPassword"}}),t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{"d-flex":"","align-center":"",xs12:"",sm5:""}},[t("v-btn",{attrs:{block:"",large:"",color:"primary",disabled:e.$v.$invalid,type:"submit"}},[e._v("Continue")])],1),t("v-flex",{attrs:{"d-flex":"","offset-sm1":"","align-center":"",xs12:"",sm6:""}},[t("v-btn",{attrs:{block:"",to:{name:"user.login"},large:"",flat:""}},[e._v("Already have an account?")])],1)],1)],1)])],1)],1)],1)},a=[],i=(t("cadf"),t("551c"),t("097d"),t("2ef0"),t("f217")),o=t("6cd4"),n=t("1dce"),l=t("b5ae"),u=t("1688"),m={mixins:[i["a"],n["validationMixin"],o["a"],u["e"]],validations:{firstName:{required:l["required"],minLength:Object(l["minLength"])(3)},lastName:{required:l["required"],minLength:Object(l["minLength"])(4)},email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},confirmPassword:{required:l["required"],minLength:Object(l["minLength"])(6),isMatch:function(){return this.$v.password.$model==this.$v.confirmPassword.$model}}},mounted:function(){return this.firstName&&this.firstName.length?this.lastName&&this.lastName.length?this.email&&this.email.length?this.password&&this.password.length?void 0:this.$refs.password.focus():this.$refs.email.focus():this.$refs.lastName.focus():this.$refs.firstName.focus()},data:function(){return{password:"",confirmPassword:"",firstName:"",lastName:"",showPassword:!1}},methods:{submit:function(){var e=this,r=this.application&&"application"==this.application.authenticationStyle;function t(r){var t=r.data;console.log("Signup success",t),e.$fluro.notify("Welcome ".concat(t.firstName,"!"),{duration:3500,type:"success"}),window.history.length?e.$router.go(-1):e.$router.push({name:"home"})}function s(r){var t=e.$fluro.utils.errorMessage(r);console.log("ERROR!",t,r),e.$fluro.notify(t,{duration:3500,type:"error"})}console.log("Sign up to application"),this.$fluro.auth.signup({username:e.email,firstName:e.firstName,lastName:e.lastName,password:e.password,confirmPassword:e.confirmPassword},{bypassInterceptor:!0,application:r}).then(t,s)}},computed:{email:{set:function(e){this.$store.commit("email",e)},get:function(e){return this.$store.getters.email}},emailErrors:function(){var e=[];return this.$v.email.$dirty?(this.$v.email.email||e.push("Must be valid email address"),this.$v.email.required||e.push("Email is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(this.$v.password.required||e.push("Please type your password"),e):e},confirmErrors:function(){var e=[];return this.$v.confirmPassword.$dirty?(this.$v.confirmPassword.required||e.push("Please confirm your password"),this.$v.confirmPassword.isMatch||e.push("Your passwords do not match"),e):e},firstNameErrors:function(){var e=[];return this.$v.firstName.$dirty?(this.$v.firstName.required||e.push("Please type your firstName"),e):e},lastNameErrors:function(){var e=[];return this.$v.lastName.$dirty?(this.$v.lastName.required||e.push("Please type your lastName"),e):e}}},c=m,d=t("2877"),f=t("6544"),p=t.n(f),h=t("8336"),v=t("a523"),w=t("0e8f"),$=t("a722"),g=t("2677"),N=Object(d["a"])(c,s,a,!1,null,null,null);r["default"]=N.exports;p()(N,{VBtn:h["a"],VContainer:v["a"],VFlex:w["a"],VLayout:$["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-2d0d7a87.227d2433.js.map