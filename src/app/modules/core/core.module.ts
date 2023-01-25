import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent, TopBarComponent],
  imports: [
    SharedModule
  ],
  exports: [SharedModule, DashboardComponent, TopBarComponent]
})
export class CoreModule { }
