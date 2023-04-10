<template>
    <li class="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
        <a 
            class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
        >
            <a :href="url">{{ title }}</a>
            <img 
                v-if="!url"
                src="../../public/assets/img/down-arrow-white.svg" 
                alt="down-arrow" 
                class="arrow ms-1 d-lg-block d-none"
            >
            <img 
                v-if="!url"
                src="../../public/assets/img/down-arrow-dark.svg" 
                alt="down-arrow" 
                class="arrow ms-1 d-lg-none d-block"
            >
        </a>
        <slot></slot>
    </li>
</template>

<script>
    export default {
        props:{
            title: String,
            url: String
        },
        methods:{
            sloting(_confirm){
                return _confirm? this.slots !== null : this.slots;
            }
        }
    }
</script>