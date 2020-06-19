import { HttpParams } from '@angular/common/http';
import {environment} from 'environments';
import { Const } from 'environments/const';

export class CoreService {
  BASE_URL_API = environment.baseApiUrl + '/' + Const.apiVersion;

  /**
   * convert object to HttpParams object
   */
  toHttpParams(obj: object): HttpParams {
    return Object.getOwnPropertyNames(obj).reduce(
      (p, key) => p.set(key, obj[key]),
      new HttpParams()
    );
  }
}
