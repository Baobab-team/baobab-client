import { Category } from '@Models/business.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryFilters } from '@Models/search.model';

export namespace CategoryModule {

  export enum ActionTypes {
    // list category
    LOAD_LIST_CATEGORY = '[Category] Load list category',
    SUCCESS_LIST_CATEGORY = '[Category] Success list category',
    // create category
    LOAD_CREATE_CATEGORY = '[Category] Load create category',
    SUCCESS_CREATE_CATEGORY = '[Category] Success create category',
    // error store category
    ERROR_BUSINESS_CATEGORY = '[Category] Error list category',
  }

  // list category
  export class LoadListCategory {
    readonly type = ActionTypes.LOAD_LIST_CATEGORY;
    filters: CategoryFilters;
    constructor(filters: CategoryFilters) {
      this.filters = filters;
    }
  }

  export class SuccessListCategory {
    readonly type = ActionTypes.SUCCESS_LIST_CATEGORY;
    payload: Category[];
    constructor(payload: Category[]) {
      this.payload = payload;
    }
  }

  // create category
  export class SuccessCreateCategory {
    readonly type = ActionTypes.SUCCESS_CREATE_CATEGORY;
    payload: Category;
    constructor(payload: Category) {
      this.payload = payload;
    }
  }

  export class LoadCreateCategory {
    readonly type = ActionTypes.LOAD_CREATE_CATEGORY;
    payload: Category;
    constructor(payload: Category) {
      this.payload = payload;
    }
  }

  export class ErrorCategoryAction {
    readonly type = ActionTypes.ERROR_BUSINESS_CATEGORY;
    constructor(public payload: HttpErrorResponse) { }
  }

  export type Actions = LoadListCategory
                        | SuccessListCategory
                        | LoadCreateCategory
                        | SuccessCreateCategory
                        | ErrorCategoryAction;
}
