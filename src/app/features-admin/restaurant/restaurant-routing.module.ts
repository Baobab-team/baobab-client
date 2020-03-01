import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin/restaurant',
    component: RestaurantCreateComponent,
  },
  {
    path: 'admin/restaurants',
    component: RestaurantListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
