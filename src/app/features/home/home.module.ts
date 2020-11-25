import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../../layouts';
import { HomeRoutingModule } from './home-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
