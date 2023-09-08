import { ProductFilter } from "../@types/productFilter";

export const getMainSearchData = async <T>(url: string, filter: ProductFilter): Promise<T> => {
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(filter) })
    return await response.json();
}

export const getCategoriesData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } })
    return await response.json();
}