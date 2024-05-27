import { createContext, ReactNode, useState, useEffect } from "react";
import { CategoriesContextType } from "../@types/categories";
import { Category } from "../@types/categories";
import { getCategoriesData } from "../utils/data.utils";

interface Props {
    children?: ReactNode
}

export const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesContextProvider = ({ children }: Props) => {
    const [cats, setCats] = useState<Category[] | null>(null);

    const catsHelper = async () => {
        const temp = await getCategoriesData<Category[]>("http://localhost:7198/api/Categories");
        setCats([...temp]);
    }

    return <CategoriesContext.Provider value={{ cats, catsHelper }}>{children}</CategoriesContext.Provider>
}