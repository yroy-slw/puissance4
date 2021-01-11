(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yannroy/Desktop/GIT/puissance4/src/main.ts */"zUnb");


/***/ }),

/***/ "4Kj7":
/*!*********************************************************!*\
  !*** ./src/app/components/app-nav/app-nav.component.ts ***!
  \*********************************************************/
/*! exports provided: AppNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function() { return AppNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_functionalRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/functionalRules */ "FX2M");
/* harmony import */ var _common_services_colorMode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/colorMode.service */ "EmrK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class AppNavComponent {
    constructor(colorModeService) {
        this.colorModeService = colorModeService;
        this.navLabels = _common_functionalRules__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.title = 'connect4';
    }
    ngOnInit() {
    }
    toggleDarkMode(checked) {
        this.colorModeService.setDarkMode(checked);
    }
}
AppNavComponent.ɵfac = function AppNavComponent_Factory(t) { return new (t || AppNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_colorMode_service__WEBPACK_IMPORTED_MODULE_2__["ColorModeService"])); };
AppNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppNavComponent, selectors: [["app-nav"]], decls: 9, vars: 4, consts: [["color", "primary", 1, "nav"], [1, "nav__icon"], [1, "nav__title"], [3, "checked", "change"], [1, "nav__icon", "nav__icon--brightness"]], template: function AppNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "gamepad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppNavComponent_Template_mat_slide_toggle_change_5_listener($event) { return ctx.toggleDarkMode($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "brightness_medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.navLabels.APP_TITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.$isDarkMode));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.nav__title[_ngcontent-%COMP%] {\n  color: var(--color);\n  padding-left: 45px;\n}\n.nav__icon[_ngcontent-%COMP%] {\n  color: var(--color);\n}\n.nav__icon--brightness[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0FBR1oiLCJmaWxlIjoiYXBwLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICAgIH1cbiAgICAmX19pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICAgICAgJi0tYnJpZ2h0bmVzcyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './app-nav.component.html',
                styleUrls: ['./app-nav.component.scss'],
            }]
    }], function () { return [{ type: _common_services_colorMode_service__WEBPACK_IMPORTED_MODULE_2__["ColorModeService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EmrK":
/*!******************************************************!*\
  !*** ./src/app/common/services/colorMode.service.ts ***!
  \******************************************************/
/*! exports provided: ColorModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModeService", function() { return ColorModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_action_colorMode_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/action/colorMode.action */ "LSRx");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");





class ColorModeService {
    constructor(store) {
        this.store = store;
        this.$colorMode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isDarkMode = this.$colorMode.asObservable();
    }
    setDarkMode(isDarkMode) {
        this.$colorMode.next(isDarkMode);
        this.store.dispatch(new _store_action_colorMode_action__WEBPACK_IMPORTED_MODULE_2__["setColorMode"]({ isDarkMode: isDarkMode }));
    }
}
ColorModeService.ɵfac = function ColorModeService_Factory(t) { return new (t || ColorModeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ColorModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorModeService, factory: ColorModeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "FX2M":
/*!*******************************************!*\
  !*** ./src/app/common/functionalRules.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const functionalRules = {
    APP_TITLE: 'Puissance 4',
    PLAYERS: {
        PLAYER1: 'Rouges',
        PLAYER2: 'Jaunes',
    },
    GAME_STATES: {
        START_LABEL: 'commence.',
        TURN_LABEL: 'Au tour des ',
        WIN_LABEL: ' gagnent !',
        NULL_LABEL: 'Egalité !',
    }
};
/* harmony default export */ __webpack_exports__["default"] = (functionalRules);


/***/ }),

/***/ "LSRx":
/*!*********************************************************!*\
  !*** ./src/app/common/store/action/colorMode.action.ts ***!
  \*********************************************************/
/*! exports provided: setColorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColorMode", function() { return setColorMode; });
class setColorMode {
    constructor(payload) {
        this.payload = payload;
    }
}
setColorMode.type = '[ColorMode] Set';


/***/ }),

/***/ "Mtis":
/*!********************************************************!*\
  !*** ./src/app/common/store/states/colorMode.state.ts ***!
  \********************************************************/
/*! exports provided: ColorModeStateModel, ColorModeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModeStateModel", function() { return ColorModeStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModeState", function() { return ColorModeState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _action_colorMode_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/colorMode.action */ "LSRx");





