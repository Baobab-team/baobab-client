import { Business, Search } from 'src/app/core/models';


export namespace BusinessModule {

  export enum ActionTypes {
    LOAD_SEARCH_BUSINESS = '[Business] Load Search Business',
    SUCCESS_SEARCH_BUSINESS = '[Business] Success Search Business',
    ERROR_SEARCH_BUSINESS = '[Business] Error Search Business',
  }

  export class LoadInitBusiness {
    readonly type = ActionTypes.LOAD_SEARCH_BUSINESS;
    payload: Search;
    constructor(payload: Search) {
      this.payload = payload;
    }
  }

  export class SuccessInitBusiness {
    readonly type = ActionTypes.SUCCESS_SEARCH_BUSINESS;
    payload: Business[];
    constructor(payload: Business[]) {
      this.payload = payload;
    }
  }

  export class ErrorInitBusiness {
    readonly type = ActionTypes.ERROR_SEARCH_BUSINESS;
  }

  export type Actions = LoadInitBusiness
                        | SuccessInitBusiness
                        | ErrorInitBusiness;
}
