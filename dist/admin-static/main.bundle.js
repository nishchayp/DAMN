webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".data-container {\n\twidth: 80%;\n\tmargin: 0 auto;\n}\n\n.data-item {\n\tpadding: 0 15px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-wrap: wrap;\n\t    flex-wrap: wrap;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tfont-size: 1.2rem;\n\tcolor: #ddd;\n\tborder-style: none none solid none;\n\tborder-width: thin;\n\tborder-color: #444;\n\toverflow: hidden;\n\tmin-height: 61px;\n}\n\n.view-btn {\n\tmargin: 0 20px 0 0;\n\tpadding: 5px 15px;\n\tborder-style: none;\n\tbackground-color: transparent;\n\tcolor: #ddd;\n\tborder-radius: 2px;\n\tfont-size: 1rem;\n\tcursor: pointer;\n}\n\n.data {\n\twidth: 33%;\n\tmargin: 15px 15px 0 0;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.items-right {\n\tmargin-left: auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin: 15px 0;\n}\n\n.data-option-btn {\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\tfont-size: 1rem;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n.data-option-btn button {\n\tpadding: 5px 15px;\n\tborder-style: none;\n\tbackground-color: #444;\n\tcolor: #ddd;\n\tborder-radius: 2px;\n\ttext-align: center;\n\tmargin-right: 20px;\n}\n\n.no-content {\n\tcolor: #eee;\n\theight: calc(80vh - 100px);\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tfont-weight: bold;\n}\n\n@media only screen and (max-width: 750px) {\n\n\t.data {\n\t\twidth: 100%;\n\t}\n\n\t.items-right {\n\t\t-webkit-box-orient: horizontal;\n\t\t-webkit-box-direction: reverse;\n\t\t    -ms-flex-direction: row-reverse;\n\t\t        flex-direction: row-reverse;\n\t}\n\n\t.view-btn  {\n\t\tpadding: 5px 15px;\n\t\tborder-style: none;\n\t\tbackground-color: #444;\n\t\tcolor: #ddd;\n\t\tborder-radius: 2px;\n\t\ttext-align: center;\n\t\tfont-size: 0.85rem;\n\t}\n\n\t.data-container {\n\t\twidth: 95%;\n\t}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/app.component.html":
/***/ (function(module, exports) {

module.exports = "<admin-navbar></admin-navbar>\n<admin-heading></admin-heading>\n<div class=\"data-container\"><router-outlet></router-outlet></div>\n<admin-modal></admin-modal>\n<admin-snackbar></admin-snackbar>"

/***/ }),

