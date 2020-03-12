import { BUSINESS_PAYMENT_TYPES, BUSINESS_LANGUAGE } from './../../../../core/models/business.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

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
    // this.restaurantForm = this.formBuilder.formGroup(
    //   new Restaurant()
    // );
  }

  onSubmit() {
    this.submitted = true;

    if (this.restaurantForm.invalid) {
      return;
    }
  }
}
