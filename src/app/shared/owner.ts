export class OwnerEntity {
    aLastName: string|undefined
    aFirstName: string|undefined
    aMiddleName: string|undefined
    aCars: CarEntity[]|undefined 
}
export class CarEntity {
    number: string|undefined
    manufacturer: string|undefined
    model: string|undefined
    year: number|undefined
}