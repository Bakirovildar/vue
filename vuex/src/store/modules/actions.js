export default  {
    incrementAsync(context, payload){
        setTimeout(()=> {
            context.commit('add', {
                value: payload.value,
                
            })
        }, 1000)
    }
}