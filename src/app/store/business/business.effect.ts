import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BusinessModule } from '@Store/business/business.action';
import { BusinessService } from './business.service';


@Injectable()
export class BusinessEffects {
  // search businesses
  @Effect() LoadSearchBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadSearchBusiness>(BusinessModule.ActionTypes.LOAD_SEARCH_BUSINESS),
    switchMap((loadSearchBusiness: BusinessModule.LoadSearchBusiness) => this.businessService.getBusinesses(loadSearchBusiness.payload)),
    map(businesses => new BusinessModule.SuccessSearchBusiness(businesses)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  @Effect() LoadSearchAutocompleteBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadSearchAutocompleteBusiness>(BusinessModule.ActionTypes.LOAD_SEARCH_AUTOCOMPLETE_BUSINESS),
    switchMap((LoadSearchAutocompleteBusiness: BusinessModule.LoadSearchAutocompleteBusiness) =>
      this.businessService.getBusinessAutocomplete(LoadSearchAutocompleteBusiness.payload)),
    map(businesses => new BusinessModule.SuccessSearchAutocompleteBusiness(businesses)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  @Effect() LoadDetailBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadDetailBusiness>(BusinessModule.ActionTypes.LOAD_DETAIL_BUSINESS),
    switchMap((businessId: BusinessModule.LoadDetailBusiness) => this.businessService.getBusiness(businessId.payload)),
    map(business => new BusinessModule.SuccessDetailBusiness(business)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  // save business
  @Effect() LoadCreateBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadCreateBusiness>(BusinessModule.ActionTypes.LOAD_CREATE_BUSINESS),
    switchMap((business: BusinessModule.LoadCreateBusiness) => this.businessService.saveBusiness(business.payload)),
    map(business => new BusinessModule.SuccessCreateBusiness(business)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  // save csv business
  @Effect() LoadCreateCsvBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadCreateCsvBusiness>(BusinessModule.ActionTypes.LOAD_CREATE_CSV_BUSINESS),
    switchMap((file: BusinessModule.LoadCreateCsvBusiness) => this.businessService.saveCsvBusiness(file.payload)),
    map(business => new BusinessModule.SuccessCreateCsvBusiness(business)),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  // delete business
  @Effect() LoadDeleteBusiness$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessModule.LoadDeleteBusiness>(BusinessModule.ActionTypes.LOAD_DELETE_BUSINESS),
    switchMap((businessId: BusinessModule.LoadDeleteBusiness) => this.businessService.deleteBusiness(businessId.payload)),
    map(business => new BusinessModule.SuccessDeleteBusiness()),
    catchError((err) => of(new BusinessModule.ErrorBusinessAction(err)))
  );

  constructor(
    private businessService: BusinessService,
    private actions$: Actions
  ) {}
}

