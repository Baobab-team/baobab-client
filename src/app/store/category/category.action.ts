import { Category } from 'src/app/core/models';
import { HttpErrorResponse } from '@angular/common/http';

export namespace CategoryModule {

  export enum ActionTypes {
    LOAD_LIST_CATEGORY = '[Category] Load list category',
    SUCCESS_LIST_CATEGORY = '[Category] Success list category',
    ERROR_BUSINESS_CATEGORY = '[Category] Error list category',
  }

  export class LoadListCategory {
    readonly type = ActionTypes.LOAD_LIST_CATEGORY;
  }

  export class SuccessListCategory {
    readonly type = ActionTypes.SUCCESS_LIST_CATEGORY;
    payload: Category[];
    constructor(payload: Category[]) {
      this.payload = payload;
    }
  }

  export class ErrorBusinessCategory {
    readonly type = ActionTypes.ERROR_BUSINESS_CATEGORY;
    constructor(public payload: HttpErrorResponse) { }
  }

  export type Actions = LoadListCategory
                        | SuccessListCategory
                        | ErrorBusinessCategory;
}
