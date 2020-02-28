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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Search} from '../../../core/models';


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
  keys = Object.keys;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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

    this.searchForm = this.formBuilder.group({
      querySearch: [(querySearch) ? querySearch : '', [Validators.required]],
    });
  }

  onSubmit() {
    const formValues = this.searchForm.value as Search;

    if (formValues) {
      this.onSearch.emit(formValues);
    }
    return;
  }



}
