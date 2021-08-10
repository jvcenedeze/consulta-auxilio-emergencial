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
              id="date-picker"
              format="MMMM/yyyy"
              :language="ptBR"
              :disabled-dates="state.disabledDates"
              minimum-view="month"
              @closed="updateDate"
            ></datepicker>
            <span class="input-group-text">
              <button
                class="btn"
                @click="verifyParameters(cep)"
              >
                <i class="fas fa-search fa-2x"></i>
              </button>
            </span>
          </div>
        </div>
        <div
          class="alert alert-danger d-flex justify-content-center mt-3"
          v-if="error"
        >
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
import { ptBR } from 'vuejs-datepicker/dist/locale'
import { TheMask } from 'vue-the-mask'
import { mapActions } from 'vuex'

export default {
  components: {
    Datepicker,
    TheMask
  },
  data () {
    return {
      ptBR,
      state: {
        date: new Date(2020, 0),
        disabledDates: {
          to: new Date(2020, 0),
          from: new Date(2021, 11)
        }
      },
      cep: '',
      error: null,
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'getDate',
      'getPeople'
    ]),
    getMonth () {
      return (this.state.date.getMonth() + 1)
    },
    getYear () {
      return this.state.date.getFullYear()
    },
    updateDate () {
      const formatedMonth = this.getMonth() < 10 ? '0' + this.getMonth().toString() : this.getMonth().toString()
      const formatedDate = +(this.getYear().toString() + formatedMonth)
      this.getDate(formatedDate)
    },
    verifyParameters (cep) {
      if (this.cep.length == 8) {
        this.error = null
        this.executeAction(cep)
      } else {
        this.error = 'Coloque 8 dígitos no campo CEP.'
      }
    },
    async executeAction (cep) {
      this.isLoading = true
      await this.getPeople(cep)
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss">
$primary: #ab54db;
$secondary: #ab54db30;
$secondary-str: #ab54db80;

.btn:focus {
  box-shadow: none;
}
.form-control {
  background-color: #eceaf3;
  font-size: 14px;
  font-weight: 500;
}
.form-control:focus {
  box-shadow: none;
  border: 1px solid #ced4da;
  background-color: #eceaf3;
}

.input-group-prepend,
.input-group-append {
  span {
    background-color: $secondary;
    border: none;
    transition: all 0.1s;
    i {
      color: $primary;
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
.input-group-append {
  span:active {
    background-color: $primary;
    i {
      color: white;
    }
  }
}
#date-picker {
  height: 44px;
  background-color: #eceaf3;
  border: 1px solid #ced4da;
}
#date-picker:focus-visible {
  outline: none;
  border: 1px solid #ced4da;
}
.vdp-datepicker {
  span {
    background-color: #eceaf3;
  }
  span:active {
    background-color: #eceaf3;
  }
}
.vdp-datepicker__calendar {
  span.cell.selected {
    background-color: $primary;
    color: white;
  }
}
.vdp-datepicker__calendar {
  span.cell.selected:hover {
    background-color: $secondary-str;
  }
}
.vdp-datepicker__calendar {
  header {
    span.prev:not(.disabled):hover,
    span.next:not(.disabled):hover,
    span.up:not(.disabled):hover {
      background-color: #eceaf3;
    }
  }
}
.vdp-datepicker__calendar {
  span.cell:not(.blank):not(.disabled).day:hover,
  span.cell:not(.blank):not(.disabled).month:hover,
  span.cell:not(.blank):not(.disabled).year:hover {
    border: 1px solid #ced4da;
  }
}
</style>
