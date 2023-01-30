import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonalDetail } from 'src/app/mock';
import { change, edit, fetch } from './services/personal-detail.actions';
import { selectIsEdit, selectPersonalDetail } from './services/personal-detail.reducer';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent {
  personalDetail$: Observable<PersonalDetail>;
  isEdit$: Observable<boolean>;
  @ViewChild('personalDetailForm') personalDetailForm: NgForm | null = null;

  constructor(private store: Store, public datePipe: DatePipe){
    this.personalDetail$ = store.select(selectPersonalDetail);
    this.isEdit$ = store.select(selectIsEdit);
  }

  ngOnInit(): void {
    this.getPersonalDetail();
  }

  getPersonalDetail(): void {
    this.store.dispatch(fetch());
  }

  onEdit(): void {
    this.store.dispatch(change());
  }

  onChange(event: PersonalDetail){
    console.log(event);
  }

  onSubmit(event: PersonalDetail){
    this.store.dispatch(edit({personalDetail: event}));
  }

  dateToString(date: Date): string {
    return this.datePipe.transform(new Date(date), 'yyyy-MM-dd')!;
  }
}
