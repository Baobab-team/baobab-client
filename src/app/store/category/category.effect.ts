import { CategoryService } from './category.service';
import { Actions, Effect, ofType } from '@NGRX/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CategoryModule } from './category.action';

@Injectable()
export class CategoryEffects {
  @Effect() Category$: Observable<CategoryModule.Actions> = this.actions
  .pipe(
    ofType(CategoryModule.ActionTypes.LOAD_LIST_CATEGORY),
    switchMap(() => this.categoryService.getCategories()),
    map(categories => new CategoryModule.SuccessListCategory(categories)),
    catchError(() => of(new CategoryModule.ErrorListCategory()))
  );

  constructor(
    private categoryService: CategoryService,
    private actions: Actions
  ) {}
}