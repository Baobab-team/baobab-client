import {Component, Input, OnInit} from '@angular/core';
import {Business, BUSINESS_SOCIAL_LINKS} from '@Models/business.model';

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
    const pathBase = 'fab ';
    let socialLogo = null;

    switch (type) {
      case BUSINESS_SOCIAL_LINKS.FACEBOOK:
        socialLogo = 'fa-facebook';
        break;
      case BUSINESS_SOCIAL_LINKS.INSTAGRAM:
        socialLogo = 'fa-instagram';
        break;
      case BUSINESS_SOCIAL_LINKS.LINKEDIN:
        socialLogo = 'fa-linkedin';
        break;
      case BUSINESS_SOCIAL_LINKS.SNAPCHAT:
        socialLogo = 'fa-snapchat';
        break;
      case BUSINESS_SOCIAL_LINKS.TWITTER:
        socialLogo = 'fa-twitter';
        break;
    }

    return pathBase + socialLogo;
  }
}
