<script setup>
    import sectionAboutList from './section-about-list.vue';
    import globalCards from './global/global-cards.vue';
</script>

<template>
    <!-- -------- START Features w/ icons and text on left & gradient title and text on right -------- -->
    <div class="container pt-5" id="about-us">
        <div class="row py-4 mt-3">
            <div class="col-lg-5">
                <global-cards
                    img="../assets/img/profile-welcome.jpeg"
                >
                    <h3 class="text-gradient text-primary mb-1 mt-2">Tentang Kami</h3>
                    <!-- <h3>The most important</h3> -->
                    <p>
                        <b>{{ name }}</b> didirikan pada tahun <b class="text-primary">{{ founded }}</b>, dan genap {{ experience() }} tahun pengalaman kami.<br/><br/>
                        Melalui visi kami <b>{{ vision }}</b> kami terus mencoba mengabdi dalam upaya penyelenggaraan lingkungan.
                    </p>
                    <!-- <a href="javascript:;" class="text-primary icon-move-right">More about us
                        <i class="fas fa-arrow-right text-sm ms-1"></i>
                    </a> -->
                </global-cards>
            </div>

            <div class="col-lg-7 mt-lg-0 mt-5" style="padding:40px">
                <h3 class="text-gradient text-primary mb-0 m-2">Misi Kami</h3>
                <section-about-list
                    v-for="mission in missions"
                    :text="mission.text"
                    :ico="mission.icon"
                ></section-about-list>
                <div class="container-fluid">
                    <button class="btn bg-gradient-primary col-lg-5 m-1">Lihat legalitas <i class="fas fa-arrow-right text-sm ms-1"></i></button>
                    <button class="btn bg-gradient-primary col-lg-5 m-1" data-toggle="modal" data-target="#modalPengalaman">Lihat Pengalaman <i class="fas fa-arrow-right text-sm ms-1"></i></button>
                </div>
            </div>
        </div>
    </div>
    <!-- -------- END Features w/ icons and text on left & gradient title and text on right -------- -->
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
        props: {
            name : String,
            vision: String,
            missions: Object,
            founded: Number
        },
        methods:{
            experience(){
                return Math.round(new Date().getFullYear() - this.founded)
            }
        }
    }

</script>