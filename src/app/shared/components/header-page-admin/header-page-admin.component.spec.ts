import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageAdminComponent } from './header-page-admin.component';
import { TranslateLoader, TranslateCompiler, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { RouterModule } from '@angular/router';


describe('HeaderPageAdminComponent', () => {
  let component: HeaderPageAdminComponent;
  let fixture: ComponentFixture<HeaderPageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
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
      declarations: [ HeaderPageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
