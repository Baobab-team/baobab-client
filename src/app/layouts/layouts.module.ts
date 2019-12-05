import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ClientLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [ClientLayoutComponent]
})
export class LayoutsModule { }
