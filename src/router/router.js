import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'

const Home = ()=> import('../components/home.vue')
const Login = () => import('../components/login.vue')

Vue.use(Router)

//проверка НЕ авторизирован ли пользователь
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    //переход к следующему хуку в цепочке
    next()
    return
  }
  //перенаправление на другой маршрут
  next('/')
}

//проверка авторизирован ли пользователь
const ifAuthenticated = (to, from, next) => {
  //если авторизирован
  if (store.getters.isAuthenticated) {
    if (store.getters.lists === '') {
      store.dispatch('GET_LISTS')
    }
    //переход к следующему хуку в цепочке
    next()
    return
  }
  //перенаправление на другой маршрут
  next('/login')
}

//хук beforeEnter вызывается до подтверждения пути
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/tab:name?',
      name: 'Tab',
      component: Home,
      props: (route) => ({name: route.query.name}),
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
  ],
})