import {
    IListOfDepartments,
    LIST_OF_DEPARTMENTSTypes,
    ListOfDepartmentsActions
} from "../../types/listOfDepartmentsNovaPoshta";

const initialState: IListOfDepartments = {
    departments: []
}


export const ListOfDepartmentsReducer = (state = initialState, action: ListOfDepartmentsActions): IListOfDepartments => {
    switch (action.type) {
        case LIST_OF_DEPARTMENTSTypes.GET_LIST_IF_DEPARTMENTS:
            return {...state, departments: action.payload}
        default:
            return state;
    }
}