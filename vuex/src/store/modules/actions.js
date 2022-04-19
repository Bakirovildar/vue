export default  {
    incrementAsync(context) {
        setTimeout(() => {
            context.commit('add')
        }, 1000)
    }
}