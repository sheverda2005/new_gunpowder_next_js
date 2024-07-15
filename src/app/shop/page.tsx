import "./shop.sass"
import {Metadata} from "next";
import ProductCard from "@/componens/ProductCard/ProdutcCard";
import ShopPageContent from "@/componens/ShopPage/ShopPageContent";


export const metadata: Metadata = {
    title: "Каталог товарів",
    description: "Каталог товарів для військових, РЕБ індивідульний, Електронна розтяжка,  Ініціатор поверхневого підриву, Ініціатор підриву за зміною магнітного поля",
    keywords: "РЕБ, РЕБ індивідульний, РЕБ купити, Електронна розтяжка, Елетронна розтяжка купити, Індикатор поверхневого підриву, Індикатор поверхневого підриву купити, Ініціатор підриву за зміною магнітного поля купити",
}

const ShopPage = async () => {
    return (
        <ShopPageContent/>
    );
};

export default ShopPage;