<template>
    <img v-if="img" :src="img" alt="img-blur-shadow" class="img-fluid shadow rounded-3">
</template>

<script>
    export default{
        data: function(){
            return {}
        },
        props:{
            img: String
        },
        mounted(){
            console.log(this.img)
        }
    }
</script>