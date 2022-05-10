import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import './app.scss'

import Tab1 from './components/tab-1.vue'
import Tab2 from './components/tab-2.vue'
import Tab3 from './components/tab-3.vue'
import User from './components/user.vue'
import Home from './components/home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/tab1', component: Tab1 },
  { path: '/tab2', component: Tab2 },
  { path: '/tab3/:id', component: Tab3 },
  { path: '/user/:username', name: 'user', component: User}
]

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(router)

export default App
