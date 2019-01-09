import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentStyleColor: '#4169E1',
    },
    mutations: {
        changeStyleColor(state, config) {
            state.currentStyleColor = config;
        },
    }
});

export default store;