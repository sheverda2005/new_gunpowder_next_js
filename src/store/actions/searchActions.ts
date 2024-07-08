import {Dispatch} from "react";
import {ISearchMenuActions, SearchMenuTypes} from "../../types/serachMenuTypes";

export function searchMenuModalTrue() {
    return (dispatch: Dispatch<ISearchMenuActions>) => {
        dispatch({
            type: SearchMenuTypes.ACTIVE_SEARCH_MENU_TRUE
        })
    }
}

export function searchMenuModalFalse() {
    return (dispatch: Dispatch<ISearchMenuActions>) => {
        dispatch({
            type: SearchMenuTypes.ACTIVE_SEARCH_MENU_FALSE
        })
    }
}