import { NgModule } from '@angular/core';
import { PersonalDetailComponent } from './personal-detail.component';
import { SharedModule } from 'shared';
import { PersonalDetailRoutingModule } from './personal-detail-routing-module';
import { StoreModule } from '@ngrx/store';
import { personalDetailReducer } from './services/personal-detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonalDetailEffects } from './services/personal-detail.effects';
import { FormsModule } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    PersonalDetailComponent
  ],
  imports: [
    SharedModule,
    PersonalDetailRoutingModule,
    StoreModule.forFeature('personalDetail', personalDetailReducer),
    EffectsModule.forFeature([PersonalDetailEffects]),
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [BsDatepickerConfig, DatePipe]
})
export class PersonalDetailModule { }