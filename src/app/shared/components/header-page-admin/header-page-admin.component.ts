import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-page-admin',
  templateUrl: './header-page-admin.component.html',
  styleUrls: ['./header-page-admin.component.scss']
})
export class HeaderPageAdminComponent implements OnInit {
  title: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.title = data.title;
      });
  }

}
