import { HttpParams } from '@angular/common/http';

export class ServiceCoreService {

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
