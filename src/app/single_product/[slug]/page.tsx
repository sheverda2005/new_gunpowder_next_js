'use client'
import {useParams, usePathname} from "next/navigation";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import {IProduct} from "@/types/getAllProducts";
import {useState} from "react";
import "./single_product.sass"
import SingleProduct from "@/componens/SingleProduct/SingleProduct";


function setLocalStorage(name: string, id: string, count: number, localeStorageItems: any) {
    localStorage.setItem(name, JSON.stringify({
        id: id,
        count: count
    }))
    localeStorageItems()
}

const Page = () => {
    const [count, setCount ] = useState(1)
    const {slug} = useParams()
    const {products} = useTypedSelector(state => state.allProducts)
    const {modalActiveMenuActionsTrue, modalActiveBasketActionsTrue, localeStorageItems} = useActions()
    let product: IProduct[] = []
    if (products.length !== 0) {
        product = products.filter(item => {
            if (item._id == slug) return item
        })
    }
    if (products.length == 0) {
        return (
            <div></div>
        );
    } else {
        return (
          <SingleProduct
              name={product[0].productName}
              img={product[0].img}
              _id={product[0]._id}
              productDescription={product[0].productDescription}
              price={product[0].price}
              productLink={product[0].productLink}
              count={count}
              setCount={setCount}
              setLocalStorage={setLocalStorage}
              localeStorageItems={localeStorageItems}
              modalActiveBasketActionsTrue={modalActiveBasketActionsTrue}
              modalActiveMenuActionsTrue={modalActiveMenuActionsTrue}
          />
        );
    }
};

export default Page;