import Products from "../../components/products/products.component"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../../context/products.context"
import { ProductContextType } from "../../@types/product"
import { useSearchParams } from "react-router-dom"
import { getMainSearchData } from "../../utils/data.utils"
import { Paging } from "../../@types/product"
import { SearchTextContext } from "../../context/searchText.context"
import { SearchFieldContextType } from "../../@types/searchField"


const Search = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.toString();
    const { products, setProductsHelper } = useContext(ProductsContext) as ProductContextType
    const { setMainSearchField } = useContext(SearchTextContext) as SearchFieldContextType

    useEffect(() => {
        const inner = async () => {
            const response = await getMainSearchData<Paging>("https://localhost:7198/api/Search?" + query);
            setProductsHelper(response.dtos);
        };
        const temp = searchParams.get("ProductName");
        const search = temp ? temp : "";
        setMainSearchField(search);

        inner();
        console.log("bir");
    }, []);


    return <Products products={products} />
}

export default Search;