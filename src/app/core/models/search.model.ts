import { BUSINESS_STATUSES } from 'src/app/core/models';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch: string;
  // tslint:disable-next-line: variable-name
  exclude_deleted?: boolean;
  status?: BUSINESS_STATUSES[];

  constructor(
    querySearch = '',
    status?: BUSINESS_STATUSES[],
    // tslint:disable-next-line: variable-name
    exclude_deleted?: boolean,
  ) {
    this.querySearch = querySearch;
    this.exclude_deleted = exclude_deleted;
    if (status) {
      this.status = status;
    }
  }
}
