<template>
    <table data-toggle="table" class="table table-striped" style="">
        <thead class="bg-primary text-white">
            <tr>
                <th 
                    v-for="head in arr_header"
                >
                    {{ head }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(dat, i) in dats"
                :key="i"
            >
                <td style="max-width: 60px;">{{ i+1 }}</td>
                <td
                    v-if="isArray"
                    class="text-start text-break"
                    style="word-wrap: break-word;"
                >{{ dat }}</td>

                <td
                    v-if="!isArray"
                    v-for="key in Object.keys(dat)"
                    class="text-start"
                    style="word-wrap: break-word;"
                >{{ dat[key] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default{
        data: function (){
            return{

            }
        },
        props:{
            dats: Object,
            cust_header: Object
        },
        computed:{
            isArray(){
                return this.dats instanceof Array;
            },
            isObject(){
                return this.dats instanceof Object;
            },
            arr_header(){
                if(this.isArray){
                    var header = this.cust_header? this.cust_header : ["content"];
                    header.unshift("#");
                    
                    return header;
                }else if(this.isObject){
                    var header = Object.keys(this.dats);
                    header.unshift("#");

                    return header;
                }
            }
        }
    }
</script>

<style scoped>
/* Table Styles */

.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>