import firebase from 'firebase'

// инициализируем состояние
const state = {
  uid: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')).uid : '',
  status: localStorage.getItem('data') ? 'success' : '',
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false,
}

const getters = {
  isAuthenticated: state => !!state.uid,
  user: state => state.user,
  status: state => state.status,
  uid: state => state.uid,
}

const actions = {
  AUTH_REQUEST ({commit, dispatch}, data) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(response => {
          localStorage.setItem('data', JSON.stringify(response.user))
          dispatch('CHECK_ACCESS', response.user.uid)
          commit('AUTH_SUCCESS', response.user.uid)
          resolve(response)
        }, response => {
          // console.log(response)
          localStorage.clear()
          if (response.code === "auth/wrong-password" || response.code === "auth/user-not-found")
          //вызываем мутацию-статус ошибки
            commit('AUTH_ERROR', response)
          reject(response)
        })
    })
  },
  CHECK_ACCESS ({ commit }, data) {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('users').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
              if (doc.id === data) {
                localStorage.setItem('user', JSON.stringify(doc.data()))
                commit('CHECK_ACCESS', doc.data())
              }
            })
            resolve(snapshot)
          }, (response) => {
            reject(response)
          }
        )
    })
  },
  // выход
  AUTH_LOGOUT ({ commit }){
    return new Promise((resolve) => {
      firebase
        .auth()
        .signOut()
      // вызываем мутацию изменения значения токена в хранилище
      commit('AUTH_LOGOUT')
      commit('CLEAR_LISTS')
      localStorage.clear()
      resolve()
    })
  },
}

const mutations = {
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, resp) {
    state.status = 'success'
    state.uid = resp
  },
  AUTH_ERROR (state) {
    state.status = 'error'
  },
  AUTH_LOGOUT (state){
    state.uid = ''
    state.status = ''
    state.user = ''
  },
  CHECK_ACCESS (state, resp) {
    state.user = resp
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
