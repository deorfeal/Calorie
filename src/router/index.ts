import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/Calorie/'),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/calorie',
      name: 'calorie',
      component: () => import('../views/Calorie.vue')
    },
    {
      path: '/meal',
      name: 'meal',
      component: () => import('../views/Meal.vue')
    }
  ]
})

export default router
