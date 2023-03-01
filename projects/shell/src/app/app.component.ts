import { Component } from '@angular/core';
import { AuthLibService, MessageService } from '~shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService) {
    this.service.login('Michael Hans', 'Halaman');
  }
}
