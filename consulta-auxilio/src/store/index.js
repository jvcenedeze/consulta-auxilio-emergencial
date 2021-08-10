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
  ibge: undefined,
  date: 202008,
  page: 1,
  totalPages: undefined,
  peoplePerCity: undefined
}

const actions = {
  async getIbge ({ commit }, cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    commit('setIbge', response.data)
  },
  getDate ({ commit }, date) {
    commit('setDate', date)
  },
  getPage ({ commit }, page) {
    commit('setPage', page)
  },
  async getPeople ({ dispatch, commit }, cep) {
    await dispatch('getIbge', cep)
    const response = await apiGov.get(`/api-de-dados/auxilio-emergencial-beneficiario-por-municipio?codigoIbge=${state.ibge}&mesAno=${state.date}&pagina=${state.page}`)
    commit('setPeoplePerCity', response.data)
  }
}

const mutations = {
  setIbge: (state, ibge) => state.ibge = ibge.ibge,
  setDate: (state, date) => state.date = date,
  setPage: (state, page) => state.page = page,
  setPeoplePerCity: (state, people) => state.peoplePerCity = people
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
