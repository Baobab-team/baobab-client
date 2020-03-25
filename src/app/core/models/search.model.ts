import { prop, trim } from '@rxweb/reactive-form-validators';

export class Search {
  @prop()
  @trim()
  querySearch: string;
  status: string;

  constructor(
    querySearch?: string,
    status: string = null
  ) {
    this.querySearch = querySearch;
    this.status = status;
  }
}
