import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminSecondHeaderComponent } from '../../../../shared';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListComponent } from './business-list.component';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { Store, StoreModule } from '@ngrx/store';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { ToastrModule } from 'ngx-toastr';
import {AgGridModule} from 'ag-grid-angular';

describe('BusinessListComponent', () => {
  let component: BusinessListComponent;
  let fixture: ComponentFixture<BusinessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminSecondHeaderComponent,
        BusinessListComponent
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        ToastrModule.forRoot(),
        AgGridModule.withComponents([]),
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
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
