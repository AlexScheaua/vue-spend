import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    monthData:{},
    date: ''
  },
  mutations: {
    AUTH_USER(state, userName) {
      state.user = userName;
    },
    // TO BE MOVED TO BACKEND
    SET_NEW_TRANSACTION(state, data) {
      fetch(`https://vspend.firebaseio.com/${data.date[0]}/${data.date[1]}/${data.date[2]}/.json`,{
        method: 'POST',
        body: JSON.stringify(data.newItem)
      })
    },
    GENERATE_MONTH_DATA(state, date){
      let year = date.split("-")[0];
      let month = date.split("-")[1];

      fetch(`https://vspend.firebaseio.com/${year}/${month}.json`)
        .then(res => res.json())
        .then(data => state.monthData = data);
    },
    SET_DATE(state, data){
      state.date = data;
    }
  },
  actions: {
    authUser({ commit }, userName) {
      commit('AUTH_USER', userName);
    },
    setNewTransaction({ commit }, data) {
      commit('SET_NEW_TRANSACTION', data)
    },
    generateMonthData({commit},data){
      commit('GENERATE_MONTH_DATA', data)
    },
    setDate({commit}, data){
      commit('SET_DATE', data)
    }
  },
  getters: {
    getUserName(state) {
      return state.user;
    },
    monthData(state){
      return state.monthData;
    }
  }
})
