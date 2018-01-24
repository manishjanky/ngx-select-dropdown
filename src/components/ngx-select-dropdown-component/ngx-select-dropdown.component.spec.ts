import { FormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectDropDownComponent } from "./ngx-select-dropdown.component";

const options = ["Option 1", "Option 2", "Option 3"];
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

  it("should trow error", () => {
    component.options = undefined;
    expect(() => {
      component.ngOnInit();
    }).toThrow();
  });

  it("Should init the config", () => {
    (component as any).initDropdownValuesAndOptions();
    expect(component.config).toBeTruthy();
  });

  it("Should init the config with display key", () => {
    (component as any).initDropdownValuesAndOptions();
    expect(component.config.displayKey).toEqual("description");
  });

  it("Should hide the dropdown", () => {
    (component as any).onClick();
    expect(component.toggleDropdown).toBeFalsy();
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

  it("Should Toggle Dropdown", () => {
    const $event = new Event("click");
    component.toggleSelectDropdown($event);
    expect(component.toggleDropdown).toBeTruthy();
  });

  it("Click handler", () => {
    const $event = new Event("click");
    component.toggleDropdown = true;
    component.clickHandler($event);
    expect(component.toggleDropdown).toBeTruthy();
  });

  it("Should select an item items", () => {
    const $event = new Event("click");
    component.selectItem("Option 1", 0, $event);
    expect(component.selectedItems).toEqual(["Option 1"]);
  });

  it("Should deselect an item", () => {
    const $event = new Event("click");
    component.selectedItems = ["Option 1"];
    component.deselectItem("Option 1", 0, $event);
    expect(component.selectedItems).toEqual([]);
  });

  it("Should set the value", () => {
    const $event = new Event("click");
    component.selectedItems = ["Option 1", "Option 2"];
    component.valueChanged($event);
    expect(component.value).toEqual(["Option 1", "Option 2"]);
  });

  it("Should set the selected text for multi select", () => {
    const $event = new Event("click");
    component.selectedItems = ["Option 1", "Option 2"];
    component.multiple = true;
    component.valueChanged($event);
    expect(component.selectedDisplayText).toEqual("2 selected");
  });

  it("Should set the selected text for single select", () => {
    const $event = new Event("click");
    component.selectedItems = ["Option 1"];
    component.valueChanged($event);
    expect(component.selectedDisplayText).toEqual("Option 1");
  });

  it("Should search", () => {
    component.search();
    expect(component).toBeTruthy();
  });
});
