import { TestBed } from '@angular/core/testing';

import { NgxSelectDropdownService } from './ngx-select-dropdown.service';

describe('NgxSelectDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSelectDropdownService = TestBed.get(NgxSelectDropdownService);
    expect(service).toBeTruthy();
  });
});
