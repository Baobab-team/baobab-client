import { LOG_TYPES, Log } from './../../core/models/log.model';
import { CategoryState } from './../../core/models/business.model';
import { CategoryModule } from './category.action';

const categoryInitialState: CategoryState = {
  data: [],
  loading: false,
  loaded: false,
  logs: null
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
    case CategoryModule.ActionTypes.ERROR_BUSINESS_CATEGORY:
      return {
        ...state,
        logs: { type: LOG_TYPES.ERROR, message: action.payload.message },
        loading: false
      };
    default:
      return state;
  }
}
