import { AppState } from '@Store/index';
import { createSelector } from '@ngrx/store';


export const selectBusinessSuggestionState$ = (state: AppState) => state.business_suggestions;


// business create
export const selectBusinessSuggestionCreateLoading$ = createSelector(
  selectBusinessSuggestionState$,
  (bs) => bs.businessSuggestion
);
export const selectBusinessSuggesetionCreate$ = createSelector(
  selectBusinessSuggestionState$,
  (bs) => bs.data
);


// business error
export const getError = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.error
);
