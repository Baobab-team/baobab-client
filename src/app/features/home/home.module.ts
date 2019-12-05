import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts';
import { HomeRoutingModule } from './home-routing.module';
import { ToolSearchComponent } from './components/tool-search/tool-search.component';


@NgModule({
  declarations: [HomeComponent, ToolSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
