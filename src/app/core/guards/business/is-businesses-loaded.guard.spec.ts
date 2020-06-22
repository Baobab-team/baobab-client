import { TestBed, async, inject } from '@angular/core/testing';

import { IsBusinessesLoadedGuard } from './is-businesses-loaded.guard';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { RouterTestingModule } from '@angular/router/testing';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';

describe('IsBusinessesLoadedGuard', () => {
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
        IsBusinessesLoadedGuard,
      ],
    });
  });

  it('should ...', inject([IsBusinessesLoadedGuard], (guard: IsBusinessesLoadedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
