import { useContext } from "react"
import { CategoriesContext } from "../../context/categories.context";
import { CategoriesContextType } from "../../@types/categories";


const Home = () => {
    const { cats } = useContext(CategoriesContext) as CategoriesContextType;
    return (

        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {cats?.map(c => (
                    <div key={c.CategoryId} className="col-lg-4 col-md-6 pb-1">
                        <div className="cat-item d-flex flex-column border mb-4" style={{ padding: "30px" }}>
                            <p className="text-right">{c.ProductsCount} Products</p>
                            <span className="cat-img position-relative overflow-hidden mb-3" >
                                <img className="img-fluid" src={`https://localhost:7198/assets/category-img/${c.ImageGuid}.jpg`} alt="" />
                            </span>
                            <h5 className="font-weight-semi-bold m-0">{c.CategoryName}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Home