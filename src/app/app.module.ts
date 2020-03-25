import { IsCategoriesLoadedGuard } from './core/guards/guards/is-categories-loaded.guard';
import { IsBusinessesLoadedGuard } from './core/guards/guards/business/is-businesses-loaded.guard';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { LayoutsModule } from './layouts';
import { TranslateLoader, TranslateModule, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { REDUCER_TOKEN, getReducers, appEffects } from './store';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    LayoutsModule,
    EffectsModule.forRoot(appEffects),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
  ],
  providers: [
    Store,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    },
    IsBusinessesLoadedGuard,
    IsCategoriesLoadedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



