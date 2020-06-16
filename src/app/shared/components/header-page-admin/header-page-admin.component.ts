import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-page-admin',
  templateUrl: './header-page-admin.component.html',
  styleUrls: ['./header-page-admin.component.scss']
})
export class HeaderPageAdminComponent implements OnInit {
  title: string;

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.translateService.get([this.title = data.title])
        .subscribe(translations => {
          this.title = translations[this.title = data.title];
        });
      });
  }

}
