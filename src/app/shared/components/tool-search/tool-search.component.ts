import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../../core/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss']
})
export class ToolSearchComponent implements OnInit {
  @Input() modeNormal = true;
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private searchservice: SearchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.searchForm = this.formBuilder.group({
      searchbar: ['', [Validators.required]],
    });
  }

  onSubmit() {

    const query = this.searchForm.get('searchbar').value;

    if (query) {
      this.router.navigate(['/search', query]);
    }
    return null;
  }

}
