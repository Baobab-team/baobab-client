import {BUSINESS_STATUSES, Category} from '@Models/business.model';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch?: string;
  // tslint:disable-next-line: variable-name
  exclude_deleted?: boolean;
  status?: BUSINESS_STATUSES[];
  @prop()
  category?: string;
  page?: number;


  constructor(
    querySearch?,
    category?: string,
    page?: number,
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
    if (page) {
      this.page = page;
    }
  }
}

export class Pagination<T>{
  items: T[]
  next: string
  previous: string
  items_count: number
  total_pages: number
}