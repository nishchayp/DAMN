webpackJsonp([1],{0:function(n,l,e){n.exports=e("6QIT")},"6QIT":function(n,l,e){"use strict";function t(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"a",[["class","logout-btn"],["href","/logout"]],null,null,null,null,null)),(n()(),_._31(-1,null,["Logout"])),(n()(),_._31(-1,null,["\n"])),(n()(),_._16(3,0,null,null,33,"div",[["class","container"]],null,null,null,null,null)),(n()(),_._31(-1,null,["\n    "])),(n()(),_._16(5,0,null,null,30,"div",[["class","form-container"]],null,null,null,null,null)),(n()(),_._31(-1,null,["\n      "])),(n()(),_._16(7,0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0,u=n.component;if("submit"===l){t=!1!==_._28(n,9).onSubmit(e)&&t}if("reset"===l){t=!1!==_._28(n,9).onReset()&&t}if("submit"===l){t=!1!==u.makeAccessRequest(u.accessRequestForm.value)&&t}return t},null,null)),_._14(8,16384,null,0,m.p,[],null,null),_._14(9,540672,null,0,m.h,[[8,null],[8,null]],{form:[0,"form"]},null),_._29(2048,null,m.b,null,[m.h]),_._14(11,16384,null,0,m.l,[m.b],null,null),(n()(),_._31(-1,null,["\n        "])),(n()(),_._16(13,0,null,null,5,"textarea",[["class","access-req-textarea"],["formControlName","message"],["name","message"],["placeholder","Message"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0,u=n.component;if("input"===l){t=!1!==_._28(n,14)._handleInput(e.target.value)&&t}if("blur"===l){t=!1!==_._28(n,14).onTouched()&&t}if("compositionstart"===l){t=!1!==_._28(n,14)._compositionStart()&&t}if("compositionend"===l){t=!1!==_._28(n,14)._compositionEnd(e.target.value)&&t}if("ngModelChange"===l){t=!1!==(u.message=e)&&t}return t},null,null)),_._14(14,16384,null,0,m.c,[_.N,_.n,[2,m.a]],null,null),_._29(1024,null,m.i,function(n){return[n]},[m.c]),_._14(16,671744,null,0,m.f,[[3,m.b],[8,null],[8,null],[2,m.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),_._29(2048,null,m.j,null,[m.f]),_._14(18,16384,null,0,m.k,[m.j],null,null),(n()(),_._16(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),_._31(-1,null,["\n        "])),(n()(),_._16(21,0,null,null,5,"textarea",[["class","access-req-textarea"],["formControlName","ssh_key"],["id","ssh-key"],["name","ssh_key"],["placeholder","SSH Key"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0,u=n.component;if("input"===l){t=!1!==_._28(n,22)._handleInput(e.target.value)&&t}if("blur"===l){t=!1!==_._28(n,22).onTouched()&&t}if("compositionstart"===l){t=!1!==_._28(n,22)._compositionStart()&&t}if("compositionend"===l){t=!1!==_._28(n,22)._compositionEnd(e.target.value)&&t}if("ngModelChange"===l){t=!1!==(u.ssh_key=e)&&t}return t},null,null)),_._14(22,16384,null,0,m.c,[_.N,_.n,[2,m.a]],null,null),_._29(1024,null,m.i,function(n){return[n]},[m.c]),_._14(24,671744,null,0,m.f,[[3,m.b],[8,null],[8,null],[2,m.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),_._29(2048,null,m.j,null,[m.f]),_._14(26,16384,null,0,m.k,[m.j],null,null),(n()(),_._16(27,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),_._31(-1,null,["\n        "])),(n()(),_._16(29,0,null,null,1,"button",[["class","btn"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),_._31(-1,null,["Request for access"])),(n()(),_._31(-1,null,["\n      "])),(n()(),_._31(-1,null,[" \n      "])),(n()(),_._16(33,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(n,l,e){var t=!0,u=n.component;if("click"===l){t=!1!==u.makeAdminRequest()&&t}return t},null,null)),(n()(),_._31(-1,null,["Request for administrative privileges"])),(n()(),_._31(-1,null,["\n    "])),(n()(),_._31(-1,null,["\n"]))],function(n,l){var e=l.component;n(l,9,0,e.accessRequestForm);n(l,16,0,"message",e.message);n(l,24,0,"ssh_key",e.ssh_key)},function(n,l){var e=l.component;n(l,7,0,_._28(l,11).ngClassUntouched,_._28(l,11).ngClassTouched,_._28(l,11).ngClassPristine,_._28(l,11).ngClassDirty,_._28(l,11).ngClassValid,_._28(l,11).ngClassInvalid,_._28(l,11).ngClassPending),n(l,13,0,_._28(l,18).ngClassUntouched,_._28(l,18).ngClassTouched,_._28(l,18).ngClassPristine,_._28(l,18).ngClassDirty,_._28(l,18).ngClassValid,_._28(l,18).ngClassInvalid,_._28(l,18).ngClassPending),n(l,21,0,_._28(l,26).ngClassUntouched,_._28(l,26).ngClassTouched,_._28(l,26).ngClassPristine,_._28(l,26).ngClassDirty,_._28(l,26).ngClassValid,_._28(l,26).ngClassInvalid,_._28(l,26).ngClassPending),n(l,29,0,!e.accessRequestForm.valid)})}function u(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"app-damn",[],null,null,null,t,x)),_._14(1,114688,null,0,y,[k],null,null)],function(n,l){n(l,1,0)},null)}function o(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"a",[["href","/login"]],null,null,null,null,null)),(n()(),_._31(-1,null,["Login"]))],null,null)}function a(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"app-login",[],null,null,null,o,q)),_._14(1,114688,null,0,S,[],null,null)],function(n,l){n(l,1,0)},null)}function i(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"div",[["id","snackbar"]],[[2,"danger",null],[2,"show",null]],null,null,null,null)),(n()(),_._31(1,null,["",""]))],null,function(n,l){var e=l.component;n(l,0,0,!e.type,e.show),n(l,1,0,e.message)})}function s(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"app-snackbar",[],null,null,null,i,I)),_._14(1,114688,null,0,O,[k],null,null)],function(n,l){n(l,1,0)},null)}function r(n){return _._32(0,[(n()(),_._16(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),_._14(1,212992,null,0,P.m,[P.b,_.Z,_.k,[8,null],_.i],null,null),(n()(),_._31(-1,null,["\n"])),(n()(),_._16(3,0,null,null,1,"app-snackbar",[],null,null,null,i,I)),_._14(4,114688,null,0,O,[k],null,null)],function(n,l){n(l,1,0),n(l,4,0)},null)}function c(n){return _._32(0,[(n()(),_._16(0,0,null,null,1,"app-root",[],null,null,null,r,F)),_._14(1,49152,null,0,g,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var _=e("/oeL"),p={production:!0},d=function(){function n(){}return n}(),g=function(){function n(){this.title="user"}return n}(),f=[".logout-btn[_ngcontent-%COMP%]{position:absolute;top:30px;right:40px;text-decoration:none;color:#fff;background-color:#3384ef;padding:12px 22px;border-radius:5px;box-shadow:0 3px 10px 1px #ccc}.container[_ngcontent-%COMP%]{height:100vh;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-container[_ngcontent-%COMP%]{width:700px}.access-req-textarea[_ngcontent-%COMP%]{width:100%;height:100px;margin-bottom:20px;outline:none;border:thin solid #ddd;box-shadow:0 3px 10px 1px #ccc;padding:10px;border-radius:3px;font-size:1rem}#ssh-key[_ngcontent-%COMP%]{height:150px}.btn[_ngcontent-%COMP%]{border:none;margin:10px 5px;border-radius:3px;color:#eee;background-color:#222;font-size:1rem;padding:12px 22px;cursor:pointer;box-shadow:0 3px 10px 1px #ccc}"],m=e("bm2B"),h=e("CPp0"),b=e("TO51"),k=(e("GQSG"),function(){function n(n){this.http=n,this.snackbarSubject=new b.a}return n.prototype.makeAdminRequest=function(){var n=this,l=new h.d;return l.append("Content-type","application/json"),this.http.get("/makeAdminRequest",{headers:l,withCredentials:!0}).map(function(n){return n.json()}).subscribe(function(l){l.success?n.sendAlert(l.message):n.sendAlertDanger(l.message)})},n.prototype.makeAccessRequest=function(n){var l=new h.d;return l.append("Content-type","application/json"),this.http.post("/makeAccessRequest/",n,{headers:l,withCredentials:!0}).map(function(n){return n.json()})},n.prototype.sendAlert=function(n){this.snackbarMessage=n,this.snackbarType=!0,this.sendSnackbarData()},n.prototype.sendAlertDanger=function(n){this.snackbarMessage=n,this.snackbarType=!1,this.sendSnackbarData()},n.prototype.sendSnackbarData=function(){this.snackbarSubject.next()},n.prototype.getSnackbarData=function(){return this.snackbarSubject.asObservable()},n.ctorParameters=function(){return[{type:h.e}]},n}()),y=function(){function n(n){this.userDataService=n}return n.prototype.ngOnInit=function(){this.accessRequestForm=new m.g({message:new m.e("",[m.n.maxLength(250)]),ssh_key:new m.e("",[m.n.required])})},n.prototype.makeAccessRequest=function(n){var l=this;this.isValid(n.ssh_key)?this.userDataService.makeAccessRequest(n).subscribe(function(n){n.success?(l.message="",l.ssh_key="",l.userDataService.sendAlert(n.message)):l.userDataService.sendAlertDanger(n.message)}):this.userDataService.sendAlertDanger("Invalid SSH key")},n.prototype.isValid=function(n){return!!/^ssh-rsa AAAA[0-9A-Za-z+\/]+[=]{0,3}( [^@]+@[^@]+)?$/.test(n)},n.prototype.makeAdminRequest=function(){this.userDataService.makeAdminRequest()},n.ctorParameters=function(){return[{type:k}]},n}(),v=[f],x=_._13({encapsulation:0,styles:v,data:{}}),w=_._11("app-damn",y,u,{},{},[]),C=[""],S=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}(),A=[C],q=_._13({encapsulation:0,styles:A,data:{}}),j=_._11("app-login",S,a,{},{},[]),D=[""],P=e("BkNc"),M=["#snackbar[_ngcontent-%COMP%]{visibility:hidden;min-width:250px;background-color:#aaa;color:#333;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:3;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);bottom:30px;font-size:17px}#snackbar.danger[_ngcontent-%COMP%]{background-color:#c9302c;font-weight:bolder;color:#eee}#snackbar.show[_ngcontent-%COMP%]{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}@-webkit-keyframes fadein{0%{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{0%{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{0%{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{0%{bottom:30px;opacity:1}to{bottom:0;opacity:0}}"],O=function(){function n(n){this.userDataService=n}return n.prototype.ngOnInit=function(){var n=this;this.subscription=this.userDataService.getSnackbarData().subscribe(function(){n.message=n.userDataService.snackbarMessage,n.type=n.userDataService.snackbarType,n.show=!1,n.showAlert()})},n.prototype.showAlert=function(){var n=this;this.show=!0,setTimeout(function(){n.show=!1},3e3)},n.ctorParameters=function(){return[{type:k}]},n}(),R=[M],I=_._13({encapsulation:0,styles:R,data:{}}),T=(_._11("app-snackbar",O,s,{},{},[]),[D]),F=_._13({encapsulation:0,styles:T,data:{}}),z=_._11("app-root",g,c,{},{},[]),V=e("qbdv"),G=e("fc+i"),N=e("ceki"),X=e("Ykf1"),E=function(){function n(n,l){this.http=n,this.cookieService=l}return n.prototype.loggedIn=function(){return!!this.cookieService.check("googCookie")},n.ctorParameters=function(){return[{type:h.e},{type:X.a}]},n}(),L=function(){function n(n,l){this.authService=n,this.router=l}return n.prototype.canActivate=function(){return!!this.authService.loggedIn()||(this.router.navigate(["/login"]),!1)},n.ctorParameters=function(){return[{type:E},{type:P.k}]},n}(),Q=_._12(d,[g],function(n){return _._26([_._27(512,_.k,_._9,[[8,[w,j,z]],[3,_.k],_.E]),_._27(5120,_.A,_._25,[[3,_.A]]),_._27(4608,V.i,V.h,[_.A]),_._27(5120,_.c,_._17,[]),_._27(5120,_.y,_._22,[]),_._27(5120,_.z,_._23,[]),_._27(4608,G.c,G.t,[V.c]),_._27(6144,_.Q,null,[G.c]),_._27(4608,G.f,G.g,[]),_._27(5120,G.d,function(n,l,e,t){return[new G.l(n),new G.p(l),new G.o(e,t)]},[V.c,V.c,V.c,G.f]),_._27(4608,G.e,G.e,[G.d,_.G]),_._27(135680,G.n,G.n,[V.c]),_._27(4608,G.m,G.m,[G.e,G.n]),_._27(6144,_.O,null,[G.m]),_._27(6144,G.q,null,[G.n]),_._27(4608,_.X,_.X,[_.G]),_._27(4608,G.h,G.h,[V.c]),_._27(4608,G.j,G.j,[V.c]),_._27(4608,h.c,h.c,[]),_._27(4608,h.h,h.b,[]),_._27(5120,h.j,h.k,[]),_._27(4608,h.i,h.i,[h.c,h.h,h.j]),_._27(4608,h.g,h.a,[]),_._27(5120,h.e,h.l,[h.i,h.g]),_._27(4608,m.d,m.d,[]),_._27(4608,m.q,m.q,[]),_._27(5120,P.a,P.v,[P.k]),_._27(4608,P.d,P.d,[]),_._27(6144,P.f,null,[P.d]),_._27(135680,P.n,P.n,[P.k,_.D,_.j,_.w,P.f]),_._27(4608,P.e,P.e,[]),_._27(5120,P.h,P.y,[P.w]),_._27(5120,_.b,function(n){return[n]},[P.h]),_._27(4608,N.a,N.a,[G.b]),_._27(4608,E,E,[h.e,N.a]),_._27(4608,L,L,[E,P.k]),_._27(4608,k,k,[h.e]),_._27(1024,P.q,P.t,[[3,P.k]]),_._27(1024,_.o,G.r,[]),_._27(1024,_.F,function(){return[P.r()]},[]),_._27(512,P.w,P.w,[_.w]),_._27(1024,_.d,function(n,l,e){return[G.s(n,l),P.x(e)]},[[2,G.i],[2,_.F],P.w]),_._27(512,_.e,_.e,[[2,_.d]]),_._27(131584,_._15,_._15,[_.G,_._10,_.w,_.o,_.k,_.e]),_._27(2048,_.g,null,[_._15]),_._27(512,P.p,P.c,[]),_._27(512,P.b,P.b,[]),_._27(256,P.g,{},[]),_._27(1024,V.g,P.s,[V.k,[2,V.a],P.g]),_._27(512,V.f,V.f,[V.g]),_._27(512,_.j,_.j,[]),_._27(512,_.D,_.U,[_.j,[2,_.V]]),_._27(1024,P.i,function(){return[[{path:"",component:y,canActivate:[L]},{path:"login",component:S},{path:"**",redirectTo:""}]]},[]),_._27(1024,P.k,P.u,[_.g,P.p,P.b,V.f,_.w,_.D,_.j,P.i,P.g,[2,P.o],[2,P.j]]),_._27(512,P.l,P.l,[[2,P.q],[2,P.k]]),_._27(512,V.b,V.b,[]),_._27(512,_.f,_.f,[_.g]),_._27(512,G.a,G.a,[[3,G.a]]),_._27(512,h.f,h.f,[]),_._27(512,m.o,m.o,[]),_._27(512,m.m,m.m,[]),_._27(512,d,d,[])])});p.production&&Object(_._3)(),Object(G.k)().bootstrapModuleFactory(Q).catch(function(n){return console.log(n)})},gFIY:function(n,l){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="gFIY"}},[0]);