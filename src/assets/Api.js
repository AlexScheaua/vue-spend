export default {
  url: 'https://vspend.firebaseio.com',
  collection: '',

  authUser(credentials){
    return fetch('/auth', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
  },

  getMonth(year, month) {
    return fetch(`${this.url}/${this.collection}/${year}/${month}.json`)
      .then(res => res.json())
  },

  addTransaction(data) {
    return fetch(`${this.url}/${this.collection}/${data.date[0]}/${data.date[1]}/${data.date[2]}/.json`,{
        method: 'POST',
        body: JSON.stringify(data.newItem)
      })
      .then(res => res.json())
  },

  editTransaction(link, data) {
    return fetch(`${this.url}/${this.collection}/${link[0]}/${link[1]}/${link[2]}/${link[3]}.json`,{
      method: 'PUT',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  },

  deleteTransaction(link) {
    return fetch(`${this.url}/${this.collection}/${link[0]}/${link[1]}/${link[2]}/${link[3]}.json`,{
      method: 'DELETE'
    })
    .then(res => res.json())
  }
}