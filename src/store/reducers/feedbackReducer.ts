import {FeedbackActions, FeedbackTypes, IFeedback} from "../../types/feedback";

const initialState: IFeedback = {
    name: "",
    number: "+380",
    email: "",
    message: "",
    loading: false,
    success: false,
}


export const feedbackReducer = (state = initialState, action: FeedbackActions): IFeedback => {
    switch (action.type) {
        case FeedbackTypes.INPUT_FEEDBACK_NAME:
            return {...state, name: action.payload}
        case FeedbackTypes.INPUT_FEEDBACK_NUMBER:
            return {...state, number: action.payload}
        case FeedbackTypes.INPUT_FEEDBACK_EMAIL:
            return {...state, email: action.payload}
        case FeedbackTypes.INPUT_FEEDBACK_MESSAGE:
            return {...state, message: action.payload}
        case FeedbackTypes.CLEAR_FEEDBACK_DATA:
            return {...state, name: '', message: '', number: '+380', email:'', loading: false, success: false}
        case FeedbackTypes.FEEDBACK_DATA_LOADING:
            return {...state, loading: true}
        case FeedbackTypes.FEEDBACK_DATA_SUCCESS:
            return {...state, loading: false, success: true, name: '', message: '', number: '+380', email:''}
        default:
            return state;
    }
}