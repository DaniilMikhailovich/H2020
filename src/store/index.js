import Vue from 'vue'
import Vuex from 'vuex'
import hairArrayMale from './modules/hairArrayMale'
import hairArrayFemale from './modules/hairArrayFemale'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'',
    humanName:'',
    humanHead:'',
    humanShirt:'',
    humanPants:'',
    humanShoes:'',
    humanAccessories:''
    },
  getters:{
    GENDER: state => {
      return state.gender
    },
    HUMAN_NAME: state => {
      return state.humanName
    },
    HUMAN_HEAD: state => {
      return state.humanHead
    },
    HUMAN_SHIRT: state => {
      return state.humanShirt
    },
    HUMAN_PANTS: state => {
      return state.humanPants
    },
    HUMAN_SHOES: state => {
      return state.humanShoes
    },
    HUMAN_ACCESSORIES: state => {
      return state.humanAccessories
    }
  },
  mutations: {
    SET_GENDER: (state,payload) =>{
      state.gender = payload
    },
    SET_NAME: (state, payload) =>{
      state.humanName = payload
    },
    SET_HEAD: (state, payload) =>{
      state.humanHead = payload
    },
  },
  actions: {
    GET_GENDER: async (context, payload) => {
      context.commit('SET_GENDER', payload)
    },
    PUSH_NAME: async (context, payload) =>{
      context.commit('SET_NAME', payload)
    },
    PUSH_HEAD: async (context, payload) =>{
      context.commit('SET_HEAD', payload)
    }    
  },
  modules:{
    hairArrayMale,
    hairArrayFemale,
  },
})
