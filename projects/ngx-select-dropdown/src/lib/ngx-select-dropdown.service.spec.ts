import { TestBed } from '@angular/core/testing';

import { SelectDropDownService } from './ngx-select-dropdown.service';

describe('SelectDropDownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectDropDownService = TestBed.inject(SelectDropDownService);
    expect(service).toBeTruthy();
  });
  it('should emit open instance', () => {
    const service: SelectDropDownService = TestBed.inject(SelectDropDownService);
    spyOn(service.openDropdownInstance, 'emit');
    service.openDropdown('123');
    expect(service.openDropdownInstance.emit).toHaveBeenCalledWith('123');
  });

  it('should emit close instance', () => {
    const service: SelectDropDownService = TestBed.inject(SelectDropDownService);
    spyOn(service.closeDropdownInstance, 'emit');
    service.closeDropdown('123');
    expect(service.closeDropdownInstance.emit).toHaveBeenCalledWith('123');
  });

  it('should result is open', () => {
    const service: SelectDropDownService = TestBed.inject(SelectDropDownService);
    service.openInstances = ['123'];
    service.isOpen('123');
    expect(service.isOpen('123')).toBeTruthy();
  });
});
