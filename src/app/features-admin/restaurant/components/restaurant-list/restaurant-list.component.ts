import { Business, Log, LOG_TYPES } from 'src/app/core/models';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy, Renderer2 as Renderer, AfterViewInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { selectBusinessLoading$, selectBusinesses$, selectBusinessErrors$ } from '../../../../store/business/business.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { initConfigDatatables, BTN_TYPE } from 'src/app/core/models/datatable';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy, AfterViewInit {
  menuHeader = [
    {
      title: 'shared.menu-left-admin.link_list_restaurant',
      link: '/admin/restaurants'
    },
    {
      title: 'shared.menu-left-admin.link_add_restaurant',
      link: '/admin/restaurant'
    }
  ];
  private unsubsscribe$ = new Subject<void>();
  readonly businessesLoading$: Observable<boolean>;
  readonly businesses$: Observable<Business[]>;
  readonly businessLogs$: Observable<Log>;
  readonly dtOptions = {
    ...initConfigDatatables,
    columns: [
      {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Categorie',
        data: 'category',
        render(data, type, row) {
          return data.name;
        }
      }, {
        title: 'Capacity',
        data: 'capacity'
      }, {
        title: 'Email',
        data: 'email'
      }, {
        title: 'Website',
        data: 'website'
      }, {
        title: 'Status',
        data: 'status'
      }, {
        title: 'Actions',
        data: 'id',
        width: '140',
        render(data, type, full) {
          return `
          <a class="btn btn-sm btn-link" business-id="` + data + `" btn-type="` + BTN_TYPE.VIEW + `">view</a>
          <a class="btn btn-sm btn-link" business-id="` + data + `" btn-type="` + BTN_TYPE.EDIT + `">edit</a>
          <a class="btn btn-sm btn-link" business-id="` + data + `" btn-type="` + BTN_TYPE.DELETE + `">delete</a>`;
        }
      }
    ],
    dom: 'Bfrtip',
    buttons: [
      'columnsToggle'
    ]
  };


  constructor(
    private store: Store<any>,
    private toastr: ToastrService,
    private renderer: Renderer,
    private router: Router
  ) {
    this.businessesLoading$ = store.pipe(
      select(selectBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );

    this.businesses$ = store.pipe(
      select(selectBusinesses$),
      takeUntil(this.unsubsscribe$)
    );

    this.businessLogs$ = store.pipe(
      select(selectBusinessErrors$),
      tap((dialog) => {
        if (!dialog) {
          return;
        }
        if (dialog.type === LOG_TYPES.ERROR) {
          this.toastr.error(dialog.message);
        }
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.businessLogs$.subscribe();
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.getAttribute('business-id')) {
        const businessId = event.target.getAttribute('business-id');
        const btnType = event.target.getAttribute('btn-type');

        if (btnType === BTN_TYPE.VIEW) {
          console.log(BTN_TYPE.VIEW, businessId)
          // this.router.navigate(['/admin/restaurants/' + businessId]);
        } else if (btnType === BTN_TYPE.EDIT) {
          console.log(BTN_TYPE.EDIT, businessId)
        } else if (btnType === BTN_TYPE.DELETE) {
          console.log(BTN_TYPE.DELETE, businessId)
        }
      }
    });
  }

  ngOnInit() {
    this.dtOptions.ajax = (dataTablesParameters: any, callback) => {
      return this.businesses$.subscribe(
        (data) => {
          callback({
            data
          });
      });
    };
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

}
