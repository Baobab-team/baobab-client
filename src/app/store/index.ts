import { BusinessState, CategoryState } from './../core/models/business.model';
import { BusinessEffects } from './business/business.effect';
import { BusinessReducer } from './business/business.reducer';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { CategoryEffects } from './category/category.effect';
import { CategoryReducer } from './category/category.reducer';

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
