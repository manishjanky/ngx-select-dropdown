import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDropDownComponent } from "./components/ngx-select-dropdown-component/ngx-select-dropdown.component";

@NgModule({
  declarations: [ SelectDropDownComponent ],
  imports: [ CommonModule, FormsModule ],
  exports: [ SelectDropDownComponent ],
  providers: [],
  bootstrap: []})
export class SelectDropDownModule {}