/***/ "../../../../../src/app/admin/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/admin/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/admin/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/admin/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/admin/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_accesses_accesses_component__ = __webpack_require__("../../../../../src/app/admin/components/accesses/accesses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_access_requests_access_requests_component__ = __webpack_require__("../../../../../src/app/admin/components/access-requests/access-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admins_admins_component__ = __webpack_require__("../../../../../src/app/admin/components/admins/admins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_requests_admin_requests_component__ = __webpack_require__("../../../../../src/app/admin/components/admin-requests/admin-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/admin/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_snackbar_snackbar_component__ = __webpack_require__("../../../../../src/app/admin/components/snackbar/snackbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_heading_heading_component__ = __webpack_require__("../../../../../src/app/admin/components/heading/heading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_accesses_accesses_component__["a" /* AccessesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_access_requests_access_requests_component__["a" /* AccessRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admins_admins_component__["a" /* AdminsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admin_requests_admin_requests_component__["a" /* AdminRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_snackbar_snackbar_component__["a" /* SnackbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_heading_heading_component__["a" /* HeadingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_clipboard__["a" /* ClipboardModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_admin_data_service__["a" /* AdminDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_accesses_accesses_component__ = __webpack_require__("../../../../../src/app/admin/components/accesses/accesses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_access_requests_access_requests_component__ = __webpack_require__("../../../../../src/app/admin/components/access-requests/access-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admins_admins_component__ = __webpack_require__("../../../../../src/app/admin/components/admins/admins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_requests_admin_requests_component__ = __webpack_require__("../../../../../src/app/admin/components/admin-requests/admin-requests.component.ts");





var appRoutes = [
    {
        path: 'accesses',
        component: __WEBPACK_IMPORTED_MODULE_1__components_accesses_accesses_component__["a" /* AccessesComponent */],
    },
    {
        path: 'accessrequests',
        component: __WEBPACK_IMPORTED_MODULE_2__components_access_requests_access_requests_component__["a" /* AccessRequestsComponent */],
    },
    {
        path: 'admins',
        component: __WEBPACK_IMPORTED_MODULE_3__components_admins_admins_component__["a" /* AdminsComponent */],
    },
    {
        path: 'adminrequests',
        component: __WEBPACK_IMPORTED_MODULE_4__components_admin_requests_admin_requests_component__["a" /* AdminRequestsComponent */],
    },
    {
        path: '**',
        redirectTo: 'accesses'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/access-requests/access-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/access-requests/access-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-item\" *ngFor=\"let accessRequest of accessRequests; let i = index\">\n  <div class=\"data\">{{ accessRequest?.name }}</div>\n  <div class=\"data\">{{ accessRequest?.message }}</div>\n  <div class=\"items-right\">\n    <div class=\"view-btn\" (click)=\"view(accessRequest, i)\">View</div>\n  </div>\n</div>\n<div class=\"no-content\" *ngIf=\"!!accessRequests && !accessRequests.length\">Nothing to show</div>\n<div class=\"no-content\" *ngIf=\"!accessRequests\">Loading</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/access-requests/access-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessRequestsComponent = /** @class */ (function () {
    function AccessRequestsComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    AccessRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessRequests = this.adminDataService.accessRequests;
        this.adminDataService.changeHeading('Accesses Requests');
        this.subscription = this.adminDataService.getInfo().subscribe(function () {
            _this.accessRequests = _this.adminDataService.accessRequests;
        });
        this.adminDataService.getAccessRequests();
    };
    AccessRequestsComponent.prototype.view = function (accessRequest, index) {
        this.adminDataService.openModal(accessRequest, 'access_request', index);
    };
    AccessRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-access-requests',
            template: __webpack_require__("../../../../../src/app/admin/components/access-requests/access-requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/access-requests/access-requests.component.css"), __webpack_require__("../../../../../src/app/admin/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], AccessRequestsComponent);
    return AccessRequestsComponent;
    var _a;
}());

//# sourceMappingURL=access-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/accesses/accesses.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/accesses/accesses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-item\" *ngFor=\"let access of accesses; let i = index\">\n  <div class=\"data\">{{ access.name }}</div>\n  <div class=\"data\">{{ access.ip }}</div>\n  <div class=\"items-right\">\n    <div class=\"view-btn\" (click)=\"view(access, i)\">View</div>\n  </div>\n</div>\n<div class=\"no-content\" *ngIf=\"!!accesses && !accesses.length\">Nothing to show</div>\n<div class=\"no-content\" *ngIf=\"!accesses\">Loading</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/accesses/accesses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessesComponent = /** @class */ (function () {
    function AccessesComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    AccessesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accesses = this.adminDataService.accesses;
        this.adminDataService.changeHeading('Accesses');
        this.subscription = this.adminDataService.getInfo().subscribe(function () {
            _this.accesses = _this.adminDataService.accesses;
        });
        this.adminDataService.getAccesses();
    };
    AccessesComponent.prototype.view = function (access, index) {
        this.adminDataService.openModal(access, 'access', index);
    };
    AccessesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-accesses',
            template: __webpack_require__("../../../../../src/app/admin/components/accesses/accesses.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/accesses/accesses.component.css"), __webpack_require__("../../../../../src/app/admin/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], AccessesComponent);
    return AccessesComponent;
    var _a;
}());

//# sourceMappingURL=accesses.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-requests/admin-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-requests/admin-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-item\" *ngFor=\"let adminRequest of adminRequests; let i = index\">\n  <div class=\"data\">{{ adminRequest.name }}</div>\n  <div class=\"data\">{{ adminRequest.email }}</div>\n  <div class=\"items-right\">\n    <div class=\"data-option-btn\">\n      <button (click)=\"accept(adminRequest.admin_request_id, i)\">Accept</button>\n      <button (click)=\"reject(adminRequest.admin_request_id, i)\">Reject</button>\n    </div>\n  </div>\n</div>\n<div class=\"no-content\" *ngIf=\"!!adminRequests && !adminRequests.length\">Nothing to show</div>\n<div class=\"no-content\" *ngIf=\"!adminRequests\">Loading</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/admin-requests/admin-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminRequestsComponent = /** @class */ (function () {
    function AdminRequestsComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    AdminRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminRequests = this.adminDataService.adminRequests;
        this.adminDataService.changeHeading('Admin Requests');
        this.subscription = this.adminDataService.getInfo().subscribe(function () {
            _this.adminRequests = _this.adminDataService.adminRequests;
        });
        this.adminDataService.getAdminRequests();
    };
    AdminRequestsComponent.prototype.accept = function (id, index) {
        this.adminDataService.acceptAdminRequests(id, index);
    };
    AdminRequestsComponent.prototype.reject = function (id, index) {
        this.adminDataService.rejectAdminRequests(id, index);
    };
    AdminRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-admin-requests',
            template: __webpack_require__("../../../../../src/app/admin/components/admin-requests/admin-requests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/admin-requests/admin-requests.component.css"), __webpack_require__("../../../../../src/app/admin/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], AdminRequestsComponent);
    return AdminRequestsComponent;
    var _a;
}());

