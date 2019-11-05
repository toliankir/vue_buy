import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '312abc',
    count: 0
  },
  getters: {
    getTest (state) {
      return state.test
    },
    getCount (state) {
      return state.count
    }
  },
  mutations: {
    updateCount (state, count) {
      state.count = count
    }
  },
  actions: {
    setCount (ctx) {
      setInterval(() => {
        ctx.commit('updateCount', ctx.state.count + 1)
      }, 1000)
    }
  }
})
