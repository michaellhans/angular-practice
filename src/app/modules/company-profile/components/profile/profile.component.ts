import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyProfileService } from 'src/app/modules/company-profile/services/company-profile.service';
import { CompanyProfile } from 'src/app/mock';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  companyProfile: CompanyProfile | undefined;
  constructor(private route: ActivatedRoute, private companyProfileService: CompanyProfileService){}

  ngOnInit(): void {
    this.getCompanyProfile();
  }

  getCompanyProfile(): void {
    this.companyProfileService.getCompanyProfile()
      .subscribe(companyProfile => this.companyProfile = companyProfile);
  }
}
