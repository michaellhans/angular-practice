import { Action, createReducer, on } from '@ngrx/store';
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

export const companyProfileReducer = createReducer(
  initialState,
  on(fetch, (state) => ({...state, isLoading: true})),
  on(fetchSuccess, (state, {companyProfile}) => ({...state, companyProfile, isLoading: false}) ),
  on(fetchFailure, (state) => ({...state, isLoading: false}))
);

export function reducer(state: CompanyProfileState | undefined, action: Action){
    return companyProfileReducer(state, action);
}