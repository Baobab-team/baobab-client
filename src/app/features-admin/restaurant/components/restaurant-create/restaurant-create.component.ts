import { BUSINESS_PAYMENT_TYPES, BUSINESS_LANGUAGE, Category } from './../../../../core/models/business.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { selectCategories$, selectCategoryLoading$, selectCategoryErrors$ } from 'src/app/store/category/category.selector';
import { Log, LOG_TYPES } from 'src/app/core/models';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit, OnDestroy {
  restaurantForm: FormGroup;
  keys = Object.keys;
  paymentTypes = BUSINESS_PAYMENT_TYPES;
  languages = BUSINESS_LANGUAGE;
  submitted = false;
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

  readonly categoriesLoading$: Observable<boolean>;
  readonly categories$: Observable<Category[]>;
  readonly categoryLogs$: Observable<Log>;
  public unsubsscribe$ = new Subject<void>();

  constructor(
    private formBuilder: RxFormBuilder,
    private store: Store<any>,
    private toastr: ToastrService
  ) {
    this.categoriesLoading$ = store.pipe(
      select(selectCategoryLoading$),
      tap((data) => console.log('dans create', data)),
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

  // convenience getter for easy access to form fields
  get f() { return this.restaurantForm.controls; }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group(
      {
        name: ['', [RxwebValidators.required({message: 'admin.business.message_errors.name_required'})]],
        description: [''],
        note: [''],
        website: ['', [RxwebValidators.url({message: 'admin.business.message_errors.url_valid'})]],
        email: ['', [
          RxwebValidators.required({message: 'admin.business.message_errors.email_required'}),
          RxwebValidators.email({message: 'admin.business.message_errors.email_valid'})
        ]],
        slogan: [''],
        language: ['', [RxwebValidators.required({message: 'admin.business.message_errors.language_required'})]],
        capacity: ['', [RxwebValidators.numeric({message: 'admin.business.message_errors.numeric_valid'})]],
        paymentType: [''],
        category: ['', [
          RxwebValidators.url({message: 'admin.business.message_errors.category_required'})
        ]]
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.restaurantForm.invalid) {
      return;
    }
  }
}
