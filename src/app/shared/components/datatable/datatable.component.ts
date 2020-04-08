import { Component, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input() dtOptions: DataTables.Settings = {};

  constructor() {}

  ngOnInit() {}
}
