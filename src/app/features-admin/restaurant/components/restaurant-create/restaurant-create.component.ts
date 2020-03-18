import { TranslateService } from '@ngx-translate/core';
import { BUSINESS_PAYMENT_TYPES, BUSINESS_LANGUAGE } from './../../../../core/models/business.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit {
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

  constructor(
    private formBuilder: RxFormBuilder,
  ) {}

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
