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
import { AuthenticationModule } from '@catapa/network';

export function dateConfiguration() {
  return new DateConfiguration('en');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule.forRoot(),
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
