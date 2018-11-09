import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
  OnChanges, SimpleChanges, ViewChildren, ElementRef, QueryList, AfterViewInit, ChangeDetectorRef
} from "@angular/core";

@Component({
  selector: "ngx-select-dropdown",
  templateUrl: "./ngx-select-dropdown.component.html",
  styleUrls: ["./ngx-select-dropdown.component.scss"],
})
export class SelectDropDownComponent implements OnInit, OnChanges, AfterViewInit {
  /**
   * Get the required inputs
   */
  @Input() public options: any = [];

  /**
   * configuration options
   */
  @Input() public config: any = {};

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
   * Event emitted when dropdown is open.
   */
  @Output() public open: EventEmitter<any> = new EventEmitter();

  /**
   * Event emitted when dropdown is open.
   */
  @Output() public close: EventEmitter<any> = new EventEmitter();

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
   * Selection text to be Displayed
   */
  public selectedDisplayText: string = "Select";

  /**
   * Search text
   */
  public searchText: string;

  /**
   * variable to track if clicked inside or outside of component
   */
  public clickedInside: boolean = false;

  /**
   * variable to track the focused item whenuser uses arrow keys to select item
   */
  public focusedItemIndex: number = null;

  /**
   * element to show not found text when not itmes match the search
   */

  public showNotFound = false;
  /**
   * Hold the reference to available items in the list to focus on the item when scrolling
   */
  @ViewChildren('availableOption') public availableOptions: QueryList<ElementRef>;

  constructor(private cdref: ChangeDetectorRef) {
    this.multiple = false;
  }

  /**
   * click listener for host inside this component i.e
   * if many instances are there, this detects if clicked inside
   * this instance
   */
  @HostListener('click')
  public clickInsideComponent() {
    this.clickedInside = true;
  }

  /**
   * click handler on documnent to hide the open dropdown if clicked outside
   */
  @HostListener('document:click')
  public clickOutsideComponent() {
    if (!this.clickedInside) {
      this.toggleDropdown = false;
      this.resetArrowKeyActiveElement();
    }
    this.clickedInside = false;
  }

  /**
   * Event handler for key up and down event and enter press for selecting element
   * @param event
   */
  @HostListener('keydown', ['$event'])
  public handleKeyboardEvent($event: KeyboardEvent) {
    const avaOpts = this.availableOptions.toArray();
    if (avaOpts.length === 0 && !this.toggleDropdown) {
      this.toggleDropdown = true;
    }
    if ($event.code === 'ArrowDown' && avaOpts.length > 0) {
      this.onArrowKeyDown();
      avaOpts[this.focusedItemIndex].nativeElement.focus();
      $event.preventDefault();
    }
    if ($event.code === 'ArrowUp' && avaOpts.length) {
      this.onArrowKeyUp();
      avaOpts[this.focusedItemIndex].nativeElement.focus();
      $event.preventDefault();
    }
    if ($event.code === 'Enter' && this.focusedItemIndex !== null) {
      this.selectItem(this.availableItems[this.focusedItemIndex], this.focusedItemIndex);
      return false;
    }
  }

