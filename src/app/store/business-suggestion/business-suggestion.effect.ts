import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SuggestionActions from './business-suggestion.action';
import { BusinessSuggestionService } from './business-suggestion.service';


@Injectable()
export class BusinessSuggestionEffects {

  constructor(
    private businessSuggestionService: BusinessSuggestionService,
    private actions$: Actions
  ) { }

  createBusinessSuggestion = createEffect(() => {
    return this.actions$.pipe(
      ofType(SuggestionActions.createBusinessSuggestion),
      mergeMap(
        (createBusinessSuggestion) => this.businessSuggestionService.saveBusinessSuggestions(createBusinessSuggestion.payload)
          .pipe(
            map(suggestion => SuggestionActions.createBusinessSuggestionSuccess({ suggestion })),
            catchError(error => of(SuggestionActions.createBusinessSuggestionFailure({ error })))
          )
      )
    )
  });

}

