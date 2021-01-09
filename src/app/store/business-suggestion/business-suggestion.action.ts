import { BusinessSuggestion } from '@Models/business.model';
import { Pagination, Search} from '@Models/search.model';
import { HttpErrorResponse } from '@angular/common/http';


export namespace BusinessSuggestionModule {

  export enum ActionTypes {
    // Load business suggestion
    LOAD_LIST_BUSINESS_SUGGESTION = '[BusinessSuggestion] Load List Business Suggestion',
    SUCCESS_LIST_BUSINESS_SUGGESTION = '[BusinessSuggestion] Success List Business Suggestion',
    // detail business suggestion
    LOAD_DETAIL_BUSINESS_SUGGESTION = '[BusinessSuggestion] Load Detail Business Suggestion',
    SUCCESS_DETAIL_BUSINESS_SUGGESTION = '[BusinessSuggestion] Success Detail Business Suggestion',
    // create business suggestion 
    LOAD_CREATE_BUSINESS_SUGGESTION = '[BusinessSuggestion] Load Create Business Suggestion',
    SUCCESS_CREATE_BUSINESS_SUGGESTION = '[BusinessSuggestion] Success Create Business Suggestion',
    // Error action business suggestion
    ERROR_BUSINESS_SUGGESTION_ACTION = '[BusinessSuggestion] ERROR Business Suggestion action',
  }

  // list business suggestion
  export class LoadListBusinessSuggestion {
    readonly type = ActionTypes.LOAD_LIST_BUSINESS_SUGGESTION;
  }

  export class SuccessListBusinessSuggestion {
    readonly type = ActionTypes.SUCCESS_LIST_BUSINESS_SUGGESTION;
    payload: BusinessSuggestion[];
    constructor(payload: BusinessSuggestion[]) {
      this.payload = payload;
    }
  }

  // detail business
  export class SuccessDetailBusinessSuggestion {
    readonly type = ActionTypes.SUCCESS_DETAIL_BUSINESS_SUGGESTION;
    payload: BusinessSuggestion;
    constructor(payload: BusinessSuggestion) {
      this.payload = payload;
    }
  }

  export class LoadDetailBusinessSuggestion {
    readonly type = ActionTypes.LOAD_DETAIL_BUSINESS_SUGGESTION;
    payload: number;
    constructor(payload: number) {
      this.payload = payload;
    }
  }

  // create business
  export class SuccessCreateBusinessSuggestion {
    readonly type = ActionTypes.SUCCESS_CREATE_BUSINESS_SUGGESTION;
    payload: BusinessSuggestion;
    constructor(payload: BusinessSuggestion) {
      this.payload = payload;
    }
  }

  export class LoadCreateBusinessSuggestion {
    readonly type = ActionTypes.LOAD_CREATE_BUSINESS_SUGGESTION;
    payload: BusinessSuggestion;
    constructor(payload: BusinessSuggestion) {
      this.payload = payload;
    }
  }


  export class ErrorBusinessSuggestionAction {
    readonly type = ActionTypes.ERROR_BUSINESS_SUGGESTION_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadListBusinessSuggestion
                        | SuccessListBusinessSuggestion
                        | LoadDetailBusinessSuggestion
                        | SuccessDetailBusinessSuggestion
                        | LoadCreateBusinessSuggestion
                        | SuccessCreateBusinessSuggestion
                        | ErrorBusinessSuggestionAction;
}
