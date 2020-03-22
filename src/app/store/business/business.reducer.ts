import { BusinessState } from './../../core/models/business.model';
import { BusinessModule } from './business.action';

const restaurantInitialState: BusinessState = {
  data: [],
  search: null,
  loading: false,
  loaded: false
};


export function BusinessReducer(
  state: BusinessState = restaurantInitialState,
  action: BusinessModule.Actions
): BusinessState {
  switch (action.type) {
    case BusinessModule.ActionTypes.LOAD_SEARCH_BUSINESS:
      return {
        ...state,
        search: action.payload,
        loading: true
      };
    case BusinessModule.ActionTypes.SUCCESS_SEARCH_BUSINESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case BusinessModule.ActionTypes.ERROR_SEARCH_RBUSINESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
