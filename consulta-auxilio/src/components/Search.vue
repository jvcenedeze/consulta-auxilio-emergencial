<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="input-group shadow">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-map-marked-alt fa-2x"></i>
            </span>
          </div>
          <the-mask
            class="form-control"
            placeholder="Digite o CEP"
            :mask="'#####-###'"
            v-model="cep"
            @keyup.native.enter="verifyParameters(cep)"
          />
          <div class="input-group-append d-flex">
            <datepicker
              v-model="state.date"
              name="uniquename"
            ></datepicker>
            <button
              class="btn"
              @click="verifyParameters(cep)"
            >
              <i class="fas fa-search fa-2x"></i>
            </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
import { TheMask } from 'vue-the-mask'
import { mapActions } from 'vuex'

export default {
  components: {
    Datepicker,
    TheMask
  },
  data () {
    return {
      cep: null,
      error: null
    }
  },
  methods: {
    ...mapActions([
      'getPeople'
    ]),
    verifyParameters (cep) {
      this.cep.length == 8 ? this.getPeople(cep) : this.error = 'Por favor coloque 8 dígitos no campo CEP.'
    }
  }
}
</script>

<style lang="scss">
.btn:focus {
  box-shadow: none;
}
.form-control:focus {
  box-shadow: none;
  border: 1px solid #ced4da;
}

.input-group-prepend,
.input-group-append {
  span {
    background-color: #0009ed50;
    border: none;
    i {
      color: #d7d6f5;
    }
  }
}
.input-group-prepend {
  span {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.input-group-append {
  span {
    height: 44px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
  }
}
.input-group-append:active {
  span {
    background-color: #b972df;
  }
}
</style>
