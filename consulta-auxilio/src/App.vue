<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row pt-2">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <div class="d-flex flex-column text-center my-3 header-h2">
            <h4>CONSULTA DE</h4>
            <h2>AUXÍLIO EMERGENCIAL</h2>
          </div>
          <!-- <div class="d-flex justify-content-around">
            <router-link to="/buscar-auxilio">Buscar Auxílio</router-link> |
            <router-link to="/buscar-cep">Não sei meu CEP</router-link>
          </div> -->
          <router-view />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <List />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <template v-if="totalPeoplePerCity">
            <Pagination />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import List from '@/components/List.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    List,
    Pagination
  },
  computed: {
    ...mapState({
      peoplePerCity: state => state.peoplePerCity,
      totalPeoplePerCity: state => state.totalPeoplePerCity,
      isLoading: state => state.isLoading
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  max-height: 100%;
  background-color: #f3f2f7;
  .header-h2 {
    h4 {
      font-weight: 600;
    }
    h2 {
      font-weight: 800;
    }
  }
}
</style>
