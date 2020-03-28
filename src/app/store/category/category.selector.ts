import { createSelector } from '@ngrx/store';
import { AppState } from './../index';


export const selectCategoryState$ = (state: AppState) => state.category;

export const selectCategories$ = createSelector(
  selectCategoryState$,
  (category) => category.data
);
export const selectCategoryLoading$ = createSelector(
  selectCategoryState$,
  (category) => category.loading
);
export const selectCategoryLoaded$ = createSelector(
  selectCategoryState$,
  (category) => category.loaded
);
export const selectCategoryErrors$ = createSelector(
  selectCategoryState$,
  (category) => category.logs
);
