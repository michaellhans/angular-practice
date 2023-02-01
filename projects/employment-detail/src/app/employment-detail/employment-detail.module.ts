import { NgModule } from '@angular/core';
import { EmploymentDetailComponent } from './employment-detail.component';
import { SharedModule } from 'shared';
import { EmploymentDetailRoutingModule } from './employment-detail-routing-module';
import { employmentDetailReducer } from './services/employment-detail.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmploymentDetailEffects } from './services/employment-detail.effects';

@NgModule({
  declarations: [
    EmploymentDetailComponent
  ],
  imports: [
    SharedModule,
    EmploymentDetailRoutingModule,
    StoreModule.forFeature('employmentDetail', employmentDetailReducer),
    EffectsModule.forFeature([EmploymentDetailEffects])
  ]
})
export class EmploymentDetailModule { }
