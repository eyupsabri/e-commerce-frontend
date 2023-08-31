import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">

                            <span className="text-dark" href="">FAQs</span>
                            <span className="text-muted px-2">|</span>
                            <span className="text-dark" href="">Help</span>
                            <span className="text-muted px-2">|</span>
                            <span className="text-dark" href="">Support</span>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <span className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </span>
                            <span className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </span>
                            <span className="text-dark px-2" href="">
                                <i className="fab fa-instagram"></i>
                            </span>
                            <span className="text-dark pl-2" href="">
                                <i className="fab fa-youtube"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">

                    {/* Logoya basınca ana sayfaya gidecek */}
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link to="/" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-6 text-left">

                        {/* Burası tüm kategorilerde arama yapıyor */}
                        <form className="input-group" >
                            <input type="text" className="form-control" placeholder="Search for products" name="ProductName" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <button className="fa fa-search" type="submit" style={{ border: 0, color: "#D19C97", backgroundColor: "transparent" }}></button>
                                </span>
                            </div>
                        </form>

                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        {/* işlevsiz yan tarafta duran kalp */}
                        <span href="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge">0</span>
                        </span>

                        {/* burası Sepet sayfasına gidecek, sepetteki item sayısı */}
                        <Link to="Cards" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span id="card_quantity" className="badge">0</span>
                        </Link>


                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row border-top px-xl-5">

                    {/* Categories dropdown burayı react ile toggle yapacağım */}
                    {/* <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style="height: 65px; margin-top: -1px; padding: 0 30px;">
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 1;">
                        <div className="navbar-nav w-100 overflow-hidden">
    
    
                            @foreach (CategoryResponse cat in ViewBag.categories)
                            {
                                <a href="~/Products/Index?CategoryId=@cat.CategoryId" className="nav-item nav-link">@cat.CategoryName</a>
                            }
    
    
                        </div>
                    </nav>
                </div> */}

                    {/* yan kısımdaki home shop shop detail vs linkleri. Eger Sayfa Ufalırsa dropdown a donusuo*/}
                    {/* <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <span href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </span>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <a href="~/home" className="nav-item nav-link">Home</a>
                                <a href="shop.html" className="nav-item nav-link active">Shop</a>
                                <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <a href="" className="nav-item nav-link">Login</a>
                                <a href="" className="nav-item nav-link">Register</a>
                            </div>
                        </div>
                    </nav>
                </div> */}

                </div>
            </div>


            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: "30px" }}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />

            <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <span href="" className="text-decoration-none">
                            <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Shopper</h1>
                        </span>
                        <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                        <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Home</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Our Shop</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Shop Detail</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Shopping Cart</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Checkout</span>
                                    <span className="text-dark" ><i className="fa fa-angle-right mr-2"></i>Contact Us</span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Home</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Our Shop</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Shop Detail</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Shopping Cart</span>
                                    <span className="text-dark mb-2" ><i className="fa fa-angle-right mr-2"></i>Checkout</span>
                                    <span className="text-dark" ><i className="fa fa-angle-right mr-2"></i>Contact Us</span>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                                {/* Burayla elleşmiom */}
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                            required="required" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top border-light mx-xl-5 py-4">
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-dark">
                            &copy; <span className="text-dark font-weight-semi-bold" href="#">Your Site Name</span>. All Rights Reserved. Designed
                            by
                            <span className="text-dark font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</span>
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <img className="img-fluid" src="img/payments.png" alt="" />
                    </div>
                </div>
            </div>

            <span href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></span>


            {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script> */}

            {/* bu ikisi ne bilmiom sanki sayfayı yukarı çıkartan button */}
            {/* <script src="~/assets/lib/easing/easing.min.js"></script>
    
        <script src="~/assets/js/main.js"></script> */}

        </Fragment>
    );
}

export default Navigation