import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../context/categories.context";
import { CategoriesContextType } from "../../@types/categories";


const Home = () => {
    const { cats } = useContext(CategoriesContext) as CategoriesContextType;
    return (
        <Fragment>
            {/* <!-- Featured End-- >
            < !--Categories Start Buraya kafana göre 6 kategoriyi koy for loop içinde-- > */}
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



            {/* <!--Subscribe End-- >
< !--Products Start-- >

< !--Products End-- >
< !--Vendor Start-- > */}
            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-1.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-2.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-3.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-4.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-5.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-6.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-7.jpg" alt="" />
                            </div>
                            <div className="vendor-item border p-4">
                                <img src="assets/img/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Vendor End-- >
< !--Footer Start-- > */}
        </Fragment >
    );
}

export default Home