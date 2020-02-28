import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';


@NgModule({
  declarations: [RestaurantCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
