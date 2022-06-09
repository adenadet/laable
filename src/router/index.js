import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PageHome from '../modules/pages/PageHome.vue';
import CartPage from '../modules/cart/FullCart.vue'; 
//import ProductSingle from '../modules/products/ProductProductSingle.vue';
import ProductAll from '../modules/products/ProductAll.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home',component: PageHome},
  { path: '/cart', name: 'cart',component: CartPage},
  { path: '/products', name: 'products',component: ProductAll},
  //{ path: '/about', 
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
