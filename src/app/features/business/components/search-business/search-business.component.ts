import { takeUntil } from 'rxjs/operators';
import { Restaurant, Search } from 'src/app/core/models';
import { selectBusinessLoading$, selectBusinesses$ } from '../../../../store/business/business.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import { BusinessModule } from 'src/app/store/business/business.action';

@Component({
  selector: 'app-search-business',
  templateUrl: './search-business.component.html',
  styleUrls: ['./search-business.component.scss']
})
export class SearchBusinessComponent implements OnInit, OnDestroy {
  public businessesloading$: Observable<boolean>;
  public businesses$: Observable<Restaurant[]>;
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
    this.store.dispatch(new BusinessModule.LoadInitBusiness(this.getQueryString()));
  }

  getQueryString(): Search {
    return {
      querySearch: this.actiavteRoute.snapshot.queryParamMap.get('querySearch')
    };
  }

  onSubmit(params: Search) {
    this.router.navigate(
      ['/search'],
      {queryParams: params}
    ).then(
      (data) => {
        (data) ?
        this.store.dispatch(new BusinessModule.LoadInitBusiness(params))
        // TODO: cette partie sera améliorée lors de la gestion des notifications
        :  console.log('une erreur est survenue lors de votre recherche');
      }
    );


  }
}
