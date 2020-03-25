import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBusinessComponent } from './components/search-business/search-business.component';
import { SearchRoutingModule } from './business-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts';
import { DetailBusinessComponent } from './components/detail-business/detail-business.component';


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
