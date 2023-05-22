<script setup>
    import otherOTP from './other-OTP.vue';
    import { ref } from "vue";


</script>
<template>
    <div class="container">
        <div class="outer" v-if="!isMailSend">
            <form class="form-submit" v-if="!isSubmited" @submit.prevent="submit">
                
                <span class="fs-8">Basic data</span>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="company_name" v-model="submitData.company_name" class="form-control" name="company_name" placeholder="Nama perusahaan" aria-label="company name" aria-describedby="basic-addon2">
                    <label for="company_name">Nama perusahaan</label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="email" id="email" v-model="submitData.email" class="form-control" name="email" placeholder="name@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <label for="email">Email</label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="email" id="confirm_email" class="form-control" name="confirm_email" :pattern="submitData.email" placeholder="name@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <label for="confirm_email">Confirm email</label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="phone" v-model="submitData.phone" class="form-control" name="phone" placeholder="name@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <label for="phone">Phone</label>
                </div>

                <hr>

                <span>Company data</span>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="NIB" v-model="submitData.NIB" class="form-control" name="NIB" pattern="[0-9]{13}" maxlength="13" placeholder="x x x x x x x x x x x x x " aria-label="Recipient's username" aria-describedby="NIB">
                    <label for="NIB">NIB <span style="font-size: x-small;">(Nomor Izin Berusaha)</span></label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="KBLI" v-model="submitData.KBLI" class="form-control" name="KBLI" placeholder="xxxx, xxxx, xxxx " aria-label="Recipient's username" aria-describedby="KBLI">
                    <label for="KBLI">KBLI <span style="font-size: x-small;">(Klasifikasi Baku Lapangan Usaha Indonesia)</span></label>
                </div>

                <div class="form-floating mb-2">
                    <select class="form-select" id="status_modal" v-model="submitData.status_modal" aria-label="PMA / PMDN">
                        <option selected>PMA / PMDN</option>
                        <option value="PMA">Perusahan Modal Asing (PMA)</option>
                        <option value="PMDN">Perusahaan Modal Dalam Negeri (PMDN)</option>
                    </select>
                    <label for="status_modal">Status Permodalan</label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="lahan" v-model="submitData.luas_lahan" class="form-control" name="luas_lahan" placeholder="< 1000 m2" aria-label="" aria-describedby="lahan">
                    <label for="lahan">Luas Lahan</label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="bangunan" v-model="submitData.luas_bangunan" class="form-control" name="luas_bangunan" placeholder="< 1000 m2" aria-label="" aria-describedby="bangunan">
                    <label for="bangunan">Luas Lahan</label>
                </div>

                <div class="form-floating input-group-sm mb-2">
                    <input type="text" id="lokasi" v-model="submitData.lokasi" class="form-control" name="lokasi" placeholder="lokasi/kota" aria-label="" aria-describedby="lokasi">
                    <label for="lokasi">Lokasi kegiatan</label>
                </div>

                <hr>
                
                <span>Service</span>

                <div class="form-floating mb-2">
                    <select class="form-select" id="service" v-model="submitData.service" aria-label="Floating label select example">
                        <option selected>Open this select menu</option>
                        <option 
                            v-for="service in services"
                            :value="service.name"
                            :alt="service.description"
                        >
                            {{ service.name }}
                        </option>
                    </select>
                    <label for="service">Jasa/Dokumen</label>
                </div>

                <div class="form-floating mb-2">
                    <textarea id="additional_info" class="form-control" placeholder="Leave a comment here" name="additional_info" style="height: 100px"></textarea>
                    <label for="additional_info">keterangan tambahan</label>
                </div>
                <button class="btn btn-primary " v-if="!isLoading" >submit</button>
                <div class="spinner-border text-primary" role="status" v-if="isLoading">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </form>

            <form 
                v-if="isSubmited"
                @submit.prevent="confirm"
            >
                <div class="bd-highlight mb-3" style="margin: auto">
                    
                    <div class="container">
                        <div class="text-center">OPT already send to <b>{{ submitData.email }}</b></div>
                        <div class="row">
                            <div class="col-lg-8 text-center">
                                <otherOTP
                                    :digit-count="5"
                                    @update:otp="otpValue = $event"
                                />
                            </div>
                            <div class="col-lg-3 text-center">
                                <button class="btn btn-primary m-1" style="height: 3rem;" :disabled="!otpValue?.isFull" v-if="!isLoading">submit</button>
                                <div class="spinner-border text-primary" role="status" v-if="isLoading">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <p v-if="textStatus">{{ textStatus }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <p class="text-center" v-if="isMailSend">Data has been record! thanks.</p>
    </div>
</template>

<script>
    export default{
        data : function(){
            return {
                submitData:{
                    status_modal: "PMA / PMDN"
                },
                isSubmited: false,
                isLoading: false,
                isMailSend: false,
                otpValue : ref(""),
                token: "AKfycbwLhF_OsmbVSlUbSpPpczOwhsoQbJRxvEH7X-nVADk5zWfs-RdFamiaWmSi2yoLuJjGkw",
                engine: null,
                textStatus: null,
                services: [
                    {
                        name: "Amdal",
                        img: "../assets/img/service/01.jpeg",
                        description: "Analisis Mengenai Dampak Lingkungan"
                    },
                    {
                        name: "UKL UPL",
                        img: "../assets/img/service/02.jpeg",
                        description: "Upaya Pengelolaan Lingkungan Hidup dan Upaya Pemantauan Lingkungan Hidup"
                    },
                    {
                        name: "PERTEK",
                        img: "../assets/img/service/03.jpeg",
                        description: "Dokumen Persetujuan Teknis untuk Limbah Cair dan Limbah Emisi Udara"
                    },
                    {
                        name: "RINTEK",
                        img: "../assets/img/service/04.jpeg",
                        description: "Dokumen Rincian Teknis Limbah B3"
                    },
                    {
                        name: "PROPER",
                        img: "../assets/img/service/05.jpeg",
                        description: "Public Disclosure Program for Environmental Compliance"
                    },
                    {
                        name: "PEMANTAUAN",
                        img: "../assets/img/service/06.jpeg",
                        description: "Dokumen Pemantauan Pelaksanaan Program UKL - UPL Perusahaan"
                    },
                ]
            }
        },
        mounted(){
            // init submiter
            this.engine = new submiter(this.token);
        },
        props:{
        },
        methods:{
            async submit(){
                this.engine.setData(this.submitData);
                this.isLoading = true;

                var res = await this.engine.submit();
                if(res.code == 200){
                    this.isLoading = false;
                    this.isSubmited= true;
                    this.textStatus= null;

                    return;
                }

                return this.textStatus= res.msg;
            },
            async confirm(){
                this.isLoading = true;
                this.textStatus= null;

                var code = this.otpValue.digit;
                var res = await this.engine.confirm(code);
                if(res.code == 200){
                    this.isLoading = false;
                    this.textStatus = res.msg;

                    this.isMailSend = true; 
                    return 
                }

                this.isLoading = false;
                this.textStatus= res.msg;
            }
        }
    }

    class submiter{
        constructor(token){
            this.base = function(){ return `https://script.google.com/macros/s/${token}/exec`};
        }

        setData(obj){
            if(typeof obj !== "object") return this;

            Object.keys(obj).map(i => {
                this[i] = obj[i];
            })

            return this
        }

        submit(){
            var method = "otp";
            var obj = JSON.stringify(this);
            return new Promise((resolve, reject) =>{
                var server = this.base() + `?m=${method}&q=${obj}`;
                console.log(server)
                try{
                    fetch(server)
                    .then(r => r.json())
                    .then(data => resolve(data))
                }catch(err){
                    reject(err);
                }
            })
        }

        confirm(code){
            var method = "confirm";
            var {email} = this;
            var obj = JSON.stringify({
                email,
                code
            });

            return new Promise((resolve, reject) =>{
                var server = this.base() + `?m=${method}&q=${obj}`;
                try{
                    fetch(server)
                    .then(r => r.json())
                    .then(data => resolve(data))
                }catch(err){
                    reject(err);
                }
            })
        }


    }
    
</script>