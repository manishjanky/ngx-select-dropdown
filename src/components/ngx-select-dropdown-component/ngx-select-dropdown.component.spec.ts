import { FormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectDropDownComponent } from "./ngx-select-dropdown.component";

const options = ["Option 1", "Option 2", "Option 3"];
const objOptions = [
  {
    _id: "5a66d6c31d5e4e36c7711b7a",
    index: 0,
    balance: "$2,806.37",
    picture: "http://placehold.it/32x32",
    name: "Burns Dalton",
    firstName: "Burns"
  },
  {
    _id: "5a66d6c3657e60c6073a2d22",
    index: 1,
    balance: "$2,984.98",
    picture: "http://placehold.it/32x32",
    name: "Mcintyre Lawson",
    firstName: "Mcintyre"
  },
  {
    _id: "5a66d6c376be165a5a7fae33",
    index: 2,
    balance: "$2,794.16",
    picture: "http://placehold.it/32x32",
    name: "Amie Franklin",
    firstName: "Amie"
  },
  {
    _id: "5a66d6c3f7854b6b4d96333b",
    index: 3,
    balance: "$2,537.14",
    picture: "http://placehold.it/32x32",
    name: "Jocelyn Horton",
    firstName: "Jocelyn"
  }];
describe("SelectDropDownComponent", () => {
  let component: SelectDropDownComponent;
  let fixture: ComponentFixture<SelectDropDownComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [SelectDropDownComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropDownComponent);
    component = fixture.componentInstance;
    component.options = options;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should reinitialize options if data source changes", (done) => {
    setTimeout(() => {
      component.options = objOptions;
      component.ngOnChanges({});
      expect(component.options).toEqual(objOptions);
      done();
    }, 3000);

  });

  it("should reinitialize options if data source changes and not the value", (done) => {
    setTimeout(() => {
      component.options = [...objOptions];
      component.ngOnChanges({ options: { firstChange: false } } as any);
      component.selectItem(component.options[0], 0);
      expect(component.availableItems).toEqual([objOptions[1], objOptions[2], objOptions[3]]);
      done();
    }, 3000);
  });

  it("should handle value change in ngOnchanges", (done) => {
    setTimeout(() => {
      component.options = objOptions;
      component.value = [objOptions[0]];
      component.ngOnChanges({ value: { firstChange: false } } as any);
      expect(component.selectedItems.length).toEqual(1);
      done();
    }, 3000);
  });

  it("should handle change in ngOnchanges when options undefined", (done) => {
    component.options = undefined;
    component.ngOnChanges({ value: { firstChange: false } } as any);
    setTimeout(() => {
      component.options = objOptions;
      component.selectedItems = [objOptions[0]];
      component.value = [objOptions[0], objOptions[1]];
      component.ngOnChanges({ value: { firstChange: false } } as any);
      expect(component.selectedItems.length).toEqual(2);
      done();
    }, 3000);
  });
  it("when options are not passed ", () => {
    const undefinedOptions = undefined;
    component.options = undefinedOptions;
    component.ngOnInit();
    expect(component.options).toEqual(undefined);
  });

  it("should set available items when initializing", () => {
    component.options = objOptions;
    component.ngOnInit();
    expect(component.availableItems).toEqual(component.options);
  });

  it("should set the initial value passed while initializing", () => {
    component.options = objOptions;
    component.value = [objOptions[0]];
    component.ngOnInit();
    expect(component.selectedItems).toEqual([objOptions[0]]);
  });

  it("should set the availableitems when initial value passed while initializing", () => {
    component.options = objOptions;
    component.value = [objOptions[0]];
    component.ngOnInit();
    expect(component.availableItems.length).toEqual(objOptions.length - 1);
  });

  it("Should init the config", () => {
    (component as any).initDropdownValuesAndOptions();
    expect(component.config).toBeTruthy();
  });

  it("Should init the config with display key", () => {
    (component as any).initDropdownValuesAndOptions();
    expect(component.config.displayKey).toEqual("description");
  });

  it("Should set the select text for selected items", () => {
    component.selectedItems = ["Option 1"];
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual("Option 1");
  });

  it("Should set the select text with 0 selected items", () => {
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual("Select");
  });

  it("Should set the select text with 1 object as selected items", () => {
    component.selectedItems = [objOptions[0]];
    component.multiple = false;
    component.config.displayKey = "name";
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual("Burns Dalton");
  });

  it("Should Toggle Dropdown", () => {
    const $event = new Event("click");
    component.toggleSelectDropdown($event);
    expect(component.toggleDropdown).toBeTruthy();
  });

  it("Click inside component", () => {
    component.toggleDropdown = true;
    component.clickInsideComponent();
    expect(component.toggleDropdown).toEqual(true);
  });

  it("Click outside component", () => {
    component.toggleDropdown = true;
    component.clickOutsideComponent();
    expect(component.toggleDropdown).toEqual(false);
  });

  it("Click inside component propagates to documnet", () => {
    component.toggleDropdown = true;
    component.clickedInside = true;
    component.clickOutsideComponent();
    expect(component.toggleDropdown).toEqual(true);
  });

  it("Should select an item items with multiple false", () => {
    component.selectItem("Option 1", 0);
    expect(component.selectedItems).toEqual(["Option 1"]);
  });

  it("Should select an item items with multiple true", () => {
    component.multiple = true;
    component.selectItem("Option 1", 0);
    expect(component.selectedItems).toEqual(["Option 1"]);
  });

  it("Should select an item items with multiple false and already selected items", () => {
    component.selectedItems = ["Option 1"];
    component.selectItem("Option 2", 1);
    expect(component.selectedItems).toEqual(["Option 2"]);
  });

  it("Should deselect an item", () => {
    component.selectedItems = ["Option 1"];
    component.deselectItem("Option 1", 0);
    expect(component.selectedItems).toEqual([]);
  });

  it("Should set the value", () => {
    component.selectedItems = ["Option 1", "Option 2"];
    component.valueChanged();
    expect(component.value).toEqual(["Option 1", "Option 2"]);
  });

  it("Should set the selected text for multi select", () => {
    component.selectedItems = ["Option 1", "Option 2"];
    component.multiple = true;
    component.valueChanged();
    expect(component.selectedDisplayText).toEqual("Option 1 + 1 more");
  });

  it("Should set the selected text for single select with string options", () => {
    component.selectedItems = ["Option 1"];
    component.valueChanged();
    expect(component.selectedDisplayText).toEqual("Option 1");
  });

  it("Should set the selected text for single select when nothing selected", () => {
    component.selectedItems = [];
    component.valueChanged();
    expect(component.selectedDisplayText).toEqual("Select");
  });

  it("Should search", (done) => {
    component.options = objOptions;
    component.searchText = "Burns";
    component.search();
    setTimeout(() => {
      expect(component.availableItems).toEqual([objOptions[0]]);
      done();
    }, 300);
  });

  it("Should search with string array", (done) => {
    component.searchText = "1";
    component.search();
    setTimeout(() => {
      expect(component.availableItems).toEqual(["Option 1"]);
      done();
    }, 300);
  });

  it("Should change search text", (done) => {
    const $event = new Event("change");
    component.options = objOptions;
    component.searchText = "Burns";
    component.changed($event);
    setTimeout(() => {
      component.searchText = "Burn";
      component.changed($event);
      expect(component.searchText).toEqual("Burn");
      done();
    }, 300);
  });

  it("Should set available items if search text is empty", (done) => {
    const $event = new Event("change");
    component.options = objOptions;
    component.availableItems = [objOptions[0]];
    component.searchText = "";
    component.search();
    setTimeout(() => {
      expect(component.availableItems).toEqual(component.options);
      done();
    }, 300);
  });

  it("Should set available items if search text is empty and selected items", (done) => {
    const $event = new Event("change");
    component.options = objOptions;
    component.selectedItems = [objOptions[1], objOptions[2]];
    component.availableItems = [objOptions[0]];
    component.searchText = "";
    component.search();
    setTimeout(() => {
      expect(component.availableItems).toEqual([objOptions[0], objOptions[3]]);
      done();
    }, 300);
  });

  it("Should not duplicate items in avaialable items", (done) => {
    const $event = new Event("change");
    component.options = objOptions;
    component.searchText = "Burns";
    component.search();
    setTimeout(() => {
      expect(component.availableItems).toEqual([objOptions[0]]);
      done();
    }, 300);
  });

  it("Should not duplicate items  when deselect in avaialable items", (done) => {
    component.options = objOptions;
    component.selectedItems = [objOptions[0], objOptions[1]];
    component.availableItems = [objOptions[0]];
    component.deselectItem(objOptions[1], 1);
    setTimeout(() => {
      expect(component.availableItems).toEqual([objOptions[0], objOptions[1]]);
      done();
    }, 300);
  });

  it("Should handle the up arrow key", () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    (component as any).onArrowKeyUp();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it("Should handle the down arrow key", () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    (component as any).onArrowKeyDown();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it("Should handle the down arrow key event when focus index already set", () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 0;
    (component as any).onArrowKeyDown();
    expect(component.focusedItemIndex).toEqual(1);
  });

  it("Should handle the down arrow key event when focus index already set to last item", () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = component.availableItems.length - 1;
    (component as any).onArrowKeyDown();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it("Should handle the up arrow key event when focus index already set", () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 1;
    (component as any).onArrowKeyUp();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it("Should handle the up arrow key event when focus index already set to first item", () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 0;
    (component as any).onArrowKeyUp();
    expect(component.focusedItemIndex).toEqual(objOptions.length - 1);
  });

  it("Should handle the arrow key event for up", () => {
    component.options = objOptions;
    component.focusedItemIndex = null;
    component.availableItems = [...objOptions];
    component.handleKeyboardEvent({ code: 'ArrowUp' } as any);
    expect(component.focusedItemIndex).toEqual(0);
  });

  it("Should handle the arrow key event for down", () => {
    component.options = objOptions;
    component.focusedItemIndex = null;
    component.availableItems = [...objOptions];
    component.handleKeyboardEvent({ code: 'ArrowDown' } as any);
    expect(component.focusedItemIndex).toEqual(0);
  });

  it("Should handle the arrow key event for down", () => {
    component.options = objOptions;
    const event = new KeyboardEvent('Enter');
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 1;
    component.handleKeyboardEvent({ code: 'Enter' } as any);
    expect(component.selectedItems).toEqual([objOptions[1]]);
  });

});
