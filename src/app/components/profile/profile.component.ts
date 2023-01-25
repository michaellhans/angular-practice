import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Profile } from '../../employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: Profile | undefined;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const profileIdFromRoute = Number(routeParams.get('profileId'));
    this.getEmployee(profileIdFromRoute);
  }

  getEmployee(id: Number): void {
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.profile = employee);
  }
}
