import Vue from 'vue'
import Vuex from 'vuex'
import Api from './assets/Api'
import database from './vspend-export.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: ''
    },
    monthData: {},
    date: '',
    categories: [
      { text: "Shopping", value: "shopping" },
      { text: "Fuel", value: "fuel" },
      { text: "Clothes", value: "clothes" },
      { text: "Rent", value: "rent" },
      { text: "Bills", value: "bills" },
      { text: "Gifts", value: "gifts" },
      { text: "General", value: "general" },
      { text: "Travel", value: "travel" },
      { text: "Owed", value: "owed" },
      { text: "Sport", value: "sport" },
      { text: "Going out", value: "goingOut" },
      { text: "Eating out", value: "eatingOut" },
      { text: "Holidays", value: "holidays" },
      { text: "Health", value: "health" },
    ],
    categoryColor: {
      Actual: "color: var(--danger)",
      Planned: "color: var(--warning)",
      Income: "color: var(--success)",
      Savings: "color: var(--info)"
    },
    userColor: {
      Andreea: "background: #680084bb",
      Alex: "background: #0041ffbb"
    },
    currency: localStorage.vSpendCurrency || 'Lei'
  },
  mutations: {

    SET_NEW_TRANSACTION(state, data) {
      Api.addTransaction(data);
    },
    EDIT_TRANSACTION(state, data) {
      Api.editTransaction(data[0],data[1])
        .then(state.monthData[data[0][2]][data[0][3]] = data[1])//local
    },
    DELETE_TRANSACTION(state, link) {
      Api.deleteTransaction(link)
        .then(delete state.monthData[link[2]][link[3]])//local
    },
    GENERATE_MONTH_DATA(state, date) {
      let year = date.split("-")[0];
      let month = date.split("-")[1];
      
      Api.getMonth(year, month)
        .then(data => state.monthData = data);
      // DEV
      // state.monthData = database[year][month];
    },
    SET_DATE(state, data) {
      state.date = data;
    }
  },
  actions: {
    authUser({ commit }, credentials) {
      return Api.authUser(credentials)
        .then((collection) => {
          this.state.user.name = credentials.name;
          this.state.user.collection = collection;
          return collection;
        })
      // DEV
      // this.state.user.name = credentials.name;
      // this.state.user.collection = 'alex_andre';
      // return this.state.user.collection;
    },
    setNewTransaction({ commit }, data) {
      commit('SET_NEW_TRANSACTION', data)
    },
    editTransaction({ commit }, link, data) {
      commit('EDIT_TRANSACTION', link, data)
    },
    deleteTransaction({ commit }, link) {
      commit('DELETE_TRANSACTION', link)
    },
    generateMonthData({ commit }, data) {
      commit('GENERATE_MONTH_DATA', data)
    },
    setDate({ commit }, data) {
      commit('SET_DATE', data)
    }
  },
  getters: {
    getUserName(state) {
      return state.user.name;
    },
    monthData(state) {
      return state.monthData;
    },
    getUserColor(state) {
      return state.userColor;
    },
    getCategoryColor(state) {
      return state.categoryColor;
    },
    getCategories(state) {
      return state.categories;
    },
    getCurrency(state) {
      return state.currency
    }
  }
})
