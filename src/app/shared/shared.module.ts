import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: SharedModule.MODULE_LIST,
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule {
  static readonly MODULE_LIST: any = [
    CommonModule,
  ];
}
