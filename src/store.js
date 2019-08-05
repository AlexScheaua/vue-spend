import Vue from 'vue'
import Vuex from 'vuex'
import database from './vspend-export.json'

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
    EDIT_TRANSACTION(state, data){
      state.monthData[data[0][2]][data[0][3]] = data[1]; //local
    },
    DELETE_TRANSACTION(state, link){
      delete state.monthData[link[2]][link[3]] //local
    },
    GENERATE_MONTH_DATA(state, date){
      let year = date.split("-")[0];
      let month = date.split("-")[1];

      state.monthData = database[year][month]
      

      // fetch(`https://vspend.firebaseio.com/${year}/${month}.json`)
      //   .then(res => res.json())
      //   .then(data => state.monthData = data);
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
    editTransaction({commit}, link ,data){
      commit('EDIT_TRANSACTION', link, data)
    },
    deleteTransaction({commit}, link){
      commit('DELETE_TRANSACTION', link)
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
