import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
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
  categories = [
    this.line1,
    this.line2,
    this.line3
  ];

  dtOptions = {
    pagingType: 'simple_numbers',
    pageLength: 10
  };

  constructor() { }

  ngOnInit() {}

}
