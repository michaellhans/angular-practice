import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '~shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyProfileModule } from './company-profile/company-profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CompanyProfileModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
