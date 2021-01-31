import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.initForm();
  }

  initForm() {
    this.bsf = this.formBuilder.group(
      {
        name: [null, [RxwebValidators.required]],
        email: [null, [RxwebValidators.required]],      
        business: this.formBuilder.group({
          category: ['Categories', []],
          name: [null, [RxwebValidators.required]],
          description: [null],
          website: [null, []],
          phone: [null],
          email: [null, []],
          address: this.formBuilder.group({
            street_number: [null],
            street_type: [null],
            app_office_number: [null],
            street_name: [null],
            city: [null],
            zip_code: [null],
            province: ['Québec'],
            country: ['Canada'],
          }),
        }),
      });
  }

  onSubmit(){
    if (this.bsf.invalid){
      console.log("Invalid");
      console.log(this.bsf.value);
      return;
    }else{
      this.validateAllFormFields(this.bsf)
    }
    console.log("Valid");

    this.store.dispatch(new BusinessSuggestionModule.LoadCreateBusinessSuggestion(this.suggestion));
    this.bsf.reset();

  }

  isFieldValid(field: string) {
    return !this.bsf.get(field).valid && this.bsf.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }
}
