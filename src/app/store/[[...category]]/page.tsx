import { getProducts } from "app/services/shopify/products"


interface CategoryProps{
    params: {
        categories: string [],
        searchParams: string 
    }
}
export default async function Category(props: CategoryProps){

    const products = await getProducts()

    const {categories} = props.params 
    // throw new Error('Error:BOOM!')

    return(
        <h1>Categoria dinamica:{categories}</h1>
    )
}