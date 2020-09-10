import { AppState } from '@Store/index';
import { createSelector } from '@ngrx/store';


export const selectBusinessState$ = (state: AppState) => state.businesses;

// business list
export const selectBusinesses$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.data.results
);
export const selectBusinessLoading$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.loading
);
export const selectBusinessLoaded$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.loaded
);

// autocomplete business list
export const selectAutocompleteBusinesses$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.autocompleteData
);
export const selectAutocompleteBusinessLoading$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.loading
);
export const selectAutocompleteBusinessLoaded$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.loaded
);

// select business detail
export const selectBusinessDetail$ = createSelector(
  selectBusinessState$,
  (business) => business.business
);

// business create
export const selectBusinessCreateLoading$ = createSelector(
  selectBusinessState$,
  (business) => business.business
);
export const selectBusinessCreate$ = createSelector(
  selectBusinessState$,
  (business) => business.data
);

// csv business create
export const selectCsvBusinessCreateLoading$ = createSelector(
  selectBusinessState$,
  (business) => business.business
);
export const selectCsvBusinessCreate$ = createSelector(
  selectBusinessState$,
  (business) => business.data
);

// business error
export const selectBusinessErrors$ = createSelector(
  selectBusinessState$,
  (business) => business.log
);
