<template>
<section class="pt-4 pb-4 extend-top mb-5" id="count-stats">
    <div class="container">
        <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
            <div class="row">
            <div class="col-md-4 position-relative">
                <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"><span id="state1" :countto="documents">00</span>+</h1>
                <h5 class="mt-3">Documents Served</h5>
                <p class="text-sm">Dari Rintek, Pertek, Pemantauan, Amdal, dan Perencanaan Lingkungan</p>
                </div>
                <hr class="vertical dark">
            </div>
            <div class="col-md-4 position-relative">
                <div class="p-3 text-center">
                <h1 class="text-gradient text-primary"> <span id="state2" :countto="vendors">00</span>+</h1>
                <h5 class="mt-3">Affiliated Client</h5>
                <p class="text-sm">Terdiri atas beragam Instansi dan Perusahaan Swasta</p>
                </div>
                <hr class="vertical dark">
            </div>
            <div class="col-md-4">
                <div class="p-3 text-center">
                <h1 class="text-gradient text-primary" id="state3" :countto="experience()">0</h1>
                <h5 class="mt-3">Years Experience</h5>
                <p class="text-sm">Dipercaya dan terus berupaya meningkatkan kualitas kinerja</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>

<script>
    export default{
        props:{
            vendors: Number,
            documents: Number,
            founded: Number
        },
        methods:{
            experience(){
                return Math.round(new Date().getFullYear() - this.founded)
            }
        },
        mounted(){
            // countup.js
            // get the element to animate
            var element = document.getElementById('count-stats');
            var elementHeight = element.clientHeight;

            // listen for scroll event and call animate function

            
            document.addEventListener('DOMContentLoaded', animate);
            document.addEventListener('scroll', animate);

            // check if element is in view
            function inView() {
                // get window height
                var windowHeight = window.innerHeight;
                // get number of pixels that the document is scrolled
                var scrollY = window.scrollY || window.pageYOffset;
                // get current scroll position (distance from the top of the page to the bottom of the current viewport)
                var scrollPosition = scrollY + windowHeight;
                // get element position (distance from the top of the page to the bottom of the element)
                var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

                // is scroll position greater than element position? (is element in view?)
                if (scrollPosition > elementPosition) {
                return true;
                }

                return false;
            }

            var animateComplete = true;
            // animate element when it is in view
            function animate() {

                // is element in view?
                if (inView()) {
                if (animateComplete) {
                    if (document.getElementById('state1')) {
                    const countUp = new CountUp('state1', document.getElementById("state1").getAttribute("countTo"));
                    if (!countUp.error) {
                        countUp.start();
                    } else {
                        console.error(countUp.error);
                    }
                    }
                    if (document.getElementById('state2')) {
                    const countUp1 = new CountUp('state2', document.getElementById("state2").getAttribute("countTo"));
                    if (!countUp1.error) {
                        countUp1.start();
                    } else {
                        console.error(countUp1.error);
                    }
                    }
                    if (document.getElementById('state3')) {
                    const countUp2 = new CountUp('state3', document.getElementById("state3").getAttribute("countTo"));
                    if (!countUp2.error) {
                        countUp2.start();
                    } else {
                        console.error(countUp2.error);
                    };
                    }
                    if (document.getElementById('state4')) {
                    const countUp2 = new CountUp('state4', document.getElementById("state4").getAttribute("countTo"));
                    if (!countUp2.error) {
                        countUp2.start();
                    } else {
                        console.error(countUp2.error);
                    };
                    }
                    animateComplete = false;
                }
                }
            }

            if (document.getElementById('typed')) {
                var typed = new Typed("#typed", {
                stringsElement: '#typed-strings',
                typeSpeed: 90,
                backSpeed: 90,
                backDelay: 200,
                startDelay: 500,
                loop: true
                });
            }
        }
    }
</script>