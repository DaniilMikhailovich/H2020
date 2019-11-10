import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'',
    humanName:'',
    humanHead:'',
    humanShirt:'',
    humanPants:'',
    humanShoes:'',
    // скорее всего HumanAcces будет объектом в котором по мимо сылки прокидываем scale, x, y
    humanAccessories:''
    },
  getters:{
    GENDER: state => {
      return state.gender
    },
    HUMAN_NAME: state => {
      return state.humanName
    }
  },
  mutations: {
    SET_GENDER: (state,payload) =>{
      state.gender = payload
    },
    SET_NAME: (state, payload) =>{
      state.humanName = payload
    }
  },
  actions: {
    GET_GENDER: async (context, payload) => {
      context.commit('SET_GENDER', payload)
    },
    PUSH_NAME: async (context, payload) =>{
      context.commit('SET_NAME', payload)
    }
  }
})
