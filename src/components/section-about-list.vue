<template>
    <div class="p-3 info-horizontal">
        <div class="icon icon-shape rounded-circle bg-gradient-primary shadow text-center" >
            <i :class="iconClasses(ico)"></i>
        </div>
        <div class="description ps-3">
            <p class="mb-0">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data : function (){
            return {

            }
        },
        props: {
            text: String,
            ico: String
        },
        methods:{
            iconClasses(_type){
                var val = {
                    "bi": true
                }
                if(_type) val[`bi-${_type}`] = true;
                return val;
            }
        }
    }
</script>