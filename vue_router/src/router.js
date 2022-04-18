import { createRouter, createWebHistory } from "vue-router";
import AppLogin from './views/AppLogin.vue'
import AppDashboard from './views/AppDashboard'
import AppForget from './views/AppForget'
import AppMail from './views/AppMail'
import AppEmailBody from './components/AppEmailBody'
import notFound from './components/notFound'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component: AppLogin, alias: '/'},
        {path: '/mail', component: AppMail, children: [
            {path: ':mailId', component: AppEmailBody, props: true}
        ]},
        {path: '/dashboard', component: AppDashboard},
        {path: '/forget', component: AppForget},
        {path: '/:notFound(.*)', component: notFound}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})