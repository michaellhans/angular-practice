import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as personalDetailAction from './personal-detail.actions';
import { PersonalDetailService } from './personal-detail.service';

@Injectable()
export class PersonalDetailEffects {

  constructor(
    private actions$: Actions,
    private personalDetailService: PersonalDetailService
  ) {}

  personalDetailFetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(personalDetailAction.fetch),
      exhaustMap(() =>
        this.personalDetailService.getPersonalDetail().pipe(
          map(response => personalDetailAction.fetchSuccess(response)),
          catchError(() => of(personalDetailAction.fetchFailure)))
      )
    )
  );
}