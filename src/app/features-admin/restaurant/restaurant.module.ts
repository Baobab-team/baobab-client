import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';


@NgModule({
  declarations: [
    RestaurantCreateComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RestaurantRoutingModule,
  ]
})
export class RestaurantModule { }
