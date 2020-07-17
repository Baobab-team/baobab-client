import { BUSINESS_STATUSES } from '@Models/business.model';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch: string;
  // tslint:disable-next-line: variable-name
  exclude_deleted = true;
  status?: BUSINESS_STATUSES[];

  constructor(
    querySearch = '',
    // tslint:disable-next-line: variable-name
    exclude_deleted = true,
    status?: BUSINESS_STATUSES[],
  ) {
    this.querySearch = querySearch;
    this.exclude_deleted = exclude_deleted;
    if (status) {
      this.status = status;
    }
  }
}