//# sourceMappingURL=admin-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/admins/admins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/admins/admins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"data-item\" *ngFor=\"let admin of admins; let i = index\">\n  <div class=\"data\">{{ admin.name }}</div>\n  <div class=\"data\">{{ admin.email }}</div>\n  <div class=\"items-right\">\n  \t<div class=\"data-option-btn\">\n  \t  <button (click)=\"revoke(admin.admin_id, i)\">Revoke</button>\n  \t</div>\n  </div>\n</div>\n<div class=\"no-content\" *ngIf=\"!!admins && !admins.length\">Nothing to show</div>\n<div class=\"no-content\" *ngIf=\"!admins\">Loading</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/admins/admins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminsComponent = /** @class */ (function () {
    function AdminsComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    AdminsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admins = this.adminDataService.admins;
        this.adminDataService.changeHeading('Admins');
        this.subscription = this.adminDataService.getInfo().subscribe(function () {
            _this.admins = _this.adminDataService.admins;
        });
        this.adminDataService.getAdmins();
    };
    AdminsComponent.prototype.revoke = function (id, index) {
        this.adminDataService.revokeAdminPrivilege(id, index);
    };
    AdminsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-admins',
            template: __webpack_require__("../../../../../src/app/admin/components/admins/admins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/admins/admins.component.css"), __webpack_require__("../../../../../src/app/admin/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], AdminsComponent);
    return AdminsComponent;
    var _a;
}());

//# sourceMappingURL=admins.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/heading/heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\n\twidth: 80%;\n\tmargin: 20px auto;\n\tcolor: #eee;\n\tfont-size: 1.4rem;\n\tdisplay: none;\n}\n\n@media only screen and (max-width: 985px) {\n\n\t.heading {\n\t\twidth: auto;\n\t\tmargin: 30px 70px 20px;\n\t\tfont-weight: bolder;\n\t\tdisplay: block;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/heading/heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"heading\">{{ heading }}</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/heading/heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadingComponent = /** @class */ (function () {
    function HeadingComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    HeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heading = this.adminDataService.heading;
        this.subscription = this.adminDataService.getHeadingData().subscribe(function () {
            _this.heading = _this.adminDataService.heading;
        });
    };
    HeadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-heading',
            template: __webpack_require__("../../../../../src/app/admin/components/heading/heading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/heading/heading.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], HeadingComponent);
    return HeadingComponent;
    var _a;
}());

