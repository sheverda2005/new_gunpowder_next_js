export interface IError {
    error: string | null
}

export enum ErrorTypes {
    "ERROR_TYPE_TRUE"="ERROR_TYPE_TRUE",
    "ERROR_TYPE_FALSE"="ERROR_TYPE_FALSE"
}

interface errorTrue {
    type: ErrorTypes.ERROR_TYPE_TRUE
    payload: string
}

interface errorFalse {
    type: ErrorTypes.ERROR_TYPE_FALSE
}

export type ErrorActions = errorTrue | errorFalse | any