class ColorModeStateModel {
}
let ColorModeState = class ColorModeState {
    static getColorMode(state) {
        return state.colorMode;
    }
    add({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            colorMode: {
                isDarkMode: payload.isDarkMode,
            },
        });
    }
};
ColorModeState.ɵfac = function ColorModeState_Factory(t) { return new (t || ColorModeState)(); };
ColorModeState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ColorModeState, factory: ColorModeState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_action_colorMode_action__WEBPACK_IMPORTED_MODULE_3__["setColorMode"])
], ColorModeState.prototype, "add", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], ColorModeState, "getColorMode", null);
ColorModeState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'colorMode',
        defaults: {
            colorMode: {
                isDarkMode: false,
            },
        },
    })
], ColorModeState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColorModeState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, { add: [] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_services_colorMode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/services/colorMode.service */ "EmrK");
/* harmony import */ var _components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-nav/app-nav.component */ "4Kj7");
/* harmony import */ var _components_app_game_app_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app-game/app-game.component */ "y7Rx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class AppComponent {
    constructor(colorModeService) {
        this.colorModeService = colorModeService;
    }
    ngOnInit() {
        this.$isDarkMode = this.colorModeService.isDarkMode;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_colorMode_service__WEBPACK_IMPORTED_MODULE_1__["ColorModeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [[1, "mat-app-background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.$isDarkMode));
    } }, directives: [_components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_2__["AppNavComponent"], _components_app_game_app_game_component__WEBPACK_IMPORTED_MODULE_3__["AppGameComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _common_services_colorMode_service__WEBPACK_IMPORTED_MODULE_1__["ColorModeService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-nav/app-nav.component */ "4Kj7");
/* harmony import */ var _components_app_game_app_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app-game/app-game.component */ "y7Rx");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _common_store_states_colorMode_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/store/states/colorMode.state */ "Mtis");






// Components


// Store



// States





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forRoot([_common_store_states_colorMode_state__WEBPACK_IMPORTED_MODULE_11__["ColorModeState"]]),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsLoggerPluginModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_6__["AppNavComponent"],
        _components_app_game_app_game_component__WEBPACK_IMPORTED_MODULE_7__["AppGameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["ɵk"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsReduxDevtoolsPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsLoggerPluginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_6__["AppNavComponent"],
                    _components_app_game_app_game_component__WEBPACK_IMPORTED_MODULE_7__["AppGameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forRoot([_common_store_states_colorMode_state__WEBPACK_IMPORTED_MODULE_11__["ColorModeState"]]),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsLoggerPluginModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");












class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        ], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                ],
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "y7Rx":
/*!***********************************************************!*\
  !*** ./src/app/components/app-game/app-game.component.ts ***!
  \***********************************************************/
