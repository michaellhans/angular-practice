import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EmploymentDetail } from 'projects/shell/src/app/mock';
import { fetch, fetchFailure, fetchSuccess } from './employment-detail.actions';

export interface EmploymentDetailState {
    employmentDetail: EmploymentDetail;
    isLoading: boolean;
}

export const initialState: EmploymentDetailState = {
    employmentDetail: {
        nik: "",
        joinDate: "",
        location: "",
        reference: "",
        startDate: "",
        pengganti: "",
        vendor: "",
    },
    isLoading: false
}

export const getEmploymentDetailState = createFeatureSelector<EmploymentDetailState>('employmentDetail');

export const selectEmploymentDetail = createSelector(
    getEmploymentDetailState,
    (state: EmploymentDetailState) => state.employmentDetail
);

export const employmentDetailReducer = createReducer(
  initialState,
  on(fetch, (state) => ({...state, isLoading: true})),
  on(fetchSuccess, (state, {employmentDetail}) => ({...state, employmentDetail, isLoading: false})),
  on(fetchFailure, (state) => ({...state, isLoading: false}))
);
