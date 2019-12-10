import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './layouts';
import {AuthAdminLayoutComponent} from './layouts/auth-admin-layout/auth-admin-layout.component';


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
  // admin layout
  {
    path: 'admin',
    component: AuthAdminLayoutComponent,
    loadChildren: () =>
      import('./features-admin/auth/auth.module').then(
        m => m.AuthModule
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
