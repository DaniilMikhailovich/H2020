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
    component: () => import(/* webpackChunkName: "secondscreen", webpackPreload: true */ '../views/Second.vue'),
    children: [
      {
        path: '1',
        name: 'firstEvolve',
        component: () => import(/* webpackChunkName: "firstEvolve", webpackPrefetch: 998 */'../components/firstEvolve.vue')
      },
      {
        path: '2',
        name: 'secondEvolve',
        component: () => import(/* webpackChunkName: "secondEvolve", webpackPrefetch: 997 */'../components/secondEvolve.vue')
      },
      {
        path: '3',
        name: 'thirdEvolve',
        component: () => import(/* webpackChunkName: "thirdEvolve", webpackPrefetch: 996 */'../components/thirdEvolve.vue')
      },
      {
        path: '4',
        name: 'fourthEvolve',
        component: () => import(/* webpackChunkName: "fourthEvolve", webpackPrefetch: 995 */'../components/fourthEvolve.vue')
      },
      {
        path: '5',
        name: 'fifthEvolve',
        component: () => import(/* webpackChunkName: "fifthEvolve", webpackPrefetch: 994 */'../components/fifthEvolve.vue')
      },
      {
        path: '6',
        name: 'sixthEvolve',
        component: () => import(/* webpackChunkName: "sixthEvolve", webpackPrefetch: 993 */'../components/sixthEvolve.vue')
      },
      {
        path: '7',
        name: 'seventhEvolve',
        component: () => import(/* webpackChunkName: "seventhEvolve", webpackPrefetch: 992 */'../components/seventhEvolve.vue')
      },
      {
        path: '8',
        name: 'eighthEvolve',
        component: () => import(/* webpackChunkName: "eighthEvolve", webpackPrefetch: 991 */'../components/eighthEvolve.vue')
      }
    ]
  },
  {
    path: '/create',
    name: 'thirdScreen',
    component: () => import(/* webpackChunkName: "thirdscreen", webpackPrefetch: 990 */'../views/Third.vue'),
    children: [
      {
        path:'personalisation',
        name:'personalisation',
        component: () => import(/* webpackChunkName: "personalisation", webpackPrefetch: 983 */'../components/configurator/personalisation.vue')
      },
      {
        path: 'man_clothes',
        name: 'man_clothes',
        component: () => import(/* webpackChunkName: "clothes", webpackPrefetch: 980 */'../components/configurator/manClothes.vue')
      },
      {
        path: 'women_clothes',
        name: 'women_clothes',
        component: () => import(/* webpackChunkName: "clothes", webpackPrefetch: 980 */'../components/configurator/womenClothes.vue')
      },
      {
        path:'just_a_little',
        name:'just_a_little',
        component: () => import(/* webpackChunkName: "justALittle", webpackPrefetch: 964 */'../components/configurator/justALittle.vue')
      },
      {
        path: 'proportion_skills',
        name: 'proportion_skills',
        component: () => import(/* webpackChunkName: "proportionSkills", webpackPrefetch: 963 */'../components/configurator/proportionSkills.vue')
      },
      {
        path: 'hard_skill',
        name: 'hard_skill',
        component: () => import(/* webpackChunkName: "hardSkill", webpackPrefetch: 962 */'../components/configurator/hardSkill.vue')

      },
      {
        path: 'soft_skill',
        name: 'soft_skill',
        component: () => import(/* webpackChunkName: "softSkill", webpackPrefetch: 960 */'../components/configurator/softSkill.vue'),
        children:[
          {
            path: 'finish',
            name: 'finish',
            component: () => import(/* webpackChunkName: "finish", webpackPrefetch: 959 */'../components/configurator/finish.vue'),
          }
        ]
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
