import { NgModule } from '@angular/core';
import { EmploymentDetailComponent } from './employment-detail.component';
import { SharedModule } from '../shared/shared.module';
import { EmploymentDetailRoutingModule } from './employment-detail-routing-module';

@NgModule({
  declarations: [
    EmploymentDetailComponent
  ],
  imports: [
    SharedModule,
    EmploymentDetailRoutingModule
  ]
})
export class EmploymentDetailModule { }
