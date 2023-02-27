import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmploymentDetail, EMPLOYMENT_DETAIL } from 'projects/shell/src/app/mock';
import { MessageService } from '~shared/services/message.service';

@Injectable()
export class EmploymentDetailService {

  constructor(private messageService: MessageService) { }
  
  getEmploymentDetail(): Observable<EmploymentDetail> {
    const employmentDetail = of(EMPLOYMENT_DETAIL);
    this.messageService.add('Employment Detail Service: fetched Employment Detail');
    return employmentDetail;
  }
}
