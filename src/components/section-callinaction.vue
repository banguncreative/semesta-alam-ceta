<template>
    <div class="outer m-0 p-0 bg-dark">
        <div class="container text-light" style="min-height: 65px;">
            <div class="row">
                <div class="col-lg-7 fs-2">
                    Call in Action
                </div>
                <div class="col-lg-auto">
                    <h2 
                        class="fs-1 text-end"
                        style="color:unset; transform: perspective(500px) rotateY(324deg) skewX(346deg) rotateZ(358deg) translateY(-3px);"
                    >
                        +{{ chopPhone(profile.tel, 3) }}
                    </h2>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-warning">
            <div class="row">
                <div class="col-lg-auto text-lg">
                    Complain
                </div>
                <div class="col-lg-auto">
                    <h2>+{{ chopPhone(profile.complain, 3) }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return{

            }
        },
        props:{
            profile:Object
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