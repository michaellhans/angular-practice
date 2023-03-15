import { NgModule } from '@angular/core';
import { SharedModule } from '~shared';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ProfileComponent } from './company-profile.component';
import { StoreModule } from '@ngrx/store';
import { companyProfileReducer } from './services/company-profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyProfileEffects } from './services/company-profile.effects';
import { CompanyProfileService } from './services/company-profile.service';
import { DatepickerModule } from '@catapa/ui/datepicker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslationLoader } from './custom-translation-loader';

@NgModule({
  declarations: [ ProfileComponent ],
  imports: [
    SharedModule,
    TranslateModule.forChild({
        extend: true,
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslationLoader,
        },
        isolate: true
    }),
    CompanyProfileRoutingModule,
    StoreModule.forFeature("companyProfile", companyProfileReducer),
    EffectsModule.forFeature([CompanyProfileEffects]),
    DatepickerModule
  ],
  providers: [CompanyProfileService]
})
export class CompanyProfileModule { }
