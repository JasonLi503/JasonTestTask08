<template>
  <div>
      <input type="text" id="inpurt1" v-model ="currentVal">
      <input type="text" id="inpurt1" v-model ="currentVal">

      <button @click="$store.commit('save', currentVal)">save</button>
  </div>
</template>

<script>

import store from '@/vuex/store'

export default {
  computed: {
    currentVal: {
      get: function () {
        return this.$store.state.msg
      },
      set: function (value) {
        this.$store.state.msg = value
      }
    }
  },
  created () {
    this.$store.dispatch('initMessage')
  },
  store
}

</script>
