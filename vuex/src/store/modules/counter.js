import mutations from "./mutations"
import actions from "./actions"

export default {
    namespaced: true,

    state() {
        return {
            counter: 1
        }
    },  
    mutations,
    actions,
    getters: {
        counter(state)  {
            return state.counter
        },
        doubleCounter(state) {
            return state.counter * 2
        }
    }
}