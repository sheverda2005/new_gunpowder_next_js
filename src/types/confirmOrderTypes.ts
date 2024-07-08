

export interface IConfirmValue {
    id: string
    count: number
}

export interface IConfirmProduct {
    key: string
    value: IConfirmValue
}
export interface IConfirmOrder {
    name: string
    surName: string
    tel: string
    email: string
    city: string
    address: string
    products: IConfirmProduct[]
    send_success: boolean,
    loading: boolean,
}


export enum IConfirmOrderTypes {
    "INPUT_CONFIRM_ORDER_NAME"= "INPUT_CONFIRM_ORDER_NAME",
    "INPUT_CONFIRM_ORDER_SURNAME"= "INPUT_CONFIRM_ORDER_SURNAME",
    "INPUT_CONFIRM_ORDER_TEL"= "INPUT_CONFIRM_ORDER_TEL",
    "INPUT_CONFIRM_ORDER_CITY"= "INPUT_CONFIRM_ORDER_CITY",
    "INPUT_CONFIRM_ORDER_ADDRESS"= "INPUT_CONFIRM_ORDER_ADDRESS",
    "INPUT_CONFIRM_ORDER_EMAIL"= "INPUT_CONFIRM_ORDER_EMAIL",
    "CONFIRM_ORDER_PRODUCT"= "CONFIRM_ORDER_PRODUCT",
    "SEND_CONFIRM_ORDER_DATA"= "SEND_CONFIRM_ORDER_DATA",
    "RESET_CONFIRM_ORDER_DATA"= "RESET_CONFIRM_ORDER_DATA",
    "SEND_CONFIRM_ORDER_DATA_SUCCESS"= "SEND_CONFIRM_ORDER_DATA_SUCCESS",
    "SEND_CONFIRM_ORDER_DATA_LOADING"="SEND_CONFIRM_ORDER_DATA_LOADING"
}

interface inputConfirmOrderName {
    type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_NAME
    payload: string
}


interface inputConfirmOrderSurName {
    type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_SURNAME
    payload: string
}

interface inputConfirmOrderTell {
    type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_TEL
    payload: string
}

interface inputConfirmOrderCity {
    type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_CITY
    payload: string
}

interface inputConfirmOrderAddress {
    type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_ADDRESS
    payload: string
}

interface inputConfirmOrderEmail{
    type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_EMAIL
    payload: string
}

interface confirmOrderProducts {
    type: IConfirmOrderTypes.CONFIRM_ORDER_PRODUCT
    payload: IConfirmProduct[]
}

interface confirmOrderSendInfo {
    type : IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA
}

interface confirmOrderResetData {
    type : IConfirmOrderTypes.RESET_CONFIRM_ORDER_DATA
}

interface sendConfirmOrderDataSuccess {
    type : IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_SUCCESS
}

interface sendConfirmOrderDataLoading {
    type : IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_SUCCESS
}



export type ConfirmOrderActions =
    inputConfirmOrderEmail |
    inputConfirmOrderName |
    inputConfirmOrderSurName |
    inputConfirmOrderTell |
    inputConfirmOrderCity |
    inputConfirmOrderAddress |
    confirmOrderProducts |
    confirmOrderSendInfo |
    confirmOrderResetData |
    sendConfirmOrderDataSuccess |
    sendConfirmOrderDataLoading |
    any