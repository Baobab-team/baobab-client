import { Restaurant, Search } from 'src/app/core/models';
import { selectBusinessLoading$, selectBusinesses$ } from '../../../../store/business/business.selector';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { BusinessModule } from 'src/app/store/business/business.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public businessesloading$: Observable<boolean>;
  public businesses$: Observable<Restaurant[]>;

  constructor(
    private router: Router,
    private actiavteRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.businessesloading$ = store.pipe(
      select(selectBusinessLoading$)
    );
    this.businesses$ = store.pipe(
      select(selectBusinesses$),
    );
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
