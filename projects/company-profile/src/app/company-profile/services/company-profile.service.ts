import { Injectable } from '@angular/core';
import { CompanyProfile, COMPANY_PROFILE } from 'projects/shell/src/app/mock';
import { Observable, of } from 'rxjs';
import { MessageService } from '~shared/services/message.service';

@Injectable()
export class CompanyProfileService {

  constructor(private messageService: MessageService) { }

  getCompanyProfile(): Observable<CompanyProfile> {
    const company_profile = of(COMPANY_PROFILE);
    this.messageService.add('CompanyProfileService: fetched Company Profile');
    return company_profile
  }
}
