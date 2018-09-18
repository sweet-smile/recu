import Vue from 'vue'
import Router from 'vue-router'
import Job from '@/components/Job'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Job',
      component: Job
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
