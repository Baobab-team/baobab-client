import { DetailBusinessComponent } from './detail-business/detail-business.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultSearchComponent} from './result-search/result-search.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
  {
    path: 'search',
    component: ResultSearchComponent
  },
  {
    path: 'detail',
    component: DetailBusinessComponent
  },
  {
    path: 'suggestion',
    component: SuggestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
