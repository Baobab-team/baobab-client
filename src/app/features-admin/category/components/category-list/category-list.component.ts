import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  videos = [
    {
      id: 1,
      title: 'je suis la plus fort',
      durationToHMS: 3,
      is_active: true,
      genres: [
        {
          label: 'bn genre'
        }
      ],
      label: 'comme ca',
      is_created: '1990-04-13 15:02:03'
    }
  ];
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      columns: [
        { title: 'id', visible: false },
        { },
        {
          searchable: false,
          className: 'text-center',
          width: '70px'
        },
        {
          width: '70px',
        },
        {},
        {
          width: '70px',
        }
      ]
    };
  }

}
