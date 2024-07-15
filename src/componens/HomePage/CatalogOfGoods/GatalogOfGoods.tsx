import React from 'react';
import "./catalog_of_goods.sass"
import Spinner from "../../Spinner/Spinner";
import ProductCard from "@/componens/ProductCard/ProdutcCard";
import {IProduct} from "@/types/getAllProducts";


export const fetchData = async () => {
    const res = await fetch("https://new-gunpowder-server.vercel.app/api/getAllProducts", {
        cache: "force-cache",
        next: {
            revalidate: 500
        }
    })
    const data = await res.json()
    return data;
}

const CatalogOfGoods = async () => {
    const products: IProduct[] = await fetchData()
    return (
        <section className={"catalog_of_goods"} >
            <h2 className={"section_title"} >
                Каталог товарів
            </h2>
            <div className="container">
                <div className="calalog_list_of_goods">
                    {
                        products.map(product => {
                            return <ProductCard key={product._id} _id={product._id} img={product.img} productDescription={product.productDescription} productName={product.productName} price={product.price}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default CatalogOfGoods;