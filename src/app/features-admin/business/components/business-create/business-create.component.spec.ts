import { AdminSecondHeaderComponent } from '../../../../shared';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCreateComponent } from './business-create.component';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {UploadFileComponent} from '../upload-file/upload-file.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../../../environments';

describe('BusinessCreateComponent', () => {
  let component: BusinessCreateComponent;
  let fixture: ComponentFixture<BusinessCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BusinessCreateComponent,
        AdminSecondHeaderComponent,
        UploadFileComponent
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production, // Restrict extension to log-only mode
        }),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        RxReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
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
    fixture = TestBed.createComponent(BusinessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
