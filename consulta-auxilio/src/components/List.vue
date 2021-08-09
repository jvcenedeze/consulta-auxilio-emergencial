<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-center mt-4">
      {{ ibge }}

    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      ibge: state => state.ibge,
      people: state => state.peoplePerCity
    })
  }
}
</script>