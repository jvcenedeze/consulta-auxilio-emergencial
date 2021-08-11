import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiGov = axios.create({
  baseURL: 'http://api.portaldatransparencia.gov.br',
  headers: {
    "chave-api-dados": "d4c7a363175ba7f2c757e5b4d299d527"
  }
})

Vue.use(Vuex)

const state = {
  cep: undefined,
  ibge: undefined,
  date: 202001,
  page: 1,
  isLoading: false,
  totalPeoplePerCity: undefined,
  peoplePerCity: undefined,
  error: undefined
}

const actions = {
  async getIbge ({ commit }, cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    commit('setIbge', response.data)
  },
  async getTotalPeople ({ commit }) {
    const response = await apiGov.get(`/api-de-dados/auxilio-emergencial-por-municipio?codigoIbge=${state.ibge}&mesAno=${state.date}&pagina=1`)
    commit('setTotalPeople', response.data[0])
  },
  getDate ({ commit }, date) {
    commit('setDate', date)
  },
  getPage ({ commit }, page) {
    commit('setPage', page)
  },
  setPeopleToUndefined ({ commit }) {
    commit('setPeoplePerCity', undefined)
  },
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  },
  async getPeople ({ dispatch, commit }, cep) {
    try {
      dispatch('setPeopleToUndefined')
      await dispatch('getIbge', cep)
      await dispatch('getTotalPeople')
      const response = await apiGov.get(`/api-de-dados/auxilio-emergencial-beneficiario-por-municipio?codigoIbge=${state.ibge}&mesAno=${state.date}&pagina=${state.page}`)
      commit('setPeoplePerCity', response.data)
    } catch (error) {
      commit('setError', error)
    }
  },
  async getPeopleByButton ({ dispatch, commit }, page) {
    try {
      dispatch('setPeopleToUndefined')
      await dispatch('getPage', page)
      const response = await apiGov.get(`/api-de-dados/auxilio-emergencial-beneficiario-por-municipio?codigoIbge=${state.ibge}&mesAno=${state.date}&pagina=${state.page}`)
      commit('setPeoplePerCity', response.data)
    } catch (error) {
      commit('setError', error)
    }
  }
}

const mutations = {
  setIbge: (state, ibge) => state.ibge = ibge.ibge,
  setLoading: (state, payload) => state.isLoading = payload,
  setDate: (state, date) => state.date = date,
  setPage: (state, page) => state.page = page,
  setTotalPeople: (state, totalPeople) => state.totalPeoplePerCity = totalPeople,
  setPeoplePerCity: (state, people) => state.peoplePerCity = people,
  setError: (state, error) => state.error = error
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
