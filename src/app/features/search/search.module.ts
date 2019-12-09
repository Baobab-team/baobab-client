import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
    LayoutsModule
  ]
})
export class SearchModule { }
