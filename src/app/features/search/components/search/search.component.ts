import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private actiavteRoute: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.getSearch();
  }

  getSearch() {
    const querySearch = this.actiavteRoute.snapshot.paramMap.get('query');
    this.searchService.getBusiness()
      .subscribe((businesses) => {
        // console.log('je suis la', businesses[0]);
      });
  }

}
