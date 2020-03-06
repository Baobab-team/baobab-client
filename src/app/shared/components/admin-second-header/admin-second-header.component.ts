import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-second-header',
  templateUrl: './admin-second-header.component.html',
  styleUrls: ['./admin-second-header.component.scss']
})
export class AdminSecondHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() menus: {
    link: string,
    title: string
  }[];

  constructor() { }

  ngOnInit() {
  }

}
