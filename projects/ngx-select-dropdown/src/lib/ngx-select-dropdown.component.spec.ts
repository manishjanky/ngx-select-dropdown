import { FilterByPipe } from './pipes/filter-by.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectDropdownComponent } from './ngx-select-dropdown.component';

const options = ['Option 1', 'Option 2', 'Option 3'];
interface Account {
  _id: string;
  index: number;
  balance: string;
  picture: string;
  name: string;
  firstName: string;
  thirdPartyProfile: {
    name: string;
  };
}
const objOptions: Account[] = [
  {
    _id: '5a66d6c31d5e4e36c7711b7a',
    index: 0,
    balance: '$2,806.37',
    picture: 'http://placehold.it/32x32',
    name: 'Burns Dalton',
    firstName: 'Burns',
    thirdPartyProfile: {
      name: 'Burns.D'
    }
  },
  {
    _id: '5a66d6c3657e60c6073a2d22',
    index: 1,
    balance: '$2,984.98',
    picture: 'http://placehold.it/32x32',
    name: 'Mcintyre Lawson',
    firstName: 'Mcintyre',
    thirdPartyProfile: {
      name: 'Mcint'
    }
  },
  {
    _id: '5a66d6c376be165a5a7fae33',
    index: 2,
    balance: '$2,794.16',
    picture: 'http://placehold.it/32x32',
    name: 'Amie Franklin',
    firstName: 'Amie',
    thirdPartyProfile: {
      name: 'Frank'
    }
  },
  {
    _id: '5a66d6c3f7854b6b4d96333b',
    index: 3,
    balance: '$2,537.14',
    picture: 'http://placehold.it/32x32',
    name: 'Jocelyn Horton',
    firstName: 'Jocelyn',
    thirdPartyProfile: {
      name: 'Joce'
    }
  }];
