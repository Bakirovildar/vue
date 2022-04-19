export default {
    increment(state) {
        state.counter++
    },

    add(state, payload) {
        state.counter += payload.value
    }
}