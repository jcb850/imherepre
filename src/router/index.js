import Vue from 'vue'
import Router from 'vue-router'
import bottles from '../views/bottles/bottles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: bottles
    }
  ]
})
