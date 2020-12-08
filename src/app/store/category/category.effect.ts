import { CategoryService } from '@Store/category/category.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CategoryModule } from '@Store/category/category.action';

@Injectable()
export class CategoryEffects {
  // list category
  @Effect() Category$: Observable<CategoryModule.Actions> = this.actions$
  .pipe(
    ofType(CategoryModule.ActionTypes.LOAD_LIST_CATEGORY),
    switchMap((loadListCategory: CategoryModule.LoadListCategory) => this.categoryService.getCategories(loadListCategory.filters)),
    map(categories => new CategoryModule.SuccessListCategory(categories)),
    catchError((err) => of(new CategoryModule.ErrorCategoryAction(err)))
  );

  // create category
  @Effect() LoadCreateBusiness$: Observable<CategoryModule.Actions> = this.actions$
  .pipe(
    ofType<CategoryModule.LoadCreateCategory>(CategoryModule.ActionTypes.LOAD_CREATE_CATEGORY),
    switchMap((category: CategoryModule.LoadCreateCategory) => this.categoryService.saveCategory(category.payload)),
    map(category => new CategoryModule.SuccessCreateCategory(category)),
    catchError((err) => of(new CategoryModule.ErrorCategoryAction(err)))
  );

  constructor(
    private categoryService: CategoryService,
    private actions$: Actions
  ) {}
}
