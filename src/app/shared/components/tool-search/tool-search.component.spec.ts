import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSearchComponent } from './tool-search.component';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('ToolSearchComponent', () => {
  let component: ToolSearchComponent;
  let fixture: ComponentFixture<ToolSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN),
        StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: environment.production, // Restrict extension to log-only mode
        }),
        RxReactiveFormsModule,
        TranslateModule.forRoot()
      ],
      declarations: [ ToolSearchComponent ],
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
    fixture = TestBed.createComponent(ToolSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
