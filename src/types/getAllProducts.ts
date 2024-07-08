
export interface IProduct {
    img: string,
    productName: string,
    price: string,
    productDescription: string,
    _id: string,
    productLink: string
}

export interface IProducts {
    products: IProduct[],
    loading: boolean,
    success: boolean,
}

export enum IProductsTypes {
    "GET_ALL_PRODUCTS"="GET_ALL_PRODUCTS",
    "LOADING_ALL_PRODUCTS"="LOADING_ALL_PRODUCTS",
    "SUCCESS_ALL_PRODUCTS"="SUCCESS_ALL_PRODUCTS",
}

interface getAllProducts {
    type: IProductsTypes.GET_ALL_PRODUCTS
    payload: IProduct[]
}

interface loadingAllProducts {
    type: IProductsTypes.LOADING_ALL_PRODUCTS
}

interface successAllProducts {
    type: IProductsTypes.SUCCESS_ALL_PRODUCTS
}

export type  GetAllProductsActions =
    IProductsTypes |
    loadingAllProducts |
    successAllProducts |
    any