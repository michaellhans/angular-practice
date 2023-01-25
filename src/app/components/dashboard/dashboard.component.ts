import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Profile } from 'src/app/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employees: Profile[] = [];

  constructor(private employeeService: EmployeeService){}
  
  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
