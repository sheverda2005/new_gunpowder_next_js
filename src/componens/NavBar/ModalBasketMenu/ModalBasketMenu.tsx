import React, {useEffect, useState} from 'react';
import "./modalBasketMenu.sass"
import ModalBasketMenuItem from "./ModalBasketMenuItem";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {IProduct} from "@/types/getAllProducts";
import {useActions} from "@/hooks/useActions";
import Link from "next/link";
import Spinner from "@/componens/Spinner/Spinner";

function getAllProductsLocalStorage() {
    let allItems = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); // Получаем ключ
        // @ts-ignore
        let value = JSON.parse(localStorage.getItem(key));
        // @ts-ignore
        let item = {
            key: key,
            value: value
        };
        allItems.push(item);
    }
    return allItems
}

function deleteItemBasket(deleteItem: string | number) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); // Получаем ключ
        // @ts-ignore
        let value = JSON.parse(localStorage.getItem(key));
        if (deleteItem != 0) {
            if (value.id == deleteItem) {
                // @ts-ignore
                localStorage.removeItem(key)
            }
        }
    }
}

function allProductCount (products: any, storageItems: any){
    let basketProductsPrice = 0;
    products.forEach((product: IProduct) => {
        storageItems.forEach((storageItem: any) => {
            if (product._id ==  storageItem.value.id) {
                basketProductsPrice += +product.price*storageItem.value.count
            }
        })
    })
    return basketProductsPrice
}
const ModalBasketMenu = () => {
    const [storageItems, setStorageItems] = useState([])
    const [deleteItem, setDeleteItem] = useState(0)
    const {products, loading} = useTypedSelector(state => state.allProducts)
    const [allPrice, setAllPrice] = useState(0);
    const {modalActiveBasketActionsFalse, modalActiveMenuActionsFalse, confirmOrderProducts, localeStorageItems} = useActions()
    useEffect(() => {
        let items = getAllProductsLocalStorage()
        // @ts-ignore
        setStorageItems(items)
        let allPriceNumber = allProductCount(products, items)
        setAllPrice(allPriceNumber)
    }, []);
    useEffect(() => {
        deleteItemBasket(deleteItem)
        let items = getAllProductsLocalStorage()
        // @ts-ignore
        setStorageItems(items)
        let allPriceNumber = allProductCount(products, items)
        setAllPrice(allPriceNumber)
        localeStorageItems()
    }, [deleteItem, loading]);
    return (
        <div className={"modal_basket_menu"}>
            <div className="basket_menu_content">
                <div className="basket_menu_items">
                    {loading ? <Spinner/> :
                        storageItems.map(item => {
                            return <ModalBasketMenuItem deleteItem={setDeleteItem} item={item}/>
                        })
                    }
                </div>
            </div>
            {!loading ? <div className="basket_buy_options">
                <div className={"all_price"}>
                    <span>Всього </span>
                    <span>{`${allPrice} ₴`}</span>
                </div>
                {storageItems.length == 0 ?
                    <div className={"empty_basket"}>
                        Кошик пустий
                    </div> :
                    <Link href={"/confirm_order"}>
                        <button onClick={() => {
                            modalActiveMenuActionsFalse()
                            modalActiveBasketActionsFalse()
                            confirmOrderProducts(storageItems)
                        }}>Купити
                        </button>
                    </Link>
                }
            </div>: <></>}
        </div>
    );
};

export default ModalBasketMenu;