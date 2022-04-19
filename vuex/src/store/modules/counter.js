import mutations from "./mutations"
import actions from "./actions"

export default {
    namespaced: true,

    state() {
        return {
            counter: 0
        }
    },
    mutations,
    actions,
    getters: {
        count(state) {
            return state.counter
        }
    }
}