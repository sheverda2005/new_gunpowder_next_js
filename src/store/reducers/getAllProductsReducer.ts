import {GetAllProductsActions, IProduct, IProducts, IProductsTypes} from "../../types/getAllProducts";


const initialState: IProducts = {
    products: [],
    success: false,
    loading: false
}


export const getAllProducts = (state = initialState, action: GetAllProductsActions): IProducts => {
    switch (action.type) {
        case IProductsTypes.GET_ALL_PRODUCTS:
            return {...state, products: action.payload}
        case IProductsTypes.LOADING_ALL_PRODUCTS:
            return {...state, loading: true}
        case IProductsTypes.SUCCESS_ALL_PRODUCTS:
            return {...state, success: true, loading: false}
        default:
            return state;
    }
}