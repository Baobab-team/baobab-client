import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Category, BusinessSuggestion, Business } from '@Models/business.model';
import { select, Store } from '@ngrx/store';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Logger } from '@Services/logger.service';
import { CategoryModule } from '@Store/category/category.action';
import { selectCategories$, selectCategoryLoading$ } from '@Store/category/category.selector';
import { BusinessSuggestionModule } from '@Store/business-suggestion/business-suggestion.action';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Phone } from '@Models/phone.model';

const log = new Logger('suggestion.component');

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  public categoriesLoading$: Observable<boolean>;
  public categories$: Observable<(string | Category)[]>;
  public unsubsscribe$ = new Subject<void>();
  bsf: FormGroup;
  suggestion: BusinessSuggestion;

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
    this.suggestion.business.phones = new Array<Phone>();
    this.suggestion.business.phones.push(new Phone());
    this.initForm();
  }

  initForm() {
    
    this.bsf = this.formBuilder.formGroup(this.suggestion);
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

    this.store.dispatch(new BusinessSuggestionModule.LoadCreateBusinessSuggestion(this.suggestion as BusinessSuggestion));
  }

  addPhone(){
    this.suggestion.business.phones.push(new Phone());
    console.log("addPhone");
    console.log(this.suggestion.business.phones.length);
    console.log(this.bsf.get("business.phones") as FormControl);
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }
}
