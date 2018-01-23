
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SelectDropDownModule} from 'ngx-select-dropdown';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
