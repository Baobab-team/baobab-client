import { Search, Business } from 'src/app/core/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments';
import {Observable} from 'rxjs';
import { CoreService } from '../../core/services';


@Injectable({
  providedIn: 'root'
})
export class BusinessService extends CoreService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  public getBusinesses(params: Search): Observable<Business[]> {
    return this.httpClient.get<Business[]>(
      this.BASE_URL_API + '/' + environment.paths_api.businesses,
      {
        params: this.toHttpParams(params)
      }
    );
  }

  public getBusiness(id: number): Observable<Business> {
    return this.httpClient.get<Business>(
      this.BASE_URL_API + '/' + environment.paths_api.businesses + '/' + id,
    );
  }
}
