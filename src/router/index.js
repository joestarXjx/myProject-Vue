import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/AppIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import MaterialIndex from '../components/material/MaterialIndex';
import ForumIndex from '../components/forum/ForumIndex';
import Post from '../components/forum/Post';
import MessageIndex from '../components/message/MessageIndex';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 下面都是固定的写法
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex
        },
        {
          path: '/material',
          name: 'Material',
          component: MaterialIndex
        },
        {
          path: '/forum',
          name: 'Forum',
          component: ForumIndex,
        },
        {
          path: '/forum/post',
          name:'Post',
          component: Post
        },
        {
          path: '/message',
          name: 'Message',
          component: MessageIndex
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
