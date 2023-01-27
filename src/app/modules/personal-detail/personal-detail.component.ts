import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDetail } from 'src/app/mock';
import { fetch } from './services/personal-detail.actions';
import { selectPersonalDetail } from './services/personal-detail.reducer';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent {
  personalDetail$: Observable<PersonalDetail>;
  constructor(private store: Store){
    this.personalDetail$ = store.select(selectPersonalDetail);
  }

  ngOnInit(): void {
    this.getPersonalDetail();
  }

  getPersonalDetail(): void {
    this.store.dispatch(fetch());
  }
}
