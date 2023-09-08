import { createContext, useState, ReactNode } from "react";
import { CategoriesDropdownContextType } from "../@types/categories";


interface Props {
    children?: ReactNode
    // any props that come into the component
}

export const CategoriesDropdownContext = createContext<CategoriesDropdownContextType | null>(null);

export const CategoriesDropdownProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const isOpenHelper = (prev: boolean) => {
        setIsOpen(!prev);
    }

    return (
        <CategoriesDropdownContext.Provider value={{ isOpen, isOpenHelper }}>
            {children}
        </CategoriesDropdownContext.Provider>
    );
}