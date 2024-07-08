import {INova_poshta_city, INovaPoshtaCityActions, INovaPoshtaCityTypes} from "../../types/nova_poshta_city";

const initialState: INova_poshta_city = {
    chosenCity: null,
    cities: []
}

export const novaPoshtaCityReducer = (state = initialState, action: INovaPoshtaCityActions): INova_poshta_city  => {
    switch (action.type) {
        case INovaPoshtaCityTypes.INPUT_CITIES_ADDRESS_NOVA_POSHTA:
            return {...state, cities: action.payload}
        case INovaPoshtaCityTypes.CHOSEN_CITY_ADDRESS_NOVA_POSHTA:
            return {...state, chosenCity: action.payload}
        case INovaPoshtaCityTypes.ADDRESS_CITY_INPUT_NOVA_POSHTA:
            return {...state, cities: action.payload}
        default:
            return state;
    }
}