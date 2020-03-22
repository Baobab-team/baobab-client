import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent as NgxDatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input() columns: [];
  @Input() rows: [];
  @Input() loadingIndicator: any;
  @ViewChild(NgxDatatableComponent, { static: false }) table: NgxDatatableComponent;
  data = [];
  filteredData = [];

  constructor() {}

  ngOnInit() {
    // populate datatable rows
    this.data = this.rows;
    // copy over dataset to empty object
    this.filteredData = this.rows;
  }

  /// filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase().trim();

    if (val === '') {
      this.data = this.rows;
      return true;
    }

    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    try {
      const keys = Object.keys(this.rows.shift());
      // assign filtered matches to the active datatable
      this.data = this.filteredData.filter(
        (item) => {
          // iterate through each row's column data
          for (let i = 0; i < colsAmt; i++) {
            // check for a match
            if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
              // found match, return true to add to result set
              return true;
            }
          }
      });
      // whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    } catch (TypeError) {
      console.error(this.filteredData);
    }
  }
}
