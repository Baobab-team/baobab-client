import { HttpErrorResponse } from '@angular/common/http';
import { BusinessSuggestion } from '@Models/business.model';
import { createAction, props } from '@ngrx/store';


export const createBusinessSuggestion = createAction(
  '[BusinessSuggestion] Create Business Suggestion',
  props<{ payload: BusinessSuggestion }>()
)

export const createBusinessSuggestionSuccess = createAction(
  '[BusinessSuggestion] Create Business Suggestion Success',
  props<{ suggestion: BusinessSuggestion }>()
)


export const createBusinessSuggestionFailure = createAction(
  '[BusinessSuggestion] Create Business Suggestion Failure',
  props<{ error: HttpErrorResponse }>()
)
