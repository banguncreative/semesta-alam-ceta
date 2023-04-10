<template>
    <div class="d-flex justify-content-center">
        <a v-for="social in socials"
            :href="social.url"
            :title="social.title"
            class="text-center"
            style="min-width: 50px;"
        >
            <i :class="socialClass(social.type)"></i>
        </a>
    </div>
</template>
<script>
import { def } from '@vue/shared';

    export default{
        data: function(){
            return {

            }
        },
        props:{
            socials: Object
        },
        methods:{
            socialClass(_type){
                var value = {
                    "fa":true,
                    "text-lg":true,
                    "text-white": true,
                    "m-auto": true,
                };

                value[`fa-${_type}`] = true;
                return value;
            }
        }
    }
</script>