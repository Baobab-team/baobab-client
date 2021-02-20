import { BusinessSuggestionModule } from './business-suggestion.action';
import { Log, LOG_TYPES } from '@Models/log.model';
import { BusinessSuggestion } from '@Models/business.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface BusinessSuggestionState {
  data: any;
  businessSuggestion: BusinessSuggestion
  loading: boolean;
  loaded: boolean;
  log: Log;
  error: HttpErrorResponse;
}

const initialState: BusinessSuggestionState = {
  data: undefined,
  businessSuggestion: undefined,
  loading: false,
  loaded: false,
  log: undefined,
  error: undefined
};


export function BusinessSuggestionReducer(
  state: BusinessSuggestionState = initialState,
  action: BusinessSuggestionModule.Actions
): BusinessSuggestionState {
  switch (action.type) {
    case BusinessSuggestionModule.ActionTypes.LOAD_CREATE_BUSINESS_SUGGESTION:
      return {
        ...state,
        loading: true
      };
    case BusinessSuggestionModule.ActionTypes.SUCCESS_CREATE_BUSINESS_SUGGESTION:
      return {
        ...state,
        loading: false,
        loaded: true,
        log: {
          type: LOG_TYPES.SUCCESS,
          message: 'admin.business.suggestion.log.success'
        },
        data: [
          ...state.data,
          action.payload
        ],
        error: null
      };
    case BusinessSuggestionModule.ActionTypes.ERROR_BUSINESS_SUGGESTION_ACTION:
      return {
        ...state,
        log: {
          type: LOG_TYPES.ERROR,
          message: (action.payload.error.message === undefined) ? action.payload.message : action.payload.error.message
        },
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
