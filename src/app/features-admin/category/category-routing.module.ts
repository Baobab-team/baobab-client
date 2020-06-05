import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { IsCategoriesLoadedGuard } from '@Guards/is-categories-loaded.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryListComponent,
    canActivate: [IsCategoriesLoadedGuard]
  },
  {
    path: 'admin/categories/create',
    component: CategoryCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
