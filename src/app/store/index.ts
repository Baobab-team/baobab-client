import { BusinessState } from './../core/models/business.model';
import { BusinessEffects } from './business/business.effect';
import { BusinessReducer } from './business/business.reducer';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

const reducers = {
  businesses: BusinessReducer
};
export const appEffects =  [
  BusinessEffects
];

export interface AppState {
  businesses: BusinessState;
}

export function getReducers() {
  return reducers;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
