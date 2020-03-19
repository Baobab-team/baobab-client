import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Search} from '../../../../core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  search($event: Search) {
    if ($event.querySearch) {
      this.router.navigate(
        ['search'],
        {queryParams: $event}
      );
    }
  }

}
