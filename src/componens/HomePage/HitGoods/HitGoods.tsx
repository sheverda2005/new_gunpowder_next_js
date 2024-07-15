'use client'
import "./hitgoods.sass"
import {useTypedSelector} from "@/hooks/useTypedSelector";
import Spinner from "../../Spinner/Spinner";
import ProductCard from "@/componens/ProductCard/ProdutcCard";


const HitGoods = () => {
    const {products, loading} = useTypedSelector(state => state.allProducts)
    return (
        <section className={"hit_goods"} >
            <h2 className={"section_title"} >
                Хіт товарів
            </h2>
            <div className="container">
                <div className="hit_goods_items">
                    {loading ? <Spinner/> : products.map(product => {
                        return <ProductCard _id={product._id} img={product.img} productName={product.productName} price={product.price} productDescription={product.productDescription}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default HitGoods;