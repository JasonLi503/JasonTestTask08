import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SaveVal from '@/components/SaveVal'
import DisplayVal from '@/components/DisplayVal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: SaveVal
    },
    {
      path: '/saveval',
      component: SaveVal
    },
    {
      path: '/displayval',
      component: DisplayVal
    }
  ]
})
