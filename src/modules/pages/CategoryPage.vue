<template>
<div class="container">
    <div class="grid-categorys grid-mr-20">
        <div class="grid-masonary category-page-grid style1">
            <div class="grid-sizer col-6 col-sm-6 col-md-6 col-lg-6"></div>
            <div class="row mx-0">
                <div v-for="sub in category.subs" :key="sub.id" class="col-6 col-sm-6 col-md-6 col-lg-6 category-grid-item cl-item">
                    <div class="category-item position-relative overflow-hidden zoomscal-hov">
                        <a :href="'/category/'+sub.id" class="category-link">
                            <div class="zoom-scal"><img :src="sub.photo" :alt="sub.title" :title="sub.title" ></div>
                            <div class="details">
                                <div class="inner">
                                    <h3 class="category-title">{{sub.title}}</h3>
                                    <span class="counts mt-0 mt-md-1">{{sub.slug}}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="section product-slider pb-0">
        <div class="container">
            <div class="row">
                <div class="section-header col-12">
                    <h2 class="text-transform-none">Top {{category.title}} Designs</h2>
                </div>
            </div>
            <div class="row">
                <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-3 col-lg-3 productSlider grid-products">
                    <div class="item">
                        <div class="product-image">
                            <router-link :to="'/shop/product/'+product.id" class="product-img">
                                <img class="primary" :src="'/assets/images/products/product-'+product.id+'.jpg'" alt="" title="">
                                <img class="hover" :src="'/assets/images/products/product-'+product.id+'-1.jpg'" alt="" title="">
                                <div v-if="product.discount > 0.00" class="product-labels"><span class="lbl on-sale">{{product.discount}}% Off</span></div>
                            </router-link>
                            <div class="button-set style0 d-none d-md-block">
                                <ul>
                                    <li><a class="btn-icon btn cartIcon pro-addtocart-popup" href="#pro-addtocart-popup"><i class="icon fa fa-cart-plus"></i> <span class="tooltip-label top">Add to Cart</span></a></li>
                                    <li><a class="btn-icon wishlist add-to-wishlist" href="my-wishlist.html"><i class="icon fa fa-heart"></i> <span class="tooltip-label top">Add To Wishlist</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-details text-center">
                            <div class="product-name text-uppercase"><router-link :to="'/shop/product/'+product.id">{{product.title}}</router-link></div>
                            <div v-if="product.discount > 0.00" class="product-price">
                                <span class="old-price">&#163;{{product.price}}</span>
                                <span class="price">&#163;{{(100 - product.discount) * product.price / 100 }}</span>
                            </div>
                            <div v-else class="product-price">
                                <span class="price">&#163;{{product.price}}</span>
                            </div>
                            <div class="product-review"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i></div>
                            <ul class="swatches">
                                <li v-for="color in product.colours" :key="color.id" :class="'swatch small rounded '+color.colour.name.toLowerCase()"><span class="tooltip-label">{{color.colour.name}}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>

export default {
    data(){
        return {
            category:{},
            products:[],
        }
    },
    methods:{
        getAllInitials(){
            const axios = require('axios').default;
            axios.get('http://localhost:8000/api/shop/categories/'+this.$route.params.id).then(response =>{
                this.category     = response.data.category;
                this.products     = response.data.products;
                this.$Progress.finish();
            })
            .catch(()=>{
                this.$Progress.fail();
                this.$toast.fire({ icon: 'error', title: 'Profile not loaded successfully'});
            });
        },
    },
    mounted() {
        this.getAllInitials();
    },
}
</script>
