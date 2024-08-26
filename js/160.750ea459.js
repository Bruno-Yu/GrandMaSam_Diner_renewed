"use strict";(self["webpackChunkgrandmasam_diner_renewed"]=self["webpackChunkgrandmasam_diner_renewed"]||[]).push([[160],{4402:function(t,a,e){e.d(a,{A:function(){return k}});var s=e(641),l=e(33),i=e(3751);const d={"aria-label":"Page navigation"},o={class:"pagination justify-content-center"},n=["aria-disabled"],r={key:0,class:"page-link link-dark fw-bold"},c=["onClick"],p=["aria-disabled"];function u(t,a,e,u,m,h){return(0,s.uX)(),(0,s.CE)("nav",d,[(0,s.Lk)("ul",o,[(0,s.Lk)("li",{class:(0,l.C4)(["page-item",{disabled:!e.hasPre}])},[(0,s.Lk)("a",{class:"page-link link-dark fw-bold",href:"#",tabindex:"-1","aria-disabled":!e.hasPre,onClick:a[0]||(a[0]=(0,i.D$)((t=>h.emitData(e.currentPage-1)),["prevent"]))},"上一頁",8,n)],2),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.totalPages,((t,a)=>((0,s.uX)(),(0,s.CE)("li",{class:(0,l.C4)(["page-item",{active:t===e.currentPage}]),key:a},[t===e.currentPage?((0,s.uX)(),(0,s.CE)("span",r,(0,l.v_)(t),1)):((0,s.uX)(),(0,s.CE)("a",{key:1,class:"page-link link-dark fw-bold",href:"#",onClick:(0,i.D$)((a=>h.emitData(t)),["prevent"])},(0,l.v_)(t),9,c))],2)))),128)),(0,s.Lk)("li",{class:(0,l.C4)(["page-item",{disabled:!e.hasNext}])},[(0,s.Lk)("a",{class:"page-link fw-bold",href:"#","aria-disabled":!e.hasNext,onClick:a[1]||(a[1]=(0,i.D$)((t=>h.emitData(e.currentPage+1)),["prevent"]))},"下一頁",8,p)],2)])])}var m={data(){return{}},props:["currentPage","hasPre","hasNext","totalPages"],methods:{emitData(t){this.$emit("click-page",t)}}},h=e(6262);const b=(0,h.A)(m,[["render",u]]);var k=b},3779:function(t,a,e){e.r(a),e.d(a,{default:function(){return ta}});var s=e(641),l=e(3751),i=e(33);const d={class:"container p-5"},o=(0,s.Lk)("h2",{class:"my-5 ms-2 fw-bold text-center"},"產品管理列表",-1),n={class:"text-end mt-4"},r=["disabled"],c={class:"spinner-grow spinner-grow-sm"},p={class:"row py-3"},u={class:"col-xl-6"},m={class:"table mt-4"},h=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",{width:"100"},"分類"),(0,s.Lk)("th",null,"產品名稱"),(0,s.Lk)("th",{width:"100"},"原價"),(0,s.Lk)("th",{width:"100"},"售價"),(0,s.Lk)("th",{width:"100"},"是否啟用"),(0,s.Lk)("th",{width:"100"},"功能按鈕")])],-1),b={class:"fw-bold text-decoration-underline"},k={class:"text-secondary fw-light"},g={class:"fw-bold"},y={key:0,class:"text-success"},L={key:1,class:"text-danger"},D=["data-id"],v=["data-detail-id","onClick","disabled"],f={class:"spinner-grow spinner-grow-sm"},w=["data-edit-id","onClick","disabled"],x={class:"spinner-grow spinner-grow-sm"},C=["data-delete-id","onClick"],_={class:"spinner-grow spinner-grow-sm"},U={class:"col-xl-6"};function E(t,a,e,E,$,M){const O=(0,s.g2)("PageLoading"),P=(0,s.g2)("ProductDetail"),X=(0,s.g2)("EditModal"),I=(0,s.g2)("PaginationFooter");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(O,{loader:"bars",active:$.isLoading,"can-cancel":!0,"is-full-page":!1},null,8,["active"]),(0,s.Lk)("div",d,[o,(0,s.Lk)("div",n,[(0,s.Lk)("button",{type:"button",class:"btn btn-primary font-Noto fw-400",onClick:a[0]||(a[0]=t=>M.modalOn("new")),disabled:"New"===$.isLoadingItem},[(0,s.bo)((0,s.Lk)("span",c,null,512),[[l.aG,"New"===$.isLoadingItem]]),(0,s.eW)(" 建立新的產品 ")],8,r)]),(0,s.Lk)("div",p,[(0,s.Lk)("div",u,[(0,s.Lk)("table",m,[h,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)($.productsList,((t,a)=>((0,s.uX)(),(0,s.CE)("tr",{key:a},[(0,s.Lk)("td",null,(0,i.v_)(t.category),1),(0,s.Lk)("td",b,(0,i.v_)(t.title),1),(0,s.Lk)("td",k,(0,i.v_)(t.origin_price),1),(0,s.Lk)("td",g,(0,i.v_)(t.price),1),(0,s.Lk)("td",null,[t.is_enabled?((0,s.uX)(),(0,s.CE)("span",y,"啟用")):((0,s.uX)(),(0,s.CE)("span",L,"未啟用"))]),(0,s.Lk)("td",null,[(0,s.Lk)("div",{class:"btn-group","data-id":a},[(0,s.Lk)("button",{type:"button",class:"btn btn-outline-success btn-sm","data-detail-id":a,onClick:a=>M.productDetail(t),disabled:$.isLoadingItem===t.id},[(0,s.bo)((0,s.Lk)("span",f,null,512),[[l.aG,$.isLoadingItem===t.id]]),(0,s.eW)(" 細節 ")],8,v),(0,s.Lk)("button",{type:"button",class:"btn btn-outline-primary btn-sm","data-edit-id":a,onClick:a=>M.modalOn("edit",t),disabled:$.isLoadingItem===t.id},[(0,s.bo)((0,s.Lk)("span",x,null,512),[[l.aG,$.isLoadingItem===t.id]]),(0,s.eW)(" 編輯 ")],8,w),(0,s.Lk)("button",{type:"button",class:"btn btn-outline-danger btn-sm","data-delete-id":a,onClick:a=>M.modalOn("delete",t),disabled:""},[(0,s.bo)((0,s.Lk)("span",_,null,512),[[l.aG,$.isLoadingItem===t.id]]),(0,s.eW)(" 刪除 ")],8,C)],8,D)])])))),128))])])]),(0,s.Lk)("div",U,[(0,s.bF)(P,{"product-display":$.emitData.productDisplay,"detail-display":$.emitData.detailDisplay},null,8,["product-display","detail-display"])])])]),(0,s.bF)(X,{ref:"editModal",onGetData:M.getData},null,8,["onGetData"]),(0,s.bF)(I,{"current-page":$.current_page,"has-pre":$.has_pre,"has-next":$.has_next,"total-pages":$.total_pages,onClickPage:M.getData},null,8,["current-page","has-pre","has-next","total-pages","onClickPage"])],64)}e(4114);const $={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},M={class:"modal-dialog"},O={class:"modal-content border-0"},P=(0,s.Fv)('<div class="modal-header bg-danger text-white"><h5 id="delProductModalLabel" class="modal-title"><span>刪除產品</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div>',2),X={class:"modal-footer"},I=(0,s.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),N={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},F={class:"modal-dialog modal-xl"},V={class:"modal-content border-0"},J={class:"modal-header bg-dark text-white"},S={id:"productModalLabel",class:"modal-title"},G={key:0},W={key:1},A=(0,s.Lk)("button",{type:"button",class:"btn-close btn-light","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),K={class:"modal-body container"},T={class:"row"},j={class:"col-sm-12 col-md-6"},q={class:"mb-2"},H={class:"mb-3"},Q=(0,s.Lk)("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),z=["src","alt"],B={class:"form-group"},R=(0,s.Lk)("label",{for:"imagesUrl",class:"form-label"},"圖片網址",-1),Y=["onUpdate:modelValue"],Z=["src","alt"],tt={key:0},at={key:1},et={class:"col-sm-12 col-md-6"},st={class:"mb-3"},lt=(0,s.Lk)("label",{for:"title",class:"form-label"},"標題",-1),it={class:"row"},dt={class:"mb-3 col-md-6"},ot=(0,s.Lk)("label",{for:"category",class:"form-label"},"分類",-1),nt={class:"mb-3 col-md-6"},rt=(0,s.Lk)("label",{for:"unit",class:"form-label"},"單位",-1),ct={class:"row"},pt={class:"mb-3 col-md-6"},ut=(0,s.Lk)("label",{for:"origin_price",class:"form-label"},"原價",-1),mt={class:"mb-3 col-md-6"},ht=(0,s.Lk)("label",{for:"price",class:"form-label"},"售價",-1),bt=(0,s.Lk)("hr",null,null,-1),kt={class:"mb-3"},gt=(0,s.Lk)("label",{for:"description",class:"form-label"},"產品描述",-1),yt={class:"mb-3"},Lt=(0,s.Lk)("label",{for:"content",class:"form-label"},"說明內容",-1),Dt={class:"mb-3"},vt={class:"form-check"},ft=(0,s.Lk)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),wt={class:"modal-footer bg-dark text-white"},xt=(0,s.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ct(t,a,e,d,o,n){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bo)((0,s.Lk)("div",$,[(0,s.Lk)("div",M,[(0,s.Lk)("div",O,[P,(0,s.Lk)("div",X,[I,(0,s.Lk)("button",{type:"button",class:"btn btn-danger",onClick:a[0]||(a[0]=(...t)=>n.updateData&&n.updateData(...t))},"確認刪除")])])])],512),[[l.aG,t.delteOn]]),(0,s.bo)((0,s.Lk)("div",N,[(0,s.Lk)("div",F,[(0,s.Lk)("div",V,[(0,s.Lk)("div",J,[(0,s.Lk)("h5",S,[o.newOn?((0,s.uX)(),(0,s.CE)("span",G,(0,i.v_)(o.newTitle),1)):((0,s.uX)(),(0,s.CE)("span",W,(0,i.v_)(o.editTitle),1))]),A]),(0,s.Lk)("div",K,[(0,s.Lk)("div",T,[(0,s.Lk)("div",j,[(0,s.Lk)("div",q,[(0,s.Lk)("div",H,[Q,(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":a[1]||(a[1]=t=>o.productDisplay.imageUrl=t),id:"imageUrl"},null,512),[[l.Jo,o.productDisplay.imageUrl]])]),(0,s.Lk)("img",{class:"img-fluid",src:o.productDisplay.imageUrl,alt:o.productDisplay.title},null,8,z),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.productDisplay.imagesUrl,((t,a)=>((0,s.uX)(),(0,s.CE)("div",{class:"mb-1",key:a},[(0,s.Lk)("div",B,[R,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t=>o.productDisplay.imagesUrl[a]=t,type:"text",class:"form-control",placeholder:"請輸入圖片連結",id:"imagesUrl"},null,8,Y),[[l.Jo,o.productDisplay.imagesUrl[a]]])]),(0,s.Lk)("img",{class:"img-fluid",src:t,alt:a},null,8,Z)])))),128)),!o.productDisplay.imagesUrl.length||o.productDisplay.imagesUrl[o.productDisplay.imagesUrl.length-1]?((0,s.uX)(),(0,s.CE)("div",tt,[(0,s.Lk)("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:a[2]||(a[2]=t=>o.productDisplay.imagesUrl.push(""))}," 新增圖片 ")])):((0,s.uX)(),(0,s.CE)("div",at,[(0,s.Lk)("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:a[3]||(a[3]=t=>o.productDisplay.imagesUrl.pop())}," 刪除圖片 ")]))])]),(0,s.Lk)("div",et,[(0,s.Lk)("div",st,[lt,(0,s.bo)((0,s.Lk)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":a[4]||(a[4]=t=>o.productDisplay.title=t)},null,512),[[l.Jo,o.productDisplay.title]])]),(0,s.Lk)("div",it,[(0,s.Lk)("div",dt,[ot,(0,s.bo)((0,s.Lk)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":a[5]||(a[5]=t=>o.productDisplay.category=t)},null,512),[[l.Jo,o.productDisplay.category]])]),(0,s.Lk)("div",nt,[rt,(0,s.bo)((0,s.Lk)("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":a[6]||(a[6]=t=>o.productDisplay.unit=t)},null,512),[[l.Jo,o.productDisplay.unit]])])]),(0,s.Lk)("div",ct,[(0,s.Lk)("div",pt,[ut,(0,s.bo)((0,s.Lk)("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":a[7]||(a[7]=t=>o.productDisplay.origin_price=t)},null,512),[[l.Jo,o.productDisplay.origin_price]])]),(0,s.Lk)("div",mt,[ht,(0,s.bo)((0,s.Lk)("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":a[8]||(a[8]=t=>o.productDisplay.price=t)},null,512),[[l.Jo,o.productDisplay.price]])])]),bt,(0,s.Lk)("div",kt,[gt,(0,s.bo)((0,s.Lk)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":a[9]||(a[9]=t=>o.productDisplay.description=t)},"\n                ",512),[[l.Jo,o.productDisplay.description]])]),(0,s.Lk)("div",yt,[Lt,(0,s.bo)((0,s.Lk)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":a[10]||(a[10]=t=>o.productDisplay.content=t)},"\n                ",512),[[l.Jo,o.productDisplay.content]])]),(0,s.Lk)("div",Dt,[(0,s.Lk)("div",vt,[(0,s.bo)((0,s.Lk)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":a[11]||(a[11]=t=>o.productDisplay.is_enabled=t)},null,512),[[l.lH,o.productDisplay.is_enabled]]),ft])])])]),(0,s.Lk)("div",wt,[xt,(0,s.Lk)("button",{type:"button",class:"btn btn-primary",onClick:a[12]||(a[12]=(...t)=>n.updateData&&n.updateData(...t))},"確認")])])])])],512),[[l.aG,!o.deleteOn]])],64)}var _t=e(9635),Ut=e.n(_t),Et={inject:["emitData"],data(){return{newTitle:"新增產品",editTitle:"編輯產品",bsNewproduct:null,bsDeleteproduct:null,productDisplay:this.emitData.productDisplay,newOn:this.emitData.newOn,detailDisplay:this.emitData.detailDisplay,deleteOn:this.emitData.deleteOn}},watch:{emitData:{handler(){this.productDisplay=this.emitData.productDisplay,this.newOn=this.emitData.newOn,this.detailDisplay=this.emitData.detailDisplay,this.deleteOn=this.emitData.deleteOn},deep:!0}},methods:{updateData(){this.newOn?this.$http.post("https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/product",{data:this.productDisplay}).then((t=>{this.$httpMessageState(t,"更新資料成功"),this.bsNewproduct.hide(),this.$emit("get-data")})).catch((t=>{this.$httpMessageState(t.response,"錯誤訊息"),this.bsNewproduct.hide()})):this.deleteOn?this.$http.delete(`https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/product/${this.productDisplay.id}`).then((t=>{this.$httpMessageState(t,"成功刪除"),this.$emit("get-data"),this.bsDeleteproduct.hide()})).catch((t=>{this.$httpMessageState(t.response,"錯誤訊息"),this.bsDeleteproduct.hide()})):this.$http.put(`https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/product/${this.productDisplay.id}`,{data:this.productDisplay}).then((t=>{this.$httpMessageState(t,"成功獲得資料"),this.bsNewproduct.hide(),this.$emit("get-data")})).catch((t=>{this.$httpMessageState(t.response,"錯誤訊息"),this.bsNewproduct.hide()}))}},mounted(){this.bsNewproduct=new(Ut())(document.querySelector("#productModal")),this.bsDeleteproduct=new(Ut())(document.querySelector("#delProductModal"))}},$t=e(6262);const Mt=(0,$t.A)(Et,[["render",Ct]]);var Ot=Mt,Pt=e(4402);const Xt={key:0},It={class:"card mb-3"},Nt=["src"],Ft={class:"card-body"},Vt={class:"card-title"},Jt={class:"badge bg-primary ms-2"},St={class:"card-text"},Gt={class:"card-text"},Wt={class:"d-flex"},At={class:"card-text me-2"},Kt={class:"card-text text-secondary"},Tt={key:0},jt=["src"],qt={key:1,class:"text-secondary"},Ht=(0,s.Lk)("span",{class:"text-danger"},"呈現細節",-1);function Qt(t,a,e,l,d,o){return e.detailDisplay?((0,s.uX)(),(0,s.CE)("div",Xt,[(0,s.Lk)("div",It,[(0,s.Lk)("img",{src:e.productDisplay.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,Nt),(0,s.Lk)("div",Ft,[(0,s.Lk)("h5",Vt,[(0,s.eW)((0,i.v_)(e.productDisplay.title)+" ",1),(0,s.Lk)("span",Jt,(0,i.v_)(e.productDisplay.category),1)]),(0,s.Lk)("p",St,"商品描述："+(0,i.v_)(e.productDisplay.description),1),(0,s.Lk)("p",Gt,"商品內容："+(0,i.v_)(e.productDisplay.content),1),(0,s.Lk)("div",Wt,[(0,s.Lk)("p",At,(0,i.v_)(e.productDisplay.price),1),(0,s.Lk)("p",Kt,[(0,s.Lk)("del",null,(0,i.v_)(e.productDisplay.origin_price),1)]),(0,s.eW)(" "+(0,i.v_)(e.productDisplay.unit)+" / 元 ",1)])])]),e.productDisplay.id?((0,s.uX)(),(0,s.CE)("div",Tt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.productDisplay.imagesUrl,((t,a)=>((0,s.uX)(),(0,s.CE)("img",{src:t,key:a,alt:"",class:"images m-2"},null,8,jt)))),128))])):(0,s.Q3)("",!0)])):((0,s.uX)(),(0,s.CE)("p",qt,[(0,s.eW)(" 請點擊"),Ht,(0,s.eW)("按鈕，查看商品細節 ")]))}var zt={props:["productDisplay","detailDisplay"]};const Bt=(0,$t.A)(zt,[["render",Qt]]);var Rt=Bt,Yt={data(){return{productsList:null,current_page:1,has_next:!0,has_pre:!1,total_pages:1,isLoadingItem:"",isLoading:!1,emitData:{productDisplay:{imagesUrl:[]},newOn:!1,detailDisplay:!1,deleteOn:!1}}},components:{EditModal:Ot,PaginationFooter:Pt.A,ProductDetail:Rt},provide(){return{emitData:this.emitData}},methods:{getData(t=1){this.$http.get(`https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/products?page=${t}`).then((t=>{this.productsList=t.data.products,this.current_page=t.data.pagination.current_page,this.has_next=t.data.pagination.has_next,this.has_pre=t.data.pagination.has_pre,this.total_pages=t.data.pagination.total_pages})).catch((t=>{this.isLoading=!1,this.$httpMessageState(t.response,"錯誤訊息")}))},modalOn(t,a){this.isLoading=!0,"edit"===t?(this.isLoadingItem=a.id,this.emitData.productDisplay={imagesUrl:[]},this.emitData.detailDisplay=!1,this.emitData.productDisplay=a,this.$refs.editModal.bsNewproduct.show()):"new"===t?(this.isLoadingItem="New",this.emitData.productDisplay={imagesUrl:[]},this.emitData.newOn=!0,this.emitData.detailDisplay=!1,this.emitData.deleteOn=!1,this.$refs.editModal.bsNewproduct.show()):"delete"===t&&(this.isLoadingItem=a.id,this.emitData.productDisplay={imagesUrl:[]},this.emitData.productDisplay=a,this.emitData.newOn=!1,this.emitData.detailDisplay=!1,this.emitData.deleteOn=!0,this.$refs.editModal.bsDeleteproduct.show()),this.isLoadingItem="",this.isLoading=!1},productDetail(t){this.isLoadingItem=t.id,this.emitData.productDisplay=t,this.emitData.detailDisplay=!0,this.isLoadingItem=""}},mounted(){this.isLoading=!0,this.getData(),this.isLoading=!1}};const Zt=(0,$t.A)(Yt,[["render",E]]);var ta=Zt}}]);
//# sourceMappingURL=160.750ea459.js.map