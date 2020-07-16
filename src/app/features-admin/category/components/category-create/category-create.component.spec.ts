import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreateComponent } from './category-create.component';
import { StoreModule, Store } from '@ngrx/store';
import { REDUCER_TOKEN, getReducers } from '@Store/index';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ApiPrefixInterceptor } from '@Interceptors/api-prefix.interceptor';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { AdminSecondHeaderComponent } from 'app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {UploadFileComponent} from '../../../business/components/upload-file/upload-file.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('CategoryCreateComponent', () => {
  let component: CategoryCreateComponent;
  let fixture: ComponentFixture<CategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryCreateComponent,
        AdminSecondHeaderComponent,
        UploadFileComponent
      ],
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        RxReactiveFormsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        HttpClientTestingModule
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
    fixture = TestBed.createComponent(CategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
