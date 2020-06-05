import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { selectBusinessDetail$, selectBusinessLoading$ } from '@Store/business/business.selector';
import { Business } from '@Models/business.model';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { BusinessModule } from '@Store/business/business.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-business',
  templateUrl: './detail-business.component.html',
  styleUrls: ['./detail-business.component.scss']
})
export class DetailBusinessComponent implements OnInit, OnDestroy {
  public businessLoading$: Observable<boolean>;
  public business$: Observable<Business>;
  public unsubsscribe$ = new Subject<void>();
  constructor(
    private store: Store<any>,
    private actiavteRoute: ActivatedRoute,
  ) {
    this.businessLoading$ = store.pipe(
      select(selectBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );

    this.business$ = store.pipe(
      select(selectBusinessDetail$),
      takeUntil(this.unsubsscribe$)
    );
  }

  ngOnInit() {
    this.store.dispatch(new BusinessModule.LoadDetailBusiness(
      +this.actiavteRoute.snapshot.queryParamMap.get('id')
    ));
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

}
