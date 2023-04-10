<template>
    <div class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages8">
        <div class="d-none d-lg-block">
            <template v-for="item in items">
                <div class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
                    <div class="d-inline-block">
                        <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                            <!-- CNA BE ICON -->
                        </div>
                    </div>
                    <!-- TITLE OF GROUP -->
                    {{ item.title }}
                </div>
                <a  v-for="children in item.childrens"
                    :href="children.url" 
                    class="dropdown-item border-radius-md"
                >
                    <span class="ps-3">{{children.title}}</span>
                </a>
            </template>
        </div>
        <div class="d-lg-none">
            <template v-for="item in items">
                <div class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
                    <div class="d-inline-block">
                        <div class="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                            <!-- CNA BE ICON -->
                        </div>
                    </div>
                    <!-- TITLE OF GROUP -->
                    {{ item.title }}
                </div>
                <a  v-for="children in item.childrens"
                    :href="children.url" 
                    class="dropdown-item border-radius-md"
                >
                    <span class="ps-3">{{children.title}}</span>
                </a>
            </template>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {

            }
        },
        props :{
            items: Object
        }
    }
</script>