import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoriesDropdownContext } from "../../context/categories-dropdown.context";
import { CategoriesDropdownContextType } from "../../@types/categories";
import { getCategoriesData } from "../../utils/data.utils";
import { Category } from "../../@types/categories";
import { CategoriesContext } from "../../context/categories.context";
import { CategoriesContextType } from "../../@types/categories";

const CategoriesDropdown = () => {
  const { isOpen, isOpenHelper } = useContext(CategoriesDropdownContext) as CategoriesDropdownContextType;
  const onClickHandler = () => {
    isOpenHelper(isOpen);
  };
  const { cats, catsHelper } = useContext(
    CategoriesContext
  ) as CategoriesContextType;

  useEffect(() => {
    const innerFunc = async () => {
      await catsHelper();
    };
    innerFunc();
  }, []);

  console.log(cats);
  return (
    <div className="col-lg-3 d-none d-lg-block">
      <button
        onClick={onClickHandler}
        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
      >
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
      </button>
      {isOpen ? (
        <nav
          className="show collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
          id="navbar-vertical"
          style={{ width: "calc(100% - 30px)", zIndex: 1 }}
        >
          <div className="navbar-nav w-100 overflow-hidden">
            {cats?.map((c) => (
              <Link
                to={"/category?categoryId=" + c.CategoryId}
                key={c.CategoryId}
                className="nav-item nav-link"
              >
                {c.CategoryName}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default CategoriesDropdown;
