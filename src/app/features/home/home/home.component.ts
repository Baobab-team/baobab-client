import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CategoryFilters } from '@Models/search.model';
import { Category } from '@Models/business.model';
import { select, Store } from '@ngrx/store';
import {Logger} from '@Services/logger.service';
import { CategoryModule } from '@Store/category/category.action';
import { selectCategories$, selectCategoryLoading$ } from '@Store/category/category.selector';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const log = new Logger('home.component');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categoriesLoading$: Observable<boolean>;
  public categories$: Observable<(string | Category)[]>;
  public unsubsscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private store: Store<any>
  ) { 
    this.categoriesLoading$ = store.pipe(
      select(selectCategoryLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.categories$ = store.pipe(
      select(selectCategories$),
      takeUntil(this.unsubsscribe$)
    );
  }

  ngOnInit() {
    log.debug('init');
    this.store.dispatch(new CategoryModule.LoadListCategory(this.getFilters()));
  }

  search($event: {
    querySearch: string
  }) {
    log.debug('run search');
    if ($event.querySearch) {
      this.router.navigate(['search'], {queryParams: $event});
    }
  }

  selectCategory(category: string) {
    this.router.navigate(
      ['/search'],
      {queryParams: {category: category}}
    )
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  private getFilters(){
    return new CategoryFilters(true);
  }
}
