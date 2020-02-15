import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {Business, Search} from '../../../../core/models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  businesses$: Observable<Business[]>;

  constructor(
    private router: Router,
    private actiavteRoute: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.getResultUrl();
  }

  getResultUrl() {
    const querySearch = this.actiavteRoute.snapshot.paramMap.get('querySearch');
    this.businesses$ = this.serviceSearchResults({
      name: querySearch
    });
  }

  getResulForm(params: Search) {
    this.businesses$ = this.serviceSearchResults({
      name: params.querySearch
    });
  }

  serviceSearchResults(params) {
    return this.searchService.getBusiness(params);
  }
}
