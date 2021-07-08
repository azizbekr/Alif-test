<template>
    <div class="box" :style="timeInterval">

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Hall",
        computed: mapGetters(["timeInterval"])
    }
</script>

<style scoped>
    .box{
        width: 300px;
        height: 300px;
        margin: 10% auto;
    }
</style>