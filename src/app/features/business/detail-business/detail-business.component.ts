import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { selectBusinessDetail$, selectBusinessLoading$ } from '@Store/business/business.selector';
import {Business, BUSINESS_SOCIAL_LINKS} from '@Models/business.model';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { BusinessModule } from '@Store/business/business.action';
import { ActivatedRoute } from '@angular/router';
import {Logger} from '@Services/logger.service';

const log = new Logger('detail-business.component');

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

  getLogo(type: BUSINESS_SOCIAL_LINKS) {
    const pathBase = 'fab ';
    let socialLogo = null;

    switch (type) {
      case BUSINESS_SOCIAL_LINKS.FACEBOOK:
        socialLogo = 'fa-facebook';
        break;
      case BUSINESS_SOCIAL_LINKS.INSTAGRAM:
        socialLogo = 'fa-instagram';
        break;
      case BUSINESS_SOCIAL_LINKS.LINKEDIN:
        socialLogo = 'fa-linkedin';
        break;
      case BUSINESS_SOCIAL_LINKS.SNAPCHAT:
        socialLogo = 'fa-snapchat';
        break;
      case BUSINESS_SOCIAL_LINKS.TWITTER:
        socialLogo = 'fa-twitter';
        break;
    }

    return pathBase + socialLogo;
  }

  getDay(day) {
    let aDay = null;

    switch (day) {
      case 1:
        aDay = 'calendar.days.monday';
        break;
      case 2:
        aDay = 'calendar.days.tuesday';
        break;
      case 3:
        aDay = 'calendar.days.wednesday';
        break;
      case 4:
        aDay = 'calendar.days.thursday';
        break;
      case 5:
        aDay = 'calendar.days.friday';
        break;
      case 6:
        aDay = 'calendar.days.saturday';
        break;
      case 7:
        aDay = 'calendar.days.sunday';
        break;
    }

    return aDay;
  }

}
