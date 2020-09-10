import { BusinessModule } from '@Store/business/business.action';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Business, Category} from '@Models/business.model';
import { Search } from '@Models/search.model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {debounceTime, switchMap, catchError, distinctUntilChanged, takeUntil, tap} from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { selectAutocompleteBusinesses$, selectAutocompleteBusinessLoading$ } from '@Store/business/business.selector';
import {Logger} from '@Services/logger.service';
import { selectCategories$, selectCategoryErrors$, selectCategoryLoading$ } from '@Store/category/category.selector';
import {Log} from '@Models/log.model';

const log = new Logger('tool-search.component');

@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbTypeaheadConfig]
})
export class ToolSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() optionsFields = false;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSearch = new EventEmitter<Search>();
  @ViewChild('querySearch', {static: false}) querySearch: ElementRef;
  readonly categoriesLoading$: Observable<boolean>;
  readonly categories$: Observable<Category[]>;
  readonly categoryLogs$: Observable<Log>;
  readonly businessesAutocomplete$: Observable<string[] | Business[]>;
  readonly businessesAutocompleteloading$: Observable<boolean>;
  searchForm: FormGroup;
  private unsubsscribe$ = new Subject<void>();

  searchAutocomplete = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchText) =>  {
        log.debug('autocomplete', searchText);
        if (searchText !== '') {
          this.store.dispatch(new BusinessModule.LoadSearchAutocompleteBusiness({
            querySearch: searchText,
          } as Search));
          return this.businessesAutocomplete$;
        }
        return of(null);
      }),
      catchError(async (err) => console.log(err))
    )

  constructor(
    private formBuilder: RxFormBuilder,
    private activateRoute: ActivatedRoute,
    config: NgbTypeaheadConfig,
    private store: Store<any>,
  ) {
    // autocoplete
    this.businessesAutocompleteloading$ = store.pipe(
      select(selectAutocompleteBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.businessesAutocomplete$ = store.pipe(
      select(selectAutocompleteBusinesses$),
      takeUntil(this.unsubsscribe$)
    );

    // load categories
    this.categoriesLoading$ = store.pipe(
      select(selectCategoryLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.categories$ = store.pipe(
      select(selectCategories$),
      takeUntil(this.unsubsscribe$)
    );
    this.categoryLogs$ = store.pipe(
      select(selectCategoryErrors$),
      tap((dialog) => {
        if (!dialog) { return; }
        log.error('categoryLogs error: ', dialog.message);
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.categoryLogs$.subscribe();
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  ngOnInit() {
    log.debug('init');
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.querySearch.nativeElement.focus();
  }

  initForm() {
    const querySearch = this.activateRoute.snapshot.queryParamMap.get('querySearch');

    this.searchForm = this.formBuilder.formGroup(
      new Search(querySearch)
    );
  }

  onSubmit() {
    const formValues = this.searchForm.value as Search;

    if (formValues) {
      this.onSearch.emit(formValues);
    }
    return;
  }
}
