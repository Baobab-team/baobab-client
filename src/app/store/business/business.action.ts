import { Business, Search } from 'src/app/core/models';


export namespace BusinessModule {

  export enum ActionTypes {
    // search business
    LOAD_SEARCH_BUSINESS = '[Business] Load Search Business',
    SUCCESS_SEARCH_BUSINESS = '[Business] Success Search Business',
    ERROR_SEARCH_BUSINESS = '[Business] Error Search Business',
    // detail business
    LOAD_DETAIL_BUSINESS = '[Business] Load Detail Business',
    SUCCESS_DETAIL_BUSINESS = '[Business] Success Detail Business',
    ERROR_DETAIL_BUSINESS = '[Business] ERROR Detail Business',
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

  export class ErrorSearchBusiness {
    readonly type = ActionTypes.ERROR_SEARCH_BUSINESS;
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

  export class ErrorDetailBusiness {
    readonly type = ActionTypes.ERROR_DETAIL_BUSINESS;
  }

  export type Actions = LoadSearchBusiness
                        | SuccessSearchBusiness
                        | ErrorSearchBusiness
                        | LoadDetailBusiness
                        | ErrorDetailBusiness
                        | SuccessDetailBusiness;
}
