import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmploymentDetail } from 'src/app/mock';
import { EmploymentDetailService } from './employment-detail.service';

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.css']
})
export class EmploymentDetailComponent {
  employmentDetail: EmploymentDetail | undefined;
  constructor(private route: ActivatedRoute, private employmentDetailService: EmploymentDetailService){}

  ngOnInit(): void {
    this.getEmploymentDetail();
  }

  getEmploymentDetail(): void {
    this.employmentDetailService.getEmploymentDetail()
      .subscribe(employmentDetail => this.employmentDetail = employmentDetail);
  }
}
