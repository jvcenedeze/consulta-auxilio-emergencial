<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row pt-4">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <div class="d-flex justify-content-center mt-3 mb-3">
            <h2>CONSULTA DE AUXÍLIO EMERGENCIAL</h2>
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
      totalPeoplePerCity: state => state.totalPeoplePerCity
    })
  }
}
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  max-height: 100%;
  background-color: #f3f2f7;
  /* background: linear-gradient(
    90deg,
    rgba(10, 71, 214, 1) 0%,
    rgba(0, 134, 237, 1) 100%
  ); */
}
</style>
