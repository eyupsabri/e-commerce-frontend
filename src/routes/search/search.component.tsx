import Products from "../../components/products/products.component"
import { useContext } from "react"
import { ProductsContext } from "../../context/products.context"
import { ProductContextType } from "../../@types/product"

const Search = () => {
    const { products } = useContext(ProductsContext) as ProductContextType
    return <Products products={products} />
}

export default Search;