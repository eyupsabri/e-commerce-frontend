export type CategoriesDropdownContextType = {
    isOpen: boolean;
    isOpenHelper: (prev: boolean) => void;
}

export type Category = {
    CategoryId: int;
    CategoryName: string;
    ProductsCount: int;
    ImageGuid: string;
}

export type CategoriesContextType = {
    cats: Category[] | null;
    catsHelper: () => void;
}

