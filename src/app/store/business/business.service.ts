import { Pagination, Search } from '@Models/search.model';
import { Business } from '@Models/business.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Const} from 'environments/const';
import {Observable} from 'rxjs';
import { CoreService } from '@Services/core.service';


@Injectable({
  providedIn: 'root'
})
export class BusinessService extends CoreService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  public getBusinesses(params: Search): Observable<Pagination<Business>> {
    return this.httpClient.get<Pagination<Business>>(
      this.BASE_URL_API + '/' + Const.paths_api.businesses,
      {
        params: this.toHttpParams(params)
      }
    );
  }

  public getBusinessAutocomplete(params: Search): Observable<string[]>  {
    return this.httpClient.get<string[]>(
      this.BASE_URL_API + '/' + Const.paths_api.businesses + '/' + Const.paths_api.autocomplete,
      {
        params: this.toHttpParams(params)
      }
    );
  }

  public getBusiness(id: number): Observable<Business> {
    return this.httpClient.get<Business>(
      this.BASE_URL_API + '/' + Const.paths_api.businesses + '/' + id,
    );
  }

  public saveBusiness(business: Business): Observable<Business> {
    return this.httpClient.post<Business>(
      this.BASE_URL_API + '/' + Const.paths_api.businesses, business
    );
  }

  public saveCsvBusiness(csv: FormData): Observable<any> {
    return this.httpClient.post<Business>(
      this.BASE_URL_API + '/' + Const.paths_api.businesses_upload, csv
    );
  }

  public deleteBusiness(id: number): Observable<Business> {
    return this.httpClient.delete<Business>(
      this.BASE_URL_API + '/' + Const.paths_api.businesses + '/' + id,
    );
  }
}
