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
    // Error action business
    ERROR_BUSINESS_ACTION = '[Business] ERROR Detail Business',
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

  export class ErrorBusinessAction {
    readonly type = ActionTypes.ERROR_BUSINESS_ACTION;
    constructor(public payload: HttpErrorResponse) { }
  }

  export type Actions = LoadSearchBusiness
                        | SuccessSearchBusiness
                        | ErrorBusinessAction
                        | LoadDetailBusiness
                        | SuccessDetailBusiness;
}