//# sourceMappingURL=heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-background {\n\tdisplay: none;\n\tposition: fixed;\n\tbackground: rgba(0, 0, 0, 0.4);\n\theight: 100vh;\n\twidth: 100%;\n\tz-index: 1;\n\ttop: 0;\n\tleft: 0;\n\t-ms-flex-pack: distribute;\n\t    justify-content: space-around;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\n.modal-active {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.modal {\n\tdisplay: block;\n\tbackground: #333333;\n\tcolor: rgb(230, 230, 230);\n\tfont-size: 16px;\n\tfont-family: sans-serif;\n\tborder-radius: 2px;\n\theight: 80vh;\n\twidth: 80vw;\n\tz-index: 2;\n\tbox-sizing: border-box;\n\t-webkit-animation: animatezoom 0.6s;\n\tanimation: animatezoom 0.6s;\n}\n\n.close-modal-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: end;\n\t    -ms-flex-pack: end;\n\t        justify-content: flex-end;    \n}\n\n.close-modal {\n\tpadding: 20px 20px 0 0;\n\tfont-size: 40px;\n\tcursor: pointer;\n\tcolor: #aaa;\n}\n\n.close-modal:hover {\n\tcolor: white;\n\ttransition: color 0.1s 0.1s ease;\n}\n\n.modal-content {\n\tpadding: 20px 10px;\n\twidth: 100%;\n}\n\n@-webkit-keyframes animatezoom {\n\tfrom {-webkit-transform: scale(0)}\n\tto {-webkit-transform: scale(1)}\n}\n\n@keyframes animatezoom {\n\tfrom {-webkit-transform: scale(0);transform: scale(0)}\n\tto {-webkit-transform: scale(1);transform: scale(1)}\n}\n\n.modal-content td {\n\tpadding: 10px 25px;\n\tfont-size: 1.1rem;\n\tcolor: #bbb;\n}\n\n.modal-content table {\n\twidth: 100%;\n}\n\n.modal-data {\n\tborder-style: solid;\n\tborder-color: #555;\n\tborder-width: thin;\n\tborder-radius: 2px;\n\twidth: 90%;\n\tmargin: 0 auto;\n}\n\n.modal-content td:nth-child(2) {\n\ttext-overflow: ellipsis;\n}\n\n.modal-content tr:nth-child(odd) {\n\tbackground-color: #2A2A2A;\n}\n\n.modal-content tr:nth-child(even) {\n\tbackground-color: #3D3D3D;\n}\n\n.modal-content td span{\n\tfont-weight: normal;\n\tcolor: #eee;\n}\n\n.modal-content td {\n\tfont-weight: bolder;\n}\n\n.modal-btn {\n\tmargin: 20px 10px 20px 0;\n\tpadding: 10px 30px;\n\tborder-style: none;\n\tbackground-color: #ccc;\n\tcolor: #333;\n\tfont-size: 1.1rem;\n\tborder-radius: 2px;\n\ttransition: all 0.5s ease;\n}\n\n.modal-btn:hover {\n\ttransition: all 0.1s ease;\n\tbackground-color: #aaa;\n}\n\n.copy-btn {\n\tmargin-right: 5px;\n\tpadding: 5px 15px;\n\tborder-style: none;\n\tbackground-color: #ccc;\n\tcolor: #333;\n\tborder-radius: 2px;\n}\n\n.copy-btn:hover {\n\tbackground: #eee;\n}\n\n.copy-btn:active {\n\tbackground: #ccc;\n}\n\n.modal-input {\n\tmargin: 20px 10px 20px 0;\n\tpadding: 10px 30px;\n\tborder: solid thin #666;\n\tbackground-color: #444;\n\tcolor: #eee;\n\tfont-size: 1.1rem;\n\tborder-radius: 2px;\n}\n\n.wrong-input {\n\tborder-color: red;\n}\n\n.right-input {\n\tborder-color: green;\n}\n\n.modal-buttons {\n\twidth: 90%;\n\tmargin: 0 auto;\n}\n\n.ip-form {\n\tdisplay: inline-block;\n}\n\n@media only screen and (max-width: 985px) {\n\n\t.modal-data {\n\t\toverflow: scroll;\n\t}\n\n}\n\n@media only screen and (max-width: 755px) {\n\n\t.modal {\n\t\twidth: 100%;\n\t\theight: 90vh;\n\t\toverflow-y: scroll;\n\t}\n\n}\n\n@media only screen and (max-width: 470px) {\n\t\n\t.ip-form {\n\t\twidth: 100%;\n\t}\n\n\t.ip-form input {\n\t\twidth: 100%;\n\t}\n\n\t.modal-btn {\n\t\twidth: 100%;\n\t\tmargin: 8px auto;\n\t}\n\n\t.copy-btn {\n\t\tmargin-bottom: 5px;\n\t}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.modal-active]=\"modalActive\" class=\"modal-background\">\n  <div class=\"modal\">\n    <div class=\"close-modal-container\" (click)=\"closeModal()\">\n      <div class=\"close-modal\">&times;</div>\n    </div>\n    <div class=\"modal-content\">\n      <div class=\"modal-data\">\n        <table>\n          <tr>\n            <td>Name</td><td><span>{{ modalData?.name }}</span></td>\n          </tr>\n          <tr>\n            <td>Email</td><td><span>{{ modalData?.email }}</span></td>\n          </tr>\n          <tr>\n            <td>SSH Key</td>\n            <td>\n              <div>\n              <button ngxClipboard  [cbContent]=\"modalData?.ssh_key\" class=\"copy-btn\">Copy key</button> for {{ modalData?.ssh_key.split(' ')[2] }}\n              </div>\n            </td>\n          </tr>\n          <tr *ngIf=\"modalData?.modalfor === 'access'\">\n            <td>IP</td><td><span>{{ modalData?.ip }}</span></td>\n          </tr>\n          <tr *ngIf=\"modalData?.modalfor === 'access_request'\">\n            <td>Message</td><td><span>{{ modalData?.message }}</span></td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-buttons\">\n        <div *ngIf=\"modalData?.modalfor === 'access'\">\n          <button class=\"modal-btn\" (click)=\"revoke(modalData?.id, modalData?.index)\">Revoke</button>\n        </div>\n        <div *ngIf=\"modalData?.modalfor === 'access_request'\">\n          <form class=\"ip-form\" [formGroup]=\"ipForm\" (submit)=\"accept(ipForm.value, modalData?.id, modalData?.index)\">\n            <input [class.right-input]=\"ipValid\" [class.wrong-input]=\"!ipValid && ip.length > 0\" class=\"modal-input\" name=\"ip\" formControlName=\"ip\" (ngModelChange)=\"ipInputChanged(value = $event)\" placeholder=\"IP Address\" [(ngModel)]=\"ip\" />\n            <button class=\"modal-btn\" type=\"submit\">Accept</button>\n          </form>      \n          <button class=\"modal-btn\" (click)=\"reject(modalData?.id, modalData?.index)\">Reject</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalData = this.adminDataService.modalData;
        this.subscription = this.adminDataService.getModalData().subscribe(function () {
            _this.modalData = _this.adminDataService.modalData;
            _this.modalActive = true;
        });
        this.ipForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            ip: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
        this.modalActive = false;
        this.ip = '';
    };
    ModalComponent.prototype.closeModal = function () {
        this.modalActive = false;
        this.ip = '';
    };
    ModalComponent.prototype.revoke = function (id, index) {
        this.adminDataService.revokeAccessPrivilege(id, index);
        this.closeModal();
    };
    ModalComponent.prototype.reject = function (id, index) {
        this.adminDataService.rejectAccessRequest(id, index);
        this.closeModal();
    };
    ModalComponent.prototype.accept = function (ip, id, index) {
        if (this.ipValid) {
            this.adminDataService.acceptAccessRequest(ip, id, index);
            this.closeModal();
        }
        else
            this.adminDataService.sendAlertDanger('Enter a valid IP or domain');
    };
    ModalComponent.prototype.ipInputChanged = function (value) {
        if (this.validateIPAddress(value) || this.validateDomain(value))
            this.ipValid = true;
        else
            this.ipValid = false;
    };
    ModalComponent.prototype.validateIPAddress = function (ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        }
        return false;
    };
    ModalComponent.prototype.validateDomain = function (domain) {
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)) {
            return true;
        }
        return false;
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-modal',
            template: __webpack_require__("../../../../../src/app/admin/components/modal/modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], ModalComponent);
    return ModalComponent;
    var _a;
}());

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#burger-container {\n\tdisplay: none;\n\tposition: absolute;\n\tleft: 20px;\n\ttop: 30px;\n}\n\n#burger {\n\tcursor: pointer;\n\tdisplay: block;\n}\n\n#burger span {\n\tbackground: #fff;\n\tdisplay: block;\n\twidth: 27px;\n\theight: 3px;\n\tmargin-bottom: 6px;\n\tposition: relative;\n\ttop: 0;\n\ttransition: all ease-in-out 0.4s;\n\tborder-radius: 1px;\n}\n\n#burger-container.open span:nth-child(2) {\n\twidth: 0;\n\topacity: 0;\n}\n\n#burger-container.open span:nth-child(3) {\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\ttop: -9px;\n}\n\n#burger-container.open span:nth-child(1) {\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n\ttop: 9px;\n}\n\n@media only screen and (max-width: 985px) {\n\n\t#burger-container {\n\t\tdisplay: block;\n\t}\n\n}\n\n.nav {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: start;\n\t    -ms-flex-pack: start;\n\t        justify-content: flex-start;\n\tpadding: 45px 45px 0 10%;\n\tmargin: 0 auto 50px;\n}\n\n.nav-links {\n\tpadding: 10px 30px;\n\tcursor: pointer;\n\tcolor: #aaa;\n\tborder-bottom: solid #333;\n\tfont-size: 1.15rem;\n\tmargin-right: 5px;\n\tfont-weight: bold;\n}\n\n.active {\n\tborder-bottom: solid #aaa;\n}\n\n.logout-container {\n\tmargin-left: auto;\n}\n\n.logout-button {\n\tpadding: 10px 30px;\n\tborder-style: none;\n\tbackground-color: #aaa;\n\tcolor: #333;\n\tfont-size: 1.1rem;\n\tborder-radius: 2px;\n\tcursor: pointer;\n}\n\n@media only screen and (max-width: 985px) {\n\n\t.nav {\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-direction: column;\n\t\t        flex-direction: column;\n\t\t-webkit-box-pack: end;\n\t\t    -ms-flex-pack: end;\n\t\t        justify-content: flex-end;\n\t\tborder-bottom: solid thin #333;\n\t\tbackground-color: #333;\n\t\tpadding: 0 10%;\n\t\tmargin: 0;\n\t\toverflow: hidden;\n\t\theight: 330px;\n\t\ttransition: height 0.8s;\n\t}\n\n\t.navClosed {\n\t\theight: 0;\n\t\toverflow: hidden;\n\t\ttransition: height 0.8s;\n\t}\n\n\t.logout-button {\n\t\tfont-size: 1.15rem;\n\t\tfont-weight: bolder;\n\t\twidth: 125px;\n\t}\n\n\t.logout-container {\n\t\tpadding: 20px 30px 30px;\n\t\twidth: 100%;\n\t}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.open]=\"navOpen\" (click)=\"toggleNav()\" id=\"burger-container\">\n  <div id=\"burger\">\n    <span>&nbsp;</span>\n    <span>&nbsp;</span>\n    <span>&nbsp;</span>\n  </div>\n</div>\n<nav [class.navClosed]=\"!navOpen\" class=\"nav\">\n\t<div (click)=\"closeNav()\" class=\"nav-links\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/accesses']\">Accesses</div>\n\t<div (click)=\"closeNav()\" class=\"nav-links\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/accessrequests']\">Access Requests</div>\n\t<div (click)=\"closeNav()\" class=\"nav-links\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/admins']\">Admins</div>\n\t<div (click)=\"closeNav()\" class=\"nav-links\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/adminrequests']\">Admin Requests</div>\n\t<div (click)=\"closeNav()\" class=\"logout-container\">\n\t\t<a href=\"/logout\" class=\"logout-button\">Logout</a>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/admin/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.navOpen = false;
    };
    NavbarComponent.prototype.toggleNav = function () {
        this.navOpen = !this.navOpen;
    };
    NavbarComponent.prototype.closeNav = function () {
        this.navOpen = false;
    };
    NavbarComponent.prototype.openNav = function () {
        this.navOpen = true;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-navbar',
            template: __webpack_require__("../../../../../src/app/admin/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/components/snackbar/snackbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#snackbar {\n\tvisibility: hidden;\n\tmin-width: 250px;\n\tbackground-color: #AAAAAA;\n\tcolor: #333333;\n\ttext-align: center;\n\tborder-radius: 2px;\n\tpadding: 16px;\n\tposition: fixed;\n\tz-index: 3;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\t-webkit-transform: translateX(-50%);\n\t-moz-transform: translateX(-50%);\n\tbottom: 30px;\n\tfont-size: 17px;\n}\n\n#snackbar.danger {\n\tbackground-color: #C9302C;\n\tfont-weight: bolder;\n\tcolor: #eee;\n}\n\n#snackbar.show {\n\tvisibility: visible;\n\t-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n\tanimation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n\tfrom {bottom: 0; opacity: 0;} \n\tto {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n\tfrom {bottom: 0; opacity: 0;}\n\tto {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n\tfrom {bottom: 30px; opacity: 1;} \n\tto {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n\tfrom {bottom: 30px; opacity: 1;}\n\tto {bottom: 0; opacity: 0;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/components/snackbar/snackbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.danger]=\"!type\" [class.show]=\"show\" id=\"snackbar\">{{ message }}</div>"

/***/ }),

