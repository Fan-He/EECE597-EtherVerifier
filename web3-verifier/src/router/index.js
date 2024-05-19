import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '../views/AccountView.vue'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView
  },
  {
    path: '/board',
    name: 'board',
    component: BoardView
  }, 
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }, 
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
