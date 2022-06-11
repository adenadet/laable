<template>
<header id="header" class="header header-main d-flex align-items-center header-2">
    <div class="container">        
        <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 align-self-center justify-content-start d-flex">
                <button type="button" class="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open me-3 d-lg-none"><i class="icon fa fa-times"></i><i class="icon fa fa-bars"></i></button>
                <div class="logo"><router-link to="/"><img class="logo-img mh-100" src="/assets/images/logo-demo2.png" alt="Optimal Multipurpose eCommerce Bootstrap 5 Html Template" title="La Able Fashion " width="140" /><span class="logo-txt d-none">La Able Fashion</span></router-link></div>
            </div>
            <div class="col-1 col-sm-1 col-md-1 col-lg-6 align-self-center d-menu-col">
                <div class="row">
                    <div class="col-1 col-sm-12 col-md-12 col-lg-12 align-self-center d-menu-col">
                        <nav class="grid__item" id="AccessibleNav">
                            <ul id="siteNav" class="site-nav medium center hidearrow">
                                <li class="lvl1"><router-link to="/">Home </router-link></li>
                                <li class="lvl1 parent megamenu"><a href="#;">Men <i class="an an-angle-down-l"></i></a>
                                    <div class="megamenu style4">
                                        <div class="row">
                                            {{men_categories}}
                                            <div class="lvl-1 col-md-3 col-lg-3" v-for="men in men_categories" :key="men.id">
                                                <router-link :to="'/shop/category/'+men.id" class="site-nav lvl-1 menu-title">{{men.title}}</router-link>
                                                <ul class="subLinks">
                                                    <li v-for="sub in men.subs" :key="sub.id" class="lvl-2"><a href="category-2columns.html" class="site-nav lvl-2">{{sub.title}}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="lvl1 parent megamenu"><a href="#;">Men <i class="an an-angle-down-l"></i></a>
                                    <div class="megamenu style4">
                                        <div class="row">
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Category Page</a>
                                                <ul class="subLinks">
                                                    <li class="lvl-2"><a href="category-2columns.html" class="site-nav lvl-2">2 Columns with style1</a></li>
                                                    <li class="lvl-2"><a href="category-3columns.html" class="site-nav lvl-2">3 Columns with style2</a></li>
                                                    <li class="lvl-2"><a href="category-4columns.html" class="site-nav lvl-2">4 Columns with style3</a></li>
                                                    <li class="lvl-2"><a href="category-5columns.html" class="site-nav lvl-2">5 Columns with style4</a></li>
                                                    <li class="lvl-2"><a href="category-6columns.html" class="site-nav lvl-2">6 Columns with Fullwidth</a></li>
                                                    <li class="lvl-2"><a href="category-7columns.html" class="site-nav lvl-2">7 Columns</a></li>
                                                    <li class="lvl-2"><a href="empty-category.html" class="site-nav lvl-2">Category Empty</a></li>
                                                </ul>
                                            </div>
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Shop Page</a>
                                                <ul class="subLinks">
                                                    <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Left Sidebar</a></li>
                                                    <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav lvl-2">Right Sidebar</a></li>
                                                    <li class="lvl-2"><a href="shop-top-filter.html" class="site-nav lvl-2">Top Filter</a></li>
                                                    <li class="lvl-2"><a href="shop-fullwidth.html" class="site-nav lvl-2">Fullwidth</a></li>
                                                    <li class="lvl-2"><a href="shop-no-sidebar.html" class="site-nav lvl-2">Without Filter</a></li>
                                                    <li class="lvl-2"><a href="shop-listview-sidebar.html" class="site-nav lvl-2">List View</a></li>
                                                    <li class="lvl-2"><a href="shop-listview-drawer.html" class="site-nav lvl-2">List View Drawer</a></li>
                                                    <li class="lvl-2"><a href="shop-category-slideshow.html" class="site-nav lvl-2">Category Slideshow</a></li>
                                                    <li class="lvl-2"><a href="shop-heading-with-banner.html" class="site-nav lvl-2">Headings With Banner</a></li>
                                                </ul>
                                            </div>
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Shop Page</a>
                                                <ul class="subLinks">
                                                    <li class="lvl-2"><a href="shop-sub-collections.html" class="site-nav lvl-2">Sub Collection List <span class="lbl nm_label5">Hot</span></a></li>
                                                    <li class="lvl-2"><a href="shop-masonry-grid.html" class="site-nav lvl-2">Shop Masonry Grid</a></li>
                                                    <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav lvl-2">Shop Countdown</a></li>
                                                    <li class="lvl-2"><a href="shop-hover-info.html" class="site-nav lvl-2">Shop Hover Info</a></li>
                                                    <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav lvl-2">Infinite Scrolling</a></li>
                                                    <li class="lvl-2"><a href="shop-fullwidth.html" class="site-nav lvl-2">Classic Pagination</a></li>
                                                    <li class="lvl-2"><a href="shop-swatches-style.html" class="site-nav lvl-2">Swatches Style</a></li>
                                                    <li class="lvl-2"><a href="shop-grid-style.html" class="site-nav lvl-2">Grid Style</a></li>
                                                    <li class="lvl-2"><a href="shop-search-results.html" class="site-nav lvl-2">Search Results</a></li>
                                                </ul>
                                            </div>
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Shop Other Page</a>
                                                <ul class="subLinks">
                                                    <li class="lvl-2"><a href="my-wishlist.html" class="site-nav lvl-2">My Wishlist Style1</a></li>
                                                    <li class="lvl-2"><a href="my-wishlist-style2.html" class="site-nav lvl-2">My Wishlist Style2</a></li>
                                                    <li class="lvl-2"><a href="compare-style1.html" class="site-nav lvl-2">Compare Page Style1</a></li>
                                                    <li class="lvl-2"><a href="compare-style2.html" class="site-nav lvl-2">Compare Page Style2</a></li>
                                                    <li class="lvl-2"><a href="cart-style1.html" class="site-nav lvl-2">Cart Page Style1</a></li>
                                                    <li class="lvl-2"><a href="cart-style2.html" class="site-nav lvl-2">Cart Page Style2</a></li>
                                                    <li class="lvl-2"><a href="checkout-style1.html" class="site-nav lvl-2">Checkout Page Style1</a></li>
                                                    <li class="lvl-2"><a href="checkout-style2.html" class="site-nav lvl-2">Checkout Page Style2</a></li>
                                                    <li class="lvl-2"><a href="checkout-success.html" class="site-nav lvl-2">Checkout Success</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row clear mt-4">
                                            <div class="col-md-3 col-lg-3">
                                                <a href="shop-left-sidebar.html"><img src="/assets/images/megamenu/megamenu-banner4-1.jpg" data-src="/assets/images/megamenu/megamenu-banner4-1.jpg" alt="image"/></a>
                                            </div>
                                            <div class="col-md-3 col-lg-3">
                                                <a href="shop-left-sidebar.html"><img src="/assets/images/megamenu/megamenu-banner4-2.jpg" data-src="/assets/images/megamenu/megamenu-banner4-2.jpg" alt="image"/></a>
                                            </div>
                                            <div class="col-md-3 col-lg-3">
                                                <a href="shop-left-sidebar.html"><img src="/assets/images/megamenu/megamenu-banner4-3.jpg" data-src="/assets/images/megamenu/megamenu-banner4-3.jpg" alt="image"/></a>
                                            </div>
                                            <div class="col-md-3 col-lg-3">
                                                <a href="shop-left-sidebar.html"><img src="/assets/images/megamenu/megamenu-banner4-4.jpg" data-src="/assets/images/megamenu/megamenu-banner4-4.jpg" alt="image"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="lvl1 parent megamenu"><a href="#;">Product <i class="an an-angle-down-l"></i></a>
                                    <div class="megamenu style2">
                                        <div class="row">
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Product Types</a>
                                                <ul class="subLinks">
                                                    <li class="lvl-2"><a href="product-standard.html" class="site-nav lvl-2">Simple Product</a></li>
                                                    <li class="lvl-2"><a href="product-variable.html" class="site-nav lvl-2">Variable Product</a></li>
                                                    <li class="lvl-2"><a href="product-grouped.html" class="site-nav lvl-2">Grouped Product</a></li>
                                                    <li class="lvl-2"><a href="product-external-affiliate.html" class="site-nav lvl-2">External / Affiliate Product</a></li>
                                                    <li class="lvl-2"><a href="product-outofstock.html" class="site-nav lvl-2">Out Of Stock Product</a></li>
                                                    <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">New Product</a></li>
                                                    <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Sale Product</a></li>
                                                    <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Variable Image</a></li>
                                                    <li class="lvl-2"><a href="product-accordian.html" class="site-nav lvl-2">Variable Select</a></li>
                                                    <li class="lvl-2"><a href="prodcut-360-degree-view.html" class="site-nav lvl-2">360 Degree view</a></li>
                                                </ul>
                                            </div>
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Product Page</a>
                                                <ul class="subLinks">
                                                    <li class="lvl-2"><a href="product-layout1.html" class="site-nav lvl-2">Product Layout1</a></li>
                                                    <li class="lvl-2"><a href="product-layout2.html" class="site-nav lvl-2">Product Layout2</a></li>
                                                    <li class="lvl-2"><a href="product-layout3.html" class="site-nav lvl-2">Product Layout3</a></li>
                                                    <li class="lvl-2"><a href="product-layout4.html" class="site-nav lvl-2">Product Layout4</a></li>
                                                    <li class="lvl-2"><a href="product-layout5.html" class="site-nav lvl-2">Product Layout5</a></li>
                                                    <li class="lvl-2"><a href="product-layout6.html" class="site-nav lvl-2">Product Layout6</a></li>
                                                    <li class="lvl-2"><a href="product-layout7.html" class="site-nav lvl-2">Product Layout7</a></li>
                                                    <li class="lvl-2"><a href="product-accordian.html" class="site-nav lvl-2">Product Accordian</a></li>
                                                    <li class="lvl-2"><a href="product-tabs-left.html" class="site-nav lvl-2">Product Tabs Left</a></li>
                                                    <li class="lvl-2"><a href="product-tabs-center.html" class="site-nav lvl-2">Product Tabs Center</a></li>
                                                </ul>
                                            </div>
                                            <div class="lvl-1 col-md-3 col-lg-3"><a href="#" class="site-nav lvl-1 menu-title">Top Brands</a>
                                                <div class="menu-brand-logo">
                                                    <a href="brands-style2.html"><img src="/assets/images/logo/brandlogo1.png" alt="image"/></a>
                                                    <a href="brands-style2.html"><img src="/assets/images/logo/brandlogo2.png" alt="image"/></a>
                                                    <a href="brands-style2.html"><img src="/assets/images/logo/brandlogo3.png" alt="image"/></a>
                                                </div>
                                                <div class="menu-brand-logo">
                                                    <a href="brands-style2.html"><img src="/assets/images/logo/brandlogo4.png" alt="image"/></a>
                                                    <a href="brands-style2.html"><img src="/assets/images/logo/brandlogo5.png" alt="image"/></a>
                                                    <a href="brands-style2.html"><img src="/assets/images/logo/brandlogo6.png" alt="image"/></a>
                                                </div>
                                            </div>
                                            <div class="lvl-1 col-md-3 col-lg-3 p-0">
                                                <a href="shop-left-sidebar.html"><img src="/assets/images/megamenu/megamenu-banner3.jpg" alt="image"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="lvl1 parent dropdown"><a href="#;">Vendor <i class="an an-angle-down-l"></i><span class="navLbl new">New</span></a>
                                    <ul class="dropdown">
                                        <li><a href="vendor-dashboard.html" class="site-nav">Vendor Dashboard</a></li>
                                        <li><a href="vendor-profile.html" class="site-nav">Vendor Profile</a></li>
                                        <li><a href="vendor-uploads.html" class="site-nav">Vendor Uploads</a></li>
                                        <li><a href="vendor-tracking.html" class="site-nav">Vendor Tracking</a></li>
                                        <li><a href="vendor-service.html" class="site-nav">Vendor Service</a></li>
                                        <li><a href="vendor-settings.html" class="site-nav last">Vendor Settings</a></li>
                                    </ul>
                                </li>
                                <li class="lvl1 parent dropdown"><a href="#;">Pages <i class="an an-angle-down-l"></i></a>
                                    <ul class="dropdown">
                                        <li><a href="aboutus-style1.html" class="site-nav">About Us <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="aboutus-style1.html" class="site-nav">About Us Style1</a></li>
                                                <li><a href="aboutus-style2.html" class="site-nav">About Us Style2</a></li>
                                                <li><a href="aboutus-style3.html" class="site-nav last">About Us Style3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact-style1.html" class="site-nav">Contact Us <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="contact-style1.html" class="site-nav">Contact Us Style1</a></li>
                                                <li><a href="contact-style2.html" class="site-nav last">Contact Us Style2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="lookbook-2columns.html" class="site-nav">Lookbook <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="lookbook-2columns.html" class="site-nav">2 Columns</a></li>
                                                <li><a href="lookbook-3columns.html" class="site-nav">3 Columns</a></li>
                                                <li><a href="lookbook-4columns.html" class="site-nav">4 Columns</a></li>
                                                <li><a href="lookbook-5columns.html" class="site-nav">5 Columns + Fullwidth</a></li>
                                                <li><a href="lookbook-shop.html" class="site-nav last">Lookbook Shop</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="faqs-style1.html" class="site-nav">FAQs <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="faqs-style1.html" class="site-nav">FAQs Style1</a></li>
                                                <li><a href="faqs-style2.html" class="site-nav last">FAQs Style2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="brands-style1.html" class="site-nav">Brands <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="brands-style1.html" class="site-nav">Brands Style1</a></li>
                                                <li><a href="brands-style2.html" class="site-nav last">Brands Style2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="my-account.html" class="site-nav">My Account <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="my-account.html" class="site-nav">My Account</a></li>
                                                <li><a href="login-sliding-style.html" class="site-nav">Login Sliding Slideshow</a></li>
                                                <li><a href="login.html" class="site-nav">Login</a></li>
                                                <li><a href="register.html" class="site-nav">Register</a></li>
                                                <li><a href="forgot-password.html" class="site-nav">Forgot Password</a></li>
                                                <li><a href="change-password.html" class="site-nav last">Change Password</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" class="site-nav">Empty Pages <i class="an an-angle-right-l"></i></a>
                                            <ul class="dropdown">
                                                <li><a href="empty-category.html" class="site-nav">Empty Category</a></li>
                                                <li><a href="empty-cart.html" class="site-nav">Empty Cart</a></li>
                                                <li><a href="empty-compare.html" class="site-nav">Empty Compare</a></li>
                                                <li><a href="empty-wishlist.html" class="site-nav">Empty Wishlist</a></li>
                                                <li><a href="empty-search.html" class="site-nav last">Empty Search</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="error-404.html" class="site-nav">Error 404 </a></li>
                                        <li><a href="cms-page.html" class="site-nav">CMS Page</a></li>
                                        <li><a href="elements-icons.html" class="site-nav">Icons</a></li>
                                        <li><a href="coming-soon.html" class="site-nav">Coming soon <span class="lbl nm_label2">New</span></a></li>
                                    </ul>
                                </li>
                                <li class="lvl1 parent dropdown"><a href="#;">Blog <i class="an an-angle-down-l"></i></a>
                                    <ul class="dropdown">
                                        <li><a href="blog-left-sidebar.html" class="site-nav">Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html" class="site-nav">Right Sidebar</a></li>
                                        <li><a href="blog-fullwidth.html" class="site-nav">Fullwidth</a></li>
                                        <li><a href="blog-masonry.html" class="site-nav">Masonry Blog Style</a></li>
                                        <li><a href="blog-2columns.html" class="site-nav">2 Columns</a></li>
                                        <li><a href="blog-3columns.html" class="site-nav">3 Columns</a></li>
                                        <li><a href="blog-4columns.html" class="site-nav">4 Columns</a></li>
                                        <li><a href="blog-single-post.html" class="site-nav last">Article Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <!--End Desktop Menu-->
                    </div>
                </div>                
                <!--End Desktop Menu-->
            </div>
            <!--End Main Navigation Desktop-->
            <!--Right Action-->
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 align-self-center icons-col text-right d-flex justify-content-end">
                <!--Search-->
                <div class="site-search iconset"><i class="icon fa fa-search"></i><span class="tooltip-label">Search</span></div>
                <!--End Search-->
                <!--Wishlist-->
                <div class="wishlist-link iconset"><a href="my-wishlist.html"><i class="icon fa fa-heart"></i><span class="wishlist-count counter d-flex-center justify-content-center position-absolute translate-middle rounded-circle">0</span><span class="tooltip-label">Wishlist</span></a></div>
                <!--End Wishlist-->
                <!--Setting Dropdown-->
                <div class="user-link iconset"><i class="icon fa fa-user-circle"></i><span class="tooltip-label">Account</span></div>
                <div id="userLinks">
                    <ul class="user-links">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Sign Up</a></li>
                        <li><a href="my-wishlist.html">Wishlist</a></li>
                        <li><a href="compare-style1.html">Compare</a></li>
                    </ul>
                </div>
                <div class="header-cart iconset">
                    <a href="#" class="site-header__cart btn-minicart" data-bs-toggle="modal" data-bs-target="#minicart-drawer">
                        <i class="icon fa fa-cart"></i><span class="site-cart-count counter d-flex-center justify-content-center position-absolute translate-middle rounded-circle">2</span><span class="tooltip-label">Cart</span>
                    </a>
                </div>
                <div class="setting-link iconset pe-0"><i class="icon fa fa-right-bar-s"></i><span class="tooltip-label">Settings</span></div>
                <div id="settingsBox">
                    <div class="currency-picker">
                        <span class="ttl">Select Currency</span>
                        <ul id="currencies" class="cnrLangList">
                            <li class="selected"><a href="#;" class="active">INR</a></li><li><a href="#;">GBP</a></li><li><a href="#;">CAD</a></li><li><a href="#;">USD</a></li><li><a href="#;">AUD</a></li><li><a href="#;">EUR</a></li><li><a href="#;">JPY</a></li>
                        </ul>
                    </div>
                    <div class="language-picker">
                        <span class="ttl">SELECT LANGUAGE</span>
                        <ul id="language" class="cnrLangList">
                            <li><a href="#" class="active">English</a></li><li><a href="#">French</a></li><li><a href="#">German</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="search-popup" class="search-drawer">
        <div class="container">
            <span class="closeSearch an an-times-l"></span>
            <form class="form minisearch" id="header-search" action="#" method="get">
                <label class="label"><span>Search</span></label>
                <div class="control">
                    <div class="searchField">
                        <div class="search-category">
                            <select id="rgsearch-category" name="rgsearch[category]" data-default="All Categories">
                                <option value="00" label="All Categories" selected="selected">All Categories</option>
                                <optgroup id="rgsearch-shop" label="Shop">
                                    <option value="0">- All</option>
                                    <option value="1">- Men</option>
                                    <option value="2">- Women</option>
                                    <option value="3">- Shoes</option>
                                    <option value="4">- Blouses</option>
                                    <option value="5">- Pullovers</option>
                                    <option value="6">- Bags</option>
                                    <option value="7">- Accessories</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="input-box">
                            <button type="submit" title="Search" class="action search" disabled=""><i class="icon an an-search-l"></i></button>
                            <input type="text" name="q" value="" placeholder="Search by keyword or #" class="input-text">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</header>
</template>
<script>
export default {
    data(){
        return {
            'men_categories': {},
            'women_categories': {},
            'kids_categories': {},
        }
    },
    methods:{
        getAllInitials(){
            const axios = require('axios').default;
            axios.get('http://localhost:8000/api/shop/categories/mega')
            .then(response =>{
                this.men_categories     = response.data.men;
                this.women_categories   = response.data.women;
                this.kid_categories   = response.data.kids;          

            })
            .catch(()=>{
                this.$Progress.fail();
                this.$toast.fire({ icon: 'error', title: 'Header not loaded successfully'});
            });
        },
    },
    mounted() {
        this.getAllInitials();
    },
}
</script>