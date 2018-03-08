import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  msg: ''
}

const getters = {
  message: function () {
    return state.msg
  }
}

const actions = {
  initMessage: ({ commit }) => {
    commit('setValue')
  }
}
const mutations = {
  save (state, value) {
    localStorage.saveval = value
    state.msg = value
  },
  setValue: () => {
    state.msg = localStorage.saveval
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
