// export interface ISearchField {
//     mainSearchField: string
// }

export type SearchFieldContextType = {
    mainSearchField: string;
    setMainSearchField: (mainSearchField: string) => void
}

export type FilterContextType = {
    queryFilter: string;
    queryFilterHelper: (url: string) => void;
}