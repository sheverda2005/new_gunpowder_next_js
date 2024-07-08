import {ErrorActions, ErrorTypes, IError} from "../../types/errorType";


const initialState: IError = {
    error: null
}

export const ErrorReducer = (state = initialState, action: ErrorActions): IError => {
    switch (action.type) {
        case ErrorTypes.ERROR_TYPE_TRUE:
            return {...state, error: action.payload}
        case ErrorTypes.ERROR_TYPE_FALSE:
            return {...state, error: null}
        default:
            return state;
    }
}