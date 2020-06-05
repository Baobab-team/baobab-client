import { BusinessState, CategoryState } from '@Models/business.model';
import { BusinessEffects } from '@Store/business/business.effect';
import { BusinessReducer } from '@Store/business/business.reducer';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { CategoryEffects } from '@Store/category/category.effect';
import { CategoryReducer } from '@Store/category/category.reducer';

const reducers = {
  businesses: BusinessReducer,
  category: CategoryReducer
};

export const appEffects =  [
  BusinessEffects,
  CategoryEffects
];

export interface AppState {
  businesses: BusinessState;
  category: CategoryState;
}

export function getReducers() {
  return reducers;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
