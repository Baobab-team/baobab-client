import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BusinessModule } from './business.action';
import { BusinessService } from './business.service';


@Injectable()
export class BusinessEffects {
  @Effect() Restaurant$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType(BusinessModule.ActionTypes.LOAD_SEARCH_BUSINESS),
    switchMap((querySearch: BusinessModule.LoadInitBusiness) => this.businessService.getBusinesses(querySearch.payload)),
    map(businesses => new BusinessModule.SuccessInitBusiness(businesses)),
    catchError(() => of(new BusinessModule.ErrorInitBusiness()))
  );

  constructor(
    private businessService: BusinessService,
    private actions$: Actions
  ) {}
}

