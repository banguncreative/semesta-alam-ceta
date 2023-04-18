<template>
    <div class="container">
        <h3>Hubungi kami melalui Email</h3>
        <span class="badge bg-warning text-dark mb-3">Form is under construction</span>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="name" aria-label="name" disabled>
        </div>

        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="email" aria-label="email" id="formemail" disabled>
        </div>

        <hr>

        <label for="form-topic">Pilih lingkup konsultasi</label>
        <div class="input-group mb-3">
            <select class="form-select" id="form-topic" disabled>
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</template>


<script>
    export default{
        data: function(){
            return {
                name: "",
                email: "",
                topic:""
            }
        }
    }
</script>