import { ArrayFilterPipe } from "./../../pipes/filter-by.pipe";
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
  OnChanges,
  SimpleChanges,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  forwardRef,
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "ngx-select-dropdown",
  templateUrl: "./ngx-select-dropdown.component.html",
  styleUrls: ["./ngx-select-dropdown.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropDownComponent),
      multi: true,
    },
  ],
})
export class SelectDropDownComponent
  implements OnInit, OnChanges, AfterViewInit {
  /** value of the dropdown */
  @Input() public _value: any;

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
  @Input() public disabled: boolean;

  /**
   * change event when value changes to provide user to handle things in change event
   */
  @Output() public change: EventEmitter<any> = new EventEmitter();

  /**
   * The search text change event emitter emitted when user type in the search input
   */
  @Output() public searchChange: EventEmitter<any> = new EventEmitter();

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
   * variable to track keypress event inside and outsid of component
   */
  public insideKeyPress: boolean = false;

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
  @ViewChildren("availableOption") public availableOptions: QueryList<
    ElementRef
  >;

  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor(
    private cdref: ChangeDetectorRef,
    public _elementRef: ElementRef
  ) {
    this.multiple = false;
  }

  public onChange: any = () => {
    // empty
  }
  public onTouched: any = () => {
    // empty
  }

  /**
   * click listener for host inside this component i.e
   * if many instances are there, this detects if clicked inside
   * this instance
   */
  @HostListener("click")
  public clickInsideComponent() {
    this.clickedInside = true;
  }

  @HostListener("blur", ["$event"]) public blur() {
    this.toggleDropdown = false;
  }

  @HostListener("focus", ["$event"]) public focus() {
    /* istanbul ignore else */
    if (!this.disabled) {
      this.toggleSelectDropdown();
    }
  }
  /**
   * click handler on documnent to hide the open dropdown if clicked outside
   */
  @HostListener("document:click")
  public clickOutsideComponent() {
    /* istanbul ignore else */
    if (!this.clickedInside) {
      this.toggleDropdown = false;
      this.resetArrowKeyActiveElement();
      // clear searh on close
      this.searchText = null;
      this.close.emit();
    }
    this.clickedInside = false;
  }

  /**
   * click handler on documnent to hide the open dropdown if clicked outside
   */
  @HostListener("document:keydown")
  public KeyPressOutsideComponent() {
    /* istanbul ignore else */
    if (!this.insideKeyPress) {
      this.toggleDropdown = false;
      this.resetArrowKeyActiveElement();
    }
    this.insideKeyPress = false;
  }
  /**
   * Event handler for key up and down event and enter press for selecting element
   * @param event
   */
  @HostListener("keydown", ["$event"])
  public handleKeyboardEvent($event: KeyboardEvent) {
    this.insideKeyPress = true;
    /* istanbul ignore else */
    if ($event.keyCode === 27 || this.disabled) {
      this.toggleDropdown = false;
      this.insideKeyPress = false;
      return;
    }
    const avaOpts = this.availableOptions.toArray();
    /* istanbul ignore else */
    if ($event.keyCode !== 9 && avaOpts.length === 0 && !this.toggleDropdown) {
      this.toggleDropdown = true;
    }
    // Arrow Down
    /* istanbul ignore else */
    if ($event.keyCode === 40 && avaOpts.length > 0) {
      this.onArrowKeyDown();
      /* istanbul ignore else */
      if (this.focusedItemIndex >= avaOpts.length) {
        this.focusedItemIndex = 0;
      }
      avaOpts[this.focusedItemIndex].nativeElement.focus();
      $event.preventDefault();
    }
    // Arrow Up
    /* istanbul ignore else */
    if ($event.keyCode === 38 && avaOpts.length) {
      this.onArrowKeyUp();
      /* istanbul ignore else */
      if (this.focusedItemIndex >= avaOpts.length) {
        this.focusedItemIndex = avaOpts.length - 1;
      }
      avaOpts[this.focusedItemIndex].nativeElement.focus();
      $event.preventDefault();
    }
    // Enter
    /* istanbul ignore else */
    if ($event.keyCode === 13 && this.focusedItemIndex !== null) {
      const filteredItems = new ArrayFilterPipe().transform(
        this.availableItems,
        this.searchText,
        this.config.searchOnKey
      );
      this.selectItem(
        filteredItems[this.focusedItemIndex],
        this.availableItems.indexOf(filteredItems[this.focusedItemIndex])
      );
      return false;
    }
  }

  /**
   * Component onInit
   */
  public ngOnInit() {
    /* istanbul ignore else */
    if (typeof this.options !== "undefined" && Array.isArray(this.options)) {
      this.availableItems = [
        ...this.options.sort(this.config.customComparator),
      ];
      this.initDropdownValuesAndOptions();
    }
  }

  /**
   * after view init to subscribe to available option changes
   */
  public ngAfterViewInit() {
    this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public writeValue(value: any, internal?: boolean) {
    if (value) {
      if (Array.isArray(value)) {
        if (this.multiple) {
          this.value = value;
        } else if (value.length > 0) {
          this.value = value[0];
        }
      } else {
        this.value = value;
      }
      /* istanbul ignore else */
      if (this.selectedItems.length === 0) {
        if (Array.isArray(value)) {
          this.selectedItems = value;
        } else {
          this.selectedItems.push(value);
        }
        this.initDropdownValuesAndOptions();
      }
    } else {
      this.value = [];
      /* istanbul ignore else */
      if (!internal) {
        this.reset();
      }
    }
    /* istanbul ignore else */
    if (!internal) {
      this.reset();
    }
  }

  public reset() {
    this.selectedItems = [];
    this.availableItems = [...this.options.sort(this.config.customComparator)];
    this.initDropdownValuesAndOptions();
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
    // this.searchText = null;
    this.options = this.options || [];
    /* istanbul ignore else */
    if (changes.options) {
      this.availableItems = [
        ...this.options.sort(this.config.customComparator),
      ];
    }
    /* istanbul ignore else */
    if (changes.value) {
      /* istanbul ignore else */
      if (
        JSON.stringify(changes.value.currentValue) === JSON.stringify([]) ||
        changes.value.currentValue === "" ||
        changes.value.currentValue === null
      ) {
        this.availableItems = [
          ...this.options.sort(this.config.customComparator),
        ];
      }
    }
    this.initDropdownValuesAndOptions();
  }

  /**
   * Deselct a selected items
   * @param item:  item to be deselected
   * @param index:  index of the item
   */
  public deselectItem(item: any, index: number) {
    this.selectedItems.forEach((element: any, i: number) => {
      /* istanbul ignore else */
      if (item === element) {
        this.selectedItems.splice(i, 1);
      }
    });
    let sortedItems = [...this.availableItems];
    /* istanbul ignore else */
    if (!this.availableItems.includes(item)) {
      this.availableItems.push(item);
      sortedItems = this.availableItems.sort(this.config.customComparator);
    }
    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...sortedItems];
    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }

  /**
   * Select an item
   * @param item:  item to be selected
   * @param index:  index of the item
   */
  public selectItem(item: string, index?: number) {
    /* istanbul ignore else */
    if (!this.multiple) {
      /* istanbul ignore else */
      if (this.selectedItems.length > 0) {
        this.availableItems.push(this.selectedItems[0]);
      }
      this.selectedItems = [];
      this.toggleDropdown = false;
    }

    this.availableItems.forEach((element: any, i: number) => {
      /* istanbul ignore else */
      if (item === element) {
        this.selectedItems.push(item);
        this.availableItems.splice(i, 1);
      }
    });

    /* istanbul ignore else */
    if (this.config.clearOnSelection) {
      this.searchText = null;
    }

    this.selectedItems = [...this.selectedItems];
    this.availableItems = [...this.availableItems];
    this.selectedItems.sort(this.config.customComparator);
    this.availableItems.sort(this.config.customComparator);
    // this.searchText = null;
    this.valueChanged();
    this.resetArrowKeyActiveElement();
  }

  /**
   * When selected items changes trigger the chaange back to parent
   */
  public valueChanged() {
    this.writeValue(this.selectedItems, true);
    // this.valueChange.emit(this.value);
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
      this.searchText = null;
      this.close.emit();
    }
    this.resetArrowKeyActiveElement();
  }

  /**
   * The change handler for search text
   */
  public searchTextChanged() {
    this.searchChange.emit(this.searchText);
  }

  public changeSearchText($event: any) {
    $event.stopPropagation();
  }

  /**
   * initialize the config and other properties
   */
  private initDropdownValuesAndOptions() {
    const config: any = {
      displayKey: "description",
      height: "auto",
      search: false,
      placeholder: "Select",
      searchPlaceholder: "Search...",
      limitTo: 0,
      customComparator: undefined,
      noResultsFound: "No results found!",
      moreText: "more",
      searchOnKey: null,
      clearOnSelection: false,
      inputDirection: "ltr",
    };
    /* istanbul ignore else */
    if (this.config === "undefined" || Object.keys(this.config).length === 0) {
      this.config = { ...config };
    }
    for (const key of Object.keys(config)) {
      this.config[key] = this.config[key] ? this.config[key] : config[key];
    }
    this.config = { ...this.config };
    // Adding placeholder in config as default param
    this.selectedDisplayText = this.config["placeholder"];
    /* istanbul ignore else */
    if (this.value !== "" && typeof this.value !== "undefined") {
      if (Array.isArray(this.value)) {
        this.selectedItems = this.value;
      } else if (this.value !== "" && this.value !== null) {
        this.selectedItems[0] = this.value;
      } else {
        this.selectedItems = [];
        this.value = [];
      }

      this.selectedItems.forEach((item: any) => {
        const ind = this.availableItems.findIndex(
          (aItem: any) => JSON.stringify(item) === JSON.stringify(aItem)
        );
        if (ind !== -1) {
          this.availableItems.splice(ind, 1);
        }
      });
    }
    this.setSelectedDisplayText();
  }

  /**
   * set the text to be displayed
   */
  private setSelectedDisplayText() {
    let text: string = this.selectedItems[0];
    /* istanbul ignore else */
    if (typeof this.selectedItems[0] === "object") {
      text = this.config.displayFn ? this.config.displayFn(this.selectedItems[0]) : this.selectedItems[0][this.config.displayKey];
    }
    if (this.multiple && this.selectedItems.length > 0) {
      this.selectedDisplayText =
        this.selectedItems.length === 1
          ? text
          : text +
            ` + ${this.selectedItems.length - 1} ${this.config.moreText}`;
    } else {
      this.selectedDisplayText =
        this.selectedItems.length === 0 ? this.config.placeholder : text;
    }
  }

  /**
   * Event handler for arrow key up event thats focuses on a item
   */
  private onArrowKeyUp() {
    /* istanbul ignore else */
    if (this.focusedItemIndex === 0) {
      this.focusedItemIndex = this.availableItems.length - 1;
      return;
    }
    /* istanbul ignore else */
    if (this.onArrowKey()) {
      this.focusedItemIndex--;
    }
  }

  /**
   * Event handler for arrow key down event thats focuses on a item
   */
  private onArrowKeyDown() {
    /* istanbul ignore else */
    if (this.focusedItemIndex === this.availableItems.length - 1) {
      this.focusedItemIndex = 0;
      return;
    }
    /* istanbul ignore else */
    if (this.onArrowKey()) {
      this.focusedItemIndex++;
    }
  }

  private onArrowKey() {
    /* istanbul ignore else */
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
