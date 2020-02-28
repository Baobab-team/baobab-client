import { TestBed } from '@angular/core/testing';

import { BusinessFormsService } from './business-forms.service';

describe('BusinessFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessFormsService = TestBed.get(BusinessFormsService);
    expect(service).toBeTruthy();
  });
});
