import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener
} from "@angular/core";
import { Subject } from "rxjs/Subject";
import "rxjs/Rx";

@Component({
  selector: "ngx-select-dropdown",
  templateUrl: "./ngx-select-dropdown.component.html",
  styleUrls: ["./ngx-select-dropdown.component.scss"],
  host: {
    "(document:click)": "onClick($event)"
  }
})
export class SelectDropDownComponent implements OnInit {
  /**
   * Get the required inputs
   */
  @Input() public options: any;

  /**
   * configuration options
   */
  @Input() public config: any;

  /**
   * Whether multiple selection or single selection allowed
   */
  @Input() public multiple: boolean = false;

  /**
   * Value
   */
  @Input() public value: any;

  /**
   * event when value changes to update in the UI
   */
  @Output() public valueChange: EventEmitter<any> = new EventEmitter();
  /**
   * change event when value changes to provide user to handle things in change event
   */
  @Output() public change: EventEmitter<any> = new EventEmitter();

  /**
   * Toogle the dropdown list
   */
  public toggleDropdown: boolean = false;

  /**
   * Available items for selection
   */
  public availableItems: any = [];

  /**
   * Selected Items
   */
  public selectedItems: any = [];

  /**
   * Selction text to be Displayed
   */
  public selectedDisplayText: string = "Select";

  /**
   * Search text
   */
  public searchText: string;

  /**
   * Observable for debouncing the search text change (300ms)
   */
  public searchTextChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.multiple = false;
    this.searchTextChanged
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((searchText) => {
        this.searchText = searchText;
        this.search();
      });
  }

  /**
   * Component onInit
   */
  public ngOnInit() {
    if (typeof this.options === "undefined" || this.options.length === 0) {
      throw Error(
        "Not Defined: ngx-select-dropdown requires options. But got empty or undefined."
      );
    }
    this.availableItems = JSON.parse(JSON.stringify(this.options.sort()));
    this.initDropdownValuesAndOptions();
  }

  /**
   * When user changes search changes trigger the model change
   */
  public changed($event: any) {
    this.searchTextChanged.next($event);
  }

  /**
   * Deselct a selected item
   */
  public deselectItem(item: any, index: number, $event: Event) {
    this.selectedItems.splice(index, 1);
    if (!this.availableItems.includes(item)) {
      this.availableItems.push(item);
      this.availableItems.sort();
    }
    this.valueChanged($event);
  }

  /**
   * Select an item
   */
  public selectItem(item: string, index: number, $event: Event) {
    if (!this.multiple) {
      if (this.selectedItems.length > 0) {
        this.availableItems.push(this.selectedItems[0]);
      }
      this.selectedItems = [];
      this.toggleDropdown = false;
    }
    this.availableItems.splice(index, 1);
    this.selectedItems.push(item);
    this.selectedItems.sort();
    this.availableItems.sort();
    this.valueChanged($event);
  }

  /**
   * When selected items changes trigger the chaange back to parent
   */
  public valueChanged($event: Event) {
    this.value = this.selectedItems;
    this.valueChange.emit(this.value);
    this.change.emit({ value: this.value });
    this.setSelectedDisplayText();
    $event.stopPropagation();
  }

  /**
   * Toggle the dropdownlist on/off
   */
  public toggleSelectDropdown($event: any) {
    this.toggleDropdown = !this.toggleDropdown;
    $event.stopPropagation();
  }

  /**
   * search for an item in the available items list
   */
  public search() {
    const searchResults: any = [];
    if (this.searchText === "") {
      this.availableItems = this.options;
      // exclude selectedItems from availableItems
      this.availableItems = this.availableItems.filter((item: any) => !this.selectedItems.includes(item));
      return;
    }
    for (const item of this.options) {
      if (typeof item !== "object") {
        if (item.indexOf(this.searchText) > -1) {
          searchResults.push(item);
        }
        continue;
      }
      for (const key in item) {
        if (item[key] && item[key].toString().indexOf(this.searchText) > -1) {
          if (!searchResults.includes(item)) {
            // item is duplicated upon finding the same search text in the same object fields
            searchResults.push(item);
          }
        }
      }
    }
    this.availableItems = searchResults;
    // exclude selectedItems from availableItems
    this.availableItems = this.availableItems.filter((item: any) => !this.selectedItems.includes(item));
  }

  /**
   * Avoid closing the dropdown list when selecting items
   */
  public clickHandler($event: any) {
    $event.stopPropagation();
  }

  /**
   * initialize the config and other properties
   */
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

  /**
   * Close the dropdown on click on the document
   */
  private onClick($event: Event) {
    this.toggleDropdown = false;
  }

  /**
   * set the text to be displayed
   */
  private setSelectedDisplayText() {
    let text: string = this.selectedItems[0];
    if (typeof this.selectedItems[0] === "object") {
      text = this.selectedItems[0][this.config.displayKey];
    }
    if (this.multiple && this.selectedItems.length > 0) {
      this.selectedDisplayText = this.selectedItems.length === 1 ? text :
        text + ` + ${this.selectedItems.length - 1} more`;
    } else {
      this.selectedDisplayText = this.selectedItems.length === 0 ? "Select" : text;
    }
  }
}
