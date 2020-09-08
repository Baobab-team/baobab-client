import {BUSINESS_STATUSES, Category} from '@Models/business.model';
import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  search?: string;
  // tslint:disable-next-line: variable-name
  status?: BUSINESS_STATUSES[];
  category: Category;

  constructor(
    search?, 
    // tslint:disable-next-line: variable-name
    status?: BUSINESS_STATUSES[],
    category?: Category
  ) {
    if(search){
      this.search = search;
    }
    if (status) {
      this.status = status;
    }
    if (category) {
      this.category = category;
    }
  }
}
