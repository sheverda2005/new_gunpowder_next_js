
export interface IStorageItems {
    items : any
}

export enum StorageTypes {
    "LOCALE_STORAGE_ITEMS"="LOCALE_STORAGE_ITEMS",
    "CLEAR_STORAGE_ITEMS"="CLEAR_STORAGE_ITEMS"
}

interface localStorageItems {
    type: StorageTypes.LOCALE_STORAGE_ITEMS
    payload: any
}

interface clearStorageItems {
    type: StorageTypes.CLEAR_STORAGE_ITEMS
}

export type IStorageActions  =
    localStorageItems |
    clearStorageItems |
    any