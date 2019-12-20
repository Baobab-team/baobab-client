import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserializable, ResponseApi} from '../models';
import { SearchField} from '../models/search-field';
import {ServiceCoreService} from './service-core.service';

@Injectable({
  providedIn: 'root',
})
export class ApiRestGenericLibService<
  T extends Deserializable
> extends ServiceCoreService{
  public url: string;

  // Class déclaration from type
  c: new () => T;

  constructor(public http: HttpClient) {
    super();
  }

  get(url: string): Observable<T> {
    return this.http
      .get<any>(url)
      .pipe(map(data => new this.c().deserialize(data)));
  }

  getById(id: number): Observable<T> {
    return this.http
      .get<any>(this.url + '/' + id)
      .pipe(map(data => new this.c().deserialize(data)));
  }

  list(): Observable<ResponseApi<T>> {
    return this.http
      .get<any>(this.url, )
      .pipe(
        map((responseApi: ResponseApi<T>) => {
          responseApi.results = responseApi.results.map(data =>
            new this.c().deserialize(data)
          );
          return responseApi;
        })
      );
  }

  search(searchFields: SearchField): Observable<ResponseApi<T>> {

    return this.http
      .get<any>(this.url, {
        params: this.toHttpParams(searchFields)
      })
      .pipe(
        map((responseApi: ResponseApi<T>) => {
          responseApi.results = responseApi.results.map(data =>
            new this.c().deserialize(data)
          );
          return responseApi;
        })
      );
  }

  post(object: T): Observable<T> {
    return this.http
      .post<T>(this.url, object, )
      .pipe(map(data => new this.c().deserialize(data)));
  }

  patch(url: string, patchContent: any): Observable<T> {
    return this.http
      .patch<T>(url, patchContent)
      .pipe(map(data => new this.c().deserialize(data)));
  }

  delete(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }
}
