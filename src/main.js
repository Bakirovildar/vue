import { createApp } from 'vue'
import App from './App.vue'
import translatePlugin from './translatePlugin'

const app = createApp(App)

const ru = {
    type: {
        title: 'Анкета Vue разработчика'
    }
}

const en = {
    type: {
        title: 'Questionnaire Vue developer'
    }
}

app.use(translatePlugin, {ru, en})

app.mount('#app')
