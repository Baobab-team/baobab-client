import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageAdminComponent } from './header-page-admin.component';

describe('HeaderPageAdminComponent', () => {
  let component: HeaderPageAdminComponent;
  let fixture: ComponentFixture<HeaderPageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
