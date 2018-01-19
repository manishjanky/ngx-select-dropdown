import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "ngx-select-dropdown",
  templateUrl: "./ngx-select-dropdown.component.html",
  styleUrls: ["./ngx-select-dropdown.component.scss"]
})
export class SelectDropDownComponent implements OnInit {
  /*Get the required inputs*/
  @Input() options:any;
  @Input() multiple:boolean;
  public toggleDropdown: boolean;
  public availableItems:any = [];
  public selectedItems:any = [];
  constructor() {
  }

  public ngOnInit() {
    if(typeof this.options === 'undefined' || this.options.length == 0){
      throw Error('Not Defined: ngx-select-dropdown requires options. But got undefined.')
    }
    this.availableItems = this.options.sort();
  }
  public deselectItem(item:string,index:Number){
    this.selectedItems.splice(index,1);
    this.availableItems.push(item);
    this.availableItems.sort();
  }
  public selectItem(item:string,index:Number){
    this.selectedItems.push(item);
    this.availableItems.splice(index,1);
    this.selectedItems.sort();
  }
}
