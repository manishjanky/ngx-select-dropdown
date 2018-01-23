import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener
} from "@angular/core";

@Component({
  selector: "ngx-select-dropdown",
  templateUrl: "./ngx-select-dropdown.component.html",
  styleUrls: ["./ngx-select-dropdown.component.scss"],
  host: {
    "(document:click)": "onClick($event)"
  }
})
export class SelectDropDownComponent implements OnInit {
  /*Get the required inputs*/
  @Input() public options: any;

  /* configuration options */
  @Input() public config: any;

  /* Whether multiple selection or single selection allowed*/
  @Input() public multiple: boolean = false;

  /* Value */
  @Input() public value: any;

  /* event when value changes */
  @Output() public valueChange = new EventEmitter();

  public toggleDropdown: boolean = false;

  /* Available items for selection*/
  public availableItems: any = [];

  /* Selected Items*/
  public selectedItems: any = [];

  /* Selction text to be Displayed*/
  public selectedDisplayText: string = "Select";

  constructor() {
    this.multiple = false;
  }

  public ngOnInit() {
    if (typeof this.options === "undefined" || this.options.length === 0) {
      throw Error(
        "Not Defined: ngx-select-dropdown requires options. But got empty or undefined."
      );
    }
    this.availableItems = JSON.parse(JSON.stringify(this.options.sort()));
    this.initDropdownValuesAndOptions();
  }

  public deselectItem(item: string, index: number, $event: Event) {
    this.selectedItems.splice(index, 1);
    this.availableItems.push(item);
    this.availableItems.sort();
    this.valueChanged($event);
  }

  public selectItem(item: string, index: number, $event: Event) {
    if (!this.multiple) {
      if (this.selectedItems.length > 0) {
        this.availableItems.push(this.selectedItems[0]);
      }
      this.selectedItems = [];
    }
    this.availableItems.splice(index, 1);
    this.selectedItems.push(item);
    this.selectedItems.sort();
    this.availableItems.sort();
    this.valueChanged($event);
  }

  public valueChanged($event: Event) {
    this.value = this.selectedItems;
    this.valueChange.emit(this.value);
    this.setSelectedDisplayText();
    $event.stopPropagation();
  }

  public toggleSelectDropdown($event: any) {
    this.toggleDropdown = !this.toggleDropdown;
    $event.stopPropagation();
  }
  private initDropdownValuesAndOptions() {
    if (typeof this.config === "undefined") {
      this.config = {
        displayKey: "description"
      };
    }
    if (this.value !== "" && typeof this.value !== "undefined") {
      this.selectedItems = this.value;
      this.value.forEach((item: any) => {
        this.availableItems.splice(this.availableItems.indexOf(item), 1);
      });
      this.setSelectedDisplayText();
    }
  }

  private onClick($event: Event) {
    this.toggleDropdown = false;
  }

  private setSelectedDisplayText() {
    if (this.multiple && this.selectedItems.length > 0) {
      this.selectedDisplayText = this.selectedItems.length + " selected";
    } else {
      this.selectedDisplayText =
        this.selectedItems.length === 0 ? "Select" : this.selectedItems[0];
      if (typeof this.selectedDisplayText === "object") {
        this.selectedDisplayText = this.selectedItems[0][
          this.config.displayKey
        ];
      }
    }
  }
}
