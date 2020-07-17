import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Logger} from '@Services/logger.service';

const log = new Logger('home.component');

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
    log.debug('init');
  }

  search($event: {
    querySearch: string
  }) {
    log.debug('run search');
    if ($event.querySearch) {
      this.router.navigate(['search'], {queryParams: $event});
    }
  }

}
