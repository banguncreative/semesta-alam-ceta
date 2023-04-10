<template>
    <div :class="{ loader: true, fadeout: !isLoading }">
        <div
            class="main-logo m-auto mb-2 animate__animated animate__headShake" 
            style="background-image: url('../assets/img/logos/brand_.png'); transform:scale(1.5); filter:grayscale(0.4) brightness(1.3)"
        ></div>
        <b class="animate__animated animate__fadeInDown animate__infinite infinite">Loading ...</b>
    </div>
</template>
<script>
    export default {
        props: ["isLoading"]
    };
</script>

<style>
    .loader {
        background-color: #a7b9a1;
        bottom: 0;
        color: white;
        display: block;
        font-size: 32px;
        left: 0;
        overflow: hidden;
        padding-top: 20vh;
        position: fixed;
        right: 0;
        text-align: center;
        top: 0;
        z-index: 3000;
    }

    .fadeout {
        animation: fadeout 2s forwards;
    }

    @keyframes fadeout {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
</style>