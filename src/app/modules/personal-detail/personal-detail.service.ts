import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonalDetail, PERSONAL_DETAIL } from 'src/app/mock';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class EmploymentDetailService {

  constructor(private messageService: MessageService) { }
  
  getPersonalDetail(): Observable<PersonalDetail> {
    const employmentDetail = of(PERSONAL_DETAIL);
    this.messageService.add('Personal Detail Service: fetched Personal Detail');
    return employmentDetail;
  }
}
