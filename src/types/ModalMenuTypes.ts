
export interface IModalMenuTypes {
    active: boolean
    profileActive: boolean
    basketActive: boolean
}

export enum ModalMenuTypes {
    "ACTIVE_MODAL_MENU_TRUE"="ACTIVE_MODAL_MENU_TRUE",
    "ACTIVE_MODAL_MENU_FALSE"="ACTIVE_MODAL_MENU_FALSE",
    "ACTIVE_PROFILE_MENU_TRUE"="ACTIVE_PROFILE_MENU_TRUE",
    "ACTIVE_PROFILE_MENU_FALSE"="ACTIVE_PROFILE_MENU_FALSE",
    "ACTIVE_BASKET_MENU_TRUE"="ACTIVE_BASKET_MENU_TRUE",
    "ACTIVE_BASKET_MENU_FALSE"="ACTIVE_BASKET_MENU_FALSE"
}

interface ActiveMenuTrue {
    type: ModalMenuTypes.ACTIVE_MODAL_MENU_TRUE
}

interface ActiveMenuFalse {
    type: ModalMenuTypes.ACTIVE_MODAL_MENU_FALSE
}

interface ActiveProfileTrue {
    type: ModalMenuTypes.ACTIVE_PROFILE_MENU_TRUE
}

interface ActiveProfileFalse {
    type: ModalMenuTypes.ACTIVE_PROFILE_MENU_FALSE
}

interface ActiveBasketTrue {
    type: ModalMenuTypes.ACTIVE_BASKET_MENU_TRUE
}


interface ActiveBasketFalse {
    type: ModalMenuTypes.ACTIVE_BASKET_MENU_FALSE
}


export type ModalMenuActions = ActiveMenuTrue | ActiveMenuFalse | ActiveProfileTrue | ActiveProfileFalse | ActiveBasketTrue | ActiveBasketFalse | any