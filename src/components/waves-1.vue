<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <defs>
        <linearGradient id="in-gradient" rotate="310">
            <stop offset="0%" :stop-color="color1" />
            <stop offset="100%" :stop-color="color2" />
        </linearGradient>
        </defs>
        <path fill="url(#in-gradient)" fill-opacity="1" d="M0,128L120,144C240,160,480,192,720,181.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
    </svg>
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
        props: {
            color1: String,
            color2: String
        }
    }
</script>