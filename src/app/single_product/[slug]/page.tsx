import {IProduct} from "@/types/getAllProducts";
import "./single_product.sass"
import SingleProduct from "@/componens/SingleProduct/SingleProduct";
import {Metadata} from "next";





export async function generateMetadata ({params}): Promise<Metadata> {
    const res = await fetch(`https://new-gunpowder-server.vercel.app/api/getOneProduct?product=${params?.slug}`)
    const data: IProduct = await res.json()
    return {
        title: data.productName,
        description: data.productDescription,
        openGraph: {
            title: data.productName,
            description: data.productDescription,
            type: "article",
            locale: "uk_UA",
            url: `https://novyi-poroh.com/single_product/${params?.slug}`,
            siteName: "Новий порох",
            images: [
                {
                    url: data.img
                }
            ]
        }
    }
}



export const productData = async (id_product) => {
    const res = await fetch(`https://new-gunpowder-server.vercel.app/api/getOneProduct?product=${id_product}`, {
        cache: "force-cache",
        next: {
            revalidate: 500
        }
    })
    const data = await res.json()
    return data;
}

const Page = async ({params}) => {
    const product: IProduct = await productData(params?.slug);
    return (
            <SingleProduct
                name={product.productName}
                img={product.img}
                _id={product._id}
                productDescription={product.productDescription}
                price={product.price}
                productLink={product.productLink}
            />
        );
};

export default Page;