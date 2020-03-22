import { createSelector } from '@ngrx/store';
import { AppState } from './../index';


export const selectCategoryState$ = (state: AppState) => state.category;

export const selectCategories$ = createSelector(
  selectCategoryState$,
  (category) => category.data
);
export const selectBusinessLoading$ = createSelector(
  selectCategoryState$,
  (category) => category.loading
);
export const selectBusinessLoaded$ = createSelector(
  selectCategoryState$,
  (category) => category.loaded
);
