import {BurgerMenuActions, IBurgerMenu, IBurgerMenuTypes} from "../../types/burgerMenuTypes";

const initialState: IBurgerMenu = {
    active: false
}

export const burgerMenuReducer = (state = initialState, action: BurgerMenuActions): IBurgerMenu => {
    switch (action.type) {
        case IBurgerMenuTypes.BURGER_MENU_ACTIVE:
            return {...state, active: !state.active}
        default:
            return state;
    }
}