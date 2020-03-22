import { CategoryState } from './../../core/models/business.model';
import { CategoryModule } from './category.action';

const categoryInitialState: CategoryState = {
  data: [],
  loading: false,
  loaded: false
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
    case CategoryModule.ActionTypes.ERROR_LIST_CATEGORY:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
