import { BUSINESS_PAYMENT_TYPES, BUSINESS_LANGUAGE, Category } from './../../../../core/models/business.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { CategoryModule } from 'src/app/store/category/category.action';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { selectBusinessLoading$ } from 'src/app/store/business/business.selector';
import { takeUntil } from 'rxjs/operators';
import { selectCategories$ } from 'src/app/store/category/category.selector';


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
  public unsubsscribe$ = new Subject<void>();

  constructor(
    private formBuilder: RxFormBuilder,
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

  // convenience getter for easy access to form fields
  get f() { return this.restaurantForm.controls; }

  ngOnInit() {
    this.store.dispatch(new CategoryModule.LoadListCategory());
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
