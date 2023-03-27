import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Carousel from '../views/Carousel.vue'
import Slide from '../views/Slide.vue'
import Magasin from '../views/Magasin.vue'



const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/magasin',
    name: 'magasin',
    component: Magasin
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: Carousel
  },
  {
    path: '/slide',
    name: 'slide',
    component: Slide
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
