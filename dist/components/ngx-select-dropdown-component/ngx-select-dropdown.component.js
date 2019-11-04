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
import { ArrayFilterPipe } from './../../pipes/filter-by.pipe';
import { Component, Input, EventEmitter, Output, HostListener, ViewChildren, ElementRef, QueryList, ChangeDetectorRef, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
var SelectDropDownComponent = /** @class */ (function () {
    function SelectDropDownComponent(cdref, _elementRef) {
        this.cdref = cdref;
        this._elementRef = _elementRef;
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
        this.change = new EventEmitter();
        /**
         * The search text change event emitter emitted when user type in the search input
         */
        this.searchChange = new EventEmitter();
        /**
         * Event emitted when dropdown is open.
         */
        this.open = new EventEmitter();
        /**
         * Event emitted when dropdown is open.
         */
        this.close = new EventEmitter();
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
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
        this.multiple = false;
    }
    SelectDropDownComponent_1 = SelectDropDownComponent;
    Object.defineProperty(SelectDropDownComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * click listener for host inside this component i.e
     * if many instances are there, this detects if clicked inside
     * this instance
     */
    SelectDropDownComponent.prototype.clickInsideComponent = function () {
        this.clickedInside = true;
    };
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    SelectDropDownComponent.prototype.clickOutsideComponent = function () {
        if (!this.clickedInside) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
            this.close.emit();
        }
        this.clickedInside = false;
    };
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    SelectDropDownComponent.prototype.KeyPressOutsideComponent = function () {
        if (!this.insideKeyPress) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
        }
        this.insideKeyPress = false;
    };
    /**
     * Event handler for key up and down event and enter press for selecting element
     * @param event
     */
    SelectDropDownComponent.prototype.handleKeyboardEvent = function ($event) {
        this.insideKeyPress = true;
        if ($event.keyCode === 27 || this.disabled) {
            this.toggleDropdown = false;
            this.insideKeyPress = false;
            return;
        }
        var avaOpts = this.availableOptions.toArray();
        if (avaOpts.length === 0 && !this.toggleDropdown) {
            this.toggleDropdown = true;
        }
        // Arrow Down
        if ($event.keyCode === 40 && avaOpts.length > 0) {
            this.onArrowKeyDown();
            /* istanbul ignore else */
            if (this.focusedItemIndex >= avaOpts.length) {
                this.focusedItemIndex = 0;
            }
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Arrow Up
        if ($event.keyCode === 38 && avaOpts.length) {
            this.onArrowKeyUp();
            /* istanbul ignore else */
            if (this.focusedItemIndex >= avaOpts.length) {
                this.focusedItemIndex = avaOpts.length - 1;
            }
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Enter
        if ($event.keyCode === 13 && this.focusedItemIndex !== null) {
            var filteredItems = new ArrayFilterPipe().transform(this.availableItems, this.searchText, this.config.searchOnKey);
            this.selectItem(filteredItems[this.focusedItemIndex], this.availableItems.indexOf(filteredItems[this.focusedItemIndex]));
            return false;
        }
    };
    /**
     * Component onInit
     */
    SelectDropDownComponent.prototype.ngOnInit = function () {
        if (typeof this.options !== "undefined" && Array.isArray(this.options)) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
            this.initDropdownValuesAndOptions();
        }
    };
    /**
     * after view init to subscribe to available option changes
     */
    SelectDropDownComponent.prototype.ngAfterViewInit = function () {
        this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
    };
    SelectDropDownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectDropDownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectDropDownComponent.prototype.writeValue = function (value, internal) {
        if (value) {
            if (Array.isArray(value)) {
                if (this.multiple) {
                    this.value = value;
                }
                else {
                    this.value = value[0];
                }
            }
            else {
                this.value = value;
            }
            /* istanbul ignore else */
            if (this.selectedItems.length === 0) {
                if (Array.isArray(value)) {
                    this.selectedItems = value;
                }
                else {
                    this.selectedItems.push(value);
                }
                this.initDropdownValuesAndOptions();
            }
        }
        else {
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
    };
    SelectDropDownComponent.prototype.reset = function () {
        this.selectedItems = [];
        this.initDropdownValuesAndOptions();
    };
    /**
     * function sets whether to show items not found text or not
     */
    SelectDropDownComponent.prototype.setNotFoundState = function () {
        if (this.availableOptions.length === 0) {
            this.showNotFound = true;
        }
        else {
            this.showNotFound = false;
        }
        this.cdref.detectChanges();
    };
    /**
     * Component onchage i.e when any of the input properties change
     * @param changes
     */
    SelectDropDownComponent.prototype.ngOnChanges = function (changes) {
        this.selectedItems = [];
        this.searchText = null;
        this.options = this.options || [];
        if (changes.options) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
        }
        if (changes.value && JSON.stringify(changes.value.currentValue) === JSON.stringify([])) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
        }
        this.initDropdownValuesAndOptions();
    };
    /**
     * Deselct a selected items
     * @param item:  item to be deselected
     * @param index:  index of the item
     */
    SelectDropDownComponent.prototype.deselectItem = function (item, index) {
        var _this = this;
        this.selectedItems.forEach(function (element, i) {
            if (item === element) {
                _this.selectedItems.splice(i, 1);
            }
        });
        if (!this.availableItems.includes(item)) {
            this.availableItems.push(item);
            this.availableItems.sort(this.config.customComparator);
        }
        this.selectedItems = this.selectedItems.slice();
        this.availableItems = this.availableItems.slice();
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * Select an item
     * @param item:  item to be selected
     * @param index:  index of the item
     */
    SelectDropDownComponent.prototype.selectItem = function (item, index) {
        var _this = this;
        if (!this.multiple) {
            if (this.selectedItems.length > 0) {
                this.availableItems.push(this.selectedItems[0]);
            }
            this.selectedItems = [];
            this.toggleDropdown = false;
        }
        this.availableItems.forEach(function (element, i) {
            if (item === element) {
                _this.selectedItems.push(item);
                _this.availableItems.splice(i, 1);
            }
        });
        this.selectedItems = this.selectedItems.slice();
        this.availableItems = this.availableItems.slice();
        this.selectedItems.sort(this.config.customComparator);
        this.availableItems.sort(this.config.customComparator);
        // this.searchText = null;
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * Toggle all items
     */
    SelectDropDownComponent.prototype.toggleAllItems = function () {
        // Enable this option only for multiple selection
        if (this.multiple) {
            if (this.selectedItems.length !== this.options.length) {
                this.selectedItems = this.options.slice();
                this.availableItems = [];
            }
            else {
                this.availableItems = this.options.slice();
                this.selectedItems = [];
            }
            this.selectedItems.sort(this.config.customComparator);
            this.availableItems.sort(this.config.customComparator);
            // this.writeValue(this.selectedItems);
            this.valueChanged();
            this.resetArrowKeyActiveElement();
        }
    };
    // DeselectAll items
    SelectDropDownComponent.prototype.removeAllItems = function () {
        this.availableItems = this.options.slice();
        this.selectedItems = [];
        this.selectedItems.sort(this.config.customComparator);
        this.availableItems.sort(this.config.customComparator);
        // this.writeValue(this.selectedItems);
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * When selected items changes trigger the chaange back to parent
     */
    SelectDropDownComponent.prototype.valueChanged = function () {
        this.writeValue(this.selectedItems, true);
        // this.valueChange.emit(this.value);
        this.change.emit({ value: this.value });
        this.setSelectedDisplayText();
    };
    /**
     * Toggle the dropdownlist on/off
     */
    SelectDropDownComponent.prototype.toggleSelectDropdown = function () {
        this.toggleDropdown = !this.toggleDropdown;
        if (this.toggleDropdown) {
            this.open.emit();
        }
        else {
            this.close.emit();
        }
        this.resetArrowKeyActiveElement();
    };
    /**
     * initialize the config and other properties
     */
    SelectDropDownComponent.prototype.initDropdownValuesAndOptions = function () {
        var _this = this;
        var config = {
            displayKey: "description",
            height: 'auto',
            search: false,
            placeholder: 'Select',
            searchPlaceholder: 'Search',
            limitTo: this.options.length,
            customComparator: undefined,
            noResultsFound: 'No results found!',
            moreText: 'items',
            searchOnKey: null,
            selectAll: true,
            selectAllText: "Select All"
        };
        if (this.config === "undefined" || Object.keys(this.config).length === 0) {
            this.config = __assign({}, config);
        }
        for (var _i = 0, _a = Object.keys(config); _i < _a.length; _i++) {
            var key = _a[_i];
            this.config[key] = this.config[key] ? this.config[key] : config[key];
        }
        // Adding placeholder in config as default param
        this.selectedDisplayText = this.config["placeholder"];
        if (this.value !== "" && typeof this.value !== "undefined") {
            if (Array.isArray(this.value)) {
                this.selectedItems = this.value;
            }
            else {
                this.selectedItems[0] = this.value;
            }
            this.selectedItems.forEach(function (item) {
                var ind = _this.availableItems.findIndex(function (aItem) { return JSON.stringify(item) === JSON.stringify(aItem); });
                if (ind !== -1) {
                    _this.availableItems.splice(ind, 1);
                }
            });
        }
        this.setSelectedDisplayText();
    };
    /**
     * set the text to be displayed
     */
    SelectDropDownComponent.prototype.setSelectedDisplayText = function () {
        var text = this.selectedItems[0];
        if (typeof this.selectedItems[0] === "object") {
            text = this.selectedItems[0][this.config.displayKey];
        }
        if (this.multiple && this.selectedItems.length > 0) {
            this.selectedDisplayText = this.selectedItems.length === 1 ? text : this.selectedItems.length + " " + this.config.moreText;
        }
        else {
            this.selectedDisplayText = this.selectedItems.length === 0 ? this.config.placeholder : text;
        }
    };
    /**
     * Event handler for arrow key up event thats focuses on a item
     */
    SelectDropDownComponent.prototype.onArrowKeyUp = function () {
        if (this.focusedItemIndex === 0) {
            this.focusedItemIndex = this.availableItems.length - 1;
            return;
        }
        if (this.onArrowKey()) {
            this.focusedItemIndex--;
        }
    };
    /**
     * Event handler for arrow key down event thats focuses on a item
     */
    SelectDropDownComponent.prototype.onArrowKeyDown = function () {
        if (this.focusedItemIndex === this.availableItems.length - 1) {
            this.focusedItemIndex = 0;
            return;
        }
        if (this.onArrowKey()) {
            this.focusedItemIndex++;
        }
    };
    SelectDropDownComponent.prototype.onArrowKey = function () {
        if (this.focusedItemIndex === null) {
            this.focusedItemIndex = 0;
            return false;
        }
        return true;
    };
    /**
     * will reset the element that is marked active using arrow keys
     */
    SelectDropDownComponent.prototype.resetArrowKeyActiveElement = function () {
        this.focusedItemIndex = null;
    };
    /**
     * The change handler for search text
     */
    SelectDropDownComponent.prototype.searchTextChanged = function () {
        this.searchChange.emit(this.searchText);
    };
    var SelectDropDownComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectDropDownComponent.prototype, "_value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectDropDownComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectDropDownComponent.prototype, "config", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectDropDownComponent.prototype, "multiple", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectDropDownComponent.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SelectDropDownComponent.prototype, "change", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SelectDropDownComponent.prototype, "searchChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SelectDropDownComponent.prototype, "open", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SelectDropDownComponent.prototype, "close", void 0);
    __decorate([
        ViewChildren('availableOption'),
        __metadata("design:type", QueryList)
    ], SelectDropDownComponent.prototype, "availableOptions", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SelectDropDownComponent.prototype, "clickInsideComponent", null);
    __decorate([
        HostListener('document:click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SelectDropDownComponent.prototype, "clickOutsideComponent", null);
    __decorate([
        HostListener('document:keydown'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SelectDropDownComponent.prototype, "KeyPressOutsideComponent", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SelectDropDownComponent.prototype, "handleKeyboardEvent", null);
    SelectDropDownComponent = SelectDropDownComponent_1 = __decorate([
        Component({
            selector: "ngx-select-dropdown",
            template: "\n    <div class=\"ngx-dropdown-container\" tabindex=\"0\">\n      <button\n        type=\"button\"\n        class=\"ngx-dropdown-button\"\n        [ngClass]=\"{ disabled: disabled }\"\n        [disabled]=\"disabled\"\n        (click)=\"toggleSelectDropdown()\"\n      >\n        <span>{{ selectedDisplayText }} </span>\n        <span class=\"nsdicon-angle-down\"></span>\n      </button>\n      <div\n        class=\"ngx-dropdown-list-container\"\n        *ngIf=\"toggleDropdown\"\n        [style.maxHeight]=\"config.height\"\n      >\n        <div\n          class=\"select-all\"\n          *ngIf=\"config.selectAll && multiple\"\n          (click)=\"toggleAllItems()\"\n        >\n          <label>\n            <input\n              type=\"checkbox\"\n              [checked]=\"selectedItems.length == options.length\"\n            />\n            {{ config.selectAllText }}\n          </label>\n        </div>\n        <div class=\"search-container\" *ngIf=\"config.search\">\n          <input\n            name=\"search-text\"\n            (input)=\"searchTextChanged()\"\n            [(ngModel)]=\"searchText\"\n            autocomplete=\"off\"\n          />\n          <label [ngClass]=\"{ active: searchText }\">\n            <span class=\"nsdicon-search\"></span>\n            {{ config.searchPlaceholder }}</label\n          >\n        </div>\n        <ul class=\"selected-items\">\n          <li\n            tabindex=\"-1\"\n            *ngFor=\"let selected of selectedItems; let i = index\"\n            (click)=\"deselectItem(selected, i)\"\n          >\n            <span class=\"nsdicon-close\"></span>\n            <span> {{ selected[config.displayKey] || selected }}</span>\n          </li>\n        </ul>\n        <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n        <ul class=\"available-items\">\n          <li\n            #availableOption\n            *ngFor=\"\n              let item of availableItems\n                | filterBy: searchText:config.searchOnKey\n                | limitTo: config.limitTo;\n              let i = index\n            \"\n            tabindex=\"-1\"\n            [ngClass]=\"{ active: focusedItemIndex == i }\"\n            (click)=\"selectItem(item, i)\"\n          >\n            {{ item[config.displayKey] || item }}\n          </li>\n          <li *ngIf=\"showNotFound\">{{ config.noResultsFound }}</li>\n        </ul>\n      </div>\n    </div>\n  ",
            styles: ["\n    .ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;border:1px solid #ccc;border-radius:4px;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.ngx-dropdown-container button span{vertical-align:middle;float:left}.ngx-dropdown-container button .nsdicon-angle-down{position:relative;font-size:large;float:right}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:5px 10px 5px 10px;background-color:white}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,0.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:white;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all 0.3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #26a69a}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform 0.2s ease-out;transition:-webkit-transform 0.2s ease-out;transition:transform 0.2s ease-out;transition:transform 0.2s ease-out, -webkit-transform 0.2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{background-color:#337ab7;color:white;margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#ffff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}.ngx-dropdown-container .select-all{margin:10px 5px 0 5px}.ngx-dropdown-container .select-all input[type=\"checkbox\"]{margin-right:10px}\n  "],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return SelectDropDownComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef])
    ], SelectDropDownComponent);
    return SelectDropDownComponent;
}());
export { SelectDropDownComponent };
//# sourceMappingURL=ngx-select-dropdown.component.js.map