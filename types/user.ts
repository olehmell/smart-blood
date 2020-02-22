// tslint:disable-next-line:interface-over-type-literal
export type UserType = {
    name: string,
    phone: string,
    mail: string,
    password: string
}

export type MedicalType = UserType & {
    address: string,
    description: string
}