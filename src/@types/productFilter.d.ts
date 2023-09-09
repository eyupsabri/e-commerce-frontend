export type ProductFilter = {
    sortBy: "productName" | "productPrice";
    sortAsc?: boolean;
    ProductName?: string;
    ProductPrice?: double;
    CategoryName?: string;
    CategoryId?: int;
    Price1?: boolean;
    Price2?: boolean;
    Price3?: boolean;
    Price4?: boolean;
    Price5?: boolean;
    pageIndex?: int;
}

