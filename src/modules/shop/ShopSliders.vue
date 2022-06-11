<template>
<ssr-carousel :autoplay-delay='3' loop show-arrows show-dots paginate-by-slide :gutter='20' class="row">
  <slide v-for="index in 10" :key="index" :index="index"><img :src="'https://via.placeholder.com/1920x1080?text=Slide+'+index"></slide>
</ssr-carousel>  
</template>
<script>
export default{
    data(){
        return{
            sliders: '',
        }
    }
}
</script>
<style>

</style>
