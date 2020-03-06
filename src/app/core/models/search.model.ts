import { prop, trim } from '@rxweb/reactive-form-validators';


export class Search {
  @prop()
  @trim()
  querySearch: string;
  // private _category: string;

  constructor(
    querySearch?: string
    // categoy?: string
  ) {
    this.querySearch = querySearch;
    // if (categoy) {
    //   this._category = categoy;
    // }
  }
}
