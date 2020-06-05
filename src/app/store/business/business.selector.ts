import { AppState } from '@Store/index';
import { createSelector } from '@ngrx/store';


export const selectBusinessState$ = (state: AppState) => state.businesses;

// business list
export const selectBusinesses$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.data
);
export const selectBusinessLoading$ = createSelector(
  selectBusinessState$,
  (businesses) => businesses.loading
);
export const selectBusinessLoaded$ = createSelector(
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

// business error
export const selectBusinessErrors$ = createSelector(
  selectBusinessState$,
  (business) => business.log
);
