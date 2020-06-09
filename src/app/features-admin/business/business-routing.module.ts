import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { BusinessCreateComponent } from './components/business-create/business-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'admin/business',
    component: BusinessCreateComponent,
    canActivate: [IsCategoriesLoadedGuard]
  },
  {
    path: 'admin/business',
    component: RestaurantListComponent,
    canActivate: [IsBusinessesLoadedGuard]
  },
  {
    path: 'admin/business/details',
    component: RestaurantDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
