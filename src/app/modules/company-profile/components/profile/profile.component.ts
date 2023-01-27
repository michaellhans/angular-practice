import { Component, OnInit } from '@angular/core';
import { CompanyProfile } from 'src/app/mock';
import { map, Observable, tap } from 'rxjs';
import { CompanyProfileState, selectCompanyProfile } from '../../company-profile.reducer';
import { select, Store } from '@ngrx/store';
import { fetch } from '../../company-profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  companyProfile$: Observable<CompanyProfile>

  constructor(private store: Store){
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
