import { createAction, props } from '@ngrx/store';
import { EmploymentDetail } from 'src/app/mock';

export const EMPLOYMENT_DETAIL_FETCH = '[Employment Detail] Fetch';
export const EMPLOYMENT_DETAIL_FETCH_SUCCESS = '[Employment Detail] Fetch Success';
export const EMPLOYMENT_DETAIL_FETCH_FAILURE = '[Employment Detail] Fetch Failure';

export const fetch = createAction(
    EMPLOYMENT_DETAIL_FETCH
)

export const fetchSuccess = createAction(
    EMPLOYMENT_DETAIL_FETCH_SUCCESS,
    props<{employmentDetail: EmploymentDetail}>()
)

export const fetchFailure = createAction(
    EMPLOYMENT_DETAIL_FETCH_FAILURE
)