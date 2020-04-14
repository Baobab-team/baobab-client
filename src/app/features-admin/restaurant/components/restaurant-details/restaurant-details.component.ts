import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Business } from 'src/app/core/models';
import { BusinessModule } from 'src/app/store/business/business.action';
import { selectBusinessLoading$, selectBusinessDetail$ } from 'src/app/store/business/business.selector';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  public businessLoading$: Observable<boolean>;
  public business$: Observable<Business>;
  public unsubsscribe$ = new Subject<void>();
  menuHeader = [
    {
      title: 'shared.menu-left-admin.link_list_restaurant',
      link: '/admin/restaurants'
    },
    {
      title: 'shared.menu-left-admin.link_add_restaurant',
      link: '/admin/restaurant'
    }
  ];
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

  ngOnInit(): void {
    this.store.dispatch(new BusinessModule.LoadDetailBusiness(
      +this.actiavteRoute.snapshot.queryParamMap.get('id')
    ));
  }

}
