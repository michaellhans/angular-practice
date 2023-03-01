import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalDetail, PERSONAL_DETAIL } from '~libs';
import { MessageService } from '~shared';

@Injectable()
export class PersonalDetailService {

  constructor(private messageService: MessageService) { }
  
  getPersonalDetail(): Observable<PersonalDetail> {
    let rawPersonalDetail = localStorage.getItem("personalDetail");
    let personalDetail = null;
    if (!rawPersonalDetail){
      personalDetail = of(PERSONAL_DETAIL);
      this.messageService.add('Personal Detail Service: fetched Personal Detail from Server');
    } else {
      personalDetail = of(JSON.parse(rawPersonalDetail));
      this.messageService.add('Personal Detail Service: fetched Personal Detail from Local Storage');
    }
    return personalDetail;
  }

  updatePersonalDetail(personalDetail: PersonalDetail): Observable<PersonalDetail> {
    localStorage.setItem("personalDetail", JSON.stringify(personalDetail));
    console.log(localStorage.getItem("personalDetail"));
    this.messageService.add('Personal Detail Service: updated Personal Detail and save it to Local Storage');
    return of(personalDetail);
  }
}
