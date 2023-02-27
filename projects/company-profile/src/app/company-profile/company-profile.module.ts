import { NgModule } from '@angular/core';
import { SharedModule } from '~shared';
import { MessageService } from '~shared';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ProfileComponent } from './company-profile.component';
import { StoreModule } from '@ngrx/store';
import { companyProfileReducer } from './services/company-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyProfileEffects } from './services/company-profile.effects';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CompanyProfileService } from './services/company-profile.service';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    SharedModule,
    CompanyProfileRoutingModule,
    StoreModule.forFeature("companyProfile", companyProfileReducer),
    EffectsModule.forFeature([CompanyProfileEffects]),
    CarouselModule
  ],
  providers: [CompanyProfileService]
})
export class CompanyProfileModule { }
