import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBusinessComponent } from './detail-business.component';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app/index';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import {LoadingComponent} from '../../../shared/components/loading/loading.component';

describe('DetailBusinessComponent', () => {
  let component: DetailBusinessComponent;
  let fixture: ComponentFixture<DetailBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailBusinessComponent,
        LoadingComponent
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
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
    fixture = TestBed.createComponent(DetailBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
