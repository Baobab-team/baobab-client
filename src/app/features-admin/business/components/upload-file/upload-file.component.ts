import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {
  uploadBusinessForm: FormGroup;
  submitted = false;
  unsubsscribe$ = new Subject<void>();
  uploadedFiles: Array<File>;

  constructor(
    private formBuilder: RxFormBuilder,
    private store: Store<any>,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
    console.log('0', this.uploadedFiles)
  }

  upload() {
    const formData = new FormData();
    for (const uploadedFile of this.uploadedFiles) {
        console.log('1', uploadedFile)
        formData.append('uploads[]', uploadedFile, uploadedFile.name);
    }
    console.log(formData)
    // this.http.post('/api/upload', formData)
    // .subscribe((response) => {
    //     console.log('response received is ', response);
    // });
  }

}
