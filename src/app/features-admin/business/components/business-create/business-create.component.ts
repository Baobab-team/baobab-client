import { BUSINESS_PAYMENT_TYPES, BUSINESS_LANGUAGE, Category } from '@Models/business.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { selectCategories$, selectCategoryLoading$, selectCategoryErrors$ } from '@Store/category/category.selector';
import { selectBusinessCreate$, selectBusinessErrors$ } from '@Store/business/business.selector';
import { Log, LOG_TYPES } from '@Models/log.model';
import { Business } from '@Models/business.model';
import { ToastrService } from 'ngx-toastr';
import { BusinessModule } from '@Store/business/business.action';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.component.html',
  styleUrls: ['./business-create.component.scss']
})
export class BusinessCreateComponent implements OnInit, OnDestroy {
  businessForm: FormGroup;
  keys = Object.keys;
  paymentTypes = BUSINESS_PAYMENT_TYPES;
  languages = BUSINESS_LANGUAGE;
  submitted = false;
  menuHeader = [
    {
      title: 'admin.business.link_add_business',
      link: '/admin/business'
    },
    {
      title: 'admin.business.link_list_business',
      link: '/admin/businesses'
    }
  ];

  readonly categoriesLoading$: Observable<boolean>;
  readonly categories$: Observable<Category[]>;
  readonly businessLoading$: Observable<boolean>;
  readonly business$: Observable<Business[]>;
  readonly categoryLogs$: Observable<Log>;
  readonly businessLog$: Observable<Log>;
  public unsubsscribe$ = new Subject<void>();

  constructor(
    private formBuilder: RxFormBuilder,
    private store: Store<any>,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {
    // load categories
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
        this.toastr.error(dialog.message);
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.categoryLogs$.subscribe();

    // select business created
    this.business$ = store.pipe(
      select(selectBusinessCreate$),
      takeUntil(this.unsubsscribe$)
    );
    this.business$.subscribe();

    this.businessLog$ = store.pipe(
      select(selectBusinessErrors$),
      tap((dialog) => {
        if (!dialog && !this.submitted) {
          return;
        }
        if (dialog.type === LOG_TYPES.ERROR) {
          this.toastr.error(dialog.message);
        } else {
          this.toastr.success(this.translateService.instant(dialog.message));
        }
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.businessLog$.subscribe();
  }
  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  // convenience getter for easy access to form fields
  get f() { return this.businessForm.controls; }

  ngOnInit() {
    this.businessForm = this.formBuilder.group(
      {
        name: ['', [RxwebValidators.required({message: 'admin.business.message_errors.name_required'})]],
        description: [''],
        notes: [''],
        website: ['', [RxwebValidators.url({message: 'admin.business.message_errors.url_valid'})]],
        email: ['', [
          RxwebValidators.required({message: 'admin.business.message_errors.email_required'}),
          RxwebValidators.email({message: 'admin.business.message_errors.email_valid'})
        ]],
        // slogan: [''],
        // language: ['', [RxwebValidators.required({message: 'admin.business.message_errors.language_required'})]],
        capacity: ['', [RxwebValidators.numeric({message: 'admin.business.message_errors.numeric_valid'})]],
        // paymentType: [''],
        category: ['', [
          RxwebValidators.required({message: 'admin.business.message_errors.category_required'})
        ]]
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.businessForm.invalid) {
      return;
    }
    this.store.dispatch(new BusinessModule.LoadCreateBusiness(this.businessForm.getRawValue()));
    this.businessForm.reset();
  }
}
