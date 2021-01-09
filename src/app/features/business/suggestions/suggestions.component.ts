import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address, Category, BusinessSuggestion, Business } from '@Models/business.model';
import { select, Store } from '@ngrx/store';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Logger } from '@Services/logger.service';
import { BusinessModule } from '@Store/business/business.action';
import { CategoryModule } from '@Store/category/category.action';
import { selectCategories$, selectCategoryLoading$ } from '@Store/category/category.selector';

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
  businessSuggestionForm: FormGroup;
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
    this.businessSuggestionForm = this.formBuilder.group(
      {
        name: ['', [RxwebValidators.required({message: 'suggestion.form.suggester.name.required'})]],
        email: ['', [RxwebValidators.required({message: 'suggestion.form.suggester.email.required'})]],
        business_name: ['', [RxwebValidators.required({message: 'suggestion.form.suggester.name.required'})]],
        business_description: [''],
        business_website: ['', [RxwebValidators.url({message: 'suggestion.form.website.error'})]],
        business_phone: [''],
        business_email: ['', [
          RxwebValidators.email({message: 'suggestion.form.email.error'})
        ]],
        category: ['', []],
        address_street_number: [''],
        address_app: [''],
        address_street_name: [''],
        address_city: [''],
        address_zip_code: [''],
        address_province: [''],
        address_country: [''],
      });
  }

  onSubmit(){
    if(this.businessSuggestionForm.value){
        this.suggestion = new BusinessSuggestion(
          this.businessSuggestionForm.value.name,
          this.businessSuggestionForm.value.email,
          this.businessSuggestionForm.value.business,
        );
    }
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }
}
