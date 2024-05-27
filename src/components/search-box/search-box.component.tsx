import { ChangeEventHandler, MouseEventHandler, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTextContext } from "../../context/searchText.context";
import { FilterContextType, SearchFieldContextType } from "../../@types/searchField";

import { ProductFilter } from "../../@types/productFilter";

import { FilterContext } from "../../context/filter.context";
import { buildQuery } from "../../utils/data.utils";

// type SearchBox = {
//     onChangeHandler: ChangeEventHandler<HTMLInputElement>;
//     onClickHandler: MouseEventHandler<HTMLAnchorElement>;
// };

const SearchBox = () => {
    const { mainSearchField, setMainSearchField } = useContext(SearchTextContext) as SearchFieldContextType;
    const { queryFilterHelper } = useContext(FilterContext) as FilterContextType
    const navigate = useNavigate();



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMainSearchField(value);

    }
    console.log(mainSearchField);

    const handleClick = async () => {
        const filter: ProductFilter = {
            sortBy: "productName",
            ProductName: mainSearchField
        };
        const query = buildQuery(filter);
        queryFilterHelper(query);
        //const pr = await getMainSearchData<Product[] | Paging>("http://localhost:7198/api/Search", filter);



        //console.log("search" + query);
        navigate("search" + query);
        //Burada API' a tüm kategoriler içinde search için fetch yapıcam
        //
    }
    return (
        <div className="input-group" >
            <input type="search" className="form-control" placeholder="Search for products" onChange={handleChange} value={mainSearchField} />
            <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                    <button className="fa fa-search" onClick={handleClick} style={{ border: 0, color: "#D19C97", backgroundColor: "transparent" }}></button>
                </span>
            </div>
        </div>
    );
}

export default SearchBox;