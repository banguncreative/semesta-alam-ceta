<script setup>
    import globalTable from './global/global-table.vue';
</script>
<template>
    <section class="container-fluid">
        <div 
            v-if="exp_data"
            v-for="experience in exp_data.experiences"
            class="row"
        >
            <div class="col-lg-2">
            <div class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2" style="top: 100px">
                <p class="text-end p-0 m-0">Pengalaman</p>
                <h3 class="fw-light text-end">{{ experience.sheetName }}</h3 >
            </div>
            </div>
            <div class="col-lg-10" style="overflow-x:auto;">
            <globalTable
                :dats="experience.data"
            ></globalTable>
            <!-- <BootstrapTable
                :data="[1,2,3,4,5]"
            ></BootstrapTable> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        props:{
            exp_data: Object
        },
    }
</script>