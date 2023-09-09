import { createContext, useState, ReactNode } from "react";
import { FilterContextType } from "../@types/searchField";

export const FilterContext = createContext<FilterContextType | null>(null);


interface Props {
    children?: ReactNode
}

export const FilterContextProvider = ({ children }: Props) => {
    const [queryFilter, setFilter] = useState("");

    const queryFilterHelper = (url: string) => {
        setFilter(url);
    }

    return (<FilterContext.Provider value={{ queryFilter, queryFilterHelper }}>{children}</FilterContext.Provider>)
}