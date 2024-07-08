export interface IBurgerMenu {
    active: boolean;
}

export enum IBurgerMenuTypes {
    "BURGER_MENU_ACTIVE"= "BURGER_MENU_ACTIVE",
}

interface burgerMenuActive {
    type: IBurgerMenuTypes.BURGER_MENU_ACTIVE
}

export type BurgerMenuActions = burgerMenuActive | any