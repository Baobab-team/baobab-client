import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './layouts';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';


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
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.module').then(
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
