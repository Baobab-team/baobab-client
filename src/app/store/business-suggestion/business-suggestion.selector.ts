import { AppState } from '@Store/index';
import { createSelector } from '@ngrx/store';


export const selectBusinessSuggestionState$ = (state: AppState) => state.business_suggestions;

// business list
export const selectBusinesses$ = createSelector(
  selectBusinessSuggestionState$,
  (businesses) => businesses.data
);
export const selectBusinessLoading$ = createSelector(
  selectBusinessSuggestionState$,
  (businesses) => businesses.loading
);
export const selectBusinessLoaded$ = createSelector(
  selectBusinessSuggestionState$,
  (businesses) => businesses.loaded
);

// autocomplete business list
export const selectAutocompleteBusinesses$ = createSelector(
  selectBusinessSuggestionState$,
  (businesses) => businesses.autocompleteData
);
export const selectAutocompleteBusinessLoading$ = createSelector(
  selectBusinessSuggestionState$,
  (businesses) => businesses.loading
);
export const selectAutocompleteBusinessLoaded$ = createSelector(
  selectBusinessSuggestionState$,
  (businesses) => businesses.loaded
);

// select business detail
export const selectBusinessDetail$ = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.business
);

// business create
export const selectBusinessCreateLoading$ = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.business
);
export const selectBusinessCreate$ = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.data
);

// csv business create
export const selectCsvBusinessCreateLoading$ = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.business
);
export const selectCsvBusinessCreate$ = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.data
);

// business error
export const selectBusinessErrors$ = createSelector(
  selectBusinessSuggestionState$,
  (business) => business.log
);
