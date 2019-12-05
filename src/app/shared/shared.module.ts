import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    SharedModule.MODULE_LIST,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ]
})

export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
    ReactiveFormsModule,
  ];
}
