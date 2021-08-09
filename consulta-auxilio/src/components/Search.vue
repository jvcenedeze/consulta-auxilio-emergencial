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
          <input
            type="text"
            class="form-control"
            placeholder="Digite o CEP"
            v-model="cep"
            @keyup.enter.prevent="getPeople($event.target.value)"
          >
          <div class="input-group-append">
            <span class="input-group-text">
              <button
                class="btn"
                @click.prevent="getPeople(cep)"
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

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      cep: null
    }
  },
  methods: {
    ...mapActions([
      'getPeople'
    ])
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
    background-color: #c58de4;
    border: none;
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