describe('NgxSelectDropdownComponent', () => {
  let component: NgxSelectDropdownComponent;
  let fixture: ComponentFixture<NgxSelectDropdownComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [NgxSelectDropdownComponent, LimitToPipe, FilterByPipe]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectDropdownComponent);
    component = fixture.componentInstance;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reinitialize options if data source changes', (done) => {
    setTimeout(() => {
      component.options = objOptions;
      component.ngOnChanges({});
      expect(component.options).toEqual(objOptions);
      done();
    }, 3000);

  });

  it('should reinitialize options if data source changes and not the value', (done) => {
    setTimeout(() => {
      component.options = [...objOptions];
      component.ngOnChanges({ options: { firstChange: false } } as any);
      component.selectItem(component.options[0], 0);
      expect(component.availableItems).toEqual([objOptions[1], objOptions[2], objOptions[3]]);
      done();
    }, 3000);
  });

  it('should handle value change in ngOnchanges', (done) => {
    setTimeout(() => {
      component.options = objOptions;
      component.value = [objOptions[0]];
      component.ngOnChanges({ value: { firstChange: false } } as any);
      expect(component.selectedItems.length).toEqual(1);
      done();
    }, 3000);
  });

  it('should handle value changes to [] in ngOnchanges', (done) => {
    setTimeout(() => {
      component.options = objOptions;
      component.value = [objOptions[0]];
      component.ngOnChanges({ value: { firstChange: false } } as any);
      component.value = [];
      component.ngOnChanges({ value: { firstChange: false, currentValue: [], previousValue: [objOptions[0]] } } as any);
      expect(component.availableItems).toEqual(objOptions);
      done();
    }, 3000);
  });

  it('should handle change in ngOnchanges when options undefined', (done) => {
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
  it('when options are not passed ', () => {
    const undefinedOptions = undefined;
    component.options = undefinedOptions;
    component.ngOnInit();
    expect(component.options).toEqual(undefined);
  });

  it('should set available items when initializing', () => {
    component.options = objOptions;
    component.ngOnInit();
    expect(component.availableItems).toEqual(component.options);
  });

  it('should set the initial value passed while initializing', () => {
    component.options = objOptions;
    component.value = [objOptions[0]];
    component.ngOnInit();
    expect(component.selectedItems).toEqual([objOptions[0]]);
  });

  it('should set the availableitems when initial value passed while initializing', () => {
    component.options = objOptions;
    component.value = [objOptions[0]];
    component.ngOnInit();
    expect(component.availableItems.length).toEqual(objOptions.length - 1);
  });

  it('Should init the config', () => {
    (component as any).initDropdownValuesAndOptions();
    expect(component.config).toBeTruthy();
  });

  it('Should init the config with display key', () => {
    (component as any).initDropdownValuesAndOptions();
    expect(component.config.displayKey).toEqual('description');
  });

  it('Should handle the value initilization', () => {
    component.value = objOptions[0];
    (component as any).initDropdownValuesAndOptions();
    expect(component.selectedItems).toEqual([objOptions[0]]);
  });

  it('Should write the value', () => {
    component.writeValue(objOptions[0], true);
    expect(component.value).toEqual(objOptions[0]);
    expect(component.selectedItems).toEqual([objOptions[0]]);
  });

  // it('Should write the value and seleted items when already selected passed in initilization', () => {
  //   component.writeValue(objOptions[0]);
  //   expect(component.value).toEqual(objOptions[0]);
  // });

  it('Should init the config with display one key missing', () => {
    component.config = {
      displayKey: 'description'
    };
    (component as any).initDropdownValuesAndOptions();
    expect(component.config.height).toEqual('auto');
  });

  it('Should set the select text for selected items', () => {
    component.selectedItems = ['Option 1'];
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual('Option 1');
  });

  it('Should set the select text with 0 selected items', () => {
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual('Select');
  });

  it('Should set the select text with 1 object as selected items', () => {
    component.selectedItems = [objOptions[0]];
    component.multiple = false;
    component.config.displayKey = 'name';
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual('Burns Dalton');
  });

  it('Should set the select text with 1 object as selected items and use display function to display sub-object', () => {
    component.config.displayFn = (item: Account) => {
      return item.thirdPartyProfile.name;
    };
    component.selectedItems = [objOptions[0]];
    component.multiple = false;
    (component as any).setSelectedDisplayText();
    expect(component.selectedDisplayText).toEqual('Burns.D');
  });

  it('Should Toggle Dropdown', () => {
    component.toggleSelectDropdown();
    expect(component.toggleDropdown).toBeTruthy();
  });

  it('Should Toggle Dropdown', () => {
    component.toggleDropdown = true;
    component.toggleSelectDropdown();
    expect(component.toggleDropdown).toBeFalsy();
  });
  it('Should Toggle Dropdown and emit open event', () => {
    component.toggleDropdown = false;
    spyOn(component.open, 'emit');
    component.toggleSelectDropdown();
    expect(component.open.emit).toHaveBeenCalled();
  });

  it('Should set the showNotfound text when no items found', () => {
    component.availableOptions = new QueryList();
    component.availableOptions.reset([]);
    component.setNotFoundState();
    expect(component.showNotFound).toEqual(true);
  });

  it('Should set the showNotfound text when no items found', () => {
    component.availableOptions = new QueryList();
    component.availableOptions.reset([new ElementRef(document.createElement('li'))]);
    component.setNotFoundState();
    expect(component.showNotFound).toEqual(false);
  });

  it('Should Toggle Dropdown and emit close event', () => {
    component.toggleDropdown = true;
    spyOn(component.close, 'emit');
    component.toggleSelectDropdown();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('Click inside component', () => {
    component.toggleDropdown = true;
    component.clickInsideComponent();
    expect(component.toggleDropdown).toEqual(true);
  });

  it('Click outside component', () => {
    component.toggleDropdown = true;
    component.clickOutsideComponent();
    expect(component.toggleDropdown).toEqual(false);
  });

  it('Click inside component propagates to documnet', () => {
    component.toggleDropdown = true;
    component.clickedInside = true;
    component.clickOutsideComponent();
    expect(component.toggleDropdown).toEqual(true);
  });

  it('Should select an item items with multiple false', () => {
    component.selectItem('Option 1', 0);
    expect(component.selectedItems).toEqual(['Option 1']);
  });

  it('Should select an item items with multiple true', () => {
    component.multiple = true;
    component.selectItem('Option 1', 0);
    expect(component.selectedItems).toEqual(['Option 1']);
  });

  it('Should select an item items with multiple false and already selected items', () => {
    component.selectedItems = ['Option 1'];
    component.selectItem('Option 2', 1);
    expect(component.selectedItems).toEqual(['Option 2']);
  });

  it('Should deselect an item', () => {
    component.selectedItems = ['Option 1'];
    component.deselectItem('Option 1', 0);
    expect(component.selectedItems).toEqual([]);
  });

  it('Should set the value', () => {
    component.multiple = true;
    component.selectedItems = ['Option 1', 'Option 2'];
    component.valueChanged();
    expect(component.value).toEqual(['Option 1', 'Option 2']);
  });

  it('Should set the selected text for multi select', () => {
    component.selectedItems = ['Option 1', 'Option 2'];
    component.multiple = true;
    component.valueChanged();
    expect(component.selectedDisplayText).toEqual('Option 1 + 1 more');
  });

  it('Should set the selected text for single select with string options', () => {
    component.selectedItems = ['Option 1'];
    component.valueChanged();
    expect(component.selectedDisplayText).toEqual('Option 1');
  });

  it('Should set the selected text for single select when nothing selected', () => {
    component.selectedItems = [];
    component.valueChanged();
    expect(component.selectedDisplayText).toEqual('Select');
  });

  it('Should handle the key pressed outside event', () => {
    component.insideKeyPress = true;
    component.KeyPressOutsideComponent();
    expect(component.insideKeyPress).toEqual(false);
  });

  it('Should handle the key pressed outside event toggle dropdown', () => {
    component.insideKeyPress = false;
    component.KeyPressOutsideComponent();
    expect(component.toggleDropdown).toEqual(false);
  });

  it('Should not duplicate items  when deselect in avaialable items', (done) => {
    component.options = objOptions;
    component.selectedItems = [objOptions[0], objOptions[1]];
    component.availableItems = [objOptions[0]];
    component.deselectItem(objOptions[1], 1);
    setTimeout(() => {
      expect(component.availableItems).toEqual([objOptions[0], objOptions[1]]);
      done();
    }, 300);
  });

  it('Should handle the up arrow key', () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    (component as any).onArrowKeyUp();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it('Should handle the down arrow key', () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    (component as any).onArrowKeyDown();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it('Should handle the down arrow key event when focus index already set', () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 0;
    (component as any).onArrowKeyDown();
    expect(component.focusedItemIndex).toEqual(1);
  });

  it('Should handle the down arrow key event when focus index already set to last item', () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = component.availableItems.length - 1;
    (component as any).onArrowKeyDown();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it('Should handle the up arrow key event when focus index already set', () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 1;
    (component as any).onArrowKeyUp();
    expect(component.focusedItemIndex).toEqual(0);
  });

  it('Should handle the up arrow key event when focus index already set to first item', () => {
    component.options = objOptions;
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 0;
    (component as any).onArrowKeyUp();
    expect(component.focusedItemIndex).toEqual(objOptions.length - 1);
  });

  it('Should handle the arrow key event for up', () => {
    component.options = objOptions;
    component.focusedItemIndex = null;
    component.availableItems = [...objOptions];
    component.availableOptions = new QueryList();
    component.availableOptions.reset([new ElementRef(document.createElement('li'))]);
    component.handleKeyboardEvent({ keyCode: 38, preventDefault: () => { return; } } as any);
    expect(component.focusedItemIndex).toEqual(0);
  });

  it('Should handle the arrow key event for down', () => {
    component.options = objOptions;
    component.focusedItemIndex = null;
    component.availableItems = [...objOptions];
    component.availableOptions = new QueryList();
    component.availableOptions.reset([new ElementRef(document.createElement('li'))]);
    component.handleKeyboardEvent({ keyCode: 40, preventDefault: () => { return; } } as any);
    expect(component.focusedItemIndex).toEqual(0);
  });

  it('Should handle the arrow key event for down when escape key', () => {
    component.handleKeyboardEvent({ keyCode: 27, preventDefault: () => { return; } } as any);
    expect(component.toggleDropdown).toEqual(false);
  });

  it('Should handle the arrow key event for down', () => {
    component.options = objOptions;
    const event = new KeyboardEvent('Enter');
    component.availableItems = [...objOptions];
    component.focusedItemIndex = 1;
    component.handleKeyboardEvent({ keyCode: 13, preventDefault: () => { return; } } as any);
    expect(component.selectedItems).toEqual([objOptions[1]]);
  });

  it('Should register registerOnChange', () => {
    const func = () => { return; };
    component.registerOnChange(func);
    expect(component.onChange).toEqual(func);
  });

  it('Should register registerOnTouched', () => {
    const fun = () => { return; };
    component.registerOnTouched(fun);
    expect(component.onTouched).toEqual(fun);
  });

  it('Should emit the search text changed event', () => {
    spyOn(component.searchChange, 'emit');
    (component as any).searchTextChanged();
    expect(component.searchChange.emit).toHaveBeenCalled();
  });

  it('Should reset', () => {
    component.selectedItems = [...options];
    component.reset();
    expect(component.selectedItems.length).toEqual(0);
  });

  it('Should focus', () => {
    component.focus();
    expect(component.toggleDropdown).toBeTruthy();
  });

  it('Should not focus', () => {
    component.disabled = true;
    component.focus();
    expect(component.toggleDropdown).toBeFalsy();
  });

  it('Should  blur', () => {
    component.blur();
    expect(component.toggleDropdown).toBeFalsy();
  });
});
