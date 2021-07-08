<template>
    <p class="time">{{time}}</p>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "Home",
        data: () => ({
            time: new Date()
        }),
        methods: {
            commitTime(){
              this.$store.commit("each4second", this.time.split(':').join(""))
            },
            showTime(){
                let today = new Date()
                let hours = today.getHours()
                hours = hours < 10 ? '0'+hours: hours
                let minutes = today.getMinutes()
                minutes = minutes < 10 ? '0'+minutes: minutes
                let seconds = today.getSeconds()
                seconds = seconds < 10 ? '0'+seconds: seconds
                this.time = hours + ":" + minutes + ":" + seconds
            }
        },
        created(){ //this.time.split(':').join("")
            this.$store.commit("each4second", '000000')
            setInterval(this.showTime, 1000)
            setInterval(this.commitTime, 4000)
        }
    }
</script>

<style scoped>
    .time{
        font-size: 2em;
    }
</style>