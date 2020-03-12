import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@NGRX/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BusinessModule } from './business.action';
import { BusinessService } from './business.service';


@Injectable()
export class BusinessEffects {
  @Effect() Restaurant$: Observable<BusinessModule.Actions> = this.actions$
  .pipe(
    ofType(BusinessModule.ActionTypes.LOAD_INIT_BUSINESS),
    switchMap((querySearch: BusinessModule.LoadInitBusiness )=> {
      return this.BusinessService.getBusinesses(querySearch.payload)
    }),
    map(businesses => new BusinessModule.SuccessInitBusiness(businesses)),
    catchError(() => of(new BusinessModule.ErrorInitBusiness()))
  );

  constructor(
    private BusinessService: BusinessService,
    private actions$: Actions
  ) {}
}

