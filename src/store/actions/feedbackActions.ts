import {Dispatch} from "react";
import {FeedbackActions, FeedbackTypes} from "../../types/feedback";
import {ConfirmOrderActions} from "../../types/confirmOrderTypes";
import axios from "axios";
import {ErrorActions, ErrorTypes} from "../../types/errorType";


export function inputFeedbackName(name: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_NAME, payload: name});
    }
}

export function inputFeedbackNumber(number: string) {
    let number_array = number.split("");
    return (dispatch: Dispatch<FeedbackActions>) => {
        if (number_array.length > 17) {
            return;
        }
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_NUMBER, payload: number});
    }
}

export function inputFeedbackEmail(email: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_EMAIL, payload: email});
    }
}

export function inputFeedbackMessage(message: string) {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.INPUT_FEEDBACK_MESSAGE, payload: message});
    }
}

export function clearFeedBackData() {
    return (dispatch: Dispatch<FeedbackActions>) => {
        dispatch({type: FeedbackTypes.CLEAR_FEEDBACK_DATA});
    }
}


export function confirmFeedbackMessage(name: string, number: string, email: string, message: string) {
    let email_array = email.split("")
    let email_check = false
    let tel_array = number.split("")
    return async (dispatch: Dispatch<ConfirmOrderActions | ErrorActions>) => {
        if (name.trim().length === 0 || number.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
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
        dispatch({type: FeedbackTypes.FEEDBACK_DATA_LOADING})
        const req = await axios.post("https://new-gunpowder-server.vercel.app/api/feedbackSendMessage", {
            name, number, email, message
        })
        dispatch({type: FeedbackTypes.FEEDBACK_DATA_SUCCESS})
    }
}