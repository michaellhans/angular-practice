import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmploymentDetail, EMPLOYMENT_DETAIL } from '~libs';
import { MessageService } from '~shared';

@Injectable()
export class EmploymentDetailService {

  constructor(private messageService: MessageService) { }
  
  getEmploymentDetail(): Observable<EmploymentDetail> {
    const employmentDetail = of(EMPLOYMENT_DETAIL);
    this.messageService.add('Employment Detail Service: fetched Employment Detail');
    return employmentDetail;
  }
}
