import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            counter: 1
        }
    },
    
    mutations: {
        increment(state) {
            state.counter++
        },

        add(state, payload) {
            state.counter += payload.value
        }
    },

    actions: {
        incrementAsync(context){
            setTimeout(()=> {
                context.commit('add', {
                    value: 100
                })
            }, 1000)
        }
    },

    getters: {
        counter(state)  {
            return state.counter
        }
    }
})