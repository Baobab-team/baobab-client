import { TestBed, async, inject } from '@angular/core/testing';

import { IsBusinessesLoadedGuard } from './is-businesses-loaded.guard';

describe('IsBusinessesLoadedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsBusinessesLoadedGuard]
    });
  });

  it('should ...', inject([IsBusinessesLoadedGuard], (guard: IsBusinessesLoadedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
