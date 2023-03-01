import { createAction, props } from '@ngrx/store';
import { CompanyProfile } from '~libs';

export const COMPANY_PROFILE_FETCH = '[Company Profile] Fetch';
export const COMPANY_PROFILE_FETCH_SUCCESS = '[Company Profile] Fetch Success';
export const COMPANY_PROFILE_FETCH_FAILURE = '[Company Profile] Fetch Failure';

export const fetch = createAction(
    COMPANY_PROFILE_FETCH
)

export const fetchSuccess = createAction(
    COMPANY_PROFILE_FETCH_SUCCESS,
    props<{companyProfile: CompanyProfile}>()
)

export const fetchFailure = createAction(
    COMPANY_PROFILE_FETCH_FAILURE
)