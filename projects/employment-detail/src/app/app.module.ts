import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'shared/shared.module';
import { MessageService } from 'shared/services/message.service';

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
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
