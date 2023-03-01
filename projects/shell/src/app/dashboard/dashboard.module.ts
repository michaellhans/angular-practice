import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '~shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DatepickerModule } from '@catapa/ui/datepicker';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    DatepickerModule
  ],
  exports: [SharedModule, DashboardComponent]
})
export class DashboardModule { }
