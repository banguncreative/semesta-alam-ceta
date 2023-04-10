<template>
    <div class="card shadow-lg">
        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <div class="d-block blur-shadow-image">
                <img v-if="img" :src="img" alt="img-blur-shadow" class="img-fluid shadow rounded-3">
            </div>
            <div class="colored-shadow" :style="createStyleBg(img)"></div>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
        props:{
            img: String
        },
        methods:{
            createStyleBg(_img){
                return `background-image: url(&quot;${_img}&quot;);`
            }
        }
    }
</script>