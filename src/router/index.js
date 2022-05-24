import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page1 from '../pages/Page1.vue' 
import Page2 from '../pages/Page2.vue' 
import Page3 from '../pages/Page3.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page1
    },
    {
      path: '/pagina2',
      name: 'pagina2',
      component: Page2
    },
    {
      path: '/pagina3',
      name: 'pagina3',
      component: Page3
    }
  ]
})

export default router
