import { createAction, props } from '@ngrx/store';
import { PersonalDetail } from 'src/app/mock';

export const PERSONAL_DETAIL_FETCH = '[Personal Detail] Fetch';
export const PERSONAL_DETAIL_FETCH_SUCCESS = '[Personal Detail] Fetch Success';
export const PERSONAL_DETAIL_FETCH_FAILURE = '[Personal Detail] Fetch Failure';

export const fetch = createAction(
    PERSONAL_DETAIL_FETCH
)

export const fetchSuccess = createAction(
    PERSONAL_DETAIL_FETCH_SUCCESS,
    props<PersonalDetail>()
)

export const fetchFailure = createAction(
    PERSONAL_DETAIL_FETCH_FAILURE
)