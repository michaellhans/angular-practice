import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CompanyProfile } from 'src/app/mock';
import { fetch, fetchFailure, fetchSuccess } from './company-profile.actions';

export interface CompanyProfileState {
    companyProfile: CompanyProfile;
    isLoading: boolean;
}

export const initialState: CompanyProfileState = {
    companyProfile: {
        id: 0,
        imgUrl: "",
        name: "",
        alamat: "",
        kota: "",
        provinsi: "",
        negara: "",
        kodepos: "",
        telepon: ""
    },
    isLoading: false
}

export const getCompanyProfileState = createFeatureSelector<CompanyProfileState>('companyProfile');

export const selectCompanyProfile = createSelector(
    getCompanyProfileState,
    (state: CompanyProfileState) => state.companyProfile
);

export const companyProfileReducer = createReducer(
  initialState,
  on(fetch, (state) => ({...state, isLoading: true})),
  on(fetchSuccess, (state, {companyProfile}) => ({...state, companyProfile, isLoading: false})),
  on(fetchFailure, (state) => ({...state, isLoading: false}))
);
