import {ConfirmOrderActions, IConfirmOrder, IConfirmOrderTypes} from "../../types/confirmOrderTypes";


const initialState: IConfirmOrder = {
    name: '',
    surName: '',
    tel: '+380',
    email: '',
    address: '',
    city: '',
    products: [],
    send_success: false,
    loading: false
}

export const confirmOrderReducer = (state: IConfirmOrder = initialState, action: ConfirmOrderActions): ConfirmOrderActions => {
    switch (action.type) {
        case IConfirmOrderTypes.INPUT_CONFIRM_ORDER_NAME:
            return {...state, name: action.payload}
        case IConfirmOrderTypes.INPUT_CONFIRM_ORDER_SURNAME:
            return {...state, surName: action.payload}
        case IConfirmOrderTypes.INPUT_CONFIRM_ORDER_TEL:
            return {...state, tel: action.payload}
        case IConfirmOrderTypes.INPUT_CONFIRM_ORDER_ADDRESS:
            return {...state, address: action.payload}
        case IConfirmOrderTypes.INPUT_CONFIRM_ORDER_CITY:
            return {...state, city: action.payload}
        case IConfirmOrderTypes.INPUT_CONFIRM_ORDER_EMAIL:
            return {...state, email: action.payload}
        case IConfirmOrderTypes.CONFIRM_ORDER_PRODUCT:
            return {...state, products: action.payload}
        case IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA:
            return {...state, name: '', surName: '', tel: '+380', email: '', address: '', city: '', products: []}
        case IConfirmOrderTypes.RESET_CONFIRM_ORDER_DATA:
            return {...state, name: '', surName: '', tel: '+380', email: '', address: '', city: '', send_success: false, loading: false}
        case IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_LOADING:
            return {...state, loading: true}
        case IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_SUCCESS:
            return {...state, send_success: true, loading: false}
        default:
            return state;
    }

}