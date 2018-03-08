<template>
  <div>
      <h1>{{currentVal}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/vuex/store'

export default {
  computed: mapGetters({
    currentVal: 'message'
  }),
  created () {
    this.$store.dispatch('initMessage')
  },
  store
}

</script>
