import { MetadataRoute } from 'next'
import {IProduct} from "@/types/getAllProducts";
import {productData} from "@/componens/ShopPage/ShopPageContent";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const productData = async () => {
        const res = await fetch("https://new-gunpowder-server.vercel.app/api/getAllProducts", {
            cache: "force-cache",
            next: {
                revalidate: 500
            }
        })
        const data = await res.json()
        return data;
    }

    const products: IProduct[] = await productData()

    const productsUrls = products.map(product => ({
        url: `https://novyi-poroh.com/single_product/${product._id}`,
        lastModified: new Date(),
    }))


    return [
        {
            url: 'https://novyi-poroh.com/',
            lastModified: new Date(),
        },
        {
            url: 'https://novyi-poroh.com/shop',
            lastModified: new Date(),
        },
        {
            url: 'https://novyi-poroh.com/about_us',
            lastModified: new Date(),
        },
        {
            url: 'https://novyi-poroh.com/shop/delivery_payment',
            lastModified: new Date(),
        },
        {
            url: 'https://novyi-poroh.com/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://novyi-poroh.com/target_sensors',
            lastModified: new Date(),
        },
        {
            url: 'https://novyi-poroh.com/confirm_order',
            lastModified: new Date(),
        },
        ...productsUrls
    ]
}