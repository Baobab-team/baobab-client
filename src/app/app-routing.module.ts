import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientLayoutComponent} from './layouts';


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
