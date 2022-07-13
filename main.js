"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 6504:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1866);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9718);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-select-dropdown */ 4952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);






let AppComponent = class AppComponent {
    constructor(fromBuilder, drodownService) {
        this.fromBuilder = fromBuilder;
        this.drodownService = drodownService;
        this.title = "app";
        this.tab = 1;
        this.singleSelect = [];
        this.multiSelect = [];
        this.stringArray = [];
        this.objectsArray = [];
        this.stringOptions = [
            "Burns Dalton",
            "Mcintyre Lawson",
            "Amie Franklin",
            "Jocelyn Horton",
            "Fischer Erickson",
            "Medina Underwood",
            "Goldie Barber",
        ];
        this.config = {
            displayKey: "name",
            search: true,
            limitTo: 3,
        };
        this.selectedOptions = [
            {
                _id: "5a66d6c31d5e4e36c7711b7a",
                index: 0,
                balance: "$2,806.37",
                picture: "http://placehold.it/32x32",
                name: "Burns Dalton",
            },
            {
                _id: "5a66d6c3657e60c6073a2d22",
                index: 1,
                balance: "$2,984.98",
                picture: "http://placehold.it/32x32",
                name: "Mcintyre Lawson",
            },
        ];
        this.options = [
            {
                _id: "5a66d6c31d5e4e36c7711b7a",
                index: 0,
                balance: "$2,806.37",
                picture: "http://placehold.it/32x32",
                name: "Burns Dalton",
            },
            {
                _id: "5a66d6c3657e60c6073a2d22",
                index: 1,
                balance: "$2,984.98",
                picture: "http://placehold.it/32x32",
                name: "Mcintyre Lawson",
            },
            {
                _id: "5a66d6c376be165a5a7fae33",
                index: 2,
                balance: "$2,794.16",
                picture: "http://placehold.it/32x32",
                name: "Amie Franklin",
            },
            {
                _id: "5a66d6c3f7854b6b4d96333b",
                index: 3,
                balance: "$2,537.14",
                picture: "http://placehold.it/32x32",
                name: "Jocelyn Horton",
            },
            {
                _id: "5a66d6c31f967d4f3e9d84e9",
                index: 4,
                balance: "$2,141.42",
                picture: "http://placehold.it/32x32",
                name: "Fischer Erickson",
            },
            {
                _id: "5a66d6c34cfa8cddefb31602",
                index: 5,
                balance: "$1,398.60",
                picture: "http://placehold.it/32x32",
                name: "Medina Underwood",
            },
            {
                _id: "5a66d6c3d727c450794226de",
                index: 6,
                balance: "$3,915.65",
                picture: "http://placehold.it/32x32",
                name: "Goldie Barber",
            },
        ];
        // this.selectForm = this.fromBuilder.group({
        //   selectDrop: [null, Validators.required]
        // });
    }
    ngOnInit() {
        this.resetOption = [this.options[0]];
    }
    changeValue($event) {
        // console.log(this.selectForm.getRawValue());
    }
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder },
    { type: ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_3__.SelectDropDownService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-root",
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 7200:
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-select-dropdown */ 4952);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6504);






let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_5__.SelectDropDownModule
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 3585:
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 873:
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7200);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3585);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 9718:
/*!*************************************************************!*\
  !*** ./projects/demo/src/app/app.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".credits {\n  padding-top: 1rem;\n}\n\n.nav-tabs {\n  margin-bottom: 0;\n}\n\n.content {\n  padding: 25px;\n}\n\n.white {\n  background-color: rgba(255, 255, 255, 0.7) !important;\n}\n\n.tabs {\n  background-color: transparent;\n}\n\n.header {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0kscURBQUE7QUFJSjs7QUFGQTtFQUNJLDZCQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0FBS0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdHN7XG4gICAgcGFkZGluZy10b3A6MXJlbTtcbn1cbi5uYXYtdGFic3tcbiAgICBtYXJnaW4tYm90dG9tOjA7XG59XG4uY29udGVudHtcbiAgICBwYWRkaW5nOjI1cHg7XG59XG4ud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpICFpbXBvcnRhbnQ7XG59XG4udGFic3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlcntcbiAgICBwYWRkaW5nOjEwcHg7XG59Il19 */";

/***/ }),

