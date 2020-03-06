import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  menuHeader = [
    {
      title: 'shared.menu-left-admin.link_add_restaurant',
      link: '/admin/restaurant'
    },
    {
      title: 'shared.menu-left-admin.link_list_restaurant',
      link: '/admin/restaurants'
    }
  ];
  headers = ['col1', 'col2', 'col3'];
  line1 = [
    'col1',
    'col2',
    'col3',
  ];
  line2 = [
    'col4',
    'col5',
    'col6',
  ];
  line3 = [
    'col7',
    'col8',
    'col9',
  ];
  businesses = [
    this.line1,
    this.line2,
    this.line3
  ];

  dtOptions = {
    pagingType: 'simple_numbers',
    pageLength: 10
  };

  constructor() { }

  ngOnInit() {
  }

}
