import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { IsBusinessesLoadedGuard } from '@Guards/business/is-businesses-loaded.guard';
import { BusinessListComponent } from './components/business-list/business-list.component';
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
    path: 'admin/businesses',
    component: BusinessListComponent,
    canActivate: [IsBusinessesLoadedGuard]
  },
  {
    path: 'admin/business/details',
    component: BusinessDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
