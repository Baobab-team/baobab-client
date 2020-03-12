import { Business, Search } from 'src/app/core/models';


export namespace BusinessModule {

  export enum ActionTypes {
    LOAD_INIT_BUSINESS = '[Business] Load Init Business',
    SUCCESS_INIT_BUSINESS = '[Business] Success Init Business',
    ERROR_INT_RBUSINESS = '[Business] Error Init Business',
  }

  export class LoadInitBusiness {
    readonly type = ActionTypes.LOAD_INIT_BUSINESS;
    payload: Search;
    constructor(payload: Search) {
      this.payload = payload;
    }
  }

  export class SuccessInitBusiness {
    readonly type = ActionTypes.SUCCESS_INIT_BUSINESS;
    payload: Business[];
    constructor(payload: Business[]) {
      this.payload = payload;
    }
  }

  export class ErrorInitBusiness {
    readonly type = ActionTypes.ERROR_INT_RBUSINESS;
  }

  export type Actions = LoadInitBusiness
                        | SuccessInitBusiness
                        | ErrorInitBusiness;
}
