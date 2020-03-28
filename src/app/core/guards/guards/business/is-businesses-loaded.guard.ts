import { BusinessModule } from 'src/app/store/business/business.action';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectBusinessLoaded$ } from 'src/app/store/business/business.selector';
import { BUSINESS_STATUSES } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class IsBusinessesLoadedGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(selectBusinessLoaded$),
      map(
        (isLoaded) => {
          if (!isLoaded) {
            this.store.dispatch(new BusinessModule.LoadSearchBusiness({
              querySearch: ''
            }));
          }
          return true;
        })
    );
  }

}
