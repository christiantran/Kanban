import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//cekanban.herokuapp.com/' : '//localhost:3000/';


vue.use(vuex)

var api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists:[],
    tasks:[],
    comments:[]
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
    },
    setTasks(state, tasks){
      state.tasks = tasks
    },
    setComments(state, comments){
      state.comments = comments
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
    // BOARD STUFF
    addBoard({dispatch, commit}, board){
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
    // LIST STUFF
    addList({dispatch, commit}, list){
      api.post('/lists', list)
      .then (res=>{
        dispatch('getLists', list.boardId)
      })
    },
    getLists({commit, dispatch}, boardId){
      api.get('/boards/'+boardId+ '/lists')
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

    viewList({commit, dispatch, state}, listId){
      api.get('/lists/'+listId)
      .then(res=>{
        commit(res.data)
      })
    },
    // TASK STUFF
    addTask({dispatch, commit}, task){
      api.post('/tasks', task)
      .then(res=>{
        dispatch('getTasks', task.listId)
      })
    },

    getTasks({commit, dispatch}, listId){
      api.get('/tasks/'+listId+ '/tasks')
      .then(res=>{
        commit('setTasks', res.data)
      })
    },

    removeTask({commit, dispatch, state}, task){
      api.delete('/tasks/'+task._id, task)
      .then(res=>{
        dispatch('getTasks')
      })
    },

    viewTask({commit, dispatch, state}, taskId){
      api.get('/tasks/'+taskId)
      .then(res=>{
        commit(res.data)
      })
    },

    // COMMENT STUFF
    addComment({dispatch, commit}, comment){
      api.post('/comments', comment)
      .then(res=>{
        dispatch('getComments')
      })
    },
    getComments({commit, dispatch}){
      api.get('/comments')
      .then(res=>{
        commit('setComments', res.data)
      })
    },
    removeComment({commit, dispatch, state}, comment){
      api.delete('/comments/'+comment._id, comment)
      .then(res=>{
        dispatch('getComments')
      })
    },
    viewComments({commit, dispatch, state}, commentId){
      api.get('/comments/'+commentId)
      .then(res=>{
        commit(res.data)
      })
    },




  }
})