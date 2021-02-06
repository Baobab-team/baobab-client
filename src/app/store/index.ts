import { BusinessState, CategoryState, BusinessSuggestionState } from '@Models/business.model';
import { BusinessEffects } from '@Store/business/business.effect';
import { BusinessReducer } from '@Store/business/business.reducer';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { CategoryEffects } from '@Store/category/category.effect';
import { CategoryReducer } from '@Store/category/category.reducer';
import { BusinessSuggestionReducer } from '@Store/business-suggestion/business-suggestion.reducer';
import { BusinessSuggestionEffects } from '@Store/business-suggestion/business-suggestion.effect';

const reducers = {
  businesses: BusinessReducer,
  category: CategoryReducer,
  business_suggestions: BusinessSuggestionReducer,
};

export const appEffects =  [
  BusinessEffects,
  CategoryEffects,
  BusinessSuggestionEffects
];

export interface AppState {
  businesses: BusinessState;
  category: CategoryState;
  business_suggestions: BusinessSuggestionState;
}

export function getReducers() {
  return reducers;
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');
