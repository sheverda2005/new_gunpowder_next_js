import {IModalMenuTypes, ModalMenuActions, ModalMenuTypes} from "../../types/ModalMenuTypes";

const initialState: IModalMenuTypes = {
    active: false,
    basketActive: false,
    profileActive: false
}
export const ModalMenuReducer = (state = initialState, action: ModalMenuActions): IModalMenuTypes => {
    switch (action.type) {
        case ModalMenuTypes.ACTIVE_MODAL_MENU_TRUE:
            return {...state, active: true}
        case ModalMenuTypes.ACTIVE_MODAL_MENU_FALSE:
            return {...state, active: false}
        case ModalMenuTypes.ACTIVE_PROFILE_MENU_TRUE:
            return {...state, profileActive: true}
        case ModalMenuTypes.ACTIVE_PROFILE_MENU_FALSE:
            return {...state, profileActive: false}
        case ModalMenuTypes.ACTIVE_BASKET_MENU_TRUE:
            return {...state, basketActive: true}
        case ModalMenuTypes.ACTIVE_BASKET_MENU_FALSE:
            return {...state, basketActive: false}
        default:
            return state;
    }
}