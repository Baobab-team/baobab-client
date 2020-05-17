import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Search, BUSINESS_STATUSES} from '../../../core/models';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss']
})
export class ToolSearchComponent implements OnInit, AfterViewInit {
  @Input() bigForm = true;
  @Input() optionsFields = false;
  @Output() onSearch = new EventEmitter<Search>();
  @ViewChild('querySearch', {static: false}) querySearch: ElementRef;

  searchForm: FormGroup;
  // keys = Object.keys;

  constructor(
    private formBuilder: RxFormBuilder,
    private activateRoute: ActivatedRoute
  ) { }

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
