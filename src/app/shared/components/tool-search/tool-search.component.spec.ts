import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSearchComponent } from './tool-search.component';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory, AppRoutingModule } from 'app';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('ToolSearchComponent', () => {
  let component: ToolSearchComponent;
  let fixture: ComponentFixture<ToolSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        AppRoutingModule,
        RouterModule,
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
        })
      ],
      declarations: [ ToolSearchComponent ]
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
