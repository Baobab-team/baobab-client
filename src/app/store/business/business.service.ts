import { Restaurant, Search } from 'src/app/core/models';
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

  public getBusinesses(params: Search): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(
      this.BASE_URL_API + '/' + environment.paths_api.search,
      {
        params: this.toHttpParams(params)
      }
    );
  }
}
