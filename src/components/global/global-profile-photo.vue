<template>
    <div 
        class="crl-profile"
        :style="bgImage"
    >
        
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                default_img:"https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_960_720.png"
            }
        },

        props:{
            img: String
        },

        computed:{
            bgImage(){
                var _img = this.img? this.img : this.default_img;
                return `background-image:url(${_img})`;
            }
        }

    }
</script>