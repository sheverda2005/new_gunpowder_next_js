'use client'
import {FC, useState} from "react";
import {useActions} from "@/hooks/useActions";


interface ISingleProduct {
    name: string,
    img: string,
    _id: string,
    productDescription: string,
    price: string,
    productLink: string,


}

function setLocalStorage(name: string, id: string, count: number, localeStorageItems: any) {
    localStorage.setItem(name, JSON.stringify({
        id: id,
        count: count
    }))
    localeStorageItems()
}



const SingleProduct: FC<ISingleProduct> = ({
                                               productLink,
                                               productDescription,
                                               name,
                                               img,
                                               price,
                                               _id,

}) => {
    const [count, setCount ] = useState(1)
    const {modalActiveMenuActionsTrue, modalActiveBasketActionsTrue, localeStorageItems} = useActions()
    return (
        <div className={'single_product_page'}>
            <div className="container">
                <div className="single_product_content">
                    <div className="single_product_title adaptive">{name}</div>
                    <div className="single_product_main_img">
                        <img src={`https://new-gunpowder-server.vercel.app/api/getImage/${img}`}
                             alt="single product"/>
                    </div>
                    <div className="single_product_text">
                        <div className="single_product_title">
                            {name}
                        </div>
                        <div className="single_product_producer">
                            Виробник: <strong></strong>
                        </div>
                        <div className="single_product_price">
                            {price} ₴
                        </div>
                        <div className="single_product_buy_options">
                            <div className="single_product_count">
                                <div onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1)
                                    }
                                }} className="single_product_count_item minus">-
                                </div>
                                <div className="single_product_count_item">{count}</div>
                                <div onClick={() => {
                                    setCount(count + 1)
                                }} className="single_product_count_item plus">+
                                </div>
                            </div>
                            <button onClick={() => {
                                setLocalStorage(name, _id, count, localeStorageItems)
                                modalActiveMenuActionsTrue()
                                modalActiveBasketActionsTrue()
                            }}>
                                Придбати
                            </button>
                            <div className="single_product_svg_items">
                                {/*<img src="/image/heart_single_product.svg" alt="heart"/>*/}
                                {/*<img src="/image/compare_single_product.svg" alt="compare"/>*/}
                            </div>
                        </div>
                        <div className="product_description">
                            <div className="product_description_title">
                                Опис
                            </div>
                            <p>
                                {productDescription}
                            </p>
                        </div>
                        {productLink  == '' ? <></>
                            :
                            <div className="product_description">
                                <div className="product_description_title">
                                    Інструкція
                                </div>
                                <p>
                                    <a href={productLink}>Відеоінструкція</a>
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;