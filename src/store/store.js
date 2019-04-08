import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth.js'
import lists from './modules/lists.js'

Vue.use(Vuex)

export default new Vuex.Store({
  //используемые модули
  modules: {
    auth,
    lists
  },
})