import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthLibService } from '~libs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService, translate: TranslateService) {
    this.service.login('Michael Hans', 'Halaman');
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('id');
  }
}
