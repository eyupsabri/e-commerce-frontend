import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Category from "./routes/category/category.component";
import "./App.css";

import Search from "./routes/search/search.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="category" element={<Category />} />
        {/* <Route path='shop' element={<Shop />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
