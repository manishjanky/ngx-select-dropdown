import { ArrayFilterPipe } from './pipes/filter-by.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SelectDropDownComponent } from "./components/ngx-select-dropdown-component/ngx-select-dropdown.component";

@NgModule({
  declarations: [SelectDropDownComponent, LimitToPipe, ArrayFilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [SelectDropDownComponent, LimitToPipe, ArrayFilterPipe],
  providers: [],
  bootstrap: []
})
export class SelectDropDownModule { }
