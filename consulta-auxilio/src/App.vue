<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row pt-4">
        <div class="col-md-2"></div>
        <div class="col-12 col-md-8">
          <router-link to="/buscar-auxilio">Buscar Auxílio</router-link> |
          <router-link to="/buscar-cep">Não sei meu CEP</router-link>
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
  min-height: 100vh;
  max-height: 100%;
  background: linear-gradient(
    90deg,
    rgba(10, 71, 214, 1) 0%,
    rgba(0, 134, 237, 1) 100%
  );
}
</style>
