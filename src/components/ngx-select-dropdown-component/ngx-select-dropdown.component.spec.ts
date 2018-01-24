import { FormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectDropDownComponent } from "./ngx-select-dropdown.component";

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
    component.options = ["Option 1", "Option 2", "Option 3"];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should Toggle Dropdown", () => {
    let $event = new Event("click");
    component.toggleSelectDropdown($event);
    expect(component.toggleDropdown).toBeTruthy();
  });
});
