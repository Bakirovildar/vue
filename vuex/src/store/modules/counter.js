export default {
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
        incrementAsync(context, payload){
            setTimeout(()=> {
                context.commit('add', {
                    value: payload.value,
                    
                })
            }, 1000)
        }
    },

    getters: {
        counter(state)  {
            return state.counter
        },
        doubleCounter(state) {
            return state.counter * 2
        }
    }
}