import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    transactions: {}
  },
  mutations: {
    AUTH_USER(state, userName) {
      state.user = userName;
    },
    SET_NEW_TRANSACTION(state, data) {
// TO BE MOVED TO BACKEND
      if(data.category){
        data.category = data.category + "/"
      }else{
        data.category = '';
      }
      
      fetch(`https://vspend.firebaseio.com/${data.date[0]}/${data.date[1]}/${data.date[2]}/${data.type}/${data.category}.json`,{
        method: 'POST',
        body: JSON.stringify(data.newItem)
      })
    }
  },
  actions: {
    authUser({ commit }, userName) {
      commit('AUTH_USER', userName);
    },
    setNewTransaction({ commit }, data) {
      commit('SET_NEW_TRANSACTION', data)
    }
  },
  getters: {
    getUserName(state) {
      return state.user;
    }
  }
})
