export interface IDeliveryItem {
    Friday: string
    Monday: string
    Saturday: string
    Sunday: string
    Thursday: string
    Tuesday: string
    Wednesday: string
}

export interface IReceivingLimitationsOnDimensionsItem {
    Width: number
    Height: number
    Length: number
}

export interface IReceptionItem {
    Friday: string
    Monday: string
    Saturday: string
    Sunday: string
    Thursday: string
    Tuesday: string
    Wednesday: string
}

export interface IScheduleItem {
    Friday: string
    Monday: string
    Saturday: string
    Sunday: string
    Thursday: string
    Tuesday: string
    Wednesday: string
}

export interface ISendingLimitationsOnDimensionsItem {
    Width: number
    Height: number
    Length: number
}

export interface IListOfDepartmentsItem {
    BeaconCode: string
    BicycleParking: string
    CanGetMoneyTransfer: string
    CategoryOfWarehouse: string
    CityDescription: string
    CityDescriptionRu: string
    CityRef: string
    Delivery: IDeliveryItem
    DenyToSelect: string
    Description: string
    DescriptionRu: string
    Direct: string
    DistrictCode: string
    GeneratorEnabled: string
    HasFittingRoom: string
    HasMirror: string
    InternationalShipping: string
    Latitude: string
    Longitude: string
    MaxDeclaredCost: string
    Number: string
    OnlyReceivingParcel: string
    POSTerminal: string
    PaymentAccess: string
    Phone: string
    PlaceMaxWeightAllowed: string
    PostFinance: string
    PostMachineType: string
    PostalCodeUA: string
    ReceivingLimitationsOnDimensions: IReceivingLimitationsOnDimensionsItem
    Reception: IReceptionItem
    Ref: string
    RegionCity: string
    Schedule: IScheduleItem
    SelfServiceWorkplacesCount: string
    SendingLimitationsOnDimensions: ISendingLimitationsOnDimensionsItem
    SettlementAreaDescription: string
    SettlementDescription: string
    SettlementRef: string
    SettlementRegionsDescription: string
    SettlementTypeDescription: string
    SettlementTypeDescriptionRu: string
    ShortAddress: string
    ShortAddressRu: string
    SiteKey: string
    TotalMaxWeightAllowed: string
    TypeOfWarehouse: string
    WarehouseForAgent: string
    WarehouseIllusha: string
    WarehouseIndex: string
    WarehouseStatus: string
    WarehouseStatusDate: string
    WorkInMobileAwis: string
}

export interface IListOfDepartments {
    departments: IListOfDepartmentsItem[]
}


export enum LIST_OF_DEPARTMENTSTypes {
    "GET_LIST_IF_DEPARTMENTS"="GET_LIST_IF_DEPARTMENTS"
}


interface getListOfDepartments {
    type: LIST_OF_DEPARTMENTSTypes.GET_LIST_IF_DEPARTMENTS
    payload: IListOfDepartmentsItem[]
}

export type ListOfDepartmentsActions = getListOfDepartments | any