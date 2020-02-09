import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuLeftAdminComponent } from './menu-left-admin/menu-left-admin.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    MenuLeftAdminComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    MenuLeftAdminComponent,
    TranslateModule,
    NgbModule,
    DataTablesModule
  ],
  imports: [
    SharedModule.MODULE_LIST,
  ]
})
export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    DataTablesModule,
    TranslateModule
  ];
}