/***/ 1866:
/*!*************************************************************!*\
  !*** ./projects/demo/src/app/app.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container pt-1\">\n  <div class=\"row white mb-0\">\n    <div class=\"col s12 l6\">\n      <h5 class=\"header\">ngx-select-dropdown demo</h5>\n    </div>\n    <div class=\"col s12 l6\">\n      <a href=\"https://manishjanky.github.io/#/\" class=\"blue-text right credits\" target=\"_blank\">Developed By:Manish</a>\n    </div>\n  </div>\n  <div class=\"center row\">\n    <h1 class=\"blue-text\">ngx-select-dropdown</h1>\n\n    <h5 class=\"blue-text header\">Custom Dropdown component for Angular 2+ applications with multiple and single\n      selection\n      options.</h5>\n    <div>\n      <a href=\"https://github.com/manishjanky/ngx-select-dropdown\" class=\"btn blue\" style=\"margin:10px;\">\n        <span class=\"fa fa-github\"> Github</span>\n      </a>\n      <a href=\"https://github.com/manishjanky/ngx-select-dropdown/issues\" class=\"btn blue\" style=\"margin:10px;\">\n        <span class=\"fa fa-bug\"> Report a bug</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"row nav-tabs white\">\n    <div class=\"col s12\">\n      <ul class=\"tabs\">\n        <li class=\"tab col s2\">\n          <a class=\"nav-link\" [ngClass]=\"{'active':tab==1}\" (click)=\"tab=1\">Documentation</a>\n        </li>\n        <li class=\"tab col s2\">\n          <a class=\"nav-link\" [ngClass]=\"{'active':tab==2}\" (click)=\"tab=2\">Demo</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row white content\" *ngIf=\"tab==1\">\n    <div class=\"col s12 pt-1\">\n      <h4>1.Installation</h4>\n      <pre class=\"codeBlock\">\n        //using npm\n        <strong> npm install ngx-select-dropdown</strong>\n\n        //using yarn\n        <strong> yarn add ngx-select-dropdown</strong>\n        <strong> yarn install</strong></pre>\n      <ul>\n        <li>include styles in you angular-cli.json.</li>\n      </ul>\n\n      <pre class=\"codeBlock\">\n        //in angular-cli.json\n         <strong>\"styles\": [\n            \"../node_modules/ngx-select-dropdown/dist/assets/style.css\"\n          ]</strong></pre>\n    </div>\n    <div class=\"col s12 pt-1\">\n      <h4>2.Using with webpack and tsc builds/ angular-cli builds</h4>\n      <ul>\n        <li>import SelectDropDownModule from ngx-select-dropdown</li>\n        <li>add SelectDropDownModule to the imports of your NgModule</li>\n      </ul>\n      <pre class=\"codeBlock\">\n        <strong>\n          import {{'{'}} SelectDropDownModule {{'}'}} from 'ngx-select-dropdown'\n\n          @NgModule({{'{'}}\n            imports: [\n              ...,\n\n              SelectDropDownModule\n            ],\n            ...\n          })\n          class YourModule {{'{'}} ... {{'}'}}</strong></pre>\n    </div>\n    <div class=\"col s12 pt-1\">\n      <ul>\n        <li>\n          use\n          <strong>&lt;ngx-select-dropdown&gt;&lt;/ngx-select-dropdown&gt;</strong> in your templates to add select\n          dropdown in your view like below\n        </li>\n        <li>a tag in you html will look like below with all the config</li>\n      </ul>\n\n      <pre class=\"codeBlock\">\n          <strong>&lt;ngx-select-dropdown [config]=\"config\" [options]=\"dropdownOptions\"\n            [(ngModel)]=\"dataModel\" [multiple]=\"true\" &gt;&lt;/ngx-select-dropdown&gt;</strong></pre>\n    </div>\n    <div class=\"col s12 pt-1\">\n      <h4>3.Config</h4>\n      <h6>Input</h6>\n      <ul>\n        <li>\n          <strong>multiple: boolean</strong> - true/false beased if multiple selection required or not Defaults to\n          false\n        </li>\n        <li>\n          <strong>options: Array</strong> - Array of string/objects that are to be the dropdown options.\n        </li>\n        <li>\n          <strong>disabled: boolean</strong> - disabled attribute to disable the dropdown when required.\n        </li>\n        <li>\n          <strong>config: Object </strong> - configuration object.\n        </li>\n      </ul>\n      <pre class=\"codeBlock\">\n          config = {{ '{' }}\n            displayFn:(item: any) => {{'{'}} return item.hello.world; {{'}'}} //a replacement ofr displayKey to support flexible text displaying for each item\n            displayKey:\"description\", //if objects array passed which key to be displayed defaults to description\n            search:true //true/false for the search functionlity defaults to false,\n            height: 'auto' //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear\n            placeholder:'Select' // text to be displayed when no item is selected defaults to Select,\n            customComparator: ()=>{{ '{' }}{{ '}' }} // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,\n            limitTo: 0 // number thats limits the no of options displayed in the UI (if zero, options will not be limited)\n            moreText: 'more' // text to be displayed whenmore than one items are selected like Option 1 + 5 more\n            noResultsFound: 'No results found!' // text to be displayed when no items are found while searching\n            searchPlaceholder:'Search' // label thats displayed in search input,\n            searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys\n            {{ '}' }}</pre>\n      <h6>Output</h6>\n      <ul>\n        <li>\n          <strong>change: Event</strong> - change event when user changes the selected options.\n        </li>\n        <li>\n          <strong>open: Event</strong> - open event when the dropdown toogles on.\n        </li>\n        <li>\n          <strong>close: Event</strong> - close event when the dropdown toogles off.\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"row white content\" *ngIf=\"tab==2\">\n    <div class=\"col s12\">\n      <h3>Demos</h3>\n      <h5>Single Select Dropdown</h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown [instanceId]=\"'dropdown_1'\" (searchChange)=\"searchChange($event)\" tabindex=\"0\"\n            [multiple]=\"false\" [(ngModel)]=\"singleSelect\" [config]=\"config\" [options]=\"options\"></ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Balance of selected user: {{singleSelect? singleSelect?.balance : ''}}</p>\n        </div>\n      </div>\n\n      <h5>Disabled Dropdown</h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown [instanceId]=\"'dropdown_2'\" tabindex=\"0\" [disabled]=\"true\" [multiple]=\"false\"\n            [(ngModel)]=\"singleSelect\" [config]=\"config\" [options]=\"options\">\n          </ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Balance of selected user: {{singleSelect?singleSelect?.balance:''}}</p>\n        </div>\n      </div>\n\n      <h5>Multi Select Dropdown</h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown [instanceId]=\"'dropdown_3'\" tabindex=\"0\" (change)=\"changeValue($event)\" [multiple]=\"true\"\n            [(ngModel)]=\"multiSelect\" [config]=\"config\" [options]=\"options\"></ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Selected Options:-</p>\n          <p style=\"margin: 0;\" *ngFor=\"let user of multiSelect\"><strong>Name:</strong> {{user.name}} ,\n            <strong>Balance:</strong>\n            {{user.balance}}\n          </p>\n        </div>\n      </div>\n\n      <h5>Options as array of string</h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown [instanceId]=\"'dropdown_4'\" tabindex=\"0\" [multiple]=\"true\" [(ngModel)]=\"stringArray\"\n            [options]=\"stringOptions\">\n          </ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Selected Options:-</p>\n          <p style=\"margin: 0;\" *ngFor=\"let user of stringArray\">{{user}}</p>\n        </div>\n      </div>\n\n      <h5>Options as array of Objects</h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown tabindex=\"0\" [multiple]=\"true\" [(ngModel)]=\"objectsArray\" [options]=\"options\"\n            [config]=\"config\"></ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Selected Options:-</p>\n          <p style=\"margin: 0;\" *ngFor=\"let user of objectsArray\">{{user | json}}</p>\n        </div>\n      </div>\n\n      <h5>Already selected options passed as value</h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown tabindex=\"0\" [multiple]=\"true\" [(ngModel)]=\"selectedOptions\" [options]=\"options\"\n            [config]=\"config\"></ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Selected Options:-</p>\n          <p style=\"margin: 0;\" *ngFor=\"let user of selectedOptions\"><strong>Name:</strong> {{user.name}} ,\n            <strong>Balance:</strong>\n            {{user.balance}}\n          </p>\n        </div>\n      </div>\n\n      <h5>Reset </h5>\n      <div class=\"row\">\n        <div class=\"col s12 l6\">\n          <ngx-select-dropdown tabindex=\"0\" [multiple]=\"true\" [(ngModel)]=\"resetOption\" [options]=\"options\"\n            [config]=\"config\"></ngx-select-dropdown>\n        </div>\n        <div class=\"col s12 l6 flow-text\">\n          <p style=\"margin: 0;\">Selected Options:-</p>\n          <p style=\"margin: 0;\" *ngFor=\"let user of resetOption\"><strong>Name:</strong> {{user.name}} ,\n            <strong>Balance:</strong>\n            {{user.balance}}\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <button (click)=\"reset()\" class=\"btn\">Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>";

/***/ }),

