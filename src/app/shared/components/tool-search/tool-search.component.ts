import { BusinessModule } from '@Store/business/business.action';
import { BusinessService } from '@Store/business/business.service';
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
import { BUSINESS_STATUSES, Business } from '@Models/business.model';
import { Search } from '@Models/search.model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {debounceTime, switchMap, catchError, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { selectAutocompleteBusinesses$, selectAutocompleteBusinessLoading$ } from '@Store/business/business.selector';


@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbTypeaheadConfig]
})
export class ToolSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() bigForm = true;
  @Input() optionsFields = false;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSearch = new EventEmitter<Search>();
  @ViewChild('querySearch', {static: false}) querySearch: ElementRef;

  businessesAutocomplete$: Observable<string[] | Business[]>;
  businessesAutocompleteloading$: Observable<boolean>;
  searchForm: FormGroup;
  unsubsscribe$ = new Subject<void>();

  searchAutocomplete = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchText) =>  {
        this.store.dispatch(new BusinessModule.LoadSearchAutocompleteBusiness({
          querySearch: searchText,
          exclude_deleted: true
        } as Search));

        return this.businessesAutocomplete$;
      }),
      catchError(async (err) => console.log(err))
    )

  formatter = (x: string) => x;

  constructor(
    private formBuilder: RxFormBuilder,
    private activateRoute: ActivatedRoute,
    config: NgbTypeaheadConfig,
    private store: Store<any>,
    private businessService: BusinessService
  ) {
    // config.showHint = true;

    this.businessesAutocompleteloading$ = store.pipe(
      select(selectAutocompleteBusinessLoading$),
      takeUntil(this.unsubsscribe$)
    );
    this.businessesAutocomplete$ = store.pipe(
      select(selectAutocompleteBusinesses$),
      takeUntil(this.unsubsscribe$)
    );
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  ngOnInit() {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.querySearch.nativeElement.focus();
  }

  initForm() {
    const querySearch = this.activateRoute.snapshot.queryParamMap.get('querySearch');

    this.searchForm = this.formBuilder.formGroup(
      new Search(querySearch, [BUSINESS_STATUSES.ACCEPTED])
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
