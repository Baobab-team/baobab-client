import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [ClientLayoutComponent, AuthLayoutComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ClientLayoutComponent]
})
export class LayoutsModule { }