/***/ 4952:
/*!*******************************************************************!*\
  !*** ./dist/ngx-select-dropdown/fesm2020/ngx-select-dropdown.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByPipe": () => (/* binding */ FilterByPipe),
/* harmony export */   "LimitToPipe": () => (/* binding */ LimitToPipe),
/* harmony export */   "NgxSelectDropdownComponent": () => (/* binding */ NgxSelectDropdownComponent),
/* harmony export */   "SelectDropDownModule": () => (/* binding */ SelectDropDownModule),
/* harmony export */   "SelectDropDownService": () => (/* binding */ SelectDropDownService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = ["dropdownList"];
const _c1 = ["availableOption"];

const _c2 = function (a0) {
  return {
    active: a0
  };
};

function NgxSelectDropdownComponent_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxSelectDropdownComponent_div_5_div_2_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.changeSearchText($event));
    })("input", function NgxSelectDropdownComponent_div_5_div_2_Template_input_input_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.searchTextChanged());
    })("ngModelChange", function NgxSelectDropdownComponent_div_5_div_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.searchText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("direction", ctx_r2.config.inputDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r2.searchText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.config.searchPlaceholder, "");
  }
}

function NgxSelectDropdownComponent_div_5_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxSelectDropdownComponent_div_5_li_4_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const selected_r11 = restoredCtx.$implicit;
      const i_r12 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.deselectItem(selected_r11, i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const selected_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.config.displayFn ? ctx_r3.config.displayFn(selected_r11) : selected_r11[ctx_r3.config.displayKey] || selected_r11, " ");
  }
}

function NgxSelectDropdownComponent_div_5_hr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
  }
}

const _c3 = function (a0, a1) {
  return {
    active: a0,
    disabled: a1
  };
};

function NgxSelectDropdownComponent_div_5_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxSelectDropdownComponent_div_5_li_7_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const item_r15 = restoredCtx.$implicit;
      const i_r16 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.selectItem(item_r15, i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, ctx_r5.focusedItemIndex == i_r16 && !item_r15.disabled, item_r15.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.config.displayFn ? ctx_r5.config.displayFn(item_r15) : item_r15[ctx_r5.config.displayKey] || item_r15, " ");
  }
}

