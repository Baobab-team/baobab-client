import { PAYMENT_TYPE_BUSINESS } from './../../../../core/models/business.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Restaurant } from 'src/app/core/models';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit {
  restaurantForm: FormGroup;
  keys = Object.keys;
  paymentTypes = PAYMENT_TYPE_BUSINESS;
  submitted = false;

  constructor(
    private formBuilder: RxFormBuilder,
  ) {}

  // convenience getter for easy access to form fields
  get f() { return this.restaurantForm.controls; }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.formGroup(
      new Restaurant()
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.restaurantForm.invalid) {
      return;
    }
  }
}
