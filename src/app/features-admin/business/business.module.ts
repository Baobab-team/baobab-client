import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessListComponent } from './components/business-list/business-list.component';
import {SharedModule} from '../../shared/shared.module';
import { BusinessCreateComponent } from './components/business-create/business-create.component';


@NgModule({
  declarations: [BusinessListComponent, BusinessCreateComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
