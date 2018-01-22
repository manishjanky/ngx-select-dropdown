import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SelectDropDownComponent } from "./components/ngx-select-dropdown-component/ngx-select-dropdown.component";

@NgModule({
  declarations: [ SelectDropDownComponent ],
  imports: [ CommonModule ],
  exports: [ SelectDropDownComponent ],
  providers: [],
  bootstrap: []})
export class SelectDropDownModule {}
