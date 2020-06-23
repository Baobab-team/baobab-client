import { AdminSecondHeaderComponent } from './../../../../shared/components/admin-second-header/admin-second-header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsComponent } from './business-details.component';
import { Store, StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

describe('BusinessDetailComponent', () => {
  let component: BusinessDetailsComponent;
  let fixture: ComponentFixture<BusinessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BusinessDetailsComponent,
        AdminSecondHeaderComponent
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          },
          compiler: {
            provide: TranslateCompiler,
            useClass: TranslateMessageFormatCompiler
          }
        }),
      ],
      providers: [
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
        IsCategoriesLoadedGuard,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
