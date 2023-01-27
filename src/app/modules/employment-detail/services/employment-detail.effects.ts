import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as employmentDetailAction from './employment-detail.actions';
import { EmploymentDetailService } from './employment-detail.service';

@Injectable()
export class EmploymentDetailEffects {

  constructor(
    private actions$: Actions,
    private employmentDetailService: EmploymentDetailService
  ) {}

  employmentDetailFetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employmentDetailAction.fetch),
      exhaustMap(() =>
        this.employmentDetailService.getEmploymentDetail().pipe(
          map(response => employmentDetailAction.fetchSuccess(response)),
          catchError(() => of(employmentDetailAction.fetchFailure)))
      )
    )
  );
}