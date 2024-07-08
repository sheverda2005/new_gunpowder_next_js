import React, {Dispatch} from "react";
import {ConfirmOrderActions, IConfirmOrderTypes, IConfirmProduct} from "../../types/confirmOrderTypes";
import axios from "axios";
import {ErrorActions, ErrorTypes} from "../../types/errorType";
import {IStorageActions, StorageTypes} from "../../types/localStorageItems";

export function confirmOrderName(name: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_NAME,
            payload: name
        })
    }
}

export function confirmOrderSurName(surName: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_SURNAME,
            payload: surName
        })
    }
}

export function confirmOrderTel(tel: string) {
    let tel_array = tel.split("")
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        if (tel_array.length > 17) {
            return
        }
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_TEL,
            payload: tel
        })
    }
}

export function confirmOrderEmail(email: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_EMAIL,
            payload: email
        })
    }
}

export function confirmOrderCity(city: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_CITY,
            payload: city
        })
    }
}

export function confirmOrderAddress(address: string) {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.INPUT_CONFIRM_ORDER_ADDRESS,
            payload: address
        })
    }
}

export function confirmOrderProducts(products: IConfirmProduct[]) {
    console.log(products)
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({
            type: IConfirmOrderTypes.CONFIRM_ORDER_PRODUCT,
            payload: products
        })
    }
}

export function confirmOrderSendData (name: string, surName: string, tel: string, address: string, city: string, email: string, products: IConfirmProduct[], event: React.MouseEvent<HTMLButtonElement>, allPrice: number) {
    event.preventDefault()
    let email_array = email.split("")
    let email_check = false
    let tel_array = tel.split("")
    return async (dispatch: Dispatch<ConfirmOrderActions | ErrorActions | IStorageActions>) => {
        if (allPrice == 0) {
            return;
        }
        if (name.trim().length === 0 || surName.trim().length === 0 || tel.trim().length === 0 || address.trim().length === 0 || city.trim().length === 0 || email.trim().length == 0) {
            dispatch({type: ErrorTypes.ERROR_TYPE_TRUE, payload: "Всі поля повинні бути заповнені"})
            setTimeout(()=> {
                dispatch({type: ErrorTypes.ERROR_TYPE_FALSE})
            }, 2000)
            return;
        }
        email_array.forEach(letter => {
            if (letter === "@") {
                email_check = true
            }
        })
        if (!email_check) {
            dispatch({type: ErrorTypes.ERROR_TYPE_TRUE, payload: "Пошта некоректна"})
            setTimeout(()=> {
                dispatch({type: ErrorTypes.ERROR_TYPE_FALSE})
            }, 2000)
            return;
        }
        if (tel_array.length !== 17) {
            dispatch({type: ErrorTypes.ERROR_TYPE_TRUE, payload: "Номер телефону недійсний"})
            setTimeout(()=> {
                dispatch({type: ErrorTypes.ERROR_TYPE_FALSE})
            }, 2000)
            return;
        }
        if (tel_array[0] !== "+" || tel_array[1] !== "3" || tel_array[2] !== "8" || tel_array[3] !== "0") {
            dispatch({type: ErrorTypes.ERROR_TYPE_TRUE, payload: "Номер повинен починатися на +380"})
            setTimeout(()=> {
                dispatch({type: ErrorTypes.ERROR_TYPE_FALSE})
            }, 2000)
            return;
        }
      try {
          dispatch({type: IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_LOADING})
          let user = {
              name,
              surName,
              tel,
              address,
              city,
              email
          }
          const request = await axios.post("https://new-gunpowder-server.vercel.app/api/getOrderData", {
              user,
              products
          })
          dispatch({type: IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA})
          dispatch({type: IConfirmOrderTypes.SEND_CONFIRM_ORDER_DATA_SUCCESS})
          localStorage.clear();
          dispatch({type: StorageTypes.CLEAR_STORAGE_ITEMS})
      } catch (e) {
          console.log(e)
      }
    }
}

export function resetConfirmOrderData () {
    return (dispatch: Dispatch<ConfirmOrderActions>) => {
        dispatch({type: IConfirmOrderTypes.RESET_CONFIRM_ORDER_DATA})
    }
}
