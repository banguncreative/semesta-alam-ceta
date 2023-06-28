<script setup>
    import globalProfilePhoto from './global/global-profile-photo.vue';
    import globalSocial from './global/global-social.vue';
</script>

<template>
    <div class="container pb-5">
        <h1 class="text-primary text-center m-3">Meet Our Team</h1>
        <div class="row">
            <div class="col-lg-6">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-auto">
                            <globalProfilePhoto
                                style="width:280px; height:280px; border: solid 5px #a7b9a1"
                                img="../assets/img/potrait_direktur.png"
                                class="inblk m-auto"
                            >
                            </globalProfilePhoto>
                        </div>
                        <div class="col-lg-auto pt-5">
                            <h5 class="text-left">QONITA RACHMAWATI, ST</h5>
                            <i class="text-sm">TENAGA AHLI LINGKUNGAN</i>
                            <div class="bg-gray">
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- <div class="inblk align-top p-3 mt-5 m-auto">
                    
                </div> -->
            </div>
            <div class="col-lg-6">
                <div class="container-fluid mt-6">
                    <div class="row pt-2">
                        <h4 class="text-center mb-2">Assistant</h4 >
                        <div 
                            v-for="team in teams"
                            class="col-lg-6"
                        >
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-5 col-lg-12 text-center">
                                        <globalProfilePhoto
                                            :img="team.img"
                                            class="inblk m-auto"
                                            style="border: solid 3px #a7b9a1"
                                        ></globalProfilePhoto>
                                    </div>
                                    <div class="col-sm-5 col-lg-12 p-0 align-middle">
                                        <p class="text-sm text-center lh-xsm ">{{ team.position }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            teams: Object
        }
    }
</script>