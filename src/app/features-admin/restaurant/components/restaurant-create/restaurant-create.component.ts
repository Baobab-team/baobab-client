import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BusinessFormsService } from 'src/app/features-admin/business/business-forms.service';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private businessFormsService: BusinessFormsService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({

    })
  }
}
