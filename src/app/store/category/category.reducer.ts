import { LOG_TYPES, Log } from './../../core/models/log.model';
import { CategoryState } from './../../core/models/business.model';
import { CategoryModule } from './category.action';

const categoryInitialState: CategoryState = {
  data: [],
  loading: false,
  loaded: false,
  log: null
};

export function CategoryReducer(
  state: CategoryState = categoryInitialState,
  action: CategoryModule.Actions
): CategoryState {
  switch (action.type) {
    case CategoryModule.ActionTypes.LOAD_LIST_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case CategoryModule.ActionTypes.SUCCESS_LIST_CATEGORY:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    case CategoryModule.ActionTypes.LOAD_CREATE_CATEGORY:
      return {
        ...state,
        loading: true
      };
    case CategoryModule.ActionTypes.SUCCESS_CREATE_CATEGORY:
      return {
        ...state,
        loading: false,
        log: {
          type: LOG_TYPES.SUCCESS,
          message: 'admin.category.log.success'
        },
        data: [
          ...state.data,
          action.payload
        ]
      };
    case CategoryModule.ActionTypes.ERROR_BUSINESS_CATEGORY:
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
