import { ChangeEventHandler, MouseEventHandler, useContext } from "react";
import { Link } from "react-router-dom";
import { SearchTextContext } from "../../context/searchText.context";
import { SearchFieldContextType } from "../../@types/searchField";
import { ProductsContext } from "../../context/products.context";
import { ProductContextType } from "../../@types/product";
import { ProductFilter } from "../../@types/productFilter";
import { getMainSearchData } from "../../utils/data.utils";
import { Paging } from "../../@types/product";

// type SearchBox = {
//     onChangeHandler: ChangeEventHandler<HTMLInputElement>;
//     onClickHandler: MouseEventHandler<HTMLAnchorElement>;
// };

const SearchBox = () => {
    const { mainSearchField, setMainSearchField } = useContext(SearchTextContext) as SearchFieldContextType;
    const { setProductsHelper } = useContext(ProductsContext) as ProductContextType
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMainSearchField(value);

    }
    console.log(mainSearchField);
    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement> | undefined) => {
        const filter: ProductFilter = {
            sortBy: "productName",
            ProductName: mainSearchField
        };
        //const pr = await getMainSearchData<Product[] | Paging>("https://localhost:7198/api/Search", filter);
        const pr = await getMainSearchData<Paging>("https://localhost:7198/api/Search", filter);

        setProductsHelper(pr.dtos);
        console.log(pr);
        //Burada API' a tüm kategoriler içinde search için fetch yapıcam
        //
    }
    return (
        <form className="input-group" >
            <input type="search" className="form-control" placeholder="Search for products" onChange={handleChange} />
            <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                    <Link to='/search' className="fa fa-search" onClick={handleClick} style={{ border: 0, color: "#D19C97", backgroundColor: "transparent" }}></Link>
                </span>
            </div>
        </form>
    );
}

export default SearchBox;