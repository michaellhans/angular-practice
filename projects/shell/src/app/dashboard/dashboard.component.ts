import { Component } from '@angular/core';
import { MessageService } from '~shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private messageService: MessageService){
    this.messageService.add('Dashboard loaded');
  }
}
