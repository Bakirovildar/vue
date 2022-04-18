import { createRouter, createWebHistory } from "vue-router";
import AppLogin from './views/AppLogin.vue'
import AppDashboard from './views/AppDashboard'
import AppForget from './views/AppForget'
import AppMail from './views/AppMail'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: AppLogin, alias: '/'},
        {path: '/mail', component: AppMail},
        {path: '/dashboard', component: AppDashboard},
        {path: '/forget', component: AppForget}

    ]
})