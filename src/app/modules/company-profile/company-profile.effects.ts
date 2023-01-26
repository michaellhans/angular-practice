import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as companyProfileAction from './company-profile.actions';
import { CompanyProfileService } from './services/company-profile.service';

@Injectable()
export class CompanyProfileEffects {

  constructor(
    private actions$: Actions,
    private companyProfileService: CompanyProfileService
  ) {}

  companyProfileFetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(companyProfileAction.fetch),
      exhaustMap(action =>
        this.companyProfileService.getCompanyProfile().pipe(
          map(response => companyProfileAction.fetchSuccess({companyProfile: response})),
          catchError((error: any) => of(companyProfileAction.fetchFailure(error))))
      )
    )
  );
}