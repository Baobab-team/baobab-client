import { DetailBusinessComponent } from './components/detail-business/detail-business.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusinessComponent } from './components/search-business/search-business.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchBusinessComponent
  },
  {
    path: 'detail',
    component: DetailBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}