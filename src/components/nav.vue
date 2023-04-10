<template>
<!-- Navbar Transparent -->
    <nav class="navbar navbar-expand-lg position-absolute top-0 w-100 shadow-none py-3  navbar-transparent" id="navbar">
        <div class="container p-1">
            <a 
                class="navbar-brand font-weight-bolder text-lg nav-link" 
                :href="profile.url" 
                rel="tooltip" 
                :title="profile.description" 
                data-placement="bottom" 
                target="_blank"
                style="position: relative;"
                
            >
                <div
                    class="main-logo inblk" 
                    style="background-image: url('../assets/img/logos/brand_vector.png'); height: 23px;filter:grayscale(1) brightness(100)"
                ></div>
                <div class="inblk m-1">
                    {{ profile.name }}
                </div>
            </a>
            <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </span>
            </button>
            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
            <ul class="navbar-nav navbar-nav-hover w-100">
                <li 
                    v-for="link in page_links"
                    class="nav-item ms-lg-auto">
                    <a class="nav-link nav-link-icon me-2" :href="link.url">
                        <p class="d-inline text-sm z-index-1 font-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" :title="link.title">{{ link.text }}</p>
                    </a>
                </li>
                <slot></slot>
                <li class="nav-item ms-lg-auto">
                    <!-- <a class="nav-link nav-link-icon me-2" href="https://github.com/creativetimofficial/soft-ui-design-system" target="_blank">
                        <i class="fa fa-github me-1"></i>
                        <p class="d-inline text-sm z-index-1 font-bold" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Star us on Github">Github</p>
                    </a> -->
                </li>
                <li class="nav-item my-auto ms-3 ms-lg-0">
                    <a v-if="profile.tel" class="navbar-brand  btn btn-outline-white  nav-link btn-round mb-0 me-1 mt-2 mt-md-0" :href="getTel(profile.tel)">
                        <i class="fa fa-phone me-2"></i>
                        ( {{ profile.tel }} )
                    </a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<script>
    export default{
        props:{
            profile: Object,
            page_links: Object
        },
        methods:{
            getTel(_tel){
                return "tel://"+_tel;
            }
        }
    }
</script>