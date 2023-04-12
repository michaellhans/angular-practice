import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailModule } from './personal-detail/personal-detail.module';
import { SharedModule } from '~shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    PersonalDetailModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/_remotes/app3'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
