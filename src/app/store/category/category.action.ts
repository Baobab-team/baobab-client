import { Category } from 'src/app/core/models';

export namespace CategoryModule {

  export enum ActionTypes {
    LOAD_LIST_CATEGORY = '[Category] Load list category',
    SUCCESS_LIST_CATEGORY = '[Category] Success list category',
    ERROR_LIST_CATEGORY = '[Category] Error list category',
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

  export class ErrorListCategory {
    readonly type = ActionTypes.ERROR_LIST_CATEGORY;
  }

  export type Actions = LoadListCategory
                        | SuccessListCategory
                        | ErrorListCategory;
}
