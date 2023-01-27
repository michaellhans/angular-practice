import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { companyProfileReducer } from './company-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyProfileEffects } from './company-profile.effects';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    SharedModule,
    CompanyProfileRoutingModule,
    StoreModule.forFeature("companyProfile", companyProfileReducer),
    EffectsModule.forFeature([CompanyProfileEffects])
  ]
})
export class CompanyProfileModule { }
