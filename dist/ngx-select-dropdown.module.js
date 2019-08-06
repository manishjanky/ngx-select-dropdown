var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ArrayFilterPipe } from './pipes/filter-by.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SelectDropDownComponent } from "./components/ngx-select-dropdown-component/ngx-select-dropdown.component";
var SelectDropDownModule = /** @class */ (function () {
    function SelectDropDownModule() {
    }
    SelectDropDownModule = __decorate([
        NgModule({
            declarations: [SelectDropDownComponent, LimitToPipe, ArrayFilterPipe],
            imports: [CommonModule, FormsModule],
            exports: [SelectDropDownComponent, LimitToPipe],
            providers: [],
            bootstrap: []
        })
    ], SelectDropDownModule);
    return SelectDropDownModule;
}());
export { SelectDropDownModule };
//# sourceMappingURL=ngx-select-dropdown.module.js.map