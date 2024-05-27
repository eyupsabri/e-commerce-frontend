
import { Paging, Product } from "../../@types/product";

type Props = {
    products: Product[] | null;
}

const Products = (Props: Props) => {
    const { products } = Props;
    return (
        <div>
            <div className="container-fluid bg-secondary mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href="/home">Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-12">
                        {/* <!-- Price Start --> */}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                            {/* @*<form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="price-all">
                                    <label className="custom-control-label" htmlFor="price-all">All Price</label>
                                    <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-1">
                                    <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                                    <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-2">
                                    <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                                    <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-3">
                                    <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                                    <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-4">
                                    <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                                    <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="price-5">
                                    <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                                    <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>*@ */}

                            <form className="filter-products">
                                {/* @*<form data-ajax-update="#productContainer_@Model.ProductId" data-ajax="true" data-ajax-confirm="Emin misin?" asp-controller="Products" asp-action="UpdateProduct">*@ */}

                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input price-filter" id="price-1" name="Price1" value="@PriceEnums.PriceOptions.Price1" />
                                    <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input price-filter" id="price-2" name="Price2" value="@PriceEnums.PriceOptions.Price2" />
                                    <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input price-filter" id="price-3" name="Price3" value="@PriceEnums.PriceOptions.Price3" />
                                    <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input price-filter" id="price-4" name="Price4" value="@PriceEnums.PriceOptions.Price4" />
                                    <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input price-filter" id="price-5" name="Price5" value="@PriceEnums.PriceOptions.Price5" />
                                    <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>

                            </form>





                        </div>
                        {/* <!-- Price End --> */}
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="col-12 pb-1">

                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <form className="filter-products">
                                    {/* @Html.Hidden("sortBy", "productPrice") */}
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="ProductName" placeholder="Search by name" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-transparent text-primary">
                                                <button className="fa fa-search" type="submit" style={{ border: 0, color: "#D19C97", backgroundColor: "transparent" }}></button>
                                            </span>
                                        </div>
                                    </div>


                                    <div className="dropdown ml-4">


                                        <select name="sortAsc" className="form-select form-select-sm sortByPrice" aria-label=".form-select-sm example">

                                            <option value="1" selected>Fiyata Göre Sırala</option>
                                            <option value="true">Önce En Düşük</option>
                                            <option value="false">Önce En Yüksek</option>
                                        </select>



                                        {/* @*<button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Sort by
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                        <a className="dropdown-item" href="#">Önce en düşük</a>
                                        <a className="dropdown-item" href="#">Önce en yüksek</a>
                                        <a className="dropdown-item" href="#">Best Rating</a>
                                    </div>*@ */}

                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="row pb00-3" id="ProductsPageContainer">

                            {products?.map(pr => (
                                <div key={pr.ProductId} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                    <div className="card product-item border-0 mb-4">
                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                            <img className="img-fluid w-100" src={`http://localhost:7198/assets/products/${pr.ImageGuid}.jpg`} alt="" />
                                        </div>
                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                            <h6 className="text-truncate mb-3">{pr.ProductName}</h6>
                                            <div className="d-flex justify-content-center">
                                                <h6>{pr.ProductPrice}</h6><h6 className="text-muted ml-2"><del>${pr.ProductPrice + 1}</del></h6>
                                            </div>
                                            <p className="text-truncate mb-3">{pr.ProductDescription}</p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                            <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                            <a href="~/Cards/AddToCard/@product.ProductId" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Products;