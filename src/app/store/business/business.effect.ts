import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BusinessModule } from './business.action';
import { BusinessService } from './business.service';
import { Business } from 'src/app/core/models';


@Injectable()
export class BusinessEffects {
  @Effect() LoadSearchBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadSearchBusiness>(BusinessModule.ActionTypes.LOAD_SEARCH_BUSINESS),
    switchMap((querySearch: BusinessModule.LoadSearchBusiness) => this.businessService.getBusinesses(querySearch.payload)),
    map(businesses => new BusinessModule.SuccessSearchBusiness(businesses)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  @Effect() LoadDetailBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadDetailBusiness>(BusinessModule.ActionTypes.LOAD_DETAIL_BUSINESS),
    switchMap((businessId: BusinessModule.LoadDetailBusiness) => this.businessService.getBusiness(businessId.payload)),
    map(business => new BusinessModule.SuccessDetailBusiness(business)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  @Effect() LoadCreateBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadCreateBusiness>(BusinessModule.ActionTypes.LOAD_CREATE_BUSINESS),
    switchMap((businessId: BusinessModule.LoadCreateBusiness) => this.businessService.saveBusiness(businessId.payload)),
    map(business => new BusinessModule.SuccessCreateBusiness(business)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  constructor(
    private businessService: BusinessService,
    private actions$: Actions
  ) {}
}

