import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { IsCategoriesLoadedGuard } from './../../core/guards/guards/is-categories-loaded.guard';
import { IsBusinessesLoadedGuard } from '../../core/guards/guards/business/is-businesses-loaded.guard';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin/restaurant',
    component: RestaurantCreateComponent,
    canActivate: [IsCategoriesLoadedGuard]
  },
  {
    path: 'admin/restaurants',
    component: RestaurantListComponent,
    canActivate: [IsBusinessesLoadedGuard]
  },
  {
    path: 'admin/restaurant/details',
    component: RestaurantDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
