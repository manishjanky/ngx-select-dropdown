import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropDownComponent } from './ngx-select-dropdown.component';

describe('SelectDropDownComponent', () => {
  let component: SelectDropDownComponent;
  let fixture: ComponentFixture<SelectDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ SelectDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropDownComponent);
    component = fixture.componentInstance;
    component.options = ["Option 1", "Option 2", "Option 3"];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
