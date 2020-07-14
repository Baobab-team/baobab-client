import { ModalComponentComponent } from '../../../../shared';
import { BusinessModule } from '@Store/business/business.action';
import { Log, LOG_TYPES } from '@Models/log.model';
import { Business } from '@Models/business.model';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy, Renderer2 as Renderer } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { selectBusinessLoading$, selectBusinesses$, selectBusinessErrors$ } from '@Store/business/business.selector';
import { takeUntil, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '@Models/modal.model';
import {Logger} from '@Services/logger.service';

const log = new Logger('business-list.component');

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private gridApi;
  readonly menuHeader = [
    {
      title: 'admin.business.link_list_business',
      link: '/admin/businesses'
    },
    {
      title: 'admin.business.link_add_business',
      link: '/admin/business'
    }
  ];
  readonly businessesLoading$: Observable<boolean>;
  readonly businesses$: Observable<Business[]>;
  readonly businessLogs$: Observable<Log>;
  readonly defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    floatingFilter: true,
  };
  columnDefs = [
    {
      headerName: 'Nom',
      field: 'name'
    },
    {
      headerName: 'Categorie',
      field: 'category',
      valueFormatter: this.categoryFormater
    },
    {
      headerName: 'capacite',
      field: 'capacity',
    },
    {
      headerName: 'Email',
      field: 'email',
    },
    {
      headerName: 'Site web',
      field: 'website',
    },
    {
      headerName: 'Status',
      field: 'status',
    }
  ];

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
        log.error(dialog.message);
        if (dialog.type === LOG_TYPES.ERROR) {
          this.toastr.error(dialog.message);
        }
      }),
      takeUntil(this.unsubscribe$)
    );
    this.businessLogs$.subscribe();
  }

  ngOnInit() {
    log.debug('init');
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  categoryFormater(param) {
    if (param.value) {
      return param.value.name;
    }
    return undefined;
  }

  private deleteBusiness(businessId: number, businessName: string) {
    const modalRef = this.modalService.open(ModalComponentComponent);
    modalRef.componentInstance.modal = new Modal('Confirmer', 'Voulez-vous vraiment supprimer ' + businessName + '?', null);
    modalRef.result.then((result) => {
      if (result) {
        this.store.dispatch(new BusinessModule.LoadDeleteBusiness(businessId));
        this.toastr.success('Actualisez la page pour mettre a jour votre tableau', 'Suppression reussie');
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
