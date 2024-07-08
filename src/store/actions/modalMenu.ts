import {Dispatch} from "react";
import {ModalMenuTypes, ModalMenuActions} from "../../types/ModalMenuTypes";

export function modalActiveMenuActionsTrue() {
    return (dispatch: Dispatch<ModalMenuActions>) => {
        dispatch({
            type: ModalMenuTypes.ACTIVE_MODAL_MENU_TRUE
        })
    }
}

export function modalActiveMenuActionsFalse() {
    return (dispatch: Dispatch<ModalMenuActions>) => {
        dispatch({
            type: ModalMenuTypes.ACTIVE_MODAL_MENU_FALSE
        })
    }
}

export function modalActiveProfileActionsTrue() {
    return (dispatch: Dispatch<ModalMenuActions>) => {
        dispatch({
            type: ModalMenuTypes.ACTIVE_PROFILE_MENU_TRUE
        })
    }
}

export function modalActiveProfileActionsFalse() {
    return (dispatch: Dispatch<ModalMenuActions>) => {
        dispatch({
            type: ModalMenuTypes.ACTIVE_PROFILE_MENU_FALSE
        })
    }
}

export function modalActiveBasketActionsTrue() {
    return (dispatch: Dispatch<ModalMenuActions>) => {
        dispatch({
            type: ModalMenuTypes.ACTIVE_BASKET_MENU_TRUE
        })
    }
}

export function modalActiveBasketActionsFalse() {
    return (dispatch: Dispatch<ModalMenuActions>) => {
        dispatch({
            type: ModalMenuTypes.ACTIVE_BASKET_MENU_FALSE
        })
    }
}