import {Dispatch} from "react";
import {IStorageActions, StorageTypes} from "../../types/localStorageItems";

export function localeStorageItems() {

    return (dispatch: Dispatch<IStorageActions>) => {
        let allItems = []
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i); // Получаем ключ
            // @ts-ignore
            let value = JSON.parse(localStorage.getItem(key));
            // @ts-ignore
            let item = {
                key: key,
                value: value
            };
            allItems.push(item);
        }
        console.log(allItems)
        dispatch({type: StorageTypes.LOCALE_STORAGE_ITEMS, payload: allItems});
    }
}
