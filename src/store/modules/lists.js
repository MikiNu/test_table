import firebase from 'firebase'

// инициализируем состояние
const state = {
  lists: '',
  statusLists: ''
}

const getters = {
  lists: state => state.lists,
  statusLists: state => state.statusLists
}

const actions = {
  GET_LISTS ({ state, commit }){
    return new Promise((resolve, reject) => {
      if (state.statusLists === ''){
        commit('SET_STATUS_LISTS', 'loading')
      }
      firebase
        .firestore()
        .collection('for-table').get()
        .then((snapshot) => {
            const mass = []
            snapshot.forEach((doc) => {
              let lists = Object.assign({}, doc.data())
              mass.push(lists)
            })
            if (mass) {
              commit('GET_LISTS', mass)
            }
            if (state.statusLists !== 'success'){
              commit('SET_STATUS_LISTS', 'success')
            }
            resolve(snapshot)
          }, (response) => {
            commit('SET_STATUS_LISTS', 'error')
            reject(response)
          }
        )
    })
  },
}

const mutations = {
  GET_LISTS (state, data) {
    state.lists = data
  },
  CLEAR_LISTS (state) {
    state.statusLists = ''
    state.lists = ''
  },
  SET_STATUS_LISTS (state, status) {
    state.statusLists = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
