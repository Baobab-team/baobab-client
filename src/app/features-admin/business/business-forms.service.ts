import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessFormsService {

  constructor(
    private fb: FormBuilder
  ) { }

  createBusinessForm(): FormArray {
    return this.fb.array([
      this.fb.group({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        note: new FormControl(''),
        website: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        language: new FormControl('', [Validators.required]),
        capacity: new FormControl(''),
        paymentType: new FormControl(''),
        socialLink: new FormControl('')
      })
    ]);
  }

  createRestaurantForm(): FormArray {
    const form = this.createBusinessForm();
    form.push(
      this.fb.group({
        slogan: new FormControl('', [Validators.required]),
      })
    );
    return form;
  }
}
