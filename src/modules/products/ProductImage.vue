<template>
    <div class="">
        <img :src="myImage" @mouseover="myImage = otherImage" />
    </div>
</template>
<script>
export default {
    data(){
        return  {}
    },
    props:{
        'myImage': String,
        'otherImage': String, 
    }
}
</script>
