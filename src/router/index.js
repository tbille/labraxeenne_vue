import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/content/accueil/Accueil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Accueil
    }
  ]
})
