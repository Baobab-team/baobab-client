import { TestBed } from '@angular/core/testing';

import { ServiceCoreService } from './service-core.service';

describe('ServiceCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCoreService = TestBed.get(ServiceCoreService);
    expect(service).toBeTruthy();
  });
});
