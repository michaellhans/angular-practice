import { Injectable } from '@angular/core';
import { Profile, EMPLOYEES } from '../employee';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployees(): Observable<Profile[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('EmployeeService: fetched Employees');
    return employees;
  }

  getEmployee(id: Number): Observable<Profile | undefined>{
    const employee = of(EMPLOYEES.find(employee => employee.id === id));
    this.messageService.add('EmployeeService: fetched Employee with ID ' + id); 
    return employee;
  }
}
