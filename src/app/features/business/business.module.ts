import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBusinessComponent } from './search-business/search-business.component';
import { SearchRoutingModule } from './business-routing.module';
import { SharedModule } from '../../shared';
import { LayoutsModule } from '../../layouts';
import { DetailBusinessComponent } from './detail-business/detail-business.component';


@NgModule({
  declarations: [
    SearchBusinessComponent,
    DetailBusinessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    LayoutsModule
  ]
})
export class BusinessModule { }
