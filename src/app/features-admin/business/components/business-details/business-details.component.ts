import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Business } from '@Models/business.model';
import { BusinessModule } from '@Store/business/business.action';
import { selectBusinessLoading$, selectBusinessDetail$ } from '@Store/business/business.selector';
import {Logger} from '@Services/logger.service';

const log = new Logger('business-details.component');

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {
  public businessLoading$: Observable<boolean>;
  public business$: Observable<Business>;
  public unsubsscribe$ = new Subject<void>();
  menuHeader = [
    {
      title: 'admin.business.link_list_business',
      link: '/admin/businesses'
    },
    {
      title: 'admin.business.link_add_business',
      link: '/admin/business'
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
    log.debug('init');
    this.store.dispatch(new BusinessModule.LoadDetailBusiness(
      +this.actiavteRoute.snapshot.queryParamMap.get('id')
    ));
  }

}
