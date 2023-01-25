import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalDetail } from 'src/app/mock';
import { EmploymentDetailService } from './personal-detail.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent {
  personalDetail: PersonalDetail | undefined;
  constructor(private route: ActivatedRoute, private employmentDetailService: EmploymentDetailService){}

  ngOnInit(): void {
    this.getPersonalDetail();
  }

  getPersonalDetail(): void {
    this.employmentDetailService.getPersonalDetail()
      .subscribe(personalDetail => this.personalDetail = personalDetail);
  }
}
