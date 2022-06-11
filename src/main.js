import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import SsrCarousel from 'vue-ssr-carousel';

//import bootstrap from './bootstrap';
//import ssrCarouselCss from 'vue-ssr-carousel/index.css';

//Import Moment for DateTime functions
//import moment from 'moment';
import Lingallery from 'lingallery';
Vue.component('lin-gallery', Lingallery);

//Import Progress Bar
import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
    color: 'rgb(255, 255, 19)',
    failedColor: 'red',
    height: '5px',
    });

//Import Sweet Alert
import Swal from 'sweetalert2'
window.Swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

window.toast = toast;

//Import VueRouter for SPA Routing
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Import Simple Pagination
//Vue.component('pagination', require('laravel-vue-pagination'));

//Import Vform for forms and Errors
//import {Form, HasError, AlertError} from 'vform';
//Vue.component(HasError.name, HasError);
//Vue.component(AlertError.name, AlertError);
//window.Form = Form;

//Import Cart and ChartKick for Charts
//import Chart from 'chart.js';
//import Chartkick from 'vue-chartkick'
//Vue.use(Chartkick.use(Chart));

Vue.component ('ssr-carousel', SsrCarousel);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
