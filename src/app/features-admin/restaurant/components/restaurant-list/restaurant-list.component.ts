import { ModalComponentComponent } from './../../../../shared/components/modal-component/modal-component.component';
import { BusinessModule } from '@Store/business/business.action';
import { Log, LOG_TYPES } from '@Models/log.model';
import { Business } from '@Models/business.model';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy, AfterViewInit, Renderer2 as Renderer, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { selectBusinessLoading$, selectBusinesses$, selectBusinessErrors$ } from '@Store/business/business.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { BTN_TYPE } from '@Models/datatable.model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '@Models/modal.model';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  dtTrigger = new Subject();
  readonly menuHeader = [
    {
      title: 'shared.menu-left-admin.link_list_restaurant',
      link: '/admin/restaurants'
    },
    {
      title: 'shared.menu-left-admin.link_add_restaurant',
      link: '/admin/restaurant'
    }
  ];
  private unsubscribe$ = new Subject<void>();
  readonly businessesLoading$: Observable<boolean>;
  readonly businesses$: Observable<Business[]>;
  readonly businessLogs$: Observable<Log>;
  dtOptions: DataTables.Settings = {};

  constructor(
    private store: Store<any>,
    private toastr: ToastrService,
    private renderer: Renderer,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.businessesLoading$ = store.pipe(
      select(selectBusinessLoading$),
      takeUntil(this.unsubscribe$)
    );

    this.businesses$ = store.pipe(
      select(selectBusinesses$),
      takeUntil(this.unsubscribe$)
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
      takeUntil(this.unsubscribe$)
    );
    this.businessLogs$.subscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.renderer.listen('document', 'click', (event) => {
      const businessId = event.target.getAttribute('data-business-id');
      const businessName = event.target.getAttribute('data-business-name');
      const btnType = event.target.getAttribute('btn-type');

      if (businessId) {

        if (btnType === BTN_TYPE.VIEW) {
          this.router.navigate(['/admin/restaurant/details'], { queryParams: {id: businessId} });
        } else if (btnType === BTN_TYPE.EDIT) {
          console.log(BTN_TYPE.EDIT, businessId);
        } else if (btnType === BTN_TYPE.DELETE) {
          this.deleteRestaurant(+businessId, businessName);
        }
      }
    });
  }

  ngOnInit() {
    this.getDatatableOption();
    this.dtOptions.ajax = (dataTablesParameters: any, callback) => {
      return this.businesses$.subscribe(
        (data) => {
          callback({
            data
          });
      });
    };
  }

  private deleteRestaurant(businessId: number, businessName: string) {
    const modalRef = this.modalService.open(ModalComponentComponent);
    modalRef.componentInstance.modal = new Modal('Confirmer', 'Voulez-vous vraiment supprimer ' + businessName + '?', null);
    modalRef.result.then((result) => {
      if (result) {
        this.store.dispatch(new BusinessModule.LoadDeleteBusiness(businessId));
        this.toastr.success('Actualisez la page pour mettre a jour votre tableau', 'Suppression reussie');
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // TODO: find how reload datatable after one delete
          dtInstance.destroy();
          // this.dtTrigger.next();
          // dtInstance.draw();
        });
        // setTimeout(() => {
        //     this.dtTrigger.next();
        // });
      }
    });
  }

  private getDatatableOption(): void {
    this.dtOptions = {
      destroy: true,
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
          width: '14%',
          render(data, type, full) {
            return `
              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-0">
                  <a class="btn btn-sm btn-link"
                    data-business-id="` + data + `" data-business-name="` + full.name + `" btn-type="` + BTN_TYPE.VIEW + `">view</a>
                </li>
                <li class="list-inline-item mr-0">
                  <a class="btn btn-sm btn-link"
                    data-business-id="` + data + `" data-business-name="` + full.name + `" btn-type="` + BTN_TYPE.EDIT + `">edit</a>
                </li>
                <li class="list-inline-item mr-0">
                  <a class="btn btn-sm btn-link"
                    data-business-id="` + data + `" data-business-name="` + full.name + `" btn-type="` + BTN_TYPE.DELETE + `">delete</a>
                  </li>
              <ul>
            `;
          }
        }
      ]
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.dtTrigger.unsubscribe();
  }
}
