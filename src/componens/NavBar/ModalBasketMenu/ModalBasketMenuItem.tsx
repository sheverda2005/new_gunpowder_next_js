import React, {FC} from 'react';
import "./modalBasketMenuItem.sass"
import {useTypedSelector} from "@/hooks/useTypedSelector";

interface IMenuItem {
    item: any,
    deleteItem: any
}

const ModalBasketMenuItem: FC<IMenuItem> = ({item, deleteItem}) => {
    const {products} = useTypedSelector(state => state.allProducts)
    let ourProducts: any = {}
    products.forEach(product => {
        if (product._id == item.value.id) {
            ourProducts = {
                product: product,
                count: item.value.count
            }
        }
    })
    return (
        <div className={"modal_basket_menu_item"} >
            <div className="modal_basket_menu_item_content">
                <img src={`https://new-gunpowder-server.vercel.app/api/getImage/${ourProducts.product.img}`} alt=""/>
                <div className="modal_basket_menu_item_content_info">
                    <p>{ourProducts.product.productName}</p>
                    <div className="price_count">
                        <div className="price">{ourProducts.product.price} ₴</div>
                        <div className="count">
                            <span>Кількість:</span>
                            <span>{ourProducts.count}</span>
                        </div>
                    </div>
                    <div onClick={() => {
                        deleteItem(ourProducts.product._id)
                    }} className={"basket_delete"}>Видалити</div>
                </div>
            </div>
        </div>
    );
};

export default ModalBasketMenuItem;