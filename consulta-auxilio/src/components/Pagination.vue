<template>
  <div class="row pt-4 pb-2">
    <div class="col-md-2"></div>
    <div class="col-12 col-md-8 d-flex flex-column justify-content-center">
      <div class="d-flex justify-content-center">
        <p>Total de {{ totalPeople }} beneficiários encontrados.</p>
      </div>
      <div class="btn-pagination">
        <ul>
          <li
            class="btn btn-page m-1"
            :class="{'btn-active': index == currentPage}"
            v-for="index in getTotalPages"
            :key="index"
            @click="setPage(index)"
          >
            {{ index }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

  computed: {
    ...mapState({
      totalAmount: state => state.totalPeoplePerCity.valor,
      totalPeople: state => state.totalPeoplePerCity.quantidadeBeneficiados,
      currentPage: state => state.page
    }),
    getTotalPages () {
      return Math.ceil(+(this.totalPeople / 15))
    }
  },
  methods: {
    ...mapActions([
      'getPeopleByButton'
    ]),
    setPage (index) {
      this.getPeopleByButton(index)
    }
  }
}
</script>

<style lang="scss">
$primary: #ab54db;
$secondary: #ab54db30;

.btn-page {
  background-color: $primary;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 0.8em;
  font-weight: 600;
}
.btn-active {
  background-color: $secondary;
  color: $primary;
}
</style>