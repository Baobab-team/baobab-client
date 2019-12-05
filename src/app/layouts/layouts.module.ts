import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ClientLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ClientLayoutComponent]
})
export class LayoutsModule { }
