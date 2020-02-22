enum BloodType {
  Ominus,
  Oplus,
  Aminus,
  Aplus,
  Bminus,
  Bplus,
  ABminus,
  ABplus
}

export type Donor = {
  id: number,
  fullName: string,
  birthDate: Date,
  phoneNumber: string,
  email: string,
  bloodType: BloodType
};

export type DonorReg = Donor & {
  password: string
};

export type Donation = {
  id: number,
  donorId: number,
  centerId: number,
  recipientId: number,
  donatedBloodType: BloodType,
  date: Date,
};

export type BloodCenter = {
  id: number,
  name: string,
  address: string,
  bloodBankId: number,
};

export type BloodBank = {
  id: number,
  bankInfo: Map<BloodType, number>,
};

export type Recepient = {
  id: number,
  centerId: number,
  age: number,
  disease: string,
  diseaseDesc: string,
  bloodType: BloodType,
};