import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('CoreService', () => {
  let service: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreService]
    });
    service = TestBed.get(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
