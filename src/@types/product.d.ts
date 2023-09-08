export type Product = {
    ProductId: int;
    ProductName: string;
    ProductPrice: double;
    ProductDescription: string;
    CategoryId: int;
    CategoryName: string;
    ImageGuid: string;
}


export type ProductContextType = {
    products: Product[] | null;
    setProductsHelper: (products: Product[] | null) => void;
}

export type Paging = {
    dtos: Product[] | null;
    PageIndex: int;
    PageCount: int;
}

