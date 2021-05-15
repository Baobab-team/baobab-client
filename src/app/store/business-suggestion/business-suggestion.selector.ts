import { createSelector } from '@ngrx/store';
import { AppState } from '@Store/index';


const getSuggestionFeatureState =  (state: AppState) => state.business_suggestions;


// business suggestion success
export const getSuggestionSuccess = createSelector(
  getSuggestionFeatureState,
  (business) => business.businessSuggestion
);

// business error
export const getError = createSelector(
  getSuggestionFeatureState,
  (business) => business.error
);
