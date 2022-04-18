export default {
    install(app, options) {

        let current = 'ru'
        console.log(app, options)

        const changeLanguage = name => {
            current = name
            console.log(current)
        }

        app.config.globalProperties.$alert = text => {
            window.alert(text)
        }

        app.config.globalProperties.$ild14 = key => {
           return key.split('.').reduce((words, k) => {
               return words[k] || 'error'
           }, options[current])}
        app.provide('changeIld14', changeLanguage)
    }
}