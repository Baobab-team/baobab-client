import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnDestroy {

  @Input() dtOptions: DataTables.Settings = {};

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
  }
}
