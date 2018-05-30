import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var api = axios.create({
  baseURL: 'localhost:3000/',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: 'http://localhost:3000/auth/',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user){
      state.user = user
    },
    deleteUser(state){
      state.user = {}
    }
  },
  actions: {

    //AUTH STUFF
    login({commit, dispatch}, loginCredentials){
      auth.post('login', loginCredentials)
        .then(res=>{
          commit('setUser', res.data)
          router.push({name: 'Home'})
        })
    },
    logout({commit, dispatch}){
      auth.delete('/logout')
      .then(res=>{
        commit('deleteUser')
        router.push({name: 'login'})
      })
    },
    register({commit, dispatch}, userData){
      auth.post('register', userData)
      .then(res=>{
        commit('register')
        router.push({name: 'login'})
      })
    },
    authenticate({commit, dispatch}){
      api.get('/authenticate')
        .then(res=>{
          commit('setUser', res.data)
          router.push({name: 'Home'})
        })
        .catch(res=>{
          console.log(res.data)
        })
    }

    //APP STUFF

  }
})