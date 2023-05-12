import { createRouter, createWebHistory } from 'vue-router'
import MortysListView from "../views/MortysListView.vue"
import MortyPersonView from "../views/MortyPersonView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/mortys',
      name: 'mortys',
      component: MortysListView
    },
    {
      path: '/mortyPerson/:mortyPersonId',
      component: MortyPersonView,
    },
  ]
})

export default router
