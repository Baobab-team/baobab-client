import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './layouts';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    loadChildren: () =>
      import('./features/home/home.module').then(
        m => m.HomeModule
      ),
  },
  {
    path: '',
    component: ClientLayoutComponent,
    loadChildren: () =>
      import('./features/search/search.module').then(
        m => m.SearchModule
      ),
  },
  // auth layout
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        m => m.AuthModule
      ),
  },
  // admin layout
  {
    path: '',
    component: AdminLayoutComponent,
    data: {
      title: 'Bienvenue'
    },
    loadChildren: () =>
      import('./features-admin/home/home.module').then(
        m => m.HomeModule
      ),
  },
  {
    path: '',
    component: AdminLayoutComponent,
    data: {
      title: 'Category'
    },
    loadChildren: () =>
      import('./features-admin/category/category.module').then(
        m => m.CategoryModule
      ),
  },
  {
    path: '',
    component: AdminLayoutComponent,
    data: {
      title: 'Business'
    },
    loadChildren: () =>
      import('./features-admin/business/business.module').then(
        m => m.BusinessModule
      ),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
