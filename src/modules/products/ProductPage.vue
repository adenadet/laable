<template>
<div class="container">
    <div class="product-single">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="product-details-img product-horizontal-style clearfix mb-3 mb-md-0"><lin-gallery class="img-fluid" :items="items" ></lin-gallery></div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="product-single__meta text-left">
                    <div class="title-nav d-flex justify-content-between">
                        <h1 class="product-single__title pe-5">{{product.title}}</h1>
                    </div>
                    <div class="product-review mb-2"><a class="reviewLink d-flex-center" href="#reviews"><i class="fa fa-star"></i><i class="fa fa-star mx-1"></i><i class="fa fa-star"></i><i class="fa fa-star mx-1"></i><i class="fa fa-star-o"></i><span class="spr-badge-caption ms-2">16 Reviews</span></a></div>
                    <div class="product-info">
                        <p class="product-type">Vendor: <span>Bohemian France</span></p>  
                        <p class="product-type">Product Type: <span>{{product.category.title}} {{product.child_category != null ? ' - '+product.child_category.title: ''}}</span></p>  
                    </div>
                    <div class="product-single__price pb-0 mb-0">
                        <span class="visually-hidden">Regular price</span>
                        <span class="product-price__sale--single">
                            <span class="product-price-old-price d-none">$200.00</span><span class="product-price__price product-price__sale-d">&#163;{{product.price}}</span>   
                            <span class="discount-badge d-none"><span class="devider me-2">|</span><span>Save: </span><span class="product-single__save-amount"><span class="money">$99.00</span></span><span class="off ms-1">(<span>25</span>%)</span></span> 
                        </span>
                    </div>
                    <!-- End Product Price -->
                </div>
                <!-- End Product Info -->
                <div class="product-single__description rte">
                    <p class="mb-2 text-left">{{product.description}}</p>
                </div>
                <!-- Product Form -->
                <form method="post" action="#" class="product-form form-bordered hidedropdown">
                    <!-- Product Action -->
                    <div class="product-action w-100 clearfix">
                        <div class="product-form__item--quantity d-flex-center mb-3">
                            <div class="qtyField">
                                <a class="qtyBtn minus" href="javascript:void(0);"><i class="icon an an-minus-r" aria-hidden="true"></i></a>
                                <input type="text" name="quantity" value="1" class="product-form__input qty rounded-0">
                                <a class="qtyBtn plus" href="javascript:void(0);"><i class="icon an an-plus-r" aria-hidden="true"></i></a>
                            </div>
                            <div class="pro-stockLbl ms-3">
                                <span class="d-flex-center stockLbl instock"><i class="icon an an-check-cil"></i><span> In stock</span></span>
                                <span class="d-flex-center stockLbl preorder d-none"><i class="icon an an-clock-r"></i><span> Pre-order Now</span></span>
                                <span class="d-flex-center stockLbl outstock d-none"><i class="icon an an-times-cil"></i> <span>Sold out</span></span>
                                <span class="d-flex-center stockLbl lowstock d-none"><i class="icon an an-exclamation-cir"></i><span> Order now, Only  <span class="items">10</span>  left!</span></span>
                            </div>
                        </div>
                        <div class="row g-2">
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="product-form__item--submit">
                                    <button type="submit" name="add" class="btn rounded-0 product-form__cart-submit mb-0 text-white"><i class="fa fa-cart-plus"></i> <span>Add to cart</span></button>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                <div class="product-form__item--buyit clearfix">
                                    <button type="button" class="btn rounded-0 btn-outline-primary proceed-to-checkout">Buy it now</button>
                                </div>
                            </div>
                        </div>
                        <div class="agree-check customCheckbox clearfix d-none">
                            <input id="prTearm" name="tearm" type="checkbox" value="tearm" required >
                            <label for="prTearm">I agree with the terms and conditions</label>
                        </div>
                    </div>
                </form>
                <!-- End Product Form -->
                <!-- Social Sharing -->
                <div class="social-sharing d-flex-center mb-3">
                    <span class="sharing-lbl me-2">Share :</span>
                    <button class="d-flex-center btn btn-link" title="Share on Facebook"><i class="fas fa-facebook"></i><span class="share-title d-none">Facebook</span></button>
                    <button class="d-flex-center btn btn-link btn--share" title="Tweet on Twitter"><i class="fa fa-twitter mx-1"></i><span class="share-title d-none">Tweet</span></button>
                    <button href="#" class="d-flex-center btn btn-link btn--share" data-bs-toggle="tooltip" data-bs-placement="top" title="Pin on Pinterest"><i class="fa fa-pinterest-p mx-1"></i> <span class="share-title d-none">Pin it</span></button>
                    <button href="#" class="d-flex-center btn btn-link btn--share share-linkedin" data-bs-toggle="tooltip" data-bs-placement="top" title="Share on Linkedin"><i class="icon fa fa-linkedin mx-1"></i><span class="share-title d-none">Linkedin</span></button>
                    <button href="#" class="d-flex-center btn btn-link btn--share share-email" data-bs-toggle="tooltip" data-bs-placement="top" title="Share by Email"><i class="icon fa fa-envelope-l mx-1"></i><span class="share-title d-none">Email</span></button>
                </div>
               
                <div class="trustseal-img mt-4"><img src="/assets/images/powerby-cards.jpg" alt="powerby cards" ></div>
                <!-- End Product Info -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            product: {},
            items: [],
        }
    },
    methods:{
        getAllInitials(){
            const axios = require('axios').default;
            axios.get('http://localhost:8000/api/shop/products/'+this.$route.params.id).then(response =>{
                this.product     = response.data.product;
                var i = 0
                for(i=0; i<this.product.images.length; i++){
                    this.items.push({
                        id: this.product.images[i].id, 
                        src: '/'+this.product.images[i].source, 
                        thumbnail: '/'+this.product.images[i].source, 
                        alt: this.product.title, 
                        caption: this.product.title
                    });
                }
                this.$Progress.finish();
            })
            .catch(()=>{
                this.$Progress.fail();
                this.$toast.fire({ icon: 'error', title: 'Product not loaded successfully'});
            });
        },
    },
    mounted() {
        this.getAllInitials();
    },
}
</script>