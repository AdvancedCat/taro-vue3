import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './app.scss'

import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'
import Tab3 from './components/Tab3.vue'
import User from './components/User.vue'
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'

const routes = [
  { path: '/', component: Home },
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 },
  { path: '/tab3/:id', component: Tab3 },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes // `routes: routes` 的缩写
})

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(router)

export default App
