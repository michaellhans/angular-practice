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
    tanggalLahir: string;
    agama: string;
    golonganDarah: string;
    kewarganegaraan: string;
}

export const COMPANY_PROFILE =
{
    id: 1,
    imgUrl: "../assets/gdp-labs.jpg",
    name: "Michael Hans",
    alamat: "Jalan Ganesha No. 10",
    kota: "Bandung",
    provinsi: "Jawa Barat",
    negara: "Indonesia",
    kodepos: "40135",
    telepon: "081315678220"
}

export const EMPLOYMENT_DETAIL = {
    nik: "ID-0009-1",
    joinDate: "15 Jan 2021",
    location: "Denpasar",
    reference: "Email",
    startDate: "15 Jan 2021",
    pengganti: "",
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
    tanggalLahir: "06 Apr 1994",
    agama: "Catholicism",
    golonganDarah: "B",
    kewarganegaraan: "Indonesia",
}