/***/ "../../../../../src/app/admin/components/snackbar/snackbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__ = __webpack_require__("../../../../../src/app/admin/services/admin-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(adminDataService) {
        this.adminDataService = adminDataService;
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.adminDataService.getSnackbarData().subscribe(function () {
            _this.message = _this.adminDataService.snackbarMessage;
            _this.type = _this.adminDataService.snackbarType;
            _this.show = false;
            _this.showAlert();
        });
    };
    SnackbarComponent.prototype.showAlert = function () {
        var _this = this;
        this.show = true;
        setTimeout(function () {
            _this.show = false;
        }, 3000);
    };
    SnackbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'admin-snackbar',
            template: __webpack_require__("../../../../../src/app/admin/components/snackbar/snackbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/components/snackbar/snackbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_data_service__["a" /* AdminDataService */]) === "function" && _a || Object])
    ], SnackbarComponent);
    return SnackbarComponent;
    var _a;
}());

//# sourceMappingURL=snackbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/services/admin-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDataService = /** @class */ (function () {
    function AdminDataService(http) {
        this.http = http;
        this.infoSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.modalSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.snackbarSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.headingSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    AdminDataService.prototype.sendInfo = function () {
        this.infoSubject.next();
    };
    AdminDataService.prototype.getInfo = function () {
        return this.infoSubject.asObservable();
    };
    AdminDataService.prototype.getAccesses = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://127.0.0.1:8080/admin/getAccesses', { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.accesses = JSON.parse(data.message);
                _this.sendInfo();
            }
            else {
                _this.sendAlertDanger(data.message);
            }
        });
    };
    AdminDataService.prototype.getAdmins = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://127.0.0.1:8080/admin/getAdmins', { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.admins = JSON.parse(data.message);
                _this.sendInfo();
            }
            else {
                _this.sendAlertDanger(data.message);
            }
        });
    };
    AdminDataService.prototype.getAccessRequests = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://127.0.0.1:8080/admin/getAccessRequests', { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.accessRequests = JSON.parse(data.message);
                _this.sendInfo();
            }
            else {
                _this.sendAlertDanger(data.message);
            }
        });
    };
    AdminDataService.prototype.getAdminRequests = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        return this.http.get('http://127.0.0.1:8080/admin/getAdminRequests', { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.adminRequests = JSON.parse(data.message);
                _this.sendInfo();
            }
            else {
                _this.sendAlertDanger(data.message);
            }
        });
    };
    AdminDataService.prototype.changeHeading = function (heading) {
        this.heading = heading;
        this.sendHeadingData();
    };
    AdminDataService.prototype.sendHeadingData = function () {
        this.headingSubject.next();
    };
    AdminDataService.prototype.getHeadingData = function () {
        return this.headingSubject.asObservable();
    };
    AdminDataService.prototype.openModal = function (data, modalfor, index) {
        this.modalData = __assign({}, data, { id: !!data.access_id ? data.access_id : data.access_request_id, modalfor: modalfor, index: index });
        this.sendModalData();
    };
    AdminDataService.prototype.sendModalData = function () {
        this.modalSubject.next();
    };
    AdminDataService.prototype.getModalData = function () {
        return this.modalSubject.asObservable();
    };
    AdminDataService.prototype.sendAlert = function (message) {
        this.snackbarMessage = message;
        this.snackbarType = true;
        this.sendSnackbarData();
    };
    AdminDataService.prototype.sendAlertDanger = function (message) {
        this.snackbarMessage = message;
        this.snackbarType = false;
        this.sendSnackbarData();
    };
    AdminDataService.prototype.sendSnackbarData = function () {
        this.snackbarSubject.next();
    };
    AdminDataService.prototype.getSnackbarData = function () {
        return this.snackbarSubject.asObservable();
    };
    AdminDataService.prototype.acceptAdminRequests = function (id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://127.0.0.1:8080/admin/acceptAdminRequest/' + id, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.adminRequests.splice(index, 1);
                _this.sendAlert(data.message);
            }
            else
                _this.sendAlertDanger(data.message);
        });
    };
    AdminDataService.prototype.rejectAdminRequests = function (id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://127.0.0.1:8080/admin/rejectAdminRequest/' + id, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.adminRequests.splice(index, 1);
                _this.sendAlert(data.message);
            }
            else
                _this.sendAlertDanger(data.message);
        });
    };
    AdminDataService.prototype.revokeAdminPrivilege = function (id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://127.0.0.1:8080/admin/revokeAdminPrivilege/' + id, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.admins.splice(index, 1);
                _this.sendAlert(data.message);
            }
            else
                _this.sendAlertDanger(data.message);
        });
    };
    AdminDataService.prototype.revokeAccessPrivilege = function (id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://127.0.0.1:8080/admin/revokeAccessPrivilege/' + id, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                console.log('asd');
                _this.accesses.splice(index, 1);
                _this.sendAlert(data.message);
            }
            else
                _this.sendAlertDanger(data.message);
        });
    };
    AdminDataService.prototype.rejectAccessRequest = function (id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://127.0.0.1:8080/admin/rejectAccessRequest/' + id, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.accessRequests.splice(index, 1);
                _this.sendAlert(data.message);
            }
            else
                _this.sendAlertDanger(data.message);
        });
    };
    AdminDataService.prototype.acceptAccessRequest = function (ip, id, index) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        this.http.post('http://127.0.0.1:8080/admin/acceptAccessRequest/' + id, ip, { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.success) {
                _this.accessRequests.splice(index, 1);
                _this.sendAlert(data.message);
            }
            else
                _this.sendAlertDanger(data.message);
        });
    };
    AdminDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AdminDataService);
    return AdminDataService;
    var _a;
}());

//# sourceMappingURL=admin-data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main-admin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_admin_app_module__ = __webpack_require__("../../../../../src/app/admin/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_admin_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main-admin.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main-admin.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map