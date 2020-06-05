import { TestBed, async, inject } from '@angular/core/testing';

import { IsCategoriesLoadedGuard } from './is-categories-loaded.guard';

describe('IsCategoriesLoadedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsCategoriesLoadedGuard]
    });
  });

  it('should ...', inject([IsCategoriesLoadedGuard], (guard: IsCategoriesLoadedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
