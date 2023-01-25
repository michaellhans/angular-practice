import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardComponent,
    ProfileComponent,
    MessagesComponent,
    ProfileItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
