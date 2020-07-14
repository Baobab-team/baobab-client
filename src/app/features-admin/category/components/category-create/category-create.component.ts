import { CategoryModule } from '@Store/category/category.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Log, LOG_TYPES } from '@Models/log.model';
import { selectCategoryErrors$, selectCategoryLoading$ } from '@Store/category/category.selector';
import { tap, takeUntil } from 'rxjs/operators';
import {Logger} from '@Services/logger.service';

const log = new Logger('category-create.component');

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit, OnDestroy {
  categoryForm: FormGroup;
  submitted = false;
  public unsubsscribe$ = new Subject<void>();
  categoryLogs$: Observable<Log>;
  readonly categoryLoading$: Observable<boolean>;
  readonly menuHeader = [
    {
      title: 'shared.menu-left-admin.link_list_categories',
      link: '/admin/categories'
    },
    {
      title: 'shared.menu-left-admin.link_create_category',
      link: '/admin/categories/create'
    }
  ];

  constructor(
    private formBuilder: RxFormBuilder,
    private store: Store<any>,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {
    this.categoryLogs$ = store.pipe(
      select(selectCategoryErrors$),
      tap((dialog) => {
        if (!dialog || !this.submitted) {
          return;
        }
        log.error(dialog.message);
        if (dialog.type === LOG_TYPES.ERROR) {
          this.toastr.error(this.translateService.instant(dialog.message));
        } else {
          this.toastr.success(this.translateService.instant(dialog.message));
        }
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.categoryLogs$.subscribe();

    this.categoryLoading$ = store.pipe(
      select(selectCategoryLoading$),
      takeUntil(this.unsubsscribe$)
    );
  }

  ngOnInit(): void {
    log.debug('init');
    this.categoryForm = this.formBuilder.group(
      {
        name: ['', [RxwebValidators.required({message: 'admin.category.form.label_name_error_required'})]],
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  // convenience getter for easy access to form fields
  get f() { return this.categoryForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.categoryForm.invalid) {
      return;
    }
    this.store.dispatch(new CategoryModule.LoadCreateCategory(this.categoryForm.getRawValue()));
    this.categoryForm.reset();
  }

}
