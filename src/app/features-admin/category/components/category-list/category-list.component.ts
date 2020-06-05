import { LOG_TYPES, Log } from './../../../../core/models/log.model';
import { Component, OnInit, OnDestroy, Renderer2 as Renderer, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Category } from 'src/app/core/models';
import { selectCategories$, selectCategoryErrors$, selectCategoryLoading$ } from '../../../../store/category/category.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { initConfigDatatables, BTN_TYPE } from 'src/app/core/models/datatable';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy, AfterViewInit {
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
      title: 'shared.menu-left-admin.link_create_category',
      link: '/admin/categories/create'
    }
  ];
  readonly dtOptions = {
    ...initConfigDatatables,
    columns: [
      {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Actions',
        data: 'id',
        width: '140',
        render(data, type, full) {
          return `
          <a class="btn btn-sm btn-link" category-id="` + data + `" btn-type="` + BTN_TYPE.VIEW + `">view</a>
          <a class="btn btn-sm btn-link" category-id="` + data + `" btn-type="` + BTN_TYPE.EDIT + `">edit</a>
          <a class="btn btn-sm btn-link" category-id="` + data + `" btn-type="` + BTN_TYPE.DELETE + `">delete</a>`;
        }
      }
    ]
  };

  constructor(
    private store: Store<any>,
    private toastr: ToastrService,
    private renderer: Renderer,
    private router: Router
  ) {
    this.categoriesLoading$ = store.pipe(
      select(selectCategoryLoading$),
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

  ngOnInit() {
    this.dtOptions.ajax = (dataTablesParameters: any, callback) => {
      return this.categories$.subscribe(
        (data) => {
          callback({
            data
          });
      });
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.getAttribute('category-id')) {
        const categoryId = event.target.getAttribute('category-id');
        const btnType = event.target.getAttribute('btn-type');

        if (btnType === BTN_TYPE.VIEW) {
          console.log(BTN_TYPE.VIEW, categoryId);
          // this.router.navigate(['/admin/restaurants/' + businessId]);
        } else if (btnType === BTN_TYPE.EDIT) {
          console.log(BTN_TYPE.EDIT, categoryId);
        } else if (btnType === BTN_TYPE.DELETE) {
          console.log(BTN_TYPE.DELETE, categoryId);
        }
      }
    });
  }

}
