import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { ToolSearchComponent } from '../../../shared/components/tool-search/tool-search.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBusinessComponent } from './search-business.component';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { TruncatePipe } from '@Pipes/truncate.pipe';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app/index';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('SearchBusinessComponent', () => {
  let component: SearchBusinessComponent;
  let fixture: ComponentFixture<SearchBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchBusinessComponent,
        LoadingComponent,
        ToolSearchComponent,
        TruncatePipe
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        RouterTestingModule,
        HttpClientModule,
        RxReactiveFormsModule,
        NgbModule,
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
    fixture = TestBed.createComponent(SearchBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
