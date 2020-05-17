import { Business, Search } from 'src/app/core/models';
import { HttpErrorResponse } from '@angular/common/http';


export namespace BusinessModule {

  export enum ActionTypes {
    // search business
    LOAD_SEARCH_BUSINESS = '[Business] Load Search Business',
    SUCCESS_SEARCH_BUSINESS = '[Business] Success Search Business',
    // detail business
    LOAD_DETAIL_BUSINESS = '[Business] Load Detail Business',
    SUCCESS_DETAIL_BUSINESS = '[Business] Success Detail Business',
    // create business
    LOAD_CREATE_BUSINESS = '[Business] Load Create Business',
    SUCCESS_CREATE_BUSINESS = '[Business] Success Create Business',
    // delete business
    LOAD_DELETE_BUSINESS = '[Business] Load Delete Business',
    SUCCESS_DELETE_BUSINESS = '[Business] Success Delete Business',
    // Error action business
    ERROR_BUSINESS_ACTION = '[Business] ERROR Business action',
  }

  // search business
  export class LoadSearchBusiness {
    readonly type = ActionTypes.LOAD_SEARCH_BUSINESS;
    payload: Search;
    constructor(payload: Search) {
      this.payload = payload;
    }
  }

  export class SuccessSearchBusiness {
    readonly type = ActionTypes.SUCCESS_SEARCH_BUSINESS;
    payload: Business[];
    constructor(payload: Business[]) {
      this.payload = payload;
    }
  }

  // detail business
  export class SuccessDetailBusiness {
    readonly type = ActionTypes.SUCCESS_DETAIL_BUSINESS;
    payload: Business;
    constructor(payload: Business) {
      this.payload = payload;
    }
  }

  export class LoadDetailBusiness {
    readonly type = ActionTypes.LOAD_DETAIL_BUSINESS;
    payload: number;
    constructor(payload: number) {
      this.payload = payload;
    }
  }

  // create business
  export class SuccessCreateBusiness {
    readonly type = ActionTypes.SUCCESS_CREATE_BUSINESS;
    payload: Business;
    constructor(payload: Business) {
      this.payload = payload;
    }
  }

  export class LoadCreateBusiness {
    readonly type = ActionTypes.LOAD_CREATE_BUSINESS;
    payload: Business;
    constructor(payload: Business) {
      this.payload = payload;
    }
  }

  // delete business
  export class SuccessDeleteBusiness {
    readonly type = ActionTypes.SUCCESS_DELETE_BUSINESS;
  }

  export class LoadDeleteBusiness {
    readonly type = ActionTypes.LOAD_DELETE_BUSINESS;
    payload: number;
    constructor(payload: number) {
      this.payload = payload;
    }
  }

  export class ErrorBusinessAction {
    readonly type = ActionTypes.ERROR_BUSINESS_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadSearchBusiness
                        | SuccessSearchBusiness
                        | ErrorBusinessAction
                        | LoadDetailBusiness
                        | SuccessDetailBusiness
                        | SuccessCreateBusiness
                        | LoadCreateBusiness
                        | LoadDeleteBusiness
                        | SuccessDeleteBusiness;
}