function NgxSelectDropdownComponent_div_5_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.config.noResultsFound);
  }
}

function NgxSelectDropdownComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxSelectDropdownComponent_div_5_div_2_Template, 5, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxSelectDropdownComponent_div_5_li_4_Template, 5, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxSelectDropdownComponent_div_5_hr_5_Template, 1, 0, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxSelectDropdownComponent_div_5_li_7_Template, 3, 5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "limitTo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgxSelectDropdownComponent_div_5_li_10_Template, 2, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r0.config.height)("top", ctx_r0.top);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.config.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedItems.length > 0 && ctx_r0.availableItems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 12, ctx_r0.availableItems, ctx_r0.searchText, ctx_r0.config.searchOnKey), ctx_r0.config.limitTo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showNotFound);
  }
}

const _c4 = function (a0) {
  return {
    "ngx-disabled": a0
  };
};

const _c5 = function (a0) {
  return {
    "up": a0
  };
};

class SelectDropDownService {
  constructor() {
    this.openDropdownInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeDropdownInstance = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.openInstances = []; // constructor
  }

  isOpen(instanceId) {
    return this.openInstances.indexOf(instanceId) > -1;
  }
  /**
   * @summary: Open a specific dropdown instance based on the instance ID.
   * @param instanceId: Instance id of the dropdown that must be opened.
   */


  openDropdown(instanceId) {
    this.openDropdownInstance.emit(instanceId);
  }
  /**
   * @summary: Close a specific dropdown instance based on the instance ID.
   * @param instanceId: Instance id of the dropdown that must be closed.
   */


  closeDropdown(instanceId) {
    this.closeDropdownInstance.emit(instanceId);
  }

}
/** @nocollapse */


SelectDropDownService.ɵfac = function SelectDropDownService_Factory(t) {
  return new (t || SelectDropDownService)();
};
/** @nocollapse */


SelectDropDownService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SelectDropDownService,
  factory: SelectDropDownService.ɵfac,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDropDownService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * filters an array based on searctext
 */


class FilterByPipe {
  transform(array, searchText, keyName) {
    if (!array || !searchText || !Array.isArray(array)) {
      return array;
    }

    if (typeof array[0] === 'string') {
      return array.filter(item => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
    } // filter array, items which match and return true will be
    // kept, false will be filtered out


    if (!keyName) {
      return array.filter(item => {
        for (const key in item) {
          if (typeof item[key] !== 'object' && item[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true;
          }
        }

        return false;
      });
    } else {
      return array.filter(item => {
        if (typeof item[keyName] !== 'object' && item[keyName].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
          return true;
        }

        return false;
      });
    }
  }

}
/** @nocollapse */


FilterByPipe.ɵfac = function FilterByPipe_Factory(t) {
  return new (t || FilterByPipe)();
};
/** @nocollapse */


FilterByPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filterBy",
  type: FilterByPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterByPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filterBy'
    }]
  }], null, null);
})();

class LimitToPipe {
  transform(array, itemsCount, startIndex = 0) {
    if (!Array.isArray(array) || itemsCount === 0) {
      return array;
    }

    return array.slice(startIndex, startIndex + itemsCount);
  }

}
/** @nocollapse */


LimitToPipe.ɵfac = function LimitToPipe_Factory(t) {
  return new (t || LimitToPipe)();
};
/** @nocollapse */


LimitToPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "limitTo",
  type: LimitToPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitToPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'limitTo'
    }]
  }], null, null);
})();

