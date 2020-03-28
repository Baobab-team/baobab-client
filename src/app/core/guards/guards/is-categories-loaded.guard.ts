import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { CategoryModule } from 'src/app/store/category/category.action';
import { map } from 'rxjs/operators';
import { selectCategoryLoaded$ } from 'src/app/store/category/category.selector';


@Injectable({
  providedIn: 'root'
})
export class IsCategoriesLoadedGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.pipe(
        select(selectCategoryLoaded$),
        map(
          (isLoaded) => {
            if (!isLoaded) {
              this.store.dispatch(new CategoryModule.LoadListCategory());
            }
            return true;
          })
      );
  }

}
