import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchTextProvider } from './context/searchText.context';
import { ProductsContextProvider } from './context/products.context';
import { CategoriesDropdownProvider } from './context/categories-dropdown.context'
import { CategoriesContextProvider } from './context/categories.context';
import { FilterContextProvider } from './context/filter.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchTextProvider>
        <FilterContextProvider>
          <CategoriesContextProvider>
            <CategoriesDropdownProvider>
              <ProductsContextProvider>
                <App />
              </ProductsContextProvider>
            </CategoriesDropdownProvider>
          </CategoriesContextProvider>
        </FilterContextProvider>
      </SearchTextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
