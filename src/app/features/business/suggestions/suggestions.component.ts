import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Category, BusinessSuggestion, Business } from '@Models/business.model';
import { select, Store } from '@ngrx/store';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Logger } from '@Services/logger.service';
import { CategoryModule } from '@Store/category/category.action';
import { selectCategories$, selectCategoryLoading$ } from '@Store/category/category.selector';
import { createBusinessSuggestion } from './state/business-suggestion.action';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getError } from 'app/features/business/suggestions/state/business-suggestion.selector';
import { HttpErrorResponse } from '@angular/common/http';
// import { Phone } from '@Models/phone.model';

const log = new Logger('suggestion.component');

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  public categoriesLoading$: Observable<boolean>;
  public categories$: Observable<(Category[])>;
  public unsubsscribe$ = new Subject<void>();
  errors$: Observable<HttpErrorResponse>
  bsf: FormGroup;
  suggestion: BusinessSuggestion;
  selectedCategory: Category;

  constructor(
    private formBuilder: RxFormBuilder,
    private store: Store<any>
  ) { 
    this.categoriesLoading$ = store.pipe(
      select(selectCategoryLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.categories$ = store.pipe(
      select(selectCategories$),
      takeUntil(this.unsubsscribe$)
    );
  }

  ngOnInit() {
    log.debug('init');
    this.store.dispatch(new CategoryModule.LoadListCategory());
    this.suggestion = new BusinessSuggestion();
    this.suggestion.business = new Business();
    this.suggestion.business.category = new Category();
    this.errors$ = this.store.select(getError);
    this.initForm();
  }

  initForm() {
    
    this.bsf = this.formBuilder.formGroup(this.suggestion);
    // this.bsf.get("business.category").set = new FormControl({value: ''}, Validators.required);
    // this.bsf = this.formBuilder.group(
    //   {
    //     name: [null, [RxwebValidators.required]],
    //     email: [null, [RxwebValidators.required]],      
    //     business: this.formBuilder.group({
    //       category: ['Categories', []],
    //       name: [null, [RxwebValidators.required]],
    //       description: [null],
    //       website: [null, []],
    //       phones: this.formBuilder.array([this.getPhoneFormGroup()]),
    //       email: [null, []],
    //       address: this.formBuilder.group({
    //         street_number: [null],
    //         street_type: [null],
    //         app_office_number: [null],
    //         street_name: [null],
    //         city: [null],
    //         zip_code: [null],
    //         province: ['Québec'],
    //         country: ['Canada'],
    //       }),
    //     }),
    //   });
  }

  onSubmit(){
    if (this.bsf.invalid){
      console.log("Invalid");
      console.log(this.bsf.value);
      return;
    }
    
    console.log("Valid"+ this.bsf.valid);
    // var i;
    // for (i = 0; i < this.telephones.length; i++) {
    //   let tel = new Phone(this.telephones[i].value.number,this.telephones[i].value.number);
    //   this.suggestion.business.phones.push(tel);
    // }
    console.log("Valid"+ this.bsf.value);
    let payload = this.suggestion
    this.store.dispatch(createBusinessSuggestion({payload}));
  }

  onSelectCategory(id: number){
    // const category = event.target.value;
    // console.log(this.bsf.get("business.category").value);
    // this.bsf.get("business.category").setValue(category);
    console.log("ID: "+id);
    this.categories$.subscribe( c =>    {
      const cat = c[id - 1];
      console.log(cat);
      if(cat){
        this.bsf.get("business.category").setValue(cat);
      }
    });
  }
  // addPhone(){
  //   this.suggestion.business.phones.push(new Phone());
  //   console.log("addPhone");
  //   console.log(this.suggestion.business.phones.length);
  //   console.log(this.bsf.get("business.phones") as FormControl);
  // }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }
}
