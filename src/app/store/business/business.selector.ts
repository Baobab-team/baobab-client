import { AppState } from '../index';
import { createSelector } from '@ngrx/store';


export const selectBusinessState$ = (state: AppState) => state.businesses;

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
export const selectBusinessDetail$ = createSelector(
  selectBusinessState$,
  (business) => business.detailBusiness
);
export const selectBusinessErrors$ = createSelector(
  selectBusinessState$,
  (business) => business.logs
);
