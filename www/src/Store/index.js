import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var api = axios.create({
  baseURL: 'http://localhost:3000/api',
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
    user: {},
    boards: [],
    activeBoard: {},
    lists:[]
  },
  mutations: {
    setUser(state, user){
      state.user = user
    },
    deleteUser(state){
      state.user = {}
    },
    setBoards(state,boards){
      state.boards = boards
    },
    setActiveBoard(state, board){
      state.activeBoard = board
    },
    setLists(state, lists){
      state.lists = lists
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
        commit('setUser', res.data)
        router.push({name: 'Home'})
      })
    },
    authenticate({commit, dispatch}){
      auth.get('/authenticate')
        .then(res=>{
          commit('setUser', res.data)
          router.push({name: 'Home'})
        })
        .catch(res=>{
          console.log(res.data)
        })
    },
    addBoard ({dispatch, commit}, board){
      api.post('/boards', board)
      .then (res=>{
        dispatch('getBoards')
      })
    },
    getBoards({commit, dispatch}){
      api.get('/boards')
      .then(res=>{
        commit('setBoards', res.data)
      })
    },
    removeBoard({commit, dispatch, state}, board){
      api.delete('/boards/'+board._id, board)
      .then(res=>{
        dispatch('getBoards')
      })
    },
    viewBoard({commit, dispatch, state}, boardId){
      api.get('/boards/'+boardId)
      .then(res=>{
        commit('setActiveBoard', res.data)
      })
    },
    addList ({dispatch, commit}, list){
      api.post('/lists', list)
      .then (res=>{
        dispatch('getLists')
      })
    },
    getLists({commit, dispatch}){
      api.get('/lists')
      .then(res=>{
        commit('setLists', res.data)
      })
    },
    removeList({commit, dispatch, state}, list){
      api.delete('/lists/'+list._id, list)
      .then(res=>{
        dispatch('getLists')
      })
    },


    //APP STUFF

  }
})