import { CategoryModule } from './../../../../store/category/category.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/core/models';
import { selectCategories$, selectBusinessLoading$ } from '../../../../store/category/category.selector';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  readonly categoriesLoading$: Observable<boolean>;
  readonly categories$: Observable<Category[]>;
  public unsubsscribe$ = new Subject<void>();
  readonly columns = [
    { prop: 'id', sortable: false },
    { prop: 'name', name: 'Nom', sortable: true, dir: 'asc' },
  ];
  readonly menuHeader = [
    {
      title: 'shared.menu-left-admin.link_list_categories',
      link: '/admin/categories'
    },
    {
      title: 'shared.menu-left-admin.link_add_restaurant',
      link: '/admin/restaurant'
    }
  ];

  constructor(
    private store: Store<any>
  ) {
    this.categoriesLoading$ = store.pipe(
      select(selectBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.categories$ = store.pipe(
      select(selectCategories$),
      takeUntil(this.unsubsscribe$)
    );
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  ngOnInit() {
    this.store.dispatch(new CategoryModule.LoadListCategory());
  }

  // onFilterChange(event: { target: { value: string; }; }) {
  //   const val = event.target.value.toLowerCase();
  //   console.log(val)

    // filter our data
    // const temp = this.rows.filter(function(d) {
    //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    // });
    // update the rows
    // this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  // }

}
