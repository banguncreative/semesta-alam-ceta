<template>
    <div class="card card-background card-background-mask-light tilt m-1" data-tilt="" style="will-change: transform; transform: perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
        <div class="full-background" :style="'background-image: url('+img+')'"></div>
        <div class="card-body pt-7 text-center">
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
        props: {
            img: String
        },
        mounted(){
        }
    }
</script>