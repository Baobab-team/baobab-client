import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './business-routing.module';
import { SharedModule } from '../../shared';
import { LayoutsModule } from '../../layouts';
import { DetailBusinessComponent } from './detail-business/detail-business.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import {ResultSearchComponent} from './result-search/result-search.component';


@NgModule({
  declarations: [
    DetailBusinessComponent,
    ResultItemComponent,
    ResultSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    LayoutsModule,
  ]
})
export class BusinessModule { }
