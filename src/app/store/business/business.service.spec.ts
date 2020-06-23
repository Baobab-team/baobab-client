import { TestBed } from '@angular/core/testing';

import { BusinessService } from './business.service';
import { HttpClientModule } from '@angular/common/http';

describe('BusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: BusinessService = TestBed.get(BusinessService);
    expect(service).toBeTruthy();
  });
});
