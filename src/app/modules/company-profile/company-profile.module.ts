import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { companyProfileReducer } from './company-profile.reducer';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    SharedModule,
    CompanyProfileRoutingModule,
    StoreModule.forRoot({ state: companyProfileReducer })
  ]
})
export class CompanyProfileModule { }
