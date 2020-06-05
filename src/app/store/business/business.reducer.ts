import { BusinessState } from './../../core/models/business.model';
import { BusinessModule } from './business.action';
import { LOG_TYPES } from '@Models/log.model';

const restaurantInitialState: BusinessState = {
  data: [],
  search: undefined,
  businessId: NaN,
  business: undefined,
  loading: false,
  loaded: false,
  log: undefined
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
        business: action.payload
      };
    case BusinessModule.ActionTypes.LOAD_CREATE_BUSINESS:
      return {
        ...state,
        loading: false
      };
    case BusinessModule.ActionTypes.SUCCESS_CREATE_BUSINESS:
      return {
        ...state,
        loading: false,
        log: {
          type: LOG_TYPES.SUCCESS,
          message: 'admin.restaurant.log.success'
        },
        data: [
          ...state.data,
          action.payload
        ]
      };
    case BusinessModule.ActionTypes.LOAD_DELETE_BUSINESS:
      return {
        ...state,
        loading: true,
        businessId: action.payload
      };
    case BusinessModule.ActionTypes.SUCCESS_DELETE_BUSINESS:
        return {
          ...state,
          loading: false,
          loaded: true,
        };
    case BusinessModule.ActionTypes.ERROR_BUSINESS_ACTION:
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
