import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../../../core/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tool-search',
  templateUrl: './tool-search.component.html',
  styleUrls: ['./tool-search.component.scss']
})
export class ToolSearchComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;

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
  // convenience getter for easy access to form fields
  get f() { return this.searchForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }

    const q = this.searchForm.get('searchbar').value;

    this.router.navigate(['/search', q]);
  }

}
