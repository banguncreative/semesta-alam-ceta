<template>
    <section class="pt-4 pb-4 extend-top mb-5">
        <div class="container">
            <div 
                v-for="items in choped"
                class="row"
            >
                <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
                    <div class="row">
                        <div 
                            v-for="content in items"
                            :class="column(n)"
                        >
                            <div class="p-3 text-center">
                                <h1 class="text-gradient text-primary"><span id="state1" countto="83">83</span>+</h1>
                                <h5 class="mt-3">{{ content.name }}</h5>
                                <p class="text-sm">{{ content.description }}</p>
                            </div>
                            <hr class="vertical dark">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        data: function(){
            return {
                n: 3
            }
        },
        props:{
            contents: Object
        },
        methods:{
            column(_length){
                var col = Math.round(12/_length);
                return `col-lg-${col} position-relative`
            },
            chop(obj, n){
                var new_arr = [];
                while(obj.length > 0){
                    new_arr.push(obj.splice(0,n))
                }
                console.log(new_arr)
                return new_arr;
            }
        },
        computed:{
            choped(){
                var n = this.n;
                return this.chop(this.contents, n)
            }
        }
    }
</script>