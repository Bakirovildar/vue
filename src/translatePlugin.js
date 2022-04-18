export default {
    install(app, options) {
        console.log(app, options)
        app.config.globalProperties.$alert = text => {
            window.alert(text)
        }
    }
}