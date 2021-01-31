import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BusinessSuggestionModule } from '@Store/business-suggestion/business-suggestion.action';
import { BusinessSuggestionService } from './business-suggestion.service';


@Injectable()
export class BusinessSuggestionEffects {

  // save business
  @Effect() LoadCreateBusiness$: Observable<BusinessSuggestionModule.Actions> = this.actions$
  .pipe(
    ofType<BusinessSuggestionModule.LoadCreateBusinessSuggestion>(BusinessSuggestionModule.ActionTypes.LOAD_CREATE_BUSINESS_SUGGESTION),
    switchMap((businessSuggestion: BusinessSuggestionModule.LoadCreateBusinessSuggestion) => this.businessSuggestionService.saveBusinessSuggestions(businessSuggestion.payload)),
    map(businessSuggestion => new BusinessSuggestionModule.SuccessCreateBusinessSuggestion(businessSuggestion)),
    catchError((err) => of(new BusinessSuggestionModule.ErrorBusinessSuggestionAction(err)))
  );



  constructor(
    private businessSuggestionService: BusinessSuggestionService,
    private actions$: Actions
  ) {}
}

