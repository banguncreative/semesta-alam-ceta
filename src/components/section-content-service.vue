<script setup>
    import globalCards3d from './global/global-cards-3d.vue';
    import waveAnimated from './wave-animated.vue';
import profile from '../profile';

</script>

<template>
    <section class="container-fluid bg-gradient-primary p-0" id="service">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style="top: 100px">
                        <h3 class="text-white">Our Service</h3>
                        <h6>Berikut list jasa yang kami tawarkan.</h6>
                        <p>Jika anda butuh info lebih lanjut? jangan sungkan, CS kami akan dengan senang hati membantu anda.</p>
                        <a 
                            target="_blank"
                            :href="wame(profile.tel, text)"
                            style="text-decoration: none; color:unset"
                        >
                            <b style="font-size: 3.5rem; overflow-wrap: break-word;">
                                {{ chopPhone(profile.tel,3).replace("6 2","62") }}
                                <i class="bi bi-whatsapp"></i>
                            </b>
                        </a>
                    </div>
                </div>
                <div class="col-lg-9 pt-4">
                    <div class="container-fluid">
                        <div class="row mb-3"
                            v-for="items in choped"
                        >
                            <div :class="column(n)"
                                v-for="service in items"
                            >
                                <globalCards3d
                                    :img="service.img"
                                    style="
                                        min-height: 420px; 
                                        box-shadow: 1px 6px 15px 0px rgba(0,0,0,0.39);
                                        -webkit-box-shadow: 1px 6px 15px 0px rgba(0,0,0,0.39);
                                        -moz-box-shadow: 1px 6px 15px 0px rgba(0,0,0,0.39);
                                    "
                                >
                                    <div class="icon icon-lg mb-3 mt-2" style="z-index:2">
                                        <i class="bi bi-bank" style="font-size: 2.5em;"></i>
                                    </div>
                                    <h3 class="text-primary">{{ service.name }}</h3>
                                    <p class="text-dark text-sm text-center fw-light lh-sm" style="min-height: 80px">{{ service.description }}</p>
                                    <a :href="wame(profile.tel, text+` lebih spesifik terkait *${service.name}*`)" target="_blank" class="btn btn-outline-secondary mt-3 btn-round" style="z-index:2000">More info <i class="bi bi-telephone-forward-fill text-sm ms-1"></i></a> 
                                </globalCards3d>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
            <path fill="#ffffff" fill-opacity="1" d="M0,32L120,64C240,96,480,160,720,165.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {
                n: 3,
                text: "Hallo, saya ingin berkonsultasi terkait Lingkungan hidup."
            }
        },
        props:{
            services: Object,
        },
        methods:{
            column(_length){
                var col = Math.round(12/_length);
                return `col-lg-${col}`
            },
            chop(obj, n){
                var new_arr = [];
                while(obj.length > 0){
                    new_arr.push(obj.splice(0,n))
                }

                return new_arr;
            },
            chopPhone(txt, n){
                var obj = txt.split("").reverse();
                var new_arr = [];
                while(obj.length > 0){
                    new_arr.push(obj.splice(0,n))
                }

                return new_arr.map(e => e.reverse().join("")).reverse().join(" ");
            },
            wame(_tel, _text){
                _text = encodeURI(_text);
                return  `https://wa.me/${_tel}?text=${_text}`
            }
        },
        computed:{
            choped(){
                var n = this.n;
                return this.chop(this.services, n)
            }
        },
        mounted(){}
    }
</script>