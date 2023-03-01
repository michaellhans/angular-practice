import { Component, OnInit } from '@angular/core';
import { AuthLibService, CompanyProfile } from '~libs';
import { map, Observable, tap } from 'rxjs';
import { selectCompanyProfile } from './services/company-profile.reducer';
import { select, Store } from '@ngrx/store';
import { fetch } from './services/company-profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class ProfileComponent implements OnInit {
  companyProfile$: Observable<CompanyProfile>
  user = this.service.user;

  constructor(private store: Store, private service: AuthLibService){
    // this.companyProfile$ = store.select(state => (state.companyProfile as any).companyProfile).pipe(
    //   tap((X) => console.log("test", X)));
    this.companyProfile$ = store.pipe(select(selectCompanyProfile));
  }

  ngOnInit(): void {
    this.getCompanyProfile();
  }

  getCompanyProfile(): void {
    this.store.dispatch(fetch());
  }
}