/*! exports provided: AppGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGameComponent", function() { return AppGameComponent; });
/* harmony import */ var _common_functionalRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/functionalRules */ "FX2M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function AppGameComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppGameComponent_div_1_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const j_r6 = ctx.index; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.clickedToken($event, i_r3, j_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r6 = ctx.index;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r4.box[i_r3][j_r6]);
} }
function AppGameComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppGameComponent_div_1_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r2);
} }
function AppGameComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppGameComponent_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.newGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "loop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class AppGameComponent {
    constructor() {
        this.game_labels = _common_functionalRules__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.endGame = false;
        this.playerone_turn = this.game_labels.GAME_STATES.TURN_LABEL + this.game_labels.PLAYERS.PLAYER1;
        this.playertwo_turn = this.game_labels.GAME_STATES.TURN_LABEL + this.game_labels.PLAYERS.PLAYER2;
        this.playerone_win = this.game_labels.PLAYERS.PLAYER1 + this.game_labels.GAME_STATES.WIN_LABEL;
        this.playertwo_win = this.game_labels.PLAYERS.PLAYER2 + this.game_labels.GAME_STATES.WIN_LABEL;
        this.playerOne = "game__token--red";
        this.playerTwo = "game__token--yellow";
        this.turn = this.playerOne;
        this.tap = 1;
        this.checker = 1;
        this.box = [
            [0, 1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12, 13],
            [14, 15, 16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 27],
            [28, 29, 30, 31, 32, 33, 34],
            [35, 36, 37, 38, 39, 40, 41]
        ];
        this.box2 = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
    }
    clickedToken(event, i, j) {
        if (this.tap == 0)
            return;
        for (let a = 0; a < 6; a++) {
            if (this.box2[5 - a][j] == 0) {
                this.turn == this.playerOne ? this.box2[5 - a][j] = 1 : this.box2[5 - a][j] = 2;
                this.chosen = this.box[5 - a][j];
                this.rowanimator = 0;
                this.tap = 0;
                this.moveToken(a, j);
                return;
            }
        }
    }
    moveToken(a, j) {
        this.animator = this.box[this.rowanimator][j];
        document.getElementById(this.animator).classList.add(this.turn);
        setTimeout(() => {
            document.getElementById(this.animator).classList.add("game__token--move");
            document.getElementById(this.animator).classList.remove(this.turn);
            this.rowanimator++;
            if (this.rowanimator == (6 - a)) {
                document.getElementById(this.chosen).classList.remove("game__token--move");
                document.getElementById(this.chosen).classList.add(this.turn);
                if (this.turn == this.playerOne) {
                    this.turn = this.playerTwo;
                    this.checker = 1;
                }
                else {
                    this.turn = this.playerOne;
                    this.checker = 2;
                }
                this.checkVertical();
                return;
            }
            else {
                this.moveToken(a, j);
            }
        }, 30);
    }
    checkVertical() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                if (this.box2[i][j] == this.checker && this.box2[i + 1][j] == this.checker && this.box2[i + 2][j] == this.checker && this.box2[i + 3][j] == this.checker) {
                    this.winnerSlot1 = this.box[i][j];
                    this.winnerSlot2 = this.box[i + 1][j];
                    this.winnerSlot3 = this.box[i + 2][j];
                    this.winnerSlot4 = this.box[i + 3][j];
                    this.winner();
                    this.tap = 0;
                    return;
                }
            }
        }
        this.checkHorizontal();
    }
    checkHorizontal() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.box2[i][j] == this.checker && this.box2[i][j + 1] == this.checker && this.box2[i][j + 2] == this.checker && this.box2[i][j + 3] == this.checker) {
                    this.winnerSlot1 = this.box[i][j];
                    this.winnerSlot2 = this.box[i][j + 1];
                    this.winnerSlot3 = this.box[i][j + 2];
                    this.winnerSlot4 = this.box[i][j + 3];
                    this.winner();
                    this.tap = 0;
                    return;
                }
            }
        }
        this.checkSlantRight();
    }
    checkSlantRight() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.box2[i][j] == this.checker && this.box2[i + 1][j + 1] == this.checker && this.box2[i + 2][j + 2] == this.checker && this.box2[i + 3][j + 3] == this.checker) {
                    this.winnerSlot1 = this.box[i][j];
                    this.winnerSlot2 = this.box[i + 1][j + 1];
                    this.winnerSlot3 = this.box[i + 2][j + 2];
                    this.winnerSlot4 = this.box[i + 3][j + 3];
                    this.winner();
                    this.tap = 0;
                    return;
                }
            }
        }
        this.checkSlantLeft();
    }
    checkSlantLeft() {
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 7; j++) {
                if (this.box2[i][j] == this.checker && this.box2[i + 1][j - 1] == this.checker && this.box2[i + 2][j - 2] == this.checker && this.box2[i + 3][j - 3] == this.checker) {
                    this.winnerSlot1 = this.box[i][j];
                    this.winnerSlot2 = this.box[i + 1][j - 1];
                    this.winnerSlot3 = this.box[i + 2][j - 2];
                    this.winnerSlot4 = this.box[i + 3][j - 3];
                    this.winner();
                    this.tap = 0;
                    return;
                }
                else {
                    this.tap = 1;
                    this.turn == this.playerTwo ? document.getElementById("monitor").innerHTML = this.playertwo_turn : document.getElementById("monitor").innerHTML = this.playerone_turn;
                    this.tide();
                }
            }
        }
    }
    winner() {
        this.endGame = !this.endGame;
        if (this.turn == this.playerTwo) {
            this.turn = this.playerOne;
            document.getElementById("monitor").innerHTML = this.playerone_win;
        }
        else {
            this.turn = "game__token--yellow";
            document.getElementById("monitor").innerHTML = this.playertwo_win;
        }
        let timer = 200;
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                document.getElementById(this.winnerSlot1).classList.add("game__token--white");
                document.getElementById(this.winnerSlot2).classList.add("game__token--white");
                document.getElementById(this.winnerSlot3).classList.add("game__token--white");
                document.getElementById(this.winnerSlot4).classList.add("game__token--white");
                setTimeout(() => {
                    document.getElementById(this.winnerSlot1).classList.remove("game__token--white");
                    document.getElementById(this.winnerSlot2).classList.remove("game__token--white");
                    document.getElementById(this.winnerSlot3).classList.remove("game__token--white");
                    document.getElementById(this.winnerSlot4).classList.remove("game__token--white");
                    document.getElementById(this.winnerSlot1).classList.add(this.turn);
                    document.getElementById(this.winnerSlot1).style.borderColor = "gold";
                    document.getElementById(this.winnerSlot2).classList.add(this.turn);
                    document.getElementById(this.winnerSlot2).style.borderColor = "gold";
                    document.getElementById(this.winnerSlot3).classList.add(this.turn);
                    document.getElementById(this.winnerSlot3).style.borderColor = "gold";
                    document.getElementById(this.winnerSlot4).classList.add(this.turn);
                    document.getElementById(this.winnerSlot4).style.borderColor = "gold";
                }, 100);
            }, timer);
            timer = timer + 200;
        }
    }
    tide() {
        let counter = 0;
        for (let j = 0; j < 7; j++) {
            if (this.box2[0][j] != 0)
                counter++;
        }
        if (counter == 7) {
            this.endGame = !this.endGame;
            this.tap = 0;
            document.getElementById("monitor").innerHTML = this.game_labels.GAME_STATES.NULL_LABEL;
        }
    }
    newGame() {
        this.endGame = false;
        this.tap = 1;
        this.checker = 1;
        this.turn = this.playerOne;
        this.box2 = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                this.reset = this.box[i][j];
                document.getElementById(this.reset).classList.remove("game__token--red");
                document.getElementById(this.reset).classList.remove("game__token--yellow");
                document.getElementById(this.reset).style.borderColor = "transparent";
                document.getElementById(this.reset).style.backgroundColor = "";
            }
        }
        document.getElementById("monitor").innerHTML = this.playerone_turn;
    }
}
AppGameComponent.ɵfac = function AppGameComponent_Factory(t) { return new (t || AppGameComponent)(); };
AppGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppGameComponent, selectors: [["app-game"]], decls: 8, vars: 3, consts: [[1, "game"], ["class", "game__container", 4, "ngFor", "ngForOf"], [1, "game__controls"], [1, "game__card"], ["id", "monitor", 1, "game__monitor"], [4, "ngIf"], [1, "game__container"], ["class", "game__box", 4, "ngFor", "ngForOf"], [1, "game__box"], [1, "game__token", 3, "id", "click"], ["box[i][j]", ""], ["mat-mini-fab", "", "aria-label", "Example icon button with a home icon", 3, "click"]], template: function AppGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppGameComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppGameComponent_ng_container_7_Template, 4, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.box);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.playerone_turn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endGame);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n}\n\n.game[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.game__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.game__box[_ngcontent-%COMP%] {\n  background: var(--gameBoardBackground);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1vw;\n}\n\n@media (max-width: 768px) {\n  .game__box[_ngcontent-%COMP%] {\n    padding: 2vw;\n  }\n}\n\n.game__token[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 4vw;\n  width: 4vw;\n  background: var(--tokenBackground);\n  border-radius: 50%;\n  border: 0.5vw solid transparent;\n}\n\n.game__token--move[_ngcontent-%COMP%] {\n  background: var(--tokenBackground);\n}\n\n.game__token--red[_ngcontent-%COMP%] {\n  background: red;\n}\n\n.game__token--yellow[_ngcontent-%COMP%] {\n  background: yellow;\n}\n\n.game__token--white[_ngcontent-%COMP%] {\n  background: white;\n}\n\n@media (max-width: 768px) {\n  .game__token[_ngcontent-%COMP%] {\n    height: 7vw;\n    width: 7vw;\n  }\n}\n\n.game__controls[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 3vh;\n}\n\n.game__card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.game__monitor[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVSOztBQUFJO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFUjs7QUFEUTtFQU5KO0lBT1EsWUFBQTtFQUlWO0FBQ0Y7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFJUjs7QUFIUTtFQUNJLGtDQUFBO0FBS1o7O0FBSFE7RUFDSSxlQUFBO0FBS1o7O0FBSFE7RUFDSSxrQkFBQTtBQUtaOztBQUhRO0VBQ0ksaUJBQUE7QUFLWjs7QUFIUTtFQW5CSjtJQW9CUSxXQUFBO0lBQ0EsVUFBQTtFQU1WO0FBQ0Y7O0FBSkk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUpJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTVI7O0FBSkk7RUFDSSwyQkFBQTtBQU1SIiwiZmlsZSI6ImFwcC1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAmX19ib3gge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1nYW1lQm9hcmRCYWNrZ3JvdW5kKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDF2dztcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAydnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJl9fdG9rZW4ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGhlaWdodDogNHZ3O1xuICAgICAgICB3aWR0aDogNHZ3O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10b2tlbkJhY2tncm91bmQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogLjV2dyBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgJi0tbW92ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10b2tlbkJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgICAgICYtLXJlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgJi0teWVsbG93IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgfVxuICAgICAgICAmLS13aGl0ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGhlaWdodDogN3Z3O1xuICAgICAgICAgICAgd2lkdGg6IDd2dztcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19jb250cm9scyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgIH1cbiAgICAmX19jYXJkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgJl9fbW9uaXRvciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './app-game.component.html',
                styleUrls: ['./app-game.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map