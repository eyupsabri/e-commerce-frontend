import { ChangeEventHandler, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type SearchBox = {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    onClickHandler: MouseEventHandler<HTMLAnchorElement>;
};

const SearchBox = ({ onChangeHandler, onClickHandler }: SearchBox) => {
    return (
        <form className="input-group" >
            <input type="search" className="form-control" placeholder="Search for products" onChange={onChangeHandler} />
            <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                    <Link to='/search' className="fa fa-search" onClick={onClickHandler} style={{ border: 0, color: "#D19C97", backgroundColor: "transparent" }}></Link>
                </span>
            </div>
        </form>
    );
}

export default SearchBox;