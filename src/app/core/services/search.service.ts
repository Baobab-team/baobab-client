import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import {ServiceCoreService} from './service-core.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService extends ServiceCoreService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  public getSearch(params: {
    offset?: number;
    limit?: number;
    searchText?: string;
  }): Observable<any> {
    return this.httpClient.get<any>(
      environment.paths_api.search,
      {
        params: this.toHttpParams(params)
      }
    );
  }
}
