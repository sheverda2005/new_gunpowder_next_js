
export interface ISearchMenuStates {
    activeSearch: boolean
}

export enum SearchMenuTypes {
    "ACTIVE_SEARCH_MENU_TRUE"="ACTIVE_SEARCH_MENU_TRUE",
    "ACTIVE_SEARCH_MENU_FALSE"="ACTIVE_SEARCH_MENU_FALSE"
}

interface activeSearchMenuTrue {
    type: SearchMenuTypes.ACTIVE_SEARCH_MENU_TRUE
}

interface activeSearchMenuFalse {
    type: SearchMenuTypes.ACTIVE_SEARCH_MENU_FALSE
}

export type ISearchMenuActions = activeSearchMenuTrue | activeSearchMenuFalse | any