import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmploymentDetail } from 'src/app/mock';
import { selectEmploymentDetail } from './services/employment-detail.reducer';
import { fetch } from './services/employment-detail.actions';

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.css']
})
export class EmploymentDetailComponent {
  employmentDetail$: Observable<EmploymentDetail>;

  constructor(private store: Store){
    this.employmentDetail$ = store.pipe(select(selectEmploymentDetail));
  }

  ngOnInit(): void {
    this.getEmploymentDetail();
  }

  getEmploymentDetail(): void {
    this.store.dispatch(fetch());
  }
}
