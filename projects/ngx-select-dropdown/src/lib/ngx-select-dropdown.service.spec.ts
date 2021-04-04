import { TestBed } from '@angular/core/testing';

import { SelectDropDownService } from './ngx-select-dropdown.service';

describe('SelectDropDownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectDropDownService = TestBed.inject(SelectDropDownService);
    expect(service).toBeTruthy();
  });
});
