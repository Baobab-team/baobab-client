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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
