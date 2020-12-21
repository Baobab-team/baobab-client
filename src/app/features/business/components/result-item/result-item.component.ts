import {Component, Input, OnInit} from '@angular/core';
import {Business, BUSINESS_SOCIAL_LINKS} from '@Models/business.model';
import { getLogoIcon } from '@Store/business/business.helper';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {
  @Input() business: Business;

  constructor() { }

  ngOnInit() { }

  getLogo(type: BUSINESS_SOCIAL_LINKS) {
    return getLogoIcon(type);
  }
}
