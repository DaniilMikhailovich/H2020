import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../views/First.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'firstScreen',
    component: First
  },
  {
    path: '/evolve',
    name: 'secondScreen',
    component: () => import(/* webpackChunkName: "secondscreen", webpackPrefetch: true */ '../views/Second.vue'),
    children: [
      {
        path: '1',
        name: 'firstEvolve',
        component: () => import(/* webpackChunkName: "firstEvolve", webpackPrefetch: true */'../components/firstEvolve.vue')
      },
      {
        path: '2',
        name: 'secondEvolve',
        component: () => import(/* webpackChunkName: "secondEvolve", webpackPrefetch: true */'../components/secondEvolve.vue')
      },
      {
        path: '3',
        name: 'thirdEvolve',
        component: () => import(/* webpackChunkName: "thirdEvolve", webpackPrefetch: true */'../components/thirdEvolve.vue')
      },
      {
        path: '4',
        name: 'fourthEvolve',
        component: () => import(/* webpackChunkName: "fourthEvolve", webpackPrefetch: true */'../components/fourthEvolve.vue')
      },
      {
        path: '5',
        name: 'fifthEvolve',
        component: () => import(/* webpackChunkName: "fifthEvolve", webpackPrefetch: true */'../components/fifthEvolve.vue')
      },
      {
        path: '6',
        name: 'sixthEvolve',
        component: () => import(/* webpackChunkName: "sixthEvolve", webpackPrefetch: true */'../components/sixthEvolve.vue')
      },
      {
        path: '7',
        name: 'seventhEvolve',
        component: () => import(/* webpackChunkName: "seventhEvolve", webpackPrefetch: true */'../components/seventhEvolve.vue')
      },
      {
        path: '8',
        name: 'eighthEvolve',
        component: () => import(/* webpackChunkName: "eighthEvolve", webpackPrefetch: true */'../components/eighthEvolve.vue')
      }
    ]
  },
  {
    path: '/create',
    name: 'thirdScreen',
    component: () => import(/* webpackChunkName: "thirdscreen", webpackPrefetch: true */'../views/Third.vue'),
    children: [
      {
        path:'personalisation',
        name:'personalisation',
        component: () => import(/* webpackChunkName: "personalisation", webpackPrefetch: true */'../components/configurator/personalisation.vue')
      },
      {
        path: 'clothes',
        name: 'clothes',
        component: () => import(/* webpackChunkName: "clothes", webpackPrefetch: true */'../components/configurator/clothes.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
