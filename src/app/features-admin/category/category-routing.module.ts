import { IsCategoriesLoadedGuard } from './../../core/guards/guards/is-categories-loaded.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent,
    canActivate: [IsCategoriesLoadedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
