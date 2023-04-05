import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import en from '../../assets/i18n/en.json';
import id from '../../assets/i18n/id.json';


export class CustomTranslationLoader implements TranslateLoader  {
  languages: any = {
    en,
    id
  }
  constructor() {}

  getTranslation(lang: string): Observable<any> {
      return of(this.languages[lang]);
  }
}