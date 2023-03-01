import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmploymentDetail } from '~libs';
import { selectEmploymentDetail } from './services/employment-detail.reducer';
import { fetch } from './services/employment-detail.actions';
import { AuthLibService } from '~libs';

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.css']
})
export class EmploymentDetailComponent {
  employmentDetail$: Observable<EmploymentDetail>;
  user = this.service.user;

  constructor(private store: Store, private service: AuthLibService){
    this.employmentDetail$ = store.pipe(select(selectEmploymentDetail));
  }

  ngOnInit(): void {
    this.getEmploymentDetail();
  }

  getEmploymentDetail(): void {
    this.store.dispatch(fetch());
  }
}
