import {StorageTypes} from "../../types/localStorageItems";

const initialState = {
    items: []
}

export const localeStorageItemsReducer = (state = initialState, actions: any) => {
    switch(actions.type) {
        case StorageTypes.LOCALE_STORAGE_ITEMS:
            return {...state, items: actions.payload}
        case StorageTypes.CLEAR_STORAGE_ITEMS:
            return {...state, items: []}
        default:
            return state;
    }
}