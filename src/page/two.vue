<template>
    <div>
       <p class="two_page">One page --{{ name }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name : 'name 2'
               
            }
        }
    }
</script>

<style>
    .two_page{
        font-size:14px;
        font-color:#blue;
    }
</style>
