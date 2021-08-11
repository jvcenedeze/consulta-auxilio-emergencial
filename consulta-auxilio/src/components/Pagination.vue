<template>
  <div class="row pt-4 pb-2">
    <div class="col-md-2"></div>
    <div class="col-12 col-md-8 d-flex flex-column justify-content-center">
      <div class="d-flex justify-content-center">
        <p>Total de {{ totalPeople }} beneficiários encontrados.</p>
      </div>
      <div class="btn-pagination d-flex justify-content-center align-items-center">
        <button
          class="btn btn-page m-1 d-flex justify-content-center align-items-center"
          :class="{'btn-active': index == currentPage}"
          v-for="index in pages"
          :key="index"
          :disabled="isLoading"
          @click="setPage(index)"
        >{{ index }}</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      pages: []
    }
  },
  computed: {
    ...mapState({
      totalAmount: state => state.totalPeoplePerCity.valor,
      totalPeople: state => state.totalPeoplePerCity.quantidadeBeneficiados,
      currentPage: state => state.page,
      isLoading: state => state.isLoading
    }),
    getTotalPages () {
      return Math.ceil(+(this.totalPeople / 15))
    }
  },
  methods: {
    ...mapActions([
      'getPeopleByButton',
      'setLoading'
    ]),
    showNumberOfPages () {
      const totalPages = this.getTotalPages
      if (totalPages < 8) {
        for (let i = 1; i <= totalPages; i++) {
          this.pages.push(i)
        }
      } else {
        switch (this.currentPage) {
          case (this.currentPage <= 4):
            for (let i = 1; i <= 6; i++) {
              this.pages.push(i)
            }
            this.pages.push('...')
            this.pages.push(totalPages)
            break;
          case this.currentPage >= (this.currentPage - 3):
            this.pages.push(1)
            this.pages.push('...')
            for (let i = (totalPages - 5); i <= totalPages; i++) {
              this.pages.push(i)
            }
            break;
          default:
            this.pages.push(1)
            this.pages.push('...')
            this.pages.push(this.currentPage - 2)
            this.pages.push(this.currentPage - 1)
            this.pages.push(this.currentPage)
            this.pages.push(this.currentPage + 1)
            this.pages.push(this.currentPage + 2)
            this.pages.push('...')
            this.pages.push(totalPages)
            break;
        }
      }
      console.log(this.pages)
    },
    async setPage (index) {
      this.setLoading(true)
      await this.getPeopleByButton(index)
      this.pages = []
      this.showNumberOfPages(index)
      this.setLoading(false)
    }
  },
  mounted () {
    this.showNumberOfPages(this.getTotalPages)
  }
}
</script>

<style lang="scss">
$primary: #ab54db;
$secondary: #ab54db30;

.btn-page {
  background-color: $primary;
  color: white;
  width: 33px;
  height: 33px;
  border-radius: 0.8em;
  font-size: 0.9rem;
  font-weight: 600;
}
.btn-active {
  background-color: $secondary;
  color: $primary;
}
</style>