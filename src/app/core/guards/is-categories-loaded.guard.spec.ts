import { RouterTestingModule } from '@angular/router/testing';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { TestBed, async, inject } from '@angular/core/testing';

import { IsCategoriesLoadedGuard } from './is-categories-loaded.guard';
import { Store, StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';


describe('IsCategoriesLoadedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        RouterTestingModule
      ],
      providers: [
        IsCategoriesLoadedGuard,
        Store,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiPrefixInterceptor,
          multi: true
        },
        {
          provide: REDUCER_TOKEN,
          useFactory: getReducers
        },
        IsCategoriesLoadedGuard,
      ],
    });
  });

  it('should ...', inject([IsCategoriesLoadedGuard], (guard: IsCategoriesLoadedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
