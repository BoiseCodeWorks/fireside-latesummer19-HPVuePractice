import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'



Vue.use(Vuex)

let characterApi = axios.create({
  baseURL: 'https://www.potterapi.com/v1/characters?key=$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW'
})

let housesAPI = axios.create({
  baseURL: 'https://www.potterapi.com/v1/houses?key=$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW'
})

let basicAPI = axios.create({
  baseURL: 'https://www.potterapi.com/v1/houses/'
})
let Key = '?key=$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW'

export default new Vuex.Store({
  state: {
    houses: [],
    activeHouse: {},
    students: [],
    activeStudents: []
  },
  mutations: {
    setHouses(state, houses) {
      state.houses = houses
    },
    setActiveHouse(state, house) {
      state.activeHouse = house
    }

    //TODO write mutationto commit students
  },
  actions: {

    async getHouses({ commit }) {
      try {
        let res = await housesAPI.get('')
        console.log(res.data)
        commit('setHouses', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    setActiveHouse({ commit }, payload) {
      commit('setActiveHouse', payload)
      router.push({ name: 'ActiveHouse', params: { houseId: payload._id } })

    },

    async getActiveHouse({ commit }, payload) {
      try {
        let res = await basicAPI.get(payload + Key)
        console.log("successss")
        commit('setActiveHouse', res.data)
      } catch (error) {
        console.log(error)
      }
    }

    //TODO get all students 

  }
})
