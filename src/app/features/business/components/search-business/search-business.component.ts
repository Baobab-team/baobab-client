import { takeUntil } from 'rxjs/operators';
import { Business, BUSINESS_STATUSES } from '@Models/business.model';
import { Search } from '@Models/search.model';
import { selectBusinessLoading$, selectBusinesses$ } from '@Store/business/business.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { BusinessModule } from '@Store/business/business.action';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-business',
  templateUrl: './search-business.component.html',
  styleUrls: ['./search-business.component.scss']
})
export class SearchBusinessComponent implements OnInit, OnDestroy {
  public businessesloading$: Observable<boolean>;
  public businesses$: Observable<(string | Business)[]>;
  public unsubsscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private actiavteRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.businessesloading$ = store.pipe(
      select(selectBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.businesses$ = store.pipe(
      select(selectBusinesses$),
      takeUntil(this.unsubsscribe$)
    );
  }
  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  ngOnInit() {
    this.store.dispatch(new BusinessModule.LoadSearchBusiness(this.getParams()));
  }

  onSubmit(params: Search) {
    this.router.navigate(
      ['/search'],
      {queryParams: params}
    ).then(
      () => {
        this.store.dispatch(new BusinessModule.LoadSearchBusiness(this.getParams(params)));
    });
  }

  selectBusiness(businessId: number) {
    // this.store.dispatch(new BusinessModule.LoadDetailBusiness(business));
    this.router.navigate(
      ['/detail', businessId],
    );
  }

  private getParams(param?): Search {
    if (param) {
      return new Search({
        ...param,
        status: [BUSINESS_STATUSES.ACCEPTED],
        exclude_deleted: true
      });
    }
    return new Search(
      this.actiavteRoute.snapshot.queryParamMap.get('querySearch'),
      [BUSINESS_STATUSES.ACCEPTED],
      true
    );
  }
}