class NgxSelectDropdownComponent {
  constructor(cdref, _elementRef, dropdownService) {
    this.cdref = cdref;
    this._elementRef = _elementRef;
    this.dropdownService = dropdownService;
    /**
     * Get the required inputs
     */

    this.options = [];
    /**
     * configuration options
     */

    this.config = {};
    /**
     * Whether multiple selection or single selection allowed
     */

    this.multiple = false;
    /**
     * change event when value changes to provide user to handle things in change event
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The search text change event emitter emitted when user type in the search input
     */

    this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when dropdown is open.
     */

    this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when dropdown is open.
     */

    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Toogle the dropdown list
     */

    this.toggleDropdown = false;
    /**
     * Available items for selection
     */

    this.availableItems = [];
    /**
     * Selected Items
     */

    this.selectedItems = [];
    /**
     * Selection text to be Displayed
     */

    this.selectedDisplayText = "Select";
    /**
     * variable to track if clicked inside or outside of component
     */

    this.clickedInside = false;
    /**
     * variable to track keypress event inside and outsid of component
     */

    this.insideKeyPress = false;
    /**
     * variable to track the focused item whenuser uses arrow keys to select item
     */

    this.focusedItemIndex = null;
    /**
     * element to show not found text when not itmes match the search
     */

    this.showNotFound = false;

    this.onChange = () => {// empty
    };

    this.onTouched = () => {// empty
    };

    this.tabindex = 0;
    this.multiple = false;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  /**
   * click listener for host inside this component i.e
   * if many instances are there, this detects if clicked inside
   * this instance
   */


  clickInsideComponent() {
    this.clickedInside = true;
  }
  /**
   * View reference for the dorpdown list
   */


  set dropDownElement(ref) {
    if (ref) {
      // initially setter gets called with undefined
      this.dropdownList = ref;
    }
  }
  /**
   * Event listener for the blur event to hide the dropdown
   */


  blur() {
    if (!this.insideKeyPress) {
      this.toggleDropdown = false;
    }
  }

  focus() {
    /* istanbul ignore else */
    if (!this.disabled) {
      this.toggleSelectDropdown();
    }
  }
  /**
   * click handler on documnent to hide the open dropdown if clicked outside
   */


  clickOutsideComponent() {
    /* istanbul ignore else */
    if (!this.clickedInside) {
      this.toggleDropdown = false;
      this.resetArrowKeyActiveElement(); // clear searh on close

      this.searchText = null;
      this.close.emit();
    }

    this.clickedInside = false;
  }
  /**
   * click handler on documnent to hide the open dropdown if clicked outside
   */


  KeyPressOutsideComponent() {
    /* istanbul ignore else */
    if (!this.insideKeyPress) {
      this.toggleDropdown = false;
      this.resetArrowKeyActiveElement();
    }

    this.insideKeyPress = false;
  }
  /**
   * Event handler for key up and down event and enter press for selecting element
   */


  handleKeyboardEvent($event) {
    this.insideKeyPress = true;
    /* istanbul ignore else */

    if ($event.keyCode === 27 || this.disabled) {
      this.toggleDropdown = false;
      this.insideKeyPress = false;
      return;
    }

    const avaOpts = this.availableOptions.toArray();
    /* istanbul ignore else */

    if ($event.keyCode !== 9 && avaOpts.length === 0 && !this.toggleDropdown) {
      this.toggleDropdown = true;
    } // Arrow Down

    /* istanbul ignore else */


    if ($event.keyCode === 40 && avaOpts.length > 0) {
      this.onArrowKeyDown();
      /* istanbul ignore else */

      if (this.focusedItemIndex >= avaOpts.length) {
        this.focusedItemIndex = 0;
      }

      avaOpts[this.focusedItemIndex].nativeElement.focus();
      $event.preventDefault();
    } // Arrow Up

    /* istanbul ignore else */


    if ($event.keyCode === 38 && avaOpts.length) {
      this.onArrowKeyUp();
      /* istanbul ignore else */

      if (this.focusedItemIndex >= avaOpts.length) {
        this.focusedItemIndex = avaOpts.length - 1;
      }

      avaOpts[this.focusedItemIndex].nativeElement.focus();
      $event.preventDefault();
    } // Enter

    /* istanbul ignore else */


    if ($event.keyCode === 13 && this.focusedItemIndex !== null) {
      const filteredItems = new FilterByPipe().transform(this.availableItems, this.searchText, this.config.searchOnKey);
      this.selectItem(filteredItems[this.focusedItemIndex], this.availableItems.indexOf(filteredItems[this.focusedItemIndex]));
      return false;
    }
  }
  /**
   * Component onInit
   */


  ngOnInit() {
    /* istanbul ignore else */
    if (typeof this.options !== "undefined" && typeof this.config !== "undefined" && Array.isArray(this.options)) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
      this.initDropdownValuesAndOptions();
    }

    this.serviceSubscriptions();
  }

  isVisible() {
    if (!this.dropdownList) {
      return {
        visible: false,
        element: null
      };
    }

    const el = this.dropdownList.nativeElement;

    if (!el) {
      return {
        visible: false,
        element: el
      };
    }

    const rect = el.getBoundingClientRect();
    const topShown = rect.top >= 0;
    const bottomShown = rect.bottom <= window.innerHeight;
    return {
      visible: topShown && bottomShown,
      element: el
    };
  }

  serviceSubscriptions() {
    this.dropdownService.openDropdownInstance.subscribe(instanceId => {
      if (this.instanceId === instanceId) {
        this.toggleDropdown = true;
        this.openStateChange();
        this.resetArrowKeyActiveElement();
      }
    });
    this.dropdownService.closeDropdownInstance.subscribe(instanceId => {
      if (this.instanceId === instanceId) {
        this.toggleDropdown = false;
        this.openStateChange();
        this.resetArrowKeyActiveElement();
      }
    });
  }
  /**
   * after view init to subscribe to available option changes
   */


