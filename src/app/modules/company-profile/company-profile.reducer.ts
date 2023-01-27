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
        imgUrl: "../assets/gdp-labs.jpg",
        name: "Michael Hans",
        alamat: "Jalan Ganesha No. 10",
        kota: "Bandung",
        provinsi: "Jawa Barat",
        negara: "Indonesia",
        kodepos: "40135",
        telepon: "081315678220"
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
  on(fetchSuccess, (state, companyProfile) => ({...state, companyProfile, isLoading: false})),
  on(fetchFailure, (state) => ({...state, isLoading: false}))
);
