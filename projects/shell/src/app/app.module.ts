import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '~shared';
import { DashboardModule } from './dashboard/dashboard.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateConfiguration, DatepickerModule } from '@catapa/ui/datepicker';
import { AuthenticationModule, HttpClient, HttpClientModule } from '@catapa/network';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';

export function dateConfiguration() {
  return new DateConfiguration('en');
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    DatepickerModule.forRoot({
      provide: DateConfiguration,
      useFactory: dateConfiguration
    }),
    AuthenticationModule.forRoot({
      authPath: 'if6099',
      revokePath: 'gdplabs'
    }),
    DashboardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
