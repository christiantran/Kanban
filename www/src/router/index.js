import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import login from '@/components/login'
import Board from '@/components/Board'
import List from '@/components/List'
import Comments from '@/components/Comments'
// import Task from '@/components/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    path: '/Boards/:boardId',
    name: 'Board',
    component: Board
    },
    {
      path: '/Lists/:listId',
      name: 'List',
      component: List
    },
    {
      path: '/Comments/:commentId',
      name: 'Comment',
      component: Comment
    },
    {
    path: '/Task/:taskId',
    name: 'Task',
    component: List
    }

  ]
})
