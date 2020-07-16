import { RouterTestingModule } from '@angular/router/testing';
import { ToolSearchComponent } from './../../../../shared/components/tool-search/tool-search.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { Store, StoreModule } from '@ngrx/store';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ToolSearchComponent
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        HttpClientModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        NgbModule,
        RouterTestingModule,
        RxReactiveFormsModule,
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
