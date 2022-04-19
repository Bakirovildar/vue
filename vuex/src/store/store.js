import { createStore } from "vuex";
import counterModuls from './modules/counter'

export default createStore({
    modules: {
        counterModuls
    },

    state: {
        appTitle: 'Изучить Vuex'
    },

    getters: {
        titleApp(state) {
            return state.appTitle
        }
    }
})