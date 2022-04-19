export default {
    addCount(state, payload) {
        state.counter += payload.value
    },
    add(state) {
        state.counter += 100
    }
}