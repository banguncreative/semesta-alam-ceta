<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import globalCards from './global/global-cards.vue';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    import globalFullBg from './global/global-full-bg.vue';
</script>
<template>
    <section class="container bg-white pt-5" id="afiliates" style="min-height: 300px;">
        <h1 class="text-primary text-center">Menjadi Konsultan Terkemuka dan Dipercaya</h1>
        <div class="row p-3">
            <div class="col-lg-12">
                <carousel items-to-scroll="4" items-to-show="5" wrapAround="true" class="pt-4">
                    <slide
                        v-for="(afiliate, key) in afiliates"
                        :key="key"
                    >
                        <div class="card"
                            style="transform: scale(0.80);"
                        >
                            <globalFullBg
                                :img="afiliate.url"
                            ></globalFullBg>
                        </div>
                    </slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
            </div>
            <!-- <div class="col-lg-3">
                <hr class="vertical dark">
                <div class="p-3 text-center">
                    <p class="text-sm">Konsultan Kami Dipercaya Lebih dari</p>
                    <h1 class="text-gradient text-primary"> <span id="state4" :countto="vendors">00</span>+</h1>
                    <h5 class="mt-3">Instansi dan Perusahaan</h5>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {
                afiliates:[
                    {
                        name:"Titanium",
                        url:"../assets/img/client/titanium.png"
                    },
                    {
                        name:"KFC",
                        url:"../assets/img/client/KFC.png"
                    },
                    {
                        name:"FIESTA",
                        url:"../assets/img/client/fiesta.png"
                    },
                    {
                        name:"Bale Hinggil",
                        url:"../assets/img/client/Balehinggil.png"
                    },
                    {
                        name:"PAKUWON",
                        url:"../assets/img/client/pakuwon.png"
                    },
                    {
                        name:"Depo Bangunan",
                        url:"../assets/img/client/depo bangunan.png"
                    },
                    {
                        name:"High Point",
                        url:"../assets/img/client/high point.png"
                    },
                    {
                        name:"kosme pack",
                        url:"../assets/img/client/kosme pack.png"
                    },
                    {
                        name:"kharisma",
                        url:"../assets/img/client/kharisma.png"
                    },
                    {
                        name:"Agung",
                        url:"../assets/img/client/Agung.png"
                    },
                    {
                        name:"Agrico",
                        url:"../assets/img/client/AGRICO INTERNATIONAL.png"
                    },
                    {
                        name:"Bisi",
                        url:"../assets/img/client/BISI INTERNATIONAL.png"
                    },
                    {
                        name:"CPI",
                        url:"../assets/img/client/CHAROEN POKPHAND INDONESIA.png"
                    },
                    {
                        name:"Corin",
                        url:"../assets/img/client/CORIN MULIA GEMILANG.png"
                    },
                    {
                        name:"Kamanjaja",
                        url:"../assets/img/client/kamanjaja logistic.png"
                    },
                    {
                        name:"Kroma",
                        url:"../assets/img/client/kroma plastindo.png"
                    },
                    {
                        name:"MSI",
                        url:"../assets/img/client/MULTI SARANA INDOTANI.png"
                    },
                    {
                        name:"Sanodoc",
                        url:"../assets/img/client/sanodoc.png"
                    },

                ]
            }
        },
        mounted(){
            
        },
        components: {
            Carousel,
            Slide
        },
        props:{
            vendors: Number
        }
    }
</script>