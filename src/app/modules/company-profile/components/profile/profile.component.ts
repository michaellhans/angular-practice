import { Component, OnInit } from '@angular/core';
import { CompanyProfile } from 'src/app/mock';
import { Observable } from 'rxjs';
import { CompanyProfileState } from '../../company-profile.reducer';
import { Store } from '@ngrx/store';
import { fetch } from '../../company-profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  companyProfile$: Observable<CompanyProfile>

  constructor(private store: Store<CompanyProfileState>){
    this.companyProfile$ = this.store.select(state => state.companyProfile);
  }

  ngOnInit(): void {
    this.getCompanyProfile();
  }

  getCompanyProfile(): void {
    this.store.dispatch(fetch());
  }
}
