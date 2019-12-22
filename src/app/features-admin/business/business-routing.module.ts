import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessListComponent} from './components/business-list/business-list.component';


const routes: Routes = [
  {
    path: 'admin/business',
    component: BusinessListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
