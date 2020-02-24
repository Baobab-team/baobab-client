import { BusinessRoutingModule } from './business-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { BusinessesListComponent } from './businesses-list/businesses-list.component';


@NgModule({
  declarations: [BusinessesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
