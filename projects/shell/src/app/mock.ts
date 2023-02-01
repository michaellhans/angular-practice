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

export const COMPANY_PROFILE =
{
    id: 1,
    imgUrl: "../assets/gdp-labs.jpg",
    name: "GDP Labs",
    alamat: "Jl. Dr. Otten No.10, Pasir Kaliki, Kec. Cicendo",
    kota: "Bandung",
    provinsi: "Jawa Barat",
    negara: "Indonesia",
    kodepos: "40171",
    telepon: "081315678220"
}

export const EMPLOYMENT_DETAIL = {
    nik: "ID-0009-1",
    joinDate: "15 Jan 2021",
    location: "Denpasar",
    reference: "Email",
    startDate: "15 Jan 2021",
    pengganti: "Belum ada",
    vendor: "Apple",
}

export const PERSONAL_DETAIL = {
    jenisKelamin: "Pria",
    tempatLahir: "Jakarta",
    statusPerkawinan: "Lajang",
    ras: "Bugis",
    pekerjaAsing: "Tidak",
    nomorKartuKeluarga: "123123123123455",
    lampiran: "image(3).png",
    tanggalLahir: new Date("1994-04-06"),
    agama: "Catholicism",
    golonganDarah: "B",
    kewarganegaraan: "Indonesia",
}