import { NgModule } from '@angular/core';
import { PersonalDetailComponent } from './personal-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalDetailRoutingModule } from './personal-detail-routing-module';

@NgModule({
  declarations: [
    PersonalDetailComponent
  ],
  imports: [
    SharedModule,
    PersonalDetailRoutingModule
  ]
})
export class PersonalDetailModule { }
