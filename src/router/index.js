import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ResultGrid from '@/components/ResultGrid'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          components: {
            default: ResultGrid,
            footer: Footer
          }
        }
      ]
    }
  ]
})
