import { createContext, useState, ReactNode } from "react";
import { SearchFieldContextType } from "../@types/searchField";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export const SearchTextContext = createContext<SearchFieldContextType | null>(null);

export const SearchTextProvider = ({ children }: Props) => {
    const [mainSearchField, setSearchField] = useState<string>("");
    const setMainSearchField = (field: string) => {
        setSearchField(field);
    }

    return (
        <SearchTextContext.Provider value={{ mainSearchField, setMainSearchField }}>
            {children}
        </SearchTextContext.Provider>
    );
}

