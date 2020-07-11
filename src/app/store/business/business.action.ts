import { Business } from '@Models/business.model';
import { Search} from '@Models/search.model';
import { HttpErrorResponse } from '@angular/common/http';


export namespace BusinessModule {

  export enum ActionTypes {
    // search business
    LOAD_SEARCH_BUSINESS = '[Business] Load Search Business',
    SUCCESS_SEARCH_BUSINESS = '[Business] Success Search Business',
    // search autocomplete business
    LOAD_SEARCH_AUTOCOMPLETE_BUSINESS = '[Business] Load Autocomplete Search Business',
    SUCCESS_SEARCH_AUTOCOMPLETE_BUSINESS = '[Business] Success Autocomplete Search Business',
    // detail business
    LOAD_DETAIL_BUSINESS = '[Business] Load Detail Business',
    SUCCESS_DETAIL_BUSINESS = '[Business] Success Detail Business',
    // create business
    LOAD_CREATE_BUSINESS = '[Business] Load Create Business',
    SUCCESS_CREATE_BUSINESS = '[Business] Success Create Business',
    // create business with csv
    LOAD_CREATE_CSV_BUSINESS = '[Business] Load Create csv Business',
    SUCCESS_CREATE_CSV_BUSINESS = '[Business] Success Create csv Business',
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

    // search autocomplete business
  export class LoadSearchAutocompleteBusiness {
    readonly type = ActionTypes.LOAD_SEARCH_AUTOCOMPLETE_BUSINESS;
    payload: Search;
    constructor(payload: Search) {
      this.payload = payload;
    }
  }

  export class SuccessSearchAutocompleteBusiness {
    readonly type = ActionTypes.SUCCESS_SEARCH_AUTOCOMPLETE_BUSINESS;
    payload: string[];
    constructor(payload: string[]) {
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

  // create csv business
  export class SuccessCreateCsvBusiness {
    readonly type = ActionTypes.SUCCESS_CREATE_CSV_BUSINESS;
    payload: Business;
    constructor(payload: Business) {
      this.payload = payload;
    }
  }

  export class LoadCreateCsvBusiness {
    readonly type = ActionTypes.LOAD_CREATE_CSV_BUSINESS;
    payload: FormData;
    constructor(payload: FormData) {
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
                        | LoadSearchAutocompleteBusiness
                        | SuccessSearchAutocompleteBusiness
                        | LoadDetailBusiness
                        | SuccessDetailBusiness
                        | SuccessCreateBusiness
                        | LoadCreateBusiness
                        | SuccessCreateCsvBusiness
                        | LoadCreateCsvBusiness
                        | LoadDeleteBusiness
                        | SuccessDeleteBusiness
                        | ErrorBusinessAction;
}
