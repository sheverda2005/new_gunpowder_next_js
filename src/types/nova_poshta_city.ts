export interface ICityNovaPoshta {
    AddressDeliveryAllowed: boolean
    Area: string
    DeliveryCity: string
    MainDescription: string
    ParentRegionCode: string
    ParentRegionTypes: string
    Present: string
    Ref: string
    Region: string
    RegionTypes: string
    RegionTypesCode: string
    SettlementTypeCode: string
    StreetsAvailability: boolean
    Warehouses: number
}

export interface INova_poshta_city {
    cities: ICityNovaPoshta[]
    chosenCity: ICityNovaPoshta | null
}

export enum INovaPoshtaCityTypes {
    "INPUT_CITIES_ADDRESS_NOVA_POSHTA"= "INPUT_CITIES_ADDRESS_NOVA_POSHTA",
    "CHOSEN_CITY_ADDRESS_NOVA_POSHTA"="CHOSEN_CITY_ADDRESS_NOVA_POSHTA",
    "ADDRESS_CITY_INPUT_NOVA_POSHTA"="ADDRESS_CITY_INPUT_NOVA_POSHTA"
}

export interface inputNovaPoshtaCities {
    type: INovaPoshtaCityTypes.INPUT_CITIES_ADDRESS_NOVA_POSHTA
    payload: ICityNovaPoshta[]
}


export interface chosenCityNovaPoshta {
    type: INovaPoshtaCityTypes.CHOSEN_CITY_ADDRESS_NOVA_POSHTA
    payload: ICityNovaPoshta
}

export interface addressNovePoshtaCity {
    type: INovaPoshtaCityTypes.ADDRESS_CITY_INPUT_NOVA_POSHTA
    payload: ICityNovaPoshta[]
}

export type INovaPoshtaCityActions =
    inputNovaPoshtaCities |
    chosenCityNovaPoshta |
    addressNovePoshtaCity |
    any
