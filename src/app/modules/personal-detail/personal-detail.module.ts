import { NgModule } from '@angular/core';
import { PersonalDetailComponent } from './personal-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalDetailRoutingModule } from './personal-detail-routing-module';
import { StoreModule } from '@ngrx/store';
import { personalDetailReducer } from './services/personal-detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonalDetailEffects } from './services/personal-detail.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonalDetailComponent
  ],
  imports: [
    SharedModule,
    PersonalDetailRoutingModule,
    StoreModule.forFeature('personalDetail', personalDetailReducer),
    EffectsModule.forFeature([PersonalDetailEffects]),
    FormsModule
  ]
})
export class PersonalDetailModule { }
