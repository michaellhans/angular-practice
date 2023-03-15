import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '~shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyProfileModule } from './company-profile/company-profile.module';

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
    SharedModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    DatepickerModule.forRoot({
      provide: DateConfiguration,
      useFactory: dateConfiguration
    }),
    AuthenticationModule.forRoot({
      authPath: 'michael',
      revokePath: 'hans'
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    CompanyProfileModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
