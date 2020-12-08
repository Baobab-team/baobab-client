import { LOG_TYPES, Log } from '@Models/log.model';
import { CategoryState } from '@Models/business.model';
import { CategoryModule } from '@Store/category/category.action';
import { CategoryFilters } from '@Models/search.model';

const categoryInitialState: CategoryState = {
  data: [],
  loading: false,
  loaded: false,
  log: null,
  filters: undefined
};

export function CategoryReducer(
  state: CategoryState = categoryInitialState,
  action: CategoryModule.Actions
): CategoryState {
  switch (action.type) {
    case CategoryModule.ActionTypes.LOAD_LIST_CATEGORY:
      return {
        ...state,
        loading: true,
        filters: action.filters
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
        loaded: true,
        log: {
          type: LOG_TYPES.SUCCESS,
          message: 'admin.category.log.create_success'
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
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
}