  ngAfterViewInit() {
    this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  writeValue(value, internal) {
    if (value) {
      if (Array.isArray(value)) {
        if (this.multiple) {
          this.value = value;
        } else if (value.length > 0) {
          this.value = value[0];
        }
      } else {
        this.value = value;
      }
      /* istanbul ignore else */


      if (this.selectedItems.length === 0) {
        if (Array.isArray(value)) {
          this.selectedItems = value;
        } else {
          this.selectedItems.push(value);
        }

        this.initDropdownValuesAndOptions();
      }
    } else {
      this.value = [];
      /* istanbul ignore else */

      if (!internal) {
        this.reset();
      }
    }
    /* istanbul ignore else */


    if (!internal) {
      this.reset();
    }
  }

  reset() {
    if (!this.config) {
      return;
    }

    this.selectedItems = [];
    this.availableItems = [...this.options.sort(this.config.customComparator)];
    this.initDropdownValuesAndOptions();
  }
  /**
   * function sets whether to show items not found text or not
   */


  setNotFoundState() {
    if (this.availableOptions.length === 0) {
      this.showNotFound = true;
    } else {
      this.showNotFound = false;
    }

    this.cdref.detectChanges();
  }
  /**
   * Component onchage i.e when any of the input properties change
   */


  ngOnChanges(changes) {
    if (!this.config) {
      return;
    }

    this.selectedItems = []; // this.searchText = null;

    this.options = this.options || [];
    /* istanbul ignore else */

    if (changes.options) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
    }
    /* istanbul ignore else */


    if (changes.value) {
      /* istanbul ignore else */
      if (JSON.stringify(changes.value.currentValue) === JSON.stringify([]) || changes.value.currentValue === "" || changes.value.currentValue === null) {
        this.availableItems = [...this.options.sort(this.config.customComparator)];
      }
    }

    this.initDropdownValuesAndOptions();
  }
  /**
   * Deselct a selected items
   * @param item:  item to be deselected
   * @param index:  index of the item
   */


  deselectItem(item, index) {
    this.selectedItems.forEach((element, i) => {
      /* istanbul ignore else */
      if (item === element) {
        this.selectedItems.splice(i, 1);
      }
    });
    let sortedItems = [...this.availableItems];
    /* istanbul ignore else */

    if (!this.availableItems.includes(item)) {
      this.availableItems.push(item);
      sortedItems = this.availableItems.sort(this.config.customComparator);
    }

    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...sortedItems];
    /* istanbul ignore else */

    if (!Array.isArray(this.value)) {
      this.value = [];
    }

    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }
  /**
   * Select an item
   * @param item:  item to be selected
   * @param index:  index of the item
   */


  selectItem(item, index) {
    /* istanbul ignore else */
    if (!this.multiple) {
      /* istanbul ignore else */
      if (this.selectedItems.length > 0) {
        this.availableItems.push(this.selectedItems[0]);
      }

      this.selectedItems = [];
      this.toggleDropdown = false;
    }

    this.availableItems.forEach((element, i) => {
      /* istanbul ignore else */
      if (item === element) {
        this.selectedItems.push(item);
        this.availableItems.splice(i, 1);
      }
    });
    /* istanbul ignore else */

    if (this.config.clearOnSelection) {
      this.searchText = null;
    }

    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...this.availableItems];
    this.selectedItems.sort(this.config.customComparator);
    this.availableItems.sort(this.config.customComparator); // this.searchText = null;

    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }
  /**
   * When selected items changes trigger the chaange back to parent
   */


  valueChanged() {
    this.writeValue(this.selectedItems, true); // this.valueChange.emit(this.value);

    this.change.emit({
      value: this.value
    });
    this.setSelectedDisplayText();
  }
  /**
   * Toggle the dropdownlist on/off
   */


  toggleSelectDropdown() {
    this.toggleDropdown = !this.toggleDropdown;
    this.top = "30px";
    this.openStateChange();
    this.resetArrowKeyActiveElement();
    setTimeout(() => {
      const {
        visible,
        element
      } = this.isVisible();

      if (element) {
        this.top = visible ? "30px" : `-${element.getBoundingClientRect().height}px`;
      }
    }, 5);
  }

  openStateChange() {
    if (this.toggleDropdown) {
      this.dropdownService.openInstances.push(this.instanceId);
      this.open.emit();
    } else {
      this.searchText = null;
      this.close.emit();
      this.dropdownService.openInstances.splice(this.dropdownService.openInstances.indexOf(this.instanceId), 1);
    }
  }
  /**
   * The change handler for search text
   */


  searchTextChanged() {
    this.searchChange.emit(this.searchText);
  }

  changeSearchText($event) {
    $event.stopPropagation();
  }
  /**
   * initialize the config and other properties
   */


  initDropdownValuesAndOptions() {
    const config = {
      displayKey: "description",
      height: "auto",
      search: false,
      placeholder: "Select",
      searchPlaceholder: "Search...",
      limitTo: 0,
      customComparator: undefined,
      noResultsFound: "No results found!",
      moreText: "more",
      searchOnKey: null,
      clearOnSelection: false,
      inputDirection: "ltr"
    };
    /* istanbul ignore else */

    if (this.config === "undefined" || Object.keys(this.config).length === 0) {
      this.config = { ...config
      };
    }

    for (const key of Object.keys(config)) {
      this.config[key] = this.config[key] ? this.config[key] : config[key];
    }

    this.config = { ...this.config
    }; // Adding placeholder in config as default param

    this.selectedDisplayText = this.config["placeholder"];
    /* istanbul ignore else */

    if (this.value !== "" && typeof this.value !== "undefined") {
      if (Array.isArray(this.value)) {
        this.selectedItems = this.value;
      } else if (this.value !== "" && this.value !== null) {
        this.selectedItems[0] = this.value;
      } else {
        this.selectedItems = [];
        this.value = [];
      }

      this.selectedItems.forEach(item => {
        const ind = this.availableItems.findIndex(aItem => JSON.stringify(item) === JSON.stringify(aItem));

        if (ind !== -1) {
          this.availableItems.splice(ind, 1);
        }
      });
    }

    this.setSelectedDisplayText();
  }
  /**
   * set the text to be displayed
   */


  setSelectedDisplayText() {
    let text = this.selectedItems[0];
    /* istanbul ignore else */

    if (typeof this.selectedItems[0] === "object") {
      text = this.config.displayFn ? this.config.displayFn(this.selectedItems[0]) : this.selectedItems[0][this.config.displayKey];
    }

    if (this.multiple && this.selectedItems.length > 0) {
      this.selectedDisplayText = this.selectedItems.length === 1 ? text : text + ` + ${this.selectedItems.length - 1} ${this.config.moreText}`;
    } else {
      this.selectedDisplayText = this.selectedItems.length === 0 ? this.config.placeholder : text;
    }
  }
  /**
   * Event handler for arrow key up event thats focuses on a item
   */


  onArrowKeyUp() {
    /* istanbul ignore else */
    if (this.focusedItemIndex === 0) {
      this.focusedItemIndex = this.availableItems.length - 1;
      return;
    }
    /* istanbul ignore else */


    if (this.onArrowKey()) {
      this.focusedItemIndex--;
    }
  }
  /**
   * Event handler for arrow key down event thats focuses on a item
   */


  onArrowKeyDown() {
    /* istanbul ignore else */
    if (this.focusedItemIndex === this.availableItems.length - 1) {
      this.focusedItemIndex = 0;
      return;
    }
    /* istanbul ignore else */


    if (this.onArrowKey()) {
      this.focusedItemIndex++;
    }
  }

  onArrowKey() {
    /* istanbul ignore else */
    if (this.focusedItemIndex === null) {
      this.focusedItemIndex = 0;
      return false;
    }

    return true;
  }
  /**
   * will reset the element that is marked active using arrow keys
   */


  resetArrowKeyActiveElement() {
    this.focusedItemIndex = null;
  }

}
/** @nocollapse */


