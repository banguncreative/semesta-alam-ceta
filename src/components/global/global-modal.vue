<template>
    <div class="modal fade" tabindex="-1" role="dialog" :aria-labelledby="label" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 95%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalTitle }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="border: none">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            modalTitle:String,
            label: String,
            modalTitle: String
        }
    }
</script>