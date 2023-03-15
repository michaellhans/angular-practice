import { Component, OnInit, Inject } from '@angular/core';
import { AuthLibService, CompanyProfile } from '~libs';
import { map, Observable, tap } from 'rxjs';
import { selectCompanyProfile } from './services/company-profile.reducer';
import { select, Store } from '@ngrx/store';
import { fetch } from './services/company-profile.actions';
import { AUTH_CONFIG } from '@catapa/network';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class ProfileComponent implements OnInit {
  companyProfile$: Observable<CompanyProfile>
  assetUrl = __webpack_public_path__;
  user = this.service.user;

  constructor(private store: Store, private service: AuthLibService, translate: TranslateService, @Inject(AUTH_CONFIG) config: any) {
    // this.companyProfile$ = store.select(state => (state.companyProfile as any).companyProfile).pipe(
    //   tap((X) => console.log("test", X)));
    this.companyProfile$ = store.pipe(select(selectCompanyProfile));
    console.log('config', config);
    
    // this language will be used as a fallback when a translation isn't found in the current language
    const currentLang = translate.currentLang;
    translate.currentLang = '';

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('id');
  }


  ngOnInit(): void {
    this.getCompanyProfile();
  }

  getCompanyProfile(): void {
    this.store.dispatch(fetch());
  }
}
