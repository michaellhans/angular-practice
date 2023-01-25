import { Injectable } from '@angular/core';
import { CompanyProfile, COMPANY_PROFILE } from 'src/app/mock';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  constructor(private messageService: MessageService) { }

  getCompanyProfile(): Observable<CompanyProfile> {
    const company_profile = of(COMPANY_PROFILE);
    this.messageService.add('CompanyProfileService: fetched Company Profile');
    return company_profile
  }
}