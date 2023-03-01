export interface CompanyProfile {
    id: number;
    imgUrl: string;
    name: string;
    alamat: string;
    kota: string;
    provinsi: string;
    negara: string;
    kodepos: string;
    telepon: string;
}

export interface EmploymentDetail {
    nik: string;
    joinDate: string;
    location: string;
    reference: string;
    startDate: string;
    pengganti: string;
    vendor: string;
}

export interface PersonalDetail {
    jenisKelamin: string;
    tempatLahir: string;
    statusPerkawinan: string;
    ras: string;
    pekerjaAsing: string;
    nomorKartuKeluarga: string;
    lampiran: string;
    tanggalLahir: Date;
    agama: string;
    golonganDarah: string;
    kewarganegaraan: string;
}