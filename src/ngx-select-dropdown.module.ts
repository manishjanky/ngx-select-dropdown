import { LimitToPipe } from './pipes/limit-to.pipe';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SelectDropDownComponent } from "./components/ngx-select-dropdown-component/ngx-select-dropdown.component";

@NgModule({
  declarations: [SelectDropDownComponent, LimitToPipe],
  imports: [CommonModule, FormsModule],
  exports: [SelectDropDownComponent, LimitToPipe],
  providers: [],
  bootstrap: []
})
export class SelectDropDownModule { }
