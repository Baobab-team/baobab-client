import { Component, OnInit } from '@angular/core';
import {Logger} from '@Services/logger.service';

const log = new Logger('admin-home.component');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    log.debug('init');
  }

}
