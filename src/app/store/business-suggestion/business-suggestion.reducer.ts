import { Log, LOG_TYPES } from '@Models/log.model';
import { BusinessSuggestion, BusinessSuggestionState } from '@Models/business.model';
import { HttpErrorResponse } from '@angular/common/http';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as SuggestionActions from './business-suggestion.action'


const initialState: BusinessSuggestionState = {
  data: undefined,
  businessSuggestion: undefined,
  log: undefined,
  error: undefined
};


export const suggestionReducer = createReducer<BusinessSuggestionState>(
  initialState,
  on( SuggestionActions.createBusinessSuggestionSuccess, (state, action): BusinessSuggestionState => {
    return {
      ...state,
      businessSuggestion: action.suggestion,
    };
  }),
  on( SuggestionActions.createBusinessSuggestionFailure, (state, action): BusinessSuggestionState => {
    return {
      ...state,
      error: action.error
    };
  }),

)
  
