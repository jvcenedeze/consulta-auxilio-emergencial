<template>
  <div class="row pt-4 pb-2">
    <div class="col-md-2"></div>
    <div class="col-12 col-md-8 d-flex flex-column justify-content-center">
      <div class="d-flex justify-content-center">
        <p>Total de {{ totalPeople }} beneficiários encontrados.</p>
      </div>
      <div class="btn-pagination d-flex justify-content-center align-items-center">
        <paginate
          v-model="page"
          :pageCount="getTotalPages"
          :clickHandler="setPage"
          :hide-prev-next="true"
          prev-text='<i class="fas fa-chevron-left"></i>'
          next-text='<i class="fas fa-chevron-right"></i>'
        >
        </paginate>
      </div>
    </div>
  </div>
</template>

<script>

import Paginate from 'vuejs-paginate'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Paginate
  },
  data () {
    return {
      page: 1
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
    async setPage () {
      this.setLoading(true)
      await this.getPeopleByButton(this.page)
      this.setLoading(false)
    }
  }
}
</script>

<style lang="scss">
$primary: #ab54db;
$secondary-str: #ab54db70;
$secondary: #ab54db30;

.btn-pagination {
  margin-left: -30px;
  ul {
    display: flex;
    list-style: none;
    li {
      background-color: $primary;
      width: 33px;
      height: 33px;
      border-radius: 0.8em;
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      text-decoration: none;
      color: white;
      a {
        text-decoration: none;
        color: white;
      }
    }
    li.active {
      background-color: $secondary-str;
      color: $primary;
    }
    li.disabled {
      background-color: $secondary;
      a {
        text-decoration: none;
        color: white;
        cursor: default;
      }
    }
  }
}
</style>