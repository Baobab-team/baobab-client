import { takeUntil } from 'rxjs/operators';
import { Business } from '@Models/business.model';
import { Search } from '@Models/search.model';
import { selectBusinessLoading$, selectBusinesses$ } from '@Store/business/business.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { BusinessModule } from '@Store/business/business.action';
import {Logger} from '@Services/logger.service';

const log = new Logger('search-business.component');

@Component({
  selector: 'app-search-business',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit, OnDestroy {
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
    log.debug('init');
    this.store.dispatch(new BusinessModule.LoadSearchBusiness(this.getParams()));
  }

  onSubmit(params: Search) {
    log.debug('run search:', params.search);
    this.router.navigate(
      ['/search'],
      {queryParams: params}
    ).then(
      () => {
        this.store.dispatch(new BusinessModule.LoadSearchBusiness(this.getParams(params)));
    });
  }

  selectBusiness(businessId: number) {
    this.router.navigate(['/detail', businessId]);
  }

  private getParams(param?): Search {
    if (param) {
      return param;
    } else {
      return new Search(
        this.actiavteRoute.snapshot.queryParamMap.get('querySearch'),
      );
    }
  }
}
