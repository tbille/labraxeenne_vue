import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Accueil from '@/components/Accueil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
