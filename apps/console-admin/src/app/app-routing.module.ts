import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Bienvenue'
    },
    loadChildren: () =>
      import('./home/home.module').then(
        m => m.HomeModule
      ),
  },
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Category'
    },
    loadChildren: () =>
      import('./category/category.module').then(
        m => m.CategoryModule
      ),
  },
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'Business'
    },
    loadChildren: () =>
      import('./business/business.module').then(
        m => m.BusinessModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
