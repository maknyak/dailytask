import Vue from 'vue'
import Router from 'vue-router'
import TaskPage from './views/TaskPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'taskPage',
      component: TaskPage
    }
  ]
})
