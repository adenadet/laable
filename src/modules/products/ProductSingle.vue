<template>
<div class="card">
    <ProductImage :myImage="product.images[0]" :otherImage="product.images[1]"></ProductImage>
    <div>Hi</div>
</div>
</template>
<script>
import ProductImage from 'ProductImage';
export default {
    components:{
        ProductImage
    },
    data(){
        return  {}
    },
    methods:{
        getAllInitials(){
            this.$Progress.start();
            axios.get('/api/products/'+this.$router.params.id).then(response =>{
                this.active         = response.data.active;
                this.all            = response.data.all;
                this.cancelled      = response.data.cancelled;
                this.planned        = response.data.planned;
                this.pending        = response.data.pending;
                this.$Progress.finish();
            })
            .catch(()=>{
                this.$Progress.fail();
                toast.fire({ icon: 'error', title: 'Profile not loaded successfully'});
            });
        },
        
    },
    props:{
        'myImage': String,
        'otherImage': String, 
    }
}
</script>