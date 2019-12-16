import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import {SharedModule} from '../../shared/shared.module';
import {LayoutsModule} from '../../layouts';
import {CategoryRoutingModule} from './category-routing.module';


@NgModule({
  declarations: [CategoryListComponent],
    imports: [
        CommonModule,
        SharedModule,
        LayoutsModule,
        CategoryRoutingModule,
    ]
})
export class CategoryModule { }
