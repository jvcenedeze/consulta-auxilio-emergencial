<template>
  <div class="container-fluid">
    <div class="d-flex flex-column justify-content-center mt-4">
      <div class="row">
        <div class="col-12">
          <div
            class="d-flex justify-content-center name-city"
            v-if="city"
          >
            <h3>{{city.municipio.nomeIBGE}} - {{city.municipio.uf.sigla}}</h3>
          </div>
        </div>
      </div>
      <div
        class="row"
        v-if="people"
      >
        <div
          class="col-12"
          v-if="people.length === 0"
        >
          <div class="alert alert-warning d-flex justify-content-center pb-1">
            <p>Nenhum resultado encontrado!</p>
          </div>
        </div>
        <div
          class="col-12"
          v-for="person in people"
          :key="person.id"
        >
          <div class="card mt-4 shadow">
            <ul class="list-group list-group-flush">
              <li class="list-group-item mb-0 pb-0">
                <div class="d-flex align-items-center">
                  <i class="fas fa-user fa-fw"></i>
                  <p class="mx-2 font-600">Beneficiário: </p>
                  <p>{{ person.beneficiario.nome }}</p>
                </div>
              </li>
              <li class="list-group-item mb-0 pb-0">
                <div class="d-flex align-items-center">
                  <i class="fas fa-id-card fa-fw"></i>
                  <p class="mx-2 font-600">CPF: </p>
                  <p>{{ person.beneficiario.cpfFormatado }}</p>
                </div>
              </li>
              <li class="list-group-item mb-0 pb-0">
                <div class="d-flex align-items-center">
                  <i class="fas fa-user fa-fw"></i>
                  <p class="mx-2 font-600">Responsável: </p>
                  <p>{{ person.responsavelAuxilioEmergencial.nome }}</p>
                </div>
              </li>
              <li class="list-group-item mb-0 pb-0">
                <div class="d-flex align-items-center">
                  <i class="fas fa-id-card fa-fw"></i>
                  <p class="mx-2 font-600">CPF: </p>
                  <p>{{ person.responsavelAuxilioEmergencial.cpfFormatado }}</p>
                </div>
              </li>
              <li class="list-group-item mb-0 pb-0">
                <div class="d-flex align-items-center">
                  <i class="fas fa-hands-helping fa-fw"></i>
                  <p class="mx-2 font-600">Enquadramento: </p>
                  <p>{{ person.enquadramentoAuxilioEmergencial }}</p>
                </div>
              </li>
              <li class="list-group-item mb-0 pb-0">
                <div class="row">
                  <div class="col-6 d-flex align-items-center">
                    <i class="fas fa-money-bill fa-fw"></i>
                    <p class="mx-2 font-600">Valor(R$): </p>
                    <p>{{ person.valor }}</p>
                  </div>
                  <div class="col-6 d-flex align-items-center">
                    <i class="fas fa-calculator fa-fw"></i>
                    <p class="mx-2 font-600">Parcela: </p>
                    <p>{{ person.numeroParcela }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="row"
        v-if="isLoading"
      >
        <div class="col">
          <div class="d-flex justify-content-center">
            <div
              class="spinner-border spinner-custom my-5"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      ibge: state => state.ibge,
      people: state => state.peoplePerCity,
      city: state => state.totalPeoplePerCity,
      isLoading: state => state.isLoading
    })
  }
}
</script>

<style lang="scss">
$primary: #ab54db;

.name-city {
  h3 {
    font-weight: 600;
  }
}
.spinner-custom {
  color: $primary;
  height: 3rem;
  width: 3rem;
}

.card {
  border-radius: 1em;
  ul {
    li:first-child {
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
    }
    li:last-child {
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
    }
    li {
      padding-top: 15px;
      p.font-600 {
        font-weight: 600;
      }
      i {
        margin-top: -16px;
      }
    }
  }
}
</style>
