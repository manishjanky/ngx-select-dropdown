import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "ngx-select-dropdown",
  templateUrl: "./ngx-select-dropdown.component.html",
  styleUrls: ["./ngx-select-dropdown.component.scss"]
})
export class SelectDropDownComponent implements OnInit {
  /*Get the required inputs*/
  @Input() options: any;
  @Input() multiple: boolean = false;
  public toggleDropdown: boolean = false;
  public availableItems: any = [];
  public selectedItems: any = [];
  public selectedDisplayText: string = "Select";
  constructor() {}

  public ngOnInit() {
    if (typeof this.options === "undefined" || this.options.length == 0) {
      throw Error(
        "Not Defined: ngx-select-dropdown requires options. But got undefined."
      );
    }
    this.availableItems = this.options.sort();
  }
  public deselectItem(item: string, index: Number) {
    this.selectedItems.splice(index, 1);
    this.availableItems.push(item);
    this.availableItems.sort();
    this.setSelectedDisplayText();
  }
  public selectItem(item: string, index: Number) {
    if (this.multiple) {
      this.availableItems.splice(index, 1);
    } else {
      this.selectedItems = [];
    }
    this.selectedItems.push(item);
    this.selectedItems.sort();
    this.setSelectedDisplayText();
  }

  setSelectedDisplayText() {
    if (this.multiple && this.selectedItems.length > 0) {
      this.selectedDisplayText = this.selectedItems.length + " selected";
    } else {
      this.selectedDisplayText =
        this.selectedItems.length === 0 ? "Select" : this.selectedItems[0];
    }
  }
  public toggleSelectDropdown() {
    this.toggleDropdown = !this.toggleDropdown;
  }
}
