import {BUSINESS_STATUSES, Category} from '@Models/business.model';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch?: string;
  // tslint:disable-next-line: variable-name
  exclude_deleted = true;
  status?: BUSINESS_STATUSES[];
  category: Category;

  constructor(
    querySearch?, 
    // tslint:disable-next-line: variable-name
    exclude_deleted?,
    status?: BUSINESS_STATUSES[],
    category?: Category
  ) {
    if(querySearch){
      this.querySearch = querySearch;
    }
    if(exclude_deleted){
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