NgxSelectDropdownComponent.ɵfac = function NgxSelectDropdownComponent_Factory(t) {
  return new (t || NgxSelectDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectDropDownService));
};
/** @nocollapse */


NgxSelectDropdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxSelectDropdownComponent,
  selectors: [["ngx-select-dropdown"]],
  viewQuery: function NgxSelectDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropDownElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.availableOptions = _t);
    }
  },
  hostVars: 1,
  hostBindings: function NgxSelectDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxSelectDropdownComponent_click_HostBindingHandler() {
        return ctx.clickInsideComponent();
      })("blur", function NgxSelectDropdownComponent_blur_HostBindingHandler() {
        return ctx.blur();
      })("focus", function NgxSelectDropdownComponent_focus_HostBindingHandler() {
        return ctx.focus();
      })("click", function NgxSelectDropdownComponent_click_HostBindingHandler() {
        return ctx.clickOutsideComponent();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function NgxSelectDropdownComponent_keydown_HostBindingHandler() {
        return ctx.KeyPressOutsideComponent();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function NgxSelectDropdownComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabindex);
    }
  },
  inputs: {
    _value: "_value",
    options: "options",
    config: "config",
    multiple: "multiple",
    disabled: "disabled",
    instanceId: "instanceId"
  },
  outputs: {
    change: "change",
    searchChange: "searchChange",
    open: "open",
    close: "close"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgxSelectDropdownComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 6,
  vars: 9,
  consts: [[1, "ngx-dropdown-container"], ["type", "button", "tabindex", "-1", 1, "ngx-dropdown-button", 3, "ngClass", "disabled", "click"], [1, "display-text"], [1, "nsdicon-angle-down", 3, "ngClass"], ["class", "ngx-dropdown-list-container", 3, "maxHeight", "top", 4, "ngIf"], [1, "ngx-dropdown-list-container"], ["dropdownList", ""], ["class", "search-container", 4, "ngIf"], [1, "selected-items"], ["class", "selected-item", "tabindex", "-1", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "available-items"], ["class", "available-item", "tabindex", "-1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["name", "search-text", "tabindex", "-1", "autocomplete", "off", 3, "ngModel", "change", "input", "ngModelChange"], [3, "ngClass"], [1, "nsdicon-search"], ["tabindex", "-1", 1, "selected-item", 3, "click"], [1, "nsdicon-close"], ["tabindex", "-1", 1, "available-item", 3, "ngClass", "click"], ["availableOption", ""]],
  template: function NgxSelectDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxSelectDropdownComponent_Template_button_click_1_listener() {
        return ctx.toggleSelectDropdown();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxSelectDropdownComponent_div_5_Template, 11, 16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c4, ctx.disabled))("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.selectedDisplayText, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c5, ctx.toggleDropdown));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDropdown);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, FilterByPipe, LimitToPipe],
  styles: [".ngx-dropdown-container[_ngcontent-%COMP%]{width:100%;position:relative}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #ccc;border-radius:4px;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline;vertical-align:middle}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%]{right:5px;position:relative;float:right;transition:transform .2s ease}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%]:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down.up[_ngcontent-%COMP%]{transform:rotate(180deg);transition:transform .2s ease}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]{width:100%;min-height:30px;padding:5px 10px;background-color:#fff}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]   .display-text[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:white;position:absolute;box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:1px solid #26a69a}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;transition:transform .2s ease-out;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.selected-items[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{background-color:#337ab7;color:#fff;margin-bottom:2px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.selected-items[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   .nsdicon-close[_ngcontent-%COMP%]{font-weight:700;font-size:large}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.available-items[_ngcontent-%COMP%]   .available-item.active[_ngcontent-%COMP%]{background-color:#337ab7;color:#fff}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:inherit;cursor:pointer;display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-disabled[_ngcontent-%COMP%]{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSelectDropdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "ngx-select-dropdown",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgxSelectDropdownComponent),
        multi: true
      }],
      template: "<div class=\"ngx-dropdown-container\">\n    <button type=\"button\" tabindex=\"-1\" class=\"ngx-dropdown-button\" [ngClass]=\"{ 'ngx-disabled': disabled }\"\n        [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\n        <span class=\"display-text\">{{ selectedDisplayText }} </span>\n        <span class=\"nsdicon-angle-down\" [ngClass]=\"{'up': toggleDropdown }\"></span>\n    </button>\n    <div #dropdownList class=\"ngx-dropdown-list-container\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\"\n        [style.top]=\"top\">\n        <div class=\"search-container\" *ngIf=\"config.search\">\n            <input (change)=\"changeSearchText($event)\" [style.direction]=\"config.inputDirection\" name=\"search-text\"\n                (input)=\"searchTextChanged()\" [(ngModel)]=\"searchText\" tabindex=\"-1\" autocomplete=\"off\" />\n            <label [ngClass]=\"{ active: searchText }\">\n                <span class=\"nsdicon-search\"></span>\n                {{ config.searchPlaceholder }}</label>\n        </div>\n        <!-- <div class=\"select-options\">\n            <div class=\"select-all\">Select all</div>\n            <div class=\"clear-all\">Clear all</div>\n        </div> -->\n        <ul class=\"selected-items\">\n            <li class=\"selected-item\" tabindex=\"-1\" *ngFor=\"let selected of selectedItems; let i = index\"\n                (click)=\"deselectItem(selected, i)\">\n                <span class=\"nsdicon-close\">x</span>\n                <span>\n                    {{\n                    config.displayFn\n                    ? config.displayFn(selected)\n                    : selected[config.displayKey] || selected\n                    }}\n                </span>\n            </li>\n        </ul>\n        <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n        <ul class=\"available-items\">\n            <li class=\"available-item\" #availableOption *ngFor=\"\n            let item of availableItems\n              | filterBy: searchText:config.searchOnKey\n              | limitTo: config.limitTo;\n            let i = index\n          \" tabindex=\"-1\" [ngClass]=\"{\n            active: focusedItemIndex == i && !item.disabled,\n            disabled: item.disabled\n          }\" (click)=\"selectItem(item, i)\">\n                {{\n                config.displayFn\n                ? config.displayFn(item)\n                : item[config.displayKey] || item\n                }}\n            </li>\n            <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\n        </ul>\n    </div>\n</div>",
      styles: [".ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;user-select:none;border:1px solid #ccc;border-radius:4px;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right;transition:transform .2s ease}.ngx-dropdown-container button .nsdicon-angle-down:before{border-style:solid;border-width:.1em .1em 0 0;content:\"\";display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container button .nsdicon-angle-down.up{transform:rotate(180deg);transition:transform .2s ease}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:5px 10px;background-color:#fff}.ngx-dropdown-container .ngx-dropdown-button .display-text{display:inline-block;width:calc(100% - 20px)}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:white;position:absolute;box-shadow:5px 5px 5px #00000036;overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all .3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #26a69a}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;transition:transform .2s ease-out;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items .selected-item{background-color:#337ab7;color:#fff;margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items .selected-item .nsdicon-close{font-weight:700;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items .available-item.active{background-color:#337ab7;color:#fff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .ngx-disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: SelectDropDownService
    }];
  }, {
    _value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    instanceId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    searchChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    open: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    close: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    availableOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ["availableOption"]
    }],
    clickInsideComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["click"]
    }],
    dropDownElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["dropdownList"]
    }],
    blur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["blur"]
    }],
    focus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["focus"]
    }],
    clickOutsideComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["document:click"]
    }],
    KeyPressOutsideComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["document:keydown"]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.tabindex']
    }],
    handleKeyboardEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();

class SelectDropDownModule {}
/** @nocollapse */


SelectDropDownModule.ɵfac = function SelectDropDownModule_Factory(t) {
  return new (t || SelectDropDownModule)();
};
/** @nocollapse */


SelectDropDownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SelectDropDownModule,
  declarations: [NgxSelectDropdownComponent, FilterByPipe, LimitToPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
  exports: [NgxSelectDropdownComponent, FilterByPipe, LimitToPipe]
});
/** @nocollapse */

SelectDropDownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDropDownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxSelectDropdownComponent, FilterByPipe, LimitToPipe],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
      exports: [NgxSelectDropdownComponent, FilterByPipe, LimitToPipe],
      providers: []
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-select-dropdown
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(873)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map