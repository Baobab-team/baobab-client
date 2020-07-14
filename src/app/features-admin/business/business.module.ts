import { SharedModule } from '../../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRoutingModule } from './business-routing.module';
import { BusinessCreateComponent } from './components/business-create/business-create.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    BusinessCreateComponent,
    BusinessListComponent,
    BusinessDetailsComponent,
    UploadFileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BusinessRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class BusinessModule { }
