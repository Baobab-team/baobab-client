import { BUSINESS_STATUSES } from 'src/app/core/models';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch: string;
  status?: BUSINESS_STATUSES[];

  constructor(
    querySearch?: string,
    status: BUSINESS_STATUSES[] = null
  ) {
    this.querySearch = querySearch;
    if (status) {
      this.status = status;
    }
  }
}
