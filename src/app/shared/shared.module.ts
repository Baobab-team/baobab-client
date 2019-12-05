import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: SharedModule.MODULE_LIST,
  exports: []
})

export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
  ];
}
