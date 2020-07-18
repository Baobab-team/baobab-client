import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBusinessComponent } from './search-business/search-business.component';
import { SearchRoutingModule } from './business-routing.module';
import { SharedModule } from '../../shared';
import { LayoutsModule } from '../../layouts';
import { DetailBusinessComponent } from './detail-business/detail-business.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    SearchBusinessComponent,
    DetailBusinessComponent,
    ResultItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    LayoutsModule,
    FontAwesomeModule
  ]
})
export class BusinessModule { }
