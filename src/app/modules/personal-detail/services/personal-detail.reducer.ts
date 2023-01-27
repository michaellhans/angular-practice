import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { PersonalDetail } from 'src/app/mock';
import { fetch, fetchFailure, fetchSuccess } from './personal-detail.actions';

export interface PersonalDetailState {
    personalDetail: PersonalDetail;
    isLoading: boolean;
}

export const initialState: PersonalDetailState = {
    personalDetail: {
        jenisKelamin: "",
        tempatLahir: "",
        statusPerkawinan: "",
        ras: "",
        pekerjaAsing: "",
        nomorKartuKeluarga: "",
        lampiran: "",
        tanggalLahir: "",
        agama: "",
        golonganDarah: "",
        kewarganegaraan: "",
    },
    isLoading: false
}

export const getPersonalDetailState = createFeatureSelector<PersonalDetailState>('personalDetail');

export const selectPersonalDetail = createSelector(
    getPersonalDetailState,
    (state: PersonalDetailState) => state.personalDetail
);

export const personalDetailReducer = createReducer(
  initialState,
  on(fetch, (state) => ({...state, isLoading: true})),
  on(fetchSuccess, (state, personalDetail) => ({...state, personalDetail, isLoading: false})),
  on(fetchFailure, (state) => ({...state, isLoading: false}))
);
