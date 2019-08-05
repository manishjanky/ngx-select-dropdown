import { ArrayFilterPipe } from './pipes/filter-by.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SelectDropDownComponent } from "./components/ngx-select-dropdown-component/ngx-select-dropdown.component";
var SelectDropDownModule = /** @class */ (function () {
    function SelectDropDownModule() {
    }
    SelectDropDownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SelectDropDownComponent, LimitToPipe, ArrayFilterPipe],
                    imports: [CommonModule, FormsModule],
                    exports: [SelectDropDownComponent, LimitToPipe],
                    providers: [],
                    bootstrap: []
                },] },
    ];
    /** @nocollapse */
    SelectDropDownModule.ctorParameters = function () { return []; };
    return SelectDropDownModule;
}());
export { SelectDropDownModule };
//# sourceMappingURL=ngx-select-dropdown.module.js.map