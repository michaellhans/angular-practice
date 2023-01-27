import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as personalDetailAction from './personal-detail.actions';
import { PersonalDetailService } from './personal-detail.service';
import { PersonalDetail } from 'src/app/mock';

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
          map(response => personalDetailAction.fetchSuccess({personalDetail: response})),
          catchError(() => of(personalDetailAction.fetchFailure)))
      )
    )
  );

  personalDetailUpdate$ = createEffect(() =>
  this.actions$.pipe(
    ofType(personalDetailAction.edit),
    exhaustMap((action) =>
      this.personalDetailService.updatePersonalDetail(action.personalDetail).pipe(
        map(response => personalDetailAction.editSuccess()),
        catchError(() => of(personalDetailAction.editFailure)))
    )
  )
  );
}