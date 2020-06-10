import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessCreateComponent } from './components/business-create/business-create.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';


@NgModule({
  declarations: [
    BusinessCreateComponent,
    BusinessListComponent,
    BusinessDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BusinessRoutingModule,
  ]
})
export class BusinessModule { }
