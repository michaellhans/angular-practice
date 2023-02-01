import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MessageService, SharedModule } from 'shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploymentDetailModule } from './employment-detail/employment-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EmploymentDetailModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
