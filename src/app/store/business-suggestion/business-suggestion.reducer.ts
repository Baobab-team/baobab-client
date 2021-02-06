import { BusinessSuggestionState } from '@Models/business.model';
import { BusinessSuggestionModule } from './business-suggestion.action';
import { LOG_TYPES } from '@Models/log.model';

const businessSuggestionInitialState: BusinessSuggestionState = {
  data: undefined,
  businessSuggestion: undefined,
  loading: false,
  loaded: false,
  log: undefined
};


export function BusinessSuggestionReducer(
  state: BusinessSuggestionState = businessSuggestionInitialState,
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
        ]
      };
    case BusinessSuggestionModule.ActionTypes.ERROR_BUSINESS_SUGGESTION_ACTION:
      return {
        ...state,
        log: {
          type: LOG_TYPES.ERROR,
          message: (action.payload.error.message === undefined) ? action.payload.message : action.payload.error.message
        },
        loading: false
      };
    default:
      return state;
  }
}
