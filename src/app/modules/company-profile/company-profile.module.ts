import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    SharedModule,
    CompanyProfileRoutingModule
  ]
})
export class CompanyProfileModule { }
