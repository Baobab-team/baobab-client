import { LOG_TYPES, Log } from './../../../../core/models/log.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/core/models';
import { selectCategories$, selectBusinessLoading$, selectCategoryErrors$ } from '../../../../store/category/category.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  readonly categoriesLoading$: Observable<boolean>;
  readonly categories$: Observable<Category[]>;
  readonly categoryLogs$: Observable<Log>;
  private unsubsscribe$ = new Subject<void>();
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
    private store: Store<any>,
    private toastr: ToastrService
  ) {
    this.categoriesLoading$ = store.pipe(
      select(selectBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.categories$ = store.pipe(
      select(selectCategories$),
      takeUntil(this.unsubsscribe$)
    );
    this.categoryLogs$ = store.pipe(
      select(selectCategoryErrors$),
      tap((dialog) => {
        if (!dialog) {
          return;
        }
        if (dialog.type === LOG_TYPES.ERROR) {
          this.toastr.error(dialog.message);
        } else {
          this.toastr.success(dialog.message);
        }
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.categoryLogs$.subscribe();
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  ngOnInit() {}

}
