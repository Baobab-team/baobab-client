import { BusinessState } from './../../core/models/business.model';
import { BusinessModule } from './business.action';
import { LOG_TYPES } from 'src/app/core/models';

const restaurantInitialState: BusinessState = {
  data: [],
  search: undefined,
  businessId: NaN,
  detailBusiness: undefined,
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
    case BusinessModule.ActionTypes.LOAD_DETAIL_BUSINESS:
      return {
        ...state,
        loading: true,
        businessId: action.payload
      };
    case BusinessModule.ActionTypes.SUCCESS_DETAIL_BUSINESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        detailBusiness: action.payload
      };
    case BusinessModule.ActionTypes.ERROR_BUSINESS_ACTION:
      return {
        ...state,
        logs: { type: LOG_TYPES.ERROR, message: action.payload.message },
        loading: false
      };
    default:
      return state;
  }
}
