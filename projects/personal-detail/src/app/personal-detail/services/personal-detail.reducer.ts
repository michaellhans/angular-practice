import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { PersonalDetail } from '~libs';
import { fetch, fetchFailure, fetchSuccess, edit, editFailure, editSuccess, change } from './personal-detail.actions';

export interface PersonalDetailState {
    personalDetail: PersonalDetail;
    isLoading: boolean;
    isEdit: boolean;
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
        tanggalLahir: new Date(),
        agama: "",
        golonganDarah: "",
        kewarganegaraan: "",
    },
    isLoading: false,
    isEdit: false
}

export const getPersonalDetailState = createFeatureSelector<PersonalDetailState>('personalDetail');

export const selectPersonalDetail = createSelector(
    getPersonalDetailState,
    (state: PersonalDetailState) => state.personalDetail
);

export const selectIsEdit = createSelector(
    getPersonalDetailState,
    (state: PersonalDetailState) => state.isEdit
);

export const personalDetailReducer = createReducer(
  initialState,
  on(fetch, (state) => ({...state, isLoading: true})),
  on(fetchSuccess, (state, {personalDetail}) => ({...state, personalDetail, isLoading: false})),
  on(fetchFailure, (state) => ({...state, isLoading: false})),
  on(change, (state) => ({...state, isEdit: !state.isEdit})),
  on(edit, (state, {personalDetail}) => ({...state, personalDetail, isLoading: true, isEdit: true})),
  on(editSuccess, (state) => ({...state, isLoading: false, isEdit: false})),
  on(editFailure, (state) => ({...state, isLoading: false, isEdit: false}))
);
