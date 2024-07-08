

export interface IFeedback {
    name: string
    number: string
    email: string
    message: string
    loading: boolean
    success: boolean
}

export enum FeedbackTypes {
    "INPUT_FEEDBACK_NAME"='INPUT_FEEDBACK_NAME',
    "INPUT_FEEDBACK_NUMBER"='INPUT_FEEDBACK_NUMBER',
    "INPUT_FEEDBACK_EMAIL"='INPUT_FEEDBACK_EMAIL',
    "INPUT_FEEDBACK_MESSAGE"='INPUT_FEEDBACK_MESSAGE',
    "CLEAR_FEEDBACK_DATA"="CLEAR_FEEDBACK_DATA",
    "FEEDBACK_DATA_LOADING"="FEEDBACK_DATA_LOADING",
    "FEEDBACK_DATA_SUCCESS"="FEEDBACK_DATA_SUCCESS",
}


interface inputFeedBackName {
    type: FeedbackTypes.INPUT_FEEDBACK_NAME
    payload: string
}

interface inputFeedBackNumber {
    type: FeedbackTypes.INPUT_FEEDBACK_NUMBER
    payload: string
}

interface inputFeedBackEmail {
    type: FeedbackTypes.INPUT_FEEDBACK_EMAIL
    payload: string
}

interface inputFeedBackMessage {
    type: FeedbackTypes.INPUT_FEEDBACK_MESSAGE
    payload: string
}

interface clearFeedbackData {
    type: FeedbackTypes.CLEAR_FEEDBACK_DATA
}

interface loadingFeedbackData {
    type: FeedbackTypes.FEEDBACK_DATA_LOADING
}

interface successFeedbackData {
    type: FeedbackTypes.FEEDBACK_DATA_SUCCESS
}

export type FeedbackActions =
    inputFeedBackName |
    inputFeedBackNumber |
    inputFeedBackEmail |
    inputFeedBackMessage |
    clearFeedbackData |
    loadingFeedbackData |
    successFeedbackData |
    any