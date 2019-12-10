import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';


@NgModule({
  declarations: [ClientLayoutComponent, AuthAdminLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [ClientLayoutComponent]
})
export class LayoutsModule { }
