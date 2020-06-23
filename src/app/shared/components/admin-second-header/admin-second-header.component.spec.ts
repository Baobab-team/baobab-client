import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecondHeaderComponent } from './admin-second-header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'app';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { RouterModule } from '@angular/router';

describe('AdminSecondHeaderComponent', () => {
  let component: AdminSecondHeaderComponent;
  let fixture: ComponentFixture<AdminSecondHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
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
      declarations: [ AdminSecondHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSecondHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
