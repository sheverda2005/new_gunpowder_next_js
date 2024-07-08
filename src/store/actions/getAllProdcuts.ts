import {Dispatch} from "react";
import {GetAllProductsActions, IProduct, IProductsTypes} from "../../types/getAllProducts";
import axios from "axios";


export function getAllProducts () {
    return async (dispatch: Dispatch<GetAllProductsActions>) => {
        try {
            dispatch({type: IProductsTypes.LOADING_ALL_PRODUCTS})
            const products = await axios.get<IProduct[]>("https://new-gunpowder-server.vercel.app/api/getAllProducts")
            dispatch({type: IProductsTypes.GET_ALL_PRODUCTS, payload: products.data})
            dispatch({type: IProductsTypes.SUCCESS_ALL_PRODUCTS})
        } catch (e) {

        }
    }
}