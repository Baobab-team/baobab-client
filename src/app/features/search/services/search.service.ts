import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../../environments';
import {Observable} from 'rxjs';
import { CoreService } from '../../../core/services';
import { Business } from '../../../core/models';


@Injectable({
  providedIn: 'root'
})
export class SearchService extends CoreService {

  constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  public getBusiness(params: {
    name: string,
    description?: string
                     }): Observable<Business[]> {
    return this.httpClient.get<Business[]>(
      this.BASE_URL_API + '/' + environment.paths_api.search,
      {
        params: this.toHttpParams(params)
      }
    );
  }
}
