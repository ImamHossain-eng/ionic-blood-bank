import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/pages/HomePage.vue'
// import DonorPage from '../views/pages/DonorPage.vue'
import DonorRegisterPage from '../views/pages/DonorRegisterPage.vue'
import DonorListPage from '../views/pages/DonorListPage.vue'
import DonorShowPage from '../views/pages/DonorShowPage.vue'




const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/blood_donor',
    redirect: '/donor/list'
  },
  {
    path: '/donor/registration',
    component: DonorRegisterPage
  },
  {
    path: '/donor/list',
    component: DonorListPage
  },
  {
    path: '/donor/:id',
    component: DonorShowPage
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
