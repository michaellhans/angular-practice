import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'shared';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [SharedModule, DashboardComponent]
})
export class CoreModule { }
