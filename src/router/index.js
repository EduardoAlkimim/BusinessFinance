import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/SignIn.vue'
import Forgot from '../views/ForgotPassword.vue'

const routes = [
  { path: '/Login', name: 'Login', component: Login, meta: { hideTopNav: true } },
  { path: '/Forgot', name: 'Forgot', component: Forgot, meta: { hideTopNav: true } },
  { path: '/:pathMatch(.*)*', redirect: '/Login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
