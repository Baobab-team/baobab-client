import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: SharedModule.MODULE_LIST,
  exports: [
    HeaderComponent
  ]
})

export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
  ];
}
