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
import { AuthenticationModule } from '@catapa/network';

export function dateConfiguration() {
  return new DateConfiguration('en');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
