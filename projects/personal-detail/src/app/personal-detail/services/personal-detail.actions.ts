import { createAction, props } from '@ngrx/store';
import { PersonalDetail } from 'projects/shell/src/app/mock';

export const PERSONAL_DETAIL_FETCH = '[Personal Detail] Fetch';
export const PERSONAL_DETAIL_FETCH_SUCCESS = '[Personal Detail] Fetch Success';
export const PERSONAL_DETAIL_FETCH_FAILURE = '[Personal Detail] Fetch Failure';
export const PERSONAL_DETAIL_CHANGE = '[Personal Detail] change Mode to Edit';
export const PERSONAL_DETAIL_EDIT = '[Personal Detail] Edit';
export const PERSONAL_DETAIL_EDIT_SUCCESS = '[Personal Detail] Edit Success';
export const PERSONAL_DETAIL_EDIT_FAILURE = '[Personal Detail] Edit Failure';

export const fetch = createAction(
    PERSONAL_DETAIL_FETCH
)

export const fetchSuccess = createAction(
    PERSONAL_DETAIL_FETCH_SUCCESS,
    props<{personalDetail: PersonalDetail}>()
)

export const fetchFailure = createAction(
    PERSONAL_DETAIL_FETCH_FAILURE
)

export const change = createAction(
    PERSONAL_DETAIL_CHANGE
)

export const edit = createAction(
    PERSONAL_DETAIL_EDIT,
    props<{personalDetail: PersonalDetail}>()
)

export const editSuccess = createAction(
    PERSONAL_DETAIL_EDIT_SUCCESS
)

export const editFailure = createAction(
    PERSONAL_DETAIL_EDIT_FAILURE
)