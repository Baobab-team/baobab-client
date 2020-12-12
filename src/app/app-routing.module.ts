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
      import('./features/business/business.module').then(
        m => m.BusinessModule
      ),
  },
  // auth layout
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./features/auth/auth.module').then(
  //       m => m.AuthModule
  //     ),
  // },
  // admin layout
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   data: {
  //     title: 'admin.title_home'
  //   },
  //   loadChildren: () =>
  //     import('./features-admin/home/home.module').then(
  //       m => m.HomeModule
  //     ),
  // },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   data: {
  //     title: 'admin.category.title_category'
  //   },
  //   loadChildren: () =>
  //     import('./features-admin/category/category.module').then(
  //       m => m.CategoryModule
  //     ),
  // },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   data: {
  //     title: 'admin.business.title_business'
  //   },
  //   loadChildren: () =>
  //     import('./features-admin/business/business.module').then(
  //       m => m.BusinessModule
  //     ),
  // },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
 }
