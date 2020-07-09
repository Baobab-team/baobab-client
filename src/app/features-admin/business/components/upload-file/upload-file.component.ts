import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { BusinessModule } from '@Store/business/business.action';
import { Business } from '@Models/business.model';
import { Log, LOG_TYPES } from '@Models/log.model';
import { selectCsvBusinessCreate$, selectBusinessErrors$ } from '@Store/business/business.selector';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {
  readonly business$: Observable<Business[]>;
  readonly businessLog$: Observable<Log>;

  uploadBusinessForm: FormGroup;
  submitted = false;
  unsubsscribe$ = new Subject<void>();
  uploadedFiles: Array<File>;

  constructor(
    private formBuilder: RxFormBuilder,
    private store: Store<any>,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {
    // select business created
    this.business$ = store.pipe(
      select(selectCsvBusinessCreate$),
      takeUntil(this.unsubsscribe$)
    );
    this.business$.subscribe();

    this.businessLog$ = store.pipe(
      select(selectBusinessErrors$),
      tap((dialog) => {
        console.log(dialog)
        // if (!dialog && !this.submitted) {
        //   return;
        // }
        // if (dialog.type === LOG_TYPES.ERROR) {
        //   this.toastr.error(dialog.message);
        // } else {
        //   this.toastr.success(this.translateService.instant(dialog.message));
        // }
      }),
      takeUntil(this.unsubsscribe$)
    );
    this.businessLog$.subscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.unsubsscribe$.next();
    this.unsubsscribe$.complete();
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    const formData = new FormData();
    for (const uploadedFile of this.uploadedFiles) {
        formData.append('file', uploadedFile, uploadedFile.name);
    }

    this.store.dispatch(new BusinessModule.LoadCreateCsvBusiness(formData));
  }

}
