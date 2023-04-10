<script setup>
    import globalCards from './global/global-cards.vue';
    import social from './global/global-social.vue';
</script>
<template>
    <section class="container-fluid p-0" style="position:relative">
        <div style="
            position:absolute;
            right:7%;
            top:30px;
            min-width: 300px;
            min-height: 400px;
            z-index: 20;
        ">
            <div class="container">
                <globalCards style="max-width: 95%;">
                    <h2 class="text-gradient text-primary">{{ profile.name }}</h2>
                    <p style="overflow-wrap: break-word;">
                        {{ profile.address }}<br/>
                        <i class="text-sm text-secondary">
                            ({{ profile.address2nd }})
                        </i>
                    </p>

                    <div class="container-fluid p-0">
                        <div class="row">
                            <div class="col-lg-auto">
                                <a :href="wame(profile.tel, text)" style="text-decoration: none; color:unset;" target="_blank">
                                    <i class="bi bi-whatsapp"></i> +{{ chopPhone(profile.tel,3) }}
                                </a>
                            </div>
                            <div class="col-lg-auto">
                                <a :href="'tel:+'+profile.tel" style="text-decoration: none; color:unset;">
                                    <i class="bi bi-telephone-fill"></i> +{{ chopPhone(profile.tel,3) }}
                                </a>
                            </div>
                            <div class="col-lg-auto">
                                <a :href="'mailto:'+profile.email" style="text-decoration: none; color:unset;">
                                    <i class="bi bi-envelope-at"></i> {{ profile.email }}
                                </a> 
                            </div>
                        </div>
                    </div>

                    <social
                        :socials="profile.socials"
                        class="bg-primary p-1"
                    >
                    </social>
                </globalCards>
            </div>
        </div>
        <div class="container-fluid p-0" style="position: relative;overflow: hidden;">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1896486525275!2d112.7917177!3d-7.332586299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb9b7b91f2ef%3A0x3eaece377b40fc33!2sPT.%20Semesta%20Alam%20Ceta!5e0!3m2!1sid!2sid!4v1679977428249!5m2!1sid!2sid" 
                style="width:100%;min-height:400px; border:0px; padding:0px" 
                allowfullscreen=true
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {
                text: "Hallo, saya ingin berkonsultasi terkait Lingkungan hidup."
            }
        },
        props:{
            profile: Object
        },
        methods:{
            chopPhone(txt, n){
                var obj = txt.split("").reverse();
                var new_arr = [];
                while(obj.length > 0){
                    new_arr.push(obj.splice(0,n))
                }

                return new_arr.map(e => e.reverse().join("")).reverse().join(" ").replace("6 2", "62");
            },
            wame(_tel, _text){
                _text = encodeURI(_text);
                return  `https://wa.me/${_tel}?text=${_text}`
            }
        }
    }
</script>

