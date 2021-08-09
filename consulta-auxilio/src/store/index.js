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
  peoplePerCity: [{
    "id": 251048650,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.692.758-**",
      "nis": "20313874357",
      "nome": "JESSICA ROCHA DA SILVA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.692.758-**",
      "nis": "20313874357",
      "nome": "JESSICA ROCHA DA SILVA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 253735322,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.313.278-**",
      "nis": "20051342558",
      "nome": "ALANA CARLA BONINI DIAS"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.313.278-**",
      "nis": "20051342558",
      "nome": "ALANA CARLA BONINI DIAS"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 254436606,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.594.588-**",
      "nis": "12426874866",
      "nome": "JURACI ALVES DE OLIVEIRA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.461.798-**",
      "nis": "20141278891",
      "nome": "ROBERTO ALVES DE OLIVEIRA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 258352621,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.295.008-**",
      "nis": "10618632902",
      "nome": "ILDETE ANTUNES DA GAMA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.295.008-**",
      "nis": "10618632902",
      "nome": "ILDETE ANTUNES DA GAMA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 258352748,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.930.198-**",
      "nis": "20324285773",
      "nome": "FABIANA PAULA LOPES"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.930.198-**",
      "nis": "20324285773",
      "nome": "FABIANA PAULA LOPES"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 263363721,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.532.978-**",
      "nis": "20738970004",
      "nome": "MARIA DE FATIMA VICENTE"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.532.978-**",
      "nis": "20738970004",
      "nome": "MARIA DE FATIMA VICENTE"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 271562050,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.817.568-**",
      "nis": "12272014676",
      "nome": "EDIVALDO CORDEIRO DOS SANTOS"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.178.538-**",
      "nis": "20909014439",
      "nome": "ODILIA DE OLIVEIRA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 271562320,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.000.000-**",
      "nis": "20066531696",
      "nome": "ANDRESA VITORIA DE OLIVEIRA SILVA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.745.838-**",
      "nis": "16004312089",
      "nome": "ANDREIA DE OLIVEIRA DA SILVA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 272428728,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.809.898-**",
      "nis": "12692391146",
      "nome": "ADRIANA FERNANDES RODRIGUES"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.809.898-**",
      "nis": "12692391146",
      "nome": "ADRIANA FERNANDES RODRIGUES"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 272433208,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.787.738-**",
      "nis": "13151533026",
      "nome": "MARIA CLARA CARDOSO LUCAS"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.631.301-**",
      "nis": "12363770864",
      "nome": "EVA CARDOSO LUCAS"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 272439358,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.560.541-**",
      "nis": "12765011178",
      "nome": "GEOVANIA DE FATIMA ALMEIDA CAMPOS"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.560.541-**",
      "nis": "12765011178",
      "nome": "GEOVANIA DE FATIMA ALMEIDA CAMPOS"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 272444332,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.742.028-**",
      "nis": "16180330833",
      "nome": "GEISE ELLEN CAETANO MATOS DE SOUZA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.742.028-**",
      "nis": "16180330833",
      "nome": "GEISE ELLEN CAETANO MATOS DE SOUZA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 272446821,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.807.438-**",
      "nis": "20325487051",
      "nome": "FERNANDA MORALES SANTANA HERNANDES"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.807.438-**",
      "nis": "20325487051",
      "nome": "FERNANDA MORALES SANTANA HERNANDES"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  },
  {
    "id": 295849986,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.501.728-**",
      "nis": "20615388277",
      "nome": "NAHYARA CLARA DE SOUZA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.501.728-**",
      "nis": "20615388277",
      "nome": "NAHYARA CLARA DE SOUZA"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 1200,
    "numeroParcela": "5ª"
  },
  {
    "id": 299951334,
    "mesDisponibilizacao": "08/2020",
    "beneficiario": {
      "cpfFormatado": "***.000.000-**",
      "nis": "20319547900",
      "nome": "JENNIFER AGHATA RODRIGUES DA SILVA"
    },
    "responsavelAuxilioEmergencial": {
      "cpfFormatado": "***.937.768-**",
      "nis": "20319547897",
      "nome": "GISLAINE CRISTINA RODRIGUES"
    },
    "municipio": {
      "codigoIBGE": "3546603",
      "nomeIBGE": "SANTA FÉ DO SUL",
      "codigoRegiao": "3",
      "nomeRegiao": "SUDESTE",
      "pais": "BRASIL",
      "uf": {
        "sigla": "SÃO PAULO",
        "nome": "SP"
      }
    },
    "situacaoAuxilioEmergencial": "",
    "enquadramentoAuxilioEmergencial": "BOLSA FAMILIA",
    "valor": 600,
    "numeroParcela": "5ª"
  }]
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
