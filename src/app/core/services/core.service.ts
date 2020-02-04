import { HttpParams } from '@angular/common/http';
import {environment} from '../../../environments';

export class CoreService {
  BASE_URL_API = environment.baseApiUrl + '/' + environment.apiVersion;

  /**
   * convert object to HttpParams object
   * @param {Object} obj
   * @returns {HttpParams}
   */
  toHttpParams(obj: object): HttpParams {
    return Object.getOwnPropertyNames(obj).reduce(
      (p, key) => p.set(key, obj[key]),
      new HttpParams()
    );
  }
}
