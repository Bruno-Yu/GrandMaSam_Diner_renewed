"use strict";(self["webpackChunkgrandmasam_diner_renewed"]=self["webpackChunkgrandmasam_diner_renewed"]||[]).push([[425],{6425:function(e,a,n){n.r(a),n.d(a,{default:function(){return M}});n(4114);var t=n(641),o=n(3751),l=n(953),s=n(5220),r=n(2505),u=n.n(r);const d=e=>((0,t.Qi)("data-v-77b513ea"),e=e(),(0,t.jt)(),e),c={class:"container"},i={class:"row justify-content-center"},m=d((()=>(0,t.Lk)("h1",{class:"h3 my-5 font-weight-normal text-center fw-bolder"},"榮譽會員登入處",-1))),p={class:"col-8 col-lg-5 mb-5"},f={class:"form-floating mb-3"},v=d((()=>(0,t.Lk)("label",{for:"username"},"Email address",-1))),b={class:"form-floating"},k=d((()=>(0,t.Lk)("label",{for:"password"},"Password",-1))),g=d((()=>(0,t.Lk)("button",{class:"btn btn-lg btn-warning fw-bold shadow w-100 mt-3","data-name":"loginBtn",type:"submit"}," 登入 ",-1))),w={class:"container text-center mt-3"},L=d((()=>(0,t.Lk)("p",{class:"text-muted fw-bold"},"只有會員才能登入呦! 如果您也想登入",-1))),h={class:"text-muted fw-bold"},x=d((()=>(0,t.Lk)("p",{class:"mt-5 mb-1 text-center font-Noto fw-500"},"© 2022~∞ - 八角學堂向以下人員致敬",-1))),y=d((()=>(0,t.Lk)("p",{class:"mb-3 text-muted text-center font-Noto fw-500"}," 辛苦的卡老師、Ray與其他同期的駁二裝置藝術們 ",-1)));var _={__name:"LoginView",setup(e){const a=(0,s.rd)(),n=(0,l.KR)(null),r=(0,l.KR)(!0),d=(0,l.KR)("brunoyu2022@gmail.com"),_=(0,l.KR)("jPe5zX6PeTgkEZs"),C=async()=>{r.value=!0;const e={username:d.value,password:_.value};try{const t=await u().post("https://vue3-course-api.hexschool.io/v2//admin/signin",e),{token:o,expired:l}=t.data;document.cookie=`hexToken=${o};expires=${new Date(l)};`,r.value=!1,n.value.openModal(!0,"login"),a.push("/admin")}catch(t){r.value=!1,n.value.openModal(!1,"login")}};return(0,t.sV)((()=>{setTimeout((()=>{r.value=!1}),3e3)})),(e,a)=>{const l=(0,t.g2)("PageLoading"),s=(0,t.g2)("ModalMessage"),u=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(l,{loader:"bars",active:r.value,"can-cancel":!0,"is-full-page":!1},null,8,["active"]),(0,t.bF)(s,{ref_key:"modalMessage",ref:n},null,512),(0,t.Lk)("div",c,[(0,t.Lk)("div",i,[m,(0,t.Lk)("div",p,[(0,t.Lk)("form",{id:"form",class:"form-signin",onSubmit:(0,o.D$)(C,["prevent"])},[(0,t.Lk)("div",f,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),type:"email",class:"form-control secure-input",id:"username",readonly:"",placeholder:"name@example.com",required:"",onContextmenu:a[1]||(a[1]=(0,o.D$)((()=>{}),["prevent"]))},null,544),[[o.Jo,d.value]]),v]),(0,t.Lk)("div",b,[(0,t.bo)((0,t.Lk)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),type:"password",class:"form-control secure-input",readonly:"",id:"password",placeholder:"Password",required:"",onContextmenu:a[3]||(a[3]=(0,o.D$)((()=>{}),["prevent"]))},null,544),[[o.Jo,_.value]]),k]),g],32),(0,t.Lk)("div",w,[L,(0,t.Lk)("p",h,[(0,t.eW)(" 請立即點"),(0,t.bF)(u,{to:"/about",class:"link-danger fw-bold"},{default:(0,t.k6)((()=>[(0,t.eW)("這邊")])),_:1}),(0,t.eW)("並斗內作者 ")])])])]),x,y])],64)}}},C=n(6262);const K=(0,C.A)(_,[["__scopeId","data-v-77b513ea"]]);var M=K}}]);
//# sourceMappingURL=425.1a6c6680.js.map