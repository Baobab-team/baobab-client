import { BusinessState } from '@Models/business.model';
import { BusinessSuggestionModule } from './business-suggestion.action';
import { LOG_TYPES } from '@Models/log.model';
import { Pagination } from '@Models/search.model';

const businessInitialState: BusinessState = {
  data: Pagination,
  search: undefined,
  autocompleteData: [],
  businessId: NaN,
  business: undefined,
  loading: false,
  loaded: false,
  log: undefined
};


export function BusinessReducer(
  state: BusinessState = businessInitialState,
  action: BusinessSuggestionModule.Actions
): BusinessState {
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
          message: 'admin.business.log.success'
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
