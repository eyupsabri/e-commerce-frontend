import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import { Paging, ProductContextType } from "../../@types/product";
import Products from "../../components/products/products.component";
import { getMainSearchData } from "../../utils/data.utils";

const Category = () => {
  const [searchParams] = useSearchParams();
  const temp = searchParams.get("categoryId");
  const catId = temp ? temp : "";

  const { products, setProductsHelper } = useContext(
    ProductsContext
  ) as ProductContextType;

  useEffect(() => {
    const inner = async () => {
      const deeper = await getMainSearchData<Paging>(
        "http://localhost:7198/api/Products?categoryId=" + catId
      );
      setProductsHelper(deeper.dtos);
    };
    inner();
  }, [searchParams]);

  return <Products products={products} />;
};

export default Category;
