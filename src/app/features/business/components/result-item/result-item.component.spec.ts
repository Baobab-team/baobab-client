import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultItemComponent } from './result-item.component';
import {TruncatePipe} from '@Pipes/truncate.pipe';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';

describe('ResultItemComponent', () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule
      ],
      declarations: [
        ResultItemComponent,
        TruncatePipe
      ],
      providers: [TruncatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
