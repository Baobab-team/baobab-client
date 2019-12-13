import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header-client-profile',
  templateUrl: './header-client-profile.component.html',
  styleUrls: ['./header-client-profile.component.scss'],
  providers: [NgbDropdownConfig]
})
export class HeaderClientProfileComponent implements OnInit {

  isAdmin = false;

  constructor(
    private router: Router,
    config: NgbDropdownConfig
  ) {
    config.placement = 'bottom';
    config.autoClose = true;
  }

  ngOnInit() {}
}
