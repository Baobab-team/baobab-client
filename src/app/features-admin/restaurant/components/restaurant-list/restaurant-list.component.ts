import { Business, Log, LOG_TYPES } from 'src/app/core/models';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { selectBusinessLoading$, selectBusinesses$, selectBusinessErrors$ } from '../../../../store/business/business.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  menuHeader = [
    {
      title: 'shared.menu-left-admin.link_add_restaurant',
      link: '/admin/restaurant'
    },
    {
      title: 'shared.menu-left-admin.link_list_restaurant',
      link: '/admin/restaurants'
    }
  ];
  private unsubsscribe$ = new Subject<void>();
  readonly businessesLoading$: Observable<boolean>;
  readonly businesses$: Observable<Business[]>;
  readonly businessLogs$: Observable<Log>;
  readonly columns = [
    { prop: 'id', sortable: false },
    { prop: 'name', name: 'Nom', sortable: true, dir: 'asc' },
    { prop: 'website', name: 'website', sortable: true, dir: 'asc' },
    { prop: 'email', name: 'email', sortable: true, dir: 'asc' },
    { prop: 'status', name: 'status', sortable: true, dir: 'asc' },
  ];

  constructor(
    private store: Store<any>,
    private toastr: ToastrService
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
        //  else {
        //   this.toastr.success(dialog.message);
        // }
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.businessLogs$.subscribe();
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

}
