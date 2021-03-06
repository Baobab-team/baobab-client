import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category, BusinessSuggestion, Business } from '@Models/business.model';
import { select, Store } from '@ngrx/store';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Logger } from '@Services/logger.service';
import { CategoryModule } from '@Store/category/category.action';
import { selectCategories$, selectCategoryLoading$ } from '@Store/category/category.selector';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { getError, getSuggestionSuccess } from '@Store/business-suggestion/business-suggestion.selector';
import { createBusinessSuggestion } from '@Store/business-suggestion/business-suggestion.action';

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
  successSuggestion$ : Observable<(BusinessSuggestion)>;
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
    this.successSuggestion$ = this.store.select(getSuggestionSuccess);
    this.bsf = this.formBuilder.formGroup(this.suggestion);
  }

  onSubmit(){
    // TODO add better validation
    if (this.bsf.invalid){
      return;
    }
    
    let payload = this.suggestion
    this.store.dispatch(createBusinessSuggestion({payload}));
    this.resetForm();
  }

  onSelectCategory(id: number){
    this.categories$.subscribe( c =>    {
      const cat = c[id - 1];
      if(cat){
        this.bsf.get("business.category").setValue(cat);
      }
    });
  }
 
  resetForm(){
    this.bsf.reset(this.bsf.value);       
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }
}
