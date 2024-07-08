import {ISearchMenuActions, ISearchMenuStates, SearchMenuTypes} from "../../types/serachMenuTypes";

const initialState: ISearchMenuStates = {
    activeSearch: false
}

export const SearchMenuModalReducer = (state = initialState, action: ISearchMenuActions): ISearchMenuStates => {
    switch (action.type) {
        case SearchMenuTypes.ACTIVE_SEARCH_MENU_TRUE:
            return {...state, activeSearch: true}
        case SearchMenuTypes.ACTIVE_SEARCH_MENU_FALSE:
            return {...state, activeSearch: false}
        default:
            return state;
    }
}