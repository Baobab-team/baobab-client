import { TruncatePipe } from '@Pipes/truncate.pipe';
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
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HeaderPageAdminComponent } from './components/header-page-admin/header-page-admin.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AdminSecondHeaderComponent } from './components/admin-second-header/admin-second-header.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolSearchComponent,
    HeaderAdminComponent,
    MenuLeftAdminComponent,
    HeaderClientProfileComponent,
    HeaderPageAdminComponent,
    AdminSecondHeaderComponent,
    TruncatePipe,
    ModalComponentComponent,
    LoadingComponent,
    FieldErrorDisplayComponent
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
    AdminSecondHeaderComponent,
    HeaderPageAdminComponent,
    ModalComponentComponent,
    LoadingComponent,
    FieldErrorDisplayComponent,
    TruncatePipe,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  entryComponents: [ModalComponentComponent],
})

export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    RxReactiveFormsModule,
    FontAwesomeModule,
    NgbModule
  ];
}
