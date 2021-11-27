import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/components/login')
    },
    {
      path:'/manage',
      name: 'manage',
      component:()=>import("../components/manage")
    },
    {
      path: '/query',
      name: 'query',
      component:()=>import("../components/queryAddress")
    },
    {
      path: '/team',
      name:'team',
      component:()=>import("../components/queryTeam")
    }
  ],
mode:'history'
})
