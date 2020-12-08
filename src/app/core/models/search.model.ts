import {BUSINESS_STATUSES, Category} from '@Models/business.model';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch?: string;
  // tslint:disable-next-line: variable-name
  exclude_deleted? = true;
  status?: BUSINESS_STATUSES[];
  @prop()
  category?: string;

  constructor(
    querySearch?,
    category?: string,
    // tslint:disable-next-line: variable-name
    exclude_deleted?,
    status?: BUSINESS_STATUSES[],
  ) {
    if (querySearch) {
      this.querySearch = querySearch;
    }
    if (exclude_deleted) {
      this.exclude_deleted = exclude_deleted;
    }
    if (status) {
      this.status = status;
    }
    if (category) {
      this.category = category;
    }
  }
}

export class CategoryFilters{
  only_root : boolean;

  constructor(
    only_root?:boolean
  ) {
    if (only_root) {
      this.only_root = only_root;
    }
  }
}