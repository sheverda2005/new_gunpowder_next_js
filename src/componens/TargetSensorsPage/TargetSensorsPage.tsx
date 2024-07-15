'use client'
import React, {useEffect} from 'react';
import "./targetSensors.sass"
import {useTypedSelector} from "@/hooks/useTypedSelector";
import ProductCard from "@/componens/ProductCard/ProdutcCard";

const TargetSensorsPage = () => {
    const {products} = useTypedSelector(state => state.allProducts)
    console.log(products)
    return (
        <div className={"target_sensors_page"}  >
            <div className="container">
                <div className="target_sensors_content">
                    <div className="target_sensors_titles">
                        <div className="title">Датчики цілі</div>
                    </div>
                    <div className="shop_content_items_list_target_sensors">
                        {products.map(product => {
                            if (product._id == "661d5868c274b1ab819732bb"){
                                return <></>
                            } else {
                                return  <ProductCard key={product._id} _id={product._id} img={product.img} productDescription={product.productDescription} productName={product.productName} price={product.price}/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetSensorsPage;