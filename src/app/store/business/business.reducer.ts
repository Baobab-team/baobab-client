import { BusinessState } from './../../core/models/business.model';
import { BusinessModule } from './business.action';

const restaurantInitialState: BusinessState = {
  data: [],
  loading: false,
  loaded: false
};


export function BusinessReducer(
  state: BusinessState = restaurantInitialState,
  action: BusinessModule.Actions
): BusinessState {
  switch (action.type) {
    case BusinessModule.ActionTypes.LOAD_INIT_BUSINESS:
      return {
        ...state,
        search: action.payload,
        loading: true
      };
    case BusinessModule.ActionTypes.SUCCESS_INIT_BUSINESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case BusinessModule.ActionTypes.ERROR_INT_RBUSINESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
