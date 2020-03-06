import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecondHeaderComponent } from './admin-second-header.component';

describe('AdminSecondHeaderComponent', () => {
  let component: AdminSecondHeaderComponent;
  let fixture: ComponentFixture<AdminSecondHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
