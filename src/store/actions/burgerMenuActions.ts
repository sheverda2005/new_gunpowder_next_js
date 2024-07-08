import {Dispatch} from "react";
import {BurgerMenuActions, IBurgerMenuTypes} from "../../types/burgerMenuTypes";


export function burgerMenuActive() {
    return (dispatch: Dispatch<BurgerMenuActions>) => {
        dispatch({type: IBurgerMenuTypes.BURGER_MENU_ACTIVE})
    }
}