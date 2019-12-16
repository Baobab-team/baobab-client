import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import { ToolSearchComponent } from './components/tool-search/tool-search.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { MenuLeftAdminComponent } from './components/menu-left-admin/menu-left-admin.component';
import { HeaderClientProfileComponent } from './components/header-client-profile/header-client-profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { HeaderPageAdminComponent } from './components/header-page-admin/header-page-admin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolSearchComponent,
    HeaderAdminComponent,
    MenuLeftAdminComponent,
    HeaderClientProfileComponent,
    HeaderPageAdminComponent
  ],
  imports: [
    SharedModule.MODULE_LIST,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ToolSearchComponent,
    HeaderAdminComponent,
    HeaderClientProfileComponent,
    MenuLeftAdminComponent,

    CommonModule,
    NgbModule,
    TranslateModule,
    ReactiveFormsModule,
    DataTablesModule,
    HeaderPageAdminComponent,
  ]
})

export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    DataTablesModule
  ];
}
