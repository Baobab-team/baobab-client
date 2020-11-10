/** Angular Imports */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpHeaders
} from '@angular/common/http';
import {environment} from 'environments';

/** rxjs Imports */
import { Observable } from 'rxjs';

// import {I18nService} from '../services/core/i18n.service';

/**
 * Http request interceptor to prefix a request with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() {}
  /**
   * Intercepts a Http request and prefixes it with `environment.serverUrl`.
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // by pass the traduction files
    if (request.url.indexOf('fr.json') > 0 || request.url.indexOf('en.json') > 0) {
      return next.handle(request);
    }

    const token = environment.tokenKey;
    let header = request.headers;

    if (request.headers.has('Content-Type')) {
      header = new HttpHeaders({
        'Content-Type':  'application/json'
      });
    }

    if (token) {
      header = header.append('Authorization', 'Token ' + token);
    }

    // const apiProvider = '/' + this.i18nService.language;

    const requestTmp = request.clone({
      headers: header,
      url: request.url
    });

    return next.handle(requestTmp);
  }
}

