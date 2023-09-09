import { ProductFilter } from "../@types/productFilter";


export const getMainSearchData = async <T>(url: string): Promise<T> => {

    const response = await fetch(url, { method: "GET" })
    return await response.json();
}

export const getCategoriesData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, { method: "GET" })
    return await response.json();
}

export const buildQuery = (filter: ProductFilter) => {
    let queryUrl = "";

    for (const [key, value] of Object.entries(filter)) {
        queryUrl = queryUrl + `${key}=${value}&`;
    }
    queryUrl = "?" + queryUrl.slice(0, -1);
    return queryUrl;
}