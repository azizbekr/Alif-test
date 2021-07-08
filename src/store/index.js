import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    actions:{

    },
    mutations:{
        each4second: (state, payload) => state.interval4seconds = payload
    },
    state:{
        interval4seconds: null
    },
    getters:{
        timeInterval: state => 'background-color: #'+state.interval4seconds.substr(3,3)+state.interval4seconds.substr(0,3)
    }
})