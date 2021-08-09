<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row pt-4">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <router-link to="/buscar-auxilio">Buscar Auxílio</router-link>
          <router-link to="/buscar-cep">Buscar CEP</router-link>
          <router-view />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <List />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import List from '@/components/List.vue'

export default {
  components: {
    List
  }
}
</script>

<style>
#app {
  height: 100vh;
  background-color: #9e04f1;
}
</style>