  /**
   * Component onInit
   */
  public ngOnInit() {
    if (typeof this.options !== "undefined" && Array.isArray(this.options)) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
      this.initDropdownValuesAndOptions();
    }
  }

  /**
   * after view init to subscribe to available option changes
   */
  public ngAfterViewInit() {
    this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
  }

  /**
   * function sets whether to show items not found text or not
   */
  public setNotFoundState() {
    if (this.availableOptions.length === 0) {
      this.showNotFound = true;
    } else {
      this.showNotFound = false;
    }
    this.cdref.detectChanges();
  }
  /**
   * Component onchage i.e when any of the input properties change
   * @param changes
   */
  public ngOnChanges(changes: SimpleChanges) {
    this.selectedItems = [];
    this.searchText = null;
    this.options = this.options || [];
    if (changes.options) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
    }
    if (changes.value && JSON.stringify(changes.value.currentValue) === JSON.stringify([])) {
      this.availableItems = [...this.options.sort(this.config.customComparator)];
    }
    this.initDropdownValuesAndOptions();
  }

  /**
   * Deselct a selected items
   * @param item:  item to be deselected
   * @param index:  index of the item
   */
  public deselectItem(item: any, index: number) {
    this.selectedItems.splice(index, 1);
    if (!this.availableItems.includes(item)) {
      this.availableItems.push(item);
      this.availableItems.sort(this.config.customComparator);
    }
    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...this.availableItems];
    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }

  /**
   * Select an item
   * @param item:  item to be selected
   * @param index:  index of the item
   */
  public selectItem(item: string, index: number) {
    if (!this.multiple) {
      if (this.selectedItems.length > 0) {
        this.availableItems.push(this.selectedItems[0]);
      }
      this.selectedItems = [];
      this.toggleDropdown = false;
    }
    this.availableItems.splice(index, 1);
    this.selectedItems.push(item);
    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...this.availableItems];
    this.selectedItems.sort(this.config.customComparator);
    this.availableItems.sort(this.config.customComparator);
    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }

  /**
   * When selected items changes trigger the chaange back to parent
   */
  public valueChanged() {
    this.value = this.selectedItems;
    this.valueChange.emit(this.value);
    this.change.emit({ value: this.value });
    this.setSelectedDisplayText();
  }

  /**
   * Toggle the dropdownlist on/off
   */
  public toggleSelectDropdown() {
    this.toggleDropdown = !this.toggleDropdown;
    if (this.toggleDropdown) {
      this.open.emit();
    } else {
      this.close.emit();
    }
    this.resetArrowKeyActiveElement();
  }

  /**
   * initialize the config and other properties
   */
  private initDropdownValuesAndOptions() {
    const config: any = {
      displayKey: "description",
      height: 'auto',
      search: false,
      placeholder: 'Select',
      searchPlaceholder: 'Search',
      limitTo: this.options.length,
      customComparator: undefined,
      noResultsFound: 'No results found!',
      moreText: 'more'
    };
    if (this.config === "undefined" || Object.keys(this.config).length === 0) {
      this.config = { ...config };
    }
    for (const key of Object.keys(config)) {
      this.config[key] = this.config[key] ? this.config[key] : config[key];
    }
    // Adding placeholder in config as default param
    this.selectedDisplayText = this.config["placeholder"];
    if (this.value !== "" && typeof this.value !== "undefined" && Array.isArray(this.value)) {
      this.selectedItems = this.value;
      this.value.forEach((item: any) => {
        const ind = this.availableItems.indexOf(item);
        if (ind !== -1) {
          this.availableItems.splice(ind, 1);
        }
      });
      this.setSelectedDisplayText();
    }
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
        text + ` + ${this.selectedItems.length - 1} ${this.config.moreText}`;
    } else {
      this.selectedDisplayText = this.selectedItems.length === 0 ? this.config.placeholder : text;
    }
  }

  /**
   * Event handler for arrow key up event thats focuses on a item
   */
  private onArrowKeyUp() {
    if (this.focusedItemIndex === 0) {
      this.focusedItemIndex = this.availableItems.length - 1;
      return;
    }
    if (this.onArrowKey()) {
      this.focusedItemIndex--;
    }
  }

  /**
   * Event handler for arrow key down event thats focuses on a item
   */
  private onArrowKeyDown() {
    if (this.focusedItemIndex === this.availableItems.length - 1) {
      this.focusedItemIndex = 0;
      return;
    }
    if (this.onArrowKey()) {
      this.focusedItemIndex++;
    }
  }

  private onArrowKey() {
    if (this.focusedItemIndex === null) {
      this.focusedItemIndex = 0;
      return false;
    }
    return true;
  }

  /**
   * will reset the element that is marked active using arrow keys
   */
  private resetArrowKeyActiveElement() {
    this.focusedItemIndex = null;

  }
}
