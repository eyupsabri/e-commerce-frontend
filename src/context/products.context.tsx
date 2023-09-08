import { createContext, useState, ReactNode } from "react";
import { Product, ProductContextType } from "../@types/product";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export const ProductsContext = createContext<ProductContextType | null>(null);

export const ProductsContextProvider = ({ children }: Props) => {

    const [products, setProducts] = useState<Product[] | null>(null);
    const setProductsHelper = (products: Product[] | null) => {
        setProducts(products);
    }

    return (
        <ProductsContext.Provider value={{ products, setProductsHelper }}>
            {children}
        </ProductsContext.Provider>
    );
}