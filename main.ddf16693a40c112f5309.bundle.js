webpackJsonp([4,8],{1:function(r,t,e){r.exports=e("x35b")},"5xMp":function(r,t){r.exports='<nav class="navbar navbar-toggleable-md navbar-light bg-faded">\r\n    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\r\n        <span class="navbar-toggler-icon"></span>\r\n    </button>\r\n    <a class="navbar-brand" href="#">Breadcrumbs</a>\r\n    <div class="collapse navbar-collapse" id="navbarNav">\r\n        <ul class="navbar-nav">\r\n            <li class="nav-item active">\r\n                <a class="nav-link" routerLink="/home">Home <span class="sr-only">(current)</span></a>\r\n            </li>\r\n            <li class="nav-item active">\r\n                <a class="nav-link" routerLink="/stores">Stores <span class="sr-only">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n<breadcrumb [allowBootstrap]="true" [addClass]="\'custom-crumbs\'"></breadcrumb>\r\n<router-outlet></router-outlet>\r\n'},Iksp:function(r,t,e){"use strict";var o=e("Qbdm"),a=e("3j3K"),n=e("NVOs"),s=e("Fzro"),c=e("YWx4"),i=e("X/3Z"),l=e("5oXY"),u=e("6ZaU");e.d(t,"a",function(){return d});var p=this&&this.__decorate||function(r,t,e,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(r,t,e,o);else for(var c=r.length-1;c>=0;c--)(a=r[c])&&(s=(n<3?a(s):n>3?a(t,e,s):a(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s},d=function(){function r(){}return r}();d=p([e.i(a.NgModule)({declarations:[c.a],imports:[o.BrowserModule,n.a,s.a,l.RouterModule.forRoot(i.a,{useHash:!0}),u.BreadcrumbsModule],providers:[],bootstrap:[c.a]})],d)},MOVZ:function(r,t,e){function o(r){var t=a[r];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+r+"'."))}var a={"app/books/books.module":["ry84",0],"app/home/home.module":["RobO",2],"app/stores/stores.module":["o4LJ",1]};o.keys=function(){return Object.keys(a)},r.exports=o,o.id="MOVZ"},"X/3Z":function(r,t,e){"use strict";e.d(t,"a",function(){return o});var o=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:"app/home/home.module#HomeModule",data:{breadcrumb:"Home"}},{path:"stores",loadChildren:"app/stores/stores.module#StoresModule",data:{breadcrumb:"Stores"}}]},YWx4:function(r,t,e){"use strict";var o=e("3j3K");e.d(t,"a",function(){return n});var a=this&&this.__decorate||function(r,t,e,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(r,t,e,o);else for(var c=r.length-1;c>=0;c--)(a=r[c])&&(s=(n<3?a(s):n>3?a(t,e,s):a(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s},n=function(){function r(){this.title="app works!"}return r}();n=a([e.i(o.Component)({selector:"app-root",template:e("5xMp"),styles:[e("okgc")],encapsulation:o.ViewEncapsulation.None})],n)},kZql:function(r,t,e){"use strict";e.d(t,"a",function(){return o});var o={production:!0}},okgc:function(r,t,e){t=r.exports=e("FZ+f")(),t.push([r.i,".custom-crumbs{background-color:#f5f5f5!important;padding:8px 15px!important;border-radius:4px!important;margin-bottom:20px!important;margin-top:20px!important}",""]),r.exports=r.exports.toString()},x35b:function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("3j3K"),a=e("O61y"),n=e("Iksp");e("kZql").a.production&&e.i(o.enableProdMode)(),e.i(a.a)().bootstrapModule(n.a)}},[1]